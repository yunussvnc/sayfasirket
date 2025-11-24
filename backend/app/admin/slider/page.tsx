"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SliderItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  order: number;
  active: boolean;
}

export default function SliderManagement() {
  const router = useRouter();
  const [sliderItems, setSliderItems] = useState<SliderItem[]>([]);
  const isAuthenticated = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("adminAuth") === "true";
    }
    return false;
  })[0];
  const [editingItem, setEditingItem] = useState<SliderItem | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login");
      return;
    }
    // Load sliders when authenticated - sadece bir kez yükle
    if (sliderItems.length === 0) {
      // Örnek slider verileri - gerçek uygulamada API'den çekilecek
      const exampleSliders: SliderItem[] = [
        {
          id: "1",
          title: "NeoKreatif ile Web Tasarım, SEO ve Dijital Pazarlama&apos;da Fark Yaratın",
          description: "12 yılı aşkın deneyimle dijital çözüm ortağınız",
          image: "/images/kapak1.jpg",
          link: "/",
          order: 1,
          active: true,
        },
      ];
      // setTimeout ile async hale getir
      setTimeout(() => {
        setSliderItems(exampleSliders);
      }, 0);
    }
  }, [isAuthenticated, router, sliderItems.length]);

  const handleAdd = () => {
    const newItem: SliderItem = {
      id: Date.now().toString(),
      title: "Yeni Slider",
      description: "",
      image: "",
      order: sliderItems.length + 1,
      active: false,
    };
    setEditingItem(newItem);
  };

  const handleSave = (item: SliderItem) => {
    const existingIndex = sliderItems.findIndex((s) => s.id === item.id);
    if (existingIndex >= 0) {
      setSliderItems(sliderItems.map((s) => (s.id === item.id ? item : s)));
    } else {
      setSliderItems([...sliderItems, item]);
    }
    setEditingItem(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Bu slider&apos;ı silmek istediğinize emin misiniz?")) {
      setSliderItems(sliderItems.filter((s) => s.id !== id));
    }
  };

  const handleToggleActive = (id: string) => {
    setSliderItems(
      sliderItems.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
    );
  };

  const moveItem = (id: string, direction: "up" | "down") => {
    const items = [...sliderItems];
    const index = items.findIndex((s) => s.id === id);
    if (
      (direction === "up" && index > 0) ||
      (direction === "down" && index < items.length - 1)
    ) {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      [items[index], items[newIndex]] = [items[newIndex], items[index]];
      setSliderItems(items);
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
              ← Dashboard&apos;a Dön
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">Banner/Slider Yönetimi</h1>
            <p className="text-white/70">Ana sayfa slider&apos;larını yönet</p>
          </div>
          <button
            onClick={handleAdd}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            + Yeni Slider
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sliderItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white/10 backdrop-blur-md border rounded-xl overflow-hidden ${item.active ? "border-green-500" : "border-white/20"
                }`}
            >
              <div className="relative h-48 bg-black/20">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/50">
                    Görsel Yok
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${item.active
                      ? "bg-green-500 text-white"
                      : "bg-gray-500 text-white"
                      }`}
                  >
                    {item.active ? "Aktif" : "Pasif"}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">{item.description}</p>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleToggleActive(item.id)}
                    className={`px-3 py-1 rounded text-xs transition-colors ${item.active
                      ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                      : "bg-green-600 hover:bg-green-700 text-white"
                      }`}
                  >
                    {item.active ? "Pasifleştir" : "Aktifleştir"}
                  </button>
                  <button
                    onClick={() => moveItem(item.id, "up")}
                    className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded text-xs transition-colors"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveItem(item.id, "down")}
                    className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded text-xs transition-colors"
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs transition-colors"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sliderItems.length === 0 && (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-12 text-center text-white/70">
            Henüz slider eklenmemiş.
          </div>
        )}

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 border border-white/20 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Slider Düzenle</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave(editingItem);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Başlık</label>
                  <input
                    type="text"
                    value={editingItem.title}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, title: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Açıklama</label>
                  <textarea
                    value={editingItem.description}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, description: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Görsel URL</label>
                  <input
                    type="text"
                    value={editingItem.image}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, image: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="/images/slider.jpg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Link (Opsiyonel)</label>
                  <input
                    type="text"
                    value={editingItem.link || ""}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, link: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="/"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editingItem.active}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, active: e.target.checked })
                      }
                      className="w-5 h-5"
                    />
                    <span className="text-white">Aktif</span>
                  </label>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Kaydet
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  >
                    İptal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

