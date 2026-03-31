"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Award, CheckCircle, Play, Users, Microscope, Beaker } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function AboutPage() {
    // Список видео интервью (на основе предоставленных ссылок)
    const partnerVideos = [
        { id: "juanosHBRnE", title: "История успеха и миссия" },
        { id: "cKMR7NddLFk", title: "Путь лидера EnergyMax" },
        { id: "TB1LebEObZw", title: "Медицинский взгляд на продукт" },
        { id: "5JI0pvzUdd4", title: "Трансформация жизни с холдингом" },
        { id: "akpYmTX8_oQ", title: "Бизнес и ценности компании" },
        { id: "MTWh4p4PiNI", title: "Официальное обращение" },
    ];

    return (
        <div className="min-h-screen bg-[#F4F7F5] pb-20">

            {/* 1. ГЛАВНЫЙ ЭКРАН С ПРЕЗЕНТАЦИЕЙ */}
            <section className="bg-[#29380E] pt-16 pb-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#21AA57]/10 rounded-full blur-[120px]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="inline-block bg-[#21AA57]/20 text-[#21AA57] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6 border border-[#21AA57]/30"
                    >
                        Международный холдинг
                    </motion.div>
                    <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                        EnergyMax <span className="text-[#21AA57]">Group</span>
                    </h1>

                    <div className="max-w-4xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/5">
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/7Jy9iyOBkOI"
                            title="EnergyMax Group" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* 2. БЛОК: КТО МЫ (КОНТЕНТ С САЙТА) */}
            <section className="py-16 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-5xl font-black text-[#29380E] uppercase italic mb-6 leading-tight">
                            Опережая <br /><span className="text-[#21AA57]">время</span>
                        </h2>
                        <p className="text-lg text-[#29380E]/80 leading-relaxed mb-6">
                            EnergyMax Group — это не просто сетевая компания. Это научно-производственное объединение, которое ставит своей целью возрождение здоровья нации через восстановление природного микробиома человека.
                        </p>
                        <p className="text-[#A8A496] leading-relaxed mb-8">
                            Мы владеем эксклюзивными правами на производство уникального пробиотика «Максилин», разработка которого велась десятилетиями советскими учеными и была доведена до совершенства современными биотехнологами.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <Users className="text-[#21AA57] mb-2" />
                                <div className="text-2xl font-black text-[#29380E]">500k+</div>
                                <div className="text-xs text-[#A8A496] uppercase font-bold">Партнеров</div>
                            </div>
                            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <Microscope className="text-[#21AA57] mb-2" />
                                <div className="text-2xl font-black text-[#29380E]">100%</div>
                                <div className="text-xs text-[#A8A496] uppercase font-bold">Научный подход</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-[#21AA57]/10 relative">
                        <div className="absolute -top-6 -right-6 bg-[#D4AF37] text-white p-6 rounded-3xl shadow-lg rotate-12 hidden md:block">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black text-[#29380E] mb-6 uppercase italic tracking-tighter border-b pb-4 border-gray-100">Научный совет</h3>
                        <p className="text-[#29380E]/70 mb-6">Продукция разрабатывается под контролем ведущих специалистов в области нутрициологии, гастроэнтерологии и биотехнологий.</p>
                        <ul className="space-y-4 font-bold text-[#29380E]">
                            <li className="flex items-start gap-3 italic"><CheckCircle className="text-[#21AA57] shrink-0" /> Контроль качества на уровне молекулярного анализа</li>
                            <li className="flex items-start gap-3 italic"><CheckCircle className="text-[#21AA57] shrink-0" /> Собственная база клинических исследований</li>
                            <li className="flex items-start gap-3 italic"><CheckCircle className="text-[#21AA57] shrink-0" /> Постоянное обновление линейки клеточного питания</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. ПРОИЗВОДСТВО (ВИДЕО С ЗАВОДА) */}
            <section className="py-20 bg-white border-y border-gray-100 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <Beaker className="text-[#21AA57] w-6 h-6" />
                                <span className="uppercase font-bold text-[#21AA57] tracking-widest text-sm">Технологии будущего</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-[#29380E] uppercase italic mb-6">Собственный <br />завод <span className="text-[#21AA57]">NRG-MAX</span></h2>
                            <p className="text-lg text-[#29380E]/70 leading-relaxed mb-6">
                                Производственные мощности расположены в экологически чистом регионе Казахстана. Завод соответствует международным стандартам <strong>GMP (Good Manufacturing Practice)</strong>.
                            </p>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-[#29380E] font-medium">
                                    <ShieldCheck className="text-[#21AA57]" /> Многоступенчатая очистка воды и воздуха
                                </div>
                                <div className="flex items-center gap-3 text-[#29380E] font-medium">
                                    <ShieldCheck className="text-[#21AA57]" /> Стерильные боксы класса А
                                </div>
                                <div className="flex items-center gap-3 text-[#29380E] font-medium">
                                    <ShieldCheck className="text-[#21AA57]" /> Сертификат Халал (МЦПС «Халал»)
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-[#F4F7F5] group relative">
                            <iframe
                                width="100%" height="100%"
                                src="https://www.youtube.com/embed/fU_dv5CObgw"
                                title="EnergyMax Production" frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ОСНОВАТЕЛИ И ЛИДЕРЫ (СЕТКА ИНТЕРВЬЮ) */}
            <section className="py-20 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-black text-[#29380E] uppercase italic mb-6 tracking-tighter">Основатели и <br /><span className="text-[#21AA57]">ключевые партнеры</span></h2>
                    <p className="text-[#A8A496] max-w-2xl mx-auto italic text-lg leading-relaxed">
                        «Мы создаем условия, в которых каждый человек может реализовать свой потенциал здоровья и успеха. EnergyMax — это семья.»
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* ГЛАВНОЕ ИНТЕРВЬЮ ПОД ИМЕНАМИ */}
                    <div className="bg-[#29380E] p-8 md:p-12 rounded-[4rem] shadow-2xl border border-white/5 mb-12 relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#21AA57]/20 rounded-full blur-[100px]"></div>
                        <div className="relative z-10">
                            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-lg border border-white/10 mb-8">
                                <iframe
                                    width="100%" height="100%"
                                    src="https://www.youtube.com/embed/tOZVD79Nr-c"
                                    title="Partners Interview Main" frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter flex items-center justify-center md:justify-start gap-3">
                                    <Play className="w-8 h-8 text-[#21AA57] fill-current" />
                                    Стратегия развития холдинга
                                </h3>
                                <p className="text-white/50 mt-2 text-sm uppercase tracking-[0.2em] font-bold">Интервью с топ-лидерами компании</p>
                            </div>
                        </div>
                    </div>

                    {/* СЕТКА С ДОПОЛНИТЕЛЬНЫМИ ИНТЕРВЬЮ (6 ВИДЕО) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partnerVideos.map((video, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-5 rounded-[2.5rem] shadow-lg border border-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all group"
                            >
                                <div className="aspect-video rounded-3xl overflow-hidden mb-5 relative shadow-inner">
                                    <iframe
                                        width="100%" height="100%"
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title} frameBorder="0"
                                        allowFullScreen
                                        className="group-hover:scale-105 transition-transform duration-700"
                                    ></iframe>
                                </div>
                                <div className="px-2">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-[2px] bg-[#21AA57]"></div>
                                        <span className="text-[10px] font-black text-[#21AA57] uppercase tracking-widest">Story {idx + 1}</span>
                                    </div>
                                    <h4 className="font-black text-[#29380E] text-xl uppercase italic tracking-tighter leading-tight group-hover:text-[#21AA57] transition-colors">
                                        {video.title}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}