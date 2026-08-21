import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
    ArrowRight,
    CheckCircle2,
    Dna,
    FileText,
    Globe2,
    MessageCircle,
    PackageCheck,
    ShieldCheck,
    Truck,
} from "lucide-react";

import { seller } from "@/config/seller";

// ==========================================
// SEO
// ==========================================

export const metadata: Metadata = {
    title: {
        absolute:
            "Максилин Триллион — SuperProbiotic 50 саше | probiotic.kg",
    },

    description:
        "Максилин Триллион Maxilin SuperProbiotic: 1 штамм Lactobacillus acidophilus 2585, 20 млрд CFU в саше, 50 саше, 1 триллион CFU в упаковке. Цена 7 800 сом.",

    alternates: {
        canonical:
            "/maxilin/superprobiotic",
    },

    openGraph: {
        type:
            "website",

        locale:
            "ru_KG",

        siteName:
        seller.siteName,

        url:
            "/maxilin/superprobiotic",

        title:
            "Максилин Триллион — Maxilin SuperProbiotic",

        description:
            "50 саше · 20 млрд CFU в одном саше · 1 триллион CFU в упаковке · Lactobacillus acidophilus 2585.",

        images: [
            {
                url:
                    "/images/superprobiotic.jpeg",

                alt:
                    "Максилин Триллион Maxilin SuperProbiotic 50 саше",
            },
        ],
    },

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,

            "max-image-preview":
                "large",

            "max-snippet":
                -1,

            "max-video-preview":
                -1,
        },
    },
};

// ==========================================
// FAQ
// ==========================================

const faq = [
    {
        question:
            "Что такое Максилин Триллион?",

        answer:
            "Максилин Триллион — сухая немолочная форма Maxilin SuperProbiotic в упаковке 50 саше. В представленной версии используется Lactobacillus acidophilus 2585.",
    },

    {
        question:
            "Почему он называется Триллион?",

        answer:
            "В одном саше заявлено 20 млрд CFU. В упаковке 50 саше: 20 млрд × 50 = 1 триллион CFU суммарно в полной упаковке.",
    },

    {
        question:
            "Сколько штаммов в Максилине Триллион?",

        answer:
            "В представленной на probiotic.kg версии указан один ключевой штамм — Lactobacillus acidophilus 2585.",
    },

    {
        question:
            "Что такое Шанхайский Максилин?",

        answer:
            "По запросу «Шанхайский Максилин» покупатели могут искать китайскую немолочную форму Maxilin SuperProbiotic. На probiotic.kg она представлена как Максилин Триллион — 50 саше. Это не отдельная четвертая форма.",
    },

    {
        question:
            "Максилин Триллион молочный или немолочный?",

        answer:
            "Эта форма является немолочной. Для неё используется растительная производственная среда на основе виноградных косточек.",
    },

    {
        question:
            "Где производится Максилин Триллион?",

        answer:
            "Представленная версия Maxilin SuperProbiotic производится в Китае.",
    },

    {
        question:
            "Сколько стоит Максилин Триллион?",

        answer:
            "Цена упаковки из 50 саше на probiotic.kg — 7 800 сом.",
    },

    {
        question:
            "Есть ли доставка?",

        answer:
            "По Кыргызстану доставка предоставляется в подарок. Возможность отправки в Казахстан и другие страны СНГ уточняется по стране и городу получателя.",
    },
] as const;

// ==========================================
// STRUCTURED DATA
// ==========================================

