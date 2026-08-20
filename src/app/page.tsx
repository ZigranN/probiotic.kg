import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
    ArrowRight,
    BadgeCheck,
    BookOpen,
    CheckCircle2,
    Dna,
    FileText,
    FlaskConical,
    HeartPulse,
    MessageCircle,
    PackageCheck,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import Catalog from "@/components/Catalog";
import { seller } from "@/config/seller";
import {
    gutHealthPillars,
    maxilinFaq,
    maxilinForms,
    maxilinHistory,
    maxilinHowItWorks,
    maxilinScience,
    MAXILIN_POSITIONING,
    MAXILIN_STRAIN,
} from "@/data/maxilin";

export const metadata: Metadata = {
    title: "Максилин в Кыргызстане — формы, штамм 2585, документы и каталог",
    description:
        "Максилин в Кыргызстане: Lactobacillus acidophilus 2585, жидкая и сухие формы, SuperProbiotic 50 саше, документы, история технологии и каталог с доставкой в подарок.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "ru_KG",
        siteName: seller.siteName,
        title: "Максилин в Кыргызстане | probiotic.kg",
        description:
            "Один штамм Lactobacillus acidophilus 2585 — разные формы Максилина. Сравнение, документы, история и каталог.",
        url: "/",
    },
};

const formImages = {
    liquid: {
        src: "/images/maxilin-liquid.png",
        alt: "Жидкий Максилин — кисломолочная форма со штаммом Lactobacillus acidophilus 2585",
    },
    "dry-milk-20": {
        src: "/images/suxoi-maksilin.svg",
        alt: "Сухой Максилин 20 саше — сухая кисломолочная форма со штаммом 2585",
    },
    "superprobiotic-50": {
        src: "/images/superprobiotic.jpeg",
        alt: "Maxilin SuperProbiotic 50 саше — 20 млрд CFU в саше и 1 триллион CFU в упаковке",
    },
} as const;

