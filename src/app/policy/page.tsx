import type { Metadata } from "next";
import Link from "next/link";

import { seller } from "@/config/seller";

export const metadata: Metadata = {
    title: "Политика конфиденциальности | probiotic.kg",
    description:
        "Порядок сбора, использования и защиты персональных данных пользователей интернет-магазина probiotic.kg.",
};

export default function PolicyPage() {
    return (
        <main className="min-h-screen bg-[#F4F7F5]">
            <div className="mx-auto max-w-4xl px-4 py-16">
                <h1 className="mb-8 text-3xl font-bold text-[#29380E] md:text-4xl">
                    Политика конфиденциальности
                </h1>

                <div className="space-y-8 rounded-2xl bg-white p-6 md:p-8">
                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            1. Общие положения
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Настоящая Политика конфиденциальности описывает
                            порядок обработки персональных данных пользователей
                            интернет-магазина{" "}
                            <a
                                href={seller.siteUrl}
                                className="text-[#21AA57] hover:underline"
                            >
                                {seller.siteName}
                            </a>
                            .
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Лицом, ответственным за обработку персональных данных,
                            является {seller.legalName}.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            2. Какие данные мы собираем
                        </h2>

                        <p className="mb-3 leading-relaxed text-gray-600">
                            При оформлении заказа сайт может получить:
                        </p>

                        <ul className="list-disc space-y-2 pl-6 text-gray-600">
                            <li>имя покупателя;</li>
                            <li>номер телефона или WhatsApp;</li>
                            <li>состав и стоимость заказа;</li>
                            <li>дату и время оформления заказа;</li>
                            <li>
                                адрес доставки, если он сообщается при
                                подтверждении заказа.
                            </li>
                        </ul>

                        <p className="mt-4 leading-relaxed text-gray-600">
                            При создании учетной записи сайт также может получить
                            имя, фамилию, email и номер телефона пользователя.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Пароли пользователей не хранятся в открытом виде.
                            Для хранения используется защищенное хешированное
                            представление пароля.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            3. Какие данные сайт не собирает
                        </h2>

                        <p className="mb-3 leading-relaxed text-gray-600">
                            Через обычную форму оформления заказа сайт не
                            запрашивает:
                        </p>

                        <ul className="list-disc space-y-2 pl-6 text-gray-600">
                            <li>паспортные данные;</li>
                            <li>ИНН покупателя;</li>
                            <li>фотографию или подпись;</li>
                            <li>данные банковской карты;</li>
                            <li>медицинский диагноз;</li>
                            <li>сведения о состоянии здоровья.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            4. Цели обработки данных
                        </h2>

                        <p className="mb-3 leading-relaxed text-gray-600">
                            Персональные данные используются для:
                        </p>

                        <ul className="list-disc space-y-2 pl-6 text-gray-600">
                            <li>создания и подтверждения заказа;</li>
                            <li>связи с покупателем;</li>
                            <li>организации оплаты и доставки;</li>
                            <li>ведения истории заказов;</li>
                            <li>
                                рассмотрения обращений, возвратов и претензий;
                            </li>
                            <li>обеспечения работы учетной записи;</li>
                            <li>защиты сайта от ошибок и злоупотреблений;</li>
                            <li>
                                исполнения требований законодательства
                                Кыргызской Республики.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            5. Оформление заказа через WhatsApp
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            После сохранения заказа сайт может перенаправить
                            покупателя в WhatsApp с предварительно сформированным
                            сообщением, содержащим имя, номер телефона, товары,
                            количество и итоговую стоимость заказа.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Использование WhatsApp регулируется правилами и
                            политикой конфиденциальности соответствующего
                            сервиса.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            6. Передача данных
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Данные могут передаваться только в объеме,
                            необходимом для выполнения заказа:
                        </p>

                        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
                            <li>сотрудникам или представителям продавца;</li>
                            <li>
                                курьеру или службе доставки, если покупатель
                                выбирает доставку;
                            </li>
                            <li>
                                сервисам связи, используемым для подтверждения
                                заказа;
                            </li>
                            <li>
                                государственным органам в случаях,
                                предусмотренных законодательством.
                            </li>
                        </ul>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Мы не продаем персональные данные пользователей
                            третьим лицам.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            7. Файлы cookie и локальное хранилище
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Сайт использует технические данные браузера и
                            локальное хранилище для работы корзины, сохранения
                            настроек cookie и поддержания пользовательской
                            сессии.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            При наличии настроенного идентификатора на сайте
                            может использоваться Google Analytics для получения
                            общей статистики посещений.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Пользователь может удалить файлы cookie и данные
                            локального хранилища через настройки своего браузера.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            8. Хранение и защита данных
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Данные заказов и учетных записей хранятся в базе
                            данных сайта в течение срока, необходимого для
                            выполнения заказа, ведения учета, рассмотрения
                            обращений и исполнения установленных законом
                            обязанностей.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Мы применяем разумные технические и организационные
                            меры для защиты данных от несанкционированного
                            доступа, изменения, утраты или раскрытия.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Передача данных между браузером и сайтом
                            осуществляется через защищенное HTTPS-соединение.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            9. Права пользователя
                        </h2>

                        <p className="mb-3 leading-relaxed text-gray-600">
                            Пользователь может обратиться к продавцу, чтобы:
                        </p>

                        <ul className="list-disc space-y-2 pl-6 text-gray-600">
                            <li>
                                узнать, какие его персональные данные
                                обрабатываются;
                            </li>
                            <li>уточнить или исправить свои данные;</li>
                            <li>
                                запросить удаление данных, если их хранение больше
                                не требуется и не предусмотрено законом;
                            </li>
                            <li>отозвать ранее предоставленное согласие;</li>
                            <li>
                                прекратить получение рекламных сообщений.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            10. Рекламные сообщения
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Оформление заказа само по себе не означает согласие
                            покупателя на получение рекламных рассылок.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Рекламные сообщения могут направляться только при
                            наличии отдельного согласия пользователя. От такого
                            согласия можно отказаться в любое время.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            11. Изменение политики
                        </h2>

                        <p className="leading-relaxed text-gray-600">
                            Политика может обновляться при изменении работы
                            сайта, используемых сервисов или требований
                            законодательства.
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600">
                            Новая редакция вступает в силу после публикации на
                            этой странице.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            12. Контакты
                        </h2>

                        <dl className="space-y-3 text-gray-600">
                            <div>
                                <dt className="font-semibold text-[#29380E]">
                                    Ответственное лицо
                                </dt>
                                <dd>{seller.legalName}</dd>
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

                        <p className="mt-2 text-sm text-gray-500">
                            Условия оформления заказа также указаны в{" "}
                            <Link
                                href="/offer"
                                className="text-[#21AA57] hover:underline"
                            >
                                публичной оферте
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}