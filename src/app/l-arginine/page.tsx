import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import {
    Activity,
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    CircleAlert,
    Dna,
    FlaskConical,
    HeartPulse,
    Info,
    Leaf,
    MessageCircle,
    PackageCheck,
    Search,
    Sparkles,
    Truck,
} from "lucide-react";

import { seller } from "@/config/seller";
import { products } from "@/lib/content";

// ==========================================
// PRODUCT DATA
// ==========================================

const mainProduct = products.find(
    (product) =>
        product.slug ===
        "l-arginine-sublingual-gel",
);

const arginineProducts = [
    "l-arginine-tmin",
    "l-arginine-tmin-gvozdika",
    "l-arginine-gvozdika",
    "l-arginine-myata",
]
    .map((slug) =>
        products.find(
            (product) =>
                product.slug === slug,
        ),
    )
    .filter(
        (
            product,
        ): product is NonNullable<
            typeof product
        > => Boolean(product),
    );

// ==========================================
// SEO
// ==========================================

export const metadata: Metadata = {
    title:
        "L-Аргинин L-Arginine — аминокислота, оксид азота, EnergyMax",

    description:
        "Что такое L-Аргинин (L-Arginine): аминокислота, участие в синтезе оксида азота NO, варианты EnergyMax, цена 2 800 сом, заказ в Кыргызстане.",

    keywords: [
        "L-Аргинин",
        "L-Arginine",
        "Larginine",
        "Ларгинин",
        "Эль-Аргинин",
        "Эль Аргинин",
        "аргинин",
        "аминокислота аргинин",
        "аминокислота L-аргинин",
        "оксид азота",
        "NO",
        "синтез оксида азота",
        "L-Аргинин EnergyMax",
        "L-Arginine EnergyMax",
        "Энерджимакс аргинин",
        "купить L-Аргинин",
        "заказать L-Аргинин",
        "L-Аргинин Кыргызстан",
        "L-Аргинин Бишкек",
    ],

    alternates: {
        canonical:
            "/l-arginine",
    },

    openGraph: {
        type:
            "article",

        locale:
            "ru_KG",

        siteName:
        seller.siteName,

        title:
            "L-Аргинин (L-Arginine) — аминокислота и оксид азота",

        description:
            "Понятно о L-аргинине, его связи с синтезом оксида азота NO и вариантах EnergyMax.",

        url:
            "/l-arginine",

        images: [
            {
                url:
                    "/images/larginine.webp",

                alt:
                    "L-Аргинин L-Arginine EnergyMax",
            },
        ],
    },

    twitter: {
        card:
            "summary_large_image",

        title:
            "L-Аргинин L-Arginine EnergyMax",

        description:
            "Аминокислота L-аргинин, синтез оксида азота NO, 4 варианта EnergyMax.",

        images: [
            "/images/larginine.webp",
        ],
    },

    robots: {
        index:
            true,

        follow:
            true,

        googleBot: {
            index:
                true,

            follow:
                true,

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

const FAQ = [
    {
        question:
            "Что такое L-Аргинин?",

        answer:
            "L-Аргинин, или L-Arginine, — аминокислота. В организме она участвует в различных биохимических процессах и является субстратом для ферментов, участвующих в образовании оксида азота (NO).",
    },

    {
        question:
            "L-Аргинин и L-Arginine — это одно и то же?",

        answer:
            "Да. L-Arginine — международное английское написание, а L-Аргинин — русское. В поиске также встречаются варианты Ларгинин, Эль-Аргинин, Эль Аргинин и Larginine.",
    },

    {
        question:
            "L-Аргинин — это оксид азота?",

        answer:
            "Нет. L-Аргинин — аминокислота, а оксид азота (NO) — отдельная сигнальная молекула. Организм может использовать L-аргинин как субстрат для синтеза оксида азота.",
    },

    {
        question:
            "Как L-Аргинин связан с оксидом азота NO?",

        answer:
            "Ферменты NO-синтазы используют L-аргинин как один из субстратов для образования оксида азота (NO). Это нормальная биохимическая функция аминокислоты.",
    },

    {
        question:
            "Для чего нужен L-Аргинин?",

        answer:
            "L-аргинин является аминокислотой, участвующей в обменных процессах организма, включая путь образования оксида азота. Конкретный продукт с L-аргинином следует использовать по инструкции производителя и не рассматривать как замену лечению.",
    },

    {
        question:
            "Какие варианты L-Аргинина EnergyMax представлены?",

        answer:
            "На probiotic.kg представлены четыре варианта L-Аргинина EnergyMax: тмин, тмин + гвоздика, гвоздика и мята.",
    },

    {
        question:
            "Сколько стоит L-Аргинин EnergyMax?",

        answer:
            "Актуальная цена одного флакона — 2 800 сом. Наличие конкретного варианта подтверждается при оформлении заказа.",
    },

    {
        question:
            "Где купить L-Аргинин в Кыргызстане?",

        answer:
            "L-Аргинин EnergyMax можно заказать на probiotic.kg или через WhatsApp. Доставка по Кыргызстану предоставляется в подарок.",
    },

    {
        question:
            "Можно ли заказать L-Аргинин в Казахстан и другие страны СНГ?",

        answer:
            "Возможность отправки в Казахстан и другие страны СНГ уточняется индивидуально по стране и городу получателя.",
    },

    {
        question:
            "Как принимать L-Аргинин EnergyMax?",

        answer:
            "Способ применения необходимо проверять по маркировке конкретного варианта. Не следует самостоятельно увеличивать количество продукта, указанное производителем.",
    },
] as const;

// ==========================================
// JSON-LD
// ==========================================

function StructuredData() {
    const baseUrl =
        seller.siteUrl.replace(
            /\/$/,
            "",
        );

    const pageUrl =
        `${baseUrl}/l-arginine`;

    const webPageSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "WebPage",

        "@id":
            `${pageUrl}#webpage`,

        url:
        pageUrl,

        name:
            "L-Аргинин L-Arginine — аминокислота и оксид азота",

        description:
            "Информация о L-Аргинине, его участии в синтезе оксида азота и вариантах EnergyMax.",

        inLanguage:
            "ru-KG",

        about: [
            {
                "@type":
                    "Thing",

                name:
                    "L-Arginine",

                alternateName: [
                    "L-Аргинин",
                    "Ларгинин",
                    "Эль-Аргинин",
                    "Аргинин",
                ],
            },

            {
                "@type":
                    "Thing",

                name:
                    "Nitric oxide",

                alternateName: [
                    "Оксид азота",
                    "NO",
                ],
            },

            {
                "@type":
                    "Brand",

                name:
                    "EnergyMax",
            },
        ],

        publisher: {
            "@type":
                "Organization",

            "@id":
                `${baseUrl}/#organization`,

            name:
            seller.legalName,

            url:
            baseUrl,
        },
    };

    const faqSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "FAQPage",

        mainEntity:
            FAQ.map((item) => ({
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

    const breadcrumbSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "BreadcrumbList",

        itemListElement: [
            {
                "@type":
                    "ListItem",

                position:
                    1,

                name:
                    "Главная",

                item:
                baseUrl,
            },

            {
                "@type":
                    "ListItem",

                position:
                    2,

                name:
                    "L-Аргинин",

                item:
                pageUrl,
            },
        ],
    };

    const itemListSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "ItemList",

        name:
            "Варианты L-Аргинина EnergyMax",

        itemListElement:
            arginineProducts.map(
                (product, index) => ({
                    "@type":
                        "ListItem",

                    position:
                        index + 1,

                    url:
                        `${baseUrl}/product/${product.slug}`,

                    name:
                    product.name,
                }),
            ),
    };

    const schemas = [
        webPageSchema,
        faqSchema,
        breadcrumbSchema,
        itemListSchema,
    ];

    return (
        <>
            {schemas.map(
                (schema, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html:
                                JSON.stringify(
                                    schema,
                                ).replace(
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

export default function LArgininePage() {
    const price =
        mainProduct?.priceKgs ??
        2800;

    const whatsappText =
        encodeURIComponent(
            "Здравствуйте! Хочу узнать подробнее и заказать L-Аргинин EnergyMax.",
        );

    const whatsappUrl =
        `https://wa.me/${seller.whatsappPhone}?text=${whatsappText}`;

    return (
        <>
            <StructuredData />

            <main className="min-h-screen bg-[#F4F7F5] pb-24">
                {/* ==================================
                    HERO
                ================================== */}

                <section className="relative overflow-hidden bg-[#29380E] py-16 text-white md:py-24">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0"
                    >
                        <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-[#21AA57]/20 blur-3xl" />

                        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
                    </div>

                    <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr]">
                        {/* TEXT */}

                        <div>
                            <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-white/40">
                                <Link
                                    href="/"
                                    className="hover:text-white"
                                >
                                    Главная
                                </Link>

                                <span>/</span>

                                <span className="text-[#21AA57]">
                                    L-Аргинин
                                </span>
                            </div>

                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#21AA57]/25 bg-[#21AA57]/10 px-4 py-2">
                                <Dna
                                    className="h-4 w-4 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <span className="text-[11px] font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                    Аминокислота
                                </span>
                            </div>

                            <h1 className="text-4xl leading-[0.95] font-black tracking-tight uppercase italic md:text-6xl lg:text-7xl">
                                L-Аргинин
                                <span className="text-[#21AA57]">
                                    {" "}
                                    L-Arginine
                                </span>
                            </h1>

                            <p className="mt-5 text-xl font-black text-white">
                                EnergyMax · подъязычный формат
                            </p>

                            <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                                L-Аргинин — аминокислота,
                                которую также ищут как{" "}
                                <strong className="text-white">
                                    L-Arginine,
                                    Larginine,
                                    Ларгинин и
                                    Эль-Аргинин
                                </strong>
                                . В организме
                                L-аргинин участвует в
                                биохимическом пути
                                образования{" "}
                                <strong className="text-[#21AA57]">
                                    оксида азота
                                    (NO)
                                </strong>
                                .
                            </p>

                            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                                <HeroFact
                                    value="L-Arginine"
                                    label="аминокислота"
                                />

                                <HeroFact
                                    value="NO"
                                    label="оксид азота"
                                />

                                <HeroFact
                                    value="4"
                                    label="варианта"
                                />

                                <HeroFact
                                    value={`${price.toLocaleString(
                                        "ru-RU",
                                    )} сом`}
                                    label="цена"
                                />
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                                >
                                    <MessageCircle
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />

                                    Заказать
                                </a>

                                <Link
                                    href="#variants"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white hover:bg-white/10"
                                >
                                    4 варианта

                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* IMAGE */}

                        <div className="relative mx-auto w-full max-w-xl">
                            <div
                                aria-hidden="true"
                                className="absolute inset-10 rounded-full bg-[#21AA57]/20 blur-3xl"
                            />

                            <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/10 bg-white/5">
                                <Image
                                    src="/images/larginine.webp"
                                    alt="L-Аргинин L-Arginine EnergyMax — аминокислота"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 90vw, 45vw"
                                    className="object-contain p-8"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    ENTITY / SEARCH SYNONYMS
                ================================== */}

                <section className="relative z-10 -mt-6">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-gray-100 bg-white p-7 shadow-xl shadow-black/5 md:p-9">
                            <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21AA57]/10">
                                    <Search
                                        className="h-6 w-6 text-[#21AA57]"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <p className="text-[10px] font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                        Одно вещество —
                                        разные написания
                                    </p>

                                    <h2 className="mt-3 text-2xl font-black text-[#29380E] md:text-3xl">
                                        L-Аргинин =
                                        L-Arginine
                                    </h2>

                                    <p className="mt-4 max-w-4xl text-sm leading-7 text-[#29380E]/60">
                                        В поиске можно
                                        встретить варианты{" "}
                                        <strong className="text-[#29380E]">
                                            Larginine,
                                            Ларгинин,
                                            Эль-Аргинин,
                                            Эль Аргинин
                                        </strong>
                                        . Как правило,
                                        пользователь имеет
                                        в виду аминокислоту
                                        L-аргинин.
                                        Корректное
                                        международное
                                        написание —
                                        L-Arginine.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    WHAT IS L-ARGININE
                ================================== */}

                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                            <div>
                                <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Основы
                                </p>

                                <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                    Что такое
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        L-Аргинин
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-5">
                                <p className="text-base leading-8 text-[#29380E]/65">
                                    L-аргинин —
                                    аминокислота,
                                    присутствующая в
                                    обменных процессах
                                    организма.
                                </p>

                                <p className="text-base leading-8 text-[#29380E]/65">
                                    Один из наиболее
                                    известных биохимических
                                    путей связан с тем, что
                                    L-аргинин используется
                                    ферментами
                                    NO-синтазами в процессе
                                    образования{" "}
                                    <strong className="font-black text-[#29380E]">
                                        оксида азота
                                        (NO)
                                    </strong>
                                    .
                                </p>

                                <p className="text-base leading-8 text-[#29380E]/65">
                                    Это описание функции
                                    самой аминокислоты.
                                    Оно не означает, что
                                    конкретный продукт с
                                    L-аргинином лечит
                                    заболевания.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    NO
                ================================== */}

                <section className="border-y border-gray-100 bg-white py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#29380E] p-8 text-white md:p-12 lg:p-14">
                            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                                <div>
                                    <FlaskConical
                                        className="h-10 w-10 text-[#21AA57]"
                                        aria-hidden="true"
                                    />

                                    <p className="mt-6 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                        Биохимия
                                    </p>

                                    <h2 className="mt-3 text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                        L-Аргинин и
                                        <span className="text-[#21AA57]">
                                            {" "}
                                            оксид азота
                                        </span>
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <DarkStep
                                        number="01"
                                        title="L-Аргинин"
                                        text="Аминокислота выступает одним из субстратов биохимической реакции."
                                    />

                                    <DarkStep
                                        number="02"
                                        title="NO-синтазы"
                                        text="Ферменты участвуют в превращении L-аргинина в рамках пути образования NO."
                                    />

                                    <DarkStep
                                        number="03"
                                        title="Оксид азота — NO"
                                        text="NO является отдельной сигнальной молекулой организма. L-аргинин и NO — не одно и то же вещество."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    KEY FACTS
                ================================== */}

                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto mb-12 max-w-4xl text-center">
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Коротко
                            </p>

                            <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Что важно
                                <span className="text-[#21AA57]">
                                    {" "}
                                    понимать
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            <FactCard
                                icon={Dna}
                                title="Аминокислота"
                                text="L-Аргинин относится к аминокислотам."
                            />

                            <FactCard
                                icon={FlaskConical}
                                title="Связь с NO"
                                text="L-аргинин участвует в биохимическом пути образования оксида азота."
                            />

                            <FactCard
                                icon={PackageCheck}
                                title="4 варианта"
                                text="Тмин, тмин + гвоздика, гвоздика и мята."
                            />

                            <FactCard
                                icon={Truck}
                                title="Кыргызстан"
                                text="Заказ через сайт и WhatsApp, доставка по Кыргызстану в подарок."
                            />
                        </div>
                    </div>
                </section>

                {/* ==================================
                    VARIANTS
                ================================== */}

                <section
                    id="variants"
                    className="scroll-mt-28 border-y border-gray-100 bg-white py-20 md:py-24"
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto mb-12 max-w-4xl text-center">
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                EnergyMax
                            </p>

                            <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                4 варианта
                                <span className="text-[#21AA57]">
                                    {" "}
                                    L-Аргинина
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#29380E]/55">
                                Каждый вариант имеет
                                отдельную товарную
                                страницу, поэтому
                                покупатель и поисковая
                                система могут точно
                                определить нужный вкус.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            {arginineProducts.map(
                                (product) => {
                                    const image =
                                        product
                                            .images[0];

                                    return (
                                        <Link
                                            key={
                                                product.slug
                                            }
                                            href={`/product/${product.slug}`}
                                            className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-[#F4F7F5] transition hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <div className="relative aspect-square bg-white">
                                                {image && (
                                                    <Image
                                                        src={
                                                            image.src
                                                        }
                                                        alt={
                                                            image.alt
                                                        }
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 25vw"
                                                        className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                )}
                                            </div>

                                            <div className="p-6">
                                                <p className="text-[10px] font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                                    L-Arginine
                                                    EnergyMax
                                                </p>

                                                <h3 className="mt-2 text-lg font-black text-[#29380E]">
                                                    {
                                                        product.name
                                                    }
                                                </h3>

                                                <p className="mt-3 text-2xl font-black text-[#21AA57]">
                                                    {product.priceKgs.toLocaleString(
                                                        "ru-RU",
                                                    )}{" "}
                                                    сом
                                                </p>

                                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#29380E]">
                                                    Подробнее

                                                    <ArrowRight
                                                        className="h-4 w-4 text-[#21AA57]"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </div>
                                        </Link>
                                    );
                                },
                            )}
                        </div>
                    </div>
                </section>

                {/* ==================================
                    COMMERCIAL SEO
                ================================== */}

                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <BadgeCheck
                                    className="h-10 w-10 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <p className="mt-5 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Заказ
                                </p>

                                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                    Купить L-Аргинин
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        в Кыргызстане
                                    </span>
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                    L-Аргинин
                                    EnergyMax можно
                                    заказать на
                                    probiotic.kg или
                                    через WhatsApp.
                                    Цена одного флакона —
                                    2 800 сом.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <OrderCard
                                    icon={PackageCheck}
                                    title="Цена"
                                    text="2 800 сом за один флакон."
                                />

                                <OrderCard
                                    icon={Truck}
                                    title="Кыргызстан"
                                    text="Доставка по Кыргызстану — в подарок."
                                />

                                <OrderCard
                                    icon={MessageCircle}
                                    title="WhatsApp"
                                    text="Можно уточнить наличие конкретного вкуса перед заказом."
                                />

                                <OrderCard
                                    icon={Leaf}
                                    title="СНГ"
                                    text="Возможность отправки в Казахстан и другие страны СНГ уточняется индивидуально."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    FAQ
                ================================== */}

                <section className="border-y border-gray-100 bg-white py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-10 text-center">
                                <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Вопросы
                                </p>

                                <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                    L-Аргинин
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        FAQ
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-3">
                                {FAQ.map(
                                    (item) => (
                                        <details
                                            key={
                                                item.question
                                            }
                                            className="rounded-2xl border border-gray-100 bg-[#F4F7F5] p-5"
                                        >
                                            <summary className="cursor-pointer list-none pr-6 font-black text-[#29380E]">
                                                {
                                                    item.question
                                                }
                                            </summary>

                                            <p className="mt-4 border-t border-gray-200/60 pt-4 text-sm leading-7 text-[#29380E]/60">
                                                {
                                                    item.answer
                                                }
                                            </p>
                                        </details>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    IMPORTANT
                ================================== */}

                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-amber-200 bg-amber-50 p-7 md:p-9">
                            <div className="grid gap-5 md:grid-cols-[auto_1fr]">
                                <CircleAlert
                                    className="h-7 w-7 text-amber-600"
                                    aria-hidden="true"
                                />

                                <div>
                                    <h2 className="text-xl font-black text-[#29380E]">
                                        Важно
                                    </h2>

                                    <p className="mt-3 text-sm leading-7 text-[#29380E]/65">
                                        Информация о
                                        L-аргинине и
                                        оксиде азота
                                        объясняет
                                        биохимическую роль
                                        аминокислоты и не
                                        является обещанием
                                        лечебного эффекта
                                        конкретного
                                        продукта.
                                    </p>

                                    <p className="mt-3 text-sm leading-7 text-[#29380E]/65">
                                        При беременности,
                                        лактации,
                                        хронических
                                        заболеваниях и
                                        одновременном
                                        приёме лекарств
                                        применение продукта
                                        лучше согласовать
                                        со специалистом.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    FINAL CTA
                ================================== */}

                <section>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-6xl rounded-[3rem] bg-[#21AA57] p-8 text-center text-white md:p-12">
                            <Sparkles
                                className="mx-auto mb-5 h-10 w-10"
                                aria-hidden="true"
                            />

                            <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                L-Аргинин EnergyMax
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                                4 варианта ·
                                2 800 сом · заказ
                                через probiotic.kg
                                и WhatsApp.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#21AA57]"
                                >
                                    Заказать L-Аргинин

                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </a>

                                <Link
                                    href="/#catalog"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-black text-white"
                                >
                                    В каталог
                                </Link>
                            </div>
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

function HeroFact({
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

function DarkStep({
                      number,
                      title,
                      text,
                  }: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <span className="text-2xl font-black text-[#21AA57]">
                {number}
            </span>

            <div>
                <h3 className="font-black">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                    {text}
                </p>
            </div>
        </div>
    );
}

function FactCard({
                      icon: Icon,
                      title,
                      text,
                  }: {
    icon: LucideIcon;
    title: string;
    text: string;
}) {
    return (
        <article className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#21AA57]/10">
                <Icon
                    className="h-5 w-5 text-[#21AA57]"
                    aria-hidden="true"
                />
            </div>

            <h3 className="mt-5 font-black text-[#29380E]">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#29380E]/60">
                {text}
            </p>
        </article>
    );
}

function OrderCard({
                       icon: Icon,
                       title,
                       text,
                   }: {
    icon: LucideIcon;
    title: string;
    text: string;
}) {
    return (
        <article className="rounded-[2rem] bg-white p-6 shadow-sm">
            <Icon
                className="h-6 w-6 text-[#21AA57]"
                aria-hidden="true"
            />

            <h3 className="mt-5 font-black text-[#29380E]">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#29380E]/55">
                {text}
            </p>
        </article>
    );
}