

## 1) Prisma schema (PostgreSQL) — `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  CUSTOMER
  ADMIN
}

enum OrderStatus {
  NEW
  IN_PROGRESS
  CONFIRMED
  SHIPPED
  DONE
  CANCELED
}

enum DeliveryMethod {
  BISHKEK_COURIER
  PICKUP
  REGIONS
}

enum PaymentMethod {
  QR_TRANSFER
}

enum PaymentStatus {
  UNPAID
  PAID
  CONFIRMED
}

enum DocumentType {
  GMP
  CERT
  DECLARATION
  COMPANY_REG
  OTHER
}

model User {
  id           Int      @id @default(autoincrement())
  email        String   @unique
  passwordHash String?  // null => guest created; can set later via reset password
  firstName    String
  lastName     String
  phone        String?  // stored normalized (e.g. +996XXXXXXXXX)
  role         Role     @default(CUSTOMER)

  orders       Order[]

  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@index([role])
}

model Product {
  id           Int      @id @default(autoincrement())

  slugRu       String   @unique
  slugKg       String   @unique

  nameRu       String
  nameKg       String

  shortDescRu  String?  @db.Text
  shortDescKg  String?  @db.Text

  descRu       String?  @db.Text
  descKg       String?  @db.Text

  // Store array of URLs: ["https://...","..."]
  images       Json     @default("[]")

  isActive     Boolean  @default(true)
  sortOrder    Int      @default(0)

  variants     Variant[]
  documents    Document[]

  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@index([isActive, sortOrder])
}

model Variant {
  id            Int      @id @default(autoincrement())
  productId     Int
  product       Product  @relation(fields: [productId], references: [id], onDelete: Cascade)

  // Variant display
  nameRu        String
  nameKg        String

  // For L-arginine: "тмин", "тмин+гвоздика", "гвоздика", "мята"
  flavorKey     String?  // stable key: "tmin" | "tmin-clove" | "clove" | "mint"

  // bundle qty: 1 or 2
  bundleQty     Int      @default(1)

  priceKgs      Int      // integer KGS
  inStock       Boolean  @default(true)
  stockQty      Int      @default(0)

  sku           String?  @unique

  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@index([productId])
  @@index([inStock])
  @@index([flavorKey, bundleQty])
}

model Order {
  id             String        @id @default(cuid())
  orderNumber    String        @unique // e.g. PKG-260220-8F3K1

  userId         Int?
  user           User?         @relation(fields: [userId], references: [id], onDelete: SetNull)

  email          String
  firstName      String
  lastName       String
  phone          String
  address        String         @db.Text

  deliveryMethod DeliveryMethod
  paymentMethod  PaymentMethod  @default(QR_TRANSFER)
  paymentStatus  PaymentStatus  @default(UNPAID)

  comment        String?        @db.Text
  adminNote      String?        @db.Text

  status         OrderStatus    @default(NEW)

  subtotalKgs    Int
  deliveryKgs    Int?           // null when “manager confirms”
  totalKgs       Int

  // Snapshot of settings used (optional but useful for audit)
  paymentInfoRu  String?        @db.Text
  paymentInfoKg  String?        @db.Text

  waMessageText  String         @db.Text // stored encoded-ready plain text

  items          OrderItem[]

  createdAt      DateTime       @default(now())
  updatedAt      DateTime       @updatedAt

  @@index([status, createdAt])
  @@index([email])
  @@index([phone])
}

model OrderItem {
  id                 Int     @id @default(autoincrement())
  orderId            String
  order              Order   @relation(fields: [orderId], references: [id], onDelete: Cascade)

  productId          Int
  variantId          Int

  // Snapshots to keep history safe even if product text changes
  productNameRuSnap  String
  productNameKgSnap  String
  variantNameRuSnap  String
  variantNameKgSnap  String

  priceKgsSnap       Int
  qty                Int

  @@index([orderId])
}

