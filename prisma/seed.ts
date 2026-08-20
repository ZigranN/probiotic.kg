import "dotenv/config";

import {
    Category,
    Prisma,
    PrismaClient,
} from "@prisma/client";

import { products } from "../src/lib/content";

const prisma = new PrismaClient();

/**
 * Явное соответствие категорий content.ts -> Prisma enum.
 *
 * Не используем .toUpperCase(), потому что TypeScript тогда
 * получает обычную строку, а Prisma ожидает enum Category.
 */
const CATEGORY_MAP = {
    probiotic: Category.PROBIOTIC,
    candles: Category.CANDLES,
    actives: Category.ACTIVES,
} satisfies Record<
    (typeof products)[number]["category"],
    Category
>;

/**
 * Prisma Json требует специальный InputJsonValue.
 * Через сериализацию получаем чистые JSON-данные без
 * методов, undefined и других неподдерживаемых значений.
 */
function toJson(value: unknown): Prisma.InputJsonValue {
    return JSON.parse(
        JSON.stringify(value),
    ) as Prisma.InputJsonValue;
}

/**
 * Показываем старую цену только тогда,
 * когда она действительно выше текущей.
 *
 * Например:
 * oldPriceKgs: 5600
 * priceKgs: 5600
 *
 * не является скидкой и должно превратиться в null.
 */
function getOldPrice(
    oldPriceKgs: number | undefined,
    priceKgs: number,
): number | null {
    if (
        typeof oldPriceKgs === "number" &&
        oldPriceKgs > priceKgs
    ) {
        return oldPriceKgs;
    }

    return null;
}

/**
 * Минимальная защита от случайной записи
 * некорректного товара в production БД.
 */
function validateProduct(
    product: (typeof products)[number],
) {
    if (!product.slug.trim()) {
        throw new Error(
            `У товара "${product.name}" отсутствует slug`,
        );
    }

    if (!product.name.trim()) {
        throw new Error(
            `У товара "${product.slug}" отсутствует название`,
        );
    }

    if (
        !Number.isInteger(product.priceKgs) ||
        product.priceKgs <= 0
    ) {
        throw new Error(
            `Некорректная цена у товара "${product.slug}": ${product.priceKgs}`,
        );
    }

    if (!CATEGORY_MAP[product.category]) {
        throw new Error(
            `Неизвестная категория "${product.category}" у товара "${product.slug}"`,
        );
    }

    if (
        !Array.isArray(product.images) ||
        product.images.length === 0
    ) {
        console.warn(
            `⚠️ У товара "${product.slug}" нет изображений`,
        );
    }
}

async function main() {
    console.log("");
    console.log("========================================");
    console.log(" Синхронизация товаров probiotic.kg");
    console.log("========================================");
    console.log("");

    console.log(
        `Найдено товаров в content.ts: ${products.length}`,
    );

    console.log("");

    for (const product of products) {
        validateProduct(product);

        const category =
            CATEGORY_MAP[product.category];

        const oldPriceKgs = getOldPrice(
            product.oldPriceKgs,
            product.priceKgs,
        );

        const inStock =
            product.availability === "in_stock";

        /*
         * Все общие поля держим в одном объекте,
         * чтобы create/update не расходились.
         */
        const data = {
            name: product.name,

            category,

            heroTag:
                product.heroTag?.trim() || null,

            form:
                product.form?.trim() || null,

            packInfo:
                product.packInfo?.trim() || null,

            description:
                product.description.trim(),

            priceKgs:
            product.priceKgs,

            oldPriceKgs,

            inStock,

            shortBenefits: toJson(
                product.shortBenefits ?? [],
            ),

            forWhom: toJson(
                product.forWhom ?? [],
            ),

            keyNotes: toJson(
                product.keyNotes ?? [],
            ),

            howToUse: toJson(
                product.howToUse ?? [],
            ),

            cautions: toJson(
                product.cautions ?? [],
            ),

            storage: toJson(
                product.storage ?? [],
            ),

            images: toJson(
                product.images ?? [],
            ),
        };

        const savedProduct =
            await prisma.product.upsert({
                where: {
                    slug: product.slug,
                },

                update: data,

                create: {
                    slug: product.slug,
                    ...data,
                },

                select: {
                    id: true,
                    slug: true,
                    name: true,
                    priceKgs: true,
                    oldPriceKgs: true,
                    inStock: true,
                    category: true,
                },
            });

        const priceText =
            savedProduct.oldPriceKgs !== null
                ? `${savedProduct.oldPriceKgs} → ${savedProduct.priceKgs} сом`
                : `${savedProduct.priceKgs} сом`;

        console.log(
            `✅ ${savedProduct.name}`,
        );

        console.log(
            `   slug: ${savedProduct.slug}`,
        );

        console.log(
            `   category: ${savedProduct.category}`,
        );

        console.log(
            `   price: ${priceText}`,
        );

        console.log(
            `   stock: ${
                savedProduct.inStock
                    ? "В наличии"
                    : "Нет в наличии"
            }`,
        );

        console.log("");
    }

    /*
     * ВАЖНО:
     * Не удаляем автоматически товары из БД,
     * которых больше нет в content.ts.
     *
     * На них могут ссылаться старые OrderItem.
     * Вместо этого только показываем предупреждение.
     */
    const sourceSlugs = products.map(
        (product) => product.slug,
    );

    const extraProducts =
        await prisma.product.findMany({
            where: {
                slug: {
                    notIn: sourceSlugs,
                },
            },

            select: {
                slug: true,
                name: true,
            },
        });

    if (extraProducts.length > 0) {
        console.log(
            "⚠️ В базе есть товары, которых нет в content.ts:",
        );

        for (const product of extraProducts) {
            console.log(
                `   - ${product.name} (${product.slug})`,
            );
        }

        console.log("");
        console.log(
            "Они НЕ были удалены автоматически.",
        );

        console.log("");
    }

    const databaseProductCount =
        await prisma.product.count();

    console.log("========================================");
    console.log("✅ Синхронизация завершена");
    console.log(
        `Товаров в content.ts: ${products.length}`,
    );
    console.log(
        `Товаров в базе: ${databaseProductCount}`,
    );
    console.log("========================================");
    console.log("");
}

main()
    .catch((error: unknown) => {
        console.error("");
        console.error(
            "❌ Ошибка синхронизации товаров:",
            error,
        );

        /*
         * Не используем process.exit(1),
         * чтобы Prisma успел корректно отключиться.
         */
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });