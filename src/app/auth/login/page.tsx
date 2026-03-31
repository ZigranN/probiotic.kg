"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, LogIn, Loader2 } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError(result.error);
            } else {
                router.push("/dashboard");
                router.refresh();
            }
        } catch (err: any) {
            setError(err.message || "Произошла ошибка");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        signIn("google", { callbackUrl: "/dashboard" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F4F7F5] to-white flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Логотип */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block">
                        <Image src="/images/logo-main.webp" alt="EnergyMax" width={180} height={50} className="mx-auto" />
                    </Link>
                    <h1 className="text-3xl font-black text-[#29380E] mt-6 uppercase italic">Вход в аккаунт</h1>
                    <p className="text-[#A8A496] mt-2">Войдите, чтобы управлять заказами</p>
                </div>

                {/* Форма */}
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 border border-gray-100">
                    {error && (
                        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm mb-6 border border-red-100">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-[#29380E] uppercase mb-2 ml-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A496]" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full pl-12 pr-4 py-4 bg-[#F4F7F5] border border-gray-200 rounded-xl outline-none focus:border-[#21AA57] transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[#29380E] uppercase mb-2 ml-2">Пароль</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A496]" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 bg-[#F4F7F5] border border-gray-200 rounded-xl outline-none focus:border-[#21AA57] transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#21AA57] hover:bg-[#1d914a] disabled:opacity-50 text-white py-4 rounded-xl font-bold text-lg uppercase tracking-tighter transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#21AA57]/20"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Вход...
                                </>
                            ) : (
                                <>
                                    <LogIn className="w-5 h-5" />
                                    Войти
                                </>
                            )}
                        </button>
                    </form>

                    {/* Разделитель */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-xs text-[#A8A496] uppercase font-bold">Или</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* OAuth кнопки */}
                    <div className="space-y-3">
                        <button
                            onClick={handleGoogleSignIn}
                            className="w-full bg-white border-2 border-gray-200 hover:border-[#21AA57] text-[#29380E] py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Войти через Google
                        </button>
                    </div>

                    {/* Регистрация */}
                    <p className="text-center mt-6 text-sm text-[#A8A496]">
                        Нет аккаунта?{" "}
                        <Link href="/auth/register" className="text-[#21AA57] font-bold hover:underline">
                            Зарегистрироваться
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
