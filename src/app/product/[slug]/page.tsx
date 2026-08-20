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

type HubConfig = {
    href: string;
    label: string;
    title: string;
    text: string;
};

// ==========================================
// CONTENT HELPERS
// ==========================================

function getContentProduct(
    slug: string,
): Product | undefined {
    return products.find(
        (product) =>
            product.slug === slug,
    );
}

function getProductHref(
    slug: string,
): string {
    /*
     * SuperProbiotic имеет отдельную
     * сильную SEO-страницу.
     *
     * Не создаём две конкурирующие
     * страницы для "Максилин Триллион".
     */
    if (
        slug ===
        "maxilin-superprobiotic-50"
    ) {
        return "/maxilin/superprobiotic";
    }

    return `/product/${slug}`;
}

function getCanonicalPath(
    slug: string,
): string {
    return getProductHref(slug);
}

function getHubConfig(
    product: Product,
): HubConfig | null {
    if (
        product.slug.startsWith(
            "maxilin-",
        )
    ) {
        return {
            href:
                "/maxilin",

            label:
                "Максилин",

            title:
                "Узнать больше о Максилине",

            text:
                "Сравните три формы Максилина, узнайте о Lactobacillus acidophilus 2585, микробиоте кишечника и отличиях форм.",
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
                "L-Аргинин",

            title:
                "Узнать больше о L-Аргинине",

            text:
                "Что такое L-Arginine, чем аминокислота связана с синтезом оксида азота NO и какие варианты EnergyMax представлены.",
        };
    }

    return null;
}

// ==========================================
// SAFE DATABASE QUERY
// ==========================================
//
// ВАЖНО:
//
// Не делаем:
//
// prisma.product.findUnique({
//     where: { slug },
// });
//
// Потому что Prisma тогда пытается выбрать
// ВСЕ поля модели.
//
// Пока схема Neon и расширенная Prisma-модель
// синхронизируются поэтапно, это может
// приводить к runtime 500.
//
// Здесь из Neon берём только динамические
// коммерческие данные:
// - id
// - цена
// - старая цена
// - наличие
//
// Большой SEO-контент берём из content.ts.
// ==========================================

