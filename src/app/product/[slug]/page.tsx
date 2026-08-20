import type { Metadata } from "next";
import type { Prisma } from "@prisma/client";

import Link from "next/link";
import { notFound } from "next/navigation";

import {
    ArrowLeft,
    CheckCircle2,
    FileText,
    PackageCheck,
    Truck,
    Zap,
} from "lucide-react";

import AddToCartSection from "@/components/product/AddToCartSection";
import ProductGallery from "@/components/product/ProductGallery";
import ProductTabs from "@/components/product/ProductTabs";
import ReviewForm from "@/components/product/ReviewForm";
import ReviewsList from "@/components/product/ReviewsList";

import { prisma } from "@/lib/prisma";

// ==========================================
// TYPES
// ==========================================

interface GalleryImage {
    src: string;
    alt: string;
}

// ==========================================
// PRISMA SELECT
// ==========================================
//
// ВАЖНО:
//
// Пока новые поля Prisma ещё не применены к Neon,
// НЕ делаем findUnique() без select.
//
// Иначе Prisma попытается запросить из PostgreSQL
// новые колонки, которых в реальной БД пока может
// ещё не быть.
//
// После миграции Neon мы расширим этот select.
// ==========================================

const productSelect = {
    id: true,
    slug: true,
    name: true,
    category: true,

    heroTag: true,
    form: true,
    packInfo: true,
    description: true,

    oldPriceKgs: true,
    priceKgs: true,
    inStock: true,

    shortBenefits: true,
    howToUse: true,
    images: true,
} satisfies Prisma.ProductSelect;

// ==========================================
// HELPERS
// ==========================================

function normalizeImages(
    value: unknown,
    productName: string,
): GalleryImage[] {
    if (!Array.isArray(value)) {
        return [];
    }

    return value.flatMap((item, index) => {
        if (
            !item ||
            typeof item !== "object" ||
            Array.isArray(item)
        ) {
            return [];
        }

        const image = item as Record<string, unknown>;

        const src =
            typeof image.src === "string"
                ? image.src.trim()
                : "";

        if (!src) {
            return [];
        }

        const alt =
            typeof image.alt === "string" &&
            image.alt.trim()
                ? image.alt.trim()
                : `${productName} — фото товара ${index + 1}`;

        return [
            {
                src,
                alt,
            },
        ];
    });
}

function normalizeStringArray(value: unknown): string[] {
    if (!Array.isArray(value)) {
        return [];
    }

    return value.filter(
        (item): item is string =>
            typeof item === "string" &&
            item.trim().length > 0,
    );
}

function createMetaDescription(
    description: string,
    productName: string,
) {
    const cleanDescription = description
        .replace(/\s+/g, " ")
        .trim();

    if (!cleanDescription) {
        return `Информация о товаре ${productName}, цена, наличие и заказ на probiotic.kg.`;
    }

    if (cleanDescription.length <= 155) {
        return cleanDescription;
    }

    return `${cleanDescription.slice(0, 152).trim()}...`;
}

function formatPrice(value: number) {
    return new Intl.NumberFormat("ru-RU").format(value);
}

