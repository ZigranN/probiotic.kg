"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    images: { src: string; alt: string }[];
    heroTag?: string | null;
}

export default function ProductGallery({ images, heroTag }: Props) {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Главное изображение */}
            <div className="relative aspect-square rounded-[2.5rem] bg-[#F4F7F5] overflow-hidden border border-gray-100 flex items-center justify-center">
                {heroTag && (
                    <span className="absolute top-6 left-6 bg-[#D4AF37] text-white text-[10px] font-bold uppercase px-4 py-2 rounded-full z-10 shadow-lg">
            {heroTag}
          </span>
                )}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIdx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-full h-full p-10"
                    >
                        <Image
                            src={images[activeIdx].src}
                            alt={images[activeIdx].alt}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Миниатюры (Thumbnails) */}
            {images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar justify-center md:justify-start">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIdx(idx)}
                            className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                                activeIdx === idx
                                    ? "border-[#21AA57] bg-white shadow-md scale-105"
                                    : "border-transparent bg-gray-50 opacity-60 hover:opacity-100"
                            }`}
                        >
                            <Image
                                src={img.src}
                                alt={`Миниатюра ${idx}`}
                                fill
                                className="object-contain p-2"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}