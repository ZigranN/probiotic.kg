// ==========================================
// TYPES
// ==========================================

export type Availability = "in_stock" | "check" | "out";

export type ProductCategory = "probiotic" | "actives" | "candles";

export type ProductVariant = {
    id: string;
    title: string;
    priceKgs: number | null;
    badge?: string;
    pv?: number;
};

export type Review = {
    name: string;
    rating: number;
    text: string;
};

export type ProductImage = {
    src: string;
    alt: string;
    type?: "pack" | "lifestyle" | "instruction" | "flavor" | "card";
};

export type ProductFaq = {
    question: string;
    answer: string;
};

export type Product = {
    slug: string;
    name: string;
    category: ProductCategory;
    heroTag?: string;
    subtitle?: string;
    shortBenefits: string[];
    description: string;

    form?: string;
    packInfo?: string;
    forWhom?: string[];
    keyNotes?: string[];
    howToUse?: string[];
    dosageNote?: string;
    cautions?: string[];
    storage?: string[];
    composition?: string;
    features?: string[];
    faq?: ProductFaq[];
    badges?: string[];
    tags?: string[];
    relatedSlugs?: string[];

    seoTitle?: string;
    seoDescription?: string;

    reviews?: Review[];
    images: ProductImage[];
    imageBg?: string;
    availability: Availability;
    variants: ProductVariant[];
    oldPriceKgs?: number;
    priceKgs: number;
};

export type DocumentCategory =
    | "patent"
    | "lab"
    | "standard"
    | "archive"
    | "legal"
    | "certificate"
    | "trademark"
    | "history";

export type SiteDocument = {
    id: string;
    title: string;
    category: DocumentCategory;
    year?: string;
    organization?: string;
    shortText: string;
    fullText?: string;
    file?: string;
    badges?: string[];
    isMaxilinRelated: boolean;
    publicNote?: string;
};

export type KnowledgeArticle = {
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    content: string[];
    tags: string[];
    seoTitle: string;
    seoDescription: string;
};

export type MarketingContent = {
    title: string;
    theory: string;
    description: string;
    items: {
        title: string;
        text: string;
    }[];
};