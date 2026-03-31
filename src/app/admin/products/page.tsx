import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2, Package } from "lucide-react";

export default async function AdminProductsPage() {
    const session = await auth();

    // Проверка доступа
    if (!session || !session.user || (session.user as any).role !== "ADMIN") {
        redirect("/auth/login");
    }

    // Получаем все товары
    const products = await prisma.product.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Шапка */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-[#29380E] mb-2">
                            Управление товарами
                        </h1>
                        <p className="text-gray-600">
                            Всего товаров: {products.length}
                        </p>
                    </div>
                    <Link
                        href="/admin/products/new"
                        className="flex items-center gap-2 px-6 py-3 bg-[#21AA57] text-white rounded-full font-medium hover:bg-[#1a8a46] transition"
                    >
                        <Plus className="w-5 h-5" />
                        Добавить товар
                    </Link>
                </div>

                {/* Список товаров */}
                {products.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 text-center">
                        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-[#29380E] mb-2">
                            Товары не найдены
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Добавьте первый товар чтобы начать работу
                        </p>
                        <Link
                            href="/admin/products/new"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#21AA57] text-white rounded-full font-medium hover:bg-[#1a8a46] transition"
                        >
                            <Plus className="w-5 h-5" />
                            Добавить товар
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-[#F4F7F5]">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#29380E]">
                                        Товар
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#29380E]">
                                        Категория
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#29380E]">
                                        Цена
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#29380E]">
                                        Статус
                                    </th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#29380E]">
                                        Действия
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {products.map((product) => {
                                    const images = product.images as Array<{
                                        src: string;
                                        alt: string;
                                    }>;
                                    const firstImage = images[0]?.src || "/images/placeholder.jpg";

                                    return (
                                        <tr key={product.id} className="hover:bg-[#F4F7F5] transition">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={firstImage}
                                                        alt={product.name}
                                                        className="w-12 h-12 object-cover rounded-lg"
                                                    />
                                                    <div>
                                                        <div className="font-medium text-[#29380E]">
                                                            {product.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {product.slug}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-[#F4F7F5] text-[#29380E]">
                                                    {product.category === "PROBIOTIC" && "Пробиотик"}
                                                    {product.category === "CANDLES" && "Свечи"}
                                                    {product.category === "ACTIVES" && "Активы"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-[#29380E] font-medium">
                                                    {product.priceKgs.toLocaleString("ru-RU")} ₸
                                                </div>
                                                {product.oldPriceKgs && (
                                                    <div className="text-sm text-gray-500 line-through">
                                                        {product.oldPriceKgs.toLocaleString("ru-RU")} ₸
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                {product.inStock ? (
                                                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                                        В наличии
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                                                        Нет в наличии
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        href={`/admin/products/edit/${product.id}`}
                                                        className="p-2 text-[#21AA57] hover:bg-[#F4F7F5] rounded-lg transition"
                                                    >
                                                        <Edit className="w-4 h-4" />
                                                    </Link>
                                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
