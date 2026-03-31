// Глобальные константы приложения

export const WHATSAPP_PHONE = "996990105555";
export const FREE_DELIVERY_FROM_KGS = 5600;
export const SUPPORT_EMAIL = "fullstacknargiz@gmail.com";
export const SITE_NAME = "EnergyMax";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Контакты
export const CONTACTS = {
  whatsapp: WHATSAPP_PHONE,
  email: SUPPORT_EMAIL,
  address: "ТЦ Вефа Блок С, 8 этаж, офис Energymax Group / ул. Малдыбаева 25",
  instagram: "@prozdorovie_kg",
  telegram: "@nargizfullstack",
} as const;

// Настройки доставки
export const DELIVERY = {
  freeFrom: FREE_DELIVERY_FROM_KGS,
  currency: "сом",
  bishkekTime: "2-4 часа",
  regionsTime: "до 24 часов",
} as const;
