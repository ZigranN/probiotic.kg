"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";

import { seller } from "@/config/seller";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

const faqData: FAQItem[] = [
    {
        id: "what-is-store",
        category: "О магазине",
        question: "Что можно заказать на probiotic.kg?",
        answer:
            "На сайте представлены товары EnergyMax. Актуальный ассортимент, стоимость и наличие указаны в каталоге. Перед оплатой менеджер дополнительно подтверждает состав заказа и наличие товаров.",
    },
    {
        id: "product-information",
        category: "О магазине",
        question: "Где посмотреть информацию о товаре?",
        answer:
            "Основная информация размещается на странице конкретного товара. Перед применением также необходимо ознакомиться с маркировкой на упаковке и инструкцией производителя.",
    },
    {
        id: "documents",
        category: "О магазине",
        question: "Можно ли получить документы на продукцию?",
        answer:
            "Документы на продукцию размещаются в разделе «Документы» или предоставляются продавцом по запросу. При обращении укажите точное название интересующего товара.",
    },

    {
        id: "how-to-order",
        category: "Оформление заказа",
        question: "Как оформить заказ?",
        answer:
            "Добавьте выбранные товары в корзину, укажите имя и номер телефона, примите условия публичной оферты и нажмите кнопку оформления заказа. После этого заказ будет сохранён, а WhatsApp откроется с подготовленным сообщением.",
    },
    {
        id: "registration",
        category: "Оформление заказа",
        question: "Нужно ли регистрироваться на сайте?",
        answer:
            "Для обычного оформления заказа обязательная регистрация не требуется. Достаточно указать имя и номер телефона для связи.",
    },
    {
        id: "confirmation",
        category: "Оформление заказа",
        question: "Когда заказ считается подтверждённым?",
        answer:
            "Отправка формы на сайте ещё не означает окончательное подтверждение заказа. Менеджер проверяет наличие товаров и согласовывает с покупателем состав заказа, доставку и способ оплаты.",
    },
    {
        id: "price",
        category: "Оформление заказа",
        question: "В какой валюте указаны цены?",
        answer:
            "Все цены на сайте указываются в кыргызских сомах. Стоимость доставки может рассчитываться отдельно.",
    },

    {
        id: "payment",
        category: "Доставка и оплата",
        question: "Какие способы оплаты доступны?",
        answer:
            "Доступный способ оплаты сообщается покупателю после подтверждения наличия и состава заказа. Не переводите деньги по реквизитам, полученным от неизвестных лиц.",
    },
    {
        id: "bishkek-delivery",
        category: "Доставка и оплата",
        question: "Есть ли доставка по Бишкеку?",
        answer:
            "Доставка по Бишкеку возможна по предварительному согласованию. Стоимость и срок зависят от адреса, времени и состава заказа.",
    },
    {
        id: "regions-delivery",
        category: "Доставка и оплата",
        question: "Доставляете ли вы по Кыргызстану?",
        answer:
            "Возможность доставки по регионам Кыргызской Республики согласовывается с менеджером. Способ отправки, срок и стоимость сообщаются до окончательного подтверждения заказа.",
    },
    {
        id: "pickup",
        category: "Доставка и оплата",
        question: "Можно ли забрать заказ самостоятельно?",
        answer:
            "Самовывоз возможен только после подтверждения готовности заказа и предварительного согласования времени с менеджером.",
    },

    {
        id: "how-to-use",
        category: "Применение и безопасность",
        question: "Как правильно применять продукцию?",
        answer:
            "Используйте товар только в соответствии с информацией на упаковке и официальной инструкцией производителя. Не применяйте универсальную дозировку из комментариев, отзывов или сторонних публикаций.",
    },
    {
        id: "children",
        category: "Применение и безопасность",
        question: "Можно ли применять продукцию детям?",
        answer:
            "Возрастные ограничения и способ применения зависят от конкретного товара. Перед применением ребёнку необходимо проверить инструкцию производителя и проконсультироваться с педиатром.",
    },
    {
        id: "pregnancy",
        category: "Применение и безопасность",
        question: "Можно ли использовать продукцию при беременности?",
        answer:
            "Во время беременности и грудного вскармливания применение любых пищевых добавок и специализированных продуктов необходимо предварительно согласовать с врачом.",
    },
    {
        id: "antibiotics",
        category: "Применение и безопасность",
        question: "Можно ли принимать пробиотик вместе с антибиотиками?",
        answer:
            "Совместимость, интервал и длительность применения зависят от конкретного препарата и продукта. Эти вопросы необходимо согласовать с лечащим врачом или фармацевтом.",
    },
    {
        id: "contraindications",
        category: "Применение и безопасность",
        question: "Есть ли противопоказания?",
        answer:
            "Противопоказания зависят от состава конкретного товара. Перед применением ознакомьтесь с упаковкой и инструкцией. При аллергии, хроническом заболевании, беременности или приёме лекарств проконсультируйтесь со специалистом.",
    },
    {
        id: "medicine",
        category: "Применение и безопасность",
        question: "Являются ли представленные товары лекарствами?",
        answer:
            "Статус товара определяется его регистрационными документами и маркировкой. Товары, которые являются БАДами или пищевой продукцией, не предназначены для диагностики, лечения или предотвращения заболеваний.",
    },

    {
        id: "damaged-product",
        category: "Возврат и обращения",
        question: "Что делать, если упаковка повреждена?",
        answer:
            "Не используйте товар и как можно скорее свяжитесь с продавцом. Укажите имя, номер телефона, название товара и приложите фотографии повреждённой упаковки.",
    },
    {
        id: "wrong-product",
        category: "Возврат и обращения",
        question: "Что делать, если доставили не тот товар?",
        answer:
            "Свяжитесь с продавцом по телефону или WhatsApp и сообщите данные заказа. Обращение будет рассмотрено с учётом обстоятельств заказа и требований законодательства Кыргызской Республики.",
    },
    {
        id: "return",
        category: "Возврат и обращения",
        question: "Можно ли вернуть или обменять товар?",
        answer:
            "Возможность возврата или обмена зависит от категории товара, состояния упаковки, причины обращения и требований законодательства Кыргызской Республики. Условия необходимо уточнить у продавца до возврата товара.",
    },
];

