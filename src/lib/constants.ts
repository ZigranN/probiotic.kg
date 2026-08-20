import { seller } from "@/config/seller";

// ==========================================
// GLOBAL APP CONSTANTS
// ==========================================
//
// Юридические данные, контакты и адрес
// НЕ дублируем здесь вручную.
// Единый источник истины:
// src/config/seller.ts
// ==========================================

export const SITE_NAME = seller.siteName;
export const SITE_URL = seller.siteUrl;

export const WHATSAPP_PHONE = seller.whatsappPhone;
export const SUPPORT_EMAIL = seller.email;

// ==========================================
// CONTACTS
// ==========================================

export const CONTACTS = {
    phone: seller.phone,
    phoneHref: seller.phoneHref,

    whatsapp: seller.whatsappPhone,

    email: seller.email,

    address: seller.legalAddress,

    instagram: "@prozdorovie_kg",
    telegram: "@nargizfullstack",
} as const;

// ==========================================
// DELIVERY
// ==========================================
//
// Подтверждённое текущее условие магазина:
// доставка предоставляется в подарок.
//
// Не указываем жёсткие сроки вроде
// "2–4 часа" или "до 24 часов",
// поскольку фактический срок зависит от
// города, региона и способа доставки.
// ==========================================

export const DELIVERY = {
    isGift: true,

    label: "Доставка — в подарок",

    description:
        "Доставка заказов по Кыргызстану предоставляется в подарок. Способ и срок доставки подтверждает менеджер при оформлении заказа.",

    bishkekTime:
        "Срок доставки подтверждает менеджер",

    regionsTime:
        "Срок доставки подтверждает менеджер",

    currency: seller.currency,
    currencyCode: seller.currencyCode,
} as const;