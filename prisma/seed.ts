const { PrismaClient } = require('@prisma/client');
// Важно: если путь другой, поправь его
const { products } = require('../src/lib/content');

const prisma = new PrismaClient();

async function main() {
    console.log('--- Начинаю синхронизацию товаров ---');

    for (const p of products) {
        await prisma.product.upsert({
            where: { slug: p.slug },
            update: {
                name: p.name,
                category: p.category.toUpperCase(), // Превращаем 'probiotic' в 'PROBIOTIC'
                heroTag: p.heroTag || null,
                form: p.form || null,
                packInfo: p.packInfo || null,
                description: p.description,
                priceKgs: p.priceKgs,
                oldPriceKgs: p.oldPriceKgs || null,
                inStock: p.availability === 'in_stock',
                // Записываем массивы как JSON
                shortBenefits: p.shortBenefits,
                forWhom: p.forWhom || [],
                keyNotes: p.keyNotes || [],
                howToUse: p.howToUse || [],
                cautions: p.cautions || [],
                storage: p.storage || [],
                images: p.images,
            },
            create: {
                slug: p.slug,
                name: p.name,
                category: p.category.toUpperCase(),
                heroTag: p.heroTag || null,
                form: p.form || null,
                packInfo: p.packInfo || null,
                description: p.description,
                priceKgs: p.priceKgs,
                oldPriceKgs: p.oldPriceKgs || null,
                shortBenefits: p.shortBenefits,
                images: p.images,
                forWhom: p.forWhom || [],
                keyNotes: p.keyNotes || [],
                howToUse: p.howToUse || [],
                cautions: p.cautions || [],
                storage: p.storage || [],
            },
        });
    }

    console.log('✅ Все товары успешно перенесены в Neon!');
}

main()
    .catch((e) => {
        console.error('Ошибка при заполнении:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });