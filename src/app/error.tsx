'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Логирование ошибки в консоль (можно отправлять в Sentry)
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F4F7F5] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>

        <h1 className="text-2xl font-bold text-[#29380E] mb-2">
          Что-то пошло не так
        </h1>

        <p className="text-gray-600 mb-6">
          Произошла ошибка при загрузке страницы. Попробуйте обновить страницу или вернуться на главную.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg text-left overflow-auto max-h-32">
            <code className="text-xs text-red-600">{error.message}</code>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={reset}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#21AA57] text-white rounded-full font-medium hover:bg-[#1a8a46] transition"
          >
            <RefreshCw className="w-5 h-5" />
            Попробовать снова
          </button>

          <a
            href="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#F4F7F5] text-[#29380E] rounded-full font-medium hover:bg-gray-200 transition"
          >
            <Home className="w-5 h-5" />
            На главную
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Если проблема повторяется, свяжитесь с поддержкой через WhatsApp
        </p>
      </div>
    </div>
  );
}
