import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Star, Truck, Zap } from "lucide-react";
import ProductTabs from "@/components/product/ProductTabs";
import AddToCartSection from "@/components/product/AddToCartSection";
import { Metadata } from "next";
import ProductGallery from "@/components/product/ProductGallery";
import ReviewsList from "@/components/product/ReviewsList";
import ReviewForm from "@/components/product/ReviewForm";

// SEO Оптимизация (Dynamic Metadata)
export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const product = await prisma.product.findUnique({ where: { slug } });
    if (!product) return { title: "Товар не найден" };

    return {
        title: `${product.name} купить в Бишкеке | EnergyMax`,
        description: `Закажите ${product.name} с доставкой по Кыргызстану. ${product.description.slice(0, 100)}...`,
        openGraph: {
            images: [(product.images as any)[0].src],
        },
    };
}

export default async function ProductPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const product = await prisma.product.findUnique({
        where: { slug }
    });

    if (!product) notFound();

    const images = product.images as any[];
    const benefits = product.shortBenefits as string[];

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Навигация для Mobile First */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12">
                <Link href="/#catalog" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#21AA57] transition-colors uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4" /> Назад в каталог
                </Link>
            </div>

            <div className="container mx-auto px-4 md:px-12 mt-6 lg:mt-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* ЛЕВАЯ ЧАСТЬ: Изображение с анимацией появления */}
                    <div className="lg:w-1/2 relative">
                        <div className="sticky top-32">
                            <ProductGallery images={images} heroTag={product.heroTag} />
                        </div>
                    </div>
                    {/* ПРАВАЯ ЧАСТЬ: Контент и покупка */}
                    <div className="lg:w-1/2 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex text-[#D4AF37]">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Официальный продукт EnergyMax</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-[#29380E] leading-none mb-4 uppercase italic tracking-tighter">
                            {product.name}
                        </h1>
                        <p className="text-lg text-gray-500 font-serif italic mb-8">{product.packInfo}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {benefits.map((b, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-[#F4F7F5] rounded-2xl border border-gray-100">
                                    <Zap className="w-5 h-5 text-[#21AA57]" />
                                    <span className="text-sm font-bold text-[#29380E] uppercase tracking-tighter">{b}</span>
                                </div>
                            ))}
                        </div>

                        {/* КЛИЕНТСКИЙ БЛОК КУПИТЬ */}
                        <AddToCartSection product={product as any} />

                        {/* GEO & TRUST INFO */}
                        <div className="mt-10 space-y-4 border-t border-gray-100 pt-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                    <Truck className="w-5 h-5 text-blue-500" />
                                </div>
                                <p className="text-sm text-gray-500"><strong>Доставка по Бишкеку:</strong> в течение 2-4 часов. <br/> По регионам КР — до 24 часов.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                    <ShieldCheck className="w-5 h-5 text-[#21AA57]" />
                                </div>
                                <p className="text-sm text-gray-500"><strong>Сертификация:</strong> GMP, Halal, ISO. <br/> Гарантия подлинности продукции.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ШАГ 2: КЛИЕНТСКИЕ ТАБЫ (Состав, Как принимать и т.д.) */}
                <div className="mt-20">
                    <ProductTabs product={product as any} />
                </div>

                {/* ОТЗЫВЫ */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-[#29380E] mb-8 uppercase tracking-tight">
                        Отзывы покупателей
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                            <ReviewsList productId={product.id} />
                        </div>
                        <div className="lg:sticky lg:top-32 h-fit">
                            <ReviewForm productId={product.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}