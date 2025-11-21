"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Message {
    id: string;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    date: string;
    read: boolean;
}

export default function MessagesManagement() {
    const router = useRouter();
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const isAuthenticated = useState(() => {
        if (typeof window !== "undefined") {
            return sessionStorage.getItem("adminAuth") === "true";
        }
        return false;
    })[0];

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/admin/login");
        } else {
            loadMessages();
        }
    }, [isAuthenticated, router]);

    const loadMessages = async () => {
        // Örnek mesajlar - gerçek uygulamada API'den çekilecek
        const exampleMessages: Message[] = [
            {
                id: "1",
                name: "Ahmet Yılmaz",
                email: "ahmet@example.com",
                phone: "+90 555 123 4567",
                subject: "Web Tasarım Hizmeti",
                message: "Merhaba, web sitemiz için profesyonel bir tasarım hizmeti almak istiyoruz.",
                date: new Date().toISOString(),
                read: false,
            },
            {
                id: "2",
                name: "Ayşe Demir",
                email: "ayse@example.com",
                subject: "SEO Danışmanlığı",
                message: "Web sitemiz için SEO danışmanlığı hizmetiniz hakkında bilgi almak istiyorum.",
                date: new Date(Date.now() - 86400000).toISOString(),
                read: true,
            },
        ];
        setMessages(exampleMessages);
    };

    const handleDelete = (id: string) => {
        if (confirm("Bu mesajı silmek istediğinize emin misiniz?")) {
            setMessages(messages.filter((msg) => msg.id !== id));
            if (selectedMessage?.id === id) {
                setSelectedMessage(null);
            }
        }
    };

    const handleMarkAsRead = (id: string) => {
        setMessages(
            messages.map((msg) => (msg.id === id ? { ...msg, read: true } : msg))
        );
    };

    const unreadCount = messages.filter((msg) => !msg.read).length;

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link href="/admin/dashboard" className="text-white/70 hover:text-white mb-4 inline-block">
                        ← Dashboard&apos;a Dön
                    </Link>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2">İletişim Mesajları</h1>
                            <p className="text-white/70">
                                {unreadCount > 0 && (
                                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm mr-2">
                                        {unreadCount} Okunmamış
                                    </span>
                                )}
                                Toplam {messages.length} mesaj
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Mesaj Listesi */}
                    <div className="lg:col-span-1 space-y-3">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                onClick={() => {
                                    setSelectedMessage(message);
                                    handleMarkAsRead(message.id);
                                }}
                                className={`bg-white/10 backdrop-blur-md border rounded-xl p-4 cursor-pointer hover:bg-white/20 transition-all ${selectedMessage?.id === message.id
                                        ? "border-blue-500 bg-white/20"
                                        : message.read
                                            ? "border-white/20"
                                            : "border-blue-400 bg-blue-500/20"
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1">
                                        <h3 className="text-white font-semibold mb-1">{message.name}</h3>
                                        <p className="text-white/70 text-sm truncate">{message.subject}</p>
                                    </div>
                                    {!message.read && (
                                        <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
                                    )}
                                </div>
                                <p className="text-white/60 text-xs mb-2">
                                    {new Date(message.date).toLocaleDateString("tr-TR")}
                                </p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(message.id);
                                    }}
                                    className="text-red-400 hover:text-red-300 text-xs"
                                >
                                    Sil
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Mesaj Detayı */}
                    <div className="lg:col-span-2">
                        {selectedMessage ? (
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                                <div className="mb-6">
                                    <button
                                        onClick={() => setSelectedMessage(null)}
                                        className="text-white/70 hover:text-white mb-4"
                                    >
                                        ← Geri
                                    </button>
                                    <h2 className="text-2xl font-bold text-white mb-4">{selectedMessage.subject}</h2>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="text-white/70 text-sm">Gönderen</label>
                                        <p className="text-white font-semibold">{selectedMessage.name}</p>
                                    </div>
                                    <div>
                                        <label className="text-white/70 text-sm">E-posta</label>
                                        <p className="text-white">
                                            <a
                                                href={`mailto:${selectedMessage.email}`}
                                                className="text-blue-400 hover:text-blue-300"
                                            >
                                                {selectedMessage.email}
                                            </a>
                                        </p>
                                    </div>
                                    {selectedMessage.phone && (
                                        <div>
                                            <label className="text-white/70 text-sm">Telefon</label>
                                            <p className="text-white">
                                                <a
                                                    href={`tel:${selectedMessage.phone}`}
                                                    className="text-blue-400 hover:text-blue-300"
                                                >
                                                    {selectedMessage.phone}
                                                </a>
                                            </p>
                                        </div>
                                    )}
                                    <div>
                                        <label className="text-white/70 text-sm">Tarih</label>
                                        <p className="text-white">
                                            {new Date(selectedMessage.date).toLocaleString("tr-TR")}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-white/70 text-sm">Mesaj</label>
                                        <div className="bg-white/10 border border-white/20 rounded-lg p-4 mt-2">
                                            <p className="text-white whitespace-pre-wrap">{selectedMessage.message}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 pt-4">
                                        <a
                                            href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                        >
                                            Yanıtla
                                        </a>
                                        <button
                                            onClick={() => handleDelete(selectedMessage.id)}
                                            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                                        >
                                            Sil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-12 text-center">
                                <p className="text-white/70">Bir mesaj seçin</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

