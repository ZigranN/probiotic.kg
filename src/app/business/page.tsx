"use client";

export const dynamic = 'force-dynamic';

import { motion } from "framer-motion";
import {
    Zap,
    TrendingUp,
    Users,
    Wallet,
    Award,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/content";

// Временные данные маркетинг плана (TODO: перенести в content.ts)
const marketingPlan = {
    packages: [
        {
            id: 'starter',
            name: 'Стартовый',
            priceKgs: 5600,
            pv: 100,
            benefits: ['1 продукт на выбор', 'Доступ к обучению', 'Личный кабинет'],
        },
        {
            id: 'business',
            name: 'Бизнес',
            priceKgs: 16800,
            pv: 300,
            benefits: ['3 продукта', 'Маркетинг материалы', 'Менторская поддержка'],
        },
        {
            id: 'premium',
            name: 'Премиум',
            priceKgs: 56000,
            pv: 1000,
            benefits: ['10 продуктов', 'VIP поддержка', 'Максимальные бонусы'],
        },
    ],
};

export default function BusinessPage() {
    // Оставляем только 3 основных пакета для солидности
    const premiumPackages = marketingPlan.packages.filter(pkg => pkg.id !== 'small');

    return (
        <div className="min-h-screen bg-[#F4F7F5] pb-24">

            {/* 1. HERO СЕКЦИЯ */}
            <section className="relative pt-20 pb-16 overflow-hidden bg-[#29380E] text-white">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{backgroundImage: "url('/images/bg-leaves.jpg')"}}></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-full font-bold text-sm mb-6 border border-[#D4AF37]/30 uppercase tracking-widest"
                    >
                        <Zap className="w-4 h-4 fill-current" />
                        Бизнес-возможности EnergyMax Group
                    </motion.div>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 font-heading tracking-tight italic uppercase leading-none">
                        Твой путь к <span className="text-[#21AA57]">финансовой</span> свободе
                    </h1>
                    <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Станьте партнером международного холдинга и получайте вознаграждения в рамках инновационного маркетинга.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-14 relative z-20">

                {/* 2. ПАКЕТЫ ВХОДА (3 КРУПНЫХ КАРТОЧКИ) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-center">
                    {premiumPackages.map((pkg, idx) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            className={`bg-white rounded-[3rem] p-10 shadow-2xl border-4 transition-all hover:-translate-y-3 flex flex-col relative overflow-hidden ${
                                pkg.id === 'vip' ? 'border-[#21AA57] md:scale-105 z-10 py-14' : 'border-transparent'
                            }`}
                        >
                            {/* Метка для VIP */}
                            {pkg.id === 'vip' && (
                                <div className="absolute top-0 right-0 bg-[#21AA57] text-white px-6 py-2 rounded-bl-3xl font-bold text-xs uppercase tracking-widest">
                                    Самый выгодный
                                </div>
                            )}

                            <h3 className="text-3xl font-black text-[#29380E] mb-4 uppercase italic tracking-tighter">{pkg.name}</h3>

                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-5xl font-black text-[#21AA57]">${pkg.priceKgs}</span>
                            </div>

                            <div className="text-[#A8A496] font-bold text-sm uppercase tracking-widest mb-8 pb-4 border-b border-gray-100">
                                {pkg.pv} PV
                            </div>

                            <ul className="space-y-5 mb-10 flex-grow">
                                {pkg.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-base text-[#29380E]/80">
                                        <CheckCircle2 className="w-6 h-6 text-[#21AA57] flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/${siteConfig.whatsappPhone}?text=Здравствуйте! Хочу стать партнером на пакет ${pkg.name}`}
                                target="_blank"
                                className={`w-full py-5 rounded-2xl font-black text-lg uppercase tracking-tighter transition-all text-center ${
                                    pkg.id === 'vip'
                                        ? 'bg-[#21AA57] text-white shadow-xl shadow-[#21AA57]/30 hover:bg-[#1d914a]'
                                        : 'bg-[#F4F7F5] text-[#29380E] hover:bg-[#29380E] hover:text-white'
                                }`}
                            >
                                Выбрать {pkg.name}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* 3. РАЗБОР МАРКЕТИНГА (ВИДЕО) */}
                <section className="py-12 md:py-20">
                    <div className="bg-[#29380E] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/5">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-[#21AA57]/10 rounded-full blur-[100px]"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-none mb-6 tracking-tighter">
                                    Разбор <br/><span className="text-[#21AA57]">маркетинга</span>
                                </h2>
                                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                    Посмотрите подробные видео о том, как работает бинарная система, как начисляются PV и как выйти на стабильный доход.
                                </p>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Реферальный бонус 20-40%",
                                        "Бинарный бонус до 24%",
                                        "Кэшбэк до 100% за покупки"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="w-2 h-2 bg-[#21AA57] rounded-full shadow-[0_0_10px_#21AA57]"></div>
                                            <span className="font-medium text-white/90">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 w-full">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                                    <iframe
                                        width="100%" height="100%"
                                        src="https://www.youtube.com/embed/0Ci4Ppip66Q"
                                        title="EnergyMax Marketing 1" frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                                    <iframe
                                        width="100%" height="100%"
                                        src="https://www.youtube.com/embed/5HrKAeG4Y9I"
                                        title="EnergyMax Marketing 2" frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. ПРЕИМУЩЕСТВА И ФОРМА */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#29380E] mb-10 uppercase italic leading-none">
                            Почему выбирают <br/><span className="text-[#21AA57]">наш маркетинг?</span>
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm border border-[#A8A496]/10 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-[#21AA57]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#21AA57] group-hover:text-white transition-colors">
                                    <Users className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-black text-[#29380E] text-xl mb-1 uppercase italic tracking-tighter">Бинарная система</h4>
                                    <p className="text-[#A8A496] text-sm leading-relaxed">Зарабатывайте с двух структур одновременно</p>
                                </div>
                            </div>
                            <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm border border-[#A8A496]/10 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-[#21AA57]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#21AA57] group-hover:text-white transition-colors">
                                    <TrendingUp className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-black text-[#29380E] text-xl mb-1 uppercase italic tracking-tighter">Быстрый старт</h4>
                                    <p className="text-[#A8A496] text-sm leading-relaxed">Начните зарабатывать уже с первой недели</p>
                                </div>
                            </div>
                            <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm border border-[#A8A496]/10 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-[#21AA57]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#21AA57] group-hover:text-white transition-colors">
                                    <Wallet className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-black text-[#29380E] text-xl mb-1 uppercase italic tracking-tighter">До 14% бонуса</h4>
                                    <p className="text-[#A8A496] text-sm leading-relaxed">Максимальный процент в индустрии</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#29380E] rounded-[4rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/5">
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#21AA57]/20 rounded-full blur-[100px]"></div>
                        <h3 className="text-3xl md:text-5xl font-black mb-6 relative z-10 leading-none tracking-tighter italic uppercase">Начни свой <br/><span className="text-[#21AA57]">бизнес сегодня</span></h3>
                        <p className="text-white/60 mb-10 relative z-10 text-lg">
                            Оставьте свои данные, и я лично проведу для вас презентацию маркетинга.
                        </p>

                        <div className="space-y-5 relative z-10">
                            <input type="text" placeholder="Ваше имя" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-[#21AA57] transition-all text-lg" />
                            <input type="text" placeholder="Ваш телефон (WhatsApp)" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-[#21AA57] transition-all text-lg" />
                            <button className="w-full bg-[#21AA57] hover:bg-[#1d914a] text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-[#21AA57]/40 transition-all flex items-center justify-center gap-3 active:scale-95 uppercase tracking-tighter">
                                Получить консультацию
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="mt-8 text-center opacity-30 text-xs uppercase tracking-widest">
                            Выгодные условия для партнёров
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}