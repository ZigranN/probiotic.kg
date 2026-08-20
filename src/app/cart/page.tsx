"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    MessageCircle,
    Minus,
    Plus,
    ShoppingBag,
    Trash2,
} from "lucide-react";

import { seller } from "@/config/seller";
import { useCartStore } from "@/lib/store/cartStore";

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
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleCheckout = async () => {
        const trimmedName = name.trim();
        const trimmedPhone = phone.trim();

        if (!trimmedName || !trimmedPhone) {
            alert("Введите имя и телефон");
            return;
        }

        if (!acceptedTerms) {
            alert(
                "Необходимо принять условия публичной оферты и политики конфиденциальности",
            );
            return;
        }

        if (cart.length === 0) {
            alert("Корзина пуста");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: trimmedName,
                    phone: trimmedPhone,
                    cart,
                    totalPrice,
                }),
            });

            if (!response.ok) {
                throw new Error(`Ошибка API: ${response.status}`);
            }

            const result = await response.json();

            if (!result.success || !result.orderId) {
                alert("Ошибка при сохранении заказа. Попробуйте еще раз.");
                return;
            }

            let message = `*ЗАКАЗ №${String(result.orderId).slice(-4)}*\n`;
            message += `*Клиент:* ${trimmedName}\n`;
            message += `*Телефон:* ${trimmedPhone}\n\n`;

            cart.forEach((item) => {
                const itemTotal = item.price * item.quantity;

                message += `• ${item.name} — ${item.quantity} шт. × ${item.price} сом = ${itemTotal} сом\n`;
            });

            message += `\n*ИТОГО:* ${totalPrice} сом`;
            message +=
                "\n\nДоставка и способ оплаты согласовываются с менеджером.";

            const whatsappUrl = `https://wa.me/${seller.whatsappPhone}?text=${encodeURIComponent(
                message,
            )}`;

            clearCart();
            window.location.href = whatsappUrl;
        } catch (error) {
            console.error("Ошибка оформления заказа:", error);
            alert(
                "Не удалось оформить заказ. Проверьте подключение к интернету и попробуйте еще раз.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (cart.length === 0) {
        return (
            <main className="flex min-h-[70vh] flex-col items-center justify-center px-6">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                    <ShoppingBag
                        className="h-10 w-10 text-gray-300"
                        aria-hidden="true"
                    />
                </div>

                <h1 className="mb-4 text-center text-3xl font-black uppercase italic text-[#29380E]">
                    Корзина пуста
                </h1>

                <p className="mb-8 max-w-sm text-center text-[#A8A496]">
                    Добавьте в корзину выбранные товары из каталога.
                </p>

                <Link
                    href="/#catalog"
                    className="flex items-center gap-2 rounded-2xl bg-[#21AA57] px-10 py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-[#1d914a]"
                >
                    В каталог
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#F4F7F5] pt-10 pb-24">
            <div className="container mx-auto px-4 md:px-12">
                <h1 className="mb-10 text-3xl font-black tracking-tighter text-[#29380E] uppercase italic md:text-5xl">
                    Ваш <span className="text-[#21AA57]">заказ</span>
                </h1>

                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Список товаров */}
                    <div className="w-full space-y-4 lg:w-2/3">
                        <AnimatePresence>
                            {cart.map((item) => (
                                <motion.article
                                    key={item.slug}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex items-center gap-4 rounded-[2rem] border border-gray-100 bg-white p-4 shadow-sm md:gap-6 md:p-6"
                                >
                                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-50 md:h-24 md:w-24">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes="96px"
                                            className="object-contain p-2"
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <h2 className="mb-1 text-base leading-tight font-bold text-[#29380E] md:text-xl">
                                            {item.name}
                                        </h2>

                                        <p className="font-black text-[#21AA57]">
                                            {item.price} сом
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
                                        <div className="flex items-center rounded-xl border border-gray-100 bg-[#F4F7F5] p-1">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    updateQuantity(item.slug, -1)
                                                }
                                                aria-label={`Уменьшить количество ${item.name}`}
                                                className="p-2 transition-colors hover:text-[#21AA57]"
                                            >
                                                <Minus
                                                    className="h-4 w-4"
                                                    aria-hidden="true"
                                                />
                                            </button>

                                            <span
                                                className="w-8 text-center font-bold text-[#29380E]"
                                                aria-label={`Количество: ${item.quantity}`}
                                            >
                                                {item.quantity}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    updateQuantity(item.slug, 1)
                                                }
                                                aria-label={`Увеличить количество ${item.name}`}
                                                className="p-2 transition-colors hover:text-[#21AA57]"
                                            >
                                                <Plus
                                                    className="h-4 w-4"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeFromCart(item.slug)
                                            }
                                            aria-label={`Удалить ${item.name} из корзины`}
                                            className="p-2 text-gray-300 transition-colors hover:text-red-500"
                                        >
                                            <Trash2
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>

                        <button
                            type="button"
                            onClick={clearCart}
                            className="ml-4 flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase transition-colors hover:text-red-500"
                        >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                            Очистить корзину
                        </button>
                    </div>

                    {/* Оформление заказа */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-24 rounded-[3rem] bg-[#29380E] p-8 text-white shadow-2xl md:p-10">
                            <h2 className="mb-6 border-b border-white/10 pb-4 text-2xl font-black uppercase italic">
                                Итого
                            </h2>

                            <div className="mb-8 space-y-4">
                                <div className="flex justify-between text-white/60">
                                    <span>Товары ({totalItems})</span>
                                    <span>{totalPrice} сом</span>
                                </div>

                                <div className="flex justify-between gap-4 text-white/60">
                                    <span>Доставка</span>
                                    <span className="text-right font-bold text-[#21AA57]">
                                        Уточнит менеджер
                                    </span>
                                </div>

                                <div className="flex justify-between border-t border-white/10 pt-4 text-xl font-black">
                                    <span>К оплате</span>
                                    <span className="text-[#21AA57]">
                                        {totalPrice} сом
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="customer-name"
                                        className="ml-2 block text-[10px] font-black tracking-widest text-white/40 uppercase"
                                    >
                                        Ваше имя
                                    </label>

                                    <input
                                        id="customer-name"
                                        type="text"
                                        value={name}
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
                                        placeholder="Например, Айдана"
                                        autoComplete="name"
                                        disabled={isSubmitting}
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#21AA57] disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="customer-phone"
                                        className="ml-2 block text-[10px] font-black tracking-widest text-white/40 uppercase"
                                    >
                                        Телефон или WhatsApp
                                    </label>

                                    <input
                                        id="customer-phone"
                                        type="tel"
                                        value={phone}
                                        onChange={(event) =>
                                            setPhone(event.target.value)
                                        }
                                        placeholder="+996 ___ ___ ___"
                                        autoComplete="tel"
                                        inputMode="tel"
                                        disabled={isSubmitting}
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#21AA57] disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <input
                                        type="checkbox"
                                        checked={acceptedTerms}
                                        onChange={(event) =>
                                            setAcceptedTerms(
                                                event.target.checked,
                                            )
                                        }
                                        disabled={isSubmitting}
                                        className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#21AA57]"
                                    />

                                    <span className="text-xs leading-relaxed text-white/60">
                                        Я принимаю условия{" "}
                                        <Link
                                            href="/offer"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#21AA57] underline underline-offset-2 hover:text-white"
                                        >
                                            публичной оферты
                                        </Link>{" "}
                                        и ознакомлен(а) с{" "}
                                        <Link
                                            href="/policy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#21AA57] underline underline-offset-2 hover:text-white"
                                        >
                                            политикой конфиденциальности
                                        </Link>
                                        .
                                    </span>
                                </label>

                                <button
                                    type="button"
                                    onClick={handleCheckout}
                                    disabled={
                                        isSubmitting ||
                                        !acceptedTerms ||
                                        !name.trim() ||
                                        !phone.trim()
                                    }
                                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#21AA57] py-5 text-lg font-black tracking-tighter text-white uppercase shadow-xl shadow-[#21AA57]/20 transition-all hover:bg-[#1d914a] disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    {isSubmitting
                                        ? "Отправка..."
                                        : "Оформить в WhatsApp"}

                                    <MessageCircle
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>

                            <p className="mt-6 text-center text-[10px] leading-relaxed text-white/30">
                                Менеджер свяжется с вами для подтверждения
                                наличия, доставки и способа оплаты.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}