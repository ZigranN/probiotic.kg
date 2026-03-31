import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = process.env.OPENAI_API_KEY ? new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
}) : null;

const SYSTEM_PROMPT = `Ты — AI-ассистент магазина пробиотиков EnergyMax. Твоя задача — помогать клиентам с выбором продуктов, отвечать на вопросы о составе, дозировках и применении.

ПРОДУКТЫ ENERGYMAX:

1. **Максилин жидкий** (5600 сом)
   - Живой пробиотик в бутылках
   - До 700 млрд живых бактерий
   - Для всей семьи
   - Помогает: пищеварение, микрофлора, иммунитет
   - Применение: до еды, запивая водой

2. **Максилин сухой (саше)** (5600 сом)
   - Порошок для разведения
   - 20 саше в упаковке
   - Удобно в дорогу
   - Развести в теплой воде

3. **Свечи с Максилином** (5600 сом)
   - 10 суппозиториев
   - Для локальной поддержки микрофлоры
   - Масло какао + пробиотик
   - Вагинально или ректально

4. **L-Аргинин (Гель/Капли)** (5600 сом)
   - Подъязычный формат
   - Поддержка сосудов и энергии
   - Начинать с малых доз
   - Варианты: с мятой, тмином, гвоздикой

5. **Витграс** (5600 сом)
   - Функциональное питание
   - Ростки пшеницы, овес, мед, лимон
   - Клеточное питание
   - 1 ложка в день

ВАЖНЫЕ ПРАВИЛА:
- Ты НЕ врач, не ставь диагнозы
- Всегда рекомендуй консультацию с врачом при серьезных симптомах
- Будь дружелюбным и понятным
- Объясняй просто, без сложных терминов
- При вопросах о дозировке — рекомендуй индивидуальную консультацию
- Цены указаны в сомах (KGS)
- Доставка: Бишкек 2-4 часа, регионы до 24 часов
- Бесплатная доставка от 5600 сом

Отвечай кратко и по делу. Если не знаешь ответ — честно скажи и посоветуй связаться с консультантом в WhatsApp: +996990105555`;

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { success: false, error: 'Неверный формат сообщений' },
                { status: 400 }
            );
        }

        // Проверяем наличие API ключа
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'AI-ассистент временно недоступен. Свяжитесь с нами в WhatsApp.',
                },
                { status: 503 }
            );
        }

        // Вызываем OpenAI API
        if (!openai) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'AI-ассистент временно недоступен',
                },
                { status: 503 }
            );
        }

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages,
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        const reply = completion.choices[0]?.message?.content;

        if (!reply) {
            throw new Error('Нет ответа от AI');
        }

        return NextResponse.json({
            success: true,
            message: reply,
        });
    } catch (error: any) {
        console.error('Ошибка AI-чата:', error);

        // Если ошибка от OpenAI
        if (error.code === 'insufficient_quota') {
            return NextResponse.json(
                {
                    success: false,
                    error: 'AI-ассистент временно недоступен. Пожалуйста, свяжитесь с нами в WhatsApp: +996990105555',
                },
                { status: 503 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Ошибка сервера',
            },
            { status: 500 }
        );
    }
}
