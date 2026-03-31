import Link from "next/link";
import { ArrowLeft, BookOpen, AlertCircle } from "lucide-react";
import { notFound } from "next/navigation";

// База знаний из content.ts (копируем структуру)
const SCENARIO_WHY: Record<string, any> = {
    bloating: {
        title: "Почему бывает вздутие и дискомфорт",
        blocks: [
            {
                h: "Что часто стоит за этим",
                p: [
                    "Перегрузка ЖКТ: быстрые углеводы, переедание, газированные напитки.",
                    "Снижение ферментативной поддержки.",
                    "Стресс и недосып.",
                ],
            },
            {
                h: "Что можно делать базово",
                p: [
                    "Замедлить темп еды, пить воду.",
                    "Отслеживать триггеры.",
                    "Если симптомы сильные — обсудить с врачом.",
                ],
            },
        ],
        note: "Информация справочная и не заменяет консультацию специалиста.",
    },
    stool: {
        title: "Почему бывает нестабильный стул",
        blocks: [
            {
                h: "Основные причины",
                p: [
                    "Смена питания/режима, недостаток воды и клетчатки.",
                    "Стресс, поездки, нерегулярный сон.",
                ],
            },
            {
                h: "Базовая поддержка",
                p: [
                    "Вода + регулярность питания.",
                    "Мягкая корректировка рациона без крайностей.",
                ],
            },
        ],
        note: "Информация справочная и не является медицинским назначением.",
    },
    immunity: {
        title: "Почему снижается иммунная устойчивость",
        blocks: [
            {
                h: "Что влияет чаще всего",
                p: [
                    "Недосып, стресс, дефицит белка, низкая активность.",
                    "Сезонные факторы.",
                ],
            },
            {
                h: "Что помогает базово",
                p: ["Сон 7–9 часов, белок, прогулки.", "Сбалансированное питание и регулярность."],
            },
        ],
    },
    energy: {
        title: "Почему падает энергия",
        blocks: [
            {
                h: "Типовые причины",
                p: [
                    "Недосып и перегрузка нервной системы.",
                    "Скачки сахара из-за питания.",
                ],
            },
            {
                h: "База",
                p: ["Сон, вода, прогулки, меньше сахара."],
            },
        ],
    },
    women: {
        title: "Почему бывает женский дискомфорт",
        blocks: [
            {
                h: "Что может влиять",
                p: [
                    "Гормональные колебания, стресс.",
                    "Перенесённые воспаления и изменения микрофлоры.",
                ],
            },
            {
                h: "Что важно",
                p: [
                    "Не игнорировать симптомы.",
                    "Бережный уход и регулярность привычек.",
                ],
            },
        ],
    },
    kids: {
        title: "Почему у детей часто реагирует живот",
        blocks: [
            {
                h: "Частые факторы",
                p: [
                    "Смена питания, режим, сладкое, стресс/садик/школа.",
                ],
            },
            {
                h: "Что делать базово",
                p: [
                    "Режим, вода, спокойный приём пищи.",
                ],
            },
        ],
    },
    microbiome: {
        title: "Микробиом: что это и почему кишечник влияет на всё",
        blocks: [
            {
                h: "Что такое микробиом простыми словами",
                p: [
                    "Микробиом — это \"экосистема\" микроорганизмов (бактерии, дрожжи и др.), которые живут в кишечнике.",
                    "Он работает как \"внутренний город\": помогает перевариванию, делает витамины, обучает иммунитет.",
                ],
            },
            {
                h: "Интересные факты про кишечник и микробиом",
                p: [
                    "Самая большая \"плотность\" микробов — в толстом кишечнике.",
                    "Микробиом участвует в синтезе витаминов B и K.",
                    "Стресс реально меняет моторику и микрофлору: ось «кишечник–мозг» работает в обе стороны.",
                    "Качество сна влияет на микробиом, а микробиом — на качество сна.",
                    "Антибиотики могут снижать разнообразие микрофлоры.",
                    "Микробиом связан с кожей через воспалительные каскады (ось кишечник–кожа).",
                ],
            },
            {
                h: "Где здесь пробиотики логично вписываются",
                p: [
                    "Пробиотики — это не замена питанию, а дополнительная поддержка микрофлоры, особенно когда есть перегрузка режимом, стрессом или после антибиотиков.",
                ],
            },
        ],
        note: "Информация из книги «Кишечник и мозг». Носит ознакомительный характер.",
    },
};

export default async function BlogArticlePage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const article = SCENARIO_WHY[slug];

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Навигация */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#21AA57] hover:text-[#1a8a46] transition mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Назад к статьям
                </Link>

                {/* Заголовок */}
                <div className="bg-white rounded-2xl p-8 mb-8">
                    <div className="w-16 h-16 bg-[#F4F7F5] rounded-full flex items-center justify-center mb-6">
                        <BookOpen className="w-8 h-8 text-[#21AA57]" />
                    </div>
                    <h1 className="text-4xl font-bold text-[#29380E] mb-4">{article.title}</h1>
                    <p className="text-gray-600">
                        Информация носит справочный характер и не заменяет консультацию специалиста.
                    </p>
                </div>

                {/* Контент */}
                <div className="space-y-6">
                    {article.blocks.map((block: any, index: number) => (
                        <div key={index} className="bg-white rounded-2xl p-8">
                            <h2 className="text-2xl font-semibold text-[#29380E] mb-4">{block.h}</h2>
                            <ul className="space-y-3">
                                {block.p.map((point: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#21AA57] rounded-full mt-2 flex-shrink-0" />
                                        <p className="text-gray-600 leading-relaxed">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Примечание */}
                {article.note && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-8">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-yellow-800">{article.note}</p>
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-r from-[#21AA57] to-[#1a8a46] rounded-2xl p-8 text-white text-center mt-8">
                    <h3 className="text-2xl font-bold mb-4">Хотите узнать больше?</h3>
                    <p className="mb-6">
                        Свяжитесь с нами для персональной консультации по выбору пробиотиков
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/#catalog"
                            className="px-6 py-3 bg-white text-[#21AA57] rounded-full font-medium hover:bg-gray-100 transition"
                        >
                            Смотреть товары
                        </Link>
                        <a
                            href="https://wa.me/996990105555"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition border border-white/30"
                        >
                            Написать в WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
