import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Package, Calendar, DollarSign } from "lucide-react";

export default async function OrdersPage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/auth/login");
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email! },
    });

    if (!user) {
        redirect("/auth/login");
    }

    const orders = await prisma.order.findMany({
        where: { userId: user.id },
        include: {
            items: {
                include: {
                    product: {
                        select: {
                            name: true,
                            images: true,
                        },
                    },
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="min-h-screen bg-[#F4F7F5] pb-24">
            {/* Header */}
            <div className="bg-[#29380E] text-white py-12">
                <div className="container mx-auto px-6">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Назад в кабинет
                    </Link>
                    <h1 className="text-4xl font-black uppercase italic">История заказов</h1>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-8">
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 border border-gray-100">
                    {orders.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Package className="w-10 h-10 text-gray-300" />
                            </div>
                            <h2 className="text-2xl font-black text-[#29380E] mb-2 uppercase italic">
                                Заказов пока нет
                            </h2>
                            <p className="text-[#A8A496] mb-6">
                                Самое время сделать первый заказ!
                            </p>
                            <Link
                                href="/#catalog"
                                className="inline-block bg-[#21AA57] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1d914a] transition-colors"
                            >
                                Перейти в каталог
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="border border-gray-200 rounded-2xl p-6 hover:border-[#21AA57] transition-all"
                                >
                                    {/* Header заказа */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-gray-100">
                                        <div>
                                            <h3 className="text-xl font-black text-[#29380E] uppercase italic mb-2">
                                                Заказ #{order.id.slice(-8).toUpperCase()}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-[#A8A496]">
                                                <span className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(order.createdAt).toLocaleDateString("ru-RU", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                    })}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Package className="w-4 h-4" />
                                                    {order.items.length} товаров
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-left md:text-right mt-4 md:mt-0">
                                            <p className="text-3xl font-black text-[#29380E] mb-2">
                                                {order.totalPrice.toLocaleString()} сом
                                            </p>
                                            <span
                                                className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                                                    order.status === "DELIVERED"
                                                        ? "bg-green-100 text-green-700"
                                                        : order.status === "SHIPPED"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : order.status === "CANCELLED"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-yellow-100 text-yellow-700"
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

                                    {/* Товары */}
                                    <div className="space-y-3 mb-6">
                                        {order.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center gap-4 p-4 bg-[#F4F7F5] rounded-xl"
                                            >
                                                <div className="flex-grow">
                                                    <h4 className="font-bold text-[#29380E]">{item.name}</h4>
                                                    <p className="text-sm text-[#A8A496]">
                                                        {item.quantity} шт × {item.price} сом
                                                    </p>
                                                </div>
                                                <p className="font-black text-[#29380E]">
                                                    {(item.quantity * item.price).toLocaleString()} сом
                                                </p>
                                            </div>
                                        ))}
                                    </div>


                                    {/* Кнопки действий */}
                                    <div className="flex flex-wrap gap-3 mt-6">
                                        {order.status === "PENDING" && (
                                            <button className="px-6 py-2 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors">
                                                Отменить заказ
                                            </button>
                                        )}
                                        <Link
                                            href={`/dashboard/orders/${order.id}`}
                                            className="px-6 py-2 bg-[#F4F7F5] text-[#29380E] rounded-xl font-bold hover:bg-[#21AA57] hover:text-white transition-colors"
                                        >
                                            Подробнее
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
