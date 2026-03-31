import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import AiChatWidget from "@/components/AiChatWidget";
import "@/lib/env"; // Валидация env переменных при старте

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
    title: "EnergyMax | Живой пробиотик Максилин",
    description: "Официальный сайт партнера EnergyMax.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
            <Analytics />
            <Providers>
                <Header />
                <main>{children}</main>
                <Footer />
                <CookieConsent />
                <AiChatWidget />
            </Providers>
        </body>
        </html>
    );
}
