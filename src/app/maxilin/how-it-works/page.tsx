import type { Metadata } from "next";

import Link from "next/link";

import {
    ArrowRight,
    CheckCircle2,
    CircleAlert,
    Droplets,
    HeartPulse,
    Microscope,
    MoonStar,
    Salad,
    ShieldCheck,
    Sparkles,
    Waypoints,
} from "lucide-react";

import { seller } from "@/config/seller";

import {
    MAXILIN_STRAIN,
    gutHealthPillars,
    maxilinHowItWorks,
} from "@/data/maxilin";

// ==========================================
// SEO
// ==========================================

export const metadata: Metadata = {
    title:
        "Как работает Максилин и штамм Lactobacillus acidophilus 2585",

    description:
        "Как пробиотические микроорганизмы проходят пищеварительный тракт, что означает штамм Lactobacillus acidophilus 2585 и какое место пробиотик занимает в поддержке микробиоты кишечника.",

    alternates: {
        canonical:
            "/maxilin/how-it-works",
    },

    openGraph: {
        type: "article",

        locale: "ru_KG",

        siteName:
        seller.siteName,

        title:
            "Как работает Максилин",

        description:
            "Понятно о штамме Lactobacillus acidophilus 2585, пищеварительном тракте и микробиоте кишечника.",

        url:
            "/maxilin/how-it-works",
    },
};

// ==========================================
// PAGE
// ==========================================

