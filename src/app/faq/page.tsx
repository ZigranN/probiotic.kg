"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData: FAQItem[] = [
        // О продукте
        {
            category: "О продукте",
            question: "Что такое Максилин?",
            answer:
                "Максилин - это живой пробиотик, содержащий миллиарды полезных бактерий, которые поддерживают здоровье микробиома кишечника, кожи и мозга. Он помогает восстановить баланс микрофлоры и укрепить иммунитет.",
        },
        {
            category: "О продукте",
            question: "В чем разница между сухим и жидким Максилином?",
            answer:
                "Сухой Максилин - это концентрированный порошок для приготовления напитка. Жидкий Максилин - готовый к употреблению напиток. Оба варианта содержат живые бактерии, но жидкая форма удобнее в использовании.",
        },
        {
            category: "О продукте",
            question: "Какой срок годности у пробиотика?",
            answer:
                "Срок годности сухого Максилина - 12 месяцев при правильном хранении в сухом прохладном месте. Жидкий Максилин хранится 30 дней в холодильнике после вскрытия.",
        },

        // Применение
        {
            category: "Применение",
            question: "Как правильно принимать Максилин?",
            answer:
                "Сухой Максилин: растворите 1-2 чайные ложки в стакане теплой (не горячей!) воды или сока. Принимайте утром натощак или за 30 минут до еды. Жидкий: принимайте 50-100 мл в день натощак.",
        },
        {
            category: "Применение",
            question: "Можно ли давать пробиотик детям?",
            answer:
                "Да, Максилин безопасен для детей с 3 лет. Рекомендуемая дозировка для детей - половина взрослой дозы. Для детей младше 3 лет проконсультируйтесь с педиатром.",
        },
        {
            category: "Применение",
            question: "Сколько времени нужно принимать пробиотик?",
            answer:
                "Минимальный курс - 30 дней для восстановления микробиома. Для достижения устойчивого эффекта рекомендуется курс 3 месяца. Максилин можно принимать постоянно для поддержания здоровья.",
        },
        {
            category: "Применение",
            question: "Можно ли принимать Максилин с антибиотиками?",
            answer:
                "Да, но с интервалом. Принимайте Максилин через 2-3 часа после приема антибиотика. После курса антибиотиков рекомендуется усиленный прием пробиотика в течение месяца.",
        },

        // Доставка и оплата
        {
            category: "Доставка и оплата",
            question: "Какие способы оплаты доступны?",
            answer:
                "Мы принимаем оплату через банковский перевод, Kaspi QR и наложенный платеж (при наличии). После оформления заказа вам придет сообщение в WhatsApp с реквизитами для оплаты.",
        },
        {
            category: "Доставка и оплата",
            question: "Сколько стоит доставка?",
            answer:
                "Доставка по Алматы бесплатная при заказе от 10 000 ₸. Доставка по другим городам Казахстана бесплатная при заказе от 15 000 ₸. Подробнее на странице 'Доставка и оплата'.",
        },
        {
            category: "Доставка и оплата",
            question: "Как долго ждать доставку?",
            answer:
                "Доставка по Алматы - 1-2 дня. Доставка по другим городам Казахстана - 2-5 дней в зависимости от региона. После отправки вы получите трек-номер для отслеживания.",
        },

        // Эффекты и результаты
        {
            category: "Эффекты и результаты",
            question: "Когда появятся первые результаты?",
            answer:
                "Первые улучшения обычно заметны через 7-14 дней: нормализация пищеварения, улучшение состояния кожи, прилив энергии. Полное восстановление микробиома занимает 2-3 месяца.",
        },
        {
            category: "Эффекты и результаты",
            question: "Помогает ли Максилин при проблемах с кожей?",
            answer:
                "Да! Максилин восстанавливает микробиом кожи, что помогает при акне, экземе, атопическом дерматите. Многие клиенты отмечают значительное улучшение состояния кожи через месяц применения.",
        },
        {
            category: "Эффекты и результаты",
            question: "Есть ли побочные эффекты?",
            answer:
                "Максилин - натуральный продукт без побочных эффектов. В первые дни возможен легкий дискомфорт в животе из-за перестройки микрофлоры - это нормально и быстро проходит.",
        },

        // Общие вопросы
        {
            category: "Общие вопросы",
            question: "Можно ли принимать Максилин беременным и кормящим?",
            answer:
                "Максилин безопасен, но перед применением во время беременности и кормления рекомендуем проконсультироваться с врачом.",
        },
        {
            category: "Общие вопросы",
            question: "Есть ли противопоказания?",
            answer:
                "Противопоказаний практически нет. Не рекомендуется только при индивидуальной непереносимости компонентов. При серьезных заболеваниях ЖКТ проконсультируйтесь с врачом.",
        },
        {
            category: "Общие вопросы",
            question: "Можно ли вернуть товар?",
            answer:
                "Да, вы можете вернуть товар в течение 14 дней, если он не был в употреблении. Подробнее в разделе 'Публичная оферта'.",
        },
    ];

    const categories = Array.from(new Set(faqData.map((item) => item.category)));

    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-[#21AA57] rounded-full flex items-center justify-center mx-auto mb-6">
                        <HelpCircle className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-[#29380E] mb-4">
                        Часто задаваемые вопросы
                    </h1>
                    <p className="text-lg text-gray-600">
                        Ответы на популярные вопросы о Максилине
                    </p>
                </div>

                {/* FAQ по категориям */}
                {categories.map((category) => (
                    <div key={category} className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#29380E] mb-4">{category}</h2>
                        <div className="space-y-3">
                            {faqData
                                .filter((item) => item.category === category)
                                .map((item, index) => {
                                    const globalIndex = faqData.indexOf(item);
                                    const isOpen = openIndex === globalIndex;

                                    return (
                                        <div
                                            key={globalIndex}
                                            className="bg-white rounded-xl overflow-hidden"
                                        >
                                            <button
                                                onClick={() =>
                                                    setOpenIndex(isOpen ? null : globalIndex)
                                                }
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F4F7F5] transition"
                                            >
                                                <span className="font-medium text-[#29380E] pr-4">
                                                    {item.question}
                                                </span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-[#21AA57] flex-shrink-0 transition-transform ${
                                                        isOpen ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </button>
                                            {isOpen && (
                                                <div className="px-6 pb-6">
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                ))}

                {/* Не нашли ответ? */}
                <div className="bg-white rounded-2xl p-8 text-center mt-12">
                    <h2 className="text-2xl font-semibold text-[#29380E] mb-4">
                        Не нашли ответ на свой вопрос?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Свяжитесь с нами через WhatsApp или напишите на email - мы с радостью ответим!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/77XXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[#21AA57] text-white rounded-full font-medium hover:bg-[#1a8a46] transition"
                        >
                            Написать в WhatsApp
                        </a>
                        <a
                            href="mailto:support@energymax.kg"
                            className="px-6 py-3 bg-[#F4F7F5] text-[#29380E] rounded-full font-medium hover:bg-gray-200 transition"
                        >
                            Отправить email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
