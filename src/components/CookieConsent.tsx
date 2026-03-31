"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true, // всегда включены
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Проверяем, дал ли пользователь согласие
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setShowBanner(true);
        } else {
            const savedPreferences = JSON.parse(consent);
            setPreferences(savedPreferences);
        }
    }, []);

    const acceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
        setPreferences(allAccepted);
        setShowBanner(false);
        // Перезагружаем страницу чтобы загрузить аналитику
        window.location.reload();
    };

    const acceptSelected = () => {
        localStorage.setItem("cookie-consent", JSON.stringify(preferences));
        setShowBanner(false);
        setShowSettings(false);
        window.location.reload();
    };

    const rejectAll = () => {
        const minimal = {
            necessary: true,
            analytics: false,
            marketing: false,
        };
        localStorage.setItem("cookie-consent", JSON.stringify(minimal));
        setPreferences(minimal);
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <>
            {/* Основной баннер */}
            {!showSettings && (
                <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex items-start gap-4">
                            <Cookie className="w-8 h-8 text-[#21AA57] flex-shrink-0 mt-1" />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-[#29380E] mb-2">
                                    Мы используем файлы cookie
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента.
                                    Продолжая использовать наш сайт, вы соглашаетесь с использованием файлов cookie.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={acceptAll}
                                        className="px-6 py-2 bg-[#21AA57] text-white rounded-full font-medium hover:bg-[#1a8a46] transition"
                                    >
                                        Принять все
                                    </button>
                                    <button
                                        onClick={() => setShowSettings(true)}
                                        className="px-6 py-2 bg-[#F4F7F5] text-[#29380E] rounded-full font-medium hover:bg-gray-200 transition"
                                    >
                                        Настроить
                                    </button>
                                    <button
                                        onClick={rejectAll}
                                        className="px-6 py-2 text-gray-600 hover:text-gray-800 transition"
                                    >
                                        Отклонить все
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={rejectAll}
                                className="text-gray-400 hover:text-gray-600 transition"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Настройки cookie */}
            {showSettings && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-[#29380E] mb-2">
                                        Настройки cookie
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        Управляйте предпочтениями использования файлов cookie
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowSettings(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Необходимые cookie */}
                                <div className="border-b border-gray-200 pb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-[#29380E]">
                                            Необходимые cookie
                                        </h3>
                                        <div className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                                            Всегда активны
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Эти файлы cookie необходимы для работы сайта и не могут быть отключены.
                                        Они устанавливаются в ответ на ваши действия, такие как вход в систему или заполнение форм.
                                    </p>
                                </div>

                                {/* Аналитические cookie */}
                                <div className="border-b border-gray-200 pb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-[#29380E]">
                                            Аналитические cookie
                                        </h3>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.analytics}
                                                onChange={(e) =>
                                                    setPreferences({
                                                        ...preferences,
                                                        analytics: e.target.checked,
                                                    })
                                                }
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#21AA57]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#21AA57]"></div>
                                        </label>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Позволяют нам анализировать использование сайта и улучшать его работу.
                                        Включает Google Analytics для сбора статистики посещений.
                                    </p>
                                </div>

                                {/* Маркетинговые cookie */}
                                <div className="pb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-[#29380E]">
                                            Маркетинговые cookie
                                        </h3>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.marketing}
                                                onChange={(e) =>
                                                    setPreferences({
                                                        ...preferences,
                                                        marketing: e.target.checked,
                                                    })
                                                }
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#21AA57]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#21AA57]"></div>
                                        </label>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Используются для отслеживания посетителей на разных сайтах и показа релевантной рекламы.
                                        Включает Facebook Pixel для маркетинговых кампаний.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={acceptSelected}
                                    className="flex-1 px-6 py-3 bg-[#21AA57] text-white rounded-full font-medium hover:bg-[#1a8a46] transition"
                                >
                                    Сохранить настройки
                                </button>
                                <button
                                    onClick={acceptAll}
                                    className="flex-1 px-6 py-3 bg-[#F4F7F5] text-[#29380E] rounded-full font-medium hover:bg-gray-200 transition"
                                >
                                    Принять все
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