function StructuredData() {
    const baseUrl =
        seller.siteUrl.replace(/\/$/, "");

    const url =
        `${baseUrl}/maxilin/superprobiotic`;

    const productSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "Product",

        "@id":
            `${url}#product`,

        name:
            "Максилин Триллион — Maxilin SuperProbiotic",

        alternateName: [
            "Maxilin SuperProbiotic",
            "Максилин Триллион",
            "Maxilin Trillion",
            "Максилин 1 Триллион",
        ],

        description:
            "Сухая немолочная форма Maxilin SuperProbiotic: Lactobacillus acidophilus 2585, 20 млрд CFU в одном саше, 50 саше и 1 триллион CFU суммарно в упаковке.",

        url,

        image: [
            `${baseUrl}/images/superprobiotic.jpeg`,
        ],

        sku:
            "maxilin-superprobiotic-50",

        brand: {
            "@type":
                "Brand",

            name:
                "EnergyMax",
        },

        additionalProperty: [
            {
                "@type":
                    "PropertyValue",

                name:
                    "Штамм",

                value:
                    "Lactobacillus acidophilus 2585",
            },

            {
                "@type":
                    "PropertyValue",

                name:
                    "Количество штаммов",

                value:
                    "1",
            },

            {
                "@type":
                    "PropertyValue",

                name:
                    "CFU в одном саше",

                value:
                    "20 млрд CFU",
            },

            {
                "@type":
                    "PropertyValue",

                name:
                    "Количество саше",

                value:
                    "50",
            },

            {
                "@type":
                    "PropertyValue",

                name:
                    "CFU в упаковке",

                value:
                    "1 триллион CFU",
            },

            {
                "@type":
                    "PropertyValue",

                name:
                    "Форма",

                value:
                    "Сухая немолочная",
            },

            {
                "@type":
                    "PropertyValue",

                name:
                    "Производственная среда",

                value:
                    "Растительная, на основе виноградных косточек",
            },

            {
                "@type":
                    "PropertyValue",

                name:
                    "Страна производства",

                value:
                    "Китай",
            },
        ],

        offers: {
            "@type":
                "Offer",

            url,

            price:
                "7800",

            priceCurrency:
                "KGS",

            availability:
                "https://schema.org/InStock",

            itemCondition:
                "https://schema.org/NewCondition",

            seller: {
                "@type":
                    "Organization",

                "@id":
                    `${baseUrl}/#organization`,

                name:
                seller.legalName,
            },
        },
    };

    const breadcrumbSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "BreadcrumbList",

        itemListElement: [
            {
                "@type":
                    "ListItem",

                position: 1,

                name:
                    "Главная",

                item:
                baseUrl,
            },

            {
                "@type":
                    "ListItem",

                position: 2,

                name:
                    "Максилин",

                item:
                    `${baseUrl}/maxilin`,
            },

            {
                "@type":
                    "ListItem",

                position: 3,

                name:
                    "Максилин Триллион",

                item:
                url,
            },
        ],
    };

    const faqSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "FAQPage",

        mainEntity:
            faq.map((item) => ({
                "@type":
                    "Question",

                name:
                item.question,

                acceptedAnswer: {
                    "@type":
                        "Answer",

                    text:
                    item.answer,
                },
            })),
    };

    return (
        <>
            {[productSchema, breadcrumbSchema, faqSchema].map(
                (schema, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html:
                                JSON.stringify(schema).replace(
                                    /</g,
                                    "\\u003c",
                                ),
                        }}
                    />
                ),
            )}
        </>
    );
}

// ==========================================
// PAGE
// ==========================================

