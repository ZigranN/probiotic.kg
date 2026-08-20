import { seller } from "@/config/seller";

// ==========================================
// LLMS.TXT
// ==========================================
//
// Дополнительная текстовая карта сайта
// для AI-систем и агентов.
//
// ВАЖНО:
//
// - не заменяет robots.txt
// - не заменяет sitemap.xml
// - не является фактором ранжирования Google
// - содержит только публичную,
//   проверяемую информацию
//
// ==========================================

export const dynamic = "force-static";

export const revalidate = 86400;

// ==========================================
// ROUTE
// ==========================================

export async function GET() {
    const baseUrl =
        seller.siteUrl.replace(/\/$/, "");

    const content = `# probiotic.kg

> Информационный сайт и интернет-магазин продукции Максилин и EnergyMax в Кыргызстане.

Canonical site:
${baseUrl}

Language:
Russian / Kyrgyzstan

## Main topics

- Максилин
- Maxilin
- пробиотик Максилин
- Lactobacillus acidophilus 2585
- жидкий Максилин
- сухой Максилин
- Максилин Триллион
- Maxilin SuperProbiotic
- кишечник
- микробиота кишечника
- микробиом кишечника
- пробиотики
- L-Аргинин
- L-Arginine
- Larginine
- Ларгинин
- Эль-Аргинин
- аминокислота аргинин
- оксид азота
- nitric oxide
- NO
- EnergyMax
- Энерджимакс

## Maxilin

Максилин — пробиотическая линейка.

На probiotic.kg представлены три формы Максилина.

### 1. Жидкий Максилин

- жидкая кисломолочная форма
- Lactobacillus acidophilus 2585
- 500 мл
- первая коммерческая форма линейки появилась в 2020 году

Page:
${baseUrl}/product/maxilin-liquid

### 2. Сухой Максилин

- сухая кисломолочная форма
- Lactobacillus acidophilus 2585
- 20 саше
- производственная среда на основе обезжиренного безлактозного молока

Page:
${baseUrl}/product/maxilin-dry

### 3. Максилин Триллион

Also known as:
- Maxilin SuperProbiotic
- Maxilin Trillion
- Максилин 1 Триллион
- в поисковых запросах может встречаться как "Шанхайский Максилин"

Facts:

- сухая немолочная форма
- 1 штамм
- Lactobacillus acidophilus 2585
- 20 billion CFU per sachet
- 50 sachets
- 1 trillion CFU total per package
- plant production medium based on grape seeds
- production: China

Page:
${baseUrl}/maxilin/superprobiotic

Important:
"Шанхайский Максилин" не является отдельной четвертой формой.
На probiotic.kg этот поисковый термин относится к Maxilin SuperProbiotic / Максилин Триллион.

## Maxilin knowledge pages

Main Maxilin page:
${baseUrl}/maxilin

How Maxilin works:
${baseUrl}/maxilin/how-it-works

Lactobacillus acidophilus 2585, science and documents:
${baseUrl}/maxilin/science

Gut microbiota and microbiome:
${baseUrl}/maxilin/gut-health

Documents:
${baseUrl}/docs

## Lactobacillus acidophilus 2585

The Maxilin forms presented on probiotic.kg are associated with:

Lactobacillus acidophilus 2585

Historical identifiers referenced in the site's informational materials include:

- VKPM B-2585
- CGMCC 38080
- INTEROCO EC-01-004579
- Eurasian patent EA 014227 B1

Patent and deposit information provides historical and technological context.

It should not be interpreted as proof that every current product has identical composition or guarantees a medical result.

## L-Arginine

L-Аргинин and L-Arginine refer to the amino acid L-arginine.

Search spelling variants may include:

- L-Arginine
- L-Аргинин
- Larginine
- Ларгинин
- Эль-Аргинин
- Эль Аргинин
- Аргинин

Main information page:
${baseUrl}/l-arginine

## L-Arginine and nitric oxide

L-arginine is an amino acid.

In human biochemistry, L-arginine can serve as a substrate for nitric oxide synthase enzymes involved in the formation of nitric oxide (NO).

L-arginine and nitric oxide are not the same substance.

This biochemical relationship should not be interpreted as a promise that a specific L-arginine product treats a disease.

## L-Arginine EnergyMax variants

### L-Аргинин — Тмин

${baseUrl}/product/l-arginine-tmin

### L-Аргинин — Тмин + гвоздика

${baseUrl}/product/l-arginine-tmin-gvozdika

### L-Аргинин — Гвоздика

${baseUrl}/product/l-arginine-gvozdika

### L-Аргинин — Мята

${baseUrl}/product/l-arginine-myata

Main product page:

${baseUrl}/product/l-arginine-sublingual-gel

## Gut health

The site contains educational information about:

- кишечник
- микробиота
- микробиом
- микрофлора кишечника
- пищевые волокна
- питание
- вода
- сон
- физическая активность
- probiotics

Main page:

${baseUrl}/maxilin/gut-health

## Shopping

Catalog:

${baseUrl}/#catalog

Products can be ordered through probiotic.kg and WhatsApp.

Main sales region:
Kyrgyzstan.

City:
Bishkek.

Delivery:
Delivery within Kyrgyzstan is available.

International shipping:
Shipment to Kazakhstan and other CIS countries may be possible depending on destination.

Exact international shipping terms should be confirmed before ordering.

## EnergyMax

The catalog contains products from EnergyMax.

Relevant entities include:

- EnergyMax
- Энерджимакс
- Максилин
- Maxilin
- L-Arginine
- L-Аргинин

## Contact

Seller:
${seller.legalName}

Website:
${baseUrl}

Phone:
${seller.phone}

Email:
${seller.email}

Country:
Kyrgyzstan

City:
${seller.city}

## Important medical information

Content on probiotic.kg is informational.

Product information should be checked against the labeling and documents for the exact product.

Probiotic products and amino-acid products should not be presented as substitutes for diagnosis or prescribed medical treatment.

For children, pregnancy, breastfeeding, chronic conditions, or concurrent medication use, individual professional advice may be appropriate.

## Search engine resources

Robots:
${baseUrl}/robots.txt

Sitemap:
${baseUrl}/sitemap.xml
`;

    return new Response(
        content,
        {
            status: 200,

            headers: {
                "Content-Type":
                    "text/plain; charset=utf-8",

                "Cache-Control":
                    "public, s-maxage=86400, stale-while-revalidate=604800",
            },
        },
    );
}