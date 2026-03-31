"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingCart, Phone, Menu, X, Home,
    Grid, MessageCircle, Instagram, Send, Info, User
} from "lucide-react";
import { siteConfig } from "@/lib/content";
import { useCartStore } from "@/lib/store/cartStore";
import { useSession } from "next-auth/react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const { data: session } = useSession();

    // ✅ Получаем количество товаров из Zustand
    const totalItems = useCartStore((state) => state.getTotalItems());

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsContactOpen(false);
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#A8A496]/20 shadow-sm">
                <div className="container mx-auto px-4 md:px-12 py-3 flex items-center justify-between">
                    <Link href="/" className="flex items-center z-50">
                        <div>

                        <Image src="/images/logo-main.webp" alt="EnergyMax Logo" width={130} height={32} className="object-contain" priority />
                            <span className="mt-1.5 block w-[130px] text-center text-[9px] font-bold uppercase tracking-[0.55em] text-[#A8A496]">
    GROUP
  </span>
                        </div>

                    </Link>

                    <nav className="hidden md:flex items-center gap-6 font-bold text-[#29380E]/90 text-[13px] tracking-wide uppercase">
                        <Link href="/about" className="hover:text-[#21AA57] transition-colors">О компании</Link>
                        <Link href="/#catalog" className="hover:text-[#21AA57] transition-colors">Каталог</Link>
                        <Link href="/info" className="hover:text-[#21AA57] transition-colors">База знаний</Link>
                        <Link href="/business" className="hover:text-[#21AA57] transition-colors">Бизнес</Link>
                        <Link href="/mentorship" className="hover:text-[#21AA57] transition-colors whitespace-nowrap">Наставничество</Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-5">
                        <a href={`tel:+${siteConfig.whatsappPhone}`} className="flex items-center gap-2 text-[#29380E] font-black hover:text-[#21AA57] transition-all">
                            <Phone className="w-4 h-4 text-[#21AA57]" />
                            <span className="text-sm">+{siteConfig.whatsappPhone}</span>
                        </a>
                        <Link href="/cart" className="relative p-2 bg-[#F4F7F5] rounded-full hover:bg-[#21AA57]/10 transition-colors">
                            <ShoppingCart className="w-5 h-5 text-[#29380E]" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4AF37] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        {session ? (
                            <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 bg-[#21AA57] text-white rounded-full hover:bg-[#1d914a] transition-colors font-bold">
                                <User className="w-4 h-4" />
                                <span className="text-sm">Личный кабинет</span>
                            </Link>
                        ) : (
                            <Link href="/auth/login" className="flex items-center gap-2 px-4 py-2 bg-[#F4F7F5] text-[#29380E] rounded-full hover:bg-[#21AA57] hover:text-white transition-colors font-bold">
                                <User className="w-4 h-4" />
                                <span className="text-sm">Войти</span>
                            </Link>
                        )}
                    </div>

                    <button className="md:hidden text-[#29380E] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden py-6 px-8 flex flex-col gap-5 font-bold text-[#29380E]"
                        >
                            <Link href="/about" onClick={closeMenu}>О компании</Link>
                            <Link href="/#catalog" onClick={closeMenu}>Каталог</Link>
                            <Link href="/info" onClick={closeMenu}>База знаний</Link>
                            <Link href="/business" onClick={closeMenu}>Бизнес</Link>
                            <Link href="/mentorship" onClick={closeMenu}>Наставничество</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* НИЖНИЙ TAB BAR (Мобилка) */}
            <nav className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 pb-safe-area-inset-bottom shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-around py-3 px-2 text-[#A8A496]">
                    <Link href="/" className="flex flex-col items-center gap-1 active:text-[#21AA57]">
                        <Home className="w-6 h-6" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Главная</span>
                    </Link>
                    <Link href="/#catalog" className="flex flex-col items-center gap-1 active:text-[#21AA57]">
                        <Grid className="w-6 h-6" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Каталог</span>
                    </Link>

                    <button
                        onClick={() => setIsContactOpen(!isContactOpen)}
                        className="relative -mt-10 w-14 h-14 bg-[#21AA57] rounded-full flex items-center justify-center shadow-lg shadow-[#21AA57]/40 border-4 border-[#F4F7F5] transition-transform active:scale-90"
                    >
                        <MessageCircle className="w-7 h-7 text-white" />
                    </button>

                    <Link href="/cart" className="flex flex-col items-center gap-1 relative active:text-[#21AA57]">
                        <ShoppingCart className="w-6 h-6" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 right-1 bg-[#D4AF37] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                {totalItems}
                            </span>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Корзина</span>
                    </Link>
                    <Link href="/info" className="flex flex-col items-center gap-1 active:text-[#21AA57]">
                        <Info className="w-6 h-6" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Инфо</span>
                    </Link>
                </div>
            </nav>

            {/* ПАНЕЛЬ КОНТАКТОВ */}
            <AnimatePresence>
                {isContactOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsContactOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[65] backdrop-blur-sm md:hidden"
                        />
                        <motion.div
                            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                            className="fixed bottom-24 left-4 right-4 z-[70] bg-white rounded-[2.5rem] p-6 md:hidden shadow-2xl"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <a href={`https://wa.me/${siteConfig.whatsappPhone}`} className="flex flex-col items-center gap-3 p-5 bg-[#21AA57]/5 rounded-3xl border border-[#21AA57]/10 active:scale-95 transition-transform">
                                    <MessageCircle className="w-8 h-8 text-[#21AA57]" />
                                    <span className="text-xs font-bold text-[#29380E]">WhatsApp</span>
                                </a>
                                <a href="https://t.me/nargizfullstack" className="flex flex-col items-center gap-3 p-5 bg-[#0088cc]/5 rounded-3xl border border-[#0088cc]/10 active:scale-95 transition-transform">
                                    <Send className="w-8 h-8 text-[#0088cc]" />
                                    <span className="text-xs font-bold text-[#29380E]">Telegram</span>
                                </a>
                                <a href="https://instagram.com/prozdorovie_kg" className="flex flex-col items-center gap-3 p-5 bg-[#e1306c]/5 rounded-3xl border border-[#e1306c]/10 active:scale-95 transition-transform">
                                    <Instagram className="w-8 h-8 text-[#e1306c]" />
                                    <span className="text-xs font-bold text-[#29380E]">Instagram</span>
                                </a>
                                <a href={`tel:+${siteConfig.whatsappPhone}`} className="flex flex-col items-center gap-3 p-5 bg-[#29380E]/5 rounded-3xl border border-[#29380E]/10 active:scale-95 transition-transform">
                                    <Phone className="w-8 h-8 text-[#29380E]" />
                                    <span className="text-xs font-bold text-[#29380E]">Позвонить</span>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}