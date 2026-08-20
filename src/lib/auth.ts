import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { Role } from "@prisma/client";
import { compare } from "bcryptjs";

import { prisma } from "@/lib/prisma";

// ==========================================
// ENV
// ==========================================

const authSecret =
    process.env.AUTH_SECRET ??
    process.env.NEXTAUTH_SECRET;

const googleClientId =
    process.env.GOOGLE_CLIENT_ID;

const googleClientSecret =
    process.env.GOOGLE_CLIENT_SECRET;

// ==========================================
// AUTH
// ==========================================

export const {
    handlers,
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: PrismaAdapter(prisma),

    /*
     * Используем JWT.
     *
     * Для получения обычной session
     * Auth.js не должен каждый раз обращаться
     * к таблице Session в PostgreSQL.
     */
    session: {
        strategy: "jwt",
    },

    /*
     * Явно передаём secret.
     *
     * Это убирает зависимость от различий
     * NEXTAUTH_SECRET / AUTH_SECRET
     * между версиями Auth.js.
     */
    secret: authSecret,

    /*
     * Важно для:
     * localhost,
     * Vercel,
     * reverse proxy,
     * собственного домена.
     *
     * Без этого Auth.js v5 в некоторых
     * окружениях может вернуть 500
     * с UntrustedHost.
     */
    trustHost: true,

    pages: {
        signIn: "/auth/login",
    },

    providers: [
        /*
         * Google подключаем только тогда,
         * когда обе переменные реально есть.
         *
         * Это не позволит OAuth-конфигу
         * уронить весь /api/auth/session.
         */
        ...(googleClientId && googleClientSecret
            ? [
                GoogleProvider({
                    clientId: googleClientId,
                    clientSecret:
                    googleClientSecret,
                }),
            ]
            : []),

        CredentialsProvider({
            name: "credentials",

            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },

                password: {
                    label: "Пароль",
                    type: "password",
                },
            },

            async authorize(credentials) {
                const email =
                    typeof credentials?.email ===
                    "string"
                        ? credentials.email
                            .trim()
                            .toLowerCase()
                        : "";

                const password =
                    typeof credentials?.password ===
                    "string"
                        ? credentials.password
                        : "";

                if (!email || !password) {
                    return null;
                }

                const user =
                    await prisma.user.findUnique({
                        where: {
                            email,
                        },

                        select: {
                            id: true,
                            email: true,
                            firstName: true,
                            lastName: true,
                            passwordHash: true,
                            image: true,
                            role: true,
                        },
                    });

                if (
                    !user ||
                    !user.passwordHash ||
                    !user.email
                ) {
                    return null;
                }

                const passwordIsValid =
                    await compare(
                        password,
                        user.passwordHash,
                    );

                if (!passwordIsValid) {
                    return null;
                }

                const name = [
                    user.firstName,
                    user.lastName,
                ]
                    .filter(Boolean)
                    .join(" ")
                    .trim();

                return {
                    id: user.id,

                    email: user.email,

                    name:
                        name ||
                        user.email,

                    image:
                        user.image ?? null,

                    role: user.role,
                };
            },
        }),
    ],

    callbacks: {
        async jwt({
                      token,
                      user,
                  }) {
            /*
             * token.sub уже является стандартным
             * местом для ID пользователя.
             */
            if (user?.id) {
                token.sub = user.id;
            }

            if (user) {
                const userWithRole =
                    user as typeof user & {
                        role?: Role;
                    };

                token.role =
                    userWithRole.role ??
                    Role.USER;
            }

            return token;
        },

        async session({
                          session,
                          token,
                      }) {
            if (!session.user) {
                return session;
            }

            /*
             * Object.assign позволяет добавить
             * наши поля без опасных `as any`
             * внутри callback.
             */
            Object.assign(
                session.user,
                {
                    id:
                        token.sub ??
                        "",

                    role:
                        token.role ??
                        Role.USER,
                },
            );

            return session;
        },
    },

    /*
     * В production не выводим
     * подробные auth-логи.
     */
    debug:
        process.env.AUTH_DEBUG === "true",
});