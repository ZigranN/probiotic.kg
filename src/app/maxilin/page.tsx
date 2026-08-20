import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    FileText,
    FlaskConical,
    HeartPulse,
    Microscope,
    PackageCheck,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { seller } from "@/config/seller";

import {
    MAXILIN_POSITIONING,
    MAXILIN_STRAIN,
    gutHealthPillars,
    maxilinFaq,
    maxilinForms,
    maxilinHistory,
    maxilinHowItWorks,
    maxilinScience,
    scienceMilestones,
    superProbiotic50,
    type MaxilinFormId,
} from "@/data/maxilin";

// ==========================================
// SEO
// ==========================================

export const metadata: Metadata = {
    title:
        "Максилин: 3 формы, штамм 2585 и документы",

    description:
        "Три формы Максилина на основе Lactobacillus acidophilus 2585: жидкий Максилин, сухой Максилин 20 саше и Максилин Триллион 50 саше. Различия форм, CFU, история, документы и FAQ.",

    alternates: {
        canonical: "/maxilin",
    },

    openGraph: {
        type: "website",
        locale: "ru_KG",
        siteName: seller.siteName,

        title:
            "Один штамм 2585 — три формы Максилина",

        description:
            "Жидкий, сухой и Максилин Триллион: чем отличаются три формы одной линейки.",

        url: "/maxilin",
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Один штамм 2585 — три формы Максилина",

        description:
            "Жидкий Максилин, сухой Максилин и Максилин Триллион.",
    },
};

// ==========================================
// FORM VISUALS
// ==========================================
//
// Изображения держим отдельно от фактических
// характеристик продукта.
//
// Поэтому src/data/maxilin.ts остаётся
// единым источником продуктовой информации.
// ==========================================

const FORM_VISUALS: Record<
    MaxilinFormId,
    {
        image: string;
        href: string;
        badge: string;
    }
> = {
    liquid: {
        image:
            "/images/maxilinAlmata.jpeg",

        href:
            "/product/maxilin-liquid",

        badge:
            "Жидкая форма",
    },

    "dry-milk-20": {
        image:
            "/images/suhoiMaxilin.jpeg",

        href:
            "/product/maxilin-dry",

        badge:
            "20 саше",
    },

    "superprobiotic-50": {
        image:
            "/images/superprobiotic.jpeg",

        /*
         * Пока отдельная информационная
         * страница надёжнее прямой карточки
         * из Neon.
         *
         * После синхронизации БД можно
         * заменить на:
         *
         * /product/maxilin-superprobiotic-50
         */
        href:
            "/maxilin/superprobiotic",

        badge:
            "50 саше · 1 Trillion CFU",
    },
};

// ==========================================
// PAGE
// ==========================================

