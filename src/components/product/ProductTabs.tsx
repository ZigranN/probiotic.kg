"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductTabs({ product }: { product: any }) {
    const [activeTab, setActiveTab] = useState("description");

    const tabs = [
        { id: "description", label: "Описание" },
        { id: "composition", label: "Состав" },
        { id: "usage", label: "Как принимать" },
    ];

    const content: any = {
        description: product.description,
        composition: product.composition || "Секретный штамм ацидофильных бактерий, устойчивых к антибиотикам.",
        usage: product.howToUse ? (product.howToUse as string[]).join(". ") : "Индивидуально, согласно консультации эксперта.",
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-8 py-4 text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap relative ${
                            activeTab === tab.id ? "text-[#21AA57]" : "text-gray-400"
                        }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-[#21AA57] rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-lg text-[#29380E]/70 leading-relaxed font-light"
                >
                    {content[activeTab]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}