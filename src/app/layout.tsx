import type { Metadata } from "next";

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

    title: {
        default:
            "Максилин в Кыргызстане — probiotic.kg",

        template:
            "%s | probiotic.kg",
    },

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

    alternates: {
        canonical:
            "/",
    },

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
// Помогает поисковым и AI-системам
// понять:
//
// probiotic.kg
//     ↓
// интернет-магазин в Кыргызстане
//     ↓
// Максилин / EnergyMax
//     ↓
// пробиотики / микробиота / кишечник
//
// Не используем здесь медицинские обещания.
// ==========================================

function SiteStructuredData() {
    const baseUrl =
        seller.siteUrl.replace(
            /\/$/,
            "",
        );

    const instagramUrl =
        `https://www.instagram.com/${siteConfig.instagram.replace(
            "@",
            "",
        )}/`;

    const graph = {
        "@context":
            "https://schema.org",

        "@graph": [
            // ----------------------------------
            // ORGANIZATION
            // ----------------------------------

            {
                "@type":
                    "Organization",

                "@id":
                    `${baseUrl}/#organization`,

                name:
                seller.legalName,

                alternateName:
                seller.siteName,

                url:
                baseUrl,

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

                description:
                    "Интернет-магазин продукции EnergyMax и Максилин в Кыргызской Республике.",

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
                            "Russian",
                            "Kyrgyz",
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
                            "Russian",
                        ],
                    },
                ],

                areaServed: {
                    "@type":
                        "Country",

                    name:
                        "Кыргызстан",
                },

                sameAs: [
                    instagramUrl,
                ],

                knowsAbout: [
                    "Максилин",
                    "Maxilin",
                    "Maxilin SuperProbiotic",
                    "Максилин Триллион",
                    "EnergyMax",
                    "пробиотики",
                    "Lactobacillus acidophilus 2585",
                    "микробиота кишечника",
                    "микробиом кишечника",
                ],
            },

            // ----------------------------------
            // WEBSITE
            // ----------------------------------

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

                inLanguage:
                    "ru-KG",
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
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        {/* SEO / GEO / Entity data */}

        <SiteStructuredData />

        {/* Analytics */}

        <Analytics />

        {/* Application */}

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