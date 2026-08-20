import type { Metadata } from "next";

import Link from "next/link";

import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    ExternalLink,
    FileText,
    Globe2,
    MessageCircle,
    PackageCheck,
    ShieldCheck,
    ShoppingBag,
    UserPlus,
    Users,
} from "lucide-react";

import { seller } from "@/config/seller";

// ==========================================
// EXTERNAL ENERGYMAX LINKS
// ==========================================

const KYRGYZSTAN_REGISTRATION_URL =
    "https://energymaxgroup.kg/cabinet/registration?invite=8e1245214efcc80803f6e0215e999eae";

const RUSSIA_SHOP_URL =
    "https://nrg-max.ru/cabinet/referral-shop/7fb8399cfd0b74f7ae6d88188e78e439";

// ==========================================
// SEO
// ==========================================

export const metadata: Metadata = {
    title: "Партнёрство EnergyMax в Кыргызстане",

    description:
        "Регистрация партнёра EnergyMax в Кыргызстане, стартовые пакеты Medium, Big и VIP, а также реферальная ссылка для покупки продукции в России.",

    alternates: {
        canonical: "/business",
    },

    /*
     * Пока маркетинг-план не привязан
     * к отдельному официальному документу
     * с датой редакции, страницу оставляем noindex.
     *
     * Пользователи сайта страницу видеть могут.
     */
    robots: {
        index: false,
        follow: true,
    },
};

// ==========================================
// MARKETING PLAN
// ==========================================
//
// Текущие условия, предоставленные для сайта.
//
// ВАЖНО:
// условия маркетинг-плана могут изменяться.
// Перед активацией пользователь должен
// проверить актуальные значения в кабинете.
// ==========================================

const activationPackages = [
    {
        id: "medium",

        name: "Medium",

        price: "$125",

        pv: "100 PV",

        rank: "Партнёр",

        binary: "10%",

        description:
            "Стартовый пакет для знакомства с партнёрской системой EnergyMax.",

        benefits: [
            "Активация на 100 PV",
            "Стартовый ранг «Партнёр»",
            "Бинарный бонус — 10%",
        ],

        recommended: false,
    },

    {
        id: "big",

        name: "Big",

        price: "$380",

        pv: "250 PV",

        rank: "Менеджер",

        binary: "12%",

        description:
            "Расширенный стартовый пакет для тех, кто планирует активнее развивать партнёрское направление.",

        benefits: [
            "Активация на 250 PV",
            "Стартовый ранг «Менеджер»",
            "Бинарный бонус — 12%",
            "$150 на cashback-счёт для покупок",
        ],

        recommended: true,
    },

    {
        id: "vip",

        name: "VIP",

        price: "$1000",

        pv: "650 PV",

        rank: "Бронзовый директор",

        binary: "14%",

        description:
            "Максимальный из представленных стартовых пакетов с более высоким стартовым рангом.",

        benefits: [
            "Активация на 650 PV",
            "Стартовый ранг «Бронзовый директор»",
            "Бинарный бонус — 14%",
            "$250 на cashback-счёт",
        ],

        recommended: false,
    },
] as const;

// ==========================================
// PRINCIPLES
// ==========================================

const importantPoints = [
    {
        icon: UserPlus,

        title: "Самостоятельная регистрация",

        text:
            "Для Кыргызстана можно самостоятельно открыть форму регистрации EnergyMax по партнёрской ссылке и создать аккаунт.",
    },

    {
        icon: PackageCheck,

        title: "Выбор пакета",

        text:
            "После регистрации можно ознакомиться с доступными вариантами активации и выбрать подходящий пакет.",
    },

    {
        icon: ShieldCheck,

        title: "Проверка условий",

        text:
            "Стоимость, PV, бонусы, cashback, ранги и другие условия необходимо повторно проверить в личном кабинете непосредственно перед активацией.",
    },

    {
        icon: Users,

        title: "Без гарантии дохода",

        text:
            "Участие в маркетинг-плане не означает гарантированный заработок. Вознаграждение зависит от фактического товарооборота, структуры и выполнения условий программы.",
    },
] as const;

