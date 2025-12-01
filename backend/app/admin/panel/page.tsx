"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminResource, ResourceField, RESOURCE_CONFIG } from "@/lib/resource-config";
import { callAdminApi, clearAdminSession, readSessionFromStorage, type RequestBody } from "../_lib/call-admin-api";

export default function AdminControlPanel() {
    const router = useRouter();
    const [session, setSession] = useState(() => readSessionFromStorage());
    const [activeResource, setActiveResource] = useState<AdminResource | null>(null);
    const [records, setRecords] = useState<Record<string, unknown>[]>([]);
    const [stats, setStats] = useState<Record<string, number>>({});
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formState, setFormState] = useState<Record<string, unknown>>({});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!session) {
            router.replace("/admin/login");
        }
    }, [session, router]);

    const config = useMemo(() => activeResource ? RESOURCE_CONFIG[activeResource] : null, [activeResource]);

    const fetchResource = useCallback(
        async (resource: AdminResource, extra?: RequestBody) => {
            if (!session) return;
            setLoading(true);
            setError("");

            try {
                const response = await callAdminApi<{ data: unknown[]; stats: Record<string, number> }>(
                    resource,
                    "GET",
                    extra
                );
                setRecords((response.data ?? []) as Record<string, unknown>[]);
                setStats(response.stats ?? {});
            } catch (err) {
                setError(err instanceof Error ? err.message : "Veriler yüklenemedi");
            } finally {
                setLoading(false);
            }
        },
        [session]
    );

    useEffect(() => {
        if (activeResource) {
            fetchResource(activeResource);
        }
    }, [activeResource, fetchResource]);

    const handleSearch = async () => {
        if (activeResource) {
            await fetchResource(activeResource, searchTerm ? { search: searchTerm } : undefined);
        }
    };

    const handleCreate = () => {
        setFormState({});
        setIsModalOpen(true);
    };

    const handleEdit = (record: Record<string, unknown>) => {
        setFormState(record);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!activeResource) return;
        if (!confirm("Bu kaydı silmek istediğinize emin misiniz?")) return;
        try {
            await callAdminApi(activeResource, "DELETE", { id });
            await fetchResource(activeResource);
        } catch (err) {
            alert(err instanceof Error ? err.message : "Silme işlemi başarısız");
        }
    };

    const handleSave = async () => {
        if (!activeResource) return;
        setSaving(true);
        try {
            const method = formState.id ? "PATCH" : "POST";
            await callAdminApi(activeResource, method, formState as RequestBody);
            setIsModalOpen(false);
            setFormState({});
            await fetchResource(activeResource);
        } catch (err) {
            alert(err instanceof Error ? err.message : "Kayıt başarısız");
        } finally {
            setSaving(false);
        }
    };

    const handleToggleActive = async (id: string, current: boolean) => {
        if (!activeResource) return;
        try {
            await callAdminApi(activeResource, "PATCH", { id, active: !current });
            await fetchResource(activeResource);
        } catch (err) {
            alert(err instanceof Error ? err.message : "Durum güncellenemedi");
        }
    };

    const handleChangeOrder = async (id: string, order: number) => {
        if (!activeResource) return;
        try {
            await callAdminApi(activeResource, "PATCH", { id, order });
            await fetchResource(activeResource);
        } catch (err) {
            alert(err instanceof Error ? err.message : "Sıra güncellenemedi");
        }
    };

    const handleLogout = () => {
        clearAdminSession();
        setSession(null);
        router.replace("/admin/login");
    };

    if (session && session.user?.role !== "admin") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Yetki Hatası</h1>
                    <p className="text-gray-600 mb-6">Bu panele sadece admin rolü erişebilir.</p>
                    <button
                        onClick={handleLogout}
                        className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                        Çıkış Yap
                    </button>
                </div>
            </div>
        );
    }

    // Dashboard view (no active resource selected)
    if (!activeResource) {
        return (
            <div className="min-h-screen bg-gray-100">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">NeoKreatif Admin</h1>
                                    <p className="text-xs text-gray-500">Yönetim Paneli</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                                    <span className="text-sm text-gray-600">Hoş geldin,</span>
                                    <span className="text-sm font-medium text-gray-900">{session?.user?.username}</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    Çıkış Yap
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Yönetim Paneli!</h2>
                        <p className="text-gray-600 mt-2">İçeriklerinizi buradan yönetebilirsiniz</p>
                    </div>

                    {/* Stats Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                            <p className="text-sm text-gray-600 mb-1">Toplam</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.total ?? 0}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                            <p className="text-sm text-gray-600 mb-1">Yayınlanan</p>
                            <p className="text-2xl font-bold text-green-600">{stats.published ?? 0}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                            <p className="text-sm text-gray-600 mb-1">Taslak</p>
                            <p className="text-2xl font-bold text-yellow-600">{stats.draft ?? 0}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(RESOURCE_CONFIG).map(([key, cfg]) => {
                            const colors = [
                                { bg: "bg-orange-100", icon: "bg-orange-500", text: "text-orange-700" },
                                { bg: "bg-pink-100", icon: "bg-pink-500", text: "text-pink-700" },
                                { bg: "bg-green-100", icon: "bg-green-500", text: "text-green-700" },
                                { bg: "bg-blue-100", icon: "bg-blue-500", text: "text-blue-700" },
                                { bg: "bg-purple-100", icon: "bg-purple-500", text: "text-purple-700" },
                                { bg: "bg-yellow-100", icon: "bg-yellow-500", text: "text-yellow-700" },
                            ];
                            const colorIndex = Object.keys(RESOURCE_CONFIG).indexOf(key) % colors.length;
                            const color = colors[colorIndex];

                            return (
                                <div
                                    key={key}
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => setActiveResource(key as AdminResource)}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`${color.icon} p-3 rounded-lg`}>
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${color.bg} ${color.text} mb-3`}>
                                        {cfg.label}
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">{cfg.description}</p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveResource(key as AdminResource);
                                        }}
                                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        Düzenle
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </div>
        );
    }

    // Resource management view (active resource selected)
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 bg-white text-gray-900 min-h-screen border-r border-gray-200">
                    <div className="p-4 border-b border-gray-100">
                        <h2 className="text-lg font-semibold">Admin Paneli</h2>
                        <p className="text-xs text-gray-500">NeoKreatif</p>
                    </div>
                    <nav className="p-3">
                        <ul className="space-y-1">
                            <li>
                                <button onClick={() => setActiveResource(null)} className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                    Dashboard
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveResource('products' as AdminResource)} className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3">
                                    Ürünler
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveResource('pages' as AdminResource)} className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3">
                                    Sayfalar
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveResource('settings' as AdminResource)} className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3">
                                    Ayarlar
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <div className="flex-1">
                    {/* Header */}
                    <header className="bg-white border-b border-gray-200 shadow-sm">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setActiveResource(null)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                    </button>
                                    <div>
                                        <h1 className="text-xl font-bold text-gray-900">{config?.label}</h1>
                                        <p className="text-xs text-gray-500">{config?.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                                        <span className="text-sm text-gray-600">Hoş geldin,</span>
                                        <span className="text-sm font-medium text-gray-900">{session?.user?.username}</span>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        Çıkış Yap
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            {/* Header */}
                            <div className="px-6 py-5 border-b border-gray-200">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{config?.label}</h2>
                                        <p className="text-sm text-gray-500 mt-1">{config?.description}</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                                placeholder="Ara..."
                                                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                            <svg
                                                className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                        </div>
                                        <button
                                            onClick={handleCreate}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                            Yeni Ekle
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Foto</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Üst Başlık</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Başlık</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">İçerik</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Aktif</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Sıra</th>
                                            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Güncelle</th>
                                            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Sil</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {loading ? (
                                            <tr>
                                                <td colSpan={8} className="px-6 py-12 text-center">
                                                    <div className="flex flex-col items-center gap-3">
                                                        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                                        <p className="text-sm text-gray-500">Yükleniyor...</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : records.length === 0 ? (
                                            <tr>
                                                <td colSpan={8} className="px-6 py-12 text-center">
                                                    <div className="flex flex-col items-center gap-3">
                                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                                                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-gray-900">Kayıt bulunamadı</p>
                                                            <p className="text-sm text-gray-500 mt-1">Yeni bir kayıt oluşturmak için yukarıdaki butona tıklayın</p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            records.map((record) => (
                                                <tr key={String(record.id)} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        <img src={String(record.image ?? record.photo ?? record.cover ?? '/images/placeholder.png')} alt="thumb" className="w-20 h-12 object-cover rounded" />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{String(record.subtitle ?? record.subTitle ?? record.topTitle ?? '-')}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{String(record.title ?? record.name ?? '-')}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        <button onClick={() => handleEdit(record)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm">İçeriği Oku</button>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        <input type="checkbox" checked={Boolean(record.active)} onChange={() => handleToggleActive(String(record.id), Boolean(record.active))} className="h-4 w-4" />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        <input type="number" defaultValue={Number(record.order ?? record.sira ?? 0)} onBlur={(e) => handleChangeOrder(String(record.id), Number(e.currentTarget.value))} className="w-20 px-2 py-1 border rounded" />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button onClick={() => handleEdit(record)} className="px-3 py-1 bg-green-500 text-white rounded text-sm">Güncelle</button>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button onClick={() => handleDelete(String(record.id))} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Sil</button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && config && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => setIsModalOpen(false)}></div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                            <div className="bg-white px-6 py-5 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {formState.id ? "Kaydı Düzenle" : "Yeni Kayıt Ekle"} - {config.label}
                                    </h3>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white px-6 py-6 max-h-[60vh] overflow-y-auto">
                                <div className="space-y-4">
                                    {config.formFields.map((field) => (
                                        <FormField
                                            key={field.name}
                                            field={field}
                                            value={formState[field.name]}
                                            onChange={(value) => setFormState((prev) => ({ ...prev, [field.name]: value }))}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    İptal
                                </button>
                                <button
                                    onClick={handleSave}
                                    disabled={saving}
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {saving ? "Kaydediliyor..." : "Kaydet"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function renderCell(variant: string | undefined, value: unknown) {
    if (value === null || value === undefined || value === "") return <span className="text-gray-400">—</span>;

    switch (variant) {
        case "status":
            const statusColors: Record<string, string> = {
                published: "bg-green-100 text-green-800",
                draft: "bg-yellow-100 text-yellow-800",
                review: "bg-blue-100 text-blue-800",
                scheduled: "bg-purple-100 text-purple-800",
                archived: "bg-gray-100 text-gray-800",
            };
            const statusValue = String(value);
            return (
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[statusValue] || statusColors.draft}`}>
                    {statusValue.toUpperCase()}
                </span>
            );
        case "date":
            const dateValue = value instanceof Date ? value : new Date(String(value));
            return <span className="text-gray-600">{dateValue.toLocaleString("tr-TR")}</span>;
        case "badge":
            return (
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {String(value)}
                </span>
            );
        default:
            return Array.isArray(value) ? value.join(", ") : String(value);
    }
}

function FormField({
    field,
    value,
    onChange,
}: {
    field: ResourceField;
    value: unknown;
    onChange: (value: unknown) => void;
}) {
    const baseClass =
        "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {field.type === "textarea" ? (
                <textarea
                    value={String(value ?? "")}
                    onChange={(e) => onChange(e.target.value)}
                    rows={4}
                    className={baseClass}
                    placeholder={field.placeholder}
                />
            ) : field.type === "json" ? (
                <textarea
                    value={typeof value === "string" ? value : JSON.stringify(value ?? null, null, 2)}
                    onChange={(e) => {
                        try {
                            onChange(JSON.parse(e.target.value));
                        } catch {
                            onChange(e.target.value);
                        }
                    }}
                    rows={6}
                    className={`${baseClass} font-mono text-xs`}
                    placeholder='Örn: { "title": "Hero" }'
                />
            ) : field.type === "select" ? (
                <select value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} className={baseClass}>
                    <option value="">Seçiniz</option>
                    {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : field.type === "date" ? (
                <input
                    type="datetime-local"
                    value={value ? toDateTimeInputValue(value as string | Date) : ""}
                    onChange={(e) => onChange(e.target.value)}
                    className={baseClass}
                />
            ) : field.type === "toggle" ? (
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={Boolean(value)}
                        onChange={(e) => onChange(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{field.description || field.label}</span>
                </div>
            ) : field.type === "tags" ? (
                <input
                    value={Array.isArray(value) ? value.join(", ") : String(value ?? "")}
                    onChange={(e) => onChange(e.target.value.split(",").map((tag: string) => tag.trim()).filter(Boolean))}
                    placeholder="etiket1, etiket2"
                    className={baseClass}
                />
            ) : (
                <input
                    type="text"
                    value={String(value ?? "")}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={field.placeholder}
                    className={baseClass}
                />
            )}
            {field.description && (
                <p className="mt-1 text-xs text-gray-500">{field.description}</p>
            )}
        </div>
    );
}

function toDateTimeInputValue(value: string | Date) {
    const date = typeof value === "string" ? new Date(value) : value;
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
}
