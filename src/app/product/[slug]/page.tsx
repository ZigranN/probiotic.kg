import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    FileText,
    MessageCircle,
    PackageCheck,
    Truck,
    Zap,
} from "lucide-react";

import AddToCartSection from "@/components/product/AddToCartSection";
import ProductGallery from "@/components/product/ProductGallery";
import ProductTabs from "@/components/product/ProductTabs";
import ReviewForm from "@/components/product/ReviewForm";
import ReviewsList from "@/components/product/ReviewsList";

import { seller } from "@/config/seller";

import {
    products,
    type Product,
} from "@/lib/content";

import { prisma } from "@/lib/prisma";

// ==========================================
// TYPES
// ==========================================

type DbCommerceProduct = {
    id: string;
    priceKgs: number;
    oldPriceKgs: number | null;
    inStock: boolean;
};

// ==========================================
// CONTENT
// ==========================================
//
// ВАЖНО:
//
// content.ts
// = SEO / GEO / тексты / изображения /
//   характеристики / FAQ / семантика.
//
// Neon
// = id / цена / старая цена / наличие.
//
// Таким образом старый текст из БД больше
// не переписывает SEO-контент страницы.
// ==========================================

function getContentProduct(
    slug: string,
): Product | undefined {
    return products.find(
        (product) =>
            product.slug === slug,
    );
}

// ==========================================
// CANONICAL
// ==========================================

function getCanonicalPath(
    slug: string,
) {
    /*
     * У Триллиона есть отдельный
     * основной SEO URL.
     */
    if (
        slug ===
        "maxilin-superprobiotic-50"
    ) {
        return "/maxilin/superprobiotic";
    }

    return `/product/${slug}`;
}

// ==========================================
// KNOWLEDGE HUB
// ==========================================

function getKnowledgeHub(
    product: Product,
) {
    if (
        product.slug.startsWith(
            "maxilin-",
        )
    ) {
        return {
            href:
                "/maxilin",

            label:
                "Всё о Максилине",

            description:
                "Три формы Максилина, Lactobacillus acidophilus 2585, отличия жидкой, сухой и немолочной формы.",
        };
    }

    if (
        product.slug.startsWith(
            "l-arginine",
        )
    ) {
        return {
            href:
                "/l-arginine",

            label:
                "Всё о L-Аргинине",

            description:
                "L-Arginine, аминокислота, оксид азота NO и варианты EnergyMax.",
        };
    }

    return null;
}

// ==========================================
// DATABASE
// ==========================================
//
// НЕ используем:
// prisma.product.findUnique({ where: { slug } })
//
// потому что тогда Prisma получает все поля.
//
// Нам здесь нужны только динамические
// коммерческие данные.
// ==========================================

async function getDbCommerceProduct(
    slug: string,
): Promise<DbCommerceProduct | null> {
    try {
        return await prisma.product.findUnique({
            where: {
                slug,
            },

            select: {
                id: true,
                priceKgs: true,
                oldPriceKgs: true,
                inStock: true,
            },
        });
    } catch (error) {
        console.error(
            `[product] Commerce data error: ${slug}`,
            error,
        );

        return null;
    }
}

