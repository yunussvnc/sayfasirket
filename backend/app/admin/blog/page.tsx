"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    image?: string;
    published: boolean;
}

export default function BlogManagement() {
    const router = useRouter();
    const [posts, setPosts] = useState<BlogPost[]>([]);
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
        // Load posts when authenticated - sadece bir kez yükle
        if (posts.length === 0) {
            // Örnek blog yazıları - gerçek uygulamada API'den çekilecek
            const examplePosts: BlogPost[] = [
                {
                    id: "1",
                    title: "Web Tasarımında 2024 Trendleri",
                    slug: "web-tasariminda-2024-trendleri",
                    excerpt: "2024 yılında web tasarımında dikkat çeken trendler ve örnekleri.",
                    content: "...",
                    author: "NeoKreatif Ekibi",
                    date: new Date().toISOString(),
                    category: "Web Tasarım",
                    published: true,
                },
            ];
            // setTimeout ile async hale getir
            setTimeout(() => {
                setPosts(examplePosts);
            }, 0);
        }
    }, [isAuthenticated, router, posts.length]);

    const handleDelete = (id: string) => {
        if (confirm("Bu blog yazısını silmek istediğinize emin misiniz?")) {
            setPosts(posts.filter((post) => post.id !== id));
        }
    };

    const handleTogglePublish = (id: string) => {
        setPosts(
            posts.map((post) =>
                post.id === id ? { ...post, published: !post.published } : post
            )
        );
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
                        <h1 className="text-4xl font-bold text-white mb-2">Blog/Haber Yönetimi</h1>
                        <p className="text-white/70">Blog yazılarını düzenle, ekle veya sil</p>
                    </div>
                    <Link
                        href="/admin/blog/create"
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        + Yeni Blog Yazısı
                    </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-white/10">
                            <tr>
                                <th className="px-6 py-4 text-left text-white font-semibold">Başlık</th>
                                <th className="px-6 py-4 text-left text-white font-semibold">Kategori</th>
                                <th className="px-6 py-4 text-left text-white font-semibold">Yazar</th>
                                <th className="px-6 py-4 text-left text-white font-semibold">Tarih</th>
                                <th className="px-6 py-4 text-left text-white font-semibold">Durum</th>
                                <th className="px-6 py-4 text-left text-white font-semibold">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id} className="border-t border-white/10 hover:bg-white/5">
                                    <td className="px-6 py-4 text-white">{post.title}</td>
                                    <td className="px-6 py-4 text-white/70">{post.category}</td>
                                    <td className="px-6 py-4 text-white/70">{post.author}</td>
                                    <td className="px-6 py-4 text-white/70 text-sm">
                                        {new Date(post.date).toLocaleDateString("tr-TR")}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs ${post.published
                                                ? "bg-green-500/20 text-green-300"
                                                : "bg-gray-500/20 text-gray-300"
                                                }`}
                                        >
                                            {post.published ? "Yayında" : "Taslak"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <Link
                                                href={`/admin/blog/edit/${post.id}`}
                                                className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                                            >
                                                Düzenle
                                            </Link>
                                            <button
                                                onClick={() => handleTogglePublish(post.id)}
                                                className={`px-4 py-1 rounded text-sm transition-colors ${post.published
                                                    ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                                                    : "bg-green-600 hover:bg-green-700 text-white"
                                                    }`}
                                            >
                                                {post.published ? "Yayından Kaldır" : "Yayınla"}
                                            </button>
                                            <button
                                                onClick={() => handleDelete(post.id)}
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
                    {posts.length === 0 && (
                        <div className="p-12 text-center text-white/70">
                            Henüz blog yazısı eklenmemiş.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

