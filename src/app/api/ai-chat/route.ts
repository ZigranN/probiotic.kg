import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

import { seller } from "@/config/seller";

export const dynamic = "force-dynamic";

const openai = process.env.OPENAI_API_KEY
    ? new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    })
    : null;

const MODEL = process.env.OPENAI_CHAT_MODEL ?? "gpt-4o-mini";

const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1500;

interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}

const SYSTEM_PROMPT = `
Ты — информационный AI-ассистент интернет-магазина ${seller.siteName}.

Магазин:
- продавец: ${seller.legalName};
- страна работы: Кыргызская Республика;
- валюта: кыргызский сом;
- телефон и WhatsApp: ${seller.phone}.

ТВОЯ ЗАДАЧА:
- помогать пользователю ориентироваться на сайте;
- объяснять, как оформить заказ;
- подсказывать, где посмотреть состав, способ применения и документы;
- направлять пользователя к странице товара, публичной оферте, доставке или продавцу;
- отвечать кратко, спокойно и понятным русским языком.

ОБЯЗАТЕЛЬНЫЕ ПРАВИЛА:

1. Не ставь диагнозы.
2. Не назначай лечение.
3. Не обещай лечение, профилактику заболевания или гарантированный результат.
4. Не придумывай дозировки, курсы и схемы применения.
5. Не утверждай, что продукт подходит ребёнку, беременной женщине или человеку с заболеванием без точной информации производителя.
6. При вопросах о беременности, грудном вскармливании, детях, хронических заболеваниях, аллергии или совместимости с лекарствами рекомендуй консультацию врача.
7. Не придумывай состав, количество бактерий, противопоказания, сертификаты и регистрационные документы.
8. Информацию о составе и применении бери только из карточки конкретного товара и маркировки на упаковке.
9. Не называй товар лекарственным средством, если его статус точно не указан.
10. Не сообщай точные сроки и стоимость доставки. Их подтверждает менеджер.
11. Не обещай бесплатную доставку.
12. Не придумывай наличие товара и способы оплаты.
13. Не утверждай, что магазин является официальным представителем, дистрибьютором или эксклюзивным партнёром.
14. Отзывы покупателей не являются доказательством эффективности и не гарантируют такой же результат.
15. Если точного ответа нет, честно скажи об этом и предложи обратиться к продавцу в WhatsApp: ${seller.phone}.

ПРАВИЛА ОФОРМЛЕНИЯ ЗАКАЗА:
- пользователь выбирает товар и добавляет его в корзину;
- указывает имя и номер телефона;
- принимает условия публичной оферты и политики конфиденциальности;
- заказ направляется продавцу через сайт и WhatsApp;
- наличие, доставка и способ оплаты подтверждаются менеджером.

Не запрашивай у пользователя:
- паспортные данные;
- ИНН;
- данные банковской карты;
- пароль;
- медицинские документы;
- подробный диагноз.

В конце медицинского ответа при необходимости добавляй:
«Информация носит справочный характер и не заменяет консультацию специалиста».
`.trim();

function isChatMessage(value: unknown): value is ChatMessage {
    if (!value || typeof value !== "object") {
        return false;
    }

    const message = value as Record<string, unknown>;

    return (
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string" &&
        message.content.trim().length > 0 &&
        message.content.length <= MAX_MESSAGE_LENGTH
    );
}

function getErrorMessage(error: unknown): string {
    if (
        error &&
        typeof error === "object" &&
        "code" in error &&
        error.code === "insufficient_quota"
    ) {
        return `AI-ассистент временно недоступен. Свяжитесь с продавцом в WhatsApp: ${seller.phone}`;
    }

    return "AI-ассистент временно недоступен. Попробуйте позже.";
}

export async function POST(request: NextRequest) {
    try {
        const body: unknown = await request.json();

        if (!body || typeof body !== "object") {
            return NextResponse.json(
                {
                    success: false,
                    error: "Неверный формат запроса",
                },
                {
                    status: 400,
                },
            );
        }

        const { messages } = body as {
            messages?: unknown;
        };

        if (!Array.isArray(messages)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Неверный формат сообщений",
                },
                {
                    status: 400,
                },
            );
        }

        const sanitizedMessages = messages
            .filter(isChatMessage)
            .slice(-MAX_MESSAGES)
            .map((message) => ({
                role: message.role,
                content: message.content.trim(),
            }));

        if (sanitizedMessages.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Введите сообщение",
                },
                {
                    status: 400,
                },
            );
        }

        if (!openai) {
            return NextResponse.json(
                {
                    success: false,
                    error: `AI-ассистент временно недоступен. Свяжитесь с продавцом в WhatsApp: ${seller.phone}`,
                },
                {
                    status: 503,
                },
            );
        }

        const completion = await openai.chat.completions.create({
            model: MODEL,
            messages: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT,
                },
                ...sanitizedMessages,
            ],
            temperature: 0.3,
            max_tokens: 500,
        });

        const reply = completion.choices[0]?.message?.content?.trim();

        if (!reply) {
            throw new Error("Пустой ответ AI");
        }

        return NextResponse.json({
            success: true,
            message: reply,
        });
    } catch (error: unknown) {
        console.error("Ошибка AI-чата:", error);

        return NextResponse.json(
            {
                success: false,
                error: getErrorMessage(error),
            },
            {
                status: 500,
            },
        );
    }
}