"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User as UserIcon, Loader } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function AiChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Привет! Я AI-ассистент EnergyMax. Помогу выбрать пробиотик, расскажу о составе и применении. Чем могу помочь?",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch("/api/ai-chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                }),
            });

            const data = await response.json();

            if (data.success) {
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: data.message },
                ]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content:
                            data.error ||
                            "Извините, произошла ошибка. Попробуйте позже или свяжитесь с нами в WhatsApp: +996990105555",
                    },
                ]);
            }
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Ошибка связи с сервером. Попробуйте позже.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Кнопка открытия чата */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#21AA57] text-white rounded-full shadow-lg hover:bg-[#1a8a46] transition flex items-center justify-center group"
                >
                    <MessageCircle className="w-7 h-7 group-hover:scale-110 transition" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                    </div>
                </button>
            )}

            {/* Окно чата */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col">
                    {/* Шапка */}
                    <div className="bg-gradient-to-r from-[#21AA57] to-[#1a8a46] text-white p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-semibold">AI-Ассистент</div>
                                <div className="text-xs text-white/80">EnergyMax</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/20 rounded-lg transition"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Сообщения */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex gap-3 ${
                                    message.role === "user" ? "flex-row-reverse" : ""
                                }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                        message.role === "user"
                                            ? "bg-[#29380E]"
                                            : "bg-[#21AA57]"
                                    }`}
                                >
                                    {message.role === "user" ? (
                                        <UserIcon className="w-4 h-4 text-white" />
                                    ) : (
                                        <Bot className="w-4 h-4 text-white" />
                                    )}
                                </div>
                                <div
                                    className={`flex-1 p-3 rounded-2xl ${
                                        message.role === "user"
                                            ? "bg-[#29380E] text-white"
                                            : "bg-[#F4F7F5] text-[#29380E]"
                                    }`}
                                >
                                    <p className="text-sm whitespace-pre-wrap">
                                        {message.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-[#21AA57] rounded-full flex items-center justify-center">
                                    <Loader className="w-4 h-4 text-white animate-spin" />
                                </div>
                                <div className="bg-[#F4F7F5] p-3 rounded-2xl">
                                    <p className="text-sm text-gray-600">Печатаю...</p>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Поле ввода */}
                    <div className="border-t border-gray-200 p-4">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Введите сообщение..."
                                disabled={loading}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#21AA57] focus:border-transparent disabled:opacity-50"
                            />
                            <button
                                onClick={sendMessage}
                                disabled={!input.trim() || loading}
                                className="w-10 h-10 bg-[#21AA57] text-white rounded-full flex items-center justify-center hover:bg-[#1a8a46] transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            AI может допускать ошибки. Всегда консультируйтесь с врачом.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