model Document {
  id         Int          @id @default(autoincrement())
  type       DocumentType
  titleRu    String
  titleKg    String
  fileUrl    String       // absolute URL or /public path

  productId  Int?
  product    Product?     @relation(fields: [productId], references: [id], onDelete: SetNull)

  sortOrder  Int          @default(0)
  isPublished Boolean     @default(true)

  createdAt  DateTime     @default(now())
  updatedAt  DateTime     @updatedAt

  @@index([type, isPublished, sortOrder])
}

model BlogPost {
  id          Int      @id @default(autoincrement())

  slugRu      String   @unique
  slugKg      String   @unique

  titleRu     String
  titleKg     String

  excerptRu   String?  @db.Text
  excerptKg   String?  @db.Text

  contentRu   String   @db.Text
  contentKg   String   @db.Text

  coverUrl    String?

  seoTitleRu  String?
  seoTitleKg  String?
  seoDescRu   String?
  seoDescKg   String?

  isPublished Boolean  @default(false)
  publishedAt DateTime?

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([isPublished, publishedAt])
}

model SiteConfig {
  id                      Int     @id @default(1) // singleton row

  whatsappPhone           String  // +996...
  supportEmail            String

  pickupAddressRu         String
  pickupAddressKg         String
  pickupHoursRu           String
  pickupHoursKg           String

  freeDeliveryThresholdKgs Int     @default(5600)

  // Payment (QR)
  paymentQrUrl            String  // URL to QR image
  paymentWhereToTextRu    String  @db.Text
  paymentWhereToTextKg    String  @db.Text

  // Delivery notes
  deliveryNoteRu          String  @db.Text
  deliveryNoteKg          String  @db.Text

  // Compliance texts
  disclaimerShortRu       String  @db.Text
  disclaimerShortKg       String  @db.Text
  disclaimerLongRu        String  @db.Text
  disclaimerLongKg        String  @db.Text

  updatedAt               DateTime @updatedAt
}

