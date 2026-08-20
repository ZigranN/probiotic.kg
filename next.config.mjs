/** @type {import("next").NextConfig} */
const nextConfig = {
    output: "standalone",

    /**
     * Не показываем технологию Next.js
     * в HTTP-заголовке X-Powered-By.
     */
    poweredByHeader: false,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],

        formats: [
            "image/avif",
            "image/webp",
        ],
    },

    reactStrictMode: true,

    compiler: {
        removeConsole:
            process.env.NODE_ENV === "production"
                ? {
                    exclude: [
                        "error",
                        "warn",
                    ],
                }
                : false,
    },

    /**
     * Production build должен падать,
     * если в проекте есть TypeScript-ошибки.
     */
    typescript: {
        ignoreBuildErrors: false,
    },

    /**
     * Server Actions уже являются стабильной
     * возможностью Next.js, но их дополнительные
     * настройки пока находятся в experimental.
     *
     * Ограничиваем тело запроса до 2 MB.
     */
    experimental: {
        serverActions: {
            bodySizeLimit: "2mb",
        },
    },
};

export default nextConfig;