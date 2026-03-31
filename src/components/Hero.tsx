"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BotMessageSquare } from "lucide-react";
import Image from "next/image";
import { landing } from "@/lib/content";

const promoSlides = [
    { id: 1, name: "Максилин для семьи", image: "/images/img_4408.png" },
    { id: 2, name: "Энергия L-Аргинина", image: "/images/img_4409.png" },
    { id: 3, name: "Деликатная поддержка", image: "/images/img_4410.png" },
    { id: 4, name: "Клеточное питание", image: "/images/img_4411.png" },
    { id: 4, name: "Женское здоровье ", image: "/images/svechiKartochka.jpeg" },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % promoSlides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const currentSlide = promoSlides[currentIndex];

    return (
        <section className="relative pt-4 pb-6 md:pt-8 md:pb-10 overflow-hidden flex items-center border-b border-gray-100/50">
            <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8">
                {/* Текст слева */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className="uppercase tracking-[0.2em] text-[#D4AF37] font-bold text-[10px]">
                            {landing.hero.badge}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#29380E] leading-[1.1] mb-3">
                        Живой пробиотик <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#21AA57] to-[#405E0D]">Максилин</span>
                    </h1>
                    <p className="text-sm md:text-base text-[#29380E]/70 mb-6 max-w-lg leading-relaxed lg:border-l-4 border-[#21AA57] lg:pl-5">
                        {landing.hero.subtitle}
                    </p>
                    <div className="flex gap-3 hidden lg:flex">
                        <a href="#catalog" className="bg-[#21AA57] text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2">
                            {landing.hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
                        </a>
                        <button className="bg-white/80 backdrop-blur-md px-8 py-3 rounded-full font-bold text-[#29380E] text-sm flex items-center gap-2 border border-[#A8A496]/20">
                            <BotMessageSquare className="w-5 h-5 text-[#21AA57]" /> Консультация
                        </button>
                    </div>
                </motion.div>

                {/* Карусель */}
                <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[320px] md:h-[450px]">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentSlide.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-full flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image src={currentSlide.image} alt={currentSlide.name} fill className="object-contain drop-shadow-xl" />
                            </div>
                            <h3 className="text-xl md:text-3xl font-bold text-[#29380E] italic uppercase mt-2">
                                {currentSlide.name}
                            </h3>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}