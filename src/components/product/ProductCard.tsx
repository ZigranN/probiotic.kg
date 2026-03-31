"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowRight, Zap } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";

export default function ProductCard({ product }: { product: any }) {
    const addItem = useCartStore((state) => state.addItem);
    const images = Array.isArray(product.images) ? product.images : [];

    return (
        <div className="bg-white p-4 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full group relative overflow-hidden">
            {/* Бэдж скидки или Хит */}
            {product.oldPriceKgs && (
                <div className="absolute top-6 left-6 z-10 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg animate-pulse">
                    SALE
                </div>
            )}

            {/* Изображение */}
            <div className="relative h-64 w-full mb-4 rounded-[2rem] bg-[#F4F7F5] overflow-hidden flex items-center justify-center p-6">
                <Image
                    src={images[0]?.src || '/images/placeholder.png'}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Текст */}
            <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-3 h-3 text-[#D4AF37] fill-current" />
                    <span className="text-[10px] font-bold text-[#A8A496] uppercase tracking-widest">EnergyMax Group</span>
                </div>

                <h3 className="text-xl font-black text-[#29380E] mb-2 leading-tight uppercase italic">
                    {product.name}
                </h3>

                <p className="text-xs text-[#A8A496] line-clamp-2 mb-6 font-medium">
                    {product.description}
                </p>

                {/* Цена и Кнопка */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                        {product.oldPriceKgs && (
                            <span className="block text-[10px] text-[#A8A496] line-through decoration-[#D4AF37]">
                                {product.oldPriceKgs} сом
                            </span>
                        )}
                        <span className="text-xl font-black text-[#21AA57]">
                            {product.priceKgs} <span className="text-xs">сом</span>
                        </span>
                    </div>

                    <div className="flex gap-2">
                        <Link
                            href={`/product/${product.slug}`}
                            className="p-3 bg-[#F4F7F5] rounded-xl text-[#29380E] hover:bg-[#29380E] hover:text-white transition-all"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <button
                            onClick={() => addItem({
                                id: product.id,
                                slug: product.slug,
                                name: product.name,
                                price: product.priceKgs,
                                quantity: 1,
                                image: images[0]?.src || ""
                            })}
                            className="p-3 bg-[#21AA57] rounded-xl text-white shadow-lg shadow-[#21AA57]/20 hover:scale-105 active:scale-90 transition-all"
                        >
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}