export default function MaxilinPage() {
    const whatsappText =
        encodeURIComponent(
            "Здравствуйте! Хочу подобрать подходящую форму Максилина.",
        );

    const whatsappUrl =
        `https://wa.me/${seller.whatsappPhone}?text=${whatsappText}`;

    return (
        <main className="min-h-screen bg-[#F4F7F5] pb-24">
            {/* ==================================
                HERO
            ================================== */}

            <section className="relative overflow-hidden bg-[#29380E] py-20 text-white md:py-28">
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                >
                    <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#21AA57]/25 blur-3xl" />

                    <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr]">
                    {/* TEXT */}

                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                            <Microscope
                                className="h-4 w-4 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span className="text-xs font-black tracking-[0.2em] text-white/75 uppercase">
                                {MAXILIN_POSITIONING.eyebrow}
                            </span>
                        </div>

                        <h1 className="mb-6 text-4xl leading-none font-black tracking-tight uppercase italic md:text-6xl lg:text-7xl">
                            Один штамм
                            <span className="text-[#21AA57]">
                                {" "}
                                2585
                            </span>
                            <br />
                            три формы Максилина
                        </h1>

                        <p className="max-w-3xl text-base leading-8 text-white/70 md:text-lg">
                            {
                                MAXILIN_POSITIONING.intro
                            }
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-[10px] font-black tracking-widest text-white/40 uppercase">
                                    Вид
                                </p>

                                <p className="mt-1 text-sm font-black">
                                    {
                                        MAXILIN_STRAIN.species
                                    }
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-[10px] font-black tracking-widest text-white/40 uppercase">
                                    Штамм
                                </p>

                                <p className="mt-1 text-sm font-black text-[#21AA57]">
                                    {
                                        MAXILIN_STRAIN.strain
                                    }
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-[10px] font-black tracking-widest text-white/40 uppercase">
                                    Форм
                                </p>

                                <p className="mt-1 text-sm font-black">
                                    3
                                </p>
                            </div>
                        </div>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link
                                href="#forms"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                            >
                                Сравнить 3 формы

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>

                            <Link
                                href="/docs"
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                            >
                                Документы

                                <FileText
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* PRODUCT IMAGE */}

                    <div className="relative mx-auto w-full max-w-xl">
                        <div
                            aria-hidden="true"
                            className="absolute inset-10 rounded-full bg-[#21AA57]/20 blur-3xl"
                        />

                        <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl">
                            <Image
                                src="/images/superprobiotic.jpeg"
                                alt="Максилин Триллион — SuperProbiotic 50 саше"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 45vw"
                                className="object-contain p-6"
                            />
                        </div>

                        {/* Floating label */}

                        <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white p-5 text-[#29380E] shadow-xl md:left-10 md:right-10">
                            <div className="grid grid-cols-3 divide-x divide-gray-100 text-center">
                                <div className="px-2">
                                    <p className="text-xl font-black text-[#21AA57]">
                                        50
                                    </p>

                                    <p className="mt-1 text-[9px] font-bold tracking-wide text-[#29380E]/40 uppercase">
                                        саше
                                    </p>
                                </div>

                                <div className="px-2">
                                    <p className="text-xl font-black text-[#21AA57]">
                                        20 млрд
                                    </p>

                                    <p className="mt-1 text-[9px] font-bold tracking-wide text-[#29380E]/40 uppercase">
                                        CFU / саше
                                    </p>
                                </div>

                                <div className="px-2">
                                    <p className="text-xl font-black text-[#21AA57]">
                                        1 трлн
                                    </p>

                                    <p className="mt-1 text-[9px] font-bold tracking-wide text-[#29380E]/40 uppercase">
                                        CFU / упаковка
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                POSITIONING NOTICE
            ================================== */}

            <section className="relative z-10 -mt-1 pt-14">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#21AA57]/10 bg-white p-6 shadow-sm md:p-8">
                        <div className="flex items-start gap-4">
                            <ShieldCheck
                                className="mt-1 h-6 w-6 flex-shrink-0 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <div>
                                <h2 className="mb-2 text-lg font-black text-[#29380E]">
                                    Что объединяет три формы
                                </h2>

                                <p className="text-sm leading-7 text-[#29380E]/60">
                                    {
                                        MAXILIN_POSITIONING.important
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                3 FORMS
            ================================== */}

            <section
                id="forms"
                className="scroll-mt-28 py-20"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Три формы
                        </p>

                        <h2 className="mb-5 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Какой Максилин
                            <span className="text-[#21AA57]">
                                {" "}
                                выбрать
                            </span>
                        </h2>

                        <p className="text-base leading-8 text-[#29380E]/60">
                            Во всех трёх представленных
                            формах используется{" "}
                            <strong className="font-black text-[#29380E]">
                                Lactobacillus acidophilus
                                2585
                            </strong>
                            . Различаются форма выпуска,
                            производственная среда, упаковка,
                            концентрация и условия хранения.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {maxilinForms.map(
                            (form, index) => {
                                const visual =
                                    FORM_VISUALS[form.id];

                                const isSuper =
                                    form.id ===
                                    "superprobiotic-50";

                                return (
                                    <article
                                        key={form.id}
                                        id={
                                            isSuper
                                                ? "superprobiotic"
                                                : undefined
                                        }
                                        className={`flex h-full flex-col overflow-hidden rounded-[2.5rem] border bg-white shadow-sm ${
                                            isSuper
                                                ? "border-[#21AA57] ring-2 ring-[#21AA57]/10"
                                                : "border-gray-100"
                                        }`}
                                    >
                                        {/* IMAGE */}

                                        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#21AA57]/10 via-[#F4F7F5] to-white">
                                            <Image
                                                src={
                                                    visual.image
                                                }
                                                alt={
                                                    form.name
                                                }
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 33vw"
                                                className="object-contain p-6"
                                            />

                                            <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black tracking-wide text-[#21AA57] uppercase shadow-sm">
                                                {
                                                    visual.badge
                                                }
                                            </div>

                                            <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#29380E] text-xs font-black text-white">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* CONTENT */}

                                        <div className="flex flex-1 flex-col p-7">
                                            {form.period && (
                                                <p className="mb-3 text-[10px] font-black tracking-[0.15em] text-[#21AA57] uppercase">
                                                    {
                                                        form.period
                                                    }
                                                </p>
                                            )}

                                            <h3 className="text-2xl font-black tracking-tight text-[#29380E]">
                                                {form.name}
                                            </h3>

                                            <p className="mt-2 text-sm font-semibold text-[#29380E]/50">
                                                {form.form}
                                            </p>

                                            {/* PACK */}

                                            <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#F4F7F5] px-4 py-3">
                                                <PackageCheck
                                                    className="h-4 w-4 flex-shrink-0 text-[#21AA57]"
                                                    aria-hidden="true"
                                                />

                                                <span className="text-xs font-bold text-[#29380E]">
                                                    {
                                                        form.pack
                                                    }
                                                </span>
                                            </div>

                                            {/* BASE */}

                                            <div className="mt-4">
                                                <p className="text-[10px] font-black tracking-wider text-[#29380E]/35 uppercase">
                                                    Производственная
                                                    среда
                                                </p>

                                                <p className="mt-1 text-sm leading-6 text-[#29380E]/65">
                                                    {
                                                        form.base
                                                    }
                                                </p>
                                            </div>

                                            {/* CFU */}

                                            {form.cfuLabel && (
                                                <div className="mt-4 rounded-xl border border-[#21AA57]/15 bg-[#21AA57]/5 p-4">
                                                    <p className="text-xs font-black leading-5 text-[#21AA57]">
                                                        {
                                                            form.cfuLabel
                                                        }
                                                    </p>
                                                </div>
                                            )}

                                            {/* BENEFITS */}

                                            <ul className="mt-6 flex-1 space-y-3">
                                                {form.keyPoints.map(
                                                    (
                                                        point,
                                                    ) => (
                                                        <li
                                                            key={
                                                                point
                                                            }
                                                            className="flex items-start gap-3 text-sm leading-6 text-[#29380E]/65"
                                                        >
                                                            <CheckCircle2
                                                                className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#21AA57]"
                                                                aria-hidden="true"
                                                            />

                                                            <span>
                                                                {
                                                                    point
                                                                }
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>

                                            {/* NOTE */}

                                            <p className="mt-6 border-t border-gray-100 pt-5 text-xs leading-6 text-[#29380E]/45">
                                                {
                                                    form.comparisonNote
                                                }
                                            </p>

                                            {/* CTA */}

                                            <Link
                                                href={
                                                    visual.href
                                                }
                                                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-black transition-transform hover:scale-[1.01] ${
                                                    isSuper
                                                        ? "bg-[#21AA57] text-white"
                                                        : "bg-[#29380E] text-white"
                                                }`}
                                            >
                                                Подробнее

                                                <ArrowRight
                                                    className="h-4 w-4"
                                                    aria-hidden="true"
                                                />
                                            </Link>
                                        </div>
                                    </article>
                                );
                            },
                        )}
                    </div>
                </div>
            </section>

            {/* ==================================
                HISTORY
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            История линейки
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Как появились
                            <span className="text-[#21AA57]">
                                {" "}
                                три формы
                            </span>
                        </h2>
                    </div>

                    <div className="mx-auto max-w-5xl space-y-5">
                        {maxilinHistory.map(
                            (item, index) => (
                                <article
                                    key={item.title}
                                    className="grid gap-5 rounded-[2rem] bg-[#F4F7F5] p-6 md:grid-cols-[120px_1fr] md:p-8"
                                >
                                    <div>
                                        <span className="text-[10px] font-black tracking-wider text-[#29380E]/30 uppercase">
                                            Этап{" "}
                                            {String(
                                                index + 1,
                                            ).padStart(
                                                2,
                                                "0",
                                            )}
                                        </span>

                                        <p className="mt-2 text-xl font-black text-[#21AA57]">
                                            {item.year}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-black text-[#29380E]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#29380E]/60">
                                            {item.text}
                                        </p>

                                        {"details" in item &&
                                            item.details && (
                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {item.details.map(
                                                        (
                                                            detail,
                                                        ) => (
                                                            <span
                                                                key={
                                                                    detail
                                                                }
                                                                className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#29380E]/60"
                                                            >
                                                                {
                                                                    detail
                                                                }
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                    </div>
                                </article>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* ==================================
                SUPERPROBIOTIC
            ================================== */}

            <section
                id="trillion"
                className="scroll-mt-28 py-20"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="overflow-hidden rounded-[3rem] bg-[#29380E] text-white">
                        <div className="grid lg:grid-cols-2">
                            {/* IMAGE */}

                            <div className="relative min-h-[390px] bg-white/5">
                                <Image
                                    src="/images/superprobiotic.jpeg"
                                    alt="Максилин Триллион SuperProbiotic — 50 саше"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-contain p-8"
                                />
                            </div>

                            {/* CONTENT */}

                            <div className="p-8 md:p-12">
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#21AA57]/15 px-4 py-2">
                                    <Sparkles
                                        className="h-4 w-4 text-[#21AA57]"
                                        aria-hidden="true"
                                    />

                                    <span className="text-xs font-black tracking-widest text-[#21AA57] uppercase">
                                        Третья форма
                                    </span>
                                </div>

                                <h2 className="mb-4 text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                    Максилин
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        Триллион
                                    </span>
                                </h2>

                                <p className="text-sm leading-7 text-white/65">
                                    {
                                        superProbiotic50.note
                                    }
                                </p>

                                {/* NUMBERS */}

                                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    <FactCard
                                        value="1"
                                        label="штамм"
                                    />

                                    <FactCard
                                        value="20 млрд"
                                        label="CFU / саше"
                                    />

                                    <FactCard
                                        value="50"
                                        label="саше"
                                    />

                                    <FactCard
                                        value="1 трлн"
                                        label="CFU / упаковка"
                                    />
                                </div>

                                {/* CALCULATION */}

                                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <p className="text-[10px] font-black tracking-widest text-white/40 uppercase">
                                        Расчёт
                                    </p>

                                    <p className="mt-2 text-lg font-black text-[#21AA57]">
                                        {
                                            superProbiotic50.calculation
                                        }
                                    </p>
                                </div>

                                {/* DETAILS */}

                                <div className="mt-6 space-y-3 text-sm leading-6 text-white/65">
                                    <p>
                                        <strong className="text-white">
                                            Штамм:
                                        </strong>{" "}
                                        {
                                            superProbiotic50.strain
                                        }
                                    </p>

                                    <p>
                                        <strong className="text-white">
                                            Основа:
                                        </strong>{" "}
                                        {
                                            superProbiotic50.base
                                        }
                                    </p>

                                    <p>
                                        <strong className="text-white">
                                            Производство:
                                        </strong>{" "}
                                        {
                                            superProbiotic50.production
                                        }
                                    </p>

                                    <p>
                                        <strong className="text-white">
                                            Цена:
                                        </strong>{" "}
                                        <span className="font-black text-[#21AA57]">
                                            7 800 сом
                                        </span>
                                    </p>
                                </div>

                                <Link
                                    href="/maxilin/superprobiotic"
                                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white"
                                >
                                    Подробнее о Триллионе

                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                HOW IT WORKS
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div className="lg:sticky lg:top-28">
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Как работает
                            </p>

                            <h2 className="mb-5 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                От продукта
                                <span className="text-[#21AA57]">
                                    {" "}
                                    к кишечной среде
                                </span>
                            </h2>

                            <p className="text-base leading-8 text-[#29380E]/60">
                                Механизм объясняем без
                                обещаний лечения или
                                результата за фиксированный
                                срок.
                            </p>

                            <Link
                                href="/maxilin/how-it-works"
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#29380E] px-5 py-3.5 text-sm font-black text-white"
                            >
                                Подробнее

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {maxilinHowItWorks.map(
                                (item) => (
                                    <article
                                        key={item.step}
                                        className="grid grid-cols-[auto_1fr] gap-5 rounded-[2rem] bg-[#F4F7F5] p-6"
                                    >
                                        <span className="text-3xl font-black text-[#21AA57]/30">
                                            {item.step}
                                        </span>

                                        <div>
                                            <h3 className="font-black text-[#29380E]">
                                                {
                                                    item.title
                                                }
                                            </h3>

                                            <p className="mt-2 text-sm leading-7 text-[#29380E]/60">
                                                {
                                                    item.text
                                                }
                                            </p>
                                        </div>
                                    </article>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                SCIENCE
            ================================== */}

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Штамм и технология
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Что можно
                            <span className="text-[#21AA57]">
                                {" "}
                                проверить
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {scienceMilestones.map(
                            (item) => (
                                <article
                                    key={item.title}
                                    className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm"
                                >
                                    <div className="mb-5 text-2xl font-black text-[#21AA57]">
                                        {item.year}
                                    </div>

                                    <h3 className="font-black text-[#29380E]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#29380E]/60">
                                        {item.text}
                                    </p>
                                </article>
                            ),
                        )}
                    </div>

                    {/* PATENT */}

                    <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] bg-[#29380E] p-7 text-white md:p-9">
                        <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21AA57]">
                                <FlaskConical
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <p className="text-xs font-black tracking-wider text-[#21AA57] uppercase">
                                    {
                                        maxilinScience.patent.code
                                    }
                                </p>

                                <h3 className="mt-1 text-xl font-black">
                                    {
                                        maxilinScience.patent.title
                                    }
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/55">
                                    {
                                        maxilinScience.patent.text
                                    }
                                </p>
                            </div>

                            <Link
                                href="/docs"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#29380E]"
                            >
                                Документы

                                <FileText
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                GUT HEALTH
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <HeartPulse
                            className="mx-auto mb-5 h-10 w-10 text-[#21AA57]"
                            aria-hidden="true"
                        />

                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Здоровье кишечника
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Пробиотик —
                            <span className="text-[#21AA57]">
                                {" "}
                                часть режима
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {gutHealthPillars.map(
                            (item) => (
                                <article
                                    key={item.title}
                                    className="rounded-[2rem] bg-[#F4F7F5] p-6"
                                >
                                    <BadgeCheck
                                        className="mb-5 h-6 w-6 text-[#21AA57]"
                                        aria-hidden="true"
                                    />

                                    <h3 className="font-black text-[#29380E]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#29380E]/60">
                                        {item.text}
                                    </p>
                                </article>
                            ),
                        )}
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href="/maxilin/gut-health"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#29380E] px-6 py-4 text-sm font-black text-white"
                        >
                            Здоровье кишечника

                            <ArrowRight
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ==================================
                FAQ
            ================================== */}

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-10 text-center">
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                FAQ
                            </p>

                            <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Частые вопросы
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {maxilinFaq.map(
                                (item) => (
                                    <details
                                        key={
                                            item.question
                                        }
                                        className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                                    >
                                        <summary className="cursor-pointer list-none pr-6 font-black text-[#29380E]">
                                            {
                                                item.question
                                            }
                                        </summary>

                                        <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-[#29380E]/60">
                                            {
                                                item.answer
                                            }
                                        </p>
                                    </details>
                                ),
                            )}
                        </div>

                        <div className="mt-8 text-center">
                            <Link
                                href="/faq"
                                className="inline-flex items-center gap-2 text-sm font-black text-[#21AA57]"
                            >
                                Все вопросы и ответы

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                FINAL CTA
            ================================== */}

            <section>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#21AA57] p-8 text-center text-white md:p-12">
                        <Sparkles
                            className="mx-auto mb-5 h-10 w-10"
                            aria-hidden="true"
                        />

                        <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                            Не знаете, какую форму выбрать?
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                            Подскажем различия по форме,
                            упаковке, хранению, наличию и
                            оформлению заказа.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#21AA57]"
                            >
                                Написать в WhatsApp

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </a>

                            <Link
                                href="/#catalog"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-black text-white"
                            >
                                Перейти в каталог
                            </Link>
                        </div>

                        <p className="mx-auto mt-8 max-w-3xl text-xs leading-6 text-white/65">
                            Информация на сайте носит
                            справочный характер. При выборе
                            конкретной формы необходимо
                            учитывать маркировку и документы
                            соответствующего товара.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

// ==========================================
// FACT CARD
// ==========================================

function FactCard({
                      value,
                      label,
                  }: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-xl font-black text-[#21AA57]">
                {value}
            </p>

            <p className="mt-1 text-[9px] font-black tracking-wider text-white/40 uppercase">
                {label}
            </p>
        </div>
    );
}