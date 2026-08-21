import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Providers } from "@/components/Providers";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";

import AiChatWidget from "@/components/AiChatWidget";

import { seller } from "@/config/seller";
import { siteConfig } from "@/data/site";

import "@/lib/env";

// ==========================================
// GLOBAL SEO METADATA
// ==========================================

export const metadata: Metadata = {
    metadataBase: new URL(
        seller.siteUrl,
    ),

    // --------------------------------------
    // SEARCH ENGINE VERIFICATION
    // --------------------------------------

    verification: {
        yandex:
            "47520d13adadf532",
    },

    // --------------------------------------
    // TITLE
    // --------------------------------------

    title: {
        default:
            "Максилин в Кыргызстане — probiotic.kg",

        template:
            "%s | probiotic.kg",
    },

    // --------------------------------------
    // DESCRIPTION
    // --------------------------------------

    description:
        "Максилин и продукция EnergyMax в Кыргызстане. Жидкий Максилин, сухой Максилин и Максилин Триллион. Информация о пробиотиках, штамме Lactobacillus acidophilus 2585, кишечнике, микробиоте, документах, заказе и доставке.",

    applicationName:
    seller.siteName,

    authors: [
        {
            name:
            seller.legalName,

            url:
            seller.siteUrl,
        },
    ],

    creator:
    seller.legalName,

    publisher:
    seller.legalName,

    category:
        "Пробиотики и продукция для здоровья",

    referrer:
        "origin-when-cross-origin",

    // --------------------------------------
    // CANONICAL
    // --------------------------------------

    alternates: {
        canonical:
            "/",
    },

    // --------------------------------------
    // OPEN GRAPH
    // --------------------------------------

    openGraph: {
        type:
            "website",

        locale:
            "ru_KG",

        url:
        seller.siteUrl,

        siteName:
        seller.siteName,

        title:
            "Максилин в Кыргызстане — probiotic.kg",

        description:
            "Жидкий Максилин, сухой Максилин и Максилин Триллион. Пробиотики, штамм 2585, микробиота кишечника, документы, заказ и доставка.",

        images: [
            {
                url:
                    "/images/logo-main.webp",

                alt:
                    "probiotic.kg — Максилин и продукция EnergyMax",
            },
        ],
    },

    // --------------------------------------
    // TWITTER / SOCIAL PREVIEW
    // --------------------------------------

    twitter: {
        card:
            "summary_large_image",

        title:
            "Максилин в Кыргызстане — probiotic.kg",

        description:
            "Жидкий, сухой и Максилин Триллион. Информация о пробиотиках, штамме 2585, кишечнике и микробиоте.",

        images: [
            "/images/logo-main.webp",
        ],
    },

    // --------------------------------------
    // ROBOTS
    // --------------------------------------

    robots: {
        index:
            true,

        follow:
            true,

        googleBot: {
            index:
                true,

            follow:
                true,

            "max-image-preview":
                "large",

            "max-snippet":
                -1,

            "max-video-preview":
                -1,
        },
    },

    // --------------------------------------
    // FORMAT DETECTION
    // --------------------------------------

    formatDetection: {
        telephone:
            false,

        email:
            false,

        address:
            false,
    },
};

// ==========================================
// SITE STRUCTURED DATA
// ==========================================
//
// Схема описывает:
//
// probiotic.kg
//     ↓
// ИП Мамытова Н.Т.
//     ↓
// интернет-магазин в Кыргызстане
//     ↓
// Максилин / EnergyMax
//     ↓
// доставка по Кыргызстану
//
// Без медицинских обещаний.
// ==========================================