export default function Home() {
    const whatsappText = encodeURIComponent(
        "Здравствуйте! Хочу уточнить наличие и выбрать подходящую форму Максилина.",
    );

    const whatsappUrl =
        `https://wa.me/${seller.whatsappPhone}?text=${whatsappText}`;

    return (
        <main className="min-h-screen bg-[#F4F7F5] text-[#29380E]">
            {/* ==================================
                HERO
            ================================== */}
            <section className="relative overflow-hidden bg-white">
                <div
                    aria-hidden="true"
                    className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#21AA57]/10 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl"
                />

                <div className="container relative z-10 mx-auto grid items-center gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#21AA57]/15 bg-[#21AA57]/5 px-4 py-2">
                            <Dna
                                className="h-4 w-4 text-[#21AA57]"
                                aria-hidden="true"
                            />
                            <span className="text-xs font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                {MAXILIN_POSITIONING.eyebrow}
                            </span>
                        </div>

                        <h1 className="max-w-4xl text-4xl leading-[0.98] font-black tracking-tight uppercase italic md:text-6xl lg:text-7xl">
                            Максилин
                            <br />
                            <span className="text-[#21AA57]">
                                штамм 2585
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-[#29380E]/65 md:text-lg">
                            {MAXILIN_POSITIONING.intro}
                        </p>

                        <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                            <div className="rounded-2xl border border-gray-100 bg-[#F4F7F5] p-4">
                                <div className="text-2xl font-black text-[#21AA57]">
                                    2585
                                </div>
                                <div className="mt-1 text-xs leading-5 text-[#29380E]/50">
                                    ключевой штамм линейки
                                </div>
                            </div>

                            <div className="rounded-2xl border border-gray-100 bg-[#F4F7F5] p-4">
                                <div className="text-2xl font-black text-[#21AA57]">
                                    3
                                </div>
                                <div className="mt-1 text-xs leading-5 text-[#29380E]/50">
                                    формы Максилина на сайте
                                </div>
                            </div>

                            <div className="rounded-2xl border border-gray-100 bg-[#F4F7F5] p-4">
                                <div className="text-2xl font-black text-[#21AA57]">
                                    20 млрд
                                </div>
                                <div className="mt-1 text-xs leading-5 text-[#29380E]/50">
                                    CFU / саше SuperProbiotic
                                </div>
                            </div>

                            <div className="rounded-2xl border border-gray-100 bg-[#F4F7F5] p-4">
                                <div className="text-2xl font-black text-[#21AA57]">
                                    1 трлн
                                </div>
                                <div className="mt-1 text-xs leading-5 text-[#29380E]/50">
                                    CFU / упаковка 50 саше
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#catalog"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                            >
                                Смотреть каталог
                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </a>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-2xl border border-[#29380E]/10 bg-white px-6 py-4 text-sm font-bold text-[#29380E] transition-colors hover:border-[#21AA57]"
                            >
                                <MessageCircle
                                    className="h-4 w-4 text-[#21AA57]"
                                    aria-hidden="true"
                                />
                                Помочь выбрать форму
                            </a>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-gray-100 bg-gradient-to-br from-[#F4F7F5] via-white to-[#21AA57]/10 shadow-2xl">
                            <Image
                                src="/images/superprobiotic.jpeg"
                                alt="Maxilin SuperProbiotic 50 саше"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 520px"
                                className="object-contain p-8 md:p-12"
                            />
                        </div>

                        <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur md:left-8 md:right-8">
                            <div className="flex items-center gap-3">
                                <BadgeCheck
                                    className="h-6 w-6 flex-shrink-0 text-[#21AA57]"
                                    aria-hidden="true"
                                />
                                <div>
                                    <p className="text-sm font-black">
                                        SuperProbiotic · 50 саше
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-[#29380E]/55">
                                        20 млрд CFU в одном саше · 1 триллион CFU в упаковке · 7 800 сом
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                FORMS
            ================================== */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Формы Максилина
                        </p>
                        <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                            Один штамм —
                            <span className="text-[#21AA57]">
                                {" "}разные технологии
                            </span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#29380E]/60 md:text-base">
                            Формы объединяет {MAXILIN_STRAIN.fullName}, но они отличаются производственной средой, упаковкой и количеством микроорганизмов. Поэтому сравнивать нужно конкретные SKU, а не только название «Максилин».
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {maxilinForms.map((form) => {
                            const image = formImages[form.id];

                            return (
                                <article
                                    key={form.id}
                                    className="flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-gray-100 bg-white shadow-sm"
                                >
                                    <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F4F7F5] to-white">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                            className="object-contain p-7"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col p-7">
                                        <p className="mb-2 text-xs font-black tracking-[0.16em] text-[#21AA57] uppercase">
                                            {form.form}
                                        </p>

                                        <h3 className="mb-4 text-2xl font-black tracking-tight">
                                            {form.name}
                                        </h3>

                                        {form.period && (
                                            <p className="mb-4 text-sm leading-6 text-[#29380E]/50">
                                                {form.period}
                                            </p>
                                        )}

                                        <div className="mb-5 space-y-3 rounded-2xl bg-[#F4F7F5] p-4 text-sm">
                                            <div>
                                                <span className="font-bold">
                                                    Штамм:
                                                </span>{" "}
                                                {MAXILIN_STRAIN.fullName}
                                            </div>
                                            <div>
                                                <span className="font-bold">
                                                    Основа:
                                                </span>{" "}
                                                {form.base}
                                            </div>
                                            <div>
                                                <span className="font-bold">
                                                    Упаковка:
                                                </span>{" "}
                                                {form.pack}
                                            </div>
                                            {form.cfuLabel && (
                                                <div className="font-black text-[#21AA57]">
                                                    {form.cfuLabel}
                                                </div>
                                            )}
                                        </div>

                                        <ul className="mb-7 space-y-3">
                                            {form.keyPoints.slice(0, 4).map((point) => (
                                                <li
                                                    key={point}
                                                    className="flex items-start gap-3 text-sm leading-6 text-[#29380E]/65"
                                                >
                                                    <CheckCircle2
                                                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#21AA57]"
                                                        aria-hidden="true"
                                                    />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={`/product/${form.productSlug}`}
                                            className="mt-auto inline-flex items-center gap-2 text-sm font-black text-[#21AA57]"
                                        >
                                            Открыть товар
                                            <ArrowRight
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mx-auto mt-7 max-w-5xl rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950/75">
                        <strong>Важно:</strong>{" "}
                        {MAXILIN_POSITIONING.important}
                    </div>
                </div>
            </section>

            {/* ==================================
                HISTORY
            ================================== */}
            <section className="border-y border-gray-100 bg-white py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                        <div className="lg:sticky lg:top-28">
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                История формы
                            </p>
                            <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                Как развивалась
                                <span className="text-[#21AA57]">
                                    {" "}линейка Максилин
                                </span>
                            </h2>
                            <p className="mt-5 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                Смысл развития линейки — сохранить ключевую культуру 2585, адаптируя формат продукта под хранение, использование и разные рынки.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {maxilinHistory.map((item, index) => (
                                <article
                                    key={`${item.year}-${item.title}`}
                                    className="grid gap-5 rounded-[2rem] bg-[#F4F7F5] p-6 md:grid-cols-[110px_1fr] md:p-8"
                                >
                                    <div>
                                        <span className="text-xs font-black tracking-[0.14em] text-[#21AA57] uppercase">
                                            Этап {index + 1}
                                        </span>
                                        <div className="mt-2 text-lg font-black">
                                            {item.year}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 text-xl font-black">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm leading-7 text-[#29380E]/60 md:text-base">
                                            {item.text}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                HOW IT WORKS
            ================================== */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Как это работает
                        </p>
                        <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                            Пробиотик — часть
                            <span className="text-[#21AA57]">
                                {" "}общего режима
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {maxilinHowItWorks.map((item) => (
                            <article
                                key={item.step}
                                className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm"
                            >
                                <div className="mb-6 text-4xl font-black text-[#21AA57]/20">
                                    {item.step}
                                </div>
                                <h3 className="mb-3 text-lg font-black">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-7 text-[#29380E]/60">
                                    {item.text}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href="/info"
                            className="inline-flex items-center gap-2 text-sm font-black text-[#21AA57]"
                        >
                            Подробнее о микробиоте и кишечнике
                            <ArrowRight
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ==================================
                SCIENCE
            ================================== */}
            <section className="bg-[#29380E] py-20 text-white md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                        <div>
                            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21AA57]">
                                <FlaskConical
                                    className="h-7 w-7"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Наука и документы
                            </p>
                            <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                Патент, штамм
                                <span className="text-[#21AA57]">
                                    {" "}и история технологии
                                </span>
                            </h2>
                            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                                {maxilinScience.patent.text}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <Link
                                    href="/docs"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#29380E]"
                                >
                                    <FileText
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                    Документы на сайте
                                </Link>
                                <a
                                    href={maxilinScience.patent.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white"
                                >
                                    EA 014227 B1
                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {maxilinScience.deposits.map((deposit) => (
                                <article
                                    key={deposit.code}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                >
                                    <div className="mb-2 font-black text-[#21AA57]">
                                        {deposit.code}
                                    </div>
                                    <p className="text-sm leading-6 text-white/55">
                                        {deposit.text}
                                    </p>
                                </article>
                            ))}

                            <div className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5 text-sm leading-7 text-white/55">
                                {maxilinScience.note}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                GUT HEALTH
            ================================== */}
            <section className="bg-white py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <HeartPulse
                            className="mx-auto mb-5 h-10 w-10 text-[#21AA57]"
                            aria-hidden="true"
                        />
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Здоровье кишечника
                        </p>
                        <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                            Не только
                            <span className="text-[#21AA57]">
                                {" "}пробиотик
                            </span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#29380E]/60 md:text-base">
                            Как и в образовательной структуре Maxilin Review, мы рассматриваем пробиотик как дополнение к рациону и образу жизни, а не как замену базовым привычкам.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {gutHealthPillars.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-[2rem] bg-[#F4F7F5] p-6"
                            >
                                <Sparkles
                                    className="mb-5 h-6 w-6 text-[#21AA57]"
                                    aria-hidden="true"
                                />
                                <h3 className="mb-3 font-black">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-7 text-[#29380E]/60">
                                    {item.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================================
                CATALOG
            ================================== */}
            <section
                aria-labelledby="catalog-title"
                className="border-y border-gray-100 bg-[#F4F7F5]"
            >
                <div className="container mx-auto px-4 pt-20 md:px-8 lg:px-12">
                    <div className="mx-auto mb-4 max-w-4xl text-center">
                        <PackageCheck
                            className="mx-auto mb-4 h-9 w-9 text-[#21AA57]"
                            aria-hidden="true"
                        />
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Каталог probiotic.kg
                        </p>
                        <h2
                            id="catalog-title"
                            className="text-3xl font-black tracking-tight uppercase italic md:text-5xl"
                        >
                            Выберите
                            <span className="text-[#21AA57]">
                                {" "}конкретный товар
                            </span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#29380E]/60">
                            Цена и наличие берутся из каталога. Доставка по Кыргызстану — в подарок. Перед заказом можно уточнить форму и наличие в WhatsApp.
                        </p>
                    </div>

                    <Catalog />
                </div>
            </section>

            {/* ==================================
                FAQ
            ================================== */}
            <section className="bg-white py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <BookOpen
                                className="mb-5 h-9 w-9 text-[#21AA57]"
                                aria-hidden="true"
                            />
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                FAQ
                            </p>
                            <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                Главное
                                <span className="text-[#21AA57]">
                                    {" "}о Максилине
                                </span>
                            </h2>
                            <p className="mt-5 text-sm leading-7 text-[#29380E]/60">
                                Короткие ответы на вопросы, которые чаще всего возникают из-за разных форм и упаковок продукта.
                            </p>
                            <Link
                                href="/faq"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#21AA57]"
                            >
                                Все вопросы и ответы
                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {maxilinFaq.slice(0, 4).map((item) => (
                                <article
                                    key={item.question}
                                    className="rounded-2xl bg-[#F4F7F5] p-6"
                                >
                                    <h3 className="mb-3 font-black">
                                        {item.question}
                                    </h3>
                                    <p className="text-sm leading-7 text-[#29380E]/60">
                                        {item.answer}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                TRUST / CTA
            ================================== */}
            <section className="px-4 pb-20 md:px-8 md:pb-24 lg:px-12">
                <div className="container mx-auto overflow-hidden rounded-[2.75rem] bg-[#29380E] p-8 text-white md:p-12">
                    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <ShieldCheck
                                className="mb-5 h-10 w-10 text-[#21AA57]"
                                aria-hidden="true"
                            />
                            <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-4xl">
                                Нужна помощь с выбором формы?
                            </h2>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                                Поможем сравнить упаковки, проверить наличие и оформить заказ. Для медицинских вопросов и выбора при заболеваниях рекомендуем обращаться к квалифицированному специалисту.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 lg:flex-col">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-w-56 items-center justify-center gap-2 rounded-xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white"
                            >
                                <MessageCircle
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                                WhatsApp
                            </a>
                            <Link
                                href="/docs"
                                className="inline-flex min-w-56 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-sm font-bold text-white"
                            >
                                <FileText
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                                Документы
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}