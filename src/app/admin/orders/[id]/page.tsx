"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package, User, MapPin, Mail, Phone, Calendar } from "lucide-react";

interface Order {
    id: string;
    customerName: string;
    customerPhone: string;
    status: string;
    totalPrice: number;
    createdAt: string;
    city?: string;
    street?: string;
    user?: {
        email: string | null;
    } | null;
    building?: string;
    apartment?: string;
    items: Array<{
        id: string;
        name: string;
        price: number;
        quantity: number;
    }>;
}

export default function AdminOrderDetailPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const router = useRouter();
    const [orderId, setOrderId] = useState<string>("");
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        params.then((p) => {
            setOrderId(p.id);
        });
    }, [params]);

    useEffect(() => {
        if (orderId) {
            fetchOrder();
        }
    }, [orderId]);

    const fetchOrder = async () => {
        try {
            const response = await fetch(`/api/orders/${orderId}`);
            const data = await response.json();

            if (data.success) {
                setOrder(data.order);
            } else {
                setError(data.error || "Заказ не найден");
            }
        } catch (err) {
            setError("Ошибка загрузки заказа");
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (newStatus: string) => {
        setUpdating(true);
        setError("");

        try {
            const response = await fetch(`/api/orders/${orderId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });

            const data = await response.json();

            if (data.success) {
                setOrder(data.order);
            } else {
                setError(data.error || "Ошибка обновления статуса");
            }
        } catch (err) {
            setError("Ошибка сервера");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F4F7F5] flex items-center justify-center">
                <div className="animate-spin w-12 h-12 border-4 border-[#21AA57] border-t-transparent rounded-full"></div>
            </div>
        );
    }

    if (error || !order) {
        return (
            <div className="min-h-screen bg-[#F4F7F5] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 mb-4">{error || "Заказ не найден"}</p>
                    <Link
                        href="/admin/orders"
                        className="text-[#21AA57] hover:underline"
                    >
                        Вернуться к списку заказов
                    </Link>
                </div>
            </div>
        );
    }

    const date = new Date(order.createdAt).toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Шапка */}
                <div className="mb-8">
                    <Link
                        href="/admin/orders"
                        className="inline-flex items-center gap-2 text-[#21AA57] hover:text-[#1a8a46] transition mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Назад к списку заказов
                    </Link>
                    <h1 className="text-3xl font-bold text-[#29380E]">
                        Заказ #{order.id.slice(-8)}
                    </h1>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Основная информация */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Товары */}
                        <div className="bg-white rounded-2xl p-6">
                            <h2 className="text-xl font-semibold text-[#29380E] mb-4">
                                Товары в заказе
                            </h2>
                            <div className="space-y-4">
                                {order.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                                    >
                                        <div>
                                            <div className="font-medium text-[#29380E]">
                                                {item.name}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {item.price.toLocaleString("ru-RU")} ₸ × {item.quantity}
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[#29380E]">
                                            {(item.price * item.quantity).toLocaleString("ru-RU")} ₸
                                        </div>
                                    </div>
                                ))}
                                <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200">
                                    <div className="text-lg font-semibold text-[#29380E]">Итого:</div>
                                    <div className="text-2xl font-bold text-[#29380E]">
                                        {order.totalPrice.toLocaleString("ru-RU")} ₸
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Информация о клиенте */}
                        <div className="bg-white rounded-2xl p-6">
                            <h2 className="text-xl font-semibold text-[#29380E] mb-4">
                                Информация о клиенте
                            </h2>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <User className="w-5 h-5 text-[#21AA57]" />
                                    <span className="text-gray-600">{order.customerName}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-[#21AA57]" />
                                    <a
                                        href={`tel:${order.customerPhone}`}
                                        className="text-gray-600 hover:text-[#21AA57] transition"
                                    >
                                        {order.customerPhone}
                                    </a>
                                </div>
                                {order.user?.email && (
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-[#21AA57]" />
                                        <a
                                            href={`mailto:${order.user.email}`}
                                            className="text-gray-600 hover:text-[#21AA57] transition"
                                        >
                                            {order.user.email}
                                        </a>
                                    </div>
                                )}
                                {(order.city || order.street) && (
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-[#21AA57] mt-0.5" />
                                        <div className="text-gray-600">
                                            {[order.city, order.street, order.building, order.apartment]
                                                .filter(Boolean)
                                                .join(", ")}
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-[#21AA57]" />
                                    <span className="text-gray-600">{date}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Боковая панель - статус */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6">
                            <h2 className="text-xl font-semibold text-[#29380E] mb-4">
                                Статус заказа
                            </h2>
                            <div className="space-y-3">
                                {["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"].map(
                                    (status) => {
                                        const labels: Record<string, string> = {
                                            PENDING: "Ожидает",
                                            PROCESSING: "В обработке",
                                            SHIPPED: "Отправлен",
                                            DELIVERED: "Доставлен",
                                            CANCELLED: "Отменен",
                                        };

                                        return (
                                            <button
                                                key={status}
                                                onClick={() => updateStatus(status)}
                                                disabled={updating || order.status === status}
                                                className={`w-full px-4 py-3 rounded-lg font-medium transition ${
                                                    order.status === status
                                                        ? "bg-[#21AA57] text-white"
                                                        : "bg-[#F4F7F5] text-[#29380E] hover:bg-gray-200"
                                                } disabled:opacity-50 disabled:cursor-not-allowed`}
                                            >
                                                {labels[status]}
                                            </button>
                                        );
                                    }
                                )}
                            </div>
                            {updating && (
                                <div className="mt-4 text-center text-sm text-gray-600">
                                    Обновление...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
