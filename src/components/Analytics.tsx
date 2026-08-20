"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function hasAnalyticsConsent(): boolean {
    try {
        const savedConsent = localStorage.getItem("cookie-consent");

        if (!savedConsent) {
            return false;
        }

        const preferences = JSON.parse(
            savedConsent,
        ) as Partial<CookiePreferences>;

        return preferences.analytics === true;
    } catch (error) {
        console.error("Не удалось прочитать настройки cookie:", error);

        return false;
    }
}

export function Analytics() {
    const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
    const [consentChecked, setConsentChecked] = useState(false);

    useEffect(() => {
        setAnalyticsAllowed(hasAnalyticsConsent());
        setConsentChecked(true);
    }, []);

    if (!GA_ID || !consentChecked || !analyticsAllowed) {
        return null;
    }

    return (
        <>
            <Script
                id="google-analytics-library"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />

            <Script id="google-analytics-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];

                    function gtag() {
                        window.dataLayer.push(arguments);
                    }

                    gtag("js", new Date());

                    gtag("config", "${GA_ID}", {
                        page_path: window.location.pathname,
                        send_page_view: true
                    });
                `}
            </Script>
        </>
    );
}