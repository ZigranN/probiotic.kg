import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Package, MapPin, User, LogOut, ShoppingBag } from "lucide-react";

export default async function DashboardPage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/auth/login");
    }

    // Получаем данные пользователя
    const user = await prisma.user.findUnique({
        where: { email: session.user.email! },
        include: {
            orders: {
                orderBy: { createdAt: "desc" },
                take: 5,
                include: {
                    items: true,
                },
            },
            addresses: {
                orderBy: { isDefault: "desc" },
            },
        },
    });

    if (!user) {
        redirect("/auth/login");
    }

    return (
        <div className="min-h-screen bg-[#F4F7F5] pb-24">
            {/* Header */}
            <div className="bg-[#29380E] text-white py-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-black uppercase italic mb-2">
                        Добро пожаловать, {user.firstName || "друг"}!
                    </h1>
                    <p className="text-white/60">Управляйте заказами и профилем</p>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-[2.5rem] shadow-lg p-8 border border-gray-100">
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-[#21AA57]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <User className="w-10 h-10 text-[#21AA57]" />
                                </div>
                                <h2 className="text-xl font-black text-[#29380E] uppercase italic">
                                    {user.firstName} {user.lastName}
                                </h2>
                                <p className="text-sm text-[#A8A496]">{user.email}</p>
                                {user.phone && (
                                    <p className="text-sm text-[#A8A496]">{user.phone}</p>
                                )}
                            </div>

                            <nav className="space-y-2">
                                <Link
                                    href="/dashboard/orders"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F4F7F5] transition-colors text-[#29380E] font-bold"
                                >
                                    <Package className="w-5 h-5 text-[#21AA57]" />
                                    Мои заказы
                                </Link>
                                <Link
                                    href="/dashboard/addresses"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F4F7F5] transition-colors text-[#29380E] font-bold"
                                >
                                    <MapPin className="w-5 h-5 text-[#21AA57]" />
                                    Адреса доставки
                                </Link>
                                <Link
                                    href="/dashboard/profile"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F4F7F5] transition-colors text-[#29380E] font-bold"
                                >
                                    <User className="w-5 h-5 text-[#21AA57]" />
                                    Профиль
                                </Link>
                            </nav>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <form action="/api/auth/signout" method="POST">
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-bold"
                                    >
                                        <LogOut className="w-5 h-5" />
                                        Выйти
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Статистика */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-[2rem] shadow-lg p-6 border border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#21AA57]/10 rounded-xl flex items-center justify-center">
                                        <Package className="w-6 h-6 text-[#21AA57]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#A8A496] uppercase font-bold">
                                            Всего заказов
                                        </p>
                                        <p className="text-3xl font-black text-[#29380E]">
                                            {user.orders.length}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[2rem] shadow-lg p-6 border border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#A8A496] uppercase font-bold">
                                            Адресов
                                        </p>
                                        <p className="text-3xl font-black text-[#29380E]">
                                            {user.addresses.length}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Последние заказы */}
                        <div className="bg-white rounded-[2.5rem] shadow-lg p-8 border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-black text-[#29380E] uppercase italic">
                                    Последние заказы
                                </h2>
                                <Link
                                    href="/dashboard/orders"
                                    className="text-[#21AA57] font-bold hover:underline text-sm"
                                >
                                    Все заказы →
                                </Link>
                            </div>

                            {user.orders.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <ShoppingBag className="w-8 h-8 text-gray-300" />
                                    </div>
                                    <p className="text-[#A8A496] mb-4">
                                        У вас пока нет заказов
                                    </p>
                                    <Link
                                        href="/#catalog"
                                        className="inline-block bg-[#21AA57] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1d914a] transition-colors"
                                    >
                                        Перейти в каталог
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {user.orders.map((order) => (
                                        <Link
                                            key={order.id}
                                            href={`/dashboard/orders/${order.id}`}
                                            className="block p-6 border border-gray-100 rounded-2xl hover:border-[#21AA57] hover:shadow-md transition-all"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <div>
                                                    <p className="text-xs text-[#A8A496] uppercase font-bold mb-1">
                                                        Заказ #{order.id.slice(-6)}
                                                    </p>
                                                    <p className="text-sm text-[#29380E]">
                                                        {new Date(order.createdAt).toLocaleDateString("ru-RU")}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xl font-black text-[#29380E]">
                                                        {order.totalPrice} сом
                                                    </p>
                                                    <span
                                                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                                                            order.status === "DELIVERED"
                                                                ? "bg-green-100 text-green-600"
                                                                : order.status === "SHIPPED"
                                                                ? "bg-blue-100 text-blue-600"
                                                                : order.status === "CANCELLED"
                                                                ? "bg-red-100 text-red-600"
                                                                : "bg-yellow-100 text-yellow-600"
                                                        }`}
                                                    >
                                                        {order.status === "PENDING" && "В обработке"}
                                                        {order.status === "PROCESSING" && "Оплачен"}
                                                        {order.status === "SHIPPED" && "Отправлен"}
                                                        {order.status === "DELIVERED" && "Доставлен"}
                                                        {order.status === "CANCELLED" && "Отменён"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#A8A496]">
                                                <Package className="w-4 h-4" />
                                                {order.items.length} товаров
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
