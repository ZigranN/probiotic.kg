import nodemailer from "nodemailer";
import { OrderStatus } from "@prisma/client";

import { seller } from "@/config/seller";

// ==========================================
// SMTP
// ==========================================

const smtpPort = Number.parseInt(
    process.env.SMTP_PORT ?? "587",
    10,
);

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: smtpPort,

    // 465 = SSL
    // 587 = STARTTLS
    secure: smtpPort === 465,

    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

// ==========================================
// TYPES
// ==========================================

interface OrderEmailItem {
    name: string;
    quantity: number;
    price: number;
}

interface OrderConfirmationData {
    id: string;
    customerName: string;
    customerEmail: string;
    totalPrice: number;
    items: OrderEmailItem[];
}

// ==========================================
// HELPERS
// ==========================================

function formatKgs(value: number): string {
    return new Intl.NumberFormat("ru-RU").format(value);
}

function getShortOrderId(orderId: string): string {
    return orderId.slice(-6).toUpperCase();
}

function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function normalizeCustomerName(value: string): string {
    const name = value.trim();

    return name || "покупатель";
}

function isEmailConfigured(): boolean {
    return Boolean(
        process.env.SMTP_HOST &&
        process.env.SMTP_USER &&
        process.env.SMTP_PASSWORD,
    );
}

// ==========================================
// ORDER CREATED
// ==========================================
//
// ВАЖНО:
//
// Письмо не говорит "заказ подтверждён",
// потому что после оформления менеджер ещё
// подтверждает наличие и детали заказа.
// ==========================================

