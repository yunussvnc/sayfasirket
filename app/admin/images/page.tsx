"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ImagesManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
      loadImages();
    }
  }, [router]);

  const loadImages = async () => {
    // Örnek görsel listesi - gerçek uygulamada API'den çekilecek
    const exampleImages = [
      "/images/background.jpg",
      "/images/puzzle.webp",
      "/images/kapak1.jpg",
      "/images/kapak 2.jpg",
      "/images/service-bc.jpg",
      "/images/about_bc.jpg",
      "/images/team_bc.jpg",
      "/images/testi_bc.jpg",
      "/images/contact-bg.jpg",
    ];
    setImages(exampleImages);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    // Upload işlemi burada yapılacak
    setTimeout(() => {
      alert("Görsel yüklendi! (Gerçek uygulamada API entegrasyonu gerekli)");
      setUploading(false);
      setSelectedFile(null);
      loadImages();
    }, 1000);
  };

  const handleDelete = (imagePath: string) => {
    if (confirm("Bu görseli silmek istediğinize emin misiniz?")) {
      setImages(images.filter((img) => img !== imagePath));
      // API çağrısı burada yapılacak
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/admin/dashboard" className="text-white/70 hover:text-white mb-4 inline-block">
            ← Dashboard'a Dön
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Görsel Yönetimi</h1>
          <p className="text-white/70">Görselleri yükle, düzenle veya sil</p>
        </div>

        {/* Upload Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Yeni Görsel Yükle</h2>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-white/90 mb-2">Dosya Seç</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
            </div>
            <button
              onClick={handleUpload}
              disabled={!selectedFile || uploading}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              {uploading ? "Yükleniyor..." : "Yükle"}
            </button>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all"
            >
              <div className="aspect-square relative bg-black/20">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/placeholder.jpg";
                  }}
                />
              </div>
              <div className="p-4">
                <p className="text-white text-sm mb-3 truncate font-mono">{image}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigator.clipboard.writeText(image)}
                    className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
                  >
                    Kopyala
                  </button>
                  <button
                    onClick={() => handleDelete(image)}
                    className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs transition-colors"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-12 text-white/70">
            <p>Henüz görsel yüklenmemiş.</p>
          </div>
        )}
      </div>
    </div>
  );
}

