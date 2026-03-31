import { Truck, MapPin, Clock, Package } from "lucide-react";

export default function DeliveryPage() {
    const cities = [
        {
            name: "Алматы",
            deliveryTime: "1-2 дня",
            price: "Бесплатно при заказе от 10 000 ₸",
        },
        {
            name: "Астана",
            deliveryTime: "2-3 дня",
            price: "Бесплатно при заказе от 15 000 ₸",
        },
        {
            name: "Шымкент",
            deliveryTime: "2-4 дня",
            price: "Бесплатно при заказе от 15 000 ₸",
        },
        {
            name: "Караганда",
            deliveryTime: "3-5 дней",
            price: "Бесплатно при заказе от 15 000 ₸",
        },
        {
            name: "Актобе",
            deliveryTime: "3-5 дней",
            price: "Бесплатно при заказе от 15 000 ₸",
        },
        {
            name: "Тараз",
            deliveryTime: "3-5 дней",
            price: "Бесплатно при заказе от 15 000 ₸",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#29380E] mb-4">
                        Доставка и оплата
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Быстрая доставка по всему Казахстану и удобные способы оплаты
                    </p>
                </div>

                {/* Преимущества */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-[#F4F7F5] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Truck className="w-6 h-6 text-[#21AA57]" />
                        </div>
                        <h3 className="font-semibold text-[#29380E] mb-2">Быстрая доставка</h3>
                        <p className="text-sm text-gray-600">Доставка по Алматы 1-2 дня</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-[#F4F7F5] rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-6 h-6 text-[#21AA57]" />
                        </div>
                        <h3 className="font-semibold text-[#29380E] mb-2">По всему Казахстану</h3>
                        <p className="text-sm text-gray-600">Доставляем во все города</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-[#F4F7F5] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Package className="w-6 h-6 text-[#21AA57]" />
                        </div>
                        <h3 className="font-semibold text-[#29380E] mb-2">Упаковка</h3>
                        <p className="text-sm text-gray-600">Надежная упаковка товара</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-[#F4F7F5] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-6 h-6 text-[#21AA57]" />
                        </div>
                        <h3 className="font-semibold text-[#29380E] mb-2">Отслеживание</h3>
                        <p className="text-sm text-gray-600">Следите за статусом заказа</p>
                    </div>
                </div>

                {/* Города доставки */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#29380E] mb-6">Сроки и стоимость доставки</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cities.map((city, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6">
                                <h3 className="font-semibold text-[#29380E] mb-3 text-lg">
                                    {city.name}
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock className="w-4 h-4 text-[#21AA57]" />
                                        <span className="text-gray-600">Срок: {city.deliveryTime}</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <Truck className="w-4 h-4 text-[#21AA57] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-600">{city.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Способы оплаты */}
                <div className="bg-white rounded-2xl p-8 mb-16">
                    <h2 className="text-2xl font-bold text-[#29380E] mb-6">Способы оплаты</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-[#29380E] mb-2">
                                💬 Оплата через WhatsApp (основной способ)
                            </h3>
                            <p className="text-gray-600">
                                После оформления заказа вам придет сообщение в WhatsApp с реквизитами для оплаты.
                                Вы сможете оплатить любым удобным способом и отправить подтверждение.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#29380E] mb-2">
                                💳 Банковский перевод
                            </h3>
                            <p className="text-gray-600">
                                Оплата на карту Kaspi, Halyk Bank или другие казахстанские банки.
                                Реквизиты будут отправлены в WhatsApp.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#29380E] mb-2">
                                📱 Kaspi QR
                            </h3>
                            <p className="text-gray-600">
                                Быстрая оплата через Kaspi QR код. QR код будет отправлен вам в сообщении.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#29380E] mb-2">
                                🚚 Наложенный платеж (скоро)
                            </h3>
                            <p className="text-gray-600">
                                В ближайшее время будет доступна оплата при получении.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Условия доставки */}
                <div className="bg-white rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-[#29380E] mb-6">Условия доставки</h2>
                    <div className="prose prose-lg max-w-none">
                        <ul className="space-y-3 text-gray-600">
                            <li>
                                Доставка осуществляется курьерской службой в указанное вами время
                            </li>
                            <li>
                                После отправки заказа мы отправим вам трек-номер для отслеживания
                            </li>
                            <li>
                                При получении проверьте целостность упаковки и соответствие заказа
                            </li>
                            <li>
                                Если товар не подошел, вы можете вернуть его в течение 14 дней
                            </li>
                            <li>
                                Для оптовых заказов действуют специальные условия доставки
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