// ==========================================
// METADATA
// ==========================================

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{
        slug: string;
    }>;
}): Promise<Metadata> {
    const { slug } =
        await params;

    const product =
        getContentProduct(slug);

    if (!product) {
        return {
            title: {
                absolute:
                    "Товар не найден | probiotic.kg",
            },

            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const canonicalPath =
        getCanonicalPath(
            product.slug,
        );

    const firstImage =
        product.images[0];

    /*
     * absolute очень важно.
     *
     * RootLayout уже содержит:
     *
     * %s | probiotic.kg
     *
     * Если использовать обычный title,
     * можем снова получить:
     *
     * | probiotic.kg | probiotic.kg
     */
    const title =
        product.seoTitle ??
        `${product.name} купить в Кыргызстане | probiotic.kg`;

    const description =
        product.seoDescription ??
        product.description.slice(
            0,
            160,
        );

    return {
        title: {
            absolute:
            title,
        },

        description,

        alternates: {
            canonical:
            canonicalPath,
        },

        robots: {
            index: true,
            follow: true,

            googleBot: {
                index: true,
                follow: true,

                "max-image-preview":
                    "large",

                "max-snippet":
                    -1,

                "max-video-preview":
                    -1,
            },
        },

        openGraph: {
            type:
                "website",

            locale:
                "ru_KG",

            siteName:
            seller.siteName,

            url:
            canonicalPath,

            title:
            product.name,

            description,

            images:
                firstImage
                    ? [
                        {
                            url:
                            firstImage.src,

                            alt:
                            firstImage.alt,
                        },
                    ]
                    : [],
        },

        twitter: {
            card:
                "summary_large_image",

            title:
            product.name,

            description,

            images:
                firstImage
                    ? [
                        firstImage.src,
                    ]
                    : [],
        },
    };
}

// ==========================================
// STRUCTURED DATA
// ==========================================

function ProductStructuredData({
                                   product,
                                   commerce,
                               }: {
    product: Product;
    commerce: DbCommerceProduct | null;
}) {
    const baseUrl =
        seller.siteUrl.replace(
            /\/$/,
            "",
        );

    const canonicalPath =
        getCanonicalPath(
            product.slug,
        );

    const productUrl =
        `${baseUrl}${canonicalPath}`;

    const price =
        commerce?.priceKgs ??
        product.priceKgs;

    const inStock =
        commerce
            ? commerce.inStock
            : product.availability ===
            "in_stock";

    const properties: Array<{
        "@type": "PropertyValue";
        name: string;
        value: string;
    }> = [];

    if (product.form) {
        properties.push({
            "@type":
                "PropertyValue",

            name:
                "Форма",

            value:
            product.form,
        });
    }

    if (product.packInfo) {
        properties.push({
            "@type":
                "PropertyValue",

            name:
                "Упаковка",

            value:
            product.packInfo,
        });
    }

    product.features
        ?.slice(0, 6)
        .forEach(
            (
                feature,
                index,
            ) => {
                properties.push({
                    "@type":
                        "PropertyValue",

                    name:
                        `Характеристика ${
                            index + 1
                        }`,

                    value:
                    feature,
                });
            },
        );

    const productSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "Product",

        "@id":
            `${productUrl}#product`,

        name:
        product.name,

        url:
        productUrl,

        description:
        product.description,

        sku:
        product.slug,

        image:
            product.images.map(
                (image) =>
                    image.src.startsWith(
                        "http",
                    )
                        ? image.src
                        : `${baseUrl}${image.src}`,
            ),

        brand: {
            "@type":
                "Brand",

            name:
                "EnergyMax",
        },

        category:
            product.category ===
            "probiotic"
                ? "Пробиотики"
                : product.category ===
                "actives"
                    ? "Аминокислоты и функциональное питание"
                    : "Локальные формы",

        additionalProperty:
        properties,

        offers: {
            "@type":
                "Offer",

            url:
            productUrl,

            price:
                String(price),

            priceCurrency:
            seller.currencyCode,

            availability:
                inStock
                    ? "https://schema.org/InStock"
                    : "https://schema.org/OutOfStock",

            itemCondition:
                "https://schema.org/NewCondition",

            seller: {
                "@type":
                    "Organization",

                "@id":
                    `${baseUrl}/#organization`,

                name:
                seller.legalName,

                url:
                baseUrl,
            },
        },
    };

    const hub =
        getKnowledgeHub(product);

    const breadcrumbs = [
        {
            "@type":
                "ListItem",

            position:
                1,

            name:
                "Главная",

            item:
            baseUrl,
        },
    ];

    if (hub) {
        breadcrumbs.push({
            "@type":
                "ListItem",

            position:
                2,

            name:
                product.slug.startsWith(
                    "maxilin-",
                )
                    ? "Максилин"
                    : "L-Аргинин",

            item:
                `${baseUrl}${hub.href}`,
        });
    }

    breadcrumbs.push({
        "@type":
            "ListItem",

        position:
            breadcrumbs.length +
            1,

        name:
        product.name,

        item:
        productUrl,
    });

    const breadcrumbSchema = {
        "@context":
            "https://schema.org",

        "@type":
            "BreadcrumbList",

        itemListElement:
        breadcrumbs,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html:
                        JSON.stringify(
                            productSchema,
                        ).replace(
                            /</g,
                            "\\u003c",
                        ),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html:
                        JSON.stringify(
                            breadcrumbSchema,
                        ).replace(
                            /</g,
                            "\\u003c",
                        ),
                }}
            />
        </>
    );
}

