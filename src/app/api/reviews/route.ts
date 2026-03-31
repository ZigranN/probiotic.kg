import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

// POST /api/reviews - создать отзыв (автопубликация)
export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        const body = await req.json();
        const { productId, name, rating, text, images } = body;

        // Валидация
        if (!productId || !name || !rating || !text) {
            return NextResponse.json(
                { success: false, error: 'Не все обязательные поля заполнены' },
                { status: 400 }
            );
        }

        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                { success: false, error: 'Рейтинг должен быть от 1 до 5' },
                { status: 400 }
            );
        }

        // Проверяем существование товара
        const product = await prisma.product.findUnique({
            where: { id: productId },
        });

        if (!product) {
            return NextResponse.json(
                { success: false, error: 'Товар не найден' },
                { status: 404 }
            );
        }

        // Создаем отзыв (isApproved: true - автопубликация)
        const review = await prisma.review.create({
            data: {
                productId,
                userId: session?.user?.id || null,
                name,
                rating,
                text,
                images: images || null,
                isApproved: true, // Автопубликация
            },
        });

        return NextResponse.json({
            success: true,
            review,
        });
    } catch (error: any) {
        console.error('Ошибка создания отзыва:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Ошибка сервера' },
            { status: 500 }
        );
    }
}

// GET /api/reviews?productId=xxx - получить отзывы для товара
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const productId = searchParams.get('productId');

        if (!productId) {
            return NextResponse.json(
                { success: false, error: 'productId обязателен' },
                { status: 400 }
            );
        }

        const reviews = await prisma.review.findMany({
            where: {
                productId,
                isApproved: true, // Только одобренные
            },
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        // Подсчитываем средний рейтинг
        const avgRating = reviews.length > 0
            ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
            : 0;

        return NextResponse.json({
            success: true,
            reviews,
            stats: {
                total: reviews.length,
                avgRating: Math.round(avgRating * 10) / 10,
            },
        });
    } catch (error: any) {
        console.error('Ошибка получения отзывов:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
