import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { sendOrderConfirmation } from "@/lib/email";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_CART_ITEMS = 30;
const MAX_ITEM_QUANTITY = 50;
const MAX_TOTAL_QUANTITY = 100;

interface CartItemInput {
    slug: string;
    quantity: number;
}

interface CreateOrderBody {
    name?: unknown;
    phone?: unknown;
    email?: unknown;
    cart?: unknown;
}

interface SessionUser {
    id?: string;
    role?: string;
    email?: string | null;
}

function normalizeText(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
    return (
        email.length <= MAX_EMAIL_LENGTH &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
}

function isValidPhone(phone: string): boolean {
    const digits = phone.replace(/\D/g, "");

    return digits.length >= 9 && digits.length <= 15;
}

function isValidCartItem(value: unknown): value is CartItemInput {
    if (!value || typeof value !== "object") {
        return false;
    }

    const item = value as CartItemInput;

    return (
        typeof item.slug === "string" &&
        item.slug.trim().length > 0 &&
        item.slug.trim().length <= 150 &&
        typeof item.quantity === "number" &&
        Number.isInteger(item.quantity) &&
        item.quantity >= 1 &&
        item.quantity <= MAX_ITEM_QUANTITY
    );
}

export async function POST(request: NextRequest) {
    try {
        const session = await auth();
        const sessionUser = session?.user as SessionUser | undefined;

        const body = (await request.json()) as CreateOrderBody;

        const customerName = normalizeText(body.name);
        const customerPhone = normalizeText(body.phone);
        const requestedEmail = normalizeText(body.email).toLowerCase();

        if (
            customerName.length < 2 ||
            customerName.length > MAX_NAME_LENGTH
        ) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Введите корректное имя",
                },
                {
                    status: 400,
                },
            );
        }

        if (!isValidPhone(customerPhone)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Введите корректный номер телефона",
                },
                {
                    status: 400,
                },
            );
        }

        if (
            requestedEmail &&
            !isValidEmail(requestedEmail)
        ) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Введите корректный email",
                },
                {
                    status: 400,
                },
            );
        }

        if (
            !Array.isArray(body.cart) ||
            body.cart.length === 0 ||
            body.cart.length > MAX_CART_ITEMS
        ) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Корзина пуста или содержит слишком много позиций",
                },
                {
                    status: 400,
                },
            );
        }

        if (!body.cart.every(isValidCartItem)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Корзина содержит некорректные данные",
                },
                {
                    status: 400,
                },
            );
        }

        /*
         * Объединяем одинаковые товары.
         * Цене и названию из браузера не доверяем.
         */
        const quantityBySlug = new Map<string, number>();

        for (const item of body.cart) {
            const slug = item.slug.trim();
            const currentQuantity = quantityBySlug.get(slug) ?? 0;
            const nextQuantity = currentQuantity + item.quantity;

            if (nextQuantity > MAX_ITEM_QUANTITY) {
                return NextResponse.json(
                    {
                        success: false,
                        error: `Слишком большое количество товара: ${slug}`,
                    },
                    {
                        status: 400,
                    },
                );
            }

            quantityBySlug.set(slug, nextQuantity);
        }

        const totalQuantity = Array.from(
            quantityBySlug.values(),
        ).reduce((sum, quantity) => sum + quantity, 0);

        if (totalQuantity > MAX_TOTAL_QUANTITY) {
            return NextResponse.json(
                {
                    success: false,
                    error: "В заказе слишком большое количество товаров",
                },
                {
                    status: 400,
                },
            );
        }

        const slugs = Array.from(quantityBySlug.keys());

        /*
         * Получаем реальные названия, цены и наличие из базы данных.
         */
        const products = await prisma.product.findMany({
            where: {
                slug: {
                    in: slugs,
                },
            },
            select: {
                slug: true,
                name: true,
                priceKgs: true,
                inStock: true,
            },
        });

        if (products.length !== slugs.length) {
            const foundSlugs = new Set(
                products.map((product) => product.slug),
            );

            const missingSlugs = slugs.filter(
                (slug) => !foundSlugs.has(slug),
            );

            return NextResponse.json(
                {
                    success: false,
                    error: `Некоторые товары не найдены: ${missingSlugs.join(
                        ", ",
                    )}`,
                },
                {
                    status: 400,
                },
            );
        }

        const unavailableProducts = products.filter(
            (product) => !product.inStock,
        );

        if (unavailableProducts.length > 0) {
            return NextResponse.json(
                {
                    success: false,
                    error: `Нет в наличии: ${unavailableProducts
                        .map((product) => product.name)
                        .join(", ")}`,
                },
                {
                    status: 409,
                },
            );
        }

        const orderItems = products.map((product) => ({
            productSlug: product.slug,
            name: product.name,
            price: product.priceKgs,
            quantity: quantityBySlug.get(product.slug) ?? 1,
        }));

        const totalPrice = orderItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        );

        /*
         * userId берём только из серверной сессии.
         * userId из браузера не принимается.
         */
        const userId = sessionUser?.id ?? null;

        const customerEmail =
            requestedEmail ||
            sessionUser?.email?.trim().toLowerCase() ||
            null;

        const order = await prisma.order.create({
            data: {
                customerName,
                customerPhone,
                customerEmail,
                totalPrice,
                userId,
                status: "PENDING",

                items: {
                    create: orderItems,
                },
            },

            select: {
                id: true,
                totalPrice: true,
                createdAt: true,
                items: {
                    select: {
                        name: true,
                        quantity: true,
                        price: true,
                    },
                },
            },
        });

        if (customerEmail) {
            await sendOrderConfirmation({
                id: order.id,
                customerName,
                customerEmail,
                totalPrice: order.totalPrice,
                items: order.items,
            });
        }

        /*
         * Не возвращаем клиенту телефон, email,
         * userId и другие лишние данные заказа.
         */
        return NextResponse.json(
            {
                success: true,
                orderId: order.id,
                totalPrice: order.totalPrice,
            },
            {
                status: 201,
            },
        );
    } catch (error: unknown) {
        console.error("Ошибка создания заказа:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Не удалось создать заказ. Попробуйте ещё раз.",
            },
            {
                status: 500,
            },
        );
    }
}

