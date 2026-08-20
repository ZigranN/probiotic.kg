import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";

import Link from "next/link";

import {
    Activity,
    Apple,
    ArrowRight,
    CheckCircle2,
    CircleAlert,
    Droplets,
    HeartPulse,
    Leaf,
    MoonStar,
    Salad,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { seller } from "@/config/seller";

import {
    MAXILIN_STRAIN,
    gutHealthPillars,
} from "@/data/maxilin";

// ==========================================
// SEO
// ==========================================

export const metadata: Metadata = {
    title:
        "Здоровье кишечника, микробиота и пробиотики",

    description:
        "Что важно для здоровья кишечника: разнообразное питание, пищевые волокна, вода, движение, сон и место пробиотиков в поддержке микробиоты.",

    alternates: {
        canonical:
            "/maxilin/gut-health",
    },

    openGraph: {
        type: "article",

        locale: "ru_KG",

        siteName:
        seller.siteName,

        title:
            "Здоровье кишечника и микробиота",

        description:
            "Питание, клетчатка, вода, движение, сон и пробиотики как часть комплексного подхода к здоровью кишечника.",

        url:
            "/maxilin/gut-health",
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Здоровье кишечника и микробиота",

        description:
            "Что кроме пробиотика важно для ежедневной поддержки пищеварительной системы.",
    },
};

// ==========================================
// PAGE
// ==========================================

export default function GutHealthPage() {
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
                                Здоровье кишечника
                            </span>
                        </div>

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                            <HeartPulse
                                className="h-4 w-4 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span className="text-xs font-black tracking-[0.2em] text-white/70 uppercase">
                                Здоровье кишечника
                            </span>
                        </div>

                        <h1 className="max-w-5xl text-4xl leading-[0.95] font-black tracking-tight uppercase italic md:text-6xl lg:text-7xl">
                            Микробиота —
                            <br />
                            это больше,
                            <span className="text-[#21AA57]">
                                {" "}
                                чем пробиотик
                            </span>
                        </h1>

                        <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                            Поддержка пищеварительной
                            системы начинается не с одного
                            продукта. Рацион, пищевые
                            волокна, вода, движение, сон и
                            ежедневный режим работают
                            вместе.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link
                                href="#principles"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                            >
                                6 основных принципов

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>

                            <Link
                                href="/maxilin#forms"
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white transition-colors hover:bg-white/10"
                            >
                                Три формы Максилина
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                INTRO
            ================================== */}

            <section className="relative z-10 -mt-6">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-gray-100 bg-white p-7 shadow-xl shadow-black/5 md:p-10">
                        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21AA57]/10">
                                <Leaf
                                    className="h-7 w-7 text-[#21AA57]"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <p className="text-[10px] font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Основной принцип
                                </p>

                                <h2 className="mt-3 text-2xl font-black text-[#29380E] md:text-3xl">
                                    Пробиотик — только один
                                    элемент общей системы
                                </h2>

                                <p className="mt-4 max-w-4xl text-sm leading-7 text-[#29380E]/60 md:text-base">
                                    Микробиота кишечника
                                    существует в постоянно
                                    меняющейся среде. На неё
                                    могут влиять особенности
                                    питания, лекарства,
                                    режим дня и многие другие
                                    факторы. Поэтому
                                    пробиотический продукт
                                    логичнее рассматривать как
                                    часть общего подхода, а
                                    не как замену питания или
                                    медицинской помощи.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                WHAT IS MICROBIOTA
            ================================== */}

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <div>
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Базовое понятие
                            </p>

                            <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Что такое
                                <span className="text-[#21AA57]">
                                    {" "}
                                    микробиота
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                Микробиота — это
                                совокупность микроорганизмов,
                                живущих в определённой среде
                                организма. В кишечнике
                                существует сложное
                                микробное сообщество,
                                состав которого у разных
                                людей может отличаться.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                Поэтому нет одного
                                универсального продукта или
                                рациона, который одинаково
                                подходит каждому человеку.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <InfoCard
                                icon={Salad}
                                title="Рацион"
                                text="Состав ежедневного питания определяет, какие питательные вещества регулярно поступают в пищеварительный тракт."
                            />

                            <InfoCard
                                icon={Droplets}
                                title="Жидкость"
                                text="Достаточное употребление жидкости является частью нормального пищеварительного режима."
                            />

                            <InfoCard
                                icon={Activity}
                                title="Активность"
                                text="Регулярное движение входит в базовые рекомендации по здоровому образу жизни."
                            />

                            <InfoCard
                                icon={MoonStar}
                                title="Режим"
                                text="Сон и стабильный ежедневный режим связаны с общим самочувствием и пищевым поведением."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                PRINCIPLES
            ================================== */}

            <section
                id="principles"
                className="scroll-mt-28 border-y border-gray-100 bg-white py-20 md:py-24"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-14 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Ежедневная основа
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            6 принципов
                            <span className="text-[#21AA57]">
                                {" "}
                                здорового режима
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#29380E]/55 md:text-base">
                            Здесь нет сложных схем. Это
                            базовые привычки, которые
                            полезно рассматривать вместе.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {gutHealthPillars.map(
                            (item, index) => (
                                <article
                                    key={item.title}
                                    className="group rounded-[2.25rem] bg-[#F4F7F5] p-7 transition hover:-translate-y-1"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <PillarIcon
                                            index={index}
                                        />

                                        <span className="text-4xl font-black text-[#29380E]/5">
                                            {String(
                                                index + 1,
                                            ).padStart(
                                                2,
                                                "0",
                                            )}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-xl font-black text-[#29380E]">
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
                FOOD + FIBER
            ================================== */}

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#29380E] text-white">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-8 md:p-12 lg:p-14">
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#21AA57]/15 px-4 py-2">
                                    <Salad
                                        className="h-4 w-4 text-[#21AA57]"
                                        aria-hidden="true"
                                    />

                                    <span className="text-xs font-black tracking-widest text-[#21AA57] uppercase">
                                        Питание
                                    </span>
                                </div>

                                <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                    Разнообразие
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        важнее модной диеты
                                    </span>
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-white/60 md:text-base">
                                    Для большинства людей
                                    разумной основой является
                                    разнообразный рацион с
                                    продуктами разных групп,
                                    а не постоянное
                                    исключение большого
                                    количества продуктов без
                                    необходимости.
                                </p>
                            </div>

                            <div className="grid gap-3 bg-white/5 p-8 md:p-12 lg:p-14">
                                <FoodPoint>
                                    овощи и зелень
                                </FoodPoint>

                                <FoodPoint>
                                    фрукты и ягоды
                                </FoodPoint>

                                <FoodPoint>
                                    бобовые
                                </FoodPoint>

                                <FoodPoint>
                                    цельные злаки
                                </FoodPoint>

                                <FoodPoint>
                                    орехи и семена
                                </FoodPoint>

                                <FoodPoint>
                                    другие привычные
                                    источники пищевых волокон
                                </FoodPoint>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                FIBER
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21AA57]/10">
                                <Apple
                                    className="h-7 w-7 text-[#21AA57]"
                                    aria-hidden="true"
                                />
                            </div>

                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Пищевые волокна
                            </p>

                            <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Клетчатку лучше
                                <span className="text-[#21AA57]">
                                    {" "}
                                    увеличивать постепенно
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                Если раньше в рационе было
                                мало продуктов с пищевыми
                                волокнами, резкое увеличение
                                их количества может быть
                                некомфортным.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                Поэтому изменения в рационе
                                разумнее делать постепенно и
                                одновременно следить за
                                достаточным употреблением
                                жидкости.
                            </p>
                        </div>

                        <div className="rounded-[2.5rem] bg-[#F4F7F5] p-7 md:p-10">
                            <p className="text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Простая логика
                            </p>

                            <div className="mt-7 space-y-5">
                                <NumberPoint
                                    number="01"
                                    title="Добавляйте постепенно"
                                    text="Не обязательно полностью перестраивать рацион за один день."
                                />

                                <NumberPoint
                                    number="02"
                                    title="Помните о воде"
                                    text="Жидкость особенно важна при изменении количества клетчатки в рационе."
                                />

                                <NumberPoint
                                    number="03"
                                    title="Оценивайте переносимость"
                                    text="Если определённые продукты вызывают выраженный дискомфорт, стоит обсудить это со специалистом."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                PROBIOTIC ROLE
            ================================== */}

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Место пробиотика
                            </p>

                            <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                А где здесь
                                <span className="text-[#21AA57]">
                                    {" "}
                                    Максилин?
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                Представленные формы
                                Максилина объединяет штамм{" "}
                                <strong className="font-black text-[#29380E]">
                                    {
                                        MAXILIN_STRAIN.fullName
                                    }
                                </strong>
                                .
                            </p>

                            <p className="mt-4 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                Пробиотик можно
                                рассматривать как дополнение
                                к рациону и ежедневному
                                режиму, а не как замену
                                остальных факторов.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <Link
                                    href="/maxilin/how-it-works"
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#29380E] px-6 py-4 text-sm font-black text-white"
                                >
                                    Как работает

                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </Link>

                                <Link
                                    href="/maxilin#forms"
                                    className="inline-flex items-center gap-2 rounded-xl border border-[#29380E]/10 bg-white px-6 py-4 text-sm font-black text-[#29380E]"
                                >
                                    Сравнить формы
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <ApproachPoint
                                title="Не вместо питания"
                                text="Пробиотический продукт не компенсирует постоянно несбалансированный рацион."
                            />

                            <ApproachPoint
                                title="Не вместо воды"
                                text="Поддержание нормального питьевого режима остаётся отдельной частью ежедневного ухода за собой."
                            />

                            <ApproachPoint
                                title="Не вместо движения и сна"
                                text="Физическая активность и полноценный отдых имеют собственное значение для общего здоровья."
                            />

                            <ApproachPoint
                                title="Не вместо лечения"
                                text="Пробиотик не должен использоваться как самостоятельная замена терапии, назначенной врачом."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                WHEN TO SEE A DOCTOR
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-amber-200 bg-amber-50 p-7 md:p-10">
                        <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                            <CircleAlert
                                className="h-8 w-8 text-amber-600"
                                aria-hidden="true"
                            />

                            <div>
                                <h2 className="text-xl font-black text-[#29380E] md:text-2xl">
                                    Когда одной коррекции
                                    рациона недостаточно
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-[#29380E]/65">
                                    Если симптомы выражены,
                                    сохраняются длительное
                                    время, повторяются или
                                    сопровождаются ухудшением
                                    общего состояния, лучше
                                    обратиться к специалисту,
                                    а не пытаться определить
                                    причину только по
                                    симптомам.
                                </p>

                                <p className="mt-4 text-sm leading-7 text-[#29380E]/65">
                                    Для детей, беременности,
                                    хронических заболеваний
                                    и одновременного приёма
                                    лекарств выбор добавок
                                    также стоит согласовывать
                                    индивидуально.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                SUMMARY
            ================================== */}

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-6xl rounded-[3rem] bg-[#29380E] p-8 text-white md:p-12">
                        <p className="text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Коротко
                        </p>

                        <h2 className="mt-3 text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                            Здоровье кишечника —
                            <span className="text-[#21AA57]">
                                {" "}
                                это система
                            </span>
                        </h2>

                        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <SummaryPoint>
                                разнообразный рацион
                            </SummaryPoint>

                            <SummaryPoint>
                                пищевые волокна
                            </SummaryPoint>

                            <SummaryPoint>
                                достаточное употребление
                                жидкости
                            </SummaryPoint>

                            <SummaryPoint>
                                регулярное движение
                            </SummaryPoint>

                            <SummaryPoint>
                                полноценный сон
                            </SummaryPoint>

                            <SummaryPoint>
                                разумное место пробиотика в
                                общем режиме
                            </SummaryPoint>
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

                        <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                            Хотите разобраться
                            <br />
                            в трёх формах Максилина?
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
                                Сравнить 3 формы

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>

                            <Link
                                href="/maxilin"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-black text-white"
                            >
                                О Максилине
                            </Link>
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

// ==========================================
// PILLAR ICON
// ==========================================

function PillarIcon({
                        index,
                    }: {
    index: number;
}) {
    const icons: LucideIcon[] = [
        Salad,
        Apple,
        Droplets,
        Activity,
        MoonStar,
        HeartPulse,
    ];

    const Icon =
        icons[index % icons.length];

    return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21AA57]/10">
            <Icon
                className="h-6 w-6 text-[#21AA57]"
                aria-hidden="true"
            />
        </div>
    );
}

