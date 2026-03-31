import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

const articles = [
    {
        slug: "microbiome",
        title: "Микробиом: что это и почему кишечник влияет на всё",
        description: "Что такое микробиом, интересные факты про кишечник и как пробиотики вписываются в систему здоровья",
        category: "База знаний",
        image: "/images/blog/microbiome.jpg",
        date: "15 марта 2026",
    },
    {
        slug: "bloating",
        title: "Почему бывает вздутие и дискомфорт",
        description: "Разбираем частые причины вздутия и что можно делать базово для комфорта пищеварения",
        category: "Здоровье ЖКТ",
        image: "/images/blog/bloating.jpg",
        date: "10 марта 2026",
    },
    {
        slug: "immunity",
        title: "Почему снижается иммунная устойчивость",
        description: "Что влияет на иммунитет и как базово поддержать иммунную систему в повседневной жизни",
        category: "Иммунитет",
        image: "/images/blog/immunity.jpg",
        date: "5 марта 2026",
    },
    {
        slug: "energy",
        title: "Почему падает энергия",
        description: "Типовые причины усталости и базовые привычки для поддержания энергии в течение дня",
        category: "Энергия",
        image: "/images/blog/energy.jpg",
        date: "1 марта 2026",
    },
    {
        slug: "women",
        title: "Почему бывает женский дискомфорт",
        description: "Деликатные вопросы женского здоровья: что может влиять и что важно не игнорировать",
        category: "Женское здоровье",
        image: "/images/blog/women.jpg",
        date: "25 февраля 2026",
    },
    {
        slug: "kids",
        title: "Почему у детей часто реагирует живот",
        description: "Частые факторы детского дискомфорта и что делать базово для комфорта ребенка",
        category: "Детское здоровье",
        image: "/images/blog/kids.jpg",
        date: "20 февраля 2026",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-[#21AA57] rounded-full flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-[#29380E] mb-4">
                        База знаний о здоровье
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Полезные статьи о микробиоме, пищеварении, иммунитете и здоровье.
                        Информация носит справочный характер.
                    </p>
                </div>

                {/* Список статей */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition group"
                        >
                            <div className="h-48 bg-gradient-to-br from-[#21AA57]/20 to-[#29380E]/10 flex items-center justify-center">
                                <BookOpen className="w-16 h-16 text-[#21AA57] opacity-50" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-medium px-3 py-1 bg-[#F4F7F5] text-[#29380E] rounded-full">
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-gray-500">{article.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-[#29380E] mb-2 group-hover:text-[#21AA57] transition">
                                    {article.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                                <div className="flex items-center gap-2 text-[#21AA57] font-medium text-sm group-hover:gap-3 transition-all">
                                    Читать статью
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-12 bg-white rounded-2xl p-6 text-center">
                    <p className="text-sm text-gray-600">
                        <strong className="text-[#29380E]">Важно:</strong> Информация носит справочный
                        характер и не заменяет консультацию специалиста. При наличии симптомов обратитесь
                        к врачу.
                    </p>
                </div>
            </div>
        </div>
    );
}
