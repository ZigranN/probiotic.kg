"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Phone, Loader2, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phone: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        // Валидация
        if (formData.password !== formData.confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }

        if (formData.password.length < 6) {
            setError("Пароль должен быть не менее 6 символов");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.phone,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);
                setTimeout(() => {
                    router.push("/auth/login");
                }, 2000);
            } else {
                setError(data.error || "Ошибка регистрации");
            }
        } catch (err: any) {
            setError(err.message || "Произошла ошибка");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F4F7F5] to-white flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Логотип */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block">
                        <Image src="/images/logo-main.webp" alt="EnergyMax" width={180} height={50} className="mx-auto" />
                    </Link>
                    <h1 className="text-3xl font-black text-[#29380E] mt-6 uppercase italic">Регистрация</h1>
                    <p className="text-[#A8A496] mt-2">Создайте аккаунт для покупок</p>
                </div>

                {/* Форма */}
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 border border-gray-100">
                    {error && (
                        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm mb-6 border border-red-100">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-50 text-green-600 px-4 py-3 rounded-xl text-sm mb-6 border border-green-100 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Регистрация успешна! Перенаправляем на вход...
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-[#29380E] uppercase mb-2 ml-2">Имя</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Айдин"
                                    className="w-full px-4 py-3 bg-[#F4F7F5] border border-gray-200 rounded-xl outline-none focus:border-[#21AA57] transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-[#29380E] uppercase mb-2 ml-2">Фамилия</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Мамытов"
                                    className="w-full px-4 py-3 bg-[#F4F7F5] border border-gray-200 rounded-xl outline-none focus:border-[#21AA57] transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[#29380E] uppercase mb-2 ml-2">Email *</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A496]" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full pl-12 pr-4 py-3 bg-[#F4F7F5] border border-gray-200 rounded-xl outline-none focus:border-[#21AA57] transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[#29380E] uppercase mb-2 ml-2">Телефон</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A496]" />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+996 XXX XXX XXX"
                                    className="w-full pl-12 pr-4 py-3 bg-[#F4F7F5] border border-gray-200 rounded-xl outline-none focus:border-[#21AA57] transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[#29380E] uppercase mb-2 ml-2">Пароль *</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A496]" />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Минимум 6 символов"
                                    className="w-full pl-12 pr-4 py-3 bg-[#F4F7F5] border border-gray-200 rounded-xl outline-none focus:border-[#21AA57] transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[#29380E] uppercase mb-2 ml-2">Повторите пароль *</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A496]" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-3 bg-[#F4F7F5] border border-gray-200 rounded-xl outline-none focus:border-[#21AA57] transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || success}
                            className="w-full bg-[#21AA57] hover:bg-[#1d914a] disabled:opacity-50 text-white py-4 rounded-xl font-bold text-lg uppercase tracking-tighter transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#21AA57]/20 mt-6"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Регистрация...
                                </>
                            ) : (
                                <>
                                    <User className="w-5 h-5" />
                                    Зарегистрироваться
                                </>
                            )}
                        </button>
                    </form>

                    {/* Вход */}
                    <p className="text-center mt-6 text-sm text-[#A8A496]">
                        Уже есть аккаунт?{" "}
                        <Link href="/auth/login" className="text-[#21AA57] font-bold hover:underline">
                            Войти
                        </Link>
                    </p>
                </div>

                {/* Назад */}
                <div className="text-center mt-6">
                    <Link href="/" className="text-[#A8A496] text-sm hover:text-[#21AA57] transition-colors">
                        ← Вернуться на главную
                    </Link>
                </div>
            </div>
        </div>
    );
}