// ==========================================
// PAGE
// ==========================================

export default function BusinessPage() {
    const consultationText = encodeURIComponent(
        `Здравствуйте! Меня интересует партнёрство EnergyMax в Кыргызстане. Я перешёл(а) со страницы ${seller.siteName}/business.`,
    );

    const consultationUrl =
        `https://wa.me/${seller.whatsappPhone}?text=${consultationText}`;

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
                    <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#21AA57]/20 blur-3xl" />

                    <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
                    <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                        <Users
                            className="h-4 w-4 text-[#21AA57]"
                            aria-hidden="true"
                        />

                        <span className="text-xs font-black tracking-[0.2em] text-white/75 uppercase">
                            Партнёрство EnergyMax
                        </span>
                    </div>

                    <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-black leading-none tracking-tight uppercase italic md:text-6xl lg:text-7xl">
                        Начать сотрудничество
                        <br />

                        <span className="text-[#21AA57]">
                            можно самостоятельно
                        </span>
                    </h1>

                    <p className="mx-auto max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                        Регистрация EnergyMax для Кыргызстана,
                        стартовые пакеты Medium, Big и VIP,
                        а также отдельная реферальная ссылка
                        для покупки продукции в России.
                    </p>

                    {/* HERO CTA */}

                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        <a
                            href={KYRGYZSTAN_REGISTRATION_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl bg-[#21AA57] px-7 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                        >
                            <UserPlus
                                className="h-5 w-5"
                                aria-hidden="true"
                            />

                            Регистрация в Кыргызстане

                            <ExternalLink
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        </a>

                        <a
                            href={RUSSIA_SHOP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                        >
                            <ShoppingBag
                                className="h-5 w-5"
                                aria-hidden="true"
                            />

                            Купить в России

                            <ExternalLink
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </div>
            </section>

            {/* ==================================
                COUNTRY LINKS
            ================================== */}

            <section className="relative z-10 -mt-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
                        {/* KYRGYZSTAN */}

                        <article className="rounded-[2.5rem] border border-gray-100 bg-white p-7 shadow-xl md:p-9">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21AA57]/10">
                                <UserPlus
                                    className="h-7 w-7 text-[#21AA57]"
                                    aria-hidden="true"
                                />
                            </div>

                            <p className="mb-2 text-xs font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                Кыргызстан
                            </p>

                            <h2 className="mb-4 text-2xl font-black tracking-tight text-[#29380E]">
                                Партнёрская регистрация
                            </h2>

                            <p className="mb-6 text-sm leading-7 text-[#29380E]/60">
                                Перейдите на страницу EnergyMax,
                                заполните регистрационную форму
                                и создайте личный кабинет
                                самостоятельно.
                            </p>

                            <a
                                href={KYRGYZSTAN_REGISTRATION_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#21AA57] px-5 py-3 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                            >
                                Зарегистрироваться

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </a>
                        </article>

                        {/* RUSSIA */}

                        <article className="rounded-[2.5rem] border border-gray-100 bg-white p-7 shadow-xl md:p-9">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#29380E]/5">
                                <ShoppingBag
                                    className="h-7 w-7 text-[#29380E]"
                                    aria-hidden="true"
                                />
                            </div>

                            <p className="mb-2 text-xs font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                Россия
                            </p>

                            <h2 className="mb-4 text-2xl font-black tracking-tight text-[#29380E]">
                                Купить продукцию
                            </h2>

                            <p className="mb-6 text-sm leading-7 text-[#29380E]/60">
                                Для покупателей в России
                                доступен отдельный реферальный
                                интернет-магазин Energy Max
                                Group.
                            </p>

                            <a
                                href={RUSSIA_SHOP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#29380E] px-5 py-3 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                            >
                                Открыть магазин России

                                <ExternalLink
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </a>
                        </article>
                    </div>
                </div>
            </section>

            {/* ==================================
                MARKETING PLAN INTRO
            ================================== */}

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Маркетинг-план
                        </p>

                        <h2 className="mb-5 text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Пакеты
                            <span className="text-[#21AA57]">
                                {" "}
                                активации
                            </span>
                        </h2>

                        <p className="mx-auto max-w-3xl text-sm leading-7 text-[#29380E]/60 md:text-base">
                            Выберите стартовый масштаб участия.
                            Расчётный курс, используемый
                            в маркетинг-плане:
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 shadow-sm">
                            <BadgeCheck
                                className="h-5 w-5 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span className="text-lg font-black text-[#29380E]">
                                1 PV = $0,68
                            </span>
                        </div>
                    </div>

                    {/* PACKAGES */}

                    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
                        {activationPackages.map(
                            (pkg) => (
                                <article
                                    key={pkg.id}
                                    className={`relative flex flex-col overflow-hidden rounded-[2.25rem] border bg-white p-7 shadow-sm ${
                                        pkg.recommended
                                            ? "border-[#21AA57] ring-2 ring-[#21AA57]/10"
                                            : "border-gray-100"
                                    }`}
                                >
                                    {pkg.recommended && (
                                        <div className="absolute right-5 top-5 rounded-full bg-[#21AA57] px-3 py-1.5 text-[10px] font-black tracking-wider text-white uppercase">
                                            Оптимальный старт
                                        </div>
                                    )}

                                    <p className="mb-2 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                        {pkg.name}
                                    </p>

                                    <div className="mb-2 flex items-end gap-2">
                                        <span className="text-4xl font-black tracking-tight text-[#29380E]">
                                            {pkg.price}
                                        </span>
                                    </div>

                                    <p className="mb-6 text-lg font-black text-[#29380E]/45">
                                        {pkg.pv}
                                    </p>

                                    <div className="mb-6 grid grid-cols-2 gap-3">
                                        <div className="rounded-2xl bg-[#F4F7F5] p-4">
                                            <p className="mb-1 text-[10px] font-black tracking-wider text-[#29380E]/40 uppercase">
                                                Ранг
                                            </p>

                                            <p className="text-sm font-black text-[#29380E]">
                                                {pkg.rank}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-[#F4F7F5] p-4">
                                            <p className="mb-1 text-[10px] font-black tracking-wider text-[#29380E]/40 uppercase">
                                                Бинар
                                            </p>

                                            <p className="text-sm font-black text-[#21AA57]">
                                                {pkg.binary}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mb-6 text-sm leading-7 text-[#29380E]/55">
                                        {pkg.description}
                                    </p>

                                    <div className="mb-8 flex-1 space-y-3">
                                        {pkg.benefits.map(
                                            (benefit) => (
                                                <div
                                                    key={
                                                        benefit
                                                    }
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle2
                                                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#21AA57]"
                                                        aria-hidden="true"
                                                    />

                                                    <span className="text-sm leading-6 text-[#29380E]/70">
                                                        {
                                                            benefit
                                                        }
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>

                                    <a
                                        href={
                                            KYRGYZSTAN_REGISTRATION_URL
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-black transition-transform hover:scale-[1.02] ${
                                            pkg.recommended
                                                ? "bg-[#21AA57] text-white"
                                                : "bg-[#29380E] text-white"
                                        }`}
                                    >
                                        Начать регистрацию

                                        <ArrowRight
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </article>
                            ),
                        )}
                    </div>

                    {/* MARKETING DISCLAIMER */}

                    <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
                        <p className="text-sm leading-7 text-amber-900/75">
                            <strong>
                                Важно:
                            </strong>{" "}
                            маркетинг-план, стоимость
                            активации, PV, cashback, ранги,
                            бонусы и правила начислений могут
                            обновляться. Перед оплатой и
                            активацией обязательно проверьте
                            актуальные условия непосредственно
                            в личном кабинете EnergyMax.
                        </p>
                    </div>
                </div>
            </section>

            {/* ==================================
                HOW TO START
            ================================== */}

            <section className="border-y border-gray-100 bg-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Как начать
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Регистрация
                            <span className="text-[#21AA57]">
                                {" "}
                                по шагам
                            </span>
                        </h2>
                    </div>

                    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {importantPoints.map(
                            (item, index) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.title}
                                        className="rounded-[2rem] bg-[#F4F7F5] p-6"
                                    >
                                        <div className="mb-5 flex items-center justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                                                <Icon
                                                    className="h-5 w-5 text-[#21AA57]"
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <span className="text-3xl font-black text-[#29380E]/10">
                                                {String(
                                                    index + 1,
                                                ).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>
                                        </div>

                                        <h3 className="mb-3 text-base font-black text-[#29380E]">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm leading-7 text-[#29380E]/55">
                                            {item.text}
                                        </p>
                                    </article>
                                );
                            },
                        )}
                    </div>
                </div>
            </section>

            {/* ==================================
                INCOME DISCLAIMER
            ================================== */}

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#29380E] p-8 text-white md:p-12">
                        <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21AA57]">
                                <ShieldCheck
                                    className="h-7 w-7"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-black uppercase italic md:text-3xl">
                                    Доход не гарантируется
                                </h2>

                                <div className="space-y-3 text-sm leading-7 text-white/65">
                                    <p>
                                        Бинарные проценты
                                        являются элементами
                                        маркетинг-плана и не
                                        означают гарантированную
                                        выплату от стоимости
                                        пакета.
                                    </p>

                                    <p>
                                        Фактические начисления
                                        зависят от товарооборота,
                                        структуры, квалификации,
                                        активности и выполнения
                                        действующих условий
                                        программы.
                                    </p>

                                    <p>
                                        Перед регистрацией
                                        рекомендуем самостоятельно
                                        ознакомиться с актуальными
                                        правилами EnergyMax.
                                    </p>
                                </div>
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
                    <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-sm md:p-12">
                        <div className="grid gap-10 lg:grid-cols-2">
                            {/* REGISTER */}

                            <div>
                                <Globe2
                                    className="mb-5 h-9 w-9 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <h2 className="mb-4 text-2xl font-black tracking-tight text-[#29380E] uppercase">
                                    Готовы зарегистрироваться?
                                </h2>

                                <p className="mb-6 text-sm leading-7 text-[#29380E]/60">
                                    Перейдите в официальный
                                    кабинет регистрации EnergyMax
                                    по партнёрской ссылке.
                                </p>

                                <a
                                    href={
                                        KYRGYZSTAN_REGISTRATION_URL
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                                >
                                    Регистрация Кыргызстан

                                    <ExternalLink
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>

                            {/* QUESTIONS */}

                            <div>
                                <MessageCircle
                                    className="mb-5 h-9 w-9 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <h2 className="mb-4 text-2xl font-black tracking-tight text-[#29380E] uppercase">
                                    Остались вопросы?
                                </h2>

                                <p className="mb-6 text-sm leading-7 text-[#29380E]/60">
                                    Можно написать в WhatsApp
                                    перед регистрацией и уточнить
                                    организационные вопросы.
                                </p>

                                <a
                                    href={consultationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#29380E] px-6 py-4 text-sm font-black text-white transition-transform hover:scale-[1.02]"
                                >
                                    Написать в WhatsApp

                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
                DOCUMENTS / LEGAL
            ================================== */}

            <section className="mt-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-7">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div>
                                <div className="mb-3 flex items-center gap-2">
                                    <FileText
                                        className="h-5 w-5 text-[#21AA57]"
                                        aria-hidden="true"
                                    />

                                    <h2 className="font-black text-[#29380E]">
                                        Информация продавца
                                    </h2>
                                </div>

                                <p className="text-sm leading-6 text-[#29380E]/55">
                                    {seller.legalName}
                                    <br />
                                    {seller.sellerDescription}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm">
                                <Link
                                    href="/docs"
                                    className="font-semibold text-[#21AA57] hover:underline"
                                >
                                    Документы
                                </Link>

                                <Link
                                    href="/offer"
                                    className="font-semibold text-[#21AA57] hover:underline"
                                >
                                    Публичная оферта
                                </Link>

                                <Link
                                    href="/policy"
                                    className="font-semibold text-[#21AA57] hover:underline"
                                >
                                    Конфиденциальность
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}