"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ContentManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pages, setPages] = useState<any[]>([]);

  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
      loadPages();
    }
  }, [router]);

  const loadPages = async () => {
    try {
      const response = await fetch("/api/admin/content");
      const data = await response.json();
      setPages(Object.keys(data).map((key) => ({ id: key, ...data[key] })));
    } catch (error) {
      console.error("Sayfalar yüklenemedi:", error);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  const availablePages = [
    { id: "home", title: "Anasayfa", path: "/" },
    { id: "about", title: "Hakkımızda", path: "/hakkimizda" },
    { id: "services", title: "Hizmetlerimiz", path: "/hizmetlerimiz" },
    { id: "team", title: "Ekibimiz", path: "/ekibimiz" },
    { id: "references", title: "Referanslar", path: "/referanslar" },
    { id: "values", title: "Değerlerimiz", path: "/degerlerimiz" },
    { id: "contact", title: "İletişim", path: "/iletisim" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/admin/dashboard" className="text-white/70 hover:text-white mb-4 inline-block">
            ← Dashboard'a Dön
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">İçerik Yönetimi</h1>
          <p className="text-white/70">Sayfa içeriklerini düzenle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availablePages.map((page) => (
            <Link
              key={page.id}
              href={`/admin/content/edit/${page.id}`}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{page.title}</h3>
              <p className="text-white/70 text-sm mb-4">İçeriği düzenle</p>
              <div className="text-blue-400 text-sm">Düzenle →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

