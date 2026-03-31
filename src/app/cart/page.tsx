"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { useCartStore } from "@/lib/store/cartStore";
import { siteConfig } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle } from "lucide-react";

export default function CartPage() {
    const cart = useCartStore((state) => state.items);
    const removeFromCart = useCartStore((state) => state.removeItem);
    const updateQuantity = useCartStore((state) => state.updateQty);
    const totalPrice = useCartStore((state) => state.getTotalPrice());
    const totalItems = useCartStore((state) => state.getTotalItems());
    const clearCart = useCartStore((state) => state.clearCart);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCheckout = async () => {
        if (!name || !phone) {
            alert("Введите имя и телефон");
            return;
        }

        setIsSubmitting(true);

        try {
            // 1. Сохраняем в БД через наше API
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    phone,
                    cart,
                    totalPrice,
                }),
            });

            const result = await response.json();

            if (result.success) {
                // 2. Формируем текст для WhatsApp
                let message = `*ЗАКАЗ №${result.orderId.slice(-4)}*\n`;
                message += `*Клиент:* ${name}\n*Телефон:* ${phone}\n\n`;
                cart.forEach(item => {
                    message += `• ${item.name} (${item.quantity} шт) — ${item.price * item.quantity} сом\n`;
                });
                message += `\n*ИТОГО:* ${totalPrice} сом`;

                const waUrl = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(message)}`;

                // Очищаем корзину и переходим
                clearCart();
                window.location.href = waUrl;
            } else {
                alert("Ошибка при сохранении заказа. Попробуйте еще раз.");
            }
        } catch (error) {
            console.error(error);
            alert("Произошла ошибка соединения.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-gray-300" />
                </div>
                <h2 className="text-3xl font-black text-[#29380E] uppercase italic mb-4">Корзина пуста</h2>
                <p className="text-[#A8A496] mb-8 text-center max-w-sm">Самое время добавить в неё полезные продукты для вашего здоровья.</p>
                <Link href="/#catalog" className="bg-[#21AA57] text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-[#1d914a] transition-all">
                    В каталог
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F4F7F5] pb-24 pt-10">
            <div className="container mx-auto px-4 md:px-12">
                <h1 className="text-3xl md:text-5xl font-black text-[#29380E] uppercase italic mb-10 tracking-tighter">
                    Ваш <span className="text-[#21AA57]">заказ</span>
                </h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* СПИСОК ТОВАРОВ */}
                    <div className="w-full lg:w-2/3 space-y-4">
                        <AnimatePresence>
                            {cart.map((item) => (
                                <motion.div
                                    key={item.slug}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-white p-4 md:p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-4 md:gap-6"
                                >
                                    <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-50 rounded-2xl overflow-hidden">
                                        <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="font-bold text-[#29380E] text-base md:text-xl leading-tight mb-1">{item.name}</h3>
                                        <p className="text-[#21AA57] font-black">{item.price} сом</p>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                                        {/* Счетчик */}
                                        <div className="flex items-center bg-[#F4F7F5] rounded-xl p-1 border border-gray-100">
                                            <button
                                                onClick={() => updateQuantity(item.slug, -1)}
                                                className="p-2 hover:text-[#21AA57] transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center font-bold text-[#29380E]">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.slug, 1)}
                                                className="p-2 hover:text-[#21AA57] transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.slug)}
                                            className="text-gray-300 hover:text-red-500 transition-colors p-2"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        <button
                            onClick={clearCart}
                            className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-red-500 transition-colors flex items-center gap-2 ml-4"
                        >
                            Очистить корзину
                        </button>
                    </div>

                    {/* ОФОРМЛЕНИЕ ЗАКАЗА */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-[#29380E] text-white p-8 md:p-10 rounded-[3rem] shadow-2xl sticky top-24">
                            <h3 className="text-2xl font-black uppercase italic mb-6 border-b border-white/10 pb-4">Итого</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-white/60">
                                    <span>Товары ({totalItems})</span>
                                    <span>{totalPrice} сом</span>
                                </div>
                                <div className="flex justify-between text-white/60">
                                    <span>Доставка</span>
                                    <span className="text-[#21AA57] font-bold">Уточнит менеджер</span>
                                </div>
                                <div className="flex justify-between text-xl font-black pt-4 border-t border-white/10">
                                    <span>К оплате</span>
                                    <span className="text-[#21AA57]">{totalPrice} сом</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black text-white/40 tracking-widest ml-2">Ваше Имя</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Айдин"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#21AA57] transition-all text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black text-white/40 tracking-widest ml-2">Телефон (WhatsApp)</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+996 --- -- -- --"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#21AA57] transition-all text-white"
                                    />
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    disabled={isSubmitting}
                                    className="w-full bg-[#21AA57] hover:bg-[#1d914a] disabled:opacity-50 text-white py-5 rounded-2xl font-black text-lg uppercase tracking-tighter transition-all flex items-center justify-center gap-3 mt-6 shadow-xl shadow-[#21AA57]/20"
                                >
                                    {isSubmitting ? "Отправка..." : "Оформить в WhatsApp"}
                                    <MessageCircle className="w-6 h-6" />
                                </button>
                            </div>

                            <p className="mt-6 text-[10px] text-white/30 text-center leading-relaxed">
                                Нажимая кнопку, вы подтверждаете заказ. Менеджер свяжется с вами для уточнения адреса и способа оплаты.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}