export default function FAQPage() {
    const [openId, setOpenId] = useState<string | null>(null);

    const categories = Array.from(
        new Set(faqData.map((item) => item.category)),
    );

    return (
        <main className="min-h-screen bg-[#F4F7F5]">
            <div className="mx-auto max-w-4xl px-4 py-16">
                <div className="mb-12 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#21AA57]">
                        <HelpCircle
                            className="h-8 w-8 text-white"
                            aria-hidden="true"
                        />
                    </div>

                    <h1 className="mb-4 text-4xl font-bold text-[#29380E]">
                        Часто задаваемые вопросы
                    </h1>

                    <p className="text-lg text-gray-600">
                        Оформление заказа, доставка и общая информация о
                        продукции
                    </p>
                </div>

                {categories.map((category) => (
                    <section key={category} className="mb-8">
                        <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                            {category}
                        </h2>

                        <div className="space-y-3">
                            {faqData
                                .filter(
                                    (item) => item.category === category,
                                )
                                .map((item) => {
                                    const isOpen = openId === item.id;
                                    const contentId = `faq-answer-${item.id}`;

                                    return (
                                        <div
                                            key={item.id}
                                            className="overflow-hidden rounded-xl bg-white"
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenId(
                                                        isOpen
                                                            ? null
                                                            : item.id,
                                                    )
                                                }
                                                aria-expanded={isOpen}
                                                aria-controls={contentId}
                                                className="flex w-full items-center justify-between p-6 text-left transition hover:bg-[#F4F7F5]"
                                            >
                                                <span className="pr-4 font-medium text-[#29380E]">
                                                    {item.question}
                                                </span>

                                                <ChevronDown
                                                    className={`h-5 w-5 flex-shrink-0 text-[#21AA57] transition-transform ${
                                                        isOpen
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                    aria-hidden="true"
                                                />
                                            </button>

                                            {isOpen && (
                                                <div
                                                    id={contentId}
                                                    className="px-6 pb-6"
                                                >
                                                    <p className="leading-relaxed text-gray-600">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                        </div>
                    </section>
                ))}

                <section className="mt-12 rounded-2xl bg-white p-8 text-center">
                    <h2 className="mb-4 text-2xl font-semibold text-[#29380E]">
                        Не нашли ответ?
                    </h2>

                    <p className="mb-6 text-gray-600">
                        Свяжитесь с продавцом по WhatsApp или электронной почте.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${seller.whatsappPhone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-[#21AA57] px-6 py-3 font-medium text-white transition hover:bg-[#1a8a46]"
                        >
                            Написать в WhatsApp
                        </a>

                        <a
                            href={`mailto:${seller.email}`}
                            className="rounded-full bg-[#F4F7F5] px-6 py-3 font-medium text-[#29380E] transition hover:bg-gray-200"
                        >
                            Отправить email
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-gray-500">
                        Условия заказа указаны в{" "}
                        <Link
                            href="/offer"
                            className="text-[#21AA57] hover:underline"
                        >
                            публичной оферте
                        </Link>
                        , а условия доставки — на странице{" "}
                        <Link
                            href="/delivery"
                            className="text-[#21AA57] hover:underline"
                        >
                            «Доставка и оплата»
                        </Link>
                        .
                    </p>
                </section>
            </div>
        </main>
    );
}