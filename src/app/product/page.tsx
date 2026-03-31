import Catalog from "@/components/Catalog";

export const metadata = {
    title: "Каталог — Maxilin EnergyMax",
    description:
        "Каталог продукции EnergyMax: Maxilin жидкий и сухой. Выбор формата, цены, наличие, заказ в WhatsApp.",
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[#F4F7F5]">
            <Catalog />
        </main>
    );
}