export default function MaxilinHowItWorksPage() {
    const whatsappText =
        encodeURIComponent(
            "Здравствуйте! Хочу узнать подробнее о Максилине и подобрать подходящую форму.",
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
                    <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#21AA57]/20 blur-3xl" />

                    <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-5xl">
                        {/* Breadcrumb */}

                        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-white/45">
                            <Link
                                href="/"
                                className="transition hover:text-white"
                            >
                                Главная
                            </Link>

                            <span>/</span>

                            <Link
                                href="/maxilin"
                                className="transition hover:text-white"
                            >
                                Максилин
                            </Link>

                            <span>/</span>

                            <span className="text-[#21AA57]">
                                Как работает
                            </span>
                        </div>

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                            <Waypoints
                                className="h-4 w-4 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span className="text-xs font-black tracking-[0.2em] text-white/70 uppercase">
                                Как работает
                            </span>
                        </div>

                        <h1 className="max-w-4xl text-4xl leading-[0.95] font-black tracking-tight uppercase italic md:text-6xl lg:text-7xl">
                            Что происходит
                            <br />
                            после приёма
                            <span className="text-[#21AA57]">
                                {" "}
                                пробиотика
                            </span>
                        </h1>

                        <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                            Максилин представлен в трёх
                            формах, но их объединяет один
                            базовый штамм —{" "}
                            <strong className="font-black text-white">
                                {
                                    MAXILIN_STRAIN.fullName
                                }
                            </strong>
                            . Разбираем путь пробиотических
                            микроорганизмов без сложных
                            терминов и медицинских обещаний.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/maxilin#forms"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                            >
                                Сравнить 3 формы

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>

                            <Link
                                href="/maxilin"
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white transition-colors hover:bg-white/10"
                            >
                                О Максилине
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                IMPORTANT
            ================================== */}

            <section className="relative z-10 -mt-6">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#21AA57]/10 bg-white p-6 shadow-xl shadow-black/5 md:p-8">
                        <div className="grid gap-5 md:grid-cols-[auto_1fr]">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21AA57]/10">
                                <Microscope
                                    className="h-6 w-6 text-[#21AA57]"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <p className="text-[10px] font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Главное
                                </p>

                                <h2 className="mt-2 text-xl font-black text-[#29380E] md:text-2xl">
                                    Вид бактерии и штамм —
                                    не одно и то же
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-[#29380E]/60">
                                    <strong className="font-black text-[#29380E]">
                                        Lactobacillus
                                        acidophilus
                                    </strong>{" "}
                                    — это название вида.
                                    Число{" "}
                                    <strong className="font-black text-[#21AA57]">
                                        2585
                                    </strong>{" "}
                                    идентифицирует конкретный
                                    штамм. Поэтому при
                                    обсуждении характеристик
                                    пробиотика важно учитывать
                                    не только вид бактерии, но
                                    и номер штамма.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                4 STEPS
            ================================== */}

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-14 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Путь пробиотика
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Четыре основных
                            <span className="text-[#21AA57]">
                                {" "}
                                этапа
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#29380E]/55 md:text-base">
                            Это упрощённое объяснение
                            общего пути пробиотических
                            микроорганизмов в
                            пищеварительном тракте.
                        </p>
                    </div>

                    <div className="mx-auto max-w-5xl space-y-5">
                        {maxilinHowItWorks.map(
                            (item, index) => (
                                <article
                                    key={item.step}
                                    className="group relative overflow-hidden rounded-[2.25rem] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:p-8"
                                >
                                    <div className="grid gap-6 md:grid-cols-[100px_1fr] md:items-start">
                                        <div className="relative">
                                            <span className="text-5xl font-black text-[#21AA57]/15">
                                                {item.step}
                                            </span>

                                            {index <
                                                maxilinHowItWorks.length -
                                                1 && (
                                                    <div className="absolute left-6 top-16 hidden h-14 w-px bg-[#21AA57]/15 md:block" />
                                                )}
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-black text-[#29380E] md:text-2xl">
                                                {
                                                    item.title
                                                }
                                            </h3>

                                            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#29380E]/60 md:text-base">
                                                {
                                                    item.text
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* ==================================
                WHAT LACTOBACILLI DO
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div className="lg:sticky lg:top-28">
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Lactobacillus acidophilus
                            </p>

                            <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Почему важен
                                <span className="text-[#21AA57]">
                                    {" "}
                                    конкретный штамм
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                Разные штаммы даже одного
                                вида бактерий могут
                                отличаться по своим
                                характеристикам. Поэтому
                                корректнее говорить не просто
                                «лактобактерии», а указывать
                                конкретный штамм — в данном
                                случае 2585.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <InfoCard
                                icon={Microscope}
                                title="Идентификация"
                                text="Номер 2585 позволяет отличать конкретный штамм Lactobacillus acidophilus от других штаммов того же вида."
                            />

                            <InfoCard
                                icon={ShieldCheck}
                                title="Жизнеспособность"
                                text="Для пробиотического продукта важно, чтобы заявленные микроорганизмы сохраняли жизнеспособность при правильном хранении и применении."
                            />

                            <InfoCard
                                icon={Waypoints}
                                title="Пищеварительный тракт"
                                text="После приёма микроорганизмы проходят через различные участки желудочно-кишечного тракта, где условия среды заметно отличаются."
                            />

                            <InfoCard
                                icon={HeartPulse}
                                title="Микробиота"
                                text="Пробиотик рассматривается как один из элементов общего подхода к поддержке нормальной микробиоты кишечника."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                MICROBIOTA
            ================================== */}

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#29380E] text-white">
                        <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-2 lg:p-14">
                            <div>
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#21AA57]/15 px-4 py-2">
                                    <Sparkles
                                        className="h-4 w-4 text-[#21AA57]"
                                        aria-hidden="true"
                                    />

                                    <span className="text-xs font-black tracking-widest text-[#21AA57] uppercase">
                                        Микробиота
                                    </span>
                                </div>

                                <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                    Пробиотик —
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        не единственный фактор
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                                    Состояние пищеварительной
                                    системы связано сразу с
                                    несколькими факторами.
                                    Поэтому одну добавку
                                    нельзя рассматривать
                                    отдельно от питания,
                                    жидкости, движения, сна и
                                    общего образа жизни.
                                </p>
                            </div>

                            <div className="grid gap-3">
                                <DarkPoint>
                                    Пробиотик не заменяет
                                    разнообразное питание.
                                </DarkPoint>

                                <DarkPoint>
                                    Пробиотик не заменяет
                                    лечение, назначенное
                                    врачом.
                                </DarkPoint>

                                <DarkPoint>
                                    Количество CFU само по
                                    себе не определяет
                                    результат.
                                </DarkPoint>

                                <DarkPoint>
                                    Для конкретного продукта
                                    важны штамм, форма,
                                    маркировка и условия
                                    хранения.
                                </DarkPoint>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                GUT HEALTH PILLARS
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Ежедневный режим
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Что ещё важно для
                            <span className="text-[#21AA57]">
                                {" "}
                                кишечника
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {gutHealthPillars.map(
                            (item, index) => (
                                <article
                                    key={item.title}
                                    className="rounded-[2rem] bg-[#F4F7F5] p-6 md:p-7"
                                >
                                    <PillarIcon
                                        index={index}
                                    />

                                    <h3 className="mt-5 text-lg font-black text-[#29380E]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#29380E]/60">
                                        {item.text}
                                    </p>
                                </article>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* ==================================
                IMPORTANT NOTICE
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
                                    Когда особенно важно
                                    обсудить приём со
                                    специалистом
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-[#29380E]/65">
                                    Если пробиотик выбирается
                                    для ребёнка, во время
                                    беременности, при
                                    хроническом заболевании,
                                    выраженных симптомах или
                                    одновременно с
                                    лекарственными
                                    препаратами, ориентируйтесь
                                    на маркировку конкретной
                                    упаковки и рекомендации
                                    профильного специалиста.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                CTA
            ================================== */}

            <section>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-6xl rounded-[3rem] bg-[#21AA57] p-8 text-center text-white md:p-12">
                        <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                            Один штамм 2585 —
                            <br />
                            три формы Максилина
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                            Сравните жидкий Максилин,
                            сухой Максилин 20 саше и
                            Максилин Триллион 50 саше.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Link
                                href="/maxilin#forms"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#21AA57]"
                            >
                                Сравнить формы

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-black text-white"
                            >
                                Спросить в WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// ==========================================
// INFO CARD
// ==========================================

function InfoCard({
                      icon: Icon,
                      title,
                      text,
                  }: {
    icon: typeof Microscope;
    title: string;
    text: string;
}) {
    return (
        <article className="rounded-[2rem] border border-gray-100 bg-[#F4F7F5] p-6">
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

// ==========================================
// DARK POINT
// ==========================================

function DarkPoint({
                       children,
                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#21AA57]"
                aria-hidden="true"
            />

            <p className="text-sm leading-6 text-white/70">
                {children}
            </p>
        </div>
    );
}

// ==========================================
// PILLAR ICON
// ==========================================

function PillarIcon({
                        index,
                    }: {
    index: number;
}) {
    const icons = [
        Salad,
        Droplets,
        HeartPulse,
        MoonStar,
        ShieldCheck,
        Sparkles,
    ];

    const Icon =
        icons[index % icons.length];

    return (
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#21AA57]/10">
            <Icon
                className="h-5 w-5 text-[#21AA57]"
                aria-hidden="true"
            />
        </div>
    );
}