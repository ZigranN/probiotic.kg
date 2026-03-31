import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { auth } from '@/lib/auth';

export async function POST(req: NextRequest) {
    try {
        const session = await auth();

        // Проверка: только админы могут загружать изображения
        if (!session || (session.user as any).role !== 'ADMIN') {
            return NextResponse.json(
                { success: false, error: 'Доступ запрещен' },
                { status: 403 }
            );
        }

        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { success: false, error: 'Файл не найден' },
                { status: 400 }
            );
        }

        // Проверка типа файла
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { success: false, error: 'Недопустимый тип файла. Разрешены: JPG, PNG, WEBP, GIF' },
                { status: 400 }
            );
        }

        // Проверка размера (макс 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            return NextResponse.json(
                { success: false, error: 'Файл слишком большой. Максимум 5MB' },
                { status: 400 }
            );
        }

        // Создаем уникальное имя файла
        const timestamp = Date.now();
        const originalName = file.name.replace(/\s+/g, '-').toLowerCase();
        const fileName = `${timestamp}-${originalName}`;

        // Путь к папке uploads в public
        const uploadDir = join(process.cwd(), 'public', 'uploads');

        // Создаем папку если её нет
        try {
            await mkdir(uploadDir, { recursive: true });
        } catch (error) {
            // Папка уже существует
        }

        // Конвертируем файл в Buffer и сохраняем
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = join(uploadDir, fileName);

        await writeFile(filePath, buffer);

        // Возвращаем публичный URL
        const publicUrl = `/uploads/${fileName}`;

        return NextResponse.json({
            success: true,
            url: publicUrl,
            fileName: fileName,
        });

    } catch (error: any) {
        console.error('Ошибка загрузки файла:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Ошибка сервера' },
            { status: 500 }
        );
    }
}
