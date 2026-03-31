"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown, ShieldAlert, Activity, Droplets,
    Wind, Bone, Stethoscope, Play, X, Heart, Brain
} from "lucide-react";
import { siteConfig } from "@/lib/content";

// База симптомов для разворота
const healthIssues = [
    {
        id: "acne",
        title: "Акне и высыпания",
        icon: <Droplets className="text-pink-500" />,
        short: "Кожа — зеркало кишечника. Токсины, которые не вывел ЖКТ, выходят через поры.",
        detail: "80% случаев акне связаны с синдромом 'дырявого кишечника'. Когда полезных лактобактерий мало, стенки кишечника пропускают токсины в кровь. Максилин заселяет флору устойчивым штаммом, который подавляет патогены. Чистый кишечник = чистая кожа.",
        recommendation: "Курс Максилина (жидкий) + Витграс для детокса."
    },
    {
        id: "bloating",
        title: "Вздутие и запоры",
        icon: <Wind className="text-blue-400" />,
        short: "Дискомфорт — признак того, что еда гниет, а не переваривается.",
        detail: "Вздутие возникает из-за избыточного бактериального роста. Максилин создает кислую среду, в которой плохие бактерии (кандида и др.) гибнут, а ваши родные — процветают. Тяжесть уходит уже в первые дни.",
        recommendation: "Максилин жидкий за 30 мин до еды."
    },
    {
        id: "liver",
        title: "Жировой гепатоз",
        icon: <ShieldAlert className="text-red-500" />,
        short: "Печень устает фильтровать яды из 'грязного' кишечника.",
        detail: "Когда мы восстанавливаем микробиом, печень перестает работать на износ. L-аргинин улучшает микроциркуляцию в тканях печени, запуская процесс регенерации клеток.",
        recommendation: "L-Аргинин + Витграс + Максилин."
    },
    {
        id: "arthritis",
        title: "Артриты и суставы",
        icon: <Bone className="text-gray-500" />,
        short: "Аутоиммунные атаки на суставы часто начинаются в воспаленном кишечнике.",
        detail: "Воспалительные белки из ЖКТ попадают в кровь и оседают в суставах. Убирая очаг воспаления в кишечнике, мы снижаем нагрузку на суставы.",
        recommendation: "Максилин + L-Аргинин (мята/гвоздика)."
    }
];

// Все твои видео по категориям
const mainVideoId = "QTi6Z4V34V4"; // Главное про микробиом
const secondaryVideoId = "_129taDqh80"; // Коротко о главном

const usefulVideos = [
    { id: "g4K5FHhzO7g", title: "Как работают пробиотики" },
    { id: "PNlvGSucfAY", title: "Научное обоснование" }
];

const reviewVideos = [
    { id: "nfO1lWTpDlo", title: "Результат при псориазе" },
    { id: "6ufinHbj-bY", title: "Иммунитет ребенка" },
    { id: "PNlvGSucfAY", title: "Женское здоровье" },
    { id: "0Z9pcIp2x0w", title: "Диабет и ЖКТ" },
    { id: "J9x7K_GvW5M", title: "Общий результат курса" }
];

export default function InfoPage() {
    const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#F4F7F5] pb-32">

            {/* ШАПКА */}
            <section className="bg-[#29380E] pt-12 pb-20 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/grid.svg')]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                        База <span className="text-[#21AA57]">Знаний</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Всё о микробиоме, биохакинге и продуктах EnergyMax на основе знаний Назгуль Асановны и мировых бестселлеров.
                    </p>
                </div>
            </section>

            {/* ГЛАВНОЕ ВИДЕО */}
            <section className="container mx-auto px-6 -mt-12 relative z-20">
                <div className="max-w-4xl mx-auto aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-black">
                    <iframe
                        width="100%" height="100%"
                        src={`https://www.youtube.com/embed/${mainVideoId}`}
                        frameBorder="0" allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* СИМПТОМЫ */}
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-black text-[#29380E] uppercase italic mb-10 text-center tracking-tight">
                    Разбор ваших <span className="text-[#21AA57]">симптомов</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {healthIssues.map((issue) => (
                        <motion.div
                            key={issue.id}
                            onClick={() => setSelectedIssue(issue.id)}
                            className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 cursor-pointer hover:shadow-xl transition-all group"
                        >
                            <div className="w-12 h-12 bg-[#F4F7F5] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {issue.icon}
                            </div>
                            <h3 className="text-xl font-black text-[#29380E] uppercase italic mb-2">{issue.title}</h3>
                            <p className="text-sm text-[#A8A496] leading-relaxed line-clamp-2">{issue.short}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ПОЛЕЗНЫЕ ВИДЕО */}
            <section className="py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl font-black text-[#29380E] uppercase italic mb-6">Коротко о <span className="text-[#21AA57]">главном</span></h2>
                            <p className="text-lg text-[#29380E]/70 leading-relaxed mb-8">Посмотрите эти разборы, чтобы понять глубинные процессы восстановления организма.</p>
                            <div className="space-y-4">
                                {usefulVideos.map((v) => (
                                    <div key={v.id} className="flex items-center gap-3 font-bold text-[#29380E] text-sm uppercase italic">
                                        <Play className="w-4 h-4 text-[#21AA57] fill-current" /> {v.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            <div className="aspect-video rounded-3xl overflow-hidden shadow-lg bg-black border-4 border-[#F4F7F5]">
                                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${secondaryVideoId}`} frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="aspect-video rounded-3xl overflow-hidden shadow-lg bg-black border-4 border-[#F4F7F5]">
                                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${usefulVideos[0].id}`} frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ВИДЕО-ОТЗЫВЫ */}
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-black text-[#29380E] text-center uppercase italic mb-16 tracking-tighter">
                    Результаты и <span className="text-[#21AA57]">отзывы</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reviewVideos.map((video) => (
                        <div key={video.id} className="group">
                            <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-xl bg-black mb-6 relative border border-gray-100">
                                <iframe
                                    width="100%" height="100%"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    frameBorder="0" allowFullScreen
                                ></iframe>
                            </div>
                            <h4 className="font-bold text-[#29380E] uppercase text-sm italic px-4 flex items-center gap-2">
                                <Play className="w-3 h-3 text-[#21AA57] fill-current" /> {video.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* МОДАЛКА (СИМПТОМЫ) */}
            <AnimatePresence>
                {selectedIssue && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedIssue(null)} className="fixed inset-0 bg-[#29380E]/90 backdrop-blur-md z-[100]" />
                        <motion.div layoutId={selectedIssue} className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-xl bg-white z-[110] rounded-[3rem] p-10 shadow-2xl">
                            <button onClick={() => setSelectedIssue(null)} className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full"><X className="w-4 h-4" /></button>
                            <h2 className="text-3xl font-black text-[#29380E] uppercase italic mb-6">{healthIssues.find(i => i.id === selectedIssue)?.title}</h2>
                            <p className="text-lg text-[#29380E]/70 mb-8 leading-relaxed">{healthIssues.find(i => i.id === selectedIssue)?.detail}</p>
                            <div className="bg-[#21AA57]/10 p-6 rounded-2xl mb-8">
                                <span className="text-[#21AA57] font-black uppercase text-xs block mb-2">Рекомендация:</span>
                                <p className="font-bold text-[#29380E]">{healthIssues.find(i => i.id === selectedIssue)?.recommendation}</p>
                            </div>
                            <a href={`https://wa.me/${siteConfig.whatsappPhone}`} className="block w-full bg-[#21AA57] text-white py-4 rounded-2xl font-bold text-center">Записаться на чек-ап</a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}