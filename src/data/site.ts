import { seller } from "@/config/seller";
import type { ProductCategory } from "./types";

export const siteConfig = {
    brandName: "EnergyMax",
    siteName: seller.siteName,

    whatsappPhone: seller.whatsappPhone,
    supportEmail: seller.email,

    address: seller.legalAddress,

    pickupAddress:
        "Самовывоз доступен по предварительному согласованию с менеджером",

    pickupHours:
        "Время получения заказа согласовывается с менеджером",

    instagram: "@energymax.kyrgyzstan",
    telegram: "@nargizfullstack",

    freeDeliveryFromKgs: null,

    currency: seller.currency,
    currencyCode: seller.currencyCode,

    paymentMethods: [
        "Способ оплаты согласовывается с менеджером после подтверждения заказа",
    ],

    checkoutMode: "guest_with_optional_account",

    legalDisclaimer:
        "Не является лекарственным средством. Информация на сайте носит справочный характер и не заменяет консультацию специалиста.",

    publicOfferDisclaimer:
        "Условия оформления, оплаты и получения заказа определяются публичной офертой и подтверждаются менеджером.",

    documentsDisclaimer:
        "Документы размещаются в ознакомительных целях и относятся только к указанным в них товарам.",
} as const;