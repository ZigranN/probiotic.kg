"use client";

import Script from "next/script";
import { useState, useEffect } from "react";

export function Analytics() {
    const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    const [consent, setConsent] = useState<{
        analytics: boolean;
        marketing: boolean;
    } | null>(null);

    useEffect(() => {
        // Читаем согласие из localStorage
        const savedConsent = localStorage.getItem("cookie-consent");
        if (savedConsent) {
            const preferences = JSON.parse(savedConsent);
            setConsent({
                analytics: preferences.analytics || false,
                marketing: preferences.marketing || false,
            });
        }
    }, []);

    // Не загружаем скрипты пока не получили согласие
    if (!consent) return null;

    return (
        <>
            {/* Google Analytics - только если есть согласие на аналитику */}
            {GA_ID && consent.analytics && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_ID}');
                        `}
                    </Script>
                </>
            )}

            {/* Facebook Pixel - только если есть согласие на маркетинг */}
            {FB_PIXEL_ID && consent.marketing && (
                <Script id="facebook-pixel" strategy="afterInteractive">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '${FB_PIXEL_ID}');
                        fbq('track', 'PageView');
                    `}
                </Script>
            )}
        </>
    );
}
