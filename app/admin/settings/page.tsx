"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SiteSettings {
    siteName: string;
    siteDescription: string;
    siteKeywords: string;
    contactEmail: string;
    contactPhone: string;
    address: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    footerText: string;
}

export default function SettingsManagement() {
    const router = useRouter();
    const isAuthenticated = useState(() => {
        if (typeof window !== "undefined") {
            return sessionStorage.getItem("adminAuth") === "true";
        }
        return false;
    })[0];
    const [settings, setSettings] = useState<SiteSettings>({
        siteName: "NeoKreatif Ajans",
        siteDescription: "Web tasarım, yazılım geliştirme ve dijital pazarlama hizmetleri",
        siteKeywords: "web tasarım, yazılım, dijital pazarlama, SEO",
        contactEmail: "neokreatiff@gmail.com",
        contactPhone: "+90 544 190 44 47",
        address: "19 Mayıs Mah. 19 Mayıs Cad. Golden Plaza No:3 K:9, 34363 Şişli/İstanbul",
        facebook: "",
        instagram: "",
        twitter: "",
        linkedin: "",
        footerText: "© 2024 NeoKreatif Ajans. Tüm hakları saklıdır.",
    });
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);

    const loadSettings = useCallback(async () => {
        try {
            // Gerçek uygulamada API'den çekilecek
            // const response = await fetch("/api/admin/settings");
            // const data = await response.json();
            // setSettings(data);
        } catch (error) {
            console.error("Ayarlar yüklenemedi:", error);
        }
    }, []);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/admin/login");
            return;
        }
        // Load settings when authenticated
        loadSettings();
    }, [isAuthenticated, router, loadSettings]);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSaved(false);

        try {
            // Gerçek uygulamada API'ye gönderilecek
            // await fetch("/api/admin/settings", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(settings),
            // });

            setTimeout(() => {
                setLoading(false);
                setSaved(true);
                setTimeout(() => setSaved(false), 3000);
            }, 500);
        } catch (error) {
            console.error("Hata:", error);
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/admin/dashboard" className="text-white/70 hover:text-white mb-4 inline-block">
                        ← Dashboard&apos;a Dön
                    </Link>
                    <h1 className="text-4xl font-bold text-white mb-2">Site Ayarları</h1>
                    <p className="text-white/70">Genel site ayarlarını düzenle</p>
                </div>

                <form onSubmit={handleSave} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
                    <div className="space-y-6">
                        {/* Genel Bilgiler */}
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-4">Genel Bilgiler</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">Site Adı</label>
                                    <input
                                        type="text"
                                        value={settings.siteName}
                                        onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">Site Açıklaması</label>
                                    <textarea
                                        value={settings.siteDescription}
                                        onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                                        rows={3}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">Anahtar Kelimeler</label>
                                    <input
                                        type="text"
                                        value={settings.siteKeywords}
                                        onChange={(e) => setSettings({ ...settings, siteKeywords: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="kelime1, kelime2, kelime3"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* İletişim Bilgileri */}
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-4">İletişim Bilgileri</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">E-posta</label>
                                    <input
                                        type="email"
                                        value={settings.contactEmail}
                                        onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">Telefon</label>
                                    <input
                                        type="tel"
                                        value={settings.contactPhone}
                                        onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">Adres</label>
                                    <textarea
                                        value={settings.address}
                                        onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                                        rows={2}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sosyal Medya */}
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-4">Sosyal Medya</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">Facebook</label>
                                    <input
                                        type="url"
                                        value={settings.facebook || ""}
                                        onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="https://facebook.com/..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">Instagram</label>
                                    <input
                                        type="url"
                                        value={settings.instagram || ""}
                                        onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="https://instagram.com/..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">Twitter</label>
                                    <input
                                        type="url"
                                        value={settings.twitter || ""}
                                        onChange={(e) => setSettings({ ...settings, twitter: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="https://twitter.com/..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">LinkedIn</label>
                                    <input
                                        type="url"
                                        value={settings.linkedin || ""}
                                        onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="https://linkedin.com/..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-4">Footer</h2>
                            <div>
                                <label className="block text-sm font-medium text-white/90 mb-2">Footer Metni</label>
                                <textarea
                                    value={settings.footerText}
                                    onChange={(e) => setSettings({ ...settings, footerText: e.target.value })}
                                    rows={2}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Kaydet Butonu */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
                            >
                                {loading ? "Kaydediliyor..." : "Kaydet"}
                            </button>
                            {saved && (
                                <div className="px-6 py-3 bg-green-600 text-white rounded-lg">
                                    ✓ Kaydedildi!
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

