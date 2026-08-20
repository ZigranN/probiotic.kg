"use client";

import {
    FormEvent,
    KeyboardEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import {
    Bot,
    LoaderCircle,
    MessageCircle,
    Send,
    User as UserIcon,
    X,
} from "lucide-react";

import { seller } from "@/config/seller";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
}

interface ApiResponse {
    success?: boolean;
    message?: string;
    error?: string;
}

const MAX_MESSAGE_LENGTH = 1500;

const initialMessage: Message = {
    id: "welcome-message",
    role: "assistant",
    content:
        "Здравствуйте! Я информационный AI-ассистент probiotic.kg. Помогу найти раздел сайта, объясню порядок оформления заказа и подскажу, где посмотреть информацию о товаре.",
};

function createMessageId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function AiChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([initialMessage]);
    const [input, setInput] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, isSubmitting]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const focusTimer = window.setTimeout(() => {
            inputRef.current?.focus();
        }, 100);

        return () => {
            window.clearTimeout(focusTimer);
        };
    }, [isOpen]);

    const addAssistantMessage = (content: string) => {
        setMessages((currentMessages) => [
            ...currentMessages,
            {
                id: createMessageId(),
                role: "assistant",
                content,
            },
        ]);
    };

    const sendMessage = async () => {
        const trimmedInput = input.trim();

        if (!trimmedInput || isSubmitting) {
            return;
        }

        const userMessage: Message = {
            id: createMessageId(),
            role: "user",
            content: trimmedInput,
        };

        const requestMessages = [...messages, userMessage].map((message) => ({
            role: message.role,
            content: message.content,
        }));

        setMessages((currentMessages) => [
            ...currentMessages,
            userMessage,
        ]);
        setInput("");
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/ai-chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: requestMessages,
                }),
            });

            const data = (await response.json().catch(() => null)) as
                | ApiResponse
                | null;

            if (
                response.ok &&
                data?.success === true &&
                typeof data.message === "string" &&
                data.message.trim()
            ) {
                addAssistantMessage(data.message.trim());
                return;
            }

            addAssistantMessage(
                data?.error ||
                `AI-ассистент временно недоступен. Свяжитесь с продавцом в WhatsApp: ${seller.phone}`,
            );
        } catch (error) {
            console.error("Ошибка отправки сообщения в AI-чат:", error);

            addAssistantMessage(
                `Не удалось связаться с AI-ассистентом. Напишите продавцу в WhatsApp: ${seller.phone}`,
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await sendMessage();
    };

    const handleKeyDown = (
        event: KeyboardEvent<HTMLInputElement>,
    ) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    };

    return (
        <>
            {!isOpen && (
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-label="Открыть AI-ассистента"
                    aria-haspopup="dialog"
                    className="fixed right-4 bottom-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#21AA57] text-white shadow-lg transition hover:bg-[#1a8a46] focus-visible:ring-4 focus-visible:ring-[#21AA57]/30 focus-visible:outline-none md:right-6 md:bottom-6 md:h-16 md:w-16"
                >
                    <MessageCircle
                        className="h-7 w-7"
                        aria-hidden="true"
                    />

                    <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#29380E]">
                        <Bot
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                        />
                    </span>
                </button>
            )}

            {isOpen && (
                <section
                    role="dialog"
                    aria-modal="false"
                    aria-labelledby="ai-chat-title"
                    className="fixed right-3 bottom-24 left-3 z-[70] flex max-h-[calc(100dvh-7rem)] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:right-6 md:bottom-6 md:left-auto md:h-[600px] md:w-96 md:max-h-[calc(100dvh-3rem)]"
                >
                    {/* Шапка */}
                    <header className="flex items-center justify-between bg-gradient-to-r from-[#21AA57] to-[#1a8a46] p-4 text-white">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                <Bot
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <h2
                                    id="ai-chat-title"
                                    className="font-semibold"
                                >
                                    AI-ассистент
                                </h2>

                                <p className="text-xs text-white/80">
                                    {seller.siteName}
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Закрыть AI-ассистента"
                            className="rounded-lg p-2 transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                        >
                            <X
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </button>
                    </header>

                    {/* Сообщения */}
                    <div
                        aria-live="polite"
                        aria-relevant="additions"
                        className="flex-1 space-y-4 overflow-y-auto p-4"
                    >
                        {messages.map((message) => (
                            <article
                                key={message.id}
                                className={`flex gap-3 ${
                                    message.role === "user"
                                        ? "flex-row-reverse"
                                        : ""
                                }`}
                            >
                                <div
                                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                                        message.role === "user"
                                            ? "bg-[#29380E]"
                                            : "bg-[#21AA57]"
                                    }`}
                                >
                                    {message.role === "user" ? (
                                        <UserIcon
                                            className="h-4 w-4 text-white"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bot
                                            className="h-4 w-4 text-white"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>

                                <div
                                    className={`max-w-[82%] rounded-2xl p-3 ${
                                        message.role === "user"
                                            ? "bg-[#29380E] text-white"
                                            : "bg-[#F4F7F5] text-[#29380E]"
                                    }`}
                                >
                                    <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">
                                        {message.content}
                                    </p>
                                </div>
                            </article>
                        ))}

                        {isSubmitting && (
                            <div
                                role="status"
                                className="flex gap-3"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#21AA57]">
                                    <LoaderCircle
                                        className="h-4 w-4 animate-spin text-white"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="rounded-2xl bg-[#F4F7F5] p-3">
                                    <p className="text-sm text-gray-600">
                                        Формирую ответ…
                                    </p>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Поле ввода */}
                    <footer className="border-t border-gray-200 p-4">
                        <form
                            onSubmit={handleSubmit}
                            className="flex gap-2"
                        >
                            <label
                                htmlFor="ai-chat-input"
                                className="sr-only"
                            >
                                Сообщение AI-ассистенту
                            </label>

                            <input
                                ref={inputRef}
                                id="ai-chat-input"
                                type="text"
                                value={input}
                                onChange={(event) =>
                                    setInput(event.target.value)
                                }
                                onKeyDown={handleKeyDown}
                                placeholder="Введите сообщение…"
                                maxLength={MAX_MESSAGE_LENGTH}
                                disabled={isSubmitting}
                                autoComplete="off"
                                className="min-w-0 flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none transition placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-[#21AA57] disabled:cursor-not-allowed disabled:opacity-50"
                            />

                            <button
                                type="submit"
                                disabled={
                                    !input.trim() || isSubmitting
                                }
                                aria-label="Отправить сообщение"
                                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#21AA57] text-white transition hover:bg-[#1a8a46] focus-visible:ring-4 focus-visible:ring-[#21AA57]/30 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <Send
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </form>

                        <p className="mt-3 text-center text-[10px] leading-relaxed text-gray-500">
                            Не отправляйте паспортные данные, банковские
                            реквизиты, диагнозы и медицинские документы.
                            AI может ошибаться и не заменяет специалиста.
                        </p>

                        <a
                            href={`https://wa.me/${seller.whatsappPhone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 block text-center text-xs font-medium text-[#21AA57] hover:underline"
                        >
                            Связаться с продавцом: {seller.phone}
                        </a>
                    </footer>
                </section>
            )}
        </>
    );
}