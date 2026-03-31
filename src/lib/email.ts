import nodemailer from 'nodemailer';

// Создаем транспорт для отправки email
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true для 465, false для других портов
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

// Шаблон письма о новом заказе
export async function sendOrderConfirmation(order: {
    id: string;
    customerName: string;
    customerEmail: string;
    totalPrice: number;
    items: Array<{ name: string; quantity: number; price: number }>;
}) {
    try {
        const itemsList = order.items
            .map((item) => `- ${item.name} (${item.quantity} шт) — ${item.price * item.quantity} сом`)
            .join('\n');

        const mailOptions = {
            from: `"EnergyMax" <${process.env.SMTP_USER}>`,
            to: order.customerEmail,
            subject: `✅ Заказ #${order.id.slice(-6)} подтвержден`,
            text: `
Здравствуйте, ${order.customerName}!

Ваш заказ успешно оформлен и принят в обработку.

Заказ #${order.id.slice(-6)}

Товары:
${itemsList}

Итого: ${order.totalPrice} сом

Наш менеджер свяжется с вами в ближайшее время для уточнения деталей доставки.

С уважением,
Команда EnergyMax
            `,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #29380E; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .order-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .item { padding: 10px 0; border-bottom: 1px solid #eee; }
        .total { font-size: 24px; font-weight: bold; color: #21AA57; margin-top: 20px; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ Заказ подтвержден!</h1>
        </div>
        <div class="content">
            <p>Здравствуйте, <strong>${order.customerName}</strong>!</p>
            <p>Ваш заказ успешно оформлен и принят в обработку.</p>

            <div class="order-details">
                <h3>Заказ #${order.id.slice(-6)}</h3>

                ${order.items.map(item => `
                    <div class="item">
                        <div style="display: flex; justify-content: space-between;">
                            <span>${item.name} (${item.quantity} шт)</span>
                            <span><strong>${item.price * item.quantity} сом</strong></span>
                        </div>
                    </div>
                `).join('')}

                <div class="total">
                    Итого: ${order.totalPrice} сом
                </div>
            </div>

            <p>Наш менеджер свяжется с вами в ближайшее время для уточнения деталей доставки и оплаты.</p>

            <p style="margin-top: 30px;">С уважением,<br><strong>Команда EnergyMax</strong></p>
        </div>

        <div class="footer">
            <p>Это автоматическое письмо, отвечать на него не нужно.</p>
            <p>Если у вас есть вопросы, свяжитесь с нами: ${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</p>
        </div>
    </div>
</body>
</html>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email отправлен:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Ошибка отправки email:', error);
        return { success: false, error };
    }
}

// Уведомление об изменении статуса заказа
export async function sendOrderStatusUpdate(
    customerEmail: string,
    customerName: string,
    orderId: string,
    newStatus: string
) {
    try {
        const statusText: Record<string, string> = {
            PAID: 'Оплачен',
            SHIPPED: 'Отправлен',
            DELIVERED: 'Доставлен',
            CANCELLED: 'Отменён',
        };

        const mailOptions = {
            from: `"EnergyMax" <${process.env.SMTP_USER}>`,
            to: customerEmail,
            subject: `📦 Обновление заказа #${orderId.slice(-6)}`,
            text: `
Здравствуйте, ${customerName}!

Статус вашего заказа #${orderId.slice(-6)} изменился: ${statusText[newStatus] || newStatus}

Спасибо за покупку!
Команда EnergyMax
            `,
            html: `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #29380E;">Обновление заказа</h2>
        <p>Здравствуйте, <strong>${customerName}</strong>!</p>
        <p>Статус вашего заказа <strong>#${orderId.slice(-6)}</strong> изменился:</p>
        <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <h3 style="color: #21AA57; margin: 0;">${statusText[newStatus] || newStatus}</h3>
        </div>
        <p>Спасибо за покупку!</p>
        <p style="margin-top: 30px;">С уважением,<br><strong>Команда EnergyMax</strong></p>
    </div>
</body>
</html>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Ошибка отправки email:', error);
        return { success: false, error };
    }
}
