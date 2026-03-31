import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Package, ShoppingCart, Users, Star, TrendingUp, Calendar } from "lucide-react";

export default async function AdminDashboardPage() {
    const session = await auth();

    if (!session || !session.user || (session.user as any).role !== "ADMIN") {
        redirect("/auth/login");
    }

    // Статистика
    const [
        totalOrders,
        totalProducts,
        totalUsers,
        recentOrders,
        pendingOrders,
    ] = await Promise.all([
        prisma.order.count(),
        prisma.product.count(),
        prisma.user.count(),
        prisma.order.findMany({
            take: 5,
            orderBy: { createdAt: "desc" },
            include: { items: true },
        }),
        prisma.order.count({ where: { status: "PENDING" } }),
    ]);

    // Подсчет общей выручки
    const orders = await prisma.order.findMany({
        where: { status: { not: "CANCELLED" } },
    });
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);

    const stats = [
        {
            title: "Заказы",
            value: totalOrders,
            change: pendingOrders > 0 ? `+${pendingOrders} ожидают` : "Нет ожидающих",
            icon: ShoppingCart,
            color: "bg-blue-500",
            href: "/admin/orders",
        },
        {
            title: "Товары",
            value: totalProducts,
            change: "Активных в каталоге",
            icon: Package,
            color: "bg-purple-500",
            href: "/admin/products",
        },
        {
            title: "Пользователи",
            value: totalUsers,
            change: "Зарегистрировано",
            icon: Users,
            color: "bg-green-500",
            href: "/dashboard",
        },
        {
            title: "Ожидают",
            value: pendingOrders,
            change: "Новых заказов",
            icon: Package,
            color: "bg-yellow-500",
            href: "/admin/orders",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Приветствие */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#29380E] mb-2">
                        Добро пожаловать, {(session.user as any).firstName || "Администратор"}!
                    </h1>
                    <p className="text-gray-600">Панель управления EnergyMax</p>
                </div>

                {/* Статистика */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <Link
                                key={stat.title}
                                href={stat.href}
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div
                                        className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center`}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <TrendingUp className="w-5 h-5 text-gray-400 group-hover:text-[#21AA57] transition" />
                                </div>
                                <div className="text-3xl font-bold text-[#29380E] mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600">{stat.title}</div>
                                <div className="text-xs text-gray-500 mt-2">{stat.change}</div>
                            </Link>
                        );
                    })}
                </div>

                {/* Выручка */}
                <div className="bg-gradient-to-r from-[#21AA57] to-[#1a8a46] rounded-2xl p-8 text-white mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="w-8 h-8" />
                        <h2 className="text-2xl font-bold">Общая выручка</h2>
                    </div>
                    <div className="text-5xl font-black mb-2">
                        {totalRevenue.toLocaleString("ru-RU")} ₸
                    </div>
                    <p className="text-green-100">
                        Суммарная выручка со всех заказов (кроме отмененных)
                    </p>
                </div>

                {/* Последние заказы */}
                <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-[#29380E]">Последние заказы</h2>
                        <Link
                            href="/admin/orders"
                            className="text-[#21AA57] hover:text-[#1a8a46] transition text-sm font-medium"
                        >
                            Посмотреть все →
                        </Link>
                    </div>

                    {recentOrders.length === 0 ? (
                        <p className="text-gray-600 text-center py-8">Заказов пока нет</p>
                    ) : (
                        <div className="space-y-4">
                            {recentOrders.map((order) => {
                                const date = new Date(order.createdAt).toLocaleDateString("ru-RU");
                                return (
                                    <Link
                                        key={order.id}
                                        href={`/admin/orders/${order.id}`}
                                        className="flex items-center justify-between p-4 bg-[#F4F7F5] rounded-xl hover:bg-gray-200 transition"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                                <ShoppingCart className="w-6 h-6 text-[#21AA57]" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-[#29380E]">
                                                    {order.customerName}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {order.items.length} товар(ов) • {date}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-[#29380E]">
                                                {order.totalPrice.toLocaleString("ru-RU")} ₸
                                            </div>
                                            <div className="text-xs text-gray-500">{order.status}</div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Быстрые действия */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <Link
                        href="/admin/products/new"
                        className="bg-white rounded-2xl p-6 hover:shadow-lg transition text-center group"
                    >
                        <Package className="w-12 h-12 text-[#21AA57] mx-auto mb-3 group-hover:scale-110 transition" />
                        <h3 className="font-semibold text-[#29380E] mb-1">Добавить товар</h3>
                        <p className="text-sm text-gray-600">Создать новый товар</p>
                    </Link>
                    <Link
                        href="/admin/orders"
                        className="bg-white rounded-2xl p-6 hover:shadow-lg transition text-center group"
                    >
                        <ShoppingCart className="w-12 h-12 text-[#21AA57] mx-auto mb-3 group-hover:scale-110 transition" />
                        <h3 className="font-semibold text-[#29380E] mb-1">Заказы</h3>
                        <p className="text-sm text-gray-600">Управление заказами</p>
                    </Link>
                    <Link
                        href="/dashboard"
                        className="bg-white rounded-2xl p-6 hover:shadow-lg transition text-center group"
                    >
                        <Users className="w-12 h-12 text-[#21AA57] mx-auto mb-3 group-hover:scale-110 transition" />
                        <h3 className="font-semibold text-[#29380E] mb-1">Пользователи</h3>
                        <p className="text-sm text-gray-600">Просмотр пользователей</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
