"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Page {
  id: string;
  title: string;
  path: string;
  type: "page" | "service";
}

export default function PagesManagement() {
  const router = useRouter();
  const [pages, setPages] = useState<Page[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
      loadPages();
    }
  }, [router]);

  const loadPages = () => {
    // Örnek sayfa listesi
    const allPages: Page[] = [
      { id: "1", title: "Anasayfa", path: "/", type: "page" },
      { id: "2", title: "Hakkımızda", path: "/hakkimizda", type: "page" },
      { id: "3", title: "Hizmetlerimiz", path: "/hizmetlerimiz", type: "page" },
      { id: "4", title: "Ekibimiz", path: "/ekibimiz", type: "page" },
      { id: "5", title: "Referanslar", path: "/referanslar", type: "page" },
      { id: "6", title: "Değerlerimiz", path: "/degerlerimiz", type: "page" },
      { id: "7", title: "İletişim", path: "/iletisim", type: "page" },
      { id: "8", title: "Bize Ulaşın", path: "/bize-ulasin", type: "page" },
      { id: "9", title: "UX/UI Tasarımı", path: "/services/ux-ui-tasarimi", type: "service" },
      { id: "10", title: "Marka Kimliği", path: "/services/marka-kimligi", type: "service" },
      { id: "11", title: "Web Geliştirme", path: "/services/web-gelistirme", type: "service" },
      { id: "12", title: "Dijital Strateji", path: "/services/dijital-strateji", type: "service" },
      { id: "13", title: "Sistem ve Yazılım", path: "/services/sistem-ve-yazilim", type: "service" },
      { id: "14", title: "Pazarlama Stratejisi", path: "/services/marketing-strategy", type: "service" },
      { id: "15", title: "İleri Düzey Analitik", path: "/services/ileri-duzey-analitik", type: "service" },
    ];
    setPages(allPages);
  };

  const handleDelete = (id: string) => {
    if (confirm("Bu sayfayı silmek istediğinize emin misiniz?")) {
      setPages(pages.filter((page) => page.id !== id));
      // API çağrısı burada yapılacak
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/admin/dashboard" className="text-white/70 hover:text-white mb-4 inline-block">
              ← Dashboard'a Dön
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">Sayfa Yönetimi</h1>
            <p className="text-white/70">Tüm sayfaları görüntüle, düzenle veya sil</p>
          </div>
          <Link
            href="/admin/pages/create"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            + Yeni Sayfa
          </Link>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold">Başlık</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Yol</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Tip</th>
                <th className="px-6 py-4 text-left text-white font-semibold">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id} className="border-t border-white/10 hover:bg-white/5">
                  <td className="px-6 py-4 text-white">{page.title}</td>
                  <td className="px-6 py-4 text-white/70 font-mono text-sm">{page.path}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      page.type === "page" 
                        ? "bg-blue-500/20 text-blue-300" 
                        : "bg-purple-500/20 text-purple-300"
                    }`}>
                      {page.type === "page" ? "Sayfa" : "Hizmet"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/pages/edit/${page.id}`}
                        className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                      >
                        Düzenle
                      </Link>
                      <Link
                        href={page.path}
                        target="_blank"
                        className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
                      >
                        Görüntüle
                      </Link>
                      <button
                        onClick={() => handleDelete(page.id)}
                        className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors"
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

