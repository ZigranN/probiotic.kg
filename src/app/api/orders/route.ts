import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendOrderConfirmation } from '@/lib/email';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, phone, email, cart, totalPrice, userId, address } = body;

        // Валидация
        if (!name || !phone || !cart || cart.length === 0) {
            return NextResponse.json(
                { success: false, error: 'Имя, телефон и товары обязательны' },
                { status: 400 }
            );
        }

        // Создаем заказ в БД
        const order = await prisma.order.create({
            data: {
                customerName: name,
                customerPhone: phone,
                totalPrice: parseFloat(totalPrice.toString()),
                userId: userId || null,
                status: 'PENDING',
                items: {
                    create: cart.map((item: any) => ({
                        productSlug: item.slug,
                        name: item.name,
                        price: parseFloat(item.price.toString()),
                        quantity: item.quantity,
                    })),
                },
            },
            include: {
                items: true,
            },
        });

        // Отправка email-подтверждения (если указан email)
        if (email) {
            try {
                await sendOrderConfirmation({
                    id: order.id,
                    customerName: name,
                    customerEmail: email,
                    totalPrice: order.totalPrice,
                    items: order.items.map(item => ({
                        name: item.name,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                });
            } catch (emailError) {
                console.error('Email sending failed:', emailError);
                // Не блокируем создание заказа если email не отправился
            }
        }

        return NextResponse.json({
            success: true,
            orderId: order.id,
            order: order,
        });
    } catch (error: any) {
        console.error('Ошибка создания заказа:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Ошибка сервера' },
            { status: 500 }
        );
    }
}

// GET /api/orders - получить все заказы (для админки)
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

        const where = userId ? { userId } : {};

        const orders = await prisma.order.findMany({
            where,
            include: {
                items: true,
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
                createdAt: 'desc',
            },
        });

        return NextResponse.json({ success: true, orders });
    } catch (error: any) {
        console.error('Ошибка получения заказов:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
