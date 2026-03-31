import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Package, Eye, Clock, CheckCircle, XCircle, TruckIcon } from "lucide-react";

export default async function AdminOrdersPage() {
    const session = await auth();

    // Проверка доступа
    if (!session || !session.user || (session.user as any).role !== "ADMIN") {
        redirect("/auth/login");
    }

    // Получаем все заказы
    const orders = await prisma.order.findMany({
        include: {
            items: true,
            user: {
                select: {
                    firstName: true,
                    lastName: true,
                    email: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    // Статистика
    const stats = {
        total: orders.length,
        pending: orders.filter((o) => o.status === "PENDING").length,
        processing: orders.filter((o) => o.status === "PROCESSING").length,
        shipped: orders.filter((o) => o.status === "SHIPPED").length,
        delivered: orders.filter((o) => o.status === "DELIVERED").length,
        cancelled: orders.filter((o) => o.status === "CANCELLED").length,
    };

    const getStatusBadge = (status: string) => {
        const badges = {
            PENDING: { text: "Ожидает", color: "bg-yellow-100 text-yellow-800", icon: Clock },
            PROCESSING: { text: "В обработке", color: "bg-blue-100 text-blue-800", icon: Package },
            SHIPPED: { text: "Отправлен", color: "bg-purple-100 text-purple-800", icon: TruckIcon },
            DELIVERED: { text: "Доставлен", color: "bg-green-100 text-green-800", icon: CheckCircle },
            CANCELLED: { text: "Отменен", color: "bg-red-100 text-red-800", icon: XCircle },
        };
        return badges[status as keyof typeof badges] || badges.PENDING;
    };

    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Шапка */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#29380E] mb-2">
                        Управление заказами
                    </h1>
                    <p className="text-gray-600">Все заказы клиентов</p>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4">
                        <div className="text-2xl font-bold text-[#29380E]">{stats.total}</div>
                        <div className="text-sm text-gray-600">Всего</div>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-yellow-800">{stats.pending}</div>
                        <div className="text-sm text-yellow-700">Ожидают</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-800">{stats.processing}</div>
                        <div className="text-sm text-blue-700">В обработке</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-800">{stats.shipped}</div>
                        <div className="text-sm text-purple-700">Отправлены</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-800">{stats.delivered}</div>
                        <div className="text-sm text-green-700">Доставлены</div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-red-800">{stats.cancelled}</div>
                        <div className="text-sm text-red-700">Отменены</div>
                    </div>
                </div>

                {/* Список заказов */}
                {orders.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 text-center">
                        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-[#29380E] mb-2">
                            Заказов пока нет
                        </h2>
                        <p className="text-gray-600">Заказы появятся здесь после оформления</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-[#F4F7F5]">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#29380E]">
                                        № Заказа
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#29380E]">
                                        Клиент
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#29380E]">
                                        Товары
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#29380E]">
                                        Сумма
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#29380E]">
                                        Статус
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#29380E]">
                                        Дата
                                    </th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#29380E]">
                                        Действия
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {orders.map((order) => {
                                    const statusBadge = getStatusBadge(order.status);
                                    const StatusIcon = statusBadge.icon;
                                    const date = new Date(order.createdAt).toLocaleDateString("ru-RU");

                                    return (
                                        <tr key={order.id} className="hover:bg-[#F4F7F5] transition">
                                            <td className="px-6 py-4">
                                                <div className="font-mono text-sm text-[#29380E]">
                                                    #{order.id.slice(-8)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className="font-medium text-[#29380E]">
                                                        {order.customerName}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {order.customerPhone}
                                                    </div>
                                                    {order.user?.email && (
                                                        <div className="text-xs text-gray-400">
                                                            {order.user.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-600">
                                                    {order.items.length} товар(ов)
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-semibold text-[#29380E]">
                                                    {order.totalPrice.toLocaleString("ru-RU")} ₸
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${statusBadge.color}`}
                                                >
                                                    <StatusIcon className="w-3 h-3" />
                                                    {statusBadge.text}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-600">{date}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        href={`/admin/orders/${order.id}`}
                                                        className="p-2 text-[#21AA57] hover:bg-[#F4F7F5] rounded-lg transition"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
