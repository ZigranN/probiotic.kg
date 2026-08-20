"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import {
    Grid,
    Home,
    Info,
    Instagram,
    Menu,
    MessageCircle,
    Phone,
    Send,
    ShoppingCart,
    User,
    X,
} from "lucide-react";

import { seller } from "@/config/seller";
import { siteConfig } from "@/data/site";
import { useCartStore } from "@/lib/store/cartStore";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const { data: session } = useSession();

    const totalItems = useCartStore((state) => state.getTotalItems());

    const instagramUrl = `https://instagram.com/${siteConfig.instagram.replace(
        "@",
        "",
    )}`;

    const telegramUrl = `https://t.me/${siteConfig.telegram.replace("@", "")}`;

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsContactOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((currentValue) => !currentValue);
    };

    const toggleContacts = () => {
        setIsContactOpen((currentValue) => !currentValue);
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-[#A8A496]/20 bg-white/95 shadow-sm backdrop-blur-md">
                <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-12">
                    <Link
                        href="/"
                        aria-label={`Перейти на главную страницу ${seller.siteName}`}
                        className="z-50 flex items-center"
                    >
                        <div>
                            <Image
                                src="/images/logo-main.webp"
                                alt={`${seller.siteName} — продукция EnergyMax`}
                                width={130}
                                height={32}
                                priority
                                className="object-contain"
                            />

                            <span className="mt-1.5 block w-[130px] text-center text-[9px] font-bold tracking-[0.55em] text-[#A8A496] uppercase">
                                GROUP
                            </span>
                        </div>
                    </Link>

                    {/* Навигация на компьютере */}
                    <nav
                        aria-label="Основная навигация"
                        className="hidden items-center gap-6 text-[13px] font-bold tracking-wide text-[#29380E]/90 uppercase md:flex"
                    >
                        <Link
                            href="/about"
                            className="transition-colors hover:text-[#21AA57]"
                        >
                            О компании
                        </Link>

                        <Link
                            href="/#catalog"
                            className="transition-colors hover:text-[#21AA57]"
                        >
                            Каталог
                        </Link>

                        <Link
                            href="/info"
                            className="transition-colors hover:text-[#21AA57]"
                        >
                            База знаний
                        </Link>

                        <Link
                            href="/business"
                            className="transition-colors hover:text-[#21AA57]"
                        >
                            Бизнес
                        </Link>

                        <Link
                            href="/mentorship"
                            className="whitespace-nowrap transition-colors hover:text-[#21AA57]"
                        >
                            Наставничество
                        </Link>
                    </nav>

                    {/* Контакты и корзина на компьютере */}
                    <div className="hidden items-center gap-5 md:flex">
                        <a
                            href={`tel:${seller.phoneHref}`}
                            aria-label={`Позвонить по номеру ${seller.phone}`}
                            className="flex items-center gap-2 font-black text-[#29380E] transition-all hover:text-[#21AA57]"
                        >
                            <Phone
                                className="h-4 w-4 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span className="text-sm">{seller.phone}</span>
                        </a>

                        <Link
                            href="/cart"
                            aria-label={`Открыть корзину. Товаров: ${totalItems}`}
                            className="relative rounded-full bg-[#F4F7F5] p-2 transition-colors hover:bg-[#21AA57]/10"
                        >
                            <ShoppingCart
                                className="h-5 w-5 text-[#29380E]"
                                aria-hidden="true"
                            />

                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#D4AF37] text-[10px] font-bold text-white shadow-sm">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        {session ? (
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-2 rounded-full bg-[#21AA57] px-4 py-2 font-bold text-white transition-colors hover:bg-[#1d914a]"
                            >
                                <User
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />

                                <span className="text-sm">
                                    Личный кабинет
                                </span>
                            </Link>
                        ) : (
                            <Link
                                href="/auth/login"
                                className="flex items-center gap-2 rounded-full bg-[#F4F7F5] px-4 py-2 font-bold text-[#29380E] transition-colors hover:bg-[#21AA57] hover:text-white"
                            >
                                <User
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />

                                <span className="text-sm">Войти</span>
                            </Link>
                        )}
                    </div>

                    {/* Кнопка мобильного меню */}
                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label={
                            isMenuOpen
                                ? "Закрыть главное меню"
                                : "Открыть главное меню"
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-main-menu"
                        className="p-2 text-[#29380E] md:hidden"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            id="mobile-main-menu"
                            aria-label="Мобильная навигация"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 flex w-full flex-col gap-5 border-b border-gray-100 bg-white px-8 py-6 font-bold text-[#29380E] shadow-xl md:hidden"
                        >
                            <Link href="/about" onClick={closeMenu}>
                                О компании
                            </Link>

                            <Link href="/#catalog" onClick={closeMenu}>
                                Каталог
                            </Link>

                            <Link href="/info" onClick={closeMenu}>
                                База знаний
                            </Link>

                            <Link href="/business" onClick={closeMenu}>
                                Бизнес
                            </Link>

                            <Link href="/mentorship" onClick={closeMenu}>
                                Наставничество
                            </Link>

                            <a
                                href={`tel:${seller.phoneHref}`}
                                onClick={closeMenu}
                                className="flex items-center gap-2 text-[#21AA57]"
                            >
                                <Phone
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />

                                {seller.phone}
                            </a>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </header>

            {/* Нижняя панель на телефоне */}
            <nav
                aria-label="Мобильная панель навигации"
                className="pb-safe-area-inset-bottom fixed right-0 bottom-0 left-0 z-[60] border-t border-gray-200 bg-white/95 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] backdrop-blur-lg md:hidden"
            >
                <div className="flex items-center justify-around px-2 py-3 text-[#A8A496]">
                    <Link
                        href="/"
                        className="flex flex-col items-center gap-1 active:text-[#21AA57]"
                    >
                        <Home className="h-6 w-6" aria-hidden="true" />

                        <span className="text-[10px] font-bold tracking-tighter uppercase">
                            Главная
                        </span>
                    </Link>

                    <Link
                        href="/#catalog"
                        className="flex flex-col items-center gap-1 active:text-[#21AA57]"
                    >
                        <Grid className="h-6 w-6" aria-hidden="true" />

                        <span className="text-[10px] font-bold tracking-tighter uppercase">
                            Каталог
                        </span>
                    </Link>

                    <button
                        type="button"
                        onClick={toggleContacts}
                        aria-label={
                            isContactOpen
                                ? "Закрыть способы связи"
                                : "Открыть способы связи"
                        }
                        aria-expanded={isContactOpen}
                        aria-controls="mobile-contact-panel"
                        className="relative -mt-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#F4F7F5] bg-[#21AA57] shadow-lg shadow-[#21AA57]/40 transition-transform active:scale-90"
                    >
                        <MessageCircle
                            className="h-7 w-7 text-white"
                            aria-hidden="true"
                        />
                    </button>

                    <Link
                        href="/cart"
                        aria-label={`Открыть корзину. Товаров: ${totalItems}`}
                        className="relative flex flex-col items-center gap-1 active:text-[#21AA57]"
                    >
                        <ShoppingCart
                            className="h-6 w-6"
                            aria-hidden="true"
                        />

                        {totalItems > 0 && (
                            <span className="absolute -top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#D4AF37] text-[9px] font-bold text-white">
                                {totalItems}
                            </span>
                        )}

                        <span className="text-[10px] font-bold tracking-tighter uppercase">
                            Корзина
                        </span>
                    </Link>

                    <Link
                        href="/info"
                        className="flex flex-col items-center gap-1 active:text-[#21AA57]"
                    >
                        <Info className="h-6 w-6" aria-hidden="true" />

                        <span className="text-[10px] font-bold tracking-tighter uppercase">
                            Инфо
                        </span>
                    </Link>
                </div>
            </nav>

            {/* Панель контактов */}
            <AnimatePresence>
                {isContactOpen && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Закрыть панель контактов"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsContactOpen(false)}
                            className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm md:hidden"
                        />

                        <motion.div
                            id="mobile-contact-panel"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            className="fixed right-4 bottom-24 left-4 z-[70] rounded-[2.5rem] bg-white p-6 shadow-2xl md:hidden"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href={`https://wa.me/${seller.whatsappPhone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-3 rounded-3xl border border-[#21AA57]/10 bg-[#21AA57]/5 p-5 transition-transform active:scale-95"
                                >
                                    <MessageCircle
                                        className="h-8 w-8 text-[#21AA57]"
                                        aria-hidden="true"
                                    />

                                    <span className="text-xs font-bold text-[#29380E]">
                                        WhatsApp
                                    </span>
                                </a>

                                <a
                                    href={telegramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-3 rounded-3xl border border-[#0088cc]/10 bg-[#0088cc]/5 p-5 transition-transform active:scale-95"
                                >
                                    <Send
                                        className="h-8 w-8 text-[#0088cc]"
                                        aria-hidden="true"
                                    />

                                    <span className="text-xs font-bold text-[#29380E]">
                                        Telegram
                                    </span>
                                </a>

                                <a
                                    href={instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-3 rounded-3xl border border-[#e1306c]/10 bg-[#e1306c]/5 p-5 transition-transform active:scale-95"
                                >
                                    <Instagram
                                        className="h-8 w-8 text-[#e1306c]"
                                        aria-hidden="true"
                                    />

                                    <span className="text-xs font-bold text-[#29380E]">
                                        Instagram
                                    </span>
                                </a>

                                <a
                                    href={`tel:${seller.phoneHref}`}
                                    className="flex flex-col items-center gap-3 rounded-3xl border border-[#29380E]/10 bg-[#29380E]/5 p-5 transition-transform active:scale-95"
                                >
                                    <Phone
                                        className="h-8 w-8 text-[#29380E]"
                                        aria-hidden="true"
                                    />

                                    <span className="text-xs font-bold text-[#29380E]">
                                        Позвонить
                                    </span>
                                </a>
                            </div>

                            <p className="mt-5 text-center text-xs text-gray-500">
                                Телефон продавца: {seller.phone}
                            </p>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}