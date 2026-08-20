import Image from "next/image";
import Link from "next/link";
import { BotMessageSquare, CheckCircle } from "lucide-react";

import Catalog from "@/components/Catalog";
import Hero from "@/components/Hero";
import { seller } from "@/config/seller";

export default function Home() {
    const whatsappUrl = `https://wa.me/${seller.whatsappPhone}`;

    return (
        <main className="relative flex flex-col bg-[#F4F7F5]">
            <Hero />

            {/* Каталог */}
            <section
                id="catalog"
                aria-label="Каталог товаров"
                className="relative z-20 bg-white py-2 shadow-sm"
            >
                <Catalog />
            </section>

            {/* Консультация */}
            <section className="bg-gradient-to-b from-white to-[#F4F7F5] py-8 md:py-10">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="flex flex-col items-center gap-6 rounded-3xl border border-[#21AA57]/5 bg-white p-4 shadow-sm md:p-8 lg:flex-row">
                        <div className="relative h-32 w-32 flex-shrink-0 md:h-44 md:w-44">
                            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gray-50 shadow-lg">
                                <Image
                                    src="/images/nargiz.JPG"
                                    alt="Наргиз Мамытова — консультант интернет-магазина probiotic.kg"
                                    fill
                                    sizes="(max-width: 768px) 128px, 176px"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-grow text-center lg:text-left">
                            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 px-3 py-1 text-[10px] font-bold text-[#AA8529]">
                                <CheckCircle
                                    className="h-3 w-3"
                                    aria-hidden="true"
                                />
                                Консультация по ассортименту
                            </div>

                            <h2 className="mb-1 text-2xl leading-tight font-extrabold text-[#29380E] uppercase italic md:text-3xl">
                                Наргиз Мамытова
                            </h2>

                            <p className="mb-4 max-w-xl text-sm leading-relaxed text-[#29380E]/80 md:text-base">
                                Помогу разобраться в ассортименте, наличии,
                                оформлении заказа и условиях доставки.
                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#21AA57] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#405E0D]"
                            >
                                <BotMessageSquare
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                                Написать в WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* О компании */}
            <section className="border-t border-gray-50 bg-white py-8 md:py-10">
                <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:px-12 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-3 text-2xl leading-tight font-extrabold text-[#29380E] uppercase italic md:text-4xl">
                            О продукции{" "}
                            <span className="text-[#21AA57]">
                                EnergyMax
                            </span>
                        </h2>

                        <p className="mb-4 text-sm leading-relaxed text-[#29380E]/80 md:text-base">
                            На сайте представлен ассортимент продукции
                            EnergyMax. Информация о составе, способе применения,
                            условиях хранения и противопоказаниях размещается на
                            странице конкретного товара и на его упаковке.
                        </p>

                        <Link
                            href="/about"
                            className="inline-flex rounded-xl border border-[#21AA57] px-6 py-3 text-sm font-bold text-[#21AA57] transition-colors hover:bg-[#21AA57] hover:text-white"
                        >
                            Подробнее о магазине
                        </Link>
                    </div>

                    <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-md lg:w-1/2">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/7Jy9iyOBkOI"
                            title="Информация об EnergyMax"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            {/* Партнёрство */}
            <section className="bg-[#29380E] px-4 py-12 text-center text-white">
                <h2 className="mb-4 text-3xl font-black uppercase italic">
                    Партнёрская программа
                </h2>

                <p className="mx-auto mb-6 max-w-xl text-sm text-white/70">
                    Информация об условиях участия и партнёрской программе
                    размещена на отдельной странице.
                </p>

                <Link
                    href="/business"
                    className="inline-flex rounded-xl bg-[#D4AF37] px-8 py-3 font-bold tracking-widest text-white uppercase transition-opacity hover:opacity-90"
                >
                    Узнать больше
                </Link>
            </section>
        </main>
    );
}