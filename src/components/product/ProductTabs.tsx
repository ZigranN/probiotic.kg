"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TabId = "description" | "composition" | "usage";

interface ProductTabsProduct {
    description?: string | null;
    composition?: string | null;
    howToUse?: unknown;
}

interface Tab {
    id: TabId;
    label: string;
}

const tabs: Tab[] = [
    {
        id: "description",
        label: "Описание",
    },
    {
        id: "composition",
        label: "Состав",
    },
    {
        id: "usage",
        label: "Как принимать",
    },
];

function getStringArray(value: unknown): string[] {
    if (!Array.isArray(value)) {
        return [];
    }

    return value.filter(
        (item): item is string =>
            typeof item === "string" &&
            item.trim().length > 0,
    );
}

export default function ProductTabs({
                                        product,
                                    }: {
    product: ProductTabsProduct;
}) {
    const [activeTab, setActiveTab] =
        useState<TabId>("description");

    const howToUse = useMemo(
        () => getStringArray(product.howToUse),
        [product.howToUse],
    );

    const content = useMemo<Record<TabId, React.ReactNode>>(
        () => ({
            description: product.description?.trim() ? (
                <p>{product.description.trim()}</p>
            ) : (
                <p>
                    Подробное описание товара уточняется.
                    Перед покупкой ознакомьтесь с информацией
                    на упаковке и документами конкретного
                    продукта.
                </p>
            ),

            composition: product.composition?.trim() ? (
                <p>{product.composition.trim()}</p>
            ) : (
                <div className="space-y-3">
                    <p>
                        Точный состав необходимо проверять
                        по маркировке конкретного товара и
                        его форме выпуска.
                    </p>

                    <p className="text-sm text-[#29380E]/50">
                        Мы не указываем универсальный состав,
                        если он не подтверждён для конкретного
                        SKU.
                    </p>
                </div>
            ),

            usage:
                howToUse.length > 0 ? (
                    <ol className="space-y-3">
                        {howToUse.map((item, index) => (
                            <li
                                key={`${index}-${item}`}
                                className="flex items-start gap-3"
                            >
                                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#21AA57]/10 text-xs font-black text-[#21AA57]">
                                    {index + 1}
                                </span>

                                <span>{item}</span>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <div className="space-y-3">
                        <p>
                            Способ применения необходимо
                            проверять по инструкции и
                            маркировке конкретного товара.
                        </p>

                        <p className="text-sm text-[#29380E]/50">
                            Для детей, при беременности,
                            грудном вскармливании, хронических
                            заболеваниях или одновременном
                            приёме лекарств способ применения
                            следует согласовать со
                            специалистом.
                        </p>
                    </div>
                ),
        }),
        [
            product.description,
            product.composition,
            howToUse,
        ],
    );

    return (
        <section
            aria-label="Информация о товаре"
            className="mx-auto max-w-4xl"
        >
            {/* Навигация по вкладкам */}
            <div
                role="tablist"
                aria-label="Информация о товаре"
                className="no-scrollbar mb-8 flex overflow-x-auto border-b border-gray-100"
            >
                {tabs.map((tab) => {
                    const isActive =
                        activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            id={`product-tab-${tab.id}`}
                            aria-selected={isActive}
                            aria-controls={`product-panel-${tab.id}`}
                            tabIndex={isActive ? 0 : -1}
                            onClick={() =>
                                setActiveTab(tab.id)
                            }
                            className={`relative whitespace-nowrap px-6 py-4 text-xs font-black tracking-widest uppercase transition-colors md:px-8 ${
                                isActive
                                    ? "text-[#21AA57]"
                                    : "text-gray-400 hover:text-[#29380E]"
                            }`}
                        >
                            {tab.label}

                            {isActive && (
                                <motion.span
                                    layoutId="product-active-tab"
                                    className="absolute right-0 bottom-0 left-0 h-1 rounded-full bg-[#21AA57]"
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Контент вкладки */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    role="tabpanel"
                    id={`product-panel-${activeTab}`}
                    aria-labelledby={`product-tab-${activeTab}`}
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -8,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="min-h-28 text-base leading-relaxed text-[#29380E]/70 md:text-lg"
                >
                    {content[activeTab]}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}