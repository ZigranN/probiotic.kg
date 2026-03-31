// Environment variables validation
// Проверяем критичные переменные при старте приложения

const requiredEnvVars = [
  'DATABASE_URL',
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL',
] as const;

const optionalEnvVars = [
  'DIRECT_URL',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASSWORD',
  'NEXT_PUBLIC_GA_MEASUREMENT_ID',
  'NEXT_PUBLIC_FB_PIXEL_ID',
  'NEXT_PUBLIC_RECAPTCHA_SITE_KEY',
  'RECAPTCHA_SECRET_KEY',
  'OPENAI_API_KEY',
] as const;

export function validateEnv() {
  const missing: string[] = [];

  for (const key of requiredEnvVars) {
    if (!process.env[key]) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `❌ Missing required environment variables:\n${missing.map(k => `  - ${k}`).join('\n')}\n\nPlease check your .env file.`
    );
  }

  // Warnings для опциональных переменных
  const missingOptional: string[] = [];
  for (const key of optionalEnvVars) {
    if (!process.env[key]) {
      missingOptional.push(key);
    }
  }

  if (missingOptional.length > 0 && process.env.NODE_ENV === 'development') {
    console.warn(
      `⚠️  Optional environment variables not set:\n${missingOptional.map(k => `  - ${k}`).join('\n')}`
    );
  }

  console.log('✅ Environment variables validated successfully');
}

// Вызываем валидацию только на сервере
if (typeof window === 'undefined') {
  validateEnv();
}
