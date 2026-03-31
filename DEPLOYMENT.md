# 🚀 Руководство по деплою EnergyMax

## ✅ Текущий статус

**BUILD УСПЕШНО ЗАВЕРШЕН!** Проект готов к деплою.

## 📋 Pre-deployment Checklist

### ✅ Выполнено
- [x] Build успешно собран без ошибок
- [x] TypeScript проверки пройдены
- [x] Все зависимости установлены
- [x] Environment validation настроена
- [x] Error Boundary добавлен
- [x] 404 страница создана
- [x] README.md создан
- [x] .gitignore настроен
- [x] Prisma schema обновлена (PROCESSING вместо PAID)
- [x] Next.js 15 async params исправлены
- [x] OpenAI integration опциональна
- [x] Image optimization настроена
- [x] Standalone output mode включен

### ⚠️ Требует внимания перед production

1. **Environment Variables для Production:**
   ```bash
   # Обязательные
   DATABASE_URL="your-production-database-url"
   DIRECT_URL="your-direct-database-url"
   NEXTAUTH_URL="https://yourdomain.com"
   NEXTAUTH_SECRET="generate-strong-secret-key-32-chars-min"

   # Опциональные но рекомендуемые
   OPENAI_API_KEY="sk-..."                     # Для AI-ассистента
   GOOGLE_CLIENT_ID="..."                      # Для Google OAuth
   GOOGLE_CLIENT_SECRET="..."                  # Для Google OAuth
   NEXT_PUBLIC_GA_MEASUREMENT_ID="G-..."       # Google Analytics
   NEXT_PUBLIC_FB_PIXEL_ID="..."               # Facebook Pixel
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY="..."        # reCAPTCHA
   RECAPTCHA_SECRET_KEY="..."                  # reCAPTCHA
   ```

2. **База данных:**
   - [ ] Применить миграции: `npx prisma migrate deploy`
   - [ ] Сгенерировать Prisma Client: `npx prisma generate`
   - [ ] Опционально: Заполнить seed данными: `npx prisma db seed`

3. **Безопасность:**
   - [ ] Сгенерировать крипто-стойкий NEXTAUTH_SECRET:
     ```bash
     openssl rand -base64 32
     ```
   - [ ] Обновить NEXTAUTH_URL на production домен
   - [ ] Проверить, что .env не коммитится в git

## 🚀 Варианты деплоя

### Вариант 1: Vercel (Рекомендуется ⭐)

**Плюсы:** Автоматический деплой, zero-config, бесплатный SSL, CDN

1. **Push в GitHub:**
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Подключите проект в Vercel:**
   - Зайдите на [vercel.com](https://vercel.com)
   - Import Git Repository
   - Выберите ваш репозиторий

3. **Настройте Environment Variables в Vercel Dashboard:**
   - Settings → Environment Variables
   - Добавьте все переменные из списка выше

4. **Deploy:**
   - Vercel автоматически задеплоит после push
   - Или нажмите "Deploy" в dashboard

**Build Command:** `npm run build`
**Output Directory:** `.next`
**Install Command:** `npm install`

### Вариант 2: VPS/Cloud Server (Digital Ocean, AWS, etc.)

1. **Подготовка сервера:**
   ```bash
   # Установите Node.js 18+
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Установите PM2
   npm install -g pm2
   ```

2. **Деплой приложения:**
   ```bash
   # Клонируйте репозиторий
   git clone <your-repo-url>
   cd probiotic-web

   # Установите зависимости
   npm install

   # Создайте .env файл
   nano .env
   # (вставьте production переменные)

   # Применить миграции
   npx prisma migrate deploy
   npx prisma generate

   # Соберите проект
   npm run build

   # Запустите с PM2
   pm2 start npm --name "energymax" -- start
   pm2 save
   pm2 startup
   ```

3. **Настройте Nginx как reverse proxy:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL сертификат с Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

### Вариант 3: Docker

1. **Создайте Dockerfile:**
   ```dockerfile
   FROM node:18-alpine AS base

   FROM base AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npx prisma generate
   RUN npm run build

   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production

   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static

   EXPOSE 3000
   CMD ["node", "server.js"]
   ```

2. **Build и запуск:**
   ```bash
   docker build -t energymax .
   docker run -p 3000:3000 --env-file .env energymax
   ```

## 📊 После деплоя

### Проверки:
- [ ] Сайт открывается по домену
- [ ] Все страницы загружаются
- [ ] Регистрация/логин работает
- [ ] Товары отображаются
- [ ] Корзина функционирует
- [ ] WhatsApp интеграция работает
- [ ] Админ-панель доступна
- [ ] AI-ассистент отвечает (если настроен OPENAI_API_KEY)
- [ ] Google Analytics трекает (если настроен)
- [ ] SSL сертификат валиден

### Мониторинг:
```bash
# Проверка логов (PM2)
pm2 logs energymax

# Проверка статуса
pm2 status

# Перезапуск
pm2 restart energymax
```

## 🔄 Обновления

```bash
# Pull последних изменений
git pull origin main

# Установить зависимости (если package.json изменился)
npm install

# Применить миграции (если schema.prisma изменился)
npx prisma migrate deploy
npx prisma generate

# Пересобрать
npm run build

# Перезапустить (PM2)
pm2 restart energymax

# Или (Docker)
docker-compose down && docker-compose up -d --build
```

## 🐛 Troubleshooting

### Build ошибки:
```bash
# Очистите кэш
rm -rf .next node_modules
npm install
npm run build
```

### Database ошибки:
```bash
# Проверьте подключение
npx prisma db push

# Пересоздайте клиент
npx prisma generate
```

### Runtime ошибки:
- Проверьте логи: `pm2 logs`
- Проверьте env переменные: убедитесь что все required переменные заданы
- Проверьте порты: убедитесь что порт 3000 доступен

## 📞 Поддержка

- **Email**: fullstacknargiz@gmail.com
- **WhatsApp**: +996 990 105 555
- **Telegram**: @nargizfullstack

---

**🧬 EnergyMax - Восстановление микробиома для здоровой жизни**
