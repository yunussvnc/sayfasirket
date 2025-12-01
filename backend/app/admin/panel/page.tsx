"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminResource, ResourceField, RESOURCE_CONFIG } from "@/lib/resource-config";
import { callAdminApi, clearAdminSession, readSessionFromStorage, type RequestBody } from "../_lib/call-admin-api";

type PanelMode = "desktop" | "mobile";

export default function AdminControlPanel() {
    const router = useRouter();
    const [session, setSession] = useState(() => readSessionFromStorage());
    const [panelMode, setPanelMode] = useState<PanelMode>("desktop");
    const [activeResource, setActiveResource] = useState<AdminResource>("pages");
    const [records, setRecords] = useState<any[]>([]);
    const [stats, setStats] = useState<Record<string, number>>({});
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formState, setFormState] = useState<Record<string, any>>({});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!session) {
            router.replace("/admin/login");
        }
    }, [session, router]);

    const config = useMemo(() => RESOURCE_CONFIG[activeResource], [activeResource]);

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
                setRecords(response.data ?? []);
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
        fetchResource(activeResource);
    }, [activeResource, fetchResource]);

    const handleSearch = async () => {
        await fetchResource(activeResource, searchTerm ? { search: searchTerm } : undefined);
    };

    const handleCreate = () => {
        setFormState({});
        setIsModalOpen(true);
    };

    const handleEdit = (record: Record<string, any>) => {
        setFormState(record);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Bu kaydı silmek istediğinize emin misiniz?")) return;
        try {
            await callAdminApi(activeResource, "DELETE", { id });
            await fetchResource(activeResource);
        } catch (err) {
            alert(err instanceof Error ? err.message : "Silme işlemi başarısız");
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const method = formState.id ? "PATCH" : "POST";
            await callAdminApi(activeResource, method, formState);
            setIsModalOpen(false);
            setFormState({});
            await fetchResource(activeResource);
        } catch (err) {
            alert(err instanceof Error ? err.message : "Kayıt başarısız");
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = () => {
        clearAdminSession();
        setSession(null);
        router.replace("/admin/login");
    };

    if (session && session.user?.role !== "admin") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Yetki Hatası</h1>
                    <p className="text-gray-600 mb-6">Bu panele sadece admin rolü erişebilir.</p>
                    <button
                        onClick={handleLogout}
                        className="w-full px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
                    >
                        Çıkış Yap
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">NeoKreatif Admin</h1>
                                <p className="text-xs text-gray-500">İçerik Yönetim Paneli</p>
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

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar */}
                    <aside className="lg:w-64 space-y-4 flex-shrink-0">
                        {/* Stats Cards */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">İstatistikler</h3>
                            <div className="space-y-3">
                                {[
                                    { label: "Toplam", field: "total", color: "blue" },
                                    { label: "Yayınlanan", field: "published", color: "green" },
                                    { label: "Taslak", field: "draft", color: "yellow" },
                                ].map((stat) => (
                                    <div key={stat.field} className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">{stat.label}</span>
                                        <span className={`text-lg font-bold text-${stat.color}-600`}>
                                            {stats[stat.field] ?? 0}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="bg-white rounded-xl shadow-sm border border-gray-200 p-2">
                            {Object.entries(RESOURCE_CONFIG).map(([key, cfg]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveResource(key as AdminResource)}
                                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                                        activeResource === key
                                            ? "bg-blue-50 text-blue-700 font-medium shadow-sm"
                                            : "text-gray-700 hover:bg-gray-50"
                                    }`}
                                >
                                    <div className="font-medium">{cfg.label}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{cfg.description}</div>
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <section className="flex-1 min-w-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                            {/* Header */}
                            <div className="px-6 py-5 border-b border-gray-200">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{config.label}</h2>
                                        <p className="text-sm text-gray-500 mt-1">{config.description}</p>
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

                            {/* Error Message */}
                            {error && (
                                <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <p className="text-sm text-red-800">{error}</p>
                                    </div>
                                </div>
                            )}

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            {config.tableColumns.map((column) => (
                                                <th
                                                    key={column.field}
                                                    className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    {column.label}
                                                </th>
                                            ))}
                                            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                İşlemler
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {loading ? (
                                            <tr>
                                                <td colSpan={config.tableColumns.length + 1} className="px-6 py-12 text-center">
                                                    <div className="flex flex-col items-center gap-3">
                                                        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                                        <p className="text-sm text-gray-500">Yükleniyor...</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : records.length === 0 ? (
                                            <tr>
                                                <td colSpan={config.tableColumns.length + 1} className="px-6 py-12 text-center">
                                                    <div className="flex flex-col items-center gap-3">
                                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                                                            <svg
                                                                className="w-8 h-8 text-gray-400"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                                                />
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
                                                <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                                                    {config.tableColumns.map((column) => (
                                                        <td key={column.field} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            {renderCell(column.variant, record[column.field])}
                                                        </td>
                                                    ))}
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <button
                                                                onClick={() => handleEdit(record)}
                                                                className="text-blue-600 hover:text-blue-800 font-medium"
                                                            >
                                                                Düzenle
                                                            </button>
                                                            <span className="text-gray-300">|</span>
                                                            <button
                                                                onClick={() => handleDelete(record.id)}
                                                                className="text-red-600 hover:text-red-800 font-medium"
                                                            >
                                                                Sil
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
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

function renderCell(variant: string | undefined, value: any) {
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
            return (
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[value] || statusColors.draft}`}>
                    {String(value).toUpperCase()}
                </span>
            );
        case "date":
            return <span className="text-gray-600">{new Date(value).toLocaleString("tr-TR")}</span>;
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
    value: any;
    onChange: (value: any) => void;
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
                    value={value ?? ""}
                    onChange={(e) => onChange(e.target.value)}
                    rows={4}
                    className={baseClass}
                    placeholder={field.placeholder}
                />
            ) : field.type === "json" ? (
                <textarea
                    value={typeof value === "string" ? value : JSON.stringify(value ?? {}, null, 2)}
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
                <select value={value ?? ""} onChange={(e) => onChange(e.target.value)} className={baseClass}>
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
                    value={value ? toDateTimeInputValue(value) : ""}
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
                    value={Array.isArray(value) ? value.join(", ") : value ?? ""}
                    onChange={(e) => onChange(e.target.value.split(",").map((tag: string) => tag.trim()).filter(Boolean))}
                    placeholder="etiket1, etiket2"
                    className={baseClass}
                />
            ) : (
                <input
                    type="text"
                    value={value ?? ""}
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
