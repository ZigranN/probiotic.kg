import { seller } from "@/config/seller";

export interface CartItem {
    productName: string;
    variantTitle: string;
    qty: number;
    priceKgs: number | null;
}

export function formatKgs(value: number) {
    return new Intl.NumberFormat("ru-RU").format(value);
}

export function buildWhatsAppText(items: CartItem[]) {
    const lines: string[] = [];

    lines.push(
        `Здравствуйте! Хочу оформить заказ с сайта ${seller.siteName}.`,
    );

    lines.push("");
    lines.push("🧾 Мой заказ:");

    let total = 0;
    let hasUnknownPrice = false;

    for (const item of items) {
        const quantity =
            Number.isInteger(item.qty) && item.qty > 0
                ? item.qty
                : 1;

        if (item.priceKgs === null) {
            hasUnknownPrice = true;

            lines.push(
                `• ${item.productName} — ${item.variantTitle} × ${quantity} — цену уточнить`,
            );

            continue;
        }

        const itemTotal =
            item.priceKgs * quantity;

        total += itemTotal;

        lines.push(
            `• ${item.productName} — ${item.variantTitle} × ${quantity} — ${formatKgs(itemTotal)} сом`,
        );
    }

    lines.push("");

    if (hasUnknownPrice) {
        lines.push(
            `💰 Сумма известных позиций: ${formatKgs(total)} сом`,
        );

        lines.push(
            "Стоимость остальных позиций уточнит менеджер.",
        );
    } else {
        lines.push(
            `💰 Итого: ${formatKgs(total)} сом`,
        );
    }

    lines.push("");
    lines.push("🎁 Доставка — в подарок.");
    lines.push(
        "📦 Наличие и детали доставки подтверждает менеджер.",
    );

    return lines.join("\n");
}

export function buildWaLink(text: string) {
    return `https://wa.me/${seller.whatsappPhone}?text=${encodeURIComponent(
        text,
    )}`;
}