// ==========================================
// METADATA
// ==========================================

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const product = await prisma.product.findUnique({
        where: {
            slug,
        },

        select: {
            slug: true,
            name: true,
            description: true,
            images: true,
        },
    });

    if (!product) {
        return {
            title: "Товар не найден | probiotic.kg",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const images = normalizeImages(
        product.images,
        product.name,
    );

    const description = createMetaDescription(
        product.description,
        product.name,
    );

    return {
        title: `${product.name} купить в Кыргызстане | probiotic.kg`,

        description,

        alternates: {
            canonical: `/product/${product.slug}`,
        },

        openGraph: {
            type: "website",
            locale: "ru_KG",

            title: `${product.name} | probiotic.kg`,

            description,

            url: `/product/${product.slug}`,

            images:
                images.length > 0
                    ? [
                        {
                            url: images[0].src,
                            alt: images[0].alt,
                        },
                    ]
                    : [],
        },

        twitter: {
            card: "summary_large_image",

            title: `${product.name} | probiotic.kg`,

            description,

            images:
                images.length > 0
                    ? [images[0].src]
                    : [],
        },
    };
}

// ==========================================
// PAGE
// ==========================================

export default async function ProductPage({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = await prisma.product.findUnique({
        where: {
            slug,
        },

        select: productSelect,
    });

    if (!product) {
        notFound();
    }

    // ------------------------------------------
    // SAFE JSON NORMALIZATION
    // ------------------------------------------

    const images = normalizeImages(
        product.images,
        product.name,
    );

    const benefits = normalizeStringArray(
        product.shortBenefits,
    );

    // ------------------------------------------
    // PRICE
    // ------------------------------------------

    const hasDiscount =
        typeof product.oldPriceKgs === "number" &&
        product.oldPriceKgs > product.priceKgs;

    // ------------------------------------------
    // Данные только для клиентского блока корзины
    // ------------------------------------------
    //
    // Не передаём клиентскому компоненту весь
    // объект Prisma без необходимости.
    // ------------------------------------------

    const cartProduct = {
        id: product.id,
        slug: product.slug,
        name: product.name,
        priceKgs: product.priceKgs,
        images,
    };

    // ------------------------------------------
    // Данные только для ProductTabs
    // ------------------------------------------
    //
    // composition пока null, потому что новую
    // колонку мы ещё НЕ применили к Neon.
    //
    // После миграции добавим composition
    // в productSelect.
    // ------------------------------------------

    const tabsProduct = {
        description: product.description,
        composition: null,
        howToUse: product.howToUse,
    };

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* ==================================
                НАВИГАЦИЯ
            ================================== */}

            <div className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 px-4 py-4 backdrop-blur-md md:px-12">
                <div className="container mx-auto">
                    <Link
                        href="/#catalog"
                        className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-gray-400 uppercase transition-colors hover:text-[#21AA57]"
                    >
                        <ArrowLeft
                            className="h-4 w-4"
                            aria-hidden="true"
                        />

                        Назад в каталог
                    </Link>
                </div>
            </div>

            {/* ==================================
                ОСНОВНАЯ КАРТОЧКА
            ================================== */}

            <div className="container mx-auto mt-6 px-4 md:px-12 lg:mt-12">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
                    {/* ==============================
                        ИЗОБРАЖЕНИЯ
                    ============================== */}

                    <div className="relative lg:w-1/2">
                        <div className="sticky top-32">
                            {images.length > 0 ? (
                                <ProductGallery
                                    images={images}
                                    heroTag={product.heroTag}
                                />
                            ) : (
                                <div className="flex aspect-square items-center justify-center rounded-[2.5rem] border border-gray-100 bg-[#F4F7F5]">
                                    <div className="max-w-xs px-6 text-center">
                                        <PackageCheck
                                            className="mx-auto mb-4 h-12 w-12 text-[#21AA57]/40"
                                            aria-hidden="true"
                                        />

                                        <p className="text-sm leading-relaxed text-gray-500">
                                            Изображение товара
                                            временно недоступно.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ==============================
                        ИНФОРМАЦИЯ
                    ============================== */}

                    <div className="flex flex-col lg:w-1/2">
                        {/* Статус */}

                        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F7F5] px-4 py-2">
                            <PackageCheck
                                className="h-4 w-4 text-[#21AA57]"
                                aria-hidden="true"
                            />

                            <span className="text-xs font-bold tracking-wide text-[#29380E] uppercase">
                                Продукция EnergyMax
                            </span>
                        </div>

                        {/* Название */}

                        <h1 className="mb-4 text-4xl leading-none font-black tracking-tighter text-[#29380E] uppercase italic md:text-6xl">
                            {product.name}
                        </h1>

                        {/* Форма */}

                        {product.form && (
                            <p className="mb-2 text-sm font-semibold tracking-wide text-[#21AA57] uppercase">
                                {product.form}
                            </p>
                        )}

                        {/* Упаковка */}

                        {product.packInfo && (
                            <p className="mb-6 font-serif text-lg text-gray-500 italic">
                                {product.packInfo}
                            </p>
                        )}

                        {/* Цена */}

                        <div className="mb-8">
                            <div className="flex flex-wrap items-end gap-3">
                                <span className="text-3xl font-black text-[#29380E]">
                                    {formatPrice(
                                        product.priceKgs,
                                    )}{" "}
                                    сом
                                </span>

                                {hasDiscount && (
                                    <span className="pb-1 text-lg text-gray-400 line-through">
                                        {formatPrice(
                                            product.oldPriceKgs!,
                                        )}{" "}
                                        сом
                                    </span>
                                )}
                            </div>

                            <p
                                className={`mt-2 text-sm font-semibold ${
                                    product.inStock
                                        ? "text-[#21AA57]"
                                        : "text-red-500"
                                }`}
                            >
                                {product.inStock
                                    ? "В наличии"
                                    : "Нет в наличии"}
                            </p>
                        </div>

                        {/* Преимущества */}

                        {benefits.length > 0 && (
                            <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                                {benefits.map(
                                    (benefit, index) => (
                                        <div
                                            key={`${benefit}-${index}`}
                                            className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#F4F7F5] p-4"
                                        >
                                            <Zap
                                                className="h-5 w-5 flex-shrink-0 text-[#21AA57]"
                                                aria-hidden="true"
                                            />

                                            <span className="text-sm font-bold tracking-tighter text-[#29380E] uppercase">
                                                {benefit}
                                            </span>
                                        </div>
                                    ),
                                )}
                            </div>
                        )}

                        {/* ==============================
                            КОРЗИНА
                        ============================== */}

                        {product.inStock ? (
                            <AddToCartSection
                                product={cartProduct}
                            />
                        ) : (
                            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center">
                                <p className="font-bold text-[#29380E]">
                                    Товар временно отсутствует
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    Наличие можно уточнить у
                                    менеджера.
                                </p>
                            </div>
                        )}

                        {/* ==============================
                            ДОСТАВКА / ДОКУМЕНТЫ
                        ============================== */}

                        <div className="mt-10 space-y-6 border-t border-gray-100 pt-8">
                            {/* Доставка */}

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                                    <Truck
                                        className="h-5 w-5 text-blue-500"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h2 className="mb-1 text-sm font-bold text-[#29380E]">
                                        Доставка — в подарок
                                    </h2>

                                    <p className="text-sm leading-relaxed text-gray-500">
                                        Доставка заказов по
                                        Кыргызстану предоставляется
                                        в подарок. Наличие товара,
                                        способ и срок доставки
                                        подтверждает менеджер при
                                        оформлении заказа.
                                    </p>

                                    <Link
                                        href="/delivery"
                                        className="mt-2 inline-block text-sm font-medium text-[#21AA57] hover:underline"
                                    >
                                        Условия доставки
                                    </Link>
                                </div>
                            </div>

                            {/* Документы */}

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-50">
                                    <FileText
                                        className="h-5 w-5 text-[#21AA57]"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h2 className="mb-1 text-sm font-bold text-[#29380E]">
                                        Документы
                                    </h2>

                                    <p className="text-sm leading-relaxed text-gray-500">
                                        Документы необходимо
                                        сопоставлять с точным
                                        названием, производителем и
                                        формой выпуска конкретного
                                        товара.
                                    </p>

                                    <Link
                                        href="/docs"
                                        className="mt-2 inline-block text-sm font-medium text-[#21AA57] hover:underline"
                                    >
                                        Открыть документы
                                    </Link>
                                </div>
                            </div>

                            {/* Проверка товара */}

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F4F7F5]">
                                    <CheckCircle2
                                        className="h-5 w-5 text-[#21AA57]"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h2 className="mb-1 text-sm font-bold text-[#29380E]">
                                        Проверка при получении
                                    </h2>

                                    <p className="text-sm leading-relaxed text-gray-500">
                                        Перед использованием
                                        проверьте название товара,
                                        количество, целостность
                                        упаковки, срок годности и
                                        информацию на маркировке.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==================================
                    ОПИСАНИЕ / СОСТАВ / ПРИМЕНЕНИЕ
                ================================== */}

                <section className="mt-20">
                    <ProductTabs product={tabsProduct} />
                </section>

                {/* ==================================
                    ОТЗЫВЫ
                ================================== */}

                <section className="mt-20">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#29380E] uppercase">
                        Отзывы покупателей
                    </h2>

                    <p className="mb-8 max-w-3xl text-sm leading-relaxed text-gray-500">
                        Отзывы отражают личный опыт
                        отдельных покупателей и не
                        гарантируют аналогичный результат у
                        других людей.
                    </p>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <ReviewsList
                            productId={product.id}
                        />

                        <div className="h-fit lg:sticky lg:top-32">
                            <ReviewForm
                                productId={product.id}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}