/*
 * ADMIN:
 *   получает все заказы либо фильтрует по userId.
 *
 * USER:
 *   получает только свои заказы.
 *
 * ГОСТЬ:
 *   не получает список заказов.
 */
export async function GET(request: NextRequest) {
    try {
        const session = await auth();
        const sessionUser = session?.user as SessionUser | undefined;

        if (!sessionUser?.id) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Необходима авторизация",
                },
                {
                    status: 401,
                },
            );
        }

        const isAdmin = sessionUser.role === "ADMIN";
        const requestedUserId =
            new URL(request.url).searchParams.get("userId");

        const where = isAdmin
            ? requestedUserId
                ? {
                    userId: requestedUserId,
                }
                : {}
            : {
                userId: sessionUser.id,
            };

        const orders = await prisma.order.findMany({
            where,

            select: {
                id: true,
                createdAt: true,
                updatedAt: true,
                customerName: true,
                customerPhone: true,
                customerEmail: true,
                status: true,
                totalPrice: true,
                city: true,
                street: true,
                building: true,
                apartment: true,
                deliveryNotes: true,
                userId: true,

                items: {
                    select: {
                        id: true,
                        productSlug: true,
                        name: true,
                        price: true,
                        quantity: true,
                    },
                },

                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                        phone: true,
                    },
                },
            },

            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({
            success: true,
            orders,
        });
    } catch (error: unknown) {
        console.error("Ошибка получения заказов:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Не удалось получить заказы",
            },
            {
                status: 500,
            },
        );
    }
}