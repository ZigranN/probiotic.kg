import type { MetadataRoute } from "next";

import { seller } from "@/config/seller";
import { products } from "@/lib/content";

// ==========================================
// STATIC PUBLIC PAGES
// ==========================================

const staticPages = [
    {
        path: "/",
        changeFrequency: "weekly",
        priority: 1,
    },
    {
        path: "/product",
        changeFrequency: "weekly",
        priority: 0.9,
    },
    {
        path: "/about",
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        path: "/info",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/blog",
        changeFrequency: "weekly",
        priority: 0.8,
    },
    {
        path: "/delivery",
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        path: "/docs",
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        path: "/faq",
        changeFrequency: "monthly",
        priority: 0.7,
    },
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
] as const;

// ==========================================
// BLOG ARTICLES
// ==========================================
//
// Эти slug реально существуют в текущем
// src/app/blog/[slug]/page.tsx.
//
// Позже вынесем статьи в единый data-файл,
// чтобы sitemap и blog не дублировали список.
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
// SITEMAP
// ==========================================

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = seller.siteUrl.replace(/\/$/, "");

    const staticUrls: MetadataRoute.Sitemap =
        staticPages.map((page) => ({
            url: `${baseUrl}${page.path}`,
            changeFrequency: page.changeFrequency,
            priority: page.priority,
        }));

    const productUrls: MetadataRoute.Sitemap =
        products.map((product) => ({
            url: `${baseUrl}/product/${product.slug}`,
            changeFrequency: "weekly",
            priority: 0.8,
        }));

    const blogUrls: MetadataRoute.Sitemap =
        blogSlugs.map((slug) => ({
            url: `${baseUrl}/blog/${slug}`,
            changeFrequency: "monthly",
            priority: 0.7,
        }));

    return [
        ...staticUrls,
        ...productUrls,
        ...blogUrls,
    ];
}