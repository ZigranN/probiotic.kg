import type { Metadata } from "next";
import Link from "next/link";
import { seller } from "@/config/seller";

export const metadata: Metadata = {
    title: "Публичная оферта | probiotic.kg",
    description:
        "Условия оформления и выполнения заказов в интернет-магазине probiotic.kg.",
};

export default function OfferPage() {
    return (
        <main className="min-h-screen bg-[#F4F7F5]">
            <div className="mx-auto max-w-4xl px-4 py-16">
                <h1 className="mb-8 text-3xl font-bold text-[#29380E] md:text-4xl">
                    Публичная оферта
                </h1>

                <div className="space-y-8 rounded-2xl bg-white p-6 md:p-8">
                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            1. Общие положения
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Настоящая публичная оферта определяет условия продажи
                            товаров через интернет-магазин{" "}
                            <a
                                href={seller.siteUrl}
                                className="text-[#21AA57] hover:underline"
                            >
                                {seller.siteName}
                            </a>
                            .
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Продавцом является {seller.legalName}. Покупателем
                            является физическое лицо, оформляющее заказ для личных,
                            семейных или домашних нужд.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            2. Предмет оферты
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Продавец обязуется передать Покупателю выбранный товар,
                            а Покупатель обязуется принять и оплатить его на условиях,
                            согласованных при подтверждении заказа.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Наименование, описание, стоимость и доступность товаров
                            указываются на страницах интернет-магазина.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            3. Оформление заказа
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Для оформления заказа Покупатель выбирает товар,
                            добавляет его в корзину, указывает имя и номер телефона,
                            после чего нажимает кнопку «Оформить в WhatsApp».
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Оформляя заказ, Покупатель подтверждает, что ознакомился
                            с настоящей офертой и принимает её условия.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            После получения заказа Продавец связывается с Покупателем
                            для подтверждения наличия товара, состава заказа,
                            способа оплаты и условий доставки.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            4. Цена и оплата
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Цены на товары указываются в кыргызских сомах.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Стоимость доставки может не входить в цену товара.
                            Окончательная сумма заказа и доступный способ оплаты
                            сообщаются Покупателю до подтверждения заказа.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Покупатель не обязан оплачивать товар до согласования
                            состава заказа и условий его получения.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            5. Доставка
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Доставка осуществляется по Бишкеку и другим регионам
                            Кыргызской Республики по предварительному согласованию.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Срок, способ и стоимость доставки согласовываются
                            с Покупателем до окончательного подтверждения заказа.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Подробнее об условиях доставки можно узнать на странице{" "}
                            <Link
                                href="/delivery"
                                className="text-[#21AA57] hover:underline"
                            >
                                «Доставка и оплата»
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            6. Получение товара
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            При получении товара Покупателю рекомендуется проверить
                            наименование товара, количество, срок годности и
                            целостность упаковки.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            При обнаружении повреждения упаковки, несоответствия
                            заказа или другого недостатка необходимо связаться
                            с Продавцом.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            7. Возврат, обмен и претензии
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Возврат, обмен товаров и рассмотрение претензий
                            осуществляются в соответствии с законодательством
                            Кыргызской Республики.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Для рассмотрения обращения Покупателю необходимо
                            сообщить номер телефона, использованный при оформлении
                            заказа, наименование товара и причину обращения.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Связаться с Продавцом можно по телефону или WhatsApp:{" "}
                            <a
                                href={`https://wa.me/${seller.whatsappPhone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#21AA57] hover:underline"
                            >
                                {seller.phone}
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            8. Информация о товарах
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Информация о составе, способе применения, условиях
                            хранения, противопоказаниях и сроке годности указывается
                            на странице конкретного товара, его упаковке или в
                            инструкции производителя.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Информация на сайте носит справочный характер и не
                            заменяет консультацию медицинского специалиста.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            9. Персональные данные
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Персональные данные Покупателя используются для
                            оформления заказа, связи с Покупателем и организации
                            доставки.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Подробнее об обработке данных указано в{" "}
                            <Link
                                href="/policy"
                                className="text-[#21AA57] hover:underline"
                            >
                                Политике конфиденциальности
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            10. Изменение оферты
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Продавец вправе обновлять настоящую оферту. Новая
                            редакция применяется к заказам, оформленным после её
                            публикации на сайте.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            11. Сведения о продавце
                        </h2>

                        <dl className="space-y-3 text-gray-600">
                            <div>
                                <dt className="font-semibold text-[#29380E]">
                                    Продавец
                                </dt>
                                <dd>{seller.legalName}</dd>
                            </div>

                            <div>
                                <dt className="font-semibold text-[#29380E]">
                                    Свидетельство
                                </dt>
                                <dd>
                                    Серия {seller.registrationCertificateSeries},
                                    регистрационный номер{" "}
                                    {seller.registrationNumber}
                                </dd>
                            </div>

                            <div>
                                <dt className="font-semibold text-[#29380E]">
                                    ИНН
                                </dt>
                                <dd>{seller.taxId}</dd>
                            </div>

                            <div>
                                <dt className="font-semibold text-[#29380E]">
                                    Адрес
                                </dt>
                                <dd>{seller.legalAddress}</dd>
                            </div>

                            <div>
                                <dt className="font-semibold text-[#29380E]">
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
                                <dt className="font-semibold text-[#29380E]">
                                    Электронная почта
                                </dt>
                                <dd>
                                    <a
                                        href={`mailto:${seller.email}`}
                                        className="text-[#21AA57] hover:underline"
                                    >
                                        {seller.email}
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </section>

                    <div className="border-t border-gray-200 pt-6">
                        <p className="text-sm text-gray-500">
                            Дата публикации редакции: 3 августа 2026 года.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}