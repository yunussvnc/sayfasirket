"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminDashboard() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = sessionStorage.getItem("adminAuth");
        if (auth !== "true") {
            router.push("/admin/login");
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    const handleLogout = () => {
        sessionStorage.removeItem("adminAuth");
        router.push("/admin/login");
    };

    if (!isAuthenticated) {
        return null;
    }

    const menuItems = [
        {
            title: "Sayfa Yönetimi",
            description: "Tüm sayfaları düzenle, oluştur veya sil",
            href: "/admin/pages",
            icon: "📄",
        },
        {
            title: "İçerik Yönetimi",
            description: "Sayfa içeriklerini düzenle",
            href: "/admin/content",
            icon: "✏️",
        },
        {
            title: "Hizmet Yönetimi",
            description: "Hizmetleri düzenle, ekle veya sil",
            href: "/admin/services",
            icon: "🛠️",
        },
        {
            title: "Görsel Yönetimi",
            description: "Görselleri yükle, düzenle veya sil",
            href: "/admin/images",
            icon: "🖼️",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
                        <p className="text-white/70">NeoKreatif Yönetim Paneli</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                        Çıkış Yap
                    </button>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105 cursor-pointer"
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-white/70 text-sm">{item.description}</p>
                        </Link>
                    ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                        <div className="text-2xl font-bold text-white mb-1">12+</div>
                        <div className="text-white/70">Toplam Sayfa</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                        <div className="text-2xl font-bold text-white mb-1">7</div>
                        <div className="text-white/70">Hizmet</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                        <div className="text-2xl font-bold text-white mb-1">69</div>
                        <div className="text-white/70">Görsel</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

