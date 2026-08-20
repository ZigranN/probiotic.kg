import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2,
    FileText,
    MapPin,
    MessageCircle,
    PackageCheck,
    Phone,
    ShieldCheck,
} from "lucide-react";

import { seller } from "@/config/seller";

export const metadata: Metadata = {
    title: "О магазине | probiotic.kg",
    description:
        "Информация об интернет-магазине probiotic.kg, продавце, оформлении заказов и документах на продукцию.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F4F7F5]">
            {/* Главный экран */}
            <section className="relative overflow-hidden bg-[#29380E] py-16 text-white md:py-24">
                <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#21AA57]/10 blur-[120px]" />

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-4 text-sm font-bold tracking-widest text-[#21AA57] uppercase">
                            Интернет-магазин в Кыргызстане
                        </p>

                        <h1 className="mb-6 text-4xl font-black tracking-tight uppercase italic md:text-6xl">
                            О магазине{" "}
                            <span className="text-[#21AA57]">
                                {seller.siteName}
                            </span>
                        </h1>

                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
                            {seller.sellerDescription}. На сайте можно
                            ознакомиться с ассортиментом, оформить заказ и
                            получить информацию о наличии, доставке и документах
                            на выбранный товар.
                        </p>
                    </div>
                </div>
            </section>

            {/* Продавец */}
            <section className="py-14 md:py-20">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[3rem] bg-white shadow-xl">
                            <Image
                                src="/images/nargiz.JPG"
                                alt="Наргиз Мамытова — представитель интернет-магазина probiotic.kg"
                                fill
                                sizes="(max-width: 1024px) 100vw, 448px"
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div>
                            <p className="mb-3 text-sm font-bold tracking-widest text-[#21AA57] uppercase">
                                Продавец
                            </p>

                            <h2 className="mb-6 text-3xl font-black text-[#29380E] uppercase italic md:text-5xl">
                                {seller.legalName}
                            </h2>

                            <div className="space-y-4 leading-relaxed text-gray-600">
                                <p>
                                    Магазин помогает покупателям ознакомиться с
                                    ассортиментом продукции EnergyMax и оформить
                                    заказ с доставкой или самовывозом.
                                </p>

                                <p>
                                    Перед оплатой менеджер подтверждает наличие,
                                    состав заказа, стоимость, способ оплаты и
                                    условия получения товара.
                                </p>

                                <p>
                                    Консультация магазина касается ассортимента,
                                    оформления заказа и информации на упаковке.
                                    Она не заменяет консультацию врача.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href={`https://wa.me/${seller.whatsappPhone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#21AA57] px-6 py-3 font-bold text-white transition-colors hover:bg-[#1a8a46]"
                                >
                                    <MessageCircle
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    Написать в WhatsApp
                                </a>

                                <a
                                    href={`tel:${seller.phoneHref}`}
                                    className="inline-flex items-center gap-2 rounded-xl border border-[#21AA57] px-6 py-3 font-bold text-[#21AA57] transition-colors hover:bg-[#21AA57] hover:text-white"
                                >
                                    <Phone
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    {seller.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Как работает магазин */}
            <section className="bg-white py-14 md:py-20">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="mx-auto mb-10 max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-black text-[#29380E] uppercase italic md:text-5xl">
                            Как работает магазин
                        </h2>

                        <p className="text-gray-600">
                            Основные принципы оформления заказа на{" "}
                            {seller.siteName}.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <article className="rounded-2xl border border-gray-100 bg-[#F4F7F5] p-6">
                            <PackageCheck
                                className="mb-4 h-8 w-8 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <h3 className="mb-3 font-bold text-[#29380E]">
                                Актуальное наличие
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-600">
                                Перед оплатой менеджер дополнительно проверяет
                                наличие выбранных товаров.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-gray-100 bg-[#F4F7F5] p-6">
                            <CheckCircle2
                                className="mb-4 h-8 w-8 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <h3 className="mb-3 font-bold text-[#29380E]">
                                Подтверждение заказа
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-600">
                                Покупатель заранее узнаёт итоговую стоимость,
                                оплату и условия доставки.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-gray-100 bg-[#F4F7F5] p-6">
                            <FileText
                                className="mb-4 h-8 w-8 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <h3 className="mb-3 font-bold text-[#29380E]">
                                Документы
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-600">
                                Имеющиеся документы размещаются на сайте или
                                предоставляются по запросу для конкретного
                                товара.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-gray-100 bg-[#F4F7F5] p-6">
                            <ShieldCheck
                                className="mb-4 h-8 w-8 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <h3 className="mb-3 font-bold text-[#29380E]">
                                Информация без обещаний
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-600">
                                Информация на сайте не является медицинским
                                назначением и не гарантирует результат
                                применения товара.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Реквизиты */}
            <section className="py-14 md:py-20">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 shadow-sm md:p-10">
                        <h2 className="mb-8 text-3xl font-black text-[#29380E] uppercase italic">
                            Сведения о продавце
                        </h2>

                        <dl className="grid gap-6 md:grid-cols-2">
                            <div>
                                <dt className="mb-1 text-sm font-bold text-[#29380E]">
                                    Продавец
                                </dt>
                                <dd className="text-gray-600">
                                    {seller.legalName}
                                </dd>
                            </div>

                            <div>
                                <dt className="mb-1 text-sm font-bold text-[#29380E]">
                                    ИНН
                                </dt>
                                <dd className="text-gray-600">
                                    {seller.taxId}
                                </dd>
                            </div>

                            <div>
                                <dt className="mb-1 text-sm font-bold text-[#29380E]">
                                    Свидетельство
                                </dt>
                                <dd className="text-gray-600">
                                    Серия{" "}
                                    {seller.registrationCertificateSeries},
                                    регистрационный номер{" "}
                                    {seller.registrationNumber}
                                </dd>
                            </div>

                            <div>
                                <dt className="mb-1 text-sm font-bold text-[#29380E]">
                                    Сайт
                                </dt>
                                <dd>
                                    <a
                                        href={seller.siteUrl}
                                        className="text-[#21AA57] hover:underline"
                                    >
                                        {seller.siteName}
                                    </a>
                                </dd>
                            </div>

                            <div className="md:col-span-2">
                                <dt className="mb-1 flex items-center gap-2 text-sm font-bold text-[#29380E]">
                                    <MapPin
                                        className="h-4 w-4 text-[#21AA57]"
                                        aria-hidden="true"
                                    />
                                    Адрес
                                </dt>

                                <dd className="text-gray-600">
                                    {seller.legalAddress}
                                </dd>
                            </div>

                            <div>
                                <dt className="mb-1 text-sm font-bold text-[#29380E]">
                                    Телефон и WhatsApp
                                </dt>
                                <dd>
                                    <a
                                        href={`tel:${seller.phoneHref}`}
                                        className="text-[#21AA57] hover:underline"
                                    >
                                        {seller.phone}
                                    </a>
                                </dd>
                            </div>

                            <div>
                                <dt className="mb-1 text-sm font-bold text-[#29380E]">
                                    Электронная почта
                                </dt>
                                <dd>
                                    <a
                                        href={`mailto:${seller.email}`}
                                        className="break-all text-[#21AA57] hover:underline"
                                    >
                                        {seller.email}
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            {/* Ссылки */}
            <section className="bg-[#29380E] py-12 text-white">
                <div className="container mx-auto px-4 text-center md:px-12">
                    <h2 className="mb-4 text-3xl font-black uppercase italic">
                        Полезная информация
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-white/70">
                        Перед оформлением заказа ознакомьтесь с документами и
                        условиями магазина.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/docs"
                            className="rounded-xl bg-[#21AA57] px-6 py-3 font-bold transition-colors hover:bg-[#1a8a46]"
                        >
                            Документы
                        </Link>

                        <Link
                            href="/delivery"
                            className="rounded-xl border border-white/30 px-6 py-3 font-bold transition-colors hover:bg-white hover:text-[#29380E]"
                        >
                            Доставка и оплата
                        </Link>

                        <Link
                            href="/offer"
                            className="rounded-xl border border-white/30 px-6 py-3 font-bold transition-colors hover:bg-white hover:text-[#29380E]"
                        >
                            Публичная оферта
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}