// ==========================================
// FOOD POINT
// ==========================================

function FoodPoint({
                       children,
                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <CheckCircle2
                className="h-5 w-5 flex-shrink-0 text-[#21AA57]"
                aria-hidden="true"
            />

            <span className="text-sm font-semibold text-white/75">
                {children}
            </span>
        </div>
    );
}

// ==========================================
// NUMBER POINT
// ==========================================

function NumberPoint({
                         number,
                         title,
                         text,
                     }: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="grid grid-cols-[auto_1fr] gap-4">
            <span className="text-2xl font-black text-[#21AA57]/35">
                {number}
            </span>

            <div>
                <h3 className="font-black text-[#29380E]">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#29380E]/55">
                    {text}
                </p>
            </div>
        </div>
    );
}

// ==========================================
// APPROACH POINT
// ==========================================

function ApproachPoint({
                           title,
                           text,
                       }: {
    title: string;
    text: string;
}) {
    return (
        <article className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
                <ShieldCheck
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#21AA57]"
                    aria-hidden="true"
                />

                <div>
                    <h3 className="font-black text-[#29380E]">
                        {title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#29380E]/60">
                        {text}
                    </p>
                </div>
            </div>
        </article>
    );
}

// ==========================================
// SUMMARY POINT
// ==========================================

function SummaryPoint({
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

            <span className="text-sm font-semibold leading-6 text-white/70">
                {children}
            </span>
        </div>
    );
}