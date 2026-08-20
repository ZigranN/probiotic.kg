import type { MetadataRoute } from "next";

import { seller } from "@/config/seller";

const privatePaths = [
    "/admin",
    "/admin/",
    "/dashboard",
    "/dashboard/",
    "/api",
    "/api/",
    "/cart",
    "/auth",
    "/auth/",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            /*
             * Все обычные поисковые системы:
             *
             * Google
             * Yandex
             * Bing
             * и другие стандартные поисковые роботы.
             */
            {
                userAgent: "*",

                allow: "/",

                disallow: privatePaths,
            },

            /*
             * ChatGPT Search.
             *
             * OpenAI рекомендует не блокировать
             * OAI-SearchBot, если мы хотим,
             * чтобы публичные страницы могли
             * появляться и цитироваться
             * в поиске ChatGPT.
             */
            {
                userAgent: "OAI-SearchBot",

                allow: "/",

                disallow: privatePaths,
            },
        ],

        sitemap:
            `${seller.siteUrl}/sitemap.xml`,

        host:
        seller.siteUrl,
    };
}