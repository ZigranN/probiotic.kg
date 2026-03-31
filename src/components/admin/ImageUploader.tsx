"use client";

import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon, Loader } from "lucide-react";

interface ImageUploaderProps {
    onUpload: (url: string) => void;
    currentImage?: string;
    onRemove?: () => void;
}

export default function ImageUploader({ onUpload, currentImage, onRemove }: ImageUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");
    const [preview, setPreview] = useState(currentImage || "");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Проверка типа файла на клиенте
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            setError('Недопустимый тип файла. Разрешены: JPG, PNG, WEBP, GIF');
            return;
        }

        // Проверка размера (макс 5MB)
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            setError('Файл слишком большой. Максимум 5MB');
            return;
        }

        setError("");
        setUploading(true);

        try {
            // Создаем preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);

            // Загружаем на сервер
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                onUpload(data.url);
                setPreview(data.url);
            } else {
                setError(data.error || 'Ошибка загрузки');
                setPreview("");
            }
        } catch (err) {
            setError('Ошибка загрузки файла');
            setPreview("");
        } finally {
            setUploading(false);
        }
    };

    const handleRemove = () => {
        setPreview("");
        if (onRemove) onRemove();
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="space-y-2">
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-3 py-2 rounded-lg text-sm">
                    {error}
                </div>
            )}

            {preview ? (
                <div className="relative group">
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ) : (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#21AA57] transition"
                >
                    {uploading ? (
                        <div className="flex flex-col items-center gap-3">
                            <Loader className="w-8 h-8 text-[#21AA57] animate-spin" />
                            <p className="text-sm text-gray-600">Загрузка...</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-3">
                            <ImageIcon className="w-12 h-12 text-gray-400" />
                            <div>
                                <p className="text-sm font-medium text-[#29380E]">
                                    Нажмите для загрузки изображения
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    JPG, PNG, WEBP, GIF (макс. 5MB)
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    );
}
