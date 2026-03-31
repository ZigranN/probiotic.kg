import Link from 'next/link';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4F7F5] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-[#F4F7F5] rounded-full flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8 text-[#21AA57]" />
        </div>

        <h1 className="text-6xl font-bold text-[#29380E] mb-4">404</h1>

        <h2 className="text-2xl font-bold text-[#29380E] mb-2">
          Страница не найдена
        </h2>

        <p className="text-gray-600 mb-8">
          Запрашиваемая страница не существует или была перемещена.
        </p>

        <div className="flex gap-3">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#21AA57] text-white rounded-full font-medium hover:bg-[#1a8a46] transition"
          >
            <Home className="w-5 h-5" />
            На главную
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#F4F7F5] text-[#29380E] rounded-full font-medium hover:bg-gray-200 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад
          </button>
        </div>
      </div>
    </div>
  );
}
