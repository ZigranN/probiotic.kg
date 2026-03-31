import { FREE_DELIVERY_FROM_KGS, WHATSAPP_PHONE } from "./constants";

export interface CartItem {
  productName: string;
  variantTitle: string;
  qty: number;
  priceKgs: number | null;
}

export function formatKgs(n: number) {
  return new Intl.NumberFormat("ru-RU").format(n);
}

export function buildWhatsAppText(items: CartItem[]) {
  const lines: string[] = [];
  lines.push("Здравствуйте! Хочу оформить заказ с сайта Maxilin.");
  lines.push("");

  let total = 0;
  lines.push("🧾 Корзина:");
  for (const it of items) {
    const price = it.priceKgs;
    const linePrice = price === null ? "цена: уточнить" : `${formatKgs(price)} сом`;
    lines.push(`• ${it.productName} — ${it.variantTitle} × ${it.qty} (${linePrice})`);
    if (price !== null) total += price * it.qty;
  }

  lines.push("");
  lines.push(`Итого (без учёта позиций с уточнением): ${formatKgs(total)} сом`);

  if (total >= FREE_DELIVERY_FROM_KGS) {
    lines.push(`🚚 Бесплатная доставка (от ${formatKgs(FREE_DELIVERY_FROM_KGS)} сом)`);
  } else {
    lines.push(`🚚 Доставка: уточните условия (бесплатно от ${formatKgs(FREE_DELIVERY_FROM_KGS)} сом)`);
  }

  return lines.join("\n");
}

export function buildWaLink(text: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
