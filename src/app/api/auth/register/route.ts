import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hash } from 'bcryptjs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password, firstName, lastName, phone } = body;

        // Валидация
        if (!email || !password) {
            return NextResponse.json(
                { success: false, error: 'Email и пароль обязательны' },
                { status: 400 }
            );
        }

        // Проверка существования пользователя
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    ...(phone ? [{ phone }] : []),
                ],
            },
        });

        if (existingUser) {
            return NextResponse.json(
                { success: false, error: 'Пользователь с таким email или телефоном уже существует' },
                { status: 400 }
            );
        }

        // Хеширование пароля
        const passwordHash = await hash(password, 12);

        // Создание пользователя
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
                firstName: firstName || null,
                lastName: lastName || null,
                phone: phone || null,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                phone: true,
                createdAt: true,
            },
        });

        return NextResponse.json({
            success: true,
            message: 'Регистрация успешна! Теперь вы можете войти.',
            user,
        });
    } catch (error: any) {
        console.error('Ошибка регистрации:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Ошибка сервера' },
            { status: 500 }
        );
    }
}
