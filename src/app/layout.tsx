import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import AiChatWidget from "@/components/AiChatWidget";

import { seller } from "@/config/seller";

import "@/lib/env";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
    metadataBase: new URL(seller.siteUrl),

    title: {
        default:
            "probiotic.kg — Максилин и продукция EnergyMax в Кыргызстане",
        template: "%s | probiotic.kg",
    },

    description:
        "Интернет-магазин продукции EnergyMax в Кыргызстане. Максилин, L-аргинин и другая продукция. Каталог, информация о товарах, документы, заказ и доставка по Кыргызской Республике.",

    applicationName: seller.siteName,

    authors: [
        {
            name: seller.legalName,
        },
    ],

    creator: seller.legalName,
    publisher: seller.legalName,

    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",
        locale: "ru_KG",
        url: seller.siteUrl,
        siteName: seller.siteName,

        title:
            "probiotic.kg — Максилин и продукция EnergyMax в Кыргызстане",

        description:
            "Каталог продукции EnergyMax в Кыргызстане: информация о товарах, документы, оформление заказа и доставка.",
    },

    twitter: {
        card: "summary_large_image",

        title:
            "probiotic.kg — Максилин и продукция EnergyMax в Кыргызстане",

        description:
            "Каталог продукции EnergyMax в Кыргызстане: товары, документы, заказ и доставка.",
    },

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        <Analytics />

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