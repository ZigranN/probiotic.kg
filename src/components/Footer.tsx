import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-[#29380E] text-white pt-10 pb-6 mt-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#405E0D] rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">

                    {/* О компании */}
                    <div>
                        <Image src="/images/logo-main.webp" alt="EnergyMax Logo" width={140} height={40} className="mb-4 brightness-0 invert" />
                        <p className="text-white/70 text-xs leading-relaxed mb-4">
                            Уникальные живые пробиотики Максилин и клеточное питание. Здоровье от природы.
                        </p>
                        <a href={`https://instagram.com/${siteConfig.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#21AA57] transition-colors">
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Навигация */}
                    <div>
                        <h4 className="text-sm font-bold mb-4 text-[#D4AF37]">Навигация</h4>
                        <ul className="space-y-2 text-white/70 text-xs">
                            <li><Link href="/about" className="hover:text-white transition-colors">О компании</Link></li>
                            <li><Link href="/#catalog" className="hover:text-white transition-colors">Каталог</Link></li>
                            <li><Link href="/business" className="hover:text-white transition-colors">Партнерство</Link></li>
                            <li><Link href="/docs" className="hover:text-white transition-colors">Сертификаты</Link></li>
                        </ul>
                    </div>

                    {/* Покупателям */}
                    <div>
                        <h4 className="text-sm font-bold mb-4 text-[#D4AF37]">Покупателям</h4>
                        <ul className="space-y-2 text-white/70 text-xs">
                            <li><Link href="/delivery" className="hover:text-white transition-colors">Доставка и оплата</Link></li>
                            <li><Link href="/policy" className="hover:text-white transition-colors">Политика конфиденциальности</Link></li>
                            <li><Link href="/offer" className="hover:text-white transition-colors">Публичная оферта</Link></li>
                        </ul>
                    </div>

                    {/* Контакты */}
                    <div>
                        <h4 className="text-sm font-bold mb-4 text-[#D4AF37]">Контакты</h4>
                        <ul className="space-y-3 text-white/70 text-xs">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-[#21AA57] flex-shrink-0" />
                                <span>{siteConfig.address}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#21AA57] flex-shrink-0" />
                                <a href={`tel:+${siteConfig.whatsappPhone}`} className="hover:text-white">+{siteConfig.whatsappPhone}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[#21AA57] flex-shrink-0" />
                                <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-white">{siteConfig.supportEmail}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between text-white/40 text-[10px] text-center md:text-left gap-2">
                    <p>© {new Date().getFullYear()}. Официальный независимый партнер EnergyMax Group — ИП Наргиз Мамытова.</p>
                    <p className="max-w-lg">Не является лекарственным средством. Информация носит справочный характер.</p>
                </div>
            </div>
        </footer>
    );
}