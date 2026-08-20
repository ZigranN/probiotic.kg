"use client";

import Link from "next/link";
import {
    Activity,
    Apple,
    BookOpen,
    Droplets,
    FileText,
    HeartPulse,
    Moon,
    Play,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import { seller } from "@/config/seller";

// ==========================================
// VIDEO MATERIALS
// ==========================================
//
// Видео оставляем как дополнительные материалы.
//
// Названия формулируем нейтрально:
// без обещаний лечения, результата и диагнозов.
// ==========================================

const mainVideoId = "QTi6Z4V34V4";

const videos = [
    {
        id: "_129taDqh80",
        title: "О микрофлоре и ежедневном режиме",
    },
    {
        id: "g4K5FHhzO7g",
        title: "Как работают пробиотические продукты",
    },
    {
        id: "PNlvGSucfAY",
        title: "Материал о пробиотиках и исследованиях",
    },
] as const;

// ==========================================
// EDUCATION CARDS
// ==========================================

const microbiomeTopics = [
    {
        id: "microbiome",
        title: "Микробиота кишечника",
        icon: HeartPulse,
        text:
            "Кишечник содержит сложное сообщество микроорганизмов. Его состояние зависит от множества факторов: питания, образа жизни, лекарств, возраста и индивидуальных особенностей.",
    },

    {
        id: "nutrition",
        title: "Питание и клетчатка",
        icon: Apple,
        text:
            "Разнообразный рацион с овощами, фруктами, бобовыми, цельными злаками и другими источниками пищевых волокон помогает поддерживать нормальную работу кишечника.",
    },

    {
        id: "water",
        title: "Водный баланс",
        icon: Droplets,
        text:
            "Достаточное употребление жидкости является частью ежедневного режима и особенно важно при увеличении количества клетчатки в рационе.",
    },

    {
        id: "lifestyle",
        title: "Сон и движение",
        icon: Moon,
        text:
            "Регулярная физическая активность, полноценный сон и управление стрессом относятся к базовым привычкам, связанным с общим самочувствием и пищеварительным комфортом.",
    },
] as const;

// ==========================================
// PRINCIPLES
// ==========================================

const principles = [
    {
        title: "Не заменяет питание",
        text:
            "Пробиотический продукт не заменяет разнообразный рацион, воду, движение и другие основы здорового образа жизни.",
        icon: Apple,
    },

    {
        title: "Учитываем форму продукта",
        text:
            "Жидкий Максилин, сухие формы и другие продукты могут отличаться составом, производством и способом применения.",
        icon: ShieldCheck,
    },

    {
        title: "Проверяем документы",
        text:
            "Состав, маркировку, производителя, срок годности и документы необходимо сопоставлять с конкретным товаром и конкретной формой выпуска.",
        icon: FileText,
    },

    {
        title: "Без обещаний лечения",
        text:
            "Информация о пробиотиках не должна использоваться для самостоятельной диагностики, лечения или отмены назначенной терапии.",
        icon: Activity,
    },
] as const;

// ==========================================
// PAGE
// ==========================================

export default function InfoPage() {
    return (
        <main className="min-h-screen bg-[#F4F7F5] pb-24">
            {/* ==================================
                HERO
            ================================== */}

            <section className="relative overflow-hidden bg-[#29380E] pb-24 pt-16 text-white">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-10"
                >
                    <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#21AA57] blur-3xl" />

                    <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white blur-3xl" />
                </div>

                <div className="container relative z-10 mx-auto px-6 text-center">
                    <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                        <BookOpen
                            className="h-4 w-4 text-[#21AA57]"
                            aria-hidden="true"
                        />

                        <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                            База знаний
                        </span>
                    </div>

                    <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-black tracking-tighter uppercase italic md:text-6xl lg:text-7xl">
                        Микробиота, питание
                        <br />

                        <span className="text-[#21AA57]">
                            и пробиотики
                        </span>
                    </h1>

                    <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
                        Понятная информация о микрофлоре
                        кишечника, ежедневных привычках и
                        продуктах EnergyMax без обещаний
                        лечения и универсальных результатов.
                    </p>
                </div>
            </section>

            {/* ==================================
                MAIN VIDEO
            ================================== */}

            <section className="relative z-20 -mt-12 px-4">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border-8 border-white bg-black shadow-2xl md:rounded-[3rem]">
                        <div className="aspect-video">
                            <iframe
                                className="h-full w-full"
                                src={`https://www.youtube.com/embed/${mainVideoId}`}
                                title="Материал о микрофлоре кишечника"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                MICROBIOME BASICS
            ================================== */}

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <span className="mb-3 block text-xs font-black tracking-[0.22em] text-[#21AA57] uppercase">
                            Основа
                        </span>

                        <h2 className="mb-5 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Что важно для
                            <span className="text-[#21AA57]">
                                {" "}
                                кишечника
                            </span>
                        </h2>

                        <p className="text-base leading-relaxed text-[#29380E]/60">
                            Нет одного продукта или одной
                            привычки, которая решает все
                            вопросы пищеварения. Важен общий
                            ежедневный режим.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {microbiomeTopics.map(
                            (topic, index) => {
                                const Icon = topic.icon;

                                return (
                                    <motion.article
                                        key={topic.id}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            delay:
                                                index * 0.05,
                                        }}
                                        className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm"
                                    >
                                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21AA57]/10">
                                            <Icon
                                                className="h-6 w-6 text-[#21AA57]"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <h3 className="mb-3 text-lg font-black tracking-tight text-[#29380E] uppercase">
                                            {topic.title}
                                        </h3>

                                        <p className="text-sm leading-7 text-[#29380E]/60">
                                            {topic.text}
                                        </p>
                                    </motion.article>
                                );
                            },
                        )}
                    </div>
                </div>
            </section>

            {/* ==================================
                PROBIOTICS EXPLANATION
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        <div>
                            <span className="mb-3 block text-xs font-black tracking-[0.22em] text-[#21AA57] uppercase">
                                Пробиотики
                            </span>

                            <h2 className="mb-6 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                                Часть режима,
                                <br />

                                <span className="text-[#21AA57]">
                                    а не замена ему
                                </span>
                            </h2>

                            <div className="space-y-5 text-base leading-8 text-[#29380E]/65">
                                <p>
                                    Пробиотики содержат живые
                                    микроорганизмы. Их свойства
                                    зависят от конкретного
                                    штамма, количества
                                    микроорганизмов, формы
                                    продукта и условий хранения.
                                </p>

                                <p>
                                    Поэтому информацию об одном
                                    продукте нельзя автоматически
                                    переносить на другой —
                                    даже если они продаются под
                                    одним брендом.
                                </p>

                                <p>
                                    Для Максилина особенно важно
                                    различать жидкую форму,
                                    сухие формы и продукты,
                                    произведённые по разным
                                    технологиям.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/#catalog"
                                    className="inline-flex items-center justify-center rounded-2xl bg-[#21AA57] px-6 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                                >
                                    Перейти в каталог
                                </Link>

                                <Link
                                    href="/docs"
                                    className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-[#29380E] transition-colors hover:border-[#21AA57]"
                                >
                                    Посмотреть документы
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {principles.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.title}
                                        className="rounded-[2rem] bg-[#F4F7F5] p-6"
                                    >
                                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                                            <Icon
                                                className="h-5 w-5 text-[#21AA57]"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <h3 className="mb-2 text-sm font-black tracking-wide text-[#29380E] uppercase">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm leading-6 text-[#29380E]/60">
                                            {item.text}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                SCIENCE / DOCUMENTS
            ================================== */}

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#29380E] p-8 text-white md:p-12">
                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21AA57]">
                                    <FileText
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h2 className="mb-4 text-3xl font-black tracking-tight uppercase italic">
                                    Документы и
                                    <span className="text-[#21AA57]">
                                        {" "}
                                        научная история
                                    </span>
                                </h2>

                                <p className="max-w-3xl leading-7 text-white/65">
                                    В материалах о Максилине
                                    встречаются патенты,
                                    регистрационные документы,
                                    сведения о штаммах и
                                    исследованиях. Их необходимо
                                    рассматривать в контексте
                                    конкретной технологии,
                                    производителя и формы
                                    продукта.
                                </p>

                                <p className="mt-4 max-w-3xl text-sm leading-6 text-white/45">
                                    Наличие документа по
                                    технологии или штамму само по
                                    себе не означает, что он
                                    подтверждает состав,
                                    эффективность или свойства
                                    каждого товара в каталоге.
                                </p>
                            </div>

                            <Link
                                href="/docs"
                                className="inline-flex min-w-48 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#29380E] transition-transform hover:scale-[1.02]"
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

            {/* ==================================
                VIDEOS
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <span className="mb-3 block text-xs font-black tracking-[0.22em] text-[#21AA57] uppercase">
                            Видео
                        </span>

                        <h2 className="mb-4 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Дополнительные
                            <span className="text-[#21AA57]">
                                {" "}
                                материалы
                            </span>
                        </h2>

                        <p className="text-sm leading-7 text-[#29380E]/55">
                            Видео размещены как
                            информационные материалы.
                            Упоминание индивидуального опыта
                            или результата не является
                            гарантией аналогичного результата
                            у другого человека.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {videos.map((video) => (
                            <article
                                key={video.id}
                                className="overflow-hidden rounded-[2rem] border border-gray-100 bg-[#F4F7F5]"
                            >
                                <div className="aspect-video bg-black">
                                    <iframe
                                        className="h-full w-full"
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>

                                <div className="flex items-center gap-3 p-5">
                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#21AA57] text-white">
                                        <Play
                                            className="h-3.5 w-3.5 fill-current"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <h3 className="text-sm font-bold leading-5 text-[#29380E]">
                                        {video.title}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================================
                DISCLAIMER + CONTACT
            ================================== */}

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <ShieldCheck
                            className="mx-auto mb-5 h-10 w-10 text-[#21AA57]"
                            aria-hidden="true"
                        />

                        <h2 className="mb-4 text-2xl font-black tracking-tight text-[#29380E] uppercase">
                            Важно
                        </h2>

                        <p className="mx-auto mb-8 max-w-3xl text-sm leading-7 text-[#29380E]/55">
                            Материалы раздела носят
                            информационный характер и не
                            предназначены для постановки
                            диагноза или назначения лечения.
                            При заболеваниях, беременности,
                            грудном вскармливании, приёме
                            лекарств или выборе продукта для
                            ребёнка следует обратиться к
                            квалифицированному специалисту и
                            учитывать маркировку конкретного
                            товара.
                        </p>

                        <a
                            href={`https://wa.me/${seller.whatsappPhone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-2xl bg-[#21AA57] px-7 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                        >
                            Уточнить наличие в WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}