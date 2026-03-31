import Catalog from "@/components/Catalog";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, BotMessageSquare } from "lucide-react";

export default function Home() {
    return (
        <div className="relative flex flex-col bg-[#F4F7F5]">

            {/* Секция Hero (Теперь это клиентский компонент внутри серверного - так МОЖНО) */}
            <Hero />

            {/* Каталог (Серверный компонент с Prisma - теперь НЕ БУДЕТ ошибки) */}
            <div className="py-2 bg-white shadow-sm relative z-20">
                <Catalog />
            </div>

            {/* Секция Наргиз */}
            <section className="py-8 md:py-10 bg-gradient-to-b from-white to-[#F4F7F5]">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="bg-white rounded-3xl shadow-sm p-4 md:p-8 flex flex-col lg:flex-row items-center gap-6 border border-[#21AA57]/5">
                        <div className="w-32 h-32 md:w-44 md:h-44 flex-shrink-0 relative">
                            <div className="relative w-full h-full rounded-full border-2 border-white overflow-hidden bg-gray-50 flex items-center justify-center shadow-lg">
                                <Image src="/images/nargiz.JPG" alt="Наргиз Мамытова" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="text-center lg:text-left flex-grow">
                            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#AA8529] px-3 py-1 rounded-full font-bold text-[10px] mb-2">
                                <CheckCircle className="w-3 h-3" /> Официальный партнер
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#29380E] mb-1 leading-tight uppercase italic">Наргиз Мамытова</h2>
                            <p className="text-sm md:text-base text-[#29380E]/80 leading-relaxed mb-4 max-w-xl italic">
                                Сертифицированный консультант. Сопровождаю каждого клиента до реального результата!
                            </p>
                            <a href={`https://wa.me/996990105555`} className="inline-flex bg-[#21AA57] text-white px-6 py-2.5 rounded-xl font-bold text-sm items-center gap-2 hover:bg-[#405E0D] transition-all">
                                <BotMessageSquare className="w-4 h-4" /> Консультация
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Остальные секции (История, Бизнес и т.д.) */}
            <section className="py-8 md:py-5 bg-white border-t border-gray-50">
                <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#29380E] mb-3 leading-tight uppercase italic">
                            История успеха <span className="text-[#21AA57]">EnergyMax</span>
                        </h2>
                        <p className="text-sm md:text-base text-[#29380E]/80 mb-4 leading-relaxed">
                            Философия здоровья, основанная на биотехнологиях и силах природы. Производство по стандартам GMP и Халал.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-md">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7Jy9iyOBkOI" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-[#29380E] text-white text-center">
                <h2 className="text-3xl font-black mb-4 uppercase italic">Бизнес вместе с нами</h2>
                <Link href="/business">
                    <button className="bg-[#D4AF37] px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-white">Узнать больше</button>
                </Link>
            </section>
        </div>
    );
}