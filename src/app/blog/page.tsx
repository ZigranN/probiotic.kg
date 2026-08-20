import type { Metadata } from "next";

import Link from "next/link";

import {
    Activity,
    ArrowRight,
    Baby,
    BookOpen,
    Brain,
    HeartPulse,
    ShieldCheck,
    Sparkles,
    Utensils,
} from "lucide-react";

import { seller } from "@/config/seller";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
    title: "База знаний о микробиоте и пищеварении",

    description:
        "Материалы probiotic.kg о микробиоте кишечника, пищеварительном комфорте, питании, иммунной системе и пробиотиках.",

    alternates: {
        canonical: "/blog",
    },

    openGraph: {
        type: "website",
        locale: "ru_KG",
        siteName: seller.siteName,

        title:
            "База знаний о микробиоте и пищеварении | probiotic.kg",

        description:
            "Понятные материалы о микробиоте, пищеварении, питании и пробиотиках без обещаний лечения.",

        url: "/blog",
    },

    twitter: {
        card: "summary",

        title:
            "База знаний о микробиоте и пищеварении | probiotic.kg",

        description:
            "Понятные материалы о микробиоте, пищеварении, питании и пробиотиках.",
    },
};

// ==========================================
// TYPES
// ==========================================

interface BlogArticle {
    slug: string;
    title: string;
    description: string;
    category: string;
    icon: typeof BookOpen;
}

// ==========================================
// ARTICLES
// ==========================================
//
// Названия должны совпадать с:
// src/app/blog/[slug]/page.tsx
//
// Не используем здесь:
// - диагнозы;
// - обещания результата;
// - "80% иммунитета";
// - "дырявый кишечник";
// - лечение заболеваний пробиотиками.
// ==========================================

const articles: BlogArticle[] = [
    {
        slug: "microbiome",

        title:
            "Микробиота кишечника: что это и почему она важна",

        description:
            "Что такое микробиота, от чего зависит её состав и какое место пробиотические продукты могут занимать в ежедневном режиме.",

        category: "Микробиота",

        icon: Sparkles,
    },

    {
        slug: "bloating",

        title:
            "Почему может возникать вздутие живота",

        description:
            "Распространённые факторы пищеварительного дискомфорта, базовые привычки и ситуации, когда лучше обратиться к специалисту.",

        category: "Пищеварение",

        icon: Utensils,
    },

    {
        slug: "stool",

        title:
            "Почему может меняться регулярность стула",

        description:
            "Как питание, вода, движение, режим и другие факторы могут влиять на регулярность работы кишечника.",

        category: "Пищеварение",

        icon: Activity,
    },

    {
        slug: "immunity",

        title:
            "Кишечник, питание и иммунная система",

        description:
            "Почему иммунитет нельзя сводить только к кишечнику и какие повседневные факторы действительно имеют значение.",

        category: "Иммунная система",

        icon: ShieldCheck,
    },

    {
        slug: "energy",

        title:
            "Почему может снижаться уровень энергии",

        description:
            "Сон, питание, нагрузка, стресс и другие факторы, которые могут отражаться на повседневном самочувствии.",

        category: "Образ жизни",

        icon: Brain,
    },

    {
        slug: "women",

        title:
            "Женское здоровье и микрофлора: что важно понимать",

        description:
            "Почему микрофлора разных участков организма отличается и почему симптомы требуют понимания их причины.",

        category: "Женское здоровье",

        icon: HeartPulse,
    },

    {
        slug: "kids",

        title:
            "Пищеварение у детей: питание, режим и микробиота",

        description:
            "Базовые факторы пищеварительного комфорта у детей и почему выбор пробиотического продукта требует особого внимания.",

        category: "Дети",

        icon: Baby,
    },
];

