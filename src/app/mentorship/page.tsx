import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
    ArrowRight,
    BrainCircuit,
    CheckCircle2,
    Cpu,
    ExternalLink,
    Instagram,
    MessageCircle,
    Rocket,
    ShieldCheck,
    Sparkles,
    UserPlus,
} from "lucide-react";

import { seller } from "@/config/seller";

// ==========================================
// ENERGYMAX
// ==========================================

const KYRGYZSTAN_REGISTRATION_URL =
    "https://energymaxgroup.kg/cabinet/registration?invite=8e1245214efcc80803f6e0215e999eae";

// ==========================================
// SEO
// ==========================================

export const metadata: Metadata = {
    title: "Поддержка партнёров EnergyMax в Кыргызстане",

    description:
        "Информация о digital-инструментах, работе с контентом, Instagram, AI и поддержке партнёров EnergyMax в Кыргызстане.",

    alternates: {
        canonical: "/mentorship",
    },

    /*
     * Пока страницу не используем как
     * отдельную SEO-посадочную.
     *
     * Сначала завершим аудит партнёрского
     * раздела и маркетинг-плана.
     */
    robots: {
        index: false,
        follow: true,
    },
};

// ==========================================
// CONTENT
// ==========================================

const directions = [
    {
        title: "AI для контента",

        description:
            "Использование ChatGPT и других AI-инструментов для идей, структуры публикаций, сценариев Reels и подготовки рабочих материалов.",

        icon: BrainCircuit,
    },

    {
        title: "Instagram",

        description:
            "Оформление профиля, контент-план, Reels, Stories и системная работа с контентом без обещаний гарантированного охвата.",

        icon: Instagram,
    },

    {
        title: "Автоматизация",

        description:
            "Использование современных инструментов для обработки типовых запросов, организации информации и упрощения повторяющихся задач.",

        icon: Cpu,
    },

    {
        title: "Digital-подход",

        description:
            "Работа с партнёрским направлением через контент, онлайн-коммуникацию и цифровые инструменты вместо давления на знакомых.",

        icon: Rocket,
    },
] as const;

const supportTopics = [
    "Как использовать AI для идей и подготовки контента.",
    "Как структурировать Instagram-профиль и контент.",
    "Как готовить сценарии Reels и Stories.",
    "Как организовать ответы на типовые вопросы клиентов.",
    "Как вести каталог, ссылки и материалы в одном понятном формате.",
    "Как использовать онлайн-инструменты для коммуникации с партнёрами.",
] as const;

// ==========================================
// PAGE
// ==========================================

