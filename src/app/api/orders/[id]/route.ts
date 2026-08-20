import { NextRequest, NextResponse } from "next/server";
import { OrderStatus } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function isOrderStatus(value: unknown): value is OrderStatus {
    return (
        typeof value === "string" &&
        Object.values(OrderStatus).includes(
            value as OrderStatus,
        )
    );
}

// ==========================================
// GET — получить один заказ
// ==========================================

export async function GET(
    _request: NextRequest,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    },
) {
    try {
        const { id } = await params;

        if (!id?.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Некорректный ID заказа",
                },
                {
                    status: 400,
                },
            );
        }

        const order = await prisma.order.findUnique({
            where: {
                id,
            },

            include: {
                items: true,

                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        phone: true,
                    },
                },
            },
        });

        if (!order) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Заказ не найден",
                },
                {
                    status: 404,
                },
            );
        }

        return NextResponse.json({
            success: true,
            order,
        });
    } catch (error: unknown) {
        console.error(
            "Ошибка получения заказа:",
            error,
        );

        return NextResponse.json(
            {
                success: false,
                error: "Не удалось получить заказ",
            },
            {
                status: 500,
            },
        );
    }
}

// ==========================================
// PATCH — изменить статус заказа
// ==========================================

export async function PATCH(
    request: NextRequest,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    },
) {
    try {
        const { id } = await params;

        if (!id?.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Некорректный ID заказа",
                },
                {
                    status: 400,
                },
            );
        }

        const body: unknown = await request.json();

        if (!body || typeof body !== "object") {
            return NextResponse.json(
                {
                    success: false,
                    error: "Некорректный запрос",
                },
                {
                    status: 400,
                },
            );
        }

        const { status } = body as {
            status?: unknown;
        };

        if (!isOrderStatus(status)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Некорректный статус заказа",
                    allowedStatuses:
                        Object.values(OrderStatus),
                },
                {
                    status: 400,
                },
            );
        }

        const existingOrder =
            await prisma.order.findUnique({
                where: {
                    id,
                },

                select: {
                    id: true,
                },
            });

        if (!existingOrder) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Заказ не найден",
                },
                {
                    status: 404,
                },
            );
        }

        const order = await prisma.order.update({
            where: {
                id,
            },

            data: {
                status,
            },

            include: {
                items: true,
            },
        });

        return NextResponse.json({
            success: true,
            order,
        });
    } catch (error: unknown) {
        console.error(
            "Ошибка обновления заказа:",
            error,
        );

        return NextResponse.json(
            {
                success: false,
                error: "Не удалось обновить заказ",
            },
            {
                status: 500,
            },
        );
    }
}

// ==========================================
// DELETE — отменить заказ
// ==========================================

export async function DELETE(
    _request: NextRequest,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    },
) {
    try {
        const { id } = await params;

        if (!id?.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Некорректный ID заказа",
                },
                {
                    status: 400,
                },
            );
        }

        const existingOrder =
            await prisma.order.findUnique({
                where: {
                    id,
                },

                select: {
                    id: true,
                    status: true,
                },
            });

        if (!existingOrder) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Заказ не найден",
                },
                {
                    status: 404,
                },
            );
        }

        if (
            existingOrder.status ===
            OrderStatus.CANCELLED
        ) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Заказ уже отменён",
                },
                {
                    status: 409,
                },
            );
        }

        const order = await prisma.order.update({
            where: {
                id,
            },

            data: {
                status: OrderStatus.CANCELLED,
            },

            include: {
                items: true,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Заказ отменён",
            order,
        });
    } catch (error: unknown) {
        console.error(
            "Ошибка отмены заказа:",
            error,
        );

        return NextResponse.json(
            {
                success: false,
                error: "Не удалось отменить заказ",
            },
            {
                status: 500,
            },
        );
    }
}