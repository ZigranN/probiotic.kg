"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
    BookOpen,
    ChevronDown,
    Dna,
    FileText,
    Grid2X2,
    HeartPulse,
    Home,
    Menu,
    MessageCircle,
    Microscope,
    Phone,
    ShoppingCart,
    Sparkles,
    User,
    X,
} from "lucide-react";

import { useSession } from "next-auth/react";

import { seller } from "@/config/seller";
import { useCartStore } from "@/lib/store/cartStore";

// ==========================================
// DESKTOP DROPDOWNS
// ==========================================

const maxilinLinks = [
    {
        href: "/maxilin",
        title: "О Максилине",
        description:
            "Один штамм 2585 — три формы",
        icon: Sparkles,
    },
    {
        href: "/product/maxilin-liquid",
        title: "Жидкий Максилин",
        description:
            "Кисломолочная жидкая форма",
        icon: HeartPulse,
    },
    {
        href: "/product/maxilin-dry",
        title: "Сухой Максилин",
        description:
            "Кисломолочная форма · 20 саше",
        icon: Grid2X2,
    },
    {
        href: "/maxilin/superprobiotic",
        title: "Максилин Триллион",
        description:
            "SuperProbiotic · 50 саше",
        icon: Sparkles,
    },
    {
        href: "/maxilin/how-it-works",
        title: "Как работает",
        description:
            "Пробиотик и пищеварительный тракт",
        icon: BookOpen,
    },
    {
        href: "/maxilin/science",
        title: "Штамм 2585",
        description:
            "Наука, патент и документы",
        icon: Microscope,
    },
    {
        href: "/maxilin/gut-health",
        title: "Кишечник и микробиом",
        description:
            "Микробиота, питание и пробиотики",
        icon: HeartPulse,
    },
] as const;

const arginineLinks = [
    {
        href: "/l-arginine",
        title: "О L-Аргинине",
        description:
            "L-Arginine · аминокислота · NO",
    },
    {
        href: "/product/l-arginine-tmin",
        title: "L-Аргинин — Тмин",
        description:
            "Подъязычный формат",
    },
    {
        href: "/product/l-arginine-tmin-gvozdika",
        title: "Тмин + гвоздика",
        description:
            "L-Arginine EnergyMax",
    },
    {
        href: "/product/l-arginine-gvozdika",
        title: "L-Аргинин — Гвоздика",
        description:
            "Подъязычный формат",
    },
    {
        href: "/product/l-arginine-myata",
        title: "L-Аргинин — Мята",
        description:
            "Подъязычный формат",
    },
] as const;

