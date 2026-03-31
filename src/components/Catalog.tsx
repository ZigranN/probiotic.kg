import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/product/ProductCard";

export default async function Catalog() {
    // Этот запрос происходит на сервере, браузер его не видит
    const productsFromDb = await prisma.product.findMany({
        where: { inStock: true }
    });

    return (
        <section id="catalog" className="py-20 bg-[#F4F7F5]">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                {productsFromDb.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}