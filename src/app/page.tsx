import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Dna,
    FileCheck2,
    Globe2,
    HeartPulse,
    Leaf,
    MessageCircle,
    Microscope,
    PackageCheck,
    Search,
    ShieldCheck,
    ShoppingBag,
    Sparkles,
    Truck,
} from "lucide-react";

import { seller } from "@/config/seller";
import { products } from "@/lib/content";

// ==========================================
// PRODUCT HELPERS
// ==========================================

function getProduct(slug: string) {
    return products.find(
        (product) =>
            product.slug === slug,
    );
}

const maxilinLiquid =
    getProduct("maxilin-liquid");

const maxilinDry =
    getProduct("maxilin-dry");

const maxilinTrillion =
    getProduct(
        "maxilin-superprobiotic-50",
    );

const lArginine =
    getProduct(
        "l-arginine-sublingual-gel",
    );

const candles =
    getProduct(
        "maxilin-candles-classic",
    );

const vitgrass =
    getProduct("vitgrass");

const featuredProducts = [
    maxilinLiquid,
    maxilinDry,
    maxilinTrillion,
    lArginine,
    candles,
    vitgrass,
].filter(
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
    title: {
        absolute:
            "Максилин, L-Аргинин и EnergyMax в Кыргызстане | probiotic.kg",
    },

    description:
        "Максилин в Кыргызстане: жидкий кисломолочный Максилин, сухой Максилин, Максилин Триллион 50 саше, L-Аргинин L-Arginine и продукция EnergyMax. Информация о пробиотиках, кишечнике, микробиоте, штамме 2585, ценах, заказе и доставке.",

    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",

        locale: "ru_KG",

        siteName:
        seller.siteName,

        title:
            "Максилин и EnergyMax в Кыргызстане",

        description:
            "Жидкий и сухой Максилин, Максилин Триллион, L-Аргинин EnergyMax, информация о кишечнике и микробиоте.",

        url: "/",

        images: [
            {
                url:
                    "/images/maxilinAlmata.jpeg",

                alt:
                    "Максилин и продукция EnergyMax в Кыргызстане",
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

const homeFaq = [
    {
        question:
            "Что такое Максилин?",

        answer:
            "Максилин — пробиотическая линейка, представленная на probiotic.kg в трех формах: жидкой кисломолочной, сухой кисломолочной и сухой немолочной форме Максилин Триллион. Представленные формы объединяет Lactobacillus acidophilus 2585.",
    },

    {
        question:
            "Какие формы Максилина есть?",

        answer:
            "На сайте представлены жидкий Максилин, сухой Максилин 20 саше и Максилин Триллион — Maxilin SuperProbiotic 50 саше.",
    },

    {
        question:
            "Что такое Максилин Триллион?",

        answer:
            "Максилин Триллион — немолочная сухая форма Maxilin SuperProbiotic. В представленной версии 50 саше, заявлено 20 млрд CFU в одном саше и суммарно 1 триллион CFU в упаковке.",
    },

    {
        question:
            "Что называют Шанхайским Максилином?",

        answer:
            "По запросу «Шанхайский Максилин» покупатели могут искать китайскую немолочную форму Maxilin SuperProbiotic. На probiotic.kg она представлена как Максилин Триллион — 50 саше. Это не отдельная четвертая форма Максилина.",
    },

    {
        question:
            "Что такое L-Аргинин?",

        answer:
            "L-Аргинин, или L-Arginine, — аминокислота. В организме L-аргинин является субстратом для ферментов, участвующих в синтезе оксида азота NO.",
    },

    {
        question:
            "Где купить Максилин и L-Аргинин в Кыргызстане?",

        answer:
            "Максилин и L-Аргинин EnergyMax можно заказать через probiotic.kg или WhatsApp. Актуальное наличие подтверждается при оформлении заказа.",
    },

    {
        question:
            "Есть ли доставка по Кыргызстану и СНГ?",

        answer:
            "По Кыргызстану доставка предоставляется в подарок. Возможность отправки в Казахстан и другие страны СНГ уточняется для конкретной страны и города получателя.",
    },
] as const;

// ==========================================
// STRUCTURED DATA
// ==========================================

function HomeStructuredData() {
    const baseUrl =
        seller.siteUrl.replace(
            /\/$/,
            "",
        );

    const webPageSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "CollectionPage",

        "@id":
            `${baseUrl}/#homepage`,

        url:
        baseUrl,

        name:
            "Максилин, L-Аргинин и продукция EnergyMax в Кыргызстане",

        description:
            "Каталог и информационный ресурс о Максилине, L-Аргинине и продукции EnergyMax.",

        inLanguage:
            "ru-KG",

        isPartOf: {
            "@id":
                `${baseUrl}/#website`,
        },

        about: [
            {
                "@type":
                    "Thing",

                name:
                    "Максилин",

                alternateName: [
                    "Maxilin",
                    "пробиотик Максилин",
                ],
            },

            {
                "@type":
                    "Thing",

                name:
                    "Lactobacillus acidophilus 2585",
            },

            {
                "@type":
                    "Thing",

                name:
                    "L-Arginine",

                alternateName: [
                    "L-Аргинин",
                    "Ларгинин",
                    "Эль-Аргинин",
                ],
            },

            {
                "@type":
                    "Thing",

                name:
                    "Микробиота кишечника",

                alternateName: [
                    "микробиом кишечника",
                    "микрофлора кишечника",
                ],
            },

            {
                "@type":
                    "Brand",

                name:
                    "EnergyMax",
            },
        ],
    };

    const itemListSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "ItemList",

        name:
            "Продукция EnergyMax на probiotic.kg",

        itemListElement:
            featuredProducts.map(
                (
                    product,
                    index,
                ) => {
                    const href =
                        product.slug ===
                        "maxilin-superprobiotic-50"
                            ? "/maxilin/superprobiotic"
                            : `/product/${product.slug}`;

                    return {
                        "@type":
                            "ListItem",

                        position:
                            index + 1,

                        url:
                            `${baseUrl}${href}`,

                        name:
                        product.name,
                    };
                },
            ),
    };

    const faqSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "FAQPage",

        mainEntity:
            homeFaq.map(
                (item) => ({
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
                }),
            ),
    };

    return (
        <>
            {[
                webPageSchema,
                itemListSchema,
                faqSchema,
            ].map(
                (
                    schema,
                    index,
                ) => (
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

export default function HomePage() {
    const whatsappText =
        encodeURIComponent(
            "Здравствуйте! Хочу узнать о Максилине и продукции EnergyMax.",
        );

    const whatsappUrl =
        `https://wa.me/${seller.whatsappPhone}?text=${whatsappText}`;

    return (
        <>
            <HomeStructuredData />

            <main className="overflow-hidden bg-[#F4F7F5]">
                {/* ==================================
                    HERO
                ================================== */}

                <section className="relative overflow-hidden bg-[#29380E] text-white">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0"
                    >
                        <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#21AA57]/25 blur-3xl" />

                        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
                    </div>

                    <div className="container relative z-10 mx-auto grid min-h-[660px] items-center gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
                        {/* TEXT */}

                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                                <Sparkles
                                    className="h-4 w-4 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <span className="text-[10px] font-black tracking-[0.2em] text-white/65 uppercase">
                                    EnergyMax ·
                                    Кыргызстан
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl leading-[0.95] font-black tracking-tight uppercase italic md:text-6xl lg:text-7xl">
                                Максилин
                                <span className="text-[#21AA57]">
                                    {" "}
                                    и EnergyMax
                                </span>
                                <br />
                                в Кыргызстане
                            </h1>

                            <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                                Жидкий
                                кисломолочный
                                Максилин,
                                сухой Максилин
                                20 саше,
                                Максилин
                                Триллион,
                                L-Аргинин{" "}
                                <strong className="text-white">
                                    L-Arginine
                                </strong>{" "}
                                и другие товары
                                EnergyMax.
                            </p>

                            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50">
                                Здесь можно
                                сравнить формы,
                                узнать о штамме
                                Lactobacillus
                                acidophilus 2585,
                                микробиоте
                                кишечника,
                                составе,
                                документах,
                                цене и доставке.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="#catalog"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                                >
                                    Смотреть
                                    каталог

                                    <ShoppingBag
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </Link>

                                <a
                                    href={
                                        whatsappUrl
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white transition hover:bg-white/10"
                                >
                                    <MessageCircle
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />

                                    WhatsApp
                                </a>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-white/45">
                                <span>
                                    Максилин
                                </span>

                                <span>
                                    L-Arginine
                                </span>

                                <span>
                                    EnergyMax
                                </span>

                                <span>
                                    Бишкек
                                </span>

                                <span>
                                    Доставка
                                    по КР
                                </span>
                            </div>
                        </div>

                        {/* VISUAL */}

                        <div className="relative mx-auto w-full max-w-xl">
                            <div
                                aria-hidden="true"
                                className="absolute inset-10 rounded-full bg-[#21AA57]/20 blur-3xl"
                            />

                            <div className="relative grid grid-cols-2 gap-3">
                                <HeroProduct
                                    href="/product/maxilin-liquid"
                                    src="/images/maxilinAlmata.jpeg"
                                    alt="Жидкий Максилин — кисломолочный пробиотик"
                                    label="Жидкий"
                                />

                                <HeroProduct
                                    href="/product/maxilin-dry"
                                    src="/images/suhoiMaxilin.jpeg"
                                    alt="Сухой Максилин 20 саше"
                                    label="Сухой"
                                />

                                <HeroProduct
                                    href="/maxilin/superprobiotic"
                                    src="/images/superprobiotic.jpeg"
                                    alt="Максилин Триллион SuperProbiotic 50 саше"
                                    label="Триллион"
                                />

                                <HeroProduct
                                    href="/l-arginine"
                                    src="/images/larginine.webp"
                                    alt="L-Аргинин L-Arginine EnergyMax"
                                    label="L-Arginine"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    QUICK ENTITY LINKS
                ================================== */}

                <section className="relative z-10 -mt-7">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid overflow-hidden rounded-[2.25rem] border border-gray-100 bg-white shadow-xl shadow-black/5 md:grid-cols-3">
                            <QuickLink
                                href="/maxilin"
                                icon={
                                    Microscope
                                }
                                title="Максилин"
                                text="Три формы · штамм 2585"
                            />

                            <QuickLink
                                href="/l-arginine"
                                icon={Dna}
                                title="L-Аргинин"
                                text="L-Arginine · аминокислота · NO"
                            />

                            <QuickLink
                                href="/maxilin/gut-health"
                                icon={
                                    HeartPulse
                                }
                                title="Кишечник"
                                text="Микробиота · микробиом"
                            />
                        </div>
                    </div>
                </section>

                {/* ==================================
                    MAXILIN ENTITY
                ================================== */}

                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                            <div>
                                <p className="text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Пробиотик
                                    Максилин
                                </p>

                                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                    Один штамм
                                    2585 —
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        три формы
                                    </span>
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                    Представленные
                                    на сайте формы
                                    Максилина
                                    объединяет{" "}
                                    <strong className="font-black text-[#29380E]">
                                        Lactobacillus
                                        acidophilus
                                        2585
                                    </strong>
                                    .
                                </p>

                                <p className="mt-4 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                    Они отличаются
                                    формой выпуска,
                                    производственной
                                    средой,
                                    упаковкой и
                                    отдельными
                                    характеристиками.
                                </p>

                                <Link
                                    href="/maxilin"
                                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#29380E] px-6 py-4 text-sm font-black text-white"
                                >
                                    Всё о
                                    Максилине

                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                <MaxilinCard
                                    href="/product/maxilin-liquid"
                                    src="/images/maxilinAlmata.jpeg"
                                    title="Жидкий Максилин"
                                    subtitle="Кисломолочная форма"
                                    label="500 мл"
                                />

                                <MaxilinCard
                                    href="/product/maxilin-dry"
                                    src="/images/suhoiMaxilin.jpeg"
                                    title="Сухой Максилин"
                                    subtitle="Кисломолочная форма"
                                    label="20 саше"
                                />

                                <MaxilinCard
                                    href="/maxilin/superprobiotic"
                                    src="/images/superprobiotic.jpeg"
                                    title="Максилин Триллион"
                                    subtitle="Немолочная форма"
                                    label="50 саше"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    SEARCH INTENT / ANSWERS
                ================================== */}

                <section className="border-y border-gray-100 bg-white py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto mb-12 max-w-4xl text-center">
                            <Search
                                className="mx-auto h-8 w-8 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <p className="mt-5 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Разобраться
                                перед покупкой
                            </p>

                            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Что вы хотите
                                <span className="text-[#21AA57]">
                                    {" "}
                                    узнать?
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <KnowledgeCard
                                href="/maxilin/how-it-works"
                                icon={
                                    BookOpen
                                }
                                title="Максилин для чего?"
                                text="Что такое пробиотик и какое место он занимает в поддержке микробиоты."
                            />

                            <KnowledgeCard
                                href="/maxilin/science"
                                icon={
                                    Microscope
                                }
                                title="Что такое штамм 2585?"
                                text="Lactobacillus acidophilus 2585, патент и депозитные обозначения."
                            />

                            <KnowledgeCard
                                href="/maxilin/gut-health"
                                icon={
                                    HeartPulse
                                }
                                title="Что такое микробиом?"
                                text="Микробиота кишечника, питание, клетчатка, вода и образ жизни."
                            />

                            <KnowledgeCard
                                href="/l-arginine"
                                icon={Dna}
                                title="Что такое L-Аргинин?"
                                text="L-Arginine, аминокислота и её связь с синтезом оксида азота NO."
                            />
                        </div>
                    </div>
                </section>

                {/* ==================================
                    L-ARGININE
                ================================== */}

                <section className="py-20 md:py-28">
                    <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
                        <div className="relative min-h-[440px] overflow-hidden rounded-[3rem] bg-[#29380E]">
                            <Image
                                src="/images/larginine.webp"
                                alt="L-Аргинин L-Arginine EnergyMax — аминокислота"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain p-12"
                            />
                        </div>

                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#21AA57]/10 px-4 py-2">
                                <Dna
                                    className="h-4 w-4 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <span className="text-[10px] font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                    L-Arginine
                                </span>
                            </div>

                            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                L-Аргинин —
                                <span className="text-[#21AA57]">
                                    {" "}
                                    аминокислота
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                L-Аргинин,
                                L-Arginine,
                                Ларгинин и
                                Эль-Аргинин —
                                поисковые
                                варианты названия
                                аминокислоты
                                L-аргинин.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                В организме
                                L-аргинин
                                используется в
                                биохимическом
                                пути синтеза{" "}
                                <strong className="font-black text-[#29380E]">
                                    оксида азота
                                    (NO)
                                </strong>
                                .
                            </p>

                            <div className="mt-7 grid grid-cols-2 gap-3">
                                <MiniFact
                                    title="4 варианта"
                                    text="Тмин · тмин + гвоздика · гвоздика · мята"
                                />

                                <MiniFact
                                    title="2 800 сом"
                                    text="Цена одного флакона"
                                />
                            </div>

                            <Link
                                href="/l-arginine"
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#29380E] px-6 py-4 text-sm font-black text-white"
                            >
                                Всё о
                                L-Аргинине

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    CATALOG
                ================================== */}

                <section
                    id="catalog"
                    className="scroll-mt-28 border-y border-gray-100 bg-white py-20 md:py-24"
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div>
                                <p className="text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Каталог
                                    EnergyMax
                                </p>

                                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                    Выберите
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        продукт
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-xl text-sm leading-7 text-[#29380E]/55">
                                Цена,
                                характеристики
                                и доступная
                                информация
                                находятся в
                                отдельной
                                карточке каждого
                                товара.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {featuredProducts.map(
                                (
                                    product,
                                ) => {
                                    const image =
                                        product
                                            .images[0];

                                    const href =
                                        product.slug ===
                                        "maxilin-superprobiotic-50"
                                            ? "/maxilin/superprobiotic"
                                            : `/product/${product.slug}`;

                                    return (
                                        <Link
                                            key={
                                                product.slug
                                            }
                                            href={
                                                href
                                            }
                                            className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-[#F4F7F5] transition hover:-translate-y-1 hover:shadow-xl"
                                        >
                                            <div className="relative aspect-[4/3] bg-white">
                                                {image && (
                                                    <Image
                                                        src={
                                                            image.src
                                                        }
                                                        alt={
                                                            image.alt
                                                        }
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                        className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                )}
                                            </div>

                                            <div className="p-6">
                                                {product.heroTag && (
                                                    <p className="text-[9px] font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                                        {
                                                            product.heroTag
                                                        }
                                                    </p>
                                                )}

                                                <h3 className="mt-2 text-xl font-black text-[#29380E]">
                                                    {
                                                        product.name
                                                    }
                                                </h3>

                                                {product.packInfo && (
                                                    <p className="mt-2 text-xs leading-5 text-[#29380E]/45">
                                                        {
                                                            product.packInfo
                                                        }
                                                    </p>
                                                )}

                                                <div className="mt-5 flex items-end justify-between gap-3">
                                                    <p className="text-2xl font-black text-[#21AA57]">
                                                        {product.priceKgs.toLocaleString(
                                                            "ru-RU",
                                                        )}{" "}
                                                        сом
                                                    </p>

                                                    <ArrowRight
                                                        className="h-5 w-5 text-[#29380E] transition-transform group-hover:translate-x-1"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                },
                            )}
                        </div>
                    </div>
                </section>

                {/* ==================================
                    DELIVERY
                ================================== */}

                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-10 overflow-hidden rounded-[3rem] bg-[#29380E] p-8 text-white md:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:p-14">
                            <div>
                                <Globe2
                                    className="h-10 w-10 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <p className="mt-6 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Доставка
                                </p>

                                <h2 className="mt-3 text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                    Кыргызстан
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        и СНГ
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="text-sm leading-7 text-white/65 md:text-base">
                                    Заказы
                                    принимаются
                                    через сайт и
                                    WhatsApp.
                                    По Кыргызстану
                                    доставка
                                    предоставляется
                                    в подарок.
                                </p>

                                <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                                    Возможность
                                    отправки
                                    Максилина,
                                    L-Аргинина и
                                    другой продукции
                                    в Казахстан и
                                    другие страны СНГ
                                    уточняется по
                                    стране и городу
                                    получателя.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <Link
                                        href="/delivery"
                                        className="inline-flex items-center gap-2 rounded-xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white"
                                    >
                                        Доставка

                                        <ArrowRight
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                    </Link>

                                    <a
                                        href={
                                            whatsappUrl
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white"
                                    >
                                        Уточнить
                                        отправку
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================
                    TRUST
                ================================== */}

                <section className="border-y border-gray-100 bg-white py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto mb-12 max-w-4xl text-center">
                            <ShieldCheck
                                className="mx-auto h-9 w-9 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Информация
                                <span className="text-[#21AA57]">
                                    {" "}
                                    перед покупкой
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            <TrustCard
                                icon={
                                    FileCheck2
                                }
                                title="Документы"
                                text="Доступные документы и материалы собраны в отдельном разделе."
                                href="/docs"
                            />

                            <TrustCard
                                icon={
                                    Microscope
                                }
                                title="Штамм 2585"
                                text="Отдельная страница о Lactobacillus acidophilus 2585."
                                href="/maxilin/science"
                            />

                            <TrustCard
                                icon={
                                    HeartPulse
                                }
                                title="Микробиота"
                                text="Понятные материалы о кишечнике и микробиоме."
                                href="/maxilin/gut-health"
                            />

                            <TrustCard
                                icon={
                                    PackageCheck
                                }
                                title="Карточки товара"
                                text="Каждая форма имеет отдельное описание, цену и характеристики."
                                href="#catalog"
                            />
                        </div>
                    </div>
                </section>

                {/* ==================================
                    FAQ
                ================================== */}

                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <p className="text-center text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Частые вопросы
                            </p>

                            <h2 className="mt-3 text-center text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Короткие
                                <span className="text-[#21AA57]">
                                    {" "}
                                    ответы
                                </span>
                            </h2>

                            <div className="mt-10 space-y-3">
                                {homeFaq.map(
                                    (item) => (
                                        <details
                                            key={
                                                item.question
                                            }
                                            className="rounded-2xl border border-gray-100 bg-white p-5"
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
                        </div>
                    </div>
                </section>

                {/* ==================================
                    FINAL CTA
                ================================== */}

                <section className="pb-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="rounded-[3rem] bg-[#21AA57] p-8 text-center text-white md:p-12">
                            <Leaf
                                className="mx-auto h-10 w-10"
                                aria-hidden="true"
                            />

                            <h2 className="mt-5 text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                Подобрать
                                продукт
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                                Напишите,
                                какой продукт
                                интересует:
                                жидкий или
                                сухой Максилин,
                                Максилин
                                Триллион,
                                L-Аргинин или
                                другая продукция
                                EnergyMax.
                            </p>

                            <a
                                href={
                                    whatsappUrl
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#21AA57]"
                            >
                                <MessageCircle
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />

                                Написать
                                в WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

// ==========================================
// HERO PRODUCT
// ==========================================

function HeroProduct({
                         href,
                         src,
                         alt,
                         label,
                     }: {
    href: string;
    src: string;
    alt: string;
    label: string;
}) {
    return (
        <Link
            href={href}
            className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
            />

            <span className="absolute bottom-3 left-3 rounded-full bg-[#29380E]/85 px-3 py-1.5 text-[9px] font-black tracking-wider text-white uppercase backdrop-blur-md">
                {label}
            </span>
        </Link>
    );
}

// ==========================================
// QUICK LINK
// ==========================================

function QuickLink({
                       href,
                       icon: Icon,
                       title,
                       text,
                   }: {
    href: string;
    icon: LucideIcon;
    title: string;
    text: string;
}) {
    return (
        <Link
            href={href}
            className="group flex items-center gap-4 border-b border-gray-100 p-6 transition hover:bg-[#F4F7F5] md:border-b-0 md:border-r md:last:border-r-0"
        >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#21AA57]/10">
                <Icon
                    className="h-5 w-5 text-[#21AA57]"
                    aria-hidden="true"
                />
            </div>

            <div>
                <p className="font-black text-[#29380E]">
                    {title}
                </p>

                <p className="mt-1 text-xs text-[#29380E]/45">
                    {text}
                </p>
            </div>

            <ArrowRight
                className="ml-auto h-4 w-4 text-[#21AA57] transition-transform group-hover:translate-x-1"
                aria-hidden="true"
            />
        </Link>
    );
}

// ==========================================
// MAXILIN CARD
// ==========================================

function MaxilinCard({
                         href,
                         src,
                         title,
                         subtitle,
                         label,
                     }: {
    href: string;
    src: string;
    title: string;
    subtitle: string;
    label: string;
}) {
    return (
        <Link
            href={href}
            className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="relative aspect-square">
                <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-contain p-5 transition-transform group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <span className="rounded-full bg-[#21AA57]/10 px-3 py-1 text-[9px] font-black text-[#21AA57] uppercase">
                    {label}
                </span>

                <h3 className="mt-4 font-black text-[#29380E]">
                    {title}
                </h3>

                <p className="mt-2 text-xs text-[#29380E]/45">
                    {subtitle}
                </p>
            </div>
        </Link>
    );
}

// ==========================================
// KNOWLEDGE CARD
// ==========================================

function KnowledgeCard({
                           href,
                           icon: Icon,
                           title,
                           text,
                       }: {
    href: string;
    icon: LucideIcon;
    title: string;
    text: string;
}) {
    return (
        <Link
            href={href}
            className="group rounded-[2rem] bg-[#F4F7F5] p-6 transition hover:-translate-y-1"
        >
            <Icon
                className="h-7 w-7 text-[#21AA57]"
                aria-hidden="true"
            />

            <h3 className="mt-5 text-lg font-black text-[#29380E]">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#29380E]/55">
                {text}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-xs font-black text-[#21AA57]">
                Читать

                <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                />
            </span>
        </Link>
    );
}

// ==========================================
// MINI FACT
// ==========================================

function MiniFact({
                      title,
                      text,
                  }: {
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="font-black text-[#21AA57]">
                {title}
            </p>

            <p className="mt-2 text-xs leading-5 text-[#29380E]/50">
                {text}
            </p>
        </div>
    );
}

// ==========================================
// TRUST CARD
// ==========================================

function TrustCard({
                       icon: Icon,
                       title,
                       text,
                       href,
                   }: {
    icon: LucideIcon;
    title: string;
    text: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="group rounded-[2rem] bg-[#F4F7F5] p-6"
        >
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

            <ArrowRight
                className="mt-5 h-4 w-4 text-[#21AA57] transition-transform group-hover:translate-x-1"
                aria-hidden="true"
            />
        </Link>
    );
}