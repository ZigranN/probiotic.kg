import type { MetadataRoute } from "next";

import { seller } from "@/config/seller";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",

                allow: "/",

                disallow: [
                    "/admin/",
                    "/dashboard/",
                    "/api/",
                    "/cart",
                ],
            },
        ],

        sitemap: `${seller.siteUrl}/sitemap.xml`,

        host: seller.siteUrl,
    };
}