function SiteStructuredData() {
    const baseUrl =
        seller.siteUrl.replace(
            /\/$/,
            "",
        );

    const instagramHandle =
        siteConfig.instagram
            .replace(/^@/, "")
            .trim();

    const instagramUrl =
        `https://www.instagram.com/${instagramHandle}/`;

    const graph = {
        "@context":
            "https://schema.org",

        "@graph": [
            // ==================================
            // ORGANIZATION
            // ==================================

            {
                "@type":
                    "Organization",

                "@id":
                    `${baseUrl}/#organization`,

                name:
                seller.legalName,

                alternateName: [
                    seller.siteName,
                    "probiotic.kg",
                    "Максилин Кыргызстан",
                    "EnergyMax Кыргызстан",
                ],

                url:
                baseUrl,

                // ------------------------------
                // LOGO
                // ------------------------------

                logo: {
                    "@type":
                        "ImageObject",

                    "@id":
                        `${baseUrl}/#logo`,

                    url:
                        `${baseUrl}/images/logo-main.webp`,

                    contentUrl:
                        `${baseUrl}/images/logo-main.webp`,

                    caption:
                    seller.siteName,
                },

                image: {
                    "@id":
                        `${baseUrl}/#logo`,
                },

                // ------------------------------
                // DESCRIPTION
                // ------------------------------

                description:
                    "Интернет-магазин продукции EnergyMax и Максилин в Кыргызской Республике.",

                // ------------------------------
                // CONTACTS
                // ------------------------------

                email:
                seller.email,

                telephone:
                seller.phone,

                address: {
                    "@type":
                        "PostalAddress",

                    streetAddress:
                        "ул. Малдыбаева, 25",

                    addressLocality:
                    seller.city,

                    addressCountry:
                        "KG",
                },

                contactPoint: [
                    {
                        "@type":
                            "ContactPoint",

                        telephone:
                        seller.phone,

                        contactType:
                            "customer service",

                        email:
                        seller.email,

                        areaServed:
                            "KG",

                        availableLanguage: [
                            "ru",
                            "ky",
                        ],
                    },

                    {
                        "@type":
                            "ContactPoint",

                        telephone:
                        seller.phone,

                        contactType:
                            "sales",

                        areaServed: [
                            "KG",
                            "KZ",
                        ],

                        availableLanguage: [
                            "ru",
                        ],
                    },
                ],

                // ------------------------------
                // AREA SERVED
                // ------------------------------

                areaServed: {
                    "@type":
                        "Country",

                    name:
                        "Кыргызстан",
                },

                // ------------------------------
                // SHIPPING POLICY
                // ------------------------------
                //
                // Подтверждаем только то,
                // что точно известно:
                //
                // Кыргызстан → 0 KGS.
                //
                // Казахстан и СНГ здесь
                // специально не размечаем,
                // поскольку стоимость и сроки
                // уточняются при оформлении.
                // ------------------------------

                hasShippingService: {
                    "@type":
                        "ShippingService",

                    "@id":
                        `${baseUrl}/delivery#shipping-service-kg`,

                    name:
                        "Доставка по Кыргызстану",

                    description:
                        "Доставка заказов по Кыргызской Республике предоставляется в подарок.",

                    shippingConditions: {
                        "@type":
                            "ShippingConditions",

                        shippingDestination: {
                            "@type":
                                "DefinedRegion",

                            addressCountry:
                                "KG",
                        },

                        shippingRate: {
                            "@type":
                                "MonetaryAmount",

                            value:
                                0,

                            currency:
                                "KGS",
                        },
                    },
                },

                // ------------------------------
                // SOCIAL
                // ------------------------------

                sameAs: [
                    instagramUrl,
                ],

                // ------------------------------
                // ENTITY / TOPICAL SEMANTICS
                // ------------------------------

                knowsAbout: [
                    "Максилин",
                    "Maxilin",
                    "Максилин жидкий",
                    "Жидкий Максилин",
                    "Максилин сухой",
                    "Сухой Максилин",
                    "Maxilin SuperProbiotic",
                    "Максилин Триллион",
                    "Lactobacillus acidophilus 2585",
                    "EnergyMax",
                    "пробиотики",
                    "микробиота кишечника",
                    "микробиом кишечника",
                ],
            },

            // ==================================
            // WEBSITE
            // ==================================

            {
                "@type":
                    "WebSite",

                "@id":
                    `${baseUrl}/#website`,

                url:
                baseUrl,

                name:
                    "probiotic.kg",

                alternateName: [
                    "Probiotic KG",
                    "Максилин Кыргызстан",
                ],

                description:
                    "Информационный сайт и интернет-магазин Максилин и продукции EnergyMax в Кыргызстане.",

                publisher: {
                    "@id":
                        `${baseUrl}/#organization`,
                },

                inLanguage: [
                    "ru-KG",
                    "ky-KG",
                ],
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html:
                    JSON.stringify(
                        graph,
                    ).replace(
                        /</g,
                        "\\u003c",
                    ),
            }}
        />
    );
}

// ==========================================
// ROOT LAYOUT
// ==========================================

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        {/* SEO / GEO / ENTITY DATA */}

        <SiteStructuredData />

        {/* ANALYTICS */}

        <Analytics />

        {/* APPLICATION */}

        <Providers>
            <Header />

            {children}

            <Footer />

            <CookieConsent />

            <AiChatWidget />
        </Providers>
        </body>
        </html>
    );
}