export async function sendOrderConfirmation(
    order: OrderConfirmationData,
) {
    if (!isEmailConfigured()) {
        console.warn(
            "Email не отправлен: SMTP не настроен.",
        );

        return {
            success: false,
            error: "SMTP_NOT_CONFIGURED",
        };
    }

    try {
        const customerName = normalizeCustomerName(
            order.customerName,
        );

        const safeCustomerName =
            escapeHtml(customerName);

        const shortOrderId = getShortOrderId(
            order.id,
        );

        // --------------------------------------
        // TEXT VERSION
        // --------------------------------------

        const itemsText = order.items
            .map((item) => {
                const itemTotal =
                    item.price * item.quantity;

                return (
                    `• ${item.name} — ` +
                    `${item.quantity} шт. — ` +
                    `${formatKgs(itemTotal)} сом`
                );
            })
            .join("\n");

        const text = `
Здравствуйте, ${customerName}!

Мы получили ваш заказ на ${seller.siteName}.

Заказ №${shortOrderId}

Товары:
${itemsText}

Итого: ${formatKgs(order.totalPrice)} сом

🎁 Доставка — в подарок.

Менеджер подтвердит наличие товаров, способ оплаты и детали доставки.

Если у вас есть вопросы:
WhatsApp: ${seller.phone}
Email: ${seller.email}

${seller.siteUrl}

С уважением,
${seller.siteName}
        `.trim();

        // --------------------------------------
        // HTML ITEMS
        // --------------------------------------

        const itemsHtml = order.items
            .map((item) => {
                const safeName =
                    escapeHtml(item.name);

                const itemTotal =
                    item.price * item.quantity;

                return `
                    <tr>
                        <td
                            style="
                                padding: 14px 0;
                                border-bottom: 1px solid #eeeeee;
                                color: #29380E;
                                font-size: 14px;
                                line-height: 1.5;
                            "
                        >
                            ${safeName}
                            <div
                                style="
                                    margin-top: 4px;
                                    color: #777777;
                                    font-size: 12px;
                                "
                            >
                                ${item.quantity} шт.
                            </div>
                        </td>

                        <td
                            align="right"
                            style="
                                padding: 14px 0;
                                border-bottom: 1px solid #eeeeee;
                                color: #29380E;
                                font-size: 14px;
                                font-weight: 700;
                                white-space: nowrap;
                            "
                        >
                            ${formatKgs(itemTotal)} сом
                        </td>
                    </tr>
                `;
            })
            .join("");

        // --------------------------------------
        // HTML VERSION
        // --------------------------------------

        const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8" />

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
    />

    <title>
        Заказ №${shortOrderId}
    </title>
</head>

<body
    style="
        margin: 0;
        padding: 0;
        background: #F4F7F5;
        font-family: Arial, Helvetica, sans-serif;
        color: #29380E;
    "
>
    <div
        style="
            max-width: 620px;
            margin: 0 auto;
            padding: 24px 12px;
        "
    >
        <div
            style="
                overflow: hidden;
                background: #ffffff;
                border-radius: 24px;
            "
        >
            <!-- HEADER -->

            <div
                style="
                    padding: 32px 28px;
                    background: #29380E;
                    color: #ffffff;
                    text-align: center;
                "
            >
                <div
                    style="
                        margin-bottom: 8px;
                        color: #21AA57;
                        font-size: 12px;
                        font-weight: 700;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                    "
                >
                    ${escapeHtml(seller.siteName)}
                </div>

                <h1
                    style="
                        margin: 0;
                        font-size: 28px;
                        line-height: 1.2;
                    "
                >
                    Заказ получен
                </h1>
            </div>

            <!-- CONTENT -->

            <div
                style="
                    padding: 30px 28px;
                "
            >
                <p
                    style="
                        margin: 0 0 16px;
                        font-size: 16px;
                        line-height: 1.7;
                    "
                >
                    Здравствуйте,
                    <strong>
                        ${safeCustomerName}
                    </strong>!
                </p>

                <p
                    style="
                        margin: 0 0 24px;
                        color: #666666;
                        font-size: 15px;
                        line-height: 1.7;
                    "
                >
                    Мы получили ваш заказ.
                    Менеджер проверит наличие товаров
                    и подтвердит детали оформления.
                </p>

                <!-- ORDER -->

                <div
                    style="
                        margin-bottom: 24px;
                        padding: 20px;
                        background: #F4F7F5;
                        border-radius: 18px;
                    "
                >
                    <div
                        style="
                            margin-bottom: 14px;
                            color: #777777;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 1px;
                            text-transform: uppercase;
                        "
                    >
                        Заказ №${shortOrderId}
                    </div>

                    <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                    >
                        ${itemsHtml}
                    </table>

                    <div
                        style="
                            margin-top: 20px;
                            text-align: right;
                        "
                    >
                        <div
                            style="
                                margin-bottom: 4px;
                                color: #777777;
                                font-size: 12px;
                                text-transform: uppercase;
                            "
                        >
                            Итого
                        </div>

                        <div
                            style="
                                color: #21AA57;
                                font-size: 26px;
                                font-weight: 800;
                            "
                        >
                            ${formatKgs(
            order.totalPrice,
        )} сом
                        </div>
                    </div>
                </div>

                <!-- DELIVERY -->

                <div
                    style="
                        margin-bottom: 24px;
                        padding: 18px 20px;
                        background: #F1FAF4;
                        border: 1px solid #DCEFE2;
                        border-radius: 16px;
                    "
                >
                    <div
                        style="
                            margin-bottom: 6px;
                            color: #21AA57;
                            font-size: 16px;
                            font-weight: 800;
                        "
                    >
                        🎁 Доставка — в подарок
                    </div>

                    <div
                        style="
                            color: #666666;
                            font-size: 13px;
                            line-height: 1.6;
                        "
                    >
                        Способ и срок доставки
                        подтверждает менеджер
                        при оформлении заказа.
                    </div>
                </div>

                <!-- NEXT STEP -->

                <div
                    style="
                        margin-bottom: 28px;
                    "
                >
                    <h2
                        style="
                            margin: 0 0 10px;
                            font-size: 17px;
                            color: #29380E;
                        "
                    >
                        Что дальше?
                    </h2>

                    <p
                        style="
                            margin: 0;
                            color: #666666;
                            font-size: 14px;
                            line-height: 1.7;
                        "
                    >
                        Менеджер подтвердит наличие,
                        способ оплаты и детали доставки.
                        Не переводите оплату по реквизитам,
                        полученным не из подтверждённого
                        канала связи магазина.
                    </p>
                </div>

                <!-- CONTACT -->

                <div
                    style="
                        padding-top: 22px;
                        border-top: 1px solid #eeeeee;
                    "
                >
                    <p
                        style="
                            margin: 0 0 12px;
                            color: #666666;
                            font-size: 13px;
                            line-height: 1.6;
                        "
                    >
                        Есть вопрос по заказу?
                    </p>

                    <a
                        href="https://wa.me/${seller.whatsappPhone}"
                        style="
                            display: inline-block;
                            margin-right: 8px;
                            margin-bottom: 8px;
                            padding: 12px 18px;
                            background: #21AA57;
                            border-radius: 12px;
                            color: #ffffff;
                            font-size: 13px;
                            font-weight: 700;
                            text-decoration: none;
                        "
                    >
                        Написать в WhatsApp
                    </a>

                    <a
                        href="${seller.siteUrl}"
                        style="
                            display: inline-block;
                            margin-bottom: 8px;
                            padding: 12px 18px;
                            background: #F4F7F5;
                            border-radius: 12px;
                            color: #29380E;
                            font-size: 13px;
                            font-weight: 700;
                            text-decoration: none;
                        "
                    >
                        Открыть ${escapeHtml(
            seller.siteName,
        )}
                    </a>
                </div>
            </div>
        </div>

        <!-- FOOTER -->

        <div
            style="
                padding: 22px 16px;
                color: #777777;
                font-size: 11px;
                line-height: 1.7;
                text-align: center;
            "
        >
            ${escapeHtml(seller.legalName)}
            <br />

            ${escapeHtml(seller.phone)}
            ·
            ${escapeHtml(seller.email)}
        </div>
    </div>
</body>
</html>
        `;

        const info = await transporter.sendMail({
            from: `"${seller.siteName}" <${process.env.SMTP_USER}>`,

            replyTo: seller.email,

            to: order.customerEmail,

            subject:
                `Заказ №${shortOrderId} получен — ${seller.siteName}`,

            text,
            html,
        });

        console.log(
            "Email заказа отправлен:",
            info.messageId,
        );

        return {
            success: true,
            messageId: info.messageId,
        };
    } catch (error: unknown) {
        console.error(
            "Ошибка отправки email заказа:",
            error,
        );

        return {
            success: false,
            error,
        };
    }
}

// ==========================================
// ORDER STATUS UPDATE
// ==========================================

const statusText: Record<OrderStatus, string> = {
    PENDING: "Заказ получен",
    PROCESSING: "Заказ в обработке",
    SHIPPED: "Заказ отправлен",
    DELIVERED: "Заказ доставлен",
    CANCELLED: "Заказ отменён",
};

export async function sendOrderStatusUpdate(
    customerEmail: string,
    customerName: string,
    orderId: string,
    newStatus: OrderStatus,
) {
    if (!isEmailConfigured()) {
        console.warn(
            "Email не отправлен: SMTP не настроен.",
        );

        return {
            success: false,
            error: "SMTP_NOT_CONFIGURED",
        };
    }

    try {
        const name =
            normalizeCustomerName(customerName);

        const safeName = escapeHtml(name);

        const shortOrderId =
            getShortOrderId(orderId);

        const readableStatus =
            statusText[newStatus];

        const info = await transporter.sendMail({
            from: `"${seller.siteName}" <${process.env.SMTP_USER}>`,

            replyTo: seller.email,

            to: customerEmail,

            subject:
                `Заказ №${shortOrderId}: ${readableStatus}`,

            text: `
Здравствуйте, ${name}!

Статус заказа №${shortOrderId}:

${readableStatus}

Если у вас есть вопросы:
WhatsApp: ${seller.phone}
Email: ${seller.email}

${seller.siteUrl}

С уважением,
${seller.siteName}
            `.trim(),

            html: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8" />

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
    />

    <title>
        Обновление заказа
    </title>
</head>

<body
    style="
        margin: 0;
        padding: 0;
        background: #F4F7F5;
        font-family: Arial, Helvetica, sans-serif;
        color: #29380E;
    "
>
    <div
        style="
            max-width: 600px;
            margin: 0 auto;
            padding: 24px 12px;
        "
    >
        <div
            style="
                padding: 30px;
                background: #ffffff;
                border-radius: 22px;
            "
        >
            <div
                style="
                    margin-bottom: 8px;
                    color: #21AA57;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                "
            >
                ${escapeHtml(seller.siteName)}
            </div>

            <h1
                style="
                    margin: 0 0 20px;
                    color: #29380E;
                    font-size: 26px;
                "
            >
                Обновление заказа
            </h1>

            <p
                style="
                    margin-bottom: 20px;
                    color: #555555;
                    line-height: 1.7;
                "
            >
                Здравствуйте,
                <strong>${safeName}</strong>!
            </p>

            <p
                style="
                    color: #555555;
                    line-height: 1.7;
                "
            >
                Статус заказа
                <strong>
                    №${shortOrderId}
                </strong>
                изменён:
            </p>

            <div
                style="
                    margin: 22px 0;
                    padding: 18px;
                    background: #F1FAF4;
                    border-radius: 14px;
                    color: #21AA57;
                    font-size: 18px;
                    font-weight: 800;
                    text-align: center;
                "
            >
                ${escapeHtml(readableStatus)}
            </div>

            <a
                href="https://wa.me/${seller.whatsappPhone}"
                style="
                    display: inline-block;
                    margin-top: 8px;
                    padding: 12px 18px;
                    background: #21AA57;
                    border-radius: 12px;
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                "
            >
                Связаться в WhatsApp
            </a>
        </div>
    </div>
</body>
</html>
            `,
        });

        console.log(
            "Email статуса заказа отправлен:",
            info.messageId,
        );

        return {
            success: true,
            messageId: info.messageId,
        };
    } catch (error: unknown) {
        console.error(
            "Ошибка отправки статуса заказа:",
            error,
        );

        return {
            success: false,
            error,
        };
    }
}