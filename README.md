# 🧬 EnergyMax - E-commerce для пробиотиков и БАДов

> Полнофункциональный интернет-магазин на Next.js 15 с админ-панелью, AI-ассистентом и интеграцией с WhatsApp

## 🚀 Технологический стек

### Frontend
- **Next.js 15.1.0** - React framework с App Router
- **React 19** - Современная библиотека UI
- **TypeScript 5.7** - Строгая типизация
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Анимации и transitions
- **Lucide React** - Иконки

### Backend & Database
- **PostgreSQL** - Основная база данных
- **Prisma 6** - ORM для типобезопасной работы с БД
- **NextAuth v5** - Аутентификация (JWT + OAuth)
- **Nodemailer** - Email-уведомления

### State Management & Utils
- **Zustand 5** - Легковесный state management (корзина)
- **Zod 4** - Schema validation
- **bcryptjs** - Хеширование паролей
- **clsx + tailwind-merge** - Conditional classnames

### AI & Integrations
- **OpenAI API** - GPT-4o-mini для AI-ассистента
- **React Google reCAPTCHA** - Защита от ботов
- **WhatsApp API** - Интеграция для оформления заказов

## ✨ Основные возможности

### Для покупателей
- 🛒 **Корзина** - Zustand-based с персистентностью в localStorage
- 📦 **Каталог товаров** - Пробиотики, свечи, активные добавки
- 🔍 **Детальные страницы товаров** - С галереей, описанием, отзывами
- 💬 **AI-ассистент** - Консультант на базе GPT-4o-mini
- 📱 **WhatsApp заказы** - Автоформирование сообщения для WhatsApp
- 👤 **Личный кабинет** - История заказов, профиль
- 🔐 **Аутентификация** - Email/пароль + Google OAuth

### Для администраторов
- 📊 **Дашборд** - Статистика продаж и заказов
- 📋 **Управление заказами** - CRUD с обновлением статусов
- 🖼️ **Загрузка изображений** - Защищенный upload с валидацией
- 📝 **Блог/База знаний** - Статьи о микробиоме и здоровье
- 👥 **Управление пользователями** - Роли (USER/ADMIN)

### Дополнительные фичи
- ⚡ **Оптимизация изображений** - AVIF/WebP с next/Image
- 🛡️ **Error Boundary** - Graceful error handling
- 🔒 **Валидация env** - Проверка при старте приложения
- 📄 **SEO-оптимизация** - Metadata, sitemap, robots.txt
- 🍪 **GDPR Compliance** - Cookie consent, Privacy Policy
- 📈 **Аналитика** - Google Analytics, Facebook Pixel
- 🎨 **Адаптивный дизайн** - Mobile-first подход

## 📦 Установка и запуск

### Предварительные требования
- Node.js 18+
- PostgreSQL 14+
- npm или yarn

### Шаги установки

1. **Клонируйте репозиторий**
```bash
git clone <repository-url>
cd probitotic.kg/probiotic-web
```

2. **Установите зависимости**
```bash
npm install
```

3. **Настройте переменные окружения**
```bash
cp .env.example .env
```

Заполните `.env` файл (см. раздел "Переменные окружения" ниже)

4. **Настройте базу данных**
```bash
# Создайте миграции
npx prisma migrate dev --name init

# Заполните тестовыми данными (опционально)
npx prisma db seed
```

5. **Запустите dev-сервер**
```bash
npm run dev
```

Приложение будет доступно на `http://localhost:3000`

## 🔐 Переменные окружения

### Обязательные
```bash
# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/energymax_db"
DIRECT_URL="postgresql://user:password@localhost:5432/energymax_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
```

### Опциональные (для production)
```bash
# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# SMTP для Email-уведомлений
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# Support Email
NEXT_PUBLIC_SUPPORT_EMAIL="fullstacknargiz@gmail.com"

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Facebook Pixel
NEXT_PUBLIC_FB_PIXEL_ID="XXXXXXXXXXXXXX"

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your-recaptcha-site-key"
RECAPTCHA_SECRET_KEY="your-recaptcha-secret-key"

# OpenAI API для AI-ассистента
OPENAI_API_KEY="sk-proj-your-openai-api-key"
```

## 📂 Структура проекта

```
probiotic-web/
├── prisma/
│   ├── schema.prisma        # Prisma schema с моделями БД
│   └── seed.ts              # Seed-скрипт для тестовых данных
├── public/
│   ├── images/              # Статические изображения товаров
│   └── uploads/             # Загруженные изображения (git ignored)
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── about/           # О компании
│   │   ├── admin/           # Админ-панель
│   │   │   ├── orders/      # Управление заказами
│   │   │   └── page.tsx     # Дашборд
│   │   ├── api/             # API Routes
│   │   │   ├── ai-chat/     # AI-ассистент endpoint
│   │   │   ├── auth/        # NextAuth handlers
│   │   │   ├── orders/      # CRUD заказов
│   │   │   └── upload/      # Image upload
│   │   ├── auth/            # Страницы авторизации
│   │   ├── blog/            # База знаний
│   │   ├── business/        # Маркетинг-план
│   │   ├── cart/            # Корзина
│   │   ├── info/            # Информация о микробиоме
│   │   ├── mentorship/      # Менторство
│   │   ├── product/         # Товары
│   │   ├── error.tsx        # Error Boundary
│   │   ├── not-found.tsx    # 404 страница
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Главная страница
│   ├── components/          # React компоненты
│   │   ├── admin/           # Админ-компоненты
│   │   ├── product/         # Компоненты товаров
│   │   ├── AiChatWidget.tsx # AI-чат виджет
│   │   ├── Catalog.tsx      # Каталог товаров
│   │   ├── Footer.tsx       # Футер
│   │   ├── Header.tsx       # Хедер с навигацией
│   │   └── Hero.tsx         # Hero секция
│   └── lib/                 # Утилиты и helpers
│       ├── store/           # Zustand stores
│       │   └── cartStore.ts # Глобальный стейт корзины
│       ├── auth.ts          # NextAuth конфигурация
│       ├── constants.ts     # Глобальные константы
│       ├── content.ts       # Контент для страниц
│       ├── env.ts           # Валидация env переменных
│       ├── prisma.ts        # Prisma client singleton
│       └── whatsapp.ts      # WhatsApp интеграция
├── .env.example             # Пример env файла
├── .gitignore               # Git ignore rules
├── next.config.mjs          # Next.js конфигурация
├── package.json             # NPM dependencies
├── tailwind.config.ts       # Tailwind конфигурация
├── tsconfig.json            # TypeScript конфигурация
└── README.md                # Этот файл
```

