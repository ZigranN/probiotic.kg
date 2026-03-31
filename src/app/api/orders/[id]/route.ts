import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await req.json();
        const { status } = body;

        if (!status) {
            return NextResponse.json(
                { success: false, error: 'Статус обязателен' },
                { status: 400 }
            );
        }

        const order = await prisma.order.update({
            where: { id },
            data: { status },
            include: {
                items: true,
                user: true,
            },
        });

        return NextResponse.json({ success: true, order });
    } catch (error: any) {
        console.error('Ошибка обновления заказа:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const order = await prisma.order.findUnique({
            where: { id },
            include: {
                items: true,
                user: true,
            },
        });

        if (!order) {
            return NextResponse.json(
                { success: false, error: 'Заказ не найден' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, order });
    } catch (error: any) {
        console.error('Ошибка получения заказа:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// DELETE - отмена заказа пользователем
export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const order = await prisma.order.update({
            where: { id },
            data: { status: 'CANCELLED' },
        });

        return NextResponse.json({
            success: true,
            message: 'Заказ отменен',
            order,
        });
    } catch (error: any) {
        console.error('Ошибка отмены заказа:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
