import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content";
import { seller } from "@/config/seller";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
    const instagramUrl = `https://instagram.com/${siteConfig.instagram.replace("@", "")}`;

    return (
        <footer
            id="footer"
            className="relative mt-2 overflow-hidden bg-[#29380E] pt-10 pb-6 text-white"
        >
            <div className="absolute top-0 right-0 h-72 w-72 -translate-y-1/2 translate-x-1/3 rounded-full bg-[#405E0D] opacity-30 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 md:px-12">
                <div className="mb-8 grid grid-cols-1 gap-8 border-b border-white/10 pb-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* О компании */}
                    <div>
                        <Image
                            src="/images/logo-main.webp"
                            alt={`${seller.siteName} — продукция EnergyMax`}
                            width={140}
                            height={40}
                            className="mb-4 brightness-0 invert"
                        />

                        <p className="mb-4 text-xs leading-relaxed text-white/70">
                            Интернет-магазин продукции EnergyMax в Кыргызской
                            Республике.
                        </p>

                        <a
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Открыть Instagram"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#21AA57]"
                        >
                            <Instagram className="h-4 w-4" aria-hidden="true" />
                        </a>
                    </div>

                    {/* Навигация */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold text-[#D4AF37]">
                            Навигация
                        </h4>

                        <ul className="space-y-2 text-xs text-white/70">
                            <li>
                                <Link
                                    href="/about"
                                    className="transition-colors hover:text-white"
                                >
                                    О компании
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#catalog"
                                    className="transition-colors hover:text-white"
                                >
                                    Каталог
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/business"
                                    className="transition-colors hover:text-white"
                                >
                                    Партнерство
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/docs"
                                    className="transition-colors hover:text-white"
                                >
                                    Документы
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Покупателям */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold text-[#D4AF37]">
                            Покупателям
                        </h4>

                        <ul className="space-y-2 text-xs text-white/70">
                            <li>
                                <Link
                                    href="/delivery"
                                    className="transition-colors hover:text-white"
                                >
                                    Доставка и оплата
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/policy"
                                    className="transition-colors hover:text-white"
                                >
                                    Политика конфиденциальности
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/offer"
                                    className="transition-colors hover:text-white"
                                >
                                    Публичная оферта
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Контакты */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold text-[#D4AF37]">
                            Контакты
                        </h4>

                        <ul className="space-y-3 text-xs text-white/70">
                            <li className="flex items-start gap-2">
                                <MapPin
                                    className="h-4 w-4 flex-shrink-0 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <span>{seller.legalAddress}</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Phone
                                    className="h-4 w-4 flex-shrink-0 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <a
                                    href={`tel:${seller.phoneHref}`}
                                    className="hover:text-white"
                                >
                                    {seller.phone}
                                </a>
                            </li>

                            <li className="flex items-center gap-2">
                                <Mail
                                    className="h-4 w-4 flex-shrink-0 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <a
                                    href={`mailto:${seller.email}`}
                                    className="break-all hover:text-white"
                                >
                                    {seller.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-2 text-center text-[10px] text-white/40 md:flex-row md:text-left">
                    <p>
                        © {new Date().getFullYear()} {seller.siteName}. Продавец:{" "}
                        {seller.legalName}.
                    </p>

                    <p className="max-w-lg">
                        Не является лекарственным средством. Информация носит
                        справочный характер.
                    </p>
                </div>
            </div>
        </footer>
    );
}