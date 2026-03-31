"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import ReCaptcha from "@/components/ReCaptcha";

interface ReviewFormProps {
    productId: string;
    onSuccess?: () => void;
}

export default function ReviewForm({ productId, onSuccess }: ReviewFormProps) {
    const [rating, setRating] = useState(5);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    productId,
                    name,
                    rating,
                    text,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccess(true);
                setName("");
                setText("");
                setRating(5);
                if (onSuccess) onSuccess();
            } else {
                setError(data.error || "Ошибка отправки отзыва");
            }
        } catch (err) {
            setError("Ошибка сервера");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-green-600 fill-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#29380E] mb-2">
                    Спасибо за ваш отзыв!
                </h3>
                <p className="text-gray-600">
                    Ваш отзыв опубликован и будет виден другим покупателям.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-[#29380E] mb-6">
                Написать отзыв
            </h3>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-4">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                {/* Рейтинг */}
                <div>
                    <label className="block text-sm font-medium text-[#29380E] mb-2">
                        Ваша оценка *
                    </label>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoveredRating(star)}
                                onMouseLeave={() => setHoveredRating(0)}
                                className="transition-transform hover:scale-110"
                            >
                                <Star
                                    className={`w-8 h-8 ${
                                        star <= (hoveredRating || rating)
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Имя */}
                <div>
                    <label className="block text-sm font-medium text-[#29380E] mb-2">
                        Ваше имя *
                    </label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                        placeholder="Как вас зовут?"
                    />
                </div>

                {/* Текст отзыва */}
                <div>
                    <label className="block text-sm font-medium text-[#29380E] mb-2">
                        Ваш отзыв *
                    </label>
                    <textarea
                        required
                        rows={5}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21AA57] focus:border-transparent"
                        placeholder="Расскажите о своем опыте использования..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Минимум 10 символов
                    </p>
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                    <ReCaptcha onVerify={setCaptchaToken} />
                </div>

                {/* Кнопка отправки */}
                <button
                    type="submit"
                    disabled={loading || text.length < 10 || !captchaToken}
                    className="w-full px-6 py-3 bg-[#21AA57] text-white rounded-full font-medium hover:bg-[#1a8a46] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Отправка..." : "Отправить отзыв"}
                </button>

                <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с публикацией вашего отзыва
                </p>
            </div>
        </form>
    );
}
