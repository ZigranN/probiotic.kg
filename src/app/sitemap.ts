import type { MetadataRoute } from "next";

import { seller } from "@/config/seller";
import { products } from "@/lib/content";

// ==========================================
// SITEMAP CONFIG
// ==========================================
//
// В sitemap включаем только реальные,
// индексируемые страницы.
//
// Не создаём URL из поисковых фраз:
//
// /купить-максилин
// /лучший-пробиотик
// /ларгинин-оксид-азота
//
// Вместо этого одна сильная страница
// отвечает сразу на группу связанных
// запросов.
// ==========================================

type SitemapPage = {
    path: string;
    changeFrequency:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never";
    priority: number;
};

// ==========================================
// CORE SITE PAGES
// ==========================================

const corePages: SitemapPage[] = [
    {
        path: "/",
        changeFrequency: "weekly",
        priority: 1,
    },

    // ======================================
    // MAXILIN SEO / GEO CLUSTER
    // ======================================

    {
        path: "/maxilin",
        changeFrequency: "weekly",
        priority: 1,
    },

    {
        path: "/maxilin/superprobiotic",
        changeFrequency: "weekly",
        priority: 1,
    },

    {
        path: "/maxilin/how-it-works",
        changeFrequency: "monthly",
        priority: 0.9,
    },

    {
        path: "/maxilin/science",
        changeFrequency: "monthly",
        priority: 0.9,
    },

    {
        path: "/maxilin/gut-health",
        changeFrequency: "monthly",
        priority: 0.9,
    },

    // ======================================
    // L-ARGININE SEO / GEO CLUSTER
    // ======================================

    {
        path: "/l-arginine",
        changeFrequency: "weekly",
        priority: 1,
    },

    // ======================================
    // KNOWLEDGE / TRUST
    // ======================================

    {
        path: "/blog",
        changeFrequency: "weekly",
        priority: 0.8,
    },

    {
        path: "/info",
        changeFrequency: "monthly",
        priority: 0.8,
    },

    {
        path: "/faq",
        changeFrequency: "monthly",
        priority: 0.8,
    },

    {
        path: "/docs",
        changeFrequency: "monthly",
        priority: 0.8,
    },

    // ======================================
    // COMPANY / COMMERCIAL
    // ======================================

    {
        path: "/about",
        changeFrequency: "monthly",
        priority: 0.7,
    },

    {
        path: "/delivery",
        changeFrequency: "monthly",
        priority: 0.8,
    },

    // ======================================
    // LEGAL
    // ======================================

    {
        path: "/offer",
        changeFrequency: "yearly",
        priority: 0.3,
    },

    {
        path: "/policy",
        changeFrequency: "yearly",
        priority: 0.3,
    },
];

// ==========================================
// IMPORTANT PRODUCT PAGES
// ==========================================
//
// Эти URL особенно важны для коммерческих
// поисковых запросов.
//
// Максилин:
// - жидкий Максилин
// - сухой Максилин
//
// L-Аргинин:
// - L-Arginine
// - Ларгинин
// - Эль-Аргинин
// - тмин
// - гвоздика
// - мята
// ==========================================

const priorityProductSlugs = new Set([
    "maxilin-liquid",
    "maxilin-dry",

    "l-arginine-sublingual-gel",
    "l-arginine-tmin",
    "l-arginine-tmin-gvozdika",
    "l-arginine-gvozdika",
    "l-arginine-myata",
]);

// ==========================================
// SPECIAL SEO LANDINGS
// ==========================================
//
// Для SuperProbiotic используем отдельную
// сильную SEO-страницу:
//
// /maxilin/superprobiotic
//
// Поэтому product URL этой же сущности
// пока не отправляем в sitemap, чтобы
// не создавать конкуренцию двух страниц.
//
// Позже при необходимости выберем один
// основной canonical URL.
// ==========================================

const excludedProductSlugs = new Set([
    "maxilin-superprobiotic-50",
]);

// ==========================================
// BLOG ARTICLES
// ==========================================
//
// Добавляй сюда только реально существующие
// статьи.
//
// Не надо заранее добавлять URL, которых
// ещё нет.
// ==========================================

const blogSlugs = [
    "microbiome",
    "bloating",
    "stool",
    "immunity",
    "energy",
    "women",
    "kids",
] as const;

// ==========================================
// BUILD SITEMAP
// ==========================================

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl =
        seller.siteUrl.replace(/\/$/, "");

    // --------------------------------------
    // CORE PAGES
    // --------------------------------------

    const coreUrls: MetadataRoute.Sitemap =
        corePages.map((page) => ({
            url:
                `${baseUrl}${page.path}`,

            changeFrequency:
            page.changeFrequency,

            priority:
            page.priority,
        }));

    // --------------------------------------
    // PRODUCT PAGES
    // --------------------------------------

    const productUrls: MetadataRoute.Sitemap =
        products
            .filter(
                (product) =>
                    !excludedProductSlugs.has(
                        product.slug,
                    ),
            )
            .map((product) => {
                const isPriorityProduct =
                    priorityProductSlugs.has(
                        product.slug,
                    );

                return {
                    url:
                        `${baseUrl}/product/${product.slug}`,

                    changeFrequency:
                        "weekly" as const,

                    priority:
                        isPriorityProduct
                            ? 0.95
                            : 0.75,
                };
            });

    // --------------------------------------
    // BLOG
    // --------------------------------------

    const blogUrls: MetadataRoute.Sitemap =
        blogSlugs.map((slug) => ({
            url:
                `${baseUrl}/blog/${slug}`,

            changeFrequency:
                "monthly" as const,

            priority:
                slug === "microbiome"
                    ? 0.85
                    : 0.7,
        }));

    // --------------------------------------
    // REMOVE POSSIBLE DUPLICATES
    // --------------------------------------

    const allUrls = [
        ...coreUrls,
        ...productUrls,
        ...blogUrls,
    ];

    const uniqueUrls =
        Array.from(
            new Map(
                allUrls.map((item) => [
                    item.url,
                    item,
                ]),
            ).values(),
        );

    return uniqueUrls;
}