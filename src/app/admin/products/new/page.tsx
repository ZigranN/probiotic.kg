"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, X, Save } from "lucide-react";

export default function NewProductPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        slug: "",
        name: "",
        category: "PROBIOTIC",
        heroTag: "",
        form: "",
        packInfo: "",
        description: "",
        oldPriceKgs: "",
        priceKgs: "",
        inStock: true,
    });

    const [shortBenefits, setShortBenefits] = useState<string[]>([""]);
    const [forWhom, setForWhom] = useState<string[]>([""]);
    const [keyNotes, setKeyNotes] = useState<string[]>([""]);
    const [howToUse, setHowToUse] = useState<string[]>([""]);
    const [cautions, setCautions] = useState<string[]>([""]);
    const [storage, setStorage] = useState<string[]>([""]);
    const [images, setImages] = useState<Array<{ src: string; alt: string }>>([
        { src: "", alt: "" },
    ]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/admin/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    shortBenefits: shortBenefits.filter((b) => b.trim()),
                    forWhom: forWhom.filter((w) => w.trim()).length > 0 ? forWhom.filter((w) => w.trim()) : null,
                    keyNotes: keyNotes.filter((k) => k.trim()).length > 0 ? keyNotes.filter((k) => k.trim()) : null,
                    howToUse: howToUse.filter((h) => h.trim()).length > 0 ? howToUse.filter((h) => h.trim()) : null,
                    cautions: cautions.filter((c) => c.trim()).length > 0 ? cautions.filter((c) => c.trim()) : null,
                    storage: storage.filter((s) => s.trim()).length > 0 ? storage.filter((s) => s.trim()) : null,
                    images: images.filter((img) => img.src.trim()),
                }),
            });

            const data = await response.json();

            if (data.success) {
                router.push("/admin/products");
            } else {
                setError(data.error || "Ошибка создания товара");
            }
        } catch (err) {
            setError("Ошибка сервера");
        } finally {
            setLoading(false);
        }
    };

    const addArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        setter((prev) => [...prev, ""]);
    };

    const removeArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, index: number) => {
        setter((prev) => prev.filter((_, i) => i !== index));
    };

    const updateArrayItem = (
        setter: React.Dispatch<React.SetStateAction<string[]>>,
        index: number,
        value: string
    ) => {
        setter((prev) => prev.map((item, i) => (i === index ? value : item)));
    };

    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Шапка */}
                <div className="mb-8">
                    <Link
                        href="/admin/products"
                        className="inline-flex items-center gap-2 text-[#21AA57] hover:text-[#1a8a46] transition mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Назад к списку
                    </Link>
                    <h1 className="text-3xl font-bold text-[#29380E]">Добавить товар</h1>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Основная информация */}
                    <div className="bg-white rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-[#29380E] mb-4">
                            Основная информация
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#29380E] mb-2">
                                    Название товара *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                    placeholder="Максилин Сухой"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#29380E] mb-2">
                                    Slug (URL) *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                    placeholder="maxilin-suhoi"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#29380E] mb-2">
                                    Категория *
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                >
                                    <option value="PROBIOTIC">Пробиотик</option>
                                    <option value="CANDLES">Свечи</option>
                                    <option value="ACTIVES">Активы</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#29380E] mb-2">
                                        Форма выпуска
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.form}
                                        onChange={(e) => setFormData({ ...formData, form: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                        placeholder="Порошок"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#29380E] mb-2">
                                        Упаковка
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.packInfo}
                                        onChange={(e) => setFormData({ ...formData, packInfo: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                        placeholder="250 г"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#29380E] mb-2">
                                    Тег (бейдж)
                                </label>
                                <input
                                    type="text"
                                    value={formData.heroTag}
                                    onChange={(e) => setFormData({ ...formData, heroTag: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                    placeholder="Хит продаж"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#29380E] mb-2">
                                    Описание *
                                </label>
                                <textarea
                                    required
                                    rows={6}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                    placeholder="Полное описание товара..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Цены */}
                    <div className="bg-white rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-[#29380E] mb-4">Цены и наличие</h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#29380E] mb-2">
                                        Цена (₸) *
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        value={formData.priceKgs}
                                        onChange={(e) => setFormData({ ...formData, priceKgs: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                        placeholder="4500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#29380E] mb-2">
                                        Старая цена (₸)
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.oldPriceKgs}
                                        onChange={(e) => setFormData({ ...formData, oldPriceKgs: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                        placeholder="6000"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="inStock"
                                    checked={formData.inStock}
                                    onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                                    className="w-5 h-5 text-[#21AA57] border-gray-300 rounded focus:ring-[#21AA57]"
                                />
                                <label htmlFor="inStock" className="text-sm font-medium text-[#29380E]">
                                    В наличии
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Короткие преимущества */}
                    <div className="bg-white rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-[#29380E] mb-4">
                            Короткие преимущества *
                        </h2>
                        {shortBenefits.map((benefit, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={benefit}
                                    onChange={(e) => updateArrayItem(setShortBenefits, index, e.target.value)}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                    placeholder="Преимущество товара"
                                />
                                {shortBenefits.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeArrayItem(setShortBenefits, index)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addArrayItem(setShortBenefits)}
                            className="mt-2 flex items-center gap-2 text-[#21AA57] hover:text-[#1a8a46] transition"
                        >
                            <Plus className="w-4 h-4" />
                            Добавить преимущество
                        </button>
                    </div>

                    {/* Изображения */}
                    <div className="bg-white rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-[#29380E] mb-4">Изображения *</h2>
                        {images.map((image, index) => (
                            <div key={index} className="space-y-2 mb-4">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={image.src}
                                        onChange={(e) =>
                                            setImages(
                                                images.map((img, i) =>
                                                    i === index ? { ...img, src: e.target.value } : img
                                                )
                                            )
                                        }
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                        placeholder="URL изображения (например, /images/product.jpg)"
                                    />
                                    {images.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => setImages(images.filter((_, i) => i !== index))}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    value={image.alt}
                                    onChange={(e) =>
                                        setImages(
                                            images.map((img, i) =>
                                                i === index ? { ...img, alt: e.target.value } : img
                                            )
                                        )
                                    }
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                                    placeholder="Описание изображения (alt text)"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => setImages([...images, { src: "", alt: "" }])}
                            className="flex items-center gap-2 text-[#21AA57] hover:text-[#1a8a46] transition"
                        >
                            <Plus className="w-4 h-4" />
                            Добавить изображение
                        </button>
                    </div>

                    {/* Кнопки */}
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#21AA57] text-white rounded-full font-medium hover:bg-[#1a8a46] transition disabled:opacity-50"
                        >
                            <Save className="w-5 h-5" />
                            {loading ? "Сохранение..." : "Сохранить товар"}
                        </button>
                        <Link
                            href="/admin/products"
                            className="px-6 py-3 bg-[#F4F7F5] text-[#29380E] rounded-full font-medium hover:bg-gray-200 transition"
                        >
                            Отмена
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
