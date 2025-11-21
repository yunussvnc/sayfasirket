"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function EditContent() {
  const router = useRouter();
  const params = useParams();
  const pageId = params.id as string;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [content, setContent] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
      loadContent();
    }
  }, [router, pageId]);

  const loadContent = async () => {
    try {
      const response = await fetch("/api/admin/content");
      const data = await response.json();
      setContent(data[pageId] || {});
    } catch (error) {
      console.error("İçerik yüklenemedi:", error);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageId,
          content,
        }),
      });

      if (response.ok) {
        alert("İçerik başarıyla kaydedildi!");
        router.push("/admin/content");
      } else {
        alert("İçerik kaydedilemedi!");
      }
    } catch (error) {
      console.error("Hata:", error);
      alert("Bir hata oluştu!");
    } finally {
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
          <Link href="/admin/content" className="text-white/70 hover:text-white mb-4 inline-block">
            ← İçerik Yönetimine Dön
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">İçerik Düzenle</h1>
          <p className="text-white/70">Sayfa ID: {pageId}</p>
        </div>

        <form onSubmit={handleSave} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Başlık</label>
              <input
                type="text"
                value={content.title || ""}
                onChange={(e) => setContent({ ...content, title: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Sayfa başlığı"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Açıklama</label>
              <textarea
                value={content.description || ""}
                onChange={(e) => setContent({ ...content, description: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Sayfa açıklaması"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">İçerik</label>
              <textarea
                value={content.body || ""}
                onChange={(e) => setContent({ ...content, body: e.target.value })}
                rows={10}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                placeholder="Sayfa içeriği (HTML veya metin)"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? "Kaydediliyor..." : "Kaydet"}
              </button>
              <Link
                href="/admin/content"
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                İptal
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

