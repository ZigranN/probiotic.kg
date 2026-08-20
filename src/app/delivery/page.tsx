import type { Metadata } from "next";
import Link from "next/link";
import {
    Banknote,
    CheckCircle2,
    Clock,
    MapPin,
    MessageCircle,
    PackageCheck,
    Truck,
} from "lucide-react";

import { seller } from "@/config/seller";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
    title: "Доставка и оплата | probiotic.kg",
    description:
        "Условия доставки, самовывоза и оплаты заказов интернет-магазина probiotic.kg в Кыргызстане.",
};

export default function DeliveryPage() {
    return (
        <main className="min-h-screen bg-[#F4F7F5]">
            <div className="mx-auto max-w-6xl px-4 py-16">
                {/* Заголовок */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-[#29380E]">
                        Доставка и оплата
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Доставка продукции EnergyMax по Бишкеку и регионам
                        Кыргызской Республики.
                    </p>
                </div>

                {/* Основные преимущества */}
                <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl bg-white p-6 text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F7F5]">
                            <Truck
                                className="h-6 w-6 text-[#21AA57]"
                                aria-hidden="true"
                            />
                        </div>

                        <h2 className="mb-2 font-semibold text-[#29380E]">
                            Доставка по Кыргызстану
                        </h2>

                        <p className="text-sm text-gray-600">
                            Условия доставки подтверждает менеджер.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F7F5]">
                            <MapPin
                                className="h-6 w-6 text-[#21AA57]"
                                aria-hidden="true"
                            />
                        </div>

                        <h2 className="mb-2 font-semibold text-[#29380E]">
                            Самовывоз
                        </h2>

                        <p className="text-sm text-gray-600">
                            {siteConfig.pickupAddress}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F7F5]">
                            <PackageCheck
                                className="h-6 w-6 text-[#21AA57]"
                                aria-hidden="true"
                            />
                        </div>

                        <h2 className="mb-2 font-semibold text-[#29380E]">
                            Проверка заказа
                        </h2>

                        <p className="text-sm text-gray-600">
                            Наличие и состав заказа подтверждаются до оплаты.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F7F5]">
                            <MessageCircle
                                className="h-6 w-6 text-[#21AA57]"
                                aria-hidden="true"
                            />
                        </div>

                        <h2 className="mb-2 font-semibold text-[#29380E]">
                            Связь через WhatsApp
                        </h2>

                        <p className="text-sm text-gray-600">
                            Менеджер согласует доставку и оплату.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Доставка */}
                    <section className="rounded-2xl bg-white p-6 md:p-8">
                        <div className="mb-6 flex items-center gap-3">
                            <Truck
                                className="h-7 w-7 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <h2 className="text-2xl font-bold text-[#29380E]">
                                Условия доставки
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 font-semibold text-[#29380E]">
                                    Доставка по Бишкеку
                                </h3>

                                <p className="leading-relaxed text-gray-600">
                                    Срок и стоимость доставки зависят от адреса,
                                    времени и состава заказа. Менеджер сообщит
                                    условия до окончательного подтверждения
                                    заказа.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-[#29380E]">
                                    Доставка по регионам Кыргызстана
                                </h3>

                                <p className="leading-relaxed text-gray-600">
                                    Способ отправки, срок и стоимость
                                    согласовываются индивидуально с покупателем.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-[#29380E]">
                                    Бесплатная доставка
                                </h3>

                                <p className="leading-relaxed text-gray-600">
                                    Возможность бесплатной доставки при заказе
                                    от {siteConfig.freeDeliveryFromKgs} сом
                                    подтверждается менеджером с учетом адреса и
                                    способа получения.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-[#F4F7F5] p-5">
                                <div className="mb-2 flex items-center gap-2">
                                    <Clock
                                        className="h-5 w-5 text-[#21AA57]"
                                        aria-hidden="true"
                                    />

                                    <h3 className="font-semibold text-[#29380E]">
                                        Когда согласовывается доставка
                                    </h3>
                                </div>

                                <p className="text-sm leading-relaxed text-gray-600">
                                    После оформления заказа менеджер проверяет
                                    наличие товаров и связывается с покупателем
                                    по указанному номеру телефона или WhatsApp.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Оплата */}
                    <section className="rounded-2xl bg-white p-6 md:p-8">
                        <div className="mb-6 flex items-center gap-3">
                            <Banknote
                                className="h-7 w-7 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <h2 className="text-2xl font-bold text-[#29380E]">
                                Способы оплаты
                            </h2>
                        </div>

                        <p className="mb-6 leading-relaxed text-gray-600">
                            Все расчеты производятся в кыргызских сомах. Оплата
                            выполняется только после подтверждения наличия,
                            состава заказа и условий доставки.
                        </p>

                        <ul className="space-y-4">
                            {siteConfig.paymentMethods.map((method) => (
                                <li
                                    key={method}
                                    className="flex items-start gap-3 rounded-2xl bg-[#F4F7F5] p-4"
                                >
                                    <CheckCircle2
                                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#21AA57]"
                                        aria-hidden="true"
                                    />

                                    <span className="text-gray-700">
                                        {method}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 rounded-2xl border border-[#21AA57]/20 bg-[#21AA57]/5 p-5">
                            <p className="text-sm leading-relaxed text-gray-700">
                                Реквизиты для оплаты сообщает менеджер после
                                подтверждения заказа. Не переводите деньги по
                                реквизитам, полученным от неизвестных лиц.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Самовывоз */}
                <section className="mt-8 rounded-2xl bg-white p-6 md:p-8">
                    <div className="mb-6 flex items-center gap-3">
                        <MapPin
                            className="h-7 w-7 text-[#21AA57]"
                            aria-hidden="true"
                        />

                        <h2 className="text-2xl font-bold text-[#29380E]">
                            Самовывоз
                        </h2>
                    </div>

                    <dl className="grid gap-6 md:grid-cols-2">
                        <div>
                            <dt className="mb-1 font-semibold text-[#29380E]">
                                Адрес
                            </dt>

                            <dd className="text-gray-600">
                                {seller.legalAddress}
                            </dd>
                        </div>

                        <div>
                            <dt className="mb-1 font-semibold text-[#29380E]">
                                Время получения
                            </dt>

                            <dd className="text-gray-600">
                                Необходимо предварительно согласовать с
                                менеджером.
                            </dd>
                        </div>

                        <div>
                            <dt className="mb-1 font-semibold text-[#29380E]">
                                Телефон и WhatsApp
                            </dt>

                            <dd>
                                <a
                                    href={`https://wa.me/${seller.whatsappPhone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#21AA57] hover:underline"
                                >
                                    {seller.phone}
                                </a>
                            </dd>
                        </div>

                        <div>
                            <dt className="mb-1 font-semibold text-[#29380E]">
                                Подготовка заказа
                            </dt>

                            <dd className="text-gray-600">
                                Приезжайте после подтверждения готовности заказа
                                менеджером.
                            </dd>
                        </div>
                    </dl>
                </section>

                {/* Получение */}
                <section className="mt-8 rounded-2xl bg-white p-6 md:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-[#29380E]">
                        Проверка товара при получении
                    </h2>

                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3">
                            <CheckCircle2
                                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span>
                                Проверьте наименование и количество товаров.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle2
                                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span>
                                Проверьте целостность упаковки и срок годности.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle2
                                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span>
                                При обнаружении несоответствия сразу сообщите
                                продавцу.
                            </span>
                        </li>
                    </ul>
                </section>

                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>
                        Оформляя заказ, покупатель принимает условия{" "}
                        <Link
                            href="/offer"
                            className="text-[#21AA57] hover:underline"
                        >
                            публичной оферты
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </main>
    );
}