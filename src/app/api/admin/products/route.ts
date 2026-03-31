import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

// GET /api/admin/products - получить все товары (для админки)
export async function GET(req: NextRequest) {
    try {
        const session = await auth();

        // Проверка: только админы могут получать список товаров
        if (!session || (session.user as any).role !== 'ADMIN') {
            return NextResponse.json(
                { success: false, error: 'Доступ запрещен' },
                { status: 403 }
            );
        }

        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json({ success: true, products });
    } catch (error: any) {
        console.error('Ошибка получения товаров:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// POST /api/admin/products - создать новый товар
export async function POST(req: NextRequest) {
    try {
        const session = await auth();

        if (!session || (session.user as any).role !== 'ADMIN') {
            return NextResponse.json(
                { success: false, error: 'Доступ запрещен' },
                { status: 403 }
            );
        }

        const body = await req.json();
        const {
            slug,
            name,
            category,
            heroTag,
            form,
            packInfo,
            description,
            oldPriceKgs,
            priceKgs,
            inStock,
            shortBenefits,
            forWhom,
            keyNotes,
            howToUse,
            cautions,
            storage,
            images,
        } = body;

        // Валидация обязательных полей
        if (!slug || !name || !category || !description || !priceKgs || !shortBenefits || !images) {
            return NextResponse.json(
                { success: false, error: 'Не все обязательные поля заполнены' },
                { status: 400 }
            );
        }

        // Проверяем уникальность slug
        const existingProduct = await prisma.product.findUnique({
            where: { slug },
        });

        if (existingProduct) {
            return NextResponse.json(
                { success: false, error: 'Товар с таким slug уже существует' },
                { status: 400 }
            );
        }

        const product = await prisma.product.create({
            data: {
                slug,
                name,
                category,
                heroTag: heroTag || null,
                form: form || null,
                packInfo: packInfo || null,
                description,
                oldPriceKgs: oldPriceKgs ? parseInt(oldPriceKgs) : null,
                priceKgs: parseInt(priceKgs),
                inStock: inStock !== undefined ? inStock : true,
                shortBenefits: shortBenefits,
                forWhom: forWhom || null,
                keyNotes: keyNotes || null,
                howToUse: howToUse || null,
                cautions: cautions || null,
                storage: storage || null,
                images: images,
            },
        });

        return NextResponse.json({
            success: true,
            product,
        });
    } catch (error: any) {
        console.error('Ошибка создания товара:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Ошибка сервера' },
            { status: 500 }
        );
    }
}
