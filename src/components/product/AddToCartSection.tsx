"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";

export default function AddToCartSection({ product }: { product: any }) {
    const addItem = useCartStore((s) => s.addItem);

    const handleAdd = () => {
        // Безопасное извлечение картинки
        const images = Array.isArray(product.images) ? product.images : [];
        const firstImage = images[0]?.src || "/images/placeholder.png";

        addItem({
            id: product.id,
            slug: product.slug,
            name: product.name,
            price: product.priceKgs,
            quantity: 1,
            image: firstImage,
        });

        // Вместо стандартного алерта — приятное уведомление
        alert(`✅ ${product.name} добавлен в корзину!`);
    };

    return (
        <button
            onClick={handleAdd}
            className="w-full bg-[#21AA57] text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-[#1d914a] transition-all active:scale-95 shadow-xl shadow-[#21AA57]/20"
        >
            <ShoppingCart className="w-6 h-6" />
            Добавить в корзину
        </button>
    );
}