"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ImageItem {
  id: string;
  url: string;
  name: string;
  category: string;
  size: number;
  uploadedAt: string;
}

export default function ImagesManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("adminAuth") === "true";
    }
    return false;
  });
  const [images, setImages] = useState<ImageItem[]>([]);
  const [filteredImages, setFilteredImages] = useState<ImageItem[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories] = useState<string[]>(["all", "slider", "service", "team", "background", "icon"]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login");
    } else {
      loadImages();
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    filterImages();
  }, [searchTerm, selectedCategory, images]);

  const loadImages = async () => {
    // Örnek görsel listesi - gerçek uygulamada API'den çekilecek
    const exampleImages: ImageItem[] = [
      {
        id: "1",
        url: "/images/background.jpg",
        name: "background.jpg",
        category: "background",
        size: 1024 * 512,
        uploadedAt: new Date().toISOString(),
      },
      {
        id: "2",
        url: "/images/puzzle.webp",
        name: "puzzle.webp",
        category: "background",
        size: 1024 * 256,
        uploadedAt: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: "3",
        url: "/images/kapak1.jpg",
        name: "kapak1.jpg",
        category: "slider",
        size: 1024 * 768,
        uploadedAt: new Date(Date.now() - 172800000).toISOString(),
      },
      {
        id: "4",
        url: "/images/service-bc.jpg",
        name: "service-bc.jpg",
        category: "background",
        size: 1024 * 512,
        uploadedAt: new Date(Date.now() - 259200000).toISOString(),
      },
      {
        id: "5",
        url: "/images/uxui-1.svg",
        name: "uxui-1.svg",
        category: "icon",
        size: 1024,
        uploadedAt: new Date(Date.now() - 345600000).toISOString(),
      },
    ];
    setImages(exampleImages);
  };

  const filterImages = () => {
    let filtered = images;

    // Kategori filtresi
    if (selectedCategory !== "all") {
      filtered = filtered.filter((img) => img.category === selectedCategory);
    }

    // Arama filtresi
    if (searchTerm) {
      filtered = filtered.filter(
        (img) =>
          img.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          img.url.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredImages(filtered);
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

  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleDelete = (imageId: string) => {
    if (confirm("Bu görseli silmek istediğinize emin misiniz?")) {
      setImages(images.filter((img) => img.id !== imageId));
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    }
  };

  const handleSelectImage = (imageId: string) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedImages.length === filteredImages.length) {
      setSelectedImages([]);
    } else {
      setSelectedImages(filteredImages.map((img) => img.id));
    }
  };

  const handleBulkDelete = () => {
    if (selectedImages.length === 0) return;
    if (confirm(`${selectedImages.length} görseli silmek istediğinize emin misiniz?`)) {
      setImages(images.filter((img) => !selectedImages.includes(img.id)));
      setSelectedImages([]);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
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
          <h1 className="text-4xl font-bold text-white mb-2">Görsel Yönetimi</h1>
          <p className="text-white/70">Görselleri yükle, düzenle veya sil</p>
        </div>

        {/* Upload Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-6">
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

        {/* Filters and Bulk Actions */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 flex-1 w-full md:w-auto">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Görsel ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-gray-800">
                    {cat === "all" ? "Tüm Kategoriler" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              {selectedImages.length > 0 && (
                <>
                  <button
                    onClick={handleBulkDelete}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm"
                  >
                    Seçilenleri Sil ({selectedImages.length})
                  </button>
                  <button
                    onClick={() => setSelectedImages([])}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm"
                  >
                    Seçimi Temizle
                  </button>
                </>
              )}
              <button
                onClick={handleSelectAll}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
              >
                {selectedImages.length === filteredImages.length && filteredImages.length > 0
                  ? "Tümünü Kaldır"
                  : "Tümünü Seç"}
              </button>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`bg-white/10 backdrop-blur-md border rounded-xl overflow-hidden hover:bg-white/20 transition-all cursor-pointer ${
                selectedImages.includes(image.id)
                  ? "border-blue-500 ring-2 ring-blue-500"
                  : "border-white/20"
              }`}
              onClick={() => handleSelectImage(image.id)}
            >
              <div className="aspect-square relative bg-black/20">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/placeholder.jpg";
                  }}
                />
                <div className="absolute top-2 left-2">
                  <input
                    type="checkbox"
                    checked={selectedImages.includes(image.id)}
                    onChange={() => handleSelectImage(image.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-5 h-5"
                  />
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 bg-black/50 text-white text-xs rounded">
                    {image.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white text-sm mb-1 truncate font-medium">{image.name}</p>
                <p className="text-white/50 text-xs mb-3 font-mono truncate">{image.url}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/60 text-xs">{formatFileSize(image.size)}</span>
                  <span className="text-white/60 text-xs">
                    {new Date(image.uploadedAt).toLocaleDateString("tr-TR")}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard.writeText(image.url);
                    }}
                    className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
                  >
                    Kopyala
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(image.id);
                    }}
                    className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs transition-colors"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-white/70">
            <p>
              {searchTerm || selectedCategory !== "all"
                ? "Arama kriterlerinize uygun görsel bulunamadı."
                : "Henüz görsel yüklenmemiş."}
            </p>
          </div>
        )}

        <div className="mt-4 text-center text-white/60 text-sm">
          {filteredImages.length > 0 && (
            <p>
              {filteredImages.length} görsel gösteriliyor
              {(searchTerm || selectedCategory !== "all") && ` (Toplam ${images.length})`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

