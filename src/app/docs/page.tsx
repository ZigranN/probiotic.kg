import { FileText, Download } from "lucide-react";

export default function DocsPage() {
    const documents = [
        {
            title: "Сертификат соответствия",
            description: "Сертификат качества продукции EnergyMax",
            file: "/documents/certificate.pdf",
            size: "1.2 MB",
        },
        {
            title: "Декларация о составе",
            description: "Полный состав пробиотика Максилин",
            file: "/documents/declaration.pdf",
            size: "850 KB",
        },
        {
            title: "Инструкция по применению",
            description: "Подробная инструкция по использованию продукции",
            file: "/documents/instruction.pdf",
            size: "2.1 MB",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F4F7F5]">
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#29380E] mb-4">
                        Документы
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Сертификаты, декларации и другие документы о качестве нашей продукции
                    </p>
                </div>

                {/* Список документов */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {documents.map((doc, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 hover:shadow-lg transition"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-[#F4F7F5] rounded-lg">
                                    <FileText className="w-6 h-6 text-[#21AA57]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-[#29380E] mb-1">
                                        {doc.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{doc.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <span className="text-sm text-gray-500">{doc.size}</span>
                                <a
                                    href={doc.file}
                                    download
                                    className="flex items-center gap-2 px-4 py-2 bg-[#21AA57] text-white rounded-full text-sm font-medium hover:bg-[#1a8a46] transition"
                                >
                                    <Download className="w-4 h-4" />
                                    Скачать
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Информационный блок */}
                <div className="bg-white rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-[#29380E] mb-4">
                        О наших документах
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-4">
                            Вся продукция EnergyMax проходит строгий контроль качества и имеет необходимые
                            сертификаты соответствия. Мы гарантируем безопасность и эффективность наших
                            пробиотиков.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Каждая партия продукции проверяется в аккредитованных лабораториях и соответствует
                            международным стандартам качества GMP (Good Manufacturing Practice).
                        </p>
                        <p className="text-gray-600">
                            Если у вас есть вопросы о документах или вам нужны дополнительные сертификаты,
                            свяжитесь с нами через WhatsApp или форму обратной связи на сайте.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
