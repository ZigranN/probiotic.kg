"use client";

export const dynamic = 'force-dynamic';

import { motion } from "framer-motion";
import {
    Cpu,
    Instagram,
    Video,
    Rocket,
    CheckCircle,
    ArrowRight,
    BrainCircuit,
    Terminal,
    Sparkles
} from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

const benefits = [
    {
        title: "Нейросети для бизнеса",
        desc: "Научу использовать ChatGPT и Midjourney для создания контента, который продает за тебя 24/7.",
        icon: <BrainCircuit className="w-8 h-8 text-[#21AA57]" />
    },
    {
        title: "Instagram с нуля",
        desc: "Упаковка профиля, Reels, сторис и алгоритмы продвижения без вложений в рекламу.",
        icon: <Instagram className="w-8 h-8 text-[#21AA57]" />
    },
    {
        title: "Автоматизация (AI)",
        desc: "Внедрение ИИ-консультантов, которые будут отвечать клиентам и прогревать базу.",
        icon: <Cpu className="w-8 h-8 text-[#21AA57]" />
    },
    {
        title: "Современный онлайн-МЛМ",
        desc: "Забудь про списки знакомых. Только входящий поток заявок через личный бренд.",
        icon: <Rocket className="w-8 h-8 text-[#21AA57]" />
    }
];

export default function MentorshipPage() {
    return (
        <div className="min-h-screen bg-[#F4F7F5] pb-24">

            {/* HERO BLOCK */}
            <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-[#29380E] to-[#1a2408] text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/grid.svg')]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-3/5 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 bg-[#21AA57]/20 text-[#21AA57] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6"
                            >
                                <Terminal className="w-4 h-4" />
                                Обучение нового поколения
                            </motion.div>
                            <h1 className="text-4xl md:text-7xl font-black mb-6 font-heading tracking-tight uppercase italic leading-none">
                                Стань <span className="text-[#21AA57]">Digital</span> <br /> сетевиком
                            </h1>
                            <p className="text-lg md:text-2xl text-white/70 max-w-2xl leading-relaxed mb-8">
                                Я не просто строю команду, я обучаю партнеров зарабатывать онлайн, используя нейросети, искусственный интеллект и современные методы продвижения.
                            </p>
                        </div>

                        <div className="w-full lg:w-2/5 flex justify-center">
                            <div className="relative w-120 h-120 md:w-96 md:h-96">
                                <div className="absolute inset-0 bg-[#21AA57] rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                                <div className="relative w-full h-full rounded-[3rem] border-4 border-white/10 overflow-hidden shadow-2xl rotate-3">
                                    <Image src="/images/nargiz.JPG" alt="Наргиз Мамытова" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT YOU GET */}
            <section className="container mx-auto px-6 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-white hover:border-[#21AA57]/30 transition-all group"
                        >
                            <div className="mb-6 bg-[#F4F7F5] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-black text-[#29380E] mb-3 uppercase italic tracking-tighter">{item.title}</h3>
                            <p className="text-[#A8A496] text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SYSTEM DESCRIPTION */}
            <section className="py-24 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-black text-[#29380E] mb-8 uppercase italic leading-none">
                            Чему я тебя <br /><span className="text-[#21AA57]">научу бесплатно?</span>
                        </h2>
                        <ul className="space-y-6">
                            {[
                                "Как создать контент-план на месяц за 15 минут с помощью ИИ.",
                                "Секреты Reels: как попадать в рекомендации и получать заявки.",
                                "Настройка автоворонок в Telegram и WhatsApp.",
                                "Психология онлайн-продаж и работа с возражениями.",
                                "Масштабирование команды через онлайн-инструменты."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 bg-[#21AA57] rounded-full p-1">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[#29380E] font-medium text-lg">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-1/2 bg-[#29380E] rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[100px]"></div>
                        <Sparkles className="w-12 h-12 text-[#D4AF37] mb-6" />
                        <h3 className="text-3xl font-black mb-6 italic uppercase">Твоя точка роста</h3>
                        <p className="text-white/60 mb-8 text-lg">
                            Мир изменился. Тот, кто сегодня не использует нейросети — завтра останется за бортом. Я дам тебе пошаговый алгоритм, как стать лидером рынка, работая из дома.
                        </p>
                        <a
                            href={`https://wa.me/${siteConfig.whatsappPhone}?text=Наргиз, хочу в твою команду! Обучи меня онлайн-бизнесу.`}
                            className="inline-flex w-full items-center justify-center gap-3 bg-[#21AA57] hover:bg-[#1d914a] text-white py-5 rounded-2xl font-black text-xl uppercase tracking-tighter transition-all"
                        >
                            Хочу в команду
                            <ArrowRight className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}