// ==========================================
// PAGE
// ==========================================

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#F4F7F5] pb-24">
            {/* ==================================
                HERO
            ================================== */}

            <section className="relative overflow-hidden bg-[#29380E] py-20 text-white">
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                >
                    <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#21AA57]/20 blur-3xl" />

                    <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#21AA57]">
                        <BookOpen
                            className="h-8 w-8 text-white"
                            aria-hidden="true"
                        />
                    </div>

                    <p className="mb-3 text-xs font-black tracking-[0.22em] text-[#21AA57] uppercase">
                        probiotic.kg
                    </p>

                    <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-black tracking-tight uppercase italic md:text-6xl">
                        База знаний
                        <span className="text-[#21AA57]">
                            {" "}
                            о микробиоте
                        </span>
                    </h1>

                    <p className="mx-auto max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                        Понятные материалы о кишечнике,
                        питании, микробиоте и пробиотических
                        продуктах без обещаний лечения и
                        универсальных результатов.
                    </p>
                </div>
            </section>

            {/* ==================================
                INTRO
            ================================== */}

            <section className="py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-4xl rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                        <div className="flex items-start gap-4">
                            <ShieldCheck
                                className="mt-1 h-6 w-6 flex-shrink-0 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <div>
                                <h2 className="mb-2 text-lg font-black text-[#29380E]">
                                    Как читать материалы этого раздела
                                </h2>

                                <p className="text-sm leading-7 text-[#29380E]/60">
                                    Мы разделяем общую информацию
                                    о микробиоте и сведения о
                                    конкретных товарах. Свойства
                                    одного штамма, исследования или
                                    формы пробиотика нельзя
                                    автоматически переносить на
                                    другой продукт.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                ARTICLES
            ================================== */}

            <section>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-10">
                        <p className="mb-2 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Материалы
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-4xl">
                            Выберите тему
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article) => {
                            const Icon = article.icon;

                            return (
                                <Link
                                    key={article.slug}
                                    href={`/blog/${article.slug}`}
                                    className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    {/* Visual */}

                                    <div className="flex min-h-48 items-center justify-center bg-gradient-to-br from-[#21AA57]/15 via-[#F4F7F5] to-[#29380E]/10">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                                            <Icon
                                                className="h-9 w-9 text-[#21AA57]"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}

                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="mb-4">
                                            <span className="inline-flex rounded-full bg-[#F4F7F5] px-3 py-1.5 text-xs font-bold text-[#29380E]">
                                                {article.category}
                                            </span>
                                        </div>

                                        <h3 className="mb-3 text-xl font-black leading-snug tracking-tight text-[#29380E] transition-colors group-hover:text-[#21AA57]">
                                            {article.title}
                                        </h3>

                                        <p className="mb-6 flex-1 text-sm leading-7 text-[#29380E]/55">
                                            {article.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-bold text-[#21AA57]">
                                            Читать материал

                                            <ArrowRight
                                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ==================================
                MAXILIN CONTEXT
            ================================== */}

            <section className="mt-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="rounded-[2.5rem] bg-[#29380E] p-8 text-white md:p-12">
                        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Максилин
                                </p>

                                <h2 className="mb-4 text-3xl font-black tracking-tight uppercase italic">
                                    Информация о конкретном
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        продукте
                                    </span>
                                </h2>

                                <p className="max-w-3xl text-sm leading-7 text-white/65">
                                    Жидкий Максилин, сухие формы
                                    и продукты разных
                                    производителей могут
                                    отличаться составом,
                                    количеством микроорганизмов,
                                    технологией производства и
                                    способом применения.
                                </p>

                                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/45">
                                    Поэтому данные с научных
                                    материалов, патентов или
                                    других сайтов необходимо
                                    сопоставлять с маркировкой и
                                    документами конкретного SKU.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 lg:flex-col">
                                <Link
                                    href="/#catalog"
                                    className="inline-flex items-center justify-center rounded-xl bg-[#21AA57] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                                >
                                    Каталог товаров
                                </Link>

                                <Link
                                    href="/docs"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                                >
                                    Документы
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                DISCLAIMER
            ================================== */}

            <section className="mt-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-xs leading-6 text-[#29380E]/45">
                            Информация в разделе носит
                            справочный характер и не
                            предназначена для постановки
                            диагноза, назначения лечения или
                            замены консультации
                            квалифицированного специалиста.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}