model PasswordResetToken {
  id        Int      @id @default(autoincrement())
  token     String   @unique
  userId    Int
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  expiresAt DateTime
  usedAt    DateTime?

  createdAt DateTime @default(now())

  @@index([userId])
  @@index([expiresAt])
}
```

### Seed правила (важно)

* L-arginine = 8 вариантов (4 вкуса × bundleQty 1/2).
* Все товары по 5600 (variants priceKgs=5600), кроме L-arginine bundleQty=1 (3000).
* `SiteConfig` заполняется сразу (WhatsApp, support email, QR url, “куда перевод”, тексты RU/KG).

---

## 2) API контракты (Next.js App Router) — **строго по MVP**

### 2.1 Public

#### `GET /api/public/products?lang=ru|kg`

**Response 200**

```json
{
  "items": [
    {
      "id": 1,
      "slug": "suhoy-maxilin",
      "name": "Сухой Максилин",
      "priceFromKgs": 5600,
      "inStock": true,
      "image": "https://...",
      "badgeFreeDelivery": true
    }
  ]
}
```

#### `GET /api/public/products/[slug]?lang=ru|kg`

**Response 200**

```json
{
  "product": {
    "id": 5,
    "slug": "l-arginine",
    "name": "L-arginine (4 вида)",
    "shortDesc": "...",
    "desc": "...",
    "images": ["https://..."],
    "variants": [
      { "id": 101, "name": "Тмин · 1 шт", "flavorKey": "tmin", "bundleQty": 1, "priceKgs": 3000, "inStock": true, "stockQty": 12 },
      { "id": 102, "name": "Тмин · 2 шт", "flavorKey": "tmin", "bundleQty": 2, "priceKgs": 5600, "inStock": true, "stockQty": 8 }
    ],
    "documents": [{ "id": 1, "title": "GMP", "fileUrl": "https://..." }]
  }
}
```

#### `GET /api/public/docs?type=GMP|CERT|DECLARATION|COMPANY_REG|OTHER&lang=ru|kg`

**Response 200**: список документов (только `isPublished=true`)

#### `GET /api/public/blog?lang=ru|kg&page=1`

#### `GET /api/public/blog/[slug]?lang=ru|kg`

---

### 2.2 Checkout (главное)

#### `POST /api/checkout`

**Auth:** не обязателен (guest checkout), но email обязателен.

**Request**

```json
{
  "lang": "ru",
  "email": "user@mail.com",
  "password": "optional_min_8_or_empty",
  "firstName": "Наргиз",
  "lastName": "Мамытова",
  "phone": "+996705152822",
  "address": "Бишкек, ...",
  "deliveryMethod": "BISHKEK_COURIER",
  "comment": "optional",
  "honeypot": "",
  "items": [
    { "variantId": 101, "qty": 1 },
    { "variantId": 12, "qty": 2 }
  ]
}
```

**Server rules**

* Валидация:

    * email валидный
    * password: либо пусто, либо min 8
    * phone: KG `+996` (нормализуем)
    * address min 10
    * qty 1..99
* Honeypot: если не пусто → 400.
* Rate limit: по IP + email (Upstash/Vercel KV recommended).
* Stock check: если `inStock=false` или `stockQty < qty` → 409.

**User linking**

* Если user по email существует:

    * если passwordHash != null и пароль передан → verify
    * если passwordHash == null и пароль передан → set passwordHash
    * если пароль не передан → OK (guest), user остаётся без пароля
* Если user не существует:

    * создаём user с passwordHash (если пароль передан) иначе null
    * order связываем с userId (чтобы потом после set password он увидел историю)

**Stock reservation**

* На создание заказа: `stockQty -= qty` (если отслеживаешь остатки).
* На `CANCELED`: вернуть остатки (admin action).

**Response 201**

```json
{
  "orderId": "ckxyz...",
  "orderNumber": "PKG-260220-8F3K1",
  "totalKgs": 8600,
  "wa": {
    "phone": "+996XXXXXXXXX",
    "text": "Заказ с probiotic.kg №PKG-... \nФИО: ...",
    "url": "https://wa.me/996...?...encoded"
  }
}
```

---

### 2.3 Account (auth required)

#### `GET /api/account/orders`

**Auth:** CUSTOMER/ADMIN
**Response 200**: список заказов пользователя

#### `GET /api/account/orders/[id]`

**Auth:** CUSTOMER/ADMIN

* CUSTOMER видит только свои

---

### 2.4 Admin (auth ADMIN)

#### `GET /api/admin/orders?status=NEW&search=...`

#### `PATCH /api/admin/orders/[id]`

**Request**

```json
{ "status": "CONFIRMED", "adminNote": "..." }
```

**Rules**

* При `CANCELED` → вернуть stockQty по items
* Логика paymentStatus: вручную (`UNPAID/PAID/CONFIRMED`)

#### `POST /api/admin/products`

#### `PATCH /api/admin/products/[id]`

#### `POST /api/admin/variants`

#### `PATCH /api/admin/variants/[id]`

#### `POST /api/admin/docs`

#### `PATCH /api/admin/docs/[id]`

#### `PATCH /api/admin/site-config`

(WhatsApp, QR url, “куда перевод”, тексты RU/KG)

---

### 2.5 Forgot/Reset password

#### `POST /api/auth/forgot`

**Request** `{ "email": "user@mail.com" }`
**Response** 200 always (не раскрываем существование email)

#### `POST /api/auth/reset`

**Request** `{ "token": "...", "newPassword": "min8" }`

---

## 3) UI компоненты (по страницам)

### 3.1 Global (везде)

* `TopbarTrust`
* `HeaderNav` + `LangSwitch`
* `CartButton` (badge count)
* `Footer` (контакты/политики/дисклеймер)
* `ComplianceBadge` (БАД)
* `Toast`/`Alert`
* `PdfViewerLink` (open PDF)

### 3.2 Главная

* `HeroAida`
* `HowItWorks3Steps`
* `TrustReasons`
* `BestSellersRow`
* `DeliveryPaymentBlock`
* `MiniFAQ`
* `DocsTeaser`

### 3.3 Shop

* `ShopHeader` (H1 + sub)
* `SearchInput` (optional)
* `SortSelect`
* `FreeDeliveryBanner`
* `ProductGrid` + `ProductTabs`

### 3.4 Product

* `ProductGallery`
* `PriceBlock`
* `StockBadge`
* `VariantPicker` (flavor + bundle)
* `QuantityStepper`
* `AddToCartButton`
* `WhatsAppQuickButton`
* `Accordion` (описание/состав/как принимать/время/доставка/доки/вопросы)
* `DocsListInline`
* `RelatedProducts`

### 3.5 Cart

* `CartTable`
* `CartSummary`
* `CheckoutCTA`

### 3.6 Checkout

* `AccountBlock` (войти/создать пароль/guest)
* `CheckoutForm` (zod + react-hook-form)
* `PhoneMaskInput` (+996)
* `DeliveryMethodRadio`
* `PaymentQRBlock` (QR + “куда перевод”)
* `ConsentCheckbox`
* `SubmitOrderButton` (loading)
* `AntiSpamSlot` (Turnstile placeholder)

### 3.7 Thanks

* `OrderCreatedHero`
* `OrderSummary`
* `CopyWhatsAppTextButton`
* `OpenWhatsAppButton`

### 3.8 My account

* `ProfileForm`
* `OrdersList`
* `OrderDetails`

### 3.9 Docs / Company

* `DocsFilter` (optional)
* `DocsGrid` + `DocCard`

### 3.10 Blog

* `BlogGrid` + `BlogCard`
* `ArticleView` (MDX/markdown renderer)

### 3.11 Admin

* `AdminLayout` + sidebar
* `AdminOrdersTable` + `AdminOrderDetails`
* `AdminProductsTable` + `ProductEditor` + `VariantEditor`
* `AdminDocsManager`
* `AdminConfigEditor` (WhatsApp/QR/тексты)

---

## 4) QA чек-лист приёмки (must pass)

### 4.1 Основной сценарий покупки

* [ ] RU → товар → выбрать вариант → add to cart → cart суммы корректны
* [ ] checkout: валидации (email/пароль/имя/фамилия/телефон +996/адрес)
* [ ] создаётся order (status NEW)
* [ ] thanks показывает orderNumber
* [ ] WhatsApp ссылка открывается и текст соответствует заказу
* [ ] при сумме ≥ 5600 на UI везде “доставка бесплатно”
* [ ] ниже 5600 показывается “уточнит менеджер” (Яндекс/Today Express)

### 4.2 Guest checkout + аккаунт

* [ ] guest checkout без пароля проходит
* [ ] пользователь позже делает “Forgot password” → ставит пароль → логинится
* [ ] в кабинете видит свои прошлые заказы (привязка по userId)

### 4.3 Остатки

* [ ] нельзя оформить qty больше stockQty (409)
* [ ] при создании заказа stockQty уменьшается
* [ ] при отмене админом stockQty возвращается

### 4.4 Админка

* [ ] доступ к /admin только ADMIN
* [ ] смена статуса заказа работает
* [ ] редактирование варианта (цена/остаток/наличие) отражается на витрине
* [ ] обновление SiteConfig (WhatsApp/QR/“куда перевод”) отражается на checkout/Topbar

### 4.5 SEO

* [ ] /ru и /kg имеют hreflang + canonical
* [ ] sitemap включает товары/статьи
* [ ] robots закрывает /admin и /api
* [ ] Product schema на товаре (цена KGS, availability), без Review schema

### 4.6 Performance / UX

* [ ] mobile sticky элементы не перекрывают CTA
* [ ] изображения оптимизированы (next/image)
* [ ] нет hydration ошибок (корзина SSR-safe)

### 4.7 Security

* [ ] honeypot ловит ботов
* [ ] rate limit на checkout/forgot
* [ ] формы защищены серверной валидацией (не только фронт)

---

## Следующая “атомарная” задача для AI-ассистента (с чего реально начать)

1. Создать проект + подключить Prisma + миграции + сиды **(Products/Variants/SiteConfig)**.
2. Реализовать `/api/public/products` + `/api/public/products/[slug]`.
3. Реализовать корзину (Zustand SSR-safe) + shop/product UI.

