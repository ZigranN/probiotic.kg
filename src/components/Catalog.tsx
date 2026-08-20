import { prisma } from "@/lib/prisma";

import ProductCard from "@/components/product/ProductCard";

// ==========================================
// CATALOG
// ==========================================
//
// ВАЖНО:
//
// В Prisma schema уже добавлены новые поля:
// composition, features, faq, variants,
// seoTitle и др.
//
// Но эти колонки пока НЕ применены к Neon.
//
// Поэтому здесь нельзя использовать:
//
// prisma.product.findMany()
//
// без select.
//
// Иначе Prisma пытается запросить все поля
// новой схемы и главная падает в runtime.
// ==========================================

export default async function Catalog() {
    try {
        const productsFromDb =
            await prisma.product.findMany({
                where: {
                    inStock: true,
                },

                /*
                 * Запрашиваем только колонки,
                 * которые уже существуют
                 * в текущей production БД
                 * и реально нужны ProductCard.
                 */
                select: {
                    id: true,
                    slug: true,
                    name: true,
                    description: true,

                    oldPriceKgs: true,
                    priceKgs: true,

                    inStock: true,
                    images: true,
                },

                orderBy: {
                    createdAt: "asc",
                },
            });

        if (productsFromDb.length === 0) {
            return (
                <section
                    id="catalog"
                    className="bg-[#F4F7F5] py-20"
                >
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-3xl rounded-[2rem] border border-gray-100 bg-white p-8 text-center">
                            <h2 className="text-2xl font-black text-[#29380E]">
                                Каталог обновляется
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-[#29380E]/60">
                                Наличие товаров можно уточнить
                                у менеджера.
                            </p>
                        </div>
                    </div>
                </section>
            );
        }

        return (
            <section
                id="catalog"
                className="bg-[#F4F7F5] py-20"
            >
                <div className="container mx-auto px-6">
                    <div className="mb-10">
                        <p className="mb-2 text-xs font-black tracking-[0.2em] text-[#21AA57] uppercase">
                            Каталог
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-[#29380E] uppercase italic md:text-5xl">
                            Продукция
                            <span className="text-[#21AA57]">
                                {" "}
                                в наличии
                            </span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#29380E]/55">
                            Актуальная цена и наличие товаров
                            загружаются из каталога
                            probiotic.kg.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {productsFromDb.map(
                            (product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ),
                        )}
                    </div>
                </div>
            </section>
        );
    } catch (error: unknown) {
        /*
         * Ошибка каталога не должна ронять
         * всю главную страницу.
         */
        console.error(
            "Ошибка загрузки каталога:",
            error,
        );

        return (
            <section
                id="catalog"
                className="bg-[#F4F7F5] py-20"
            >
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl rounded-[2rem] border border-red-100 bg-white p-8 text-center shadow-sm">
                        <h2 className="text-2xl font-black text-[#29380E]">
                            Каталог временно недоступен
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-[#29380E]/60">
                            Информационные материалы сайта
                            доступны. Наличие и цену товаров
                            можно уточнить у менеджера.
                        </p>

                        <a
                            href="https://wa.me/996990105555"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex rounded-xl bg-[#21AA57] px-6 py-3 text-sm font-black text-white"
                        >
                            Написать в WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}