import type { Metadata } from "next";
import Link from "next/link";

import {
    ArrowRight,
    BadgeCheck,
    BookOpen,
    CheckCircle2,
    Database,
    FileCheck2,
    FileText,
    FlaskConical,
    Microscope,
    ShieldCheck,
} from "lucide-react";

import { seller } from "@/config/seller";

import {
    MAXILIN_STRAIN,
    maxilinScience,
    scienceMilestones,
} from "@/data/maxilin";

// ==========================================
// SEO
// ==========================================

export const metadata: Metadata = {
    title:
        "Штамм 2585, патент и документы Максилин",

    description:
        "Lactobacillus acidophilus 2585: что означает номер штамма, депозитные идентификаторы, евразийский патент EA 014227 B1 и документы Максилин.",

    alternates: {
        canonical: "/maxilin/science",
    },

    openGraph: {
        type: "article",
        locale: "ru_KG",
        siteName: seller.siteName,

        title:
            "Lactobacillus acidophilus 2585 — штамм Максилин",

        description:
            "Разбираем номер штамма 2585, депозитные идентификаторы, патент и значение документов.",

        url: "/maxilin/science",
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Штамм 2585 и документы Максилин",

        description:
            "Что означает Lactobacillus acidophilus 2585, патент и депозитные идентификаторы.",
    },
};

// ==========================================
// PAGE
// ==========================================