export default function MentorshipPage() {
    const whatsappText = encodeURIComponent(
        "Здравствуйте! Меня интересует партнёрство EnergyMax и поддержка по digital-инструментам.",
    );

    const whatsappUrl =
        `https://wa.me/${seller.whatsappPhone}?text=${whatsappText}`;

    return (
        <main className="min-h-screen bg-[#F4F7F5] pb-24">
            {/* ==================================
                HERO
            ================================== */}

            <section className="relative overflow-hidden bg-gradient-to-br from-[#29380E] to-[#1a2408] py-20 text-white md:py-24">
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                >
                    <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#21AA57]/20 blur-3xl" />

                    <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="container relative z-10 mx-auto px-6">
                    <div className="flex flex-col items-center gap-12 lg:flex-row">
                        {/* TEXT */}

                        <div className="w-full text-center lg:w-3/5 lg:text-left">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#21AA57]/20 bg-[#21AA57]/10 px-4 py-2">
                                <Sparkles
                                    className="h-4 w-4 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <span className="text-xs font-bold tracking-widest text-[#21AA57] uppercase">
                                    Digital-поддержка
                                </span>
                            </div>

                            <h1 className="mb-6 text-4xl leading-none font-black tracking-tight uppercase italic md:text-6xl lg:text-7xl">
                                Современные
                                <br />

                                <span className="text-[#21AA57]">
                                    инструменты
                                </span>{" "}

                                для работы онлайн
                            </h1>

                            <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-white/65 md:text-lg lg:mx-0">
                                Поддержка партнёров EnergyMax
                                в работе с контентом,
                                Instagram, AI-инструментами
                                и организацией онлайн-коммуникации.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                                <a
                                    href={KYRGYZSTAN_REGISTRATION_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                                >
                                    <UserPlus
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />

                                    Регистрация EnergyMax

                                    <ExternalLink
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </a>

                                <Link
                                    href="/business"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                                >
                                    Условия партнёрства

                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* IMAGE */}

                        <div className="flex w-full justify-center lg:w-2/5">
                            <div className="relative h-[340px] w-[300px] md:h-[420px] md:w-[370px]">
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-[3rem] bg-[#21AA57]/20 blur-[70px]"
                                />

                                <div className="relative h-full w-full rotate-2 overflow-hidden rounded-[3rem] border-4 border-white/10 shadow-2xl">
                                    <Image
                                        src="/images/nargiz.JPG"
                                        alt="Наргиз Мамытова — поддержка партнёров EnergyMax"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 300px, 370px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                DIRECTIONS
            ================================== */}

            <section className="relative z-10 -mt-8">
                <div className="container mx-auto px-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {directions.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-lg"
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F7F5]">
                                        <Icon
                                            className="h-7 w-7 text-[#21AA57]"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <h2 className="mb-3 text-lg font-black tracking-tight text-[#29380E] uppercase italic">
                                        {item.title}
                                    </h2>

                                    <p className="text-sm leading-7 text-[#29380E]/55">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ==================================
                SUPPORT
            ================================== */}

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                Практическая поддержка
                            </p>

                            <h2 className="mb-8 text-3xl leading-none font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                С чем помогаю
                                <span className="text-[#21AA57]">
                                    {" "}
                                    партнёрам
                                </span>
                            </h2>

                            <ul className="space-y-5">
                                {supportTopics.map(
                                    (text) => (
                                        <li
                                            key={text}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#21AA57]">
                                                <CheckCircle2
                                                    className="h-4 w-4 text-white"
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <span className="text-base leading-7 text-[#29380E]/70">
                                                {text}
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>

                        {/* CARD */}

                        <div className="relative overflow-hidden rounded-[3rem] bg-[#29380E] p-8 text-white shadow-2xl md:p-12">
                            <div
                                aria-hidden="true"
                                className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#21AA57]/10 blur-[90px]"
                            />

                            <BrainCircuit
                                className="relative mb-6 h-12 w-12 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <h2 className="relative mb-5 text-3xl font-black uppercase italic">
                                Инструменты вместо обещаний
                            </h2>

                            <div className="relative space-y-4 text-sm leading-7 text-white/60 md:text-base">
                                <p>
                                    AI и социальные сети могут
                                    помогать экономить время,
                                    структурировать работу и
                                    создавать контент.
                                </p>

                                <p>
                                    Но ни один инструмент не
                                    гарантирует количество
                                    просмотров, заявок, продаж
                                    или размер дохода.
                                </p>

                                <p>
                                    Результат зависит от
                                    содержания, регулярности,
                                    аудитории, продукта,
                                    навыков и других факторов.
                                </p>
                            </div>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.01]"
                            >
                                <MessageCircle
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />

                                Задать вопрос в WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                HOW IT CONNECTS TO BUSINESS
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl">
                        <div className="mb-12 text-center">
                            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                EnergyMax
                            </p>

                            <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Сначала регистрация,
                                <span className="text-[#21AA57]">
                                    {" "}
                                    затем работа
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <article className="rounded-[2rem] bg-[#F4F7F5] p-7">
                                <span className="mb-5 block text-4xl font-black text-[#21AA57]/20">
                                    01
                                </span>

                                <h3 className="mb-3 font-black text-[#29380E]">
                                    Ознакомиться с условиями
                                </h3>

                                <p className="text-sm leading-7 text-[#29380E]/55">
                                    Посмотрите актуальные
                                    пакеты, PV, ранги и условия
                                    маркетинг-плана.
                                </p>
                            </article>

                            <article className="rounded-[2rem] bg-[#F4F7F5] p-7">
                                <span className="mb-5 block text-4xl font-black text-[#21AA57]/20">
                                    02
                                </span>

                                <h3 className="mb-3 font-black text-[#29380E]">
                                    Зарегистрироваться
                                </h3>

                                <p className="text-sm leading-7 text-[#29380E]/55">
                                    Регистрацию в Кыргызстане
                                    можно пройти самостоятельно
                                    через кабинет EnergyMax.
                                </p>
                            </article>

                            <article className="rounded-[2rem] bg-[#F4F7F5] p-7">
                                <span className="mb-5 block text-4xl font-black text-[#21AA57]/20">
                                    03
                                </span>

                                <h3 className="mb-3 font-black text-[#29380E]">
                                    Освоить инструменты
                                </h3>

                                <p className="text-sm leading-7 text-[#29380E]/55">
                                    После регистрации можно
                                    выстроить собственный
                                    рабочий процесс с контентом
                                    и digital-инструментами.
                                </p>
                            </article>
                        </div>

                        <div className="mt-9 flex flex-wrap justify-center gap-3">
                            <Link
                                href="/business"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#29380E] px-6 py-4 text-sm font-black text-white"
                            >
                                Посмотреть маркетинг-план

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>

                            <a
                                href={KYRGYZSTAN_REGISTRATION_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white"
                            >
                                Зарегистрироваться

                                <ExternalLink
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                DISCLAIMER
            ================================== */}

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl rounded-[2rem] border border-gray-100 bg-white p-7">
                        <div className="flex items-start gap-4">
                            <ShieldCheck
                                className="mt-1 h-6 w-6 flex-shrink-0 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <div>
                                <h2 className="mb-2 font-black text-[#29380E]">
                                    Важно
                                </h2>

                                <p className="text-sm leading-7 text-[#29380E]/55">
                                    Эта страница описывает
                                    организационную и digital-
                                    поддержку партнёров. Она не
                                    является обещанием дохода,
                                    гарантией продаж или
                                    гарантией достижения
                                    определённого ранга в
                                    маркетинг-плане.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}