// ==========================================
// PAGE
// ==========================================

export default async function ProductPage({
                                              params,
                                          }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } =
        await params;

    // ======================================
    // VERIFIED SEO CONTENT
    // ======================================

    const contentProduct =
        getContentProduct(slug);

    if (!contentProduct) {
        notFound();
    }

    // ======================================
    // COMMERCE DATA
    // ======================================

    const commerce =
        await getDbCommerceProduct(
            slug,
        );

    const price =
        commerce?.priceKgs ??
        contentProduct.priceKgs;

    /*
     * Если товар существует в БД —
     * наличие из БД имеет приоритет.
     */
    const inStock =
        commerce
            ? commerce.inStock
            : contentProduct.availability ===
            "in_stock";

    /*
     * oldPrice из БД используем только
     * если товар реально существует в БД.
     */
    const oldPrice =
        commerce
            ? commerce.oldPriceKgs ??
            undefined
            : contentProduct.oldPriceKgs;

    /*
     * Объект для существующих UI-компонентов.
     *
     * SEO-контент:
     * content.ts
     *
     * Коммерция:
     * Neon
     */
    const product = {
        ...contentProduct,

        id:
            commerce?.id ??
            contentProduct.slug,

        priceKgs:
        price,

        oldPriceKgs:
        oldPrice,

        inStock,

        availability:
            inStock
                ? "in_stock"
                : "out",
    };

    const hub =
        getKnowledgeHub(
            contentProduct,
        );

    const relatedProducts =
        (
            contentProduct.relatedSlugs ??
            []
        )
            .map((relatedSlug) =>
                getContentProduct(
                    relatedSlug,
                ),
            )
            .filter(
                (
                    item,
                ): item is Product =>
                    Boolean(item),
            )
            .slice(0, 4);

    const whatsappText =
        encodeURIComponent(
            `Здравствуйте! Хочу заказать ${contentProduct.name}.`,
        );

    const whatsappUrl =
        `https://wa.me/${seller.whatsappPhone}?text=${whatsappText}`;

    return (
        <>
            <ProductStructuredData
                product={
                    contentProduct
                }
                commerce={
                    commerce
                }
            />

            <main className="min-h-screen bg-white pb-24">
                {/* ==================================
                    TOP NAV
                ================================== */}

                <div className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 px-4 py-4 backdrop-blur-md md:px-12">
                    <div className="container mx-auto flex flex-wrap items-center justify-between gap-3">
                        <Link
                            href="/#catalog"
                            className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase transition-colors hover:text-[#21AA57]"
                        >
                            <ArrowLeft
                                className="h-4 w-4"
                                aria-hidden="true"
                            />

                            Назад в каталог
                        </Link>

                        {hub && (
                            <Link
                                href={
                                    hub.href
                                }
                                className="inline-flex items-center gap-2 text-xs font-black text-[#21AA57]"
                            >
                                {
                                    hub.label
                                }

                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>
                        )}
                    </div>
                </div>

                <div className="container mx-auto mt-6 px-4 md:px-12 lg:mt-12">
                    {/* ==================================
                        PRODUCT HERO
                    ================================== */}

                    <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
                        {/* IMAGES */}

                        <div className="relative lg:w-1/2">
                            <div className="sticky top-32">
                                <ProductGallery
                                    images={
                                        contentProduct.images
                                    }
                                    heroTag={
                                        contentProduct.heroTag
                                    }
                                />
                            </div>
                        </div>

                        {/* INFO */}

                        <div className="flex flex-col lg:w-1/2">
                            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F7F5] px-4 py-2">
                                <PackageCheck
                                    className="h-4 w-4 text-[#21AA57]"
                                    aria-hidden="true"
                                />

                                <span className="text-xs font-bold tracking-wide text-[#29380E] uppercase">
                                    Продукция
                                    EnergyMax
                                </span>
                            </div>

                            <h1 className="text-4xl leading-none font-black tracking-tighter text-[#29380E] uppercase italic md:text-6xl">
                                {
                                    contentProduct.name
                                }
                            </h1>

                            {contentProduct.subtitle && (
                                <p className="mt-4 max-w-2xl text-lg leading-7 font-semibold text-[#29380E]/60">
                                    {
                                        contentProduct.subtitle
                                    }
                                </p>
                            )}

                            {contentProduct.packInfo && (
                                <p className="mt-4 font-serif text-lg text-gray-500 italic">
                                    {
                                        contentProduct.packInfo
                                    }
                                </p>
                            )}

                            {/* PRICE */}

                            <div className="mt-7 flex flex-wrap items-end gap-4">
                                <div>
                                    <p className="text-[10px] font-black tracking-[0.18em] text-gray-400 uppercase">
                                        Цена
                                    </p>

                                    <p className="mt-1 text-3xl font-black text-[#21AA57]">
                                        {price.toLocaleString(
                                            "ru-RU",
                                        )}{" "}
                                        сом
                                    </p>
                                </div>

                                {oldPrice &&
                                    oldPrice >
                                    price && (
                                        <p className="pb-1 text-lg text-gray-400 line-through">
                                            {oldPrice.toLocaleString(
                                                "ru-RU",
                                            )}{" "}
                                            сом
                                        </p>
                                    )}

                                <span
                                    className={`mb-1 rounded-full px-3 py-1.5 text-[10px] font-black tracking-wide uppercase ${
                                        inStock
                                            ? "bg-[#21AA57]/10 text-[#21AA57]"
                                            : "bg-gray-100 text-gray-500"
                                    }`}
                                >
                                    {inStock
                                        ? "В наличии"
                                        : "Уточнить наличие"}
                                </span>
                            </div>

                            {/* BENEFITS */}

                            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
                                {contentProduct.shortBenefits.map(
                                    (
                                        benefit,
                                    ) => (
                                        <div
                                            key={
                                                benefit
                                            }
                                            className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#F4F7F5] p-4"
                                        >
                                            <Zap
                                                className="h-5 w-5 flex-shrink-0 text-[#21AA57]"
                                                aria-hidden="true"
                                            />

                                            <span className="text-sm font-bold text-[#29380E]">
                                                {
                                                    benefit
                                                }
                                            </span>
                                        </div>
                                    ),
                                )}
                            </div>

                            {/* DESCRIPTION */}

                            <p className="mt-8 text-sm leading-7 text-[#29380E]/65 md:text-base">
                                {
                                    contentProduct.description
                                }
                            </p>

                            {/* CART */}

                            <div className="mt-8">
                                {commerce ? (
                                    <AddToCartSection
                                        product={
                                            product as never
                                        }
                                    />
                                ) : (
                                    <div className="rounded-[2rem] border border-[#21AA57]/15 bg-[#F4F7F5] p-6">
                                        <p className="font-black text-[#29380E]">
                                            Заказать
                                            товар
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-[#29380E]/55">
                                            Наличие
                                            можно
                                            подтвердить
                                            через
                                            WhatsApp.
                                        </p>

                                        <a
                                            href={
                                                whatsappUrl
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#21AA57] px-6 py-4 text-sm font-black text-white"
                                        >
                                            <MessageCircle
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />

                                            Заказать
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* DELIVERY */}

                            <div className="mt-10 space-y-5 border-t border-gray-100 pt-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#21AA57]/10">
                                        <Truck
                                            className="h-5 w-5 text-[#21AA57]"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="mb-1 text-sm font-bold text-[#29380E]">
                                            Доставка
                                            — в
                                            подарок
                                        </h2>

                                        <p className="text-sm leading-relaxed text-gray-500">
                                            Доставка
                                            по
                                            Кыргызстану
                                            предоставляется
                                            в подарок.
                                            Возможность
                                            отправки
                                            в Казахстан
                                            и другие
                                            страны
                                            СНГ
                                            уточняется
                                            при
                                            оформлении.
                                        </p>

                                        <Link
                                            href="/delivery"
                                            className="mt-1 inline-block text-sm font-semibold text-[#21AA57] hover:underline"
                                        >
                                            Условия
                                            доставки
                                        </Link>
                                    </div>
                                </div>

                                {/* DOCUMENTS */}

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#21AA57]/10">
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
                                            Документы
                                            необходимо
                                            сопоставлять
                                            с точным
                                            названием
                                            и формой
                                            конкретного
                                            товара.
                                        </p>

                                        <Link
                                            href="/docs"
                                            className="mt-1 inline-block text-sm font-semibold text-[#21AA57] hover:underline"
                                        >
                                            Открыть
                                            документы
                                        </Link>
                                    </div>
                                </div>

                                {/* CHECK */}

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F4F7F5]">
                                        <CheckCircle2
                                            className="h-5 w-5 text-[#21AA57]"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="mb-1 text-sm font-bold text-[#29380E]">
                                            Проверка
                                            при
                                            получении
                                        </h2>

                                        <p className="text-sm leading-relaxed text-gray-500">
                                            Проверьте
                                            название,
                                            количество,
                                            срок
                                            годности
                                            и
                                            целостность
                                            упаковки.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==================================
                        KNOWLEDGE HUB
                    ================================== */}

                    {hub && (
                        <section className="mt-20 rounded-[2.5rem] bg-[#29380E] p-7 text-white md:p-10">
                            <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21AA57]">
                                    <BookOpen
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <p className="text-xs font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                        Полезная
                                        информация
                                    </p>

                                    <h2 className="mt-2 text-2xl font-black">
                                        {
                                            hub.label
                                        }
                                    </h2>

                                    <p className="mt-2 max-w-3xl text-sm leading-7 text-white/60">
                                        {
                                            hub.description
                                        }
                                    </p>
                                </div>

                                <Link
                                    href={
                                        hub.href
                                    }
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#29380E]"
                                >
                                    Читать

                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </section>
                    )}

                    {/* ==================================
                        PRODUCT CONTENT
                    ================================== */}

                    <div className="mt-20">
                        <ProductTabs
                            product={
                                product as never
                            }
                        />
                    </div>

                    {/* ==================================
                        RELATED
                    ================================== */}

                    {relatedProducts.length >
                        0 && (
                            <section className="mt-20">
                                <p className="text-xs font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                    Смотрите
                                    также
                                </p>

                                <h2 className="mt-2 text-3xl font-black tracking-tight text-[#29380E] uppercase">
                                    Другие
                                    формы
                                    и товары
                                </h2>

                                <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    {relatedProducts.map(
                                        (
                                            related,
                                        ) => {
                                            const href =
                                                related.slug ===
                                                "maxilin-superprobiotic-50"
                                                    ? "/maxilin/superprobiotic"
                                                    : `/product/${related.slug}`;

                                            return (
                                                <Link
                                                    key={
                                                        related.slug
                                                    }
                                                    href={
                                                        href
                                                    }
                                                    className="group rounded-[2rem] border border-gray-100 bg-[#F4F7F5] p-6 transition hover:-translate-y-1 hover:shadow-lg"
                                                >
                                                    <p className="text-[10px] font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                                        EnergyMax
                                                    </p>

                                                    <h3 className="mt-3 font-black text-[#29380E]">
                                                        {
                                                            related.name
                                                        }
                                                    </h3>

                                                    {related.packInfo && (
                                                        <p className="mt-2 text-xs leading-5 text-[#29380E]/45">
                                                            {
                                                                related.packInfo
                                                            }
                                                        </p>
                                                    )}

                                                    <p className="mt-5 font-black text-[#21AA57]">
                                                        {related.priceKgs.toLocaleString(
                                                            "ru-RU",
                                                        )}{" "}
                                                        сом
                                                    </p>

                                                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#29380E]">
                                                    Подробнее

                                                    <ArrowRight
                                                        className="h-3.5 w-3.5 text-[#21AA57] transition-transform group-hover:translate-x-1"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                                </Link>
                                            );
                                        },
                                    )}
                                </div>
                            </section>
                        )}

                    {/* ==================================
                        REAL DATABASE REVIEWS
                    ================================== */}

                    {commerce && (
                        <section className="mt-20">
                            <h2 className="text-3xl font-bold tracking-tight text-[#29380E] uppercase">
                                Отзывы
                                покупателей
                            </h2>

                            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500">
                                Отзывы
                                отражают
                                индивидуальный
                                опыт
                                покупателей
                                и не
                                гарантируют
                                одинаковый
                                результат.
                            </p>

                            <div className="mt-8 grid gap-8 lg:grid-cols-2">
                                <ReviewsList
                                    productId={
                                        commerce.id
                                    }
                                />

                                <div className="h-fit lg:sticky lg:top-32">
                                    <ReviewForm
                                        productId={
                                            commerce.id
                                        }
                                    />
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </>
    );
}