## 🗄️ База данных (Prisma Schema)

### Основные модели

**User** - Пользователи
- Роли: USER, ADMIN
- Поддержка OAuth (Google)
- Связи: orders, addresses, reviews

**Product** - Товары
- Категории: PROBIOTIC, CANDLES, ACTIVES
- Цены, скидки, наличие
- Изображения, описания, характеристики

**Order** - Заказы
- Статусы: PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED
- Привязка к пользователю (опционально)
- Адрес доставки, контакты

**OrderItem** - Элементы заказа
- Связь с Product и Order
- Цена на момент заказа, количество

**Review** - Отзывы на товары
- Рейтинг 1-5 звезд
- Модерация (isApproved)

**Address** - Адреса доставки
- Множественные адреса на пользователя
- Дефолтный адрес

**Article** - Статьи блога
- Топики: Кожа, Кишечник, Мозг, Аутизм
- Поддержка YouTube видео

**PartnershipLead** - Заявки на партнерство
- Контакты, желаемый пакет
- Статус обработки

## 🚀 Деплой

### Vercel (рекомендуется)

1. **Подключите репозиторий** к Vercel
2. **Настройте Environment Variables** в Vercel Dashboard
3. **Deploy** - автоматически при каждом push в main

### Ручной деплой

```bash
# Соберите production-версию
npm run build

# Запустите production-сервер
npm start
```

### Database Migrations

```bash
# Примените миграции на production БД
npx prisma migrate deploy

# Сгенерируйте Prisma Client
npx prisma generate
```

## 🔌 API Routes

### Публичные
- `POST /api/auth/[...nextauth]` - NextAuth handlers
- `POST /api/ai-chat` - AI-ассистент
- `POST /api/orders` - Создание заказа

### Защищенные (требуют аутентификации)
- `GET /api/orders` - Получить заказы пользователя
- `GET /api/orders/[id]` - Детали заказа

### Админские (требуют роль ADMIN)
- `POST /api/upload` - Загрузка изображений
- `GET /api/admin/orders` - Все заказы
- `PATCH /api/admin/orders/[id]` - Обновить статус заказа

## 🎨 UI/UX особенности

### Цветовая палитра
- **Primary Green**: `#21AA57` - основной бренд-цвет
- **Dark Green**: `#29380E` - текст и акценты
- **Light Background**: `#F4F7F5` - фоны секций
- **White**: `#FFFFFF` - карточки и контент

### Типография
- **Font**: System fonts для производительности
- **Sizes**: Responsive с использованием Tailwind

### Компоненты
- **Rounded corners**: Везде `rounded-2xl` для современного look
- **Transitions**: Плавные hover-эффекты с `transition`
- **Icons**: Lucide React для консистентности

## 🧪 Разработка

### Скрипты

```bash
npm run dev         # Dev-сервер на :3000
npm run build       # Production build
npm run start       # Запуск production
npm run lint        # ESLint проверка
```

### Prisma

```bash
npx prisma studio       # Браузер БД
npx prisma generate     # Генерация клиента
npx prisma migrate dev  # Создать миграцию
npx prisma db seed      # Заполнить тестовыми данными
```

## 🐛 Troubleshooting

### Build errors

**Проблема**: Module not found errors
```bash
# Решение: Удалите .next и node_modules
rm -rf .next node_modules
npm install
npm run build
```

**Проблема**: Prisma Client not generated
```bash
# Решение: Регенерируйте клиент
npx prisma generate
```

### Database issues

**Проблема**: Connection refused
- Проверьте DATABASE_URL в .env
- Убедитесь что PostgreSQL запущен
- Проверьте credentials и имя БД

**Проблема**: Migration errors
```bash
# Сброс БД (⚠️ удалит все данные)
npx prisma migrate reset
```

### Environment variables

**Проблема**: Missing required env vars
- Проверьте `.env` файл существует
- Убедитесь что все обязательные переменные заполнены
- Перезапустите dev-сервер после изменений

## 📞 Контакты и поддержка

- **Email**: fullstacknargiz@gmail.com
- **WhatsApp**: +996 990 105 555
- **Instagram**: @prozdorovie_kg
- **Telegram**: @nargizfullstack
- **Адрес**: ТЦ Вефа Блок С, 8 этаж, офис Energymax Group / ул. Малдыбаева 25

## 📝 Лицензия

Частный проект. Все права защищены © 2024-2026 EnergyMax Group

---

**🧬 EnergyMax - Восстановление микробиома для здоровой жизни**