export default function MaxilinSciencePage() {
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
                                Наука
                            </span>
                        </div>

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                            <Microscope
                                className="h-4 w-4 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span className="text-xs font-black tracking-[0.2em] text-white/70 uppercase">
                                Штамм и технология
                            </span>
                        </div>

                        <h1 className="max-w-5xl text-4xl leading-[0.95] font-black tracking-tight uppercase italic md:text-6xl lg:text-7xl">
                            Lactobacillus
                            <br />
                            acidophilus
                            <span className="text-[#21AA57]">
                                {" "}
                                2585
                            </span>
                        </h1>

                        <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                            Что означает номер штамма,
                            зачем нужны депозитные
                            идентификаторы и как правильно
                            понимать патент и документы,
                            связанные с технологией
                            Максилина.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link
                                href="/docs"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                            >
                                Смотреть документы

                                <FileText
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>

                            <Link
                                href="/maxilin"
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white transition-colors hover:bg-white/10"
                            >
                                О Максилине

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
                SPECIES VS STRAIN
            ================================== */}

            <section className="relative z-10 -mt-6">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-xl shadow-black/5">
                        <div className="grid md:grid-cols-2">
                            <div className="p-7 md:p-10">
                                <p className="text-[10px] font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Вид бактерии
                                </p>

                                <h2 className="mt-3 text-2xl font-black text-[#29380E] md:text-3xl">
                                    {
                                        MAXILIN_STRAIN.species
                                    }
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-[#29380E]/60">
                                    Это название вида
                                    микроорганизма. У одного
                                    вида могут существовать
                                    разные штаммы, которые
                                    необходимо различать при
                                    работе с документацией и
                                    научными данными.
                                </p>
                            </div>

                            <div className="bg-[#21AA57] p-7 text-white md:p-10">
                                <p className="text-[10px] font-black tracking-[0.2em] text-white/60 uppercase">
                                    Конкретный штамм
                                </p>

                                <p className="mt-3 text-5xl font-black italic">
                                    {
                                        MAXILIN_STRAIN.strain
                                    }
                                </p>

                                <p className="mt-4 text-sm leading-7 text-white/75">
                                    Номер 2585
                                    идентифицирует конкретный
                                    штамм Lactobacillus
                                    acidophilus, используемый
                                    в представленной линейке
                                    Максилин.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                WHY STRAIN MATTERS
            ================================== */}

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div>
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Почему важен номер
                            </p>

                            <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Не просто
                                <span className="text-[#21AA57]">
                                    {" "}
                                    «лактобактерии»
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                При описании пробиотиков
                                желательно различать вид
                                бактерии и конкретный штамм.
                                Название вида само по себе не
                                означает, что все его штаммы
                                обладают одинаковыми
                                характеристиками.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <ScienceCard
                                icon={Microscope}
                                title="Вид"
                                text="Lactobacillus acidophilus — название вида бактерий."
                            />

                            <ScienceCard
                                icon={BadgeCheck}
                                title="Штамм"
                                text="2585 — идентификатор конкретного штамма внутри этого вида."
                            />

                            <ScienceCard
                                icon={Database}
                                title="Депозит"
                                text="Депозитный номер помогает идентифицировать культуру в соответствующей коллекции микроорганизмов."
                            />

                            <ScienceCard
                                icon={FileCheck2}
                                title="Документация"
                                text="Для конкретного товара важно сопоставлять данные штамма с маркировкой и документами именно этой упаковки."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                MILESTONES
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Идентификация и технология
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Ключевые
                            <span className="text-[#21AA57]">
                                {" "}
                                обозначения
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {scienceMilestones.map(
                            (item) => (
                                <article
                                    key={item.title}
                                    className="rounded-[2rem] border border-gray-100 bg-[#F4F7F5] p-6"
                                >
                                    <p className="text-2xl font-black text-[#21AA57]">
                                        {item.year}
                                    </p>

                                    <h3 className="mt-5 font-black text-[#29380E]">
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
                PATENT
            ================================== */}

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#29380E] text-white">
                        <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[0.75fr_1.25fr] lg:p-14">
                            <div>
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21AA57]">
                                    <FlaskConical
                                        className="h-7 w-7"
                                        aria-hidden="true"
                                    />
                                </div>

                                <p className="mt-8 text-3xl font-black text-[#21AA57] md:text-4xl">
                                    {
                                        maxilinScience.patent
                                            .code
                                    }
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                    Евразийский патент
                                </p>

                                <h2 className="mt-3 text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                                    {
                                        maxilinScience.patent
                                            .title
                                    }
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-white/65 md:text-base">
                                    {
                                        maxilinScience.patent
                                            .text
                                    }
                                </p>

                                <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <div className="flex items-start gap-3">
                                        <ShieldCheck
                                            className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#21AA57]"
                                            aria-hidden="true"
                                        />

                                        <p className="text-sm leading-7 text-white/65">
                                            Патент относится
                                            к технологии. Он
                                            не означает, что
                                            любой продукт с
                                            названием
                                            Максилин
                                            автоматически
                                            имеет одинаковый
                                            состав или
                                            одинаковые
                                            характеристики.
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href="/docs"
                                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#29380E]"
                                >
                                    Открыть документы

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
                DEPOSITS
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Депозитные номера
                            </p>

                            <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Идентификация
                                <span className="text-[#21AA57]">
                                    {" "}
                                    культуры
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                Депозитные обозначения
                                используются для
                                идентификации культуры в
                                соответствующих коллекциях и
                                документации.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {maxilinScience.deposits.map(
                                (deposit) => (
                                    <article
                                        key={deposit.code}
                                        className="rounded-[2rem] bg-[#F4F7F5] p-6 md:p-7"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#21AA57]/10">
                                                <Database
                                                    className="h-5 w-5 text-[#21AA57]"
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-black text-[#29380E]">
                                                    {
                                                        deposit.code
                                                    }
                                                </h3>

                                                <p className="mt-2 text-sm leading-7 text-[#29380E]/60">
                                                    {
                                                        deposit.text
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                WHAT DOCUMENTS PROVE
            ================================== */}

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Как читать документы
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Что документ
                            <span className="text-[#21AA57]">
                                {" "}
                                подтверждает
                            </span>
                        </h2>
                    </div>

                    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
                        {/* YES */}

                        <div className="rounded-[2.5rem] border border-[#21AA57]/15 bg-white p-7 md:p-9">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21AA57]/10">
                                <CheckCircle2
                                    className="h-6 w-6 text-[#21AA57]"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3 className="text-2xl font-black text-[#29380E]">
                                Можно проверить
                            </h3>

                            <ul className="mt-6 space-y-4">
                                <ListPoint>
                                    идентификатор
                                    штамма;
                                </ListPoint>

                                <ListPoint>
                                    сведения о
                                    технологии;
                                </ListPoint>

                                <ListPoint>
                                    депозитные
                                    обозначения;
                                </ListPoint>

                                <ListPoint>
                                    принадлежность
                                    документа к
                                    конкретной
                                    технологии или
                                    продукту;
                                </ListPoint>

                                <ListPoint>
                                    данные маркировки
                                    конкретной
                                    упаковки.
                                </ListPoint>
                            </ul>
                        </div>

                        {/* NO */}

                        <div className="rounded-[2.5rem] bg-[#29380E] p-7 text-white md:p-9">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                                <ShieldCheck
                                    className="h-6 w-6 text-[#21AA57]"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3 className="text-2xl font-black">
                                Нельзя автоматически
                                заключать
                            </h3>

                            <ul className="mt-6 space-y-4">
                                <DarkListPoint>
                                    что патент
                                    доказывает лечение
                                    заболевания;
                                </DarkListPoint>

                                <DarkListPoint>
                                    что все формы
                                    Максилина имеют
                                    одинаковую
                                    концентрацию;
                                </DarkListPoint>

                                <DarkListPoint>
                                    что все упаковки
                                    имеют одинаковую
                                    производственную
                                    среду;
                                </DarkListPoint>

                                <DarkListPoint>
                                    что свойства одной
                                    формы можно
                                    автоматически
                                    переносить на
                                    другую.
                                </DarkListPoint>
                            </ul>
                        </div>
                    </div>

                    <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-[#29380E]/45">
                        {maxilinScience.note}
                    </p>
                </div>
            </section>

            {/* ==================================
                THREE FORMS
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#F4F7F5] p-7 md:p-10">
                        <BookOpen
                            className="h-8 w-8 text-[#21AA57]"
                            aria-hidden="true"
                        />

                        <h2 className="mt-5 text-2xl font-black text-[#29380E] md:text-4xl">
                            Один штамм — три формы
                        </h2>

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#29380E]/60 md:text-base">
                            На probiotic.kg представлены
                            три формы Максилина:
                            жидкая кисломолочная,
                            сухая кисломолочная и
                            немолочный Максилин
                            Триллион. Их объединяет{" "}
                            <strong className="font-black text-[#29380E]">
                                {
                                    MAXILIN_STRAIN.fullName
                                }
                            </strong>
                            , но характеристики каждой
                            формы рассматриваются
                            отдельно.
                        </p>

                        <Link
                            href="/maxilin#forms"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#29380E] px-6 py-4 text-sm font-black text-white"
                        >
                            Сравнить три формы

                            <ArrowRight
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ==================================
                FINAL CTA
            ================================== */}

            <section className="pt-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-6xl rounded-[3rem] bg-[#21AA57] p-8 text-center text-white md:p-12">
                        <FileText
                            className="mx-auto mb-5 h-10 w-10"
                            aria-hidden="true"
                        />

                        <h2 className="text-3xl font-black tracking-tight uppercase italic md:text-5xl">
                            Документы отдельно,
                            <br />
                            характеристики товара отдельно
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
                            На странице документов
                            размещаем доступные материалы,
                            а в карточках товаров указываем
                            характеристики конкретной
                            упаковки.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Link
                                href="/docs"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#21AA57]"
                            >
                                Документы

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>

                            <Link
                                href="/maxilin/how-it-works"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-black text-white"
                            >
                                Как работает
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// ==========================================
// SCIENCE CARD
// ==========================================

function ScienceCard({
                         icon: Icon,
                         title,
                         text,
                     }: {
    icon: typeof Microscope;
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
// LIGHT LIST POINT
// ==========================================

function ListPoint({
                       children,
                   }: {
    children: React.ReactNode;
}) {
    return (
        <li className="flex items-start gap-3 text-sm leading-7 text-[#29380E]/65">
            <CheckCircle2
                className="mt-1 h-4 w-4 flex-shrink-0 text-[#21AA57]"
                aria-hidden="true"
            />

            <span>{children}</span>
        </li>
    );
}

// ==========================================
// DARK LIST POINT
// ==========================================

function DarkListPoint({
                           children,
                       }: {
    children: React.ReactNode;
}) {
    return (
        <li className="flex items-start gap-3 text-sm leading-7 text-white/65">
            <ShieldCheck
                className="mt-1 h-4 w-4 flex-shrink-0 text-[#21AA57]"
                aria-hidden="true"
            />

            <span>{children}</span>
        </li>
    );
}