export default function SuperProbioticPage() {
    const whatsappText =
        encodeURIComponent(
            "Здравствуйте! Хочу заказать Максилин Триллион — Maxilin SuperProbiotic 50 саше.",
        );

    const whatsappUrl =
        `https://wa.me/${seller.whatsappPhone}?text=${whatsappText}`;

    return (
        <>
            <StructuredData />

            <main className="min-h-screen bg-[#F4F7F5] pb-24">
                {/* HERO */}

                <section className="overflow-hidden bg-[#29380E] py-16 text-white md:py-24">
                    <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
                        <div>
                            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold text-white/40">
                                <Link
                                    href="/"
                                    className="hover:text-white"
                                >
                                    Главная
                                </Link>

                                <span>/</span>

                                <Link
                                    href="/maxilin"
                                    className="hover:text-white"
                                >
                                    Максилин
                                </Link>

                                <span>/</span>

                                <span className="text-[#21AA57]">
                                    Триллион
                                </span>
                            </div>

                            <p className="text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Maxilin SuperProbiotic
                            </p>

                            <h1 className="mt-4 text-4xl leading-[0.95] font-black tracking-tight uppercase italic md:text-6xl">
                                Максилин
                                <span className="text-[#21AA57]">
                                    {" "}
                                    Триллион
                                </span>
                            </h1>

                            <p className="mt-5 text-xl font-black">
                                50 саше · 1 штамм · 20 млрд CFU / саше
                            </p>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                                Сухая немолочная форма
                                Максилина на основе{" "}
                                <strong className="text-white">
                                    Lactobacillus acidophilus 2585
                                </strong>
                                . В полной упаковке 50
                                саше — суммарно{" "}
                                <strong className="text-[#21AA57]">
                                    1 триллион CFU
                                </strong>
                                .
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                <Fact
                                    value="1"
                                    label="штамм"
                                />

                                <Fact
                                    value="20 млрд"
                                    label="CFU / саше"
                                />

                                <Fact
                                    value="50"
                                    label="саше"
                                />

                                <Fact
                                    value="1 трлн"
                                    label="CFU / упаковка"
                                />
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white"
                                >
                                    <MessageCircle className="h-4 w-4" />

                                    Заказать за 7 800 сом
                                </a>

                                <Link
                                    href="/maxilin"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black"
                                >
                                    Все формы Максилина

                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/5">
                            <Image
                                src="/images/superprobiotic.jpeg"
                                alt="Максилин Триллион Maxilin SuperProbiotic 50 саше"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 45vw"
                                className="object-contain p-8"
                            />
                        </div>
                    </div>
                </section>

                {/* ОСНОВНЫЕ ФАКТЫ */}

                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-5xl">
                            <p className="text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Что это
                            </p>

                            <h2 className="mt-3 text-3xl font-black text-[#29380E] uppercase italic md:text-5xl">
                                Maxilin
                                <span className="text-[#21AA57]">
                                    {" "}
                                    SuperProbiotic
                                </span>
                            </h2>

                            <div className="mt-8 grid gap-5 md:grid-cols-2">
                                <InfoCard
                                    icon={Dna}
                                    title="Lactobacillus acidophilus 2585"
                                    text="В представленной версии используется один ключевой штамм — Lactobacillus acidophilus 2585."
                                />

                                <InfoCard
                                    icon={PackageCheck}
                                    title="50 саше"
                                    text="В одной упаковке находится 50 индивидуальных саше."
                                />

                                <InfoCard
                                    icon={CheckCircle2}
                                    title="20 млрд CFU"
                                    text="Заявленное количество в одном саше — 20 миллиардов CFU."
                                />

                                <InfoCard
                                    icon={Globe2}
                                    title="Производство — Китай"
                                    text="Для этой немолочной версии используется растительная производственная среда на основе виноградных косточек."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ТРИЛЛИОН */}

                <section className="border-y border-gray-100 bg-white py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-5xl rounded-[3rem] bg-[#29380E] p-8 text-white md:p-12">
                            <p className="text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Простая математика
                            </p>

                            <h2 className="mt-3 text-3xl font-black uppercase italic md:text-5xl">
                                Почему
                                <span className="text-[#21AA57]">
                                    {" "}
                                    «Триллион»?
                                </span>
                            </h2>

                            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
                                <p className="text-xl font-black md:text-3xl">
                                    20 млрд CFU × 50 саше
                                </p>

                                <p className="mt-4 text-3xl font-black text-[#21AA57] md:text-5xl">
                                    = 1 триллион CFU
                                </p>
                            </div>

                            <p className="mt-6 text-sm leading-7 text-white/60">
                                CFU — характеристика
                                количества жизнеспособных
                                микроорганизмов продукта.
                                Это не рекомендация по
                                количеству саше в день.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ШАНХАЙСКИЙ */}

                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-5xl">
                            <h2 className="text-3xl font-black text-[#29380E] uppercase italic md:text-5xl">
                                Что называют
                                <span className="text-[#21AA57]">
                                    {" "}
                                    Шанхайским Максилином?
                                </span>
                            </h2>

                            <p className="mt-6 text-base leading-8 text-[#29380E]/60">
                                По запросу{" "}
                                <strong className="text-[#29380E]">
                                    «Шанхайский Максилин»
                                </strong>{" "}
                                покупатели могут искать
                                китайскую немолочную форму
                                Maxilin SuperProbiotic.
                            </p>

                            <p className="mt-4 text-base leading-8 text-[#29380E]/60">
                                На probiotic.kg она
                                представлена как{" "}
                                <strong className="text-[#29380E]">
                                    Максилин Триллион —
                                    50 саше
                                </strong>
                                . Это не отдельная
                                четвертая форма Максилина.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ЗАКАЗ */}

                <section className="border-y border-gray-100 bg-white py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
                            <InfoCard
                                icon={PackageCheck}
                                title="Цена"
                                text="7 800 сом за упаковку 50 саше."
                            />

                            <InfoCard
                                icon={Truck}
                                title="Кыргызстан"
                                text="Доставка по Кыргызстану предоставляется в подарок."
                            />

                            <InfoCard
                                icon={Globe2}
                                title="Казахстан и СНГ"
                                text="Возможность отправки уточняется индивидуально по стране и городу."
                            />
                        </div>
                    </div>
                </section>

                {/* FAQ */}

                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="text-center text-3xl font-black text-[#29380E] uppercase italic md:text-5xl">
                                Частые
                                <span className="text-[#21AA57]">
                                    {" "}
                                    вопросы
                                </span>
                            </h2>

                            <div className="mt-10 space-y-3">
                                {faq.map((item) => (
                                    <details
                                        key={item.question}
                                        className="rounded-2xl border border-gray-100 bg-white p-5"
                                    >
                                        <summary className="cursor-pointer font-black text-[#29380E]">
                                            {item.question}
                                        </summary>

                                        <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-[#29380E]/60">
                                            {item.answer}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ДОКУМЕНТЫ / SAFETY */}

                <section className="pb-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
                            <Link
                                href="/docs"
                                className="rounded-[2rem] bg-white p-7 shadow-sm"
                            >
                                <FileText className="h-7 w-7 text-[#21AA57]" />

                                <h2 className="mt-5 text-xl font-black text-[#29380E]">
                                    Документы
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-[#29380E]/55">
                                    Доступные документы,
                                    материалы и информация
                                    о продукции.
                                </p>
                            </Link>

                            <div className="rounded-[2rem] bg-amber-50 p-7">
                                <ShieldCheck className="h-7 w-7 text-amber-600" />

                                <h2 className="mt-5 text-xl font-black text-[#29380E]">
                                    Важно
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-[#29380E]/60">
                                    Информация на странице
                                    носит справочный характер.
                                    Состав, способ применения
                                    и ограничения необходимо
                                    проверять по маркировке
                                    конкретной упаковки.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}

                <section>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-5xl rounded-[3rem] bg-[#21AA57] p-8 text-center text-white md:p-12">
                            <h2 className="text-3xl font-black uppercase italic md:text-5xl">
                                Максилин Триллион
                            </h2>

                            <p className="mt-4 text-lg font-black">
                                50 саше · 7 800 сом
                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#21AA57]"
                            >
                                <MessageCircle className="h-4 w-4" />

                                Заказать в WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

// ==========================================
// COMPONENTS
// ==========================================

function Fact({
                  value,
                  label,
              }: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-lg font-black text-[#21AA57]">
                {value}
            </p>

            <p className="mt-1 text-[9px] font-black tracking-wider text-white/40 uppercase">
                {label}
            </p>
        </div>
    );
}

function InfoCard({
                      icon: Icon,
                      title,
                      text,
                  }: {
    icon: typeof Dna;
    title: string;
    text: string;
}) {
    return (
        <article className="rounded-[2rem] border border-gray-100 bg-[#F4F7F5] p-6">
            <Icon
                className="h-6 w-6 text-[#21AA57]"
                aria-hidden="true"
            />

            <h3 className="mt-5 font-black text-[#29380E]">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#29380E]/55">
                {text}
            </p>
        </article>
    );
}