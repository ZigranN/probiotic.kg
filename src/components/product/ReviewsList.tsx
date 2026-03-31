"use client";

import { useEffect, useState } from "react";
import { Star, User } from "lucide-react";

interface Review {
    id: string;
    name: string;
    rating: number;
    text: string;
    createdAt: string;
    user?: {
        firstName?: string;
        lastName?: string;
    };
}

interface ReviewsListProps {
    productId: string;
    refresh?: number;
}

export default function ReviewsList({ productId, refresh = 0 }: ReviewsListProps) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [stats, setStats] = useState({ total: 0, avgRating: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`/api/reviews?productId=${productId}`);
                const data = await response.json();

                if (data.success) {
                    setReviews(data.reviews);
                    setStats(data.stats);
                }
            } catch (error) {
                console.error("Ошибка загрузки отзывов:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [productId, refresh]);

    if (loading) {
        return (
            <div className="text-center py-8">
                <div className="animate-spin w-8 h-8 border-4 border-[#21AA57] border-t-transparent rounded-full mx-auto"></div>
            </div>
        );
    }

    if (reviews.length === 0) {
        return (
            <div className="text-center py-12 bg-[#F4F7F5] rounded-2xl">
                <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">Пока нет отзывов об этом товаре</p>
                <p className="text-sm text-gray-500 mt-2">Будьте первым, кто оставит отзыв!</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Статистика */}
            <div className="bg-[#F4F7F5] rounded-2xl p-6">
                <div className="flex items-center gap-6">
                    <div>
                        <div className="text-4xl font-bold text-[#29380E]">
                            {stats.avgRating.toFixed(1)}
                        </div>
                        <div className="flex gap-1 mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`w-5 h-5 ${
                                        star <= Math.round(stats.avgRating)
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="text-gray-600">
                        <div className="font-medium">Средняя оценка</div>
                        <div className="text-sm">На основе {stats.total} отзывов</div>
                    </div>
                </div>
            </div>

            {/* Список отзывов */}
            <div className="space-y-4">
                {reviews.map((review) => {
                    const displayName =
                        review.user?.firstName && review.user?.lastName
                            ? `${review.user.firstName} ${review.user.lastName}`
                            : review.name;

                    const date = new Date(review.createdAt).toLocaleDateString("ru-RU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });

                    return (
                        <div key={review.id} className="bg-white rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                {/* Аватар */}
                                <div className="w-12 h-12 bg-[#F4F7F5] rounded-full flex items-center justify-center flex-shrink-0">
                                    <User className="w-6 h-6 text-[#21AA57]" />
                                </div>

                                <div className="flex-1">
                                    {/* Имя и рейтинг */}
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <div className="font-semibold text-[#29380E]">
                                                {displayName}
                                            </div>
                                            <div className="text-sm text-gray-500">{date}</div>
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className={`w-4 h-4 ${
                                                        star <= review.rating
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "text-gray-300"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Текст отзыва */}
                                    <p className="text-gray-600 leading-relaxed">{review.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