// ==========================================
// HEADER
// ==========================================

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] =
        useState(false);

    const { data: session } =
        useSession();

    const totalItems =
        useCartStore(
            (state) =>
                state.getTotalItems(),
        );

    const whatsappUrl =
        `https://wa.me/${seller.whatsappPhone}?text=${encodeURIComponent(
            "Здравствуйте! Хочу узнать подробнее о продукции.",
        )}`;

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-[#A8A496]/20 bg-white/95 shadow-sm backdrop-blur-xl">
                <div className="container mx-auto flex min-h-[70px] items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
                    {/* ==================================
                        LOGO
                    ================================== */}

                    <Link
                        href="/"
                        aria-label="probiotic.kg — главная"
                        className="relative z-50 flex flex-shrink-0 items-center gap-2"
                        onClick={closeMenu}
                    >
                        <Image
                            src="/images/logo-main.webp"
                            alt="probiotic.kg — Максилин и продукция EnergyMax"
                            width={130}
                            height={36}
                            priority
                            className="h-auto w-[115px] object-contain lg:w-[130px]"
                        />

                        {/*
                         * Здесь НЕ используем h1.
                         *
                         * H1 должен быть уникальным
                         * заголовком конкретной страницы,
                         * а не повторяться внутри Header
                         * на всём сайте.
                         */}
                        <span className="hidden text-[9px] font-black tracking-[0.18em] text-[#29380E]/35 uppercase xl:inline">
                            Кыргызстан
                        </span>
                    </Link>

                    {/* ==================================
                        DESKTOP NAVIGATION
                    ================================== */}

                    <nav
                        aria-label="Основная навигация"
                        className="hidden items-center gap-1 lg:flex"
                    >
                        {/* MAXILIN */}

                        <div className="group relative">
                            <Link
                                href="/maxilin"
                                className="flex items-center gap-1 rounded-xl px-3 py-3 text-[12px] font-black tracking-wide text-[#29380E] uppercase transition hover:bg-[#F4F7F5] hover:text-[#21AA57]"
                            >
                                Максилин

                                <ChevronDown
                                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                                    aria-hidden="true"
                                />
                            </Link>

                            <div className="pointer-events-none absolute left-0 top-full w-[390px] translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                <div className="rounded-[1.75rem] border border-gray-100 bg-white p-3 shadow-2xl shadow-black/10">
                                    <div className="mb-2 px-3 py-2">
                                        <p className="text-[9px] font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                            Максилин
                                        </p>

                                        <p className="mt-1 text-xs text-[#29380E]/45">
                                            Пробиотики ·
                                            Lactobacillus
                                            acidophilus 2585
                                        </p>
                                    </div>

                                    <div className="grid gap-1">
                                        {maxilinLinks.map(
                                            ({
                                                 href,
                                                 title,
                                                 description,
                                                 icon: Icon,
                                             }) => (
                                                <Link
                                                    key={
                                                        href
                                                    }
                                                    href={
                                                        href
                                                    }
                                                    className="flex items-start gap-3 rounded-xl px-3 py-3 transition hover:bg-[#F4F7F5]"
                                                >
                                                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#21AA57]/10">
                                                        <Icon
                                                            className="h-4 w-4 text-[#21AA57]"
                                                            aria-hidden="true"
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="text-xs font-black text-[#29380E]">
                                                            {
                                                                title
                                                            }
                                                        </p>

                                                        <p className="mt-1 text-[10px] leading-4 text-[#29380E]/45">
                                                            {
                                                                description
                                                            }
                                                        </p>
                                                    </div>
                                                </Link>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* L-ARGININE */}

                        <div className="group relative">
                            <Link
                                href="/l-arginine"
                                className="flex items-center gap-1 rounded-xl px-3 py-3 text-[12px] font-black tracking-wide text-[#29380E] uppercase transition hover:bg-[#F4F7F5] hover:text-[#21AA57]"
                            >
                                L-Аргинин

                                <ChevronDown
                                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                                    aria-hidden="true"
                                />
                            </Link>

                            <div className="pointer-events-none absolute left-0 top-full w-[350px] translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                <div className="rounded-[1.75rem] border border-gray-100 bg-white p-3 shadow-2xl shadow-black/10">
                                    <div className="mb-2 px-3 py-2">
                                        <div className="flex items-center gap-2">
                                            <Dna
                                                className="h-4 w-4 text-[#21AA57]"
                                                aria-hidden="true"
                                            />

                                            <p className="text-[9px] font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                                L-Arginine
                                            </p>
                                        </div>

                                        <p className="mt-2 text-xs text-[#29380E]/45">
                                            Аминокислота ·
                                            оксид азота NO ·
                                            EnergyMax
                                        </p>
                                    </div>

                                    <div className="grid gap-1">
                                        {arginineLinks.map(
                                            ({
                                                 href,
                                                 title,
                                                 description,
                                             }) => (
                                                <Link
                                                    key={
                                                        href
                                                    }
                                                    href={
                                                        href
                                                    }
                                                    className="rounded-xl px-3 py-3 transition hover:bg-[#F4F7F5]"
                                                >
                                                    <p className="text-xs font-black text-[#29380E]">
                                                        {
                                                            title
                                                        }
                                                    </p>

                                                    <p className="mt-1 text-[10px] text-[#29380E]/45">
                                                        {
                                                            description
                                                        }
                                                    </p>
                                                </Link>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* GUT HEALTH */}

                        <Link
                            href="/maxilin/gut-health"
                            className="rounded-xl px-3 py-3 text-[12px] font-black tracking-wide text-[#29380E] uppercase transition hover:bg-[#F4F7F5] hover:text-[#21AA57]"
                        >
                            Кишечник
                        </Link>

                        {/* CATALOG */}

                        <Link
                            href="/#catalog"
                            className="rounded-xl px-3 py-3 text-[12px] font-black tracking-wide text-[#29380E] uppercase transition hover:bg-[#F4F7F5] hover:text-[#21AA57]"
                        >
                            Каталог
                        </Link>

                        {/* DOCUMENTS */}

                        <Link
                            href="/docs"
                            className="rounded-xl px-3 py-3 text-[12px] font-black tracking-wide text-[#29380E] uppercase transition hover:bg-[#F4F7F5] hover:text-[#21AA57]"
                        >
                            Документы
                        </Link>
                    </nav>

                    {/* ==================================
                        DESKTOP ACTIONS
                    ================================== */}

                    <div className="hidden items-center gap-2 md:flex">
                        <a
                            href={`tel:${seller.phoneHref}`}
                            aria-label={`Позвонить ${seller.phone}`}
                            className="hidden items-center gap-2 rounded-xl px-3 py-2 font-black text-[#29380E] transition hover:bg-[#F4F7F5] hover:text-[#21AA57] xl:flex"
                        >
                            <Phone
                                className="h-4 w-4 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span className="text-xs">
                                {
                                    seller.phone
                                }
                            </span>
                        </a>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Написать в WhatsApp"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#21AA57]/10 transition hover:bg-[#21AA57] hover:text-white"
                        >
                            <MessageCircle
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </a>

                        <Link
                            href="/cart"
                            aria-label={`Корзина, товаров: ${totalItems}`}
                            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F7F5] transition hover:bg-[#21AA57]/10"
                        >
                            <ShoppingCart
                                className="h-5 w-5 text-[#29380E]"
                                aria-hidden="true"
                            />

                            {totalItems >
                                0 && (
                                    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#D4AF37] px-1 text-[9px] font-black text-white">
                                    {
                                        totalItems
                                    }
                                </span>
                                )}
                        </Link>

                        {session ? (
                            <Link
                                href="/dashboard"
                                className="hidden items-center gap-2 rounded-full bg-[#21AA57] px-4 py-2.5 text-xs font-black text-white transition hover:bg-[#1d914a] xl:flex"
                            >
                                <User
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />

                                Кабинет
                            </Link>
                        ) : (
                            <Link
                                href="/auth/login"
                                className="hidden items-center gap-2 rounded-full bg-[#F4F7F5] px-4 py-2.5 text-xs font-black text-[#29380E] transition hover:bg-[#21AA57] hover:text-white xl:flex"
                            >
                                <User
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />

                                Войти
                            </Link>
                        )}
                    </div>

                    {/* ==================================
                        MOBILE BUTTON
                    ================================== */}

                    <button
                        type="button"
                        aria-label={
                            isMenuOpen
                                ? "Закрыть меню"
                                : "Открыть меню"
                        }
                        aria-expanded={
                            isMenuOpen
                        }
                        onClick={() =>
                            setIsMenuOpen(
                                (value) =>
                                    !value,
                            )
                        }
                        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F7F5] text-[#29380E] md:hidden"
                    >
                        {isMenuOpen ? (
                            <X
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        ) : (
                            <Menu
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        )}
                    </button>
                </div>

                {/* ==================================
                    MOBILE MENU
                ================================== */}

                {isMenuOpen && (
                    <div className="absolute left-0 top-full max-h-[calc(100vh-70px)] w-full overflow-y-auto border-t border-gray-100 bg-white px-4 pb-28 pt-5 shadow-xl md:hidden">
                        <nav
                            aria-label="Мобильная навигация"
                            className="container mx-auto"
                        >
                            {/* MAIN SEO LINKS */}

                            <div className="grid gap-2">
                                <MobileMainLink
                                    href="/maxilin"
                                    icon={
                                        Sparkles
                                    }
                                    title="Максилин"
                                    subtitle="Три формы · штамм 2585"
                                    onClick={
                                        closeMenu
                                    }
                                />

                                <MobileMainLink
                                    href="/l-arginine"
                                    icon={Dna}
                                    title="L-Аргинин"
                                    subtitle="L-Arginine · аминокислота · NO"
                                    onClick={
                                        closeMenu
                                    }
                                />

                                <MobileMainLink
                                    href="/maxilin/gut-health"
                                    icon={
                                        HeartPulse
                                    }
                                    title="Кишечник и микробиом"
                                    subtitle="Микробиота · питание · пробиотики"
                                    onClick={
                                        closeMenu
                                    }
                                />

                                <MobileMainLink
                                    href="/#catalog"
                                    icon={
                                        Grid2X2
                                    }
                                    title="Каталог"
                                    subtitle="Все товары EnergyMax"
                                    onClick={
                                        closeMenu
                                    }
                                />
                            </div>

                            {/* MAXILIN LINKS */}

                            <div className="mt-7">
                                <p className="px-2 text-[9px] font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Максилин
                                </p>

                                <div className="mt-2 grid grid-cols-2 gap-2">
                                    <MobileSmallLink
                                        href="/product/maxilin-liquid"
                                        title="Жидкий"
                                        onClick={
                                            closeMenu
                                        }
                                    />

                                    <MobileSmallLink
                                        href="/product/maxilin-dry"
                                        title="Сухой"
                                        onClick={
                                            closeMenu
                                        }
                                    />

                                    <MobileSmallLink
                                        href="/maxilin/superprobiotic"
                                        title="Триллион"
                                        onClick={
                                            closeMenu
                                        }
                                    />

                                    <MobileSmallLink
                                        href="/maxilin/science"
                                        title="Штамм 2585"
                                        onClick={
                                            closeMenu
                                        }
                                    />

                                    <MobileSmallLink
                                        href="/maxilin/how-it-works"
                                        title="Как работает"
                                        onClick={
                                            closeMenu
                                        }
                                    />

                                    <MobileSmallLink
                                        href="/docs"
                                        title="Документы"
                                        onClick={
                                            closeMenu
                                        }
                                    />
                                </div>
                            </div>

                            {/* ADDITIONAL */}

                            <div className="mt-7 border-t border-gray-100 pt-5">
                                <p className="px-2 text-[9px] font-black tracking-[0.2em] text-[#29380E]/35 uppercase">
                                    Дополнительно
                                </p>

                                <div className="mt-3 grid gap-1">
                                    <MobileTextLink
                                        href="/about"
                                        title="О компании"
                                        onClick={
                                            closeMenu
                                        }
                                    />

                                    <MobileTextLink
                                        href="/faq"
                                        title="Вопросы и ответы"
                                        onClick={
                                            closeMenu
                                        }
                                    />

                                    <MobileTextLink
                                        href="/blog"
                                        title="Полезные материалы"
                                        onClick={
                                            closeMenu
                                        }
                                    />

                                    <MobileTextLink
                                        href="/business"
                                        title="Партнёрство EnergyMax"
                                        onClick={
                                            closeMenu
                                        }
                                    />
                                </div>
                            </div>

                            {/* CONTACT */}

                            <div className="mt-7 grid gap-3">
                                <a
                                    href={
                                        whatsappUrl
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={
                                        closeMenu
                                    }
                                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#21AA57] px-5 py-4 text-sm font-black text-white"
                                >
                                    <MessageCircle
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />

                                    Написать
                                    в WhatsApp
                                </a>

                                <a
                                    href={`tel:${seller.phoneHref}`}
                                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#F4F7F5] px-5 py-4 text-sm font-black text-[#29380E]"
                                >
                                    <Phone
                                        className="h-4 w-4 text-[#21AA57]"
                                        aria-hidden="true"
                                    />

                                    {
                                        seller.phone
                                    }
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* ==================================
                MOBILE BOTTOM NAVIGATION
            ================================== */}

            <nav
                aria-label="Быстрая навигация"
                className="fixed bottom-0 left-0 right-0 z-[60] grid grid-cols-4 border-t border-gray-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-5px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl md:hidden"
            >
                <BottomLink
                    href="/"
                    icon={Home}
                    label="Главная"
                />

                <BottomLink
                    href="/#catalog"
                    icon={Grid2X2}
                    label="Каталог"
                />

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[62px] flex-col items-center justify-center gap-1 text-[#21AA57]"
                >
                    <MessageCircle
                        className="h-5 w-5"
                        aria-hidden="true"
                    />

                    <span className="text-[9px] font-black uppercase">
                        WhatsApp
                    </span>
                </a>

                <Link
                    href="/cart"
                    className="relative flex min-h-[62px] flex-col items-center justify-center gap-1 text-[#29380E]"
                >
                    <ShoppingCart
                        className="h-5 w-5"
                        aria-hidden="true"
                    />

                    <span className="text-[9px] font-black uppercase">
                        Корзина
                    </span>

                    {totalItems > 0 && (
                        <span className="absolute right-[calc(50%-20px)] top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#D4AF37] px-1 text-[8px] font-black text-white">
                            {totalItems}
                        </span>
                    )}
                </Link>
            </nav>
        </>
    );
}

// ==========================================
// MOBILE MAIN LINK
// ==========================================

function MobileMainLink({
                            href,
                            icon: Icon,
                            title,
                            subtitle,
                            onClick,
                        }: {
    href: string;
    icon: typeof Sparkles;
    title: string;
    subtitle: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="flex items-center gap-4 rounded-2xl bg-[#F4F7F5] p-4"
        >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#21AA57]/10">
                <Icon
                    className="h-5 w-5 text-[#21AA57]"
                    aria-hidden="true"
                />
            </div>

            <div>
                <p className="text-sm font-black text-[#29380E]">
                    {title}
                </p>

                <p className="mt-1 text-[10px] leading-4 text-[#29380E]/45">
                    {subtitle}
                </p>
            </div>
        </Link>
    );
}

// ==========================================
// MOBILE SMALL LINK
// ==========================================

function MobileSmallLink({
                             href,
                             title,
                             onClick,
                         }: {
    href: string;
    title: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="rounded-xl bg-[#F4F7F5] px-4 py-3 text-xs font-black text-[#29380E]"
        >
            {title}
        </Link>
    );
}

// ==========================================
// MOBILE TEXT LINK
// ==========================================

function MobileTextLink({
                            href,
                            title,
                            onClick,
                        }: {
    href: string;
    title: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="rounded-xl px-2 py-2.5 text-sm font-bold text-[#29380E]/70"
        >
            {title}
        </Link>
    );
}

// ==========================================
// BOTTOM LINK
// ==========================================

function BottomLink({
                        href,
                        icon: Icon,
                        label,
                    }: {
    href: string;
    icon: typeof Home;
    label: string;
}) {
    return (
        <Link
            href={href}
            className="flex min-h-[62px] flex-col items-center justify-center gap-1 text-[#29380E]"
        >
            <Icon
                className="h-5 w-5"
                aria-hidden="true"
            />

            <span className="text-[9px] font-black uppercase">
                {label}
            </span>
        </Link>
    );
}