import type { Metadata } from "next";
import {
    ExternalLink,
    FileImage,
    FileText,
    MessageCircle,
} from "lucide-react";

import { seller } from "@/config/seller";

export const metadata: Metadata = {
    title: "Документы на продукцию | probiotic.kg",
    description:
        "Патентные, экспертные и информационные документы по продукции, представленной на probiotic.kg.",
};

interface DocumentItem {
    title: string;
    description: string;
    file: string;
    type: "pdf" | "image";
}

const maxilinDocuments: DocumentItem[] = [
    {
        title: "Евразийский патент № 014227",
        description:
            "Патентный документ, связанный с продуктом «Максилин».",
        file: "/docMaxilin/Евразийский патент 014227 от 29.10.2010..pdf",
        type: "pdf",
    },
    {
        title: "Свидетельство на товарный знак",
        description:
            "Копия документа на товарный знак «Максилин».",
        file: "/docMaxilin/Свид-во на товарный знак.jpg",
        type: "image",
    },
    {
        title: "Экспертное заключение",
        description:
            "Копия экспертного заключения, связанного с продуктом «Максилин».",
        file: "/docMaxilin/Экспертное заключение Максилин.jpg",
        type: "image",
    },
    {
        title: "Санитарно-эпидемиологическая экспертиза",
        description:
            "Копия документа санитарно-эпидемиологической экспертизы.",
        file: "/docMaxilin/Экспертиза Республиканской санитарно-эпидемиологической станции.jpg",
        type: "image",
    },
    {
        title: "Протокол испытаний",
        description:
            "Копия предоставленного протокола испытаний.",
        file: "/docMaxilin/test_protocol.jpeg",
        type: "image",
    },
    {
        title: "Результаты исследований",
        description:
            "Архивный документ с результатами исследований.",
        file: "/docMaxilin/Резул. иследований.pdf",
        type: "pdf",
    },
];

const arginineDocuments: DocumentItem[] = [
    {
        title: "Документ на L-аргинин G",
        description:
            "Копия документа, предоставленного для варианта L-аргинин G.",
        file: "/docLarginine/Л-аргинин G.jpg",
        type: "image",
    },
    {
        title: "Документ на L-аргинин T",
        description:
            "Копия документа, предоставленного для варианта L-аргинин T.",
        file: "/docLarginine/Л-аргинин Т.jpg",
        type: "image",
    },
    {
        title: "Документ на L-аргинин M",
        description:
            "Копия документа, предоставленного для варианта L-аргинин M.",
        file: "/docLarginine/Л-аргинин М.jpg",
        type: "image",
    },
    {
        title: "Документ на L-аргинин TG",
        description:
            "Копия документа, предоставленного для варианта L-аргинин TG.",
        file: "/docLarginine/Л-аргинин TG.jpg",
        type: "image",
    },
];

function DocumentCard({ document }: { document: DocumentItem }) {
    const Icon = document.type === "pdf" ? FileText : FileImage;

    return (
        <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#F4F7F5]">
                    <Icon
                        className="h-6 w-6 text-[#21AA57]"
                        aria-hidden="true"
                    />
                </div>

                <div>
                    <h3 className="mb-2 font-semibold text-[#29380E]">
                        {document.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600">
                        {document.description}
                    </p>
                </div>
            </div>

            <a
                href={document.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#21AA57] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a8a46]"
            >
                Открыть документ
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
        </article>
    );
}

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-[#F4F7F5]">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <header className="mx-auto mb-12 max-w-3xl text-center">
                    <h1 className="mb-4 text-4xl font-bold text-[#29380E]">
                        Документы
                    </h1>

                    <p className="text-lg leading-relaxed text-gray-600">
                        Здесь размещены копии документов, предоставленных для
                        ознакомления с продукцией и её историей.
                    </p>
                </header>

                <section className="mb-14">
                    <h2 className="mb-6 text-2xl font-bold text-[#29380E]">
                        Документы по Максилину
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {maxilinDocuments.map((document) => (
                            <DocumentCard
                                key={document.file}
                                document={document}
                            />
                        ))}
                    </div>
                </section>

                <section className="mb-14">
                    <h2 className="mb-6 text-2xl font-bold text-[#29380E]">
                        Документы по L-аргинину
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {arginineDocuments.map((document) => (
                            <DocumentCard
                                key={document.file}
                                document={document}
                            />
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl border border-[#21AA57]/15 bg-white p-6 md:p-8">
                    <h2 className="mb-4 text-2xl font-bold text-[#29380E]">
                        Важная информация
                    </h2>

                    <div className="space-y-3 leading-relaxed text-gray-600">
                        <p>
                            Документы публикуются в ознакомительных целях. Сам
                            факт размещения документа не означает, что он
                            относится ко всем товарам, формам выпуска или
                            партиям продукции.
                        </p>

                        <p>
                            Перед покупкой необходимо проверить название товара,
                            производителя, состав, маркировку, срок годности и
                            сведения на упаковке.
                        </p>

                        <p>
                            Патенты, архивные материалы и результаты отдельных
                            исследований не являются медицинским назначением и
                            не гарантируют результат применения товара.
                        </p>
                    </div>
                </section>

                <section className="mt-8 rounded-2xl bg-[#29380E] p-6 text-center text-white md:p-8">
                    <MessageCircle
                        className="mx-auto mb-4 h-8 w-8 text-[#21AA57]"
                        aria-hidden="true"
                    />

                    <h2 className="mb-3 text-2xl font-bold">
                        Нужен документ по конкретному товару?
                    </h2>

                    <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-white/70">
                        Напишите продавцу точное название товара. Мы проверим,
                        какие документы имеются именно для выбранной продукции.
                    </p>

                    <a
                        href={`https://wa.me/${seller.whatsappPhone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-xl bg-[#21AA57] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1a8a46]"
                    >
                        Написать в WhatsApp
                    </a>
                </section>
            </div>
        </main>
    );
}