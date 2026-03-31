export default function OfferPage() {
    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-[#29380E] mb-8">
                    Публичная оферта
                </h1>

                <div className="bg-white rounded-2xl p-8 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            1. Общие положения
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Настоящая Публичная оферта (далее - Оферта) является официальным предложением
                            EnergyMax (далее - Продавец) заключить договор купли-продажи товаров,
                            представленных на сайте energymax.kg (далее - Сайт).
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-3">
                            Оформление заказа на Сайте является полным и безоговорочным принятием условий
                            настоящей Оферты (акцептом).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            2. Предмет договора
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Продавец обязуется передать в собственность Покупателю товар, а Покупатель
                            обязуется принять и оплатить товар на условиях настоящей Оферты.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            3. Порядок оформления заказа
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-3">
                            Для оформления заказа Покупатель:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Выбирает товар и добавляет его в корзину</li>
                            <li>Заполняет форму заказа с контактными данными и адресом доставки</li>
                            <li>Подтверждает заказ</li>
                            <li>Получает подтверждение заказа на email или WhatsApp</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-3">
                            Договор считается заключенным с момента получения Покупателем подтверждения заказа.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            4. Цена товара и порядок оплаты
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Цены на товары указаны на Сайте в казахстанских тенге (₸) и включают НДС.
                            Цена товара не включает стоимость доставки, которая рассчитывается отдельно.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-3">
                            Оплата производится одним из способов, указанных на Сайте:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                            <li>Банковский перевод на карту</li>
                            <li>Оплата через Kaspi QR</li>
                            <li>Наложенный платеж (при наличии)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            5. Доставка товара
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Доставка товара осуществляется курьерской службой по адресу, указанному Покупателем.
                            Сроки доставки зависят от региона доставки и указаны на странице "Доставка и оплата".
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-3">
                            Продавец не несет ответственности за задержку доставки, вызванную форс-мажорными
                            обстоятельствами или действиями курьерской службы.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            6. Возврат и обмен товара
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Покупатель вправе отказаться от товара надлежащего качества в течение 14 дней
                            с момента получения, если товар не был в употреблении, сохранены его потребительские
                            свойства и упаковка.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-3">
                            В случае обнаружения недостатков товара Покупатель вправе потребовать замену товара
                            или возврат денежных средств в соответствии с законодательством о защите прав
                            потребителей.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-3">
                            Для возврата или обмена товара свяжитесь с нами через WhatsApp или email.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            7. Ответственность сторон
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Продавец не несет ответственности за ущерб, причиненный Покупателю вследствие
                            ненадлежащего использования товара. Продавец гарантирует соответствие товара
                            описанию на Сайте и его качество.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-3">
                            Покупатель несет ответственность за достоверность предоставленной при оформлении
                            заказа информации.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            8. Конфиденциальность
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Продавец обязуется не разглашать персональные данные Покупателя третьим лицам,
                            за исключением случаев, предусмотренных законодательством и настоящей Офертой.
                            Подробнее в{" "}
                            <a href="/policy" className="text-[#21AA57] hover:underline">
                                Политике конфиденциальности
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            9. Форс-мажор
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Стороны освобождаются от ответственности за полное или частичное неисполнение
                            обязательств по настоящей Оферте, если это неисполнение явилось следствием
                            обстоятельств непреодолимой силы (форс-мажор).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            10. Срок действия Оферты
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Настоящая Оферта вступает в силу с момента размещения на Сайте и действует
                            до момента отзыва Продавцом. Продавец оставляет за собой право вносить изменения
                            в условия Оферты в одностороннем порядке.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                            11. Реквизиты Продавца
                        </h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>Наименование: EnergyMax</li>
                            <li>Юридический адрес: г. Алматы, Республика Казахстан</li>
                            <li>Email: support@energymax.kg</li>
                            <li>WhatsApp: +7 (XXX) XXX-XX-XX</li>
                        </ul>
                    </section>

                    <div className="pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            Дата последнего обновления: 31 марта 2026 года
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