async function getDbCommerceProduct(
    slug: string,
): Promise<DbCommerceProduct | null> {
    try {
        const product =
            await prisma.product.findUnique({
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

        return product;
    } catch (error) {
        console.error(
            `[product] Failed to load commerce data for ${slug}`,
            error,
        );

        /*
         * SEO-страница продолжает работать
         * из content.ts даже при временной
         * проблеме с БД.
         */
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

    const image =
        product.images[0];

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

            title:
            product.name,

            description,

            url:
            canonicalPath,

            images:
                image
                    ? [
                        {
                            url:
                            image.src,

                            alt:
                            image.alt,
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
                image
                    ? [
                        image.src,
                    ]
                    : [],
        },
    };
}

// ==========================================
// PRODUCT STRUCTURED DATA
// ==========================================

function ProductStructuredData({
                                   product,
                                   dbProduct,
                               }: {
    product: Product;
    dbProduct: DbCommerceProduct | null;
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
        dbProduct?.priceKgs ??
        product.priceKgs;

    const inStock =
        dbProduct
            ? dbProduct.inStock
            : product.availability ===
            "in_stock";

    const additionalProperty: Array<{
        "@type": "PropertyValue";
        name: string;
        value: string;
    }> = [];

    if (product.form) {
        additionalProperty.push({
            "@type":
                "PropertyValue",

            name:
                "Форма",

            value:
            product.form,
        });
    }

    if (product.packInfo) {
        additionalProperty.push({
            "@type":
                "PropertyValue",

            name:
                "Упаковка",

            value:
            product.packInfo,
        });
    }

    /*
     * Для Product schema берём только
     * характеристики, которые реально
     * присутствуют на странице.
     *
     * Никакого keyword stuffing.
     */
    product.features
        ?.slice(0, 6)
        .forEach(
            (
                feature,
                index,
            ) => {
                additionalProperty.push({
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

        image:
            product.images.map(
                (image) =>
                    image.src.startsWith(
                        "http",
                    )
                        ? image.src
                        : `${baseUrl}${image.src}`,
            ),

        description:
        product.description,

        sku:
        product.slug,

        category:
            product.category ===
            "probiotic"
                ? "Пробиотики"
                : product.category ===
                "actives"
                    ? "Аминокислоты и функциональное питание"
                    : "Локальные формы",

        brand: {
            "@type":
                "Brand",

            name:
                "EnergyMax",
        },

        additionalProperty,

        offers: {
            "@type":
                "Offer",

            "@id":
                `${productUrl}#offer`,

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

                telephone:
                seller.phone,
            },
        },
    };

    const hub =
        getHubConfig(product);

    const breadcrumbItems = [
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
        breadcrumbItems.push({
            "@type":
                "ListItem",

            position:
                2,

            name:
            hub.label,

            item:
                `${baseUrl}${hub.href}`,
        });
    }

    breadcrumbItems.push({
        "@type":
            "ListItem",

        position:
            breadcrumbItems.length +
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
        breadcrumbItems,
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

    // --------------------------------------
    // VERIFIED CONTENT
    // --------------------------------------

    const contentProduct =
        getContentProduct(slug);

    if (!contentProduct) {
        notFound();
    }

    // --------------------------------------
    // DYNAMIC COMMERCE DATA
    // --------------------------------------

    const dbProduct =
        await getDbCommerceProduct(
            slug,
        );

    const price =
        dbProduct?.priceKgs ??
        contentProduct.priceKgs;

    const oldPrice =
        dbProduct?.oldPriceKgs ??
        contentProduct.oldPriceKgs;

    const inStock =
        dbProduct
            ? dbProduct.inStock
            : contentProduct.availability ===
            "in_stock";

    /*
     * UI получает:
     *
     * rich content -> content.ts
     * price/stock/id -> Neon
     */
    const product = {
        ...contentProduct,

        id:
            dbProduct?.id ??
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
        getHubConfig(
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
                    related,
                ): related is Product =>
                    Boolean(
                        related,
                    ),
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
            {/* ==================================
                GOOGLE / YANDEX / BING / AI
            ================================== */}

            <ProductStructuredData
                product={
                    contentProduct
                }
                dbProduct={
                    dbProduct
                }
            />

            <main className="min-h-screen bg-white pb-24">
                {/* ==================================
                    BREADCRUMBS / BACK
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

                            Каталог
                        </Link>

                        {hub && (
                            <Link
                                href={
                                    hub.href
                                }
                                className="flex items-center gap-2 text-xs font-black text-[#21AA57]"
                            >
                                {
                                    hub.label
                                }

                                <ArrowRight
                                    className="h-3.5 w-3.5"
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

                            {contentProduct
                                    .shortBenefits
                                    .length >
                                0 && (
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
                                )}

                            {/* DESCRIPTION */}

                            <p className="mt-8 text-sm leading-7 text-[#29380E]/60 md:text-base">
                                {
                                    contentProduct.description
                                }
                            </p>

                            {/* ==================================
                                CART / WHATSAPP
                            ================================== */}

                            <div className="mt-8">
                                {dbProduct ? (
                                    <AddToCartSection
                                        product={
                                            product as never
                                        }
                                    />
                                ) : (
                                    <div className="rounded-[2rem] border border-[#21AA57]/15 bg-[#F4F7F5] p-6">
                                        <p className="font-black text-[#29380E]">
                                            Оформить
                                            заказ
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-[#29380E]/55">
                                            Наличие
                                            и оформление
                                            заказа можно
                                            быстро
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
                                            в WhatsApp
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* ==================================
                                DELIVERY / DOCUMENTS
                            ================================== */}

                            <div className="mt-10 space-y-5 border-t border-gray-100 pt-8">
                                <InfoRow
                                    icon={
                                        Truck
                                    }
                                    title="Доставка"
                                >
                                    <p>
                                        По
                                        Кыргызстану
                                        доставка
                                        предоставляется
                                        в подарок.
                                        Возможность
                                        отправки
                                        в Казахстан
                                        и другие
                                        страны СНГ
                                        уточняется
                                        по стране
                                        и городу.
                                    </p>

                                    <Link
                                        href="/delivery"
                                        className="mt-1 inline-block font-semibold text-[#21AA57] hover:underline"
                                    >
                                        Условия
                                        доставки
                                    </Link>
                                </InfoRow>

                                <InfoRow
                                    icon={
                                        FileText
                                    }
                                    title="Документы"
                                >
                                    <p>
                                        Документы
                                        необходимо
                                        сверять
                                        с точным
                                        названием
                                        и формой
                                        конкретного
                                        товара.
                                    </p>

                                    <Link
                                        href="/docs"
                                        className="mt-1 inline-block font-semibold text-[#21AA57] hover:underline"
                                    >
                                        Открыть
                                        документы
                                    </Link>
                                </InfoRow>

                                <InfoRow
                                    icon={
                                        CheckCircle2
                                    }
                                    title="Проверка при получении"
                                >
                                    <p>
                                        Проверьте
                                        название,
                                        количество,
                                        срок
                                        годности
                                        и целостность
                                        упаковки
                                        до
                                        использования.
                                    </p>
                                </InfoRow>
                            </div>
                        </div>
                    </div>

                    {/* ==================================
                        KNOWLEDGE HUB LINK
                    ================================== */}

                    {hub && (
                        <section className="mt-20 overflow-hidden rounded-[2.5rem] bg-[#29380E] p-7 text-white md:p-10">
                            <div className="grid gap-7 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21AA57]">
                                    <BookOpen
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <p className="text-[10px] font-black tracking-[0.2em] text-[#21AA57] uppercase">
                                        Полезная
                                        информация
                                    </p>

                                    <h2 className="mt-2 text-2xl font-black">
                                        {
                                            hub.title
                                        }
                                    </h2>

                                    <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
                                        {
                                            hub.text
                                        }
                                    </p>
                                </div>

                                <Link
                                    href={
                                        hub.href
                                    }
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-black text-[#29380E]"
                                >
                                    Подробнее

                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </section>
                    )}

                    {/* ==================================
                        DESCRIPTION / COMPOSITION
                    ================================== */}

                    <div className="mt-20">
                        <ProductTabs
                            product={
                                product as never
                            }
                        />
                    </div>

                    {/* ==================================
                        RELATED PRODUCTS
                    ================================== */}

                    {relatedProducts.length >
                        0 && (
                            <section className="mt-20">
                                <p className="text-xs font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                    Смотрите также
                                </p>

                                <h2 className="mt-2 text-3xl font-black tracking-tight text-[#29380E] uppercase">
                                    Связанные
                                    товары
                                </h2>

                                <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    {relatedProducts.map(
                                        (
                                            related,
                                        ) => (
                                            <Link
                                                key={
                                                    related.slug
                                                }
                                                href={getProductHref(
                                                    related.slug,
                                                )}
                                                className="group rounded-[2rem] border border-gray-100 bg-[#F4F7F5] p-6 transition hover:-translate-y-1 hover:shadow-lg"
                                            >
                                                <p className="text-[10px] font-black tracking-[0.18em] text-[#21AA57] uppercase">
                                                    EnergyMax
                                                </p>

                                                <h3 className="mt-3 text-lg font-black text-[#29380E]">
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

                                                <p className="mt-5 text-lg font-black text-[#21AA57]">
                                                    {related.priceKgs.toLocaleString(
                                                        "ru-RU",
                                                    )}{" "}
                                                    сом
                                                </p>

                                                <span className="mt-5 inline-flex items-center gap-2 text-xs font-black text-[#29380E]">
                                                Подробнее

                                                <ArrowRight
                                                    className="h-3.5 w-3.5 text-[#21AA57] transition-transform group-hover:translate-x-1"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                            </Link>
                                        ),
                                    )}
                                </div>
                            </section>
                        )}

                    {/* ==================================
                        REVIEWS
                    ================================== */}

                    {dbProduct && (
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
                                результат
                                у разных
                                людей.
                            </p>

                            <div className="mt-8 grid gap-8 lg:grid-cols-2">
                                <ReviewsList
                                    productId={
                                        dbProduct.id
                                    }
                                />

                                <div className="h-fit lg:sticky lg:top-32">
                                    <ReviewForm
                                        productId={
                                            dbProduct.id
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

// ==========================================
// INFO ROW
// ==========================================

function InfoRow({
                     icon: Icon,
                     title,
                     children,
                 }: {
    icon: typeof Truck;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F4F7F5]">
                <Icon
                    className="h-5 w-5 text-[#21AA57]"
                    aria-hidden="true"
                />
            </div>

            <div>
                <h2 className="mb-1 text-sm font-bold text-[#29380E]">
                    {title}
                </h2>

                <div className="text-sm leading-relaxed text-gray-500">
                    {children}
                </div>
            </div>
        </div>
    );
}