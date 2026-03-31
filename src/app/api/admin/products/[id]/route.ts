import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

// GET /api/admin/products/[id] - получить один товар
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();

        if (!session || (session.user as any).role !== 'ADMIN') {
            return NextResponse.json(
                { success: false, error: 'Доступ запрещен' },
                { status: 403 }
            );
        }

        const { id } = await params;

        const product = await prisma.product.findUnique({
            where: { id },
        });

        if (!product) {
            return NextResponse.json(
                { success: false, error: 'Товар не найден' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, product });
    } catch (error: any) {
        console.error('Ошибка получения товара:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// PATCH /api/admin/products/[id] - обновить товар
export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();

        if (!session || (session.user as any).role !== 'ADMIN') {
            return NextResponse.json(
                { success: false, error: 'Доступ запрещен' },
                { status: 403 }
            );
        }

        const { id } = await params;
        const body = await req.json();

        // Проверяем существование товара
        const existingProduct = await prisma.product.findUnique({
            where: { id },
        });

        if (!existingProduct) {
            return NextResponse.json(
                { success: false, error: 'Товар не найден' },
                { status: 404 }
            );
        }

        // Обновляем товар
        const product = await prisma.product.update({
            where: { id },
            data: {
                ...(body.slug && { slug: body.slug }),
                ...(body.name && { name: body.name }),
                ...(body.category && { category: body.category }),
                ...(body.heroTag !== undefined && { heroTag: body.heroTag || null }),
                ...(body.form !== undefined && { form: body.form || null }),
                ...(body.packInfo !== undefined && { packInfo: body.packInfo || null }),
                ...(body.description && { description: body.description }),
                ...(body.oldPriceKgs !== undefined && {
                    oldPriceKgs: body.oldPriceKgs ? parseInt(body.oldPriceKgs) : null,
                }),
                ...(body.priceKgs && { priceKgs: parseInt(body.priceKgs) }),
                ...(body.inStock !== undefined && { inStock: body.inStock }),
                ...(body.shortBenefits && { shortBenefits: body.shortBenefits }),
                ...(body.forWhom !== undefined && { forWhom: body.forWhom }),
                ...(body.keyNotes !== undefined && { keyNotes: body.keyNotes }),
                ...(body.howToUse !== undefined && { howToUse: body.howToUse }),
                ...(body.cautions !== undefined && { cautions: body.cautions }),
                ...(body.storage !== undefined && { storage: body.storage }),
                ...(body.images && { images: body.images }),
            },
        });

        return NextResponse.json({
            success: true,
            product,
        });
    } catch (error: any) {
        console.error('Ошибка обновления товара:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Ошибка сервера' },
            { status: 500 }
        );
    }
}

// DELETE /api/admin/products/[id] - удалить товар
export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();

        if (!session || (session.user as any).role !== 'ADMIN') {
            return NextResponse.json(
                { success: false, error: 'Доступ запрещен' },
                { status: 403 }
            );
        }

        const { id } = await params;

        // Проверяем существование товара
        const existingProduct = await prisma.product.findUnique({
            where: { id },
        });

        if (!existingProduct) {
            return NextResponse.json(
                { success: false, error: 'Товар не найден' },
                { status: 404 }
            );
        }

        // Удаляем товар
        await prisma.product.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: 'Товар удален',
        });
    } catch (error: any) {
        console.error('Ошибка удаления товара:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Ошибка сервера' },
            { status: 500 }
        );
    }
}
