"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent";

interface CookiePreferences {
    necessary: true;
    analytics: boolean;
    marketing: false;
}

const defaultPreferences: CookiePreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
};

function readSavedPreferences(): CookiePreferences | null {
    try {
        const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

        if (!savedConsent) {
            return null;
        }

        const parsedConsent = JSON.parse(savedConsent) as Partial<CookiePreferences>;

        return {
            necessary: true,
            analytics: parsedConsent.analytics === true,
            marketing: false,
        };
    } catch (error) {
        console.error("Не удалось прочитать настройки cookie:", error);

        localStorage.removeItem(COOKIE_CONSENT_KEY);

        return null;
    }
}

function savePreferences(preferences: CookiePreferences) {
    localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify(preferences),
    );
}

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] =
        useState<CookiePreferences>(defaultPreferences);

    useEffect(() => {
        const savedPreferences = readSavedPreferences();

        if (!savedPreferences) {
            setShowBanner(true);
            return;
        }

        setPreferences(savedPreferences);
    }, []);

    const acceptAll = () => {
        const nextPreferences: CookiePreferences = {
            necessary: true,
            analytics: true,
            marketing: false,
        };

        savePreferences(nextPreferences);
        setPreferences(nextPreferences);
        setShowBanner(false);
        setShowSettings(false);

        window.location.reload();
    };

    const acceptNecessaryOnly = () => {
        const nextPreferences: CookiePreferences = {
            necessary: true,
            analytics: false,
            marketing: false,
        };

        savePreferences(nextPreferences);
        setPreferences(nextPreferences);
        setShowBanner(false);
        setShowSettings(false);
    };

    const saveSelectedPreferences = () => {
        const nextPreferences: CookiePreferences = {
            necessary: true,
            analytics: preferences.analytics,
            marketing: false,
        };

        savePreferences(nextPreferences);
        setShowBanner(false);
        setShowSettings(false);

        if (nextPreferences.analytics) {
            window.location.reload();
        }
    };

    if (!showBanner) {
        return null;
    }

    return (
        <>
            {!showSettings && (
                <section
                    aria-label="Настройки файлов cookie"
                    className="fixed right-0 bottom-0 left-0 z-[100] border-t border-gray-200 bg-white shadow-2xl"
                >
                    <div className="mx-auto max-w-7xl px-4 py-5 md:px-8">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start">
                            <div className="flex flex-1 items-start gap-4">
                                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#21AA57]/10">
                                    <Cookie
                                        className="h-6 w-6 text-[#21AA57]"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h2 className="mb-2 text-lg font-semibold text-[#29380E]">
                                        Настройки конфиденциальности
                                    </h2>

                                    <p className="max-w-3xl text-sm leading-relaxed text-gray-600">
                                        Для работы корзины и основных функций
                                        сайт использует необходимое локальное
                                        хранилище. Google Analytics загружается
                                        только после вашего отдельного согласия.
                                    </p>

                                    <p className="mt-2 text-sm text-gray-500">
                                        Подробнее — в{" "}
                                        <Link
                                            href="/policy"
                                            className="font-medium text-[#21AA57] underline underline-offset-2 hover:text-[#1a8a46]"
                                        >
                                            политике конфиденциальности
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row md:flex-shrink-0">
                                <button
                                    type="button"
                                    onClick={acceptAll}
                                    className="rounded-full bg-[#21AA57] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a8a46]"
                                >
                                    Разрешить аналитику
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowSettings(true)}
                                    className="rounded-full bg-[#F4F7F5] px-6 py-3 text-sm font-semibold text-[#29380E] transition-colors hover:bg-gray-200"
                                >
                                    Настроить
                                </button>

                                <button
                                    type="button"
                                    onClick={acceptNecessaryOnly}
                                    className="rounded-full px-6 py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#29380E]"
                                >
                                    Только необходимые
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {showSettings && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="cookie-settings-title"
                    className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4"
                >
                    <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
                        <div className="p-6 md:p-8">
                            <div className="mb-8 flex items-start justify-between gap-4">
                                <div>
                                    <h2
                                        id="cookie-settings-title"
                                        className="mb-2 text-2xl font-bold text-[#29380E]"
                                    >
                                        Настройки cookie
                                    </h2>

                                    <p className="text-sm leading-relaxed text-gray-600">
                                        Выберите, разрешаете ли вы использование
                                        Google Analytics.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setShowSettings(false)}
                                    aria-label="Закрыть настройки cookie"
                                    className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <X
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <section className="border-b border-gray-200 pb-6">
                                    <div className="mb-3 flex items-center justify-between gap-4">
                                        <h3 className="font-semibold text-[#29380E]">
                                            Необходимое хранилище
                                        </h3>

                                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                            Всегда активно
                                        </span>
                                    </div>

                                    <p className="text-sm leading-relaxed text-gray-600">
                                        Используется для работы корзины,
                                        сохранения настроек конфиденциальности и
                                        поддержания пользовательской сессии.
                                    </p>
                                </section>

                                <section>
                                    <div className="mb-3 flex items-center justify-between gap-4">
                                        <div>
                                            <h3 className="font-semibold text-[#29380E]">
                                                Аналитика
                                            </h3>

                                            <p className="mt-1 text-xs text-gray-500">
                                                Необязательная категория
                                            </p>
                                        </div>

                                        <label className="relative inline-flex cursor-pointer items-center">
                                            <input
                                                type="checkbox"
                                                checked={preferences.analytics}
                                                onChange={(event) =>
                                                    setPreferences(
                                                        (currentPreferences) => ({
                                                            ...currentPreferences,
                                                            analytics:
                                                            event.target
                                                                .checked,
                                                        }),
                                                    )
                                                }
                                                aria-label="Разрешить аналитические cookie"
                                                className="peer sr-only"
                                            />

                                            <span className="h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-[#21AA57] peer-focus-visible:ring-4 peer-focus-visible:ring-[#21AA57]/20 peer-focus-visible:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-transform after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white" />
                                        </label>
                                    </div>

                                    <p className="text-sm leading-relaxed text-gray-600">
                                        При включении сайт может загрузить Google
                                        Analytics для получения общей статистики
                                        посещений и анализа работы страниц.
                                    </p>
                                </section>
                            </div>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <button
                                    type="button"
                                    onClick={saveSelectedPreferences}
                                    className="flex-1 rounded-full bg-[#21AA57] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1a8a46]"
                                >
                                    Сохранить выбор
                                </button>

                                <button
                                    type="button"
                                    onClick={acceptNecessaryOnly}
                                    className="flex-1 rounded-full bg-[#F4F7F5] px-6 py-3 font-semibold text-[#29380E] transition-colors hover:bg-gray-200"
                                >
                                    Только необходимые
                                </button>
                            </div>

                            <p className="mt-5 text-center text-xs leading-relaxed text-gray-500">
                                Маркетинговые системы и Facebook Pixel в текущей
                                версии сайта не используются.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}