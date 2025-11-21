"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SEOData {
  pageId: string;
  pageTitle: string;
  pagePath: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export default function SEOManagement() {
  const router = useRouter();
  const [seoData, setSeoData] = useState<SEOData[]>([]);
  const [selectedPage, setSelectedPage] = useState<SEOData | null>(null);
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("adminAuth") === "true";
    }
    return false;
  })[0];

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login");
      return;
    }
    // Load SEO data when authenticated - sadece bir kez yükle
    if (seoData.length === 0) {
      // Örnek SEO verileri - gerçek uygulamada API'den çekilecek
      const exampleData: SEOData[] = [
        {
          pageId: "home",
          pageTitle: "Anasayfa",
          pagePath: "/",
          metaTitle: "NeoKreatif Ajans - Web Tasarım ve Dijital Pazarlama",
          metaDescription: "12 yıllık deneyimle web tasarım, yazılım geliştirme, SEO ve dijital pazarlama hizmetleri.",
          metaKeywords: "web tasarım, yazılım, SEO, dijital pazarlama",
          ogTitle: "NeoKreatif Ajans",
          ogDescription: "Web tasarım ve dijital pazarlama hizmetleri",
          canonical: "https://neokreatif.com",
        },
        {
          pageId: "about",
          pageTitle: "Hakkımızda",
          pagePath: "/hakkimizda",
          metaTitle: "Hakkımızda - NeoKreatif Ajans",
          metaDescription: "NeoKreatif Ajans hakkında bilgi edinin.",
          metaKeywords: "hakkımızda, neokreatif",
        },
      ];
      // setTimeout ile async hale getir
      setTimeout(() => {
        setSeoData(exampleData);
      }, 0);
    }
  }, [isAuthenticated, router, seoData.length]);

  const handleSave = async () => {
    if (!selectedPage) return;
    setLoading(true);
    // API çağrısı burada yapılacak
    setTimeout(() => {
      setLoading(false);
      alert("SEO ayarları kaydedildi!");
    }, 500);
  };

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
          <h1 className="text-4xl font-bold text-white mb-2">SEO Yönetimi</h1>
          <p className="text-white/70">Sayfa meta tag&apos;lerini ve SEO ayarlarını düzenle</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sayfa Listesi */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <h2 className="text-white font-semibold mb-4">Sayfalar</h2>
              <div className="space-y-2">
                {seoData.map((page) => (
                  <button
                    key={page.pageId}
                    onClick={() => setSelectedPage(page)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedPage?.pageId === page.pageId
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                  >
                    <div className="font-medium">{page.pageTitle}</div>
                    <div className="text-xs opacity-70 font-mono">{page.pagePath}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SEO Formu */}
          <div className="lg:col-span-2">
            {selectedPage ? (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">{selectedPage.pageTitle} - SEO Ayarları</h2>

                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Meta Başlık</label>
                    <input
                      type="text"
                      value={selectedPage.metaTitle}
                      onChange={(e) =>
                        setSelectedPage({ ...selectedPage, metaTitle: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      maxLength={60}
                    />
                    <p className="text-white/50 text-xs mt-1">{selectedPage.metaTitle.length}/60 karakter</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Meta Açıklama</label>
                    <textarea
                      value={selectedPage.metaDescription}
                      onChange={(e) =>
                        setSelectedPage({ ...selectedPage, metaDescription: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      maxLength={160}
                    />
                    <p className="text-white/50 text-xs mt-1">{selectedPage.metaDescription.length}/160 karakter</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Anahtar Kelimeler</label>
                    <input
                      type="text"
                      value={selectedPage.metaKeywords}
                      onChange={(e) =>
                        setSelectedPage({ ...selectedPage, metaKeywords: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="kelime1, kelime2, kelime3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">OG Başlık (Facebook/Twitter)</label>
                    <input
                      type="text"
                      value={selectedPage.ogTitle || ""}
                      onChange={(e) =>
                        setSelectedPage({ ...selectedPage, ogTitle: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">OG Açıklama</label>
                    <textarea
                      value={selectedPage.ogDescription || ""}
                      onChange={(e) =>
                        setSelectedPage({ ...selectedPage, ogDescription: e.target.value })
                      }
                      rows={2}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">OG Görsel URL</label>
                    <input
                      type="url"
                      value={selectedPage.ogImage || ""}
                      onChange={(e) =>
                        setSelectedPage({ ...selectedPage, ogImage: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Canonical URL</label>
                    <input
                      type="url"
                      value={selectedPage.canonical || ""}
                      onChange={(e) =>
                        setSelectedPage({ ...selectedPage, canonical: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://neokreatif.com/..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
                    >
                      {loading ? "Kaydediliyor..." : "Kaydet"}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-12 text-center">
                <p className="text-white/70">Bir sayfa seçin</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

