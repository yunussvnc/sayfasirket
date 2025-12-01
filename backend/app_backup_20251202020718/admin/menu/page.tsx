"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface MenuItem {
  id: string;
  label: string;
  href: string;
  order: number;
  parentId?: string;
  children?: MenuItem[];
}

export default function MenuManagement() {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const isAuthenticated = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("adminAuth") === "true";
    }
    return false;
  })[0];
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login");
      return;
    }
    // Load menu when authenticated - sadece bir kez yükle
    if (menuItems.length === 0) {
      // Örnek menü yapısı - gerçek uygulamada API'den çekilecek
      const exampleMenu: MenuItem[] = [
        { id: "1", label: "Anasayfa", href: "/", order: 1 },
        { id: "2", label: "Kurumsal", href: "#", order: 2 },
        { id: "3", label: "Ekibimiz", href: "/ekibimiz", order: 3, parentId: "2" },
        { id: "4", label: "Hakkımızda", href: "/hakkimizda", order: 4, parentId: "2" },
        { id: "5", label: "Değerlerimiz", href: "/degerlerimiz", order: 5, parentId: "2" },
        { id: "6", label: "Hizmetlerimiz", href: "/hizmetlerimiz", order: 6 },
        { id: "7", label: "Referanslar", href: "/referanslar", order: 7 },
        { id: "8", label: "İletişim", href: "/iletisim", order: 8 },
      ];
      // setTimeout ile async hale getir
      setTimeout(() => {
        setMenuItems(exampleMenu);
      }, 0);
    }
  }, [isAuthenticated, router, menuItems.length]);

  const handleAdd = () => {
    const newItem: MenuItem = {
      id: Date.now().toString(),
      label: "Yeni Menü",
      href: "#",
      order: menuItems.length + 1,
    };
    setEditingItem(newItem);
  };

  const handleSave = (item: MenuItem) => {
    const existingIndex = menuItems.findIndex((m) => m.id === item.id);
    if (existingIndex >= 0) {
      setMenuItems(menuItems.map((m) => (m.id === item.id ? item : m)));
    } else {
      setMenuItems([...menuItems, item]);
    }
    setEditingItem(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Bu menü öğesini silmek istediğinize emin misiniz?")) {
      setMenuItems(menuItems.filter((m) => m.id !== id && m.parentId !== id));
    }
  };

  const mainMenuItems = menuItems.filter((item) => !item.parentId);
  const getChildren = (parentId: string) =>
    menuItems.filter((item) => item.parentId === parentId);

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
            <h1 className="text-4xl font-bold text-white mb-2">Menü Yönetimi</h1>
            <p className="text-white/70">Header menüsünü düzenle</p>
          </div>
          <button
            onClick={handleAdd}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            + Yeni Menü Öğesi
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">Menü Öğeleri</h2>
          <div className="space-y-2">
            {mainMenuItems.map((item) => {
              const children = getChildren(item.id);
              return (
                <div key={item.id}>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-4 mb-2">
                    <div className="flex items-center gap-4">
                      <span className="text-white/50 text-sm">{item.order}</span>
                      <div>
                        <div className="text-white font-medium">{item.label}</div>
                        <div className="text-white/50 text-sm font-mono">{item.href}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingItem(item)}
                        className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                  {children.length > 0 && (
                    <div className="ml-8 space-y-2">
                      {children.map((child) => (
                        <div
                          key={child.id}
                          className="flex items-center justify-between bg-white/5 rounded-lg p-3"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-white/50 text-sm">{child.order}</span>
                            <div>
                              <div className="text-white/90 text-sm">{child.label}</div>
                              <div className="text-white/40 text-xs font-mono">{child.href}</div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setEditingItem(child)}
                              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs"
                            >
                              Düzenle
                            </button>
                            <button
                              onClick={() => handleDelete(child.id)}
                              className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs"
                            >
                              Sil
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 border border-white/20 rounded-xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold text-white mb-6">Menü Öğesi Düzenle</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave(editingItem);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Etiket</label>
                  <input
                    type="text"
                    value={editingItem.label}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, label: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">URL</label>
                  <input
                    type="text"
                    value={editingItem.href}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, href: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Sıra</label>
                  <input
                    type="number"
                    value={editingItem.order}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, order: parseInt(e.target.value) })
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
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

