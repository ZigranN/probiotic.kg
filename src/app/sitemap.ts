import { products } from "@/lib/content";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://probiotic.kg";

    const productUrls = products.map((p) => ({
        url: `${baseUrl}/product/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [
        { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${baseUrl}/product`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/info`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/business`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        ...productUrls,
    ];
}
