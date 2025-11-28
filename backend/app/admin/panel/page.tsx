"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminResource, ResourceField, RESOURCE_CONFIG } from "@/lib/resource-config";
import { callAdminApi, clearAdminSession, readSessionFromStorage } from "../_lib/call-admin-api";

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
        async (resource: AdminResource, extra?: Record<string, unknown>) => {
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
        if (!confirm("Kaydı silmek istediğine emin misin?")) return;
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
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-center px-6">
                <div className="space-y-6">
                    <p className="text-white/50 uppercase tracking-[0.5em] text-xs">Yetki Hatası</p>
                    <h1 className="text-3xl font-semibold">Bu panele sadece admin rolü erişebilir.</h1>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
                    >
                        Çıkış Yap
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
            <header className="border-b border-white/10 backdrop-blur-xl bg-white/5 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p className="text-white/50 text-sm uppercase tracking-[0.35em]">NeoKreatif</p>
                        <h1 className="text-2xl font-semibold">İçerik Kontrol Paneli</h1>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <PanelModeButton
                            label="Desktop Panel"
                            mode="desktop"
                            active={panelMode === "desktop"}
                            onClick={() => setPanelMode("desktop")}
                        />
                        <PanelModeButton
                            label="Mobil Panel"
                            mode="mobile"
                            active={panelMode === "mobile"}
                            onClick={() => setPanelMode("mobile")}
                        />
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
                        >
                            Çıkış Yap
                        </button>
                    </div>
                </div>
            </header>

            <main
                className={`max-w-7xl mx-auto px-6 py-10 flex ${
                    panelMode === "mobile" ? "flex-col gap-6" : "md:flex-row md:gap-10 lg:gap-16"
                }`}
            >
                <aside className="md:w-64 space-y-4">
                    <nav className="bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-xl shadow-2xl shadow-black/40">
                        {Object.entries(RESOURCE_CONFIG).map(([key, cfg]) => (
                            <button
                                key={key}
                                onClick={() => setActiveResource(key as AdminResource)}
                                className={`w-full text-left px-4 py-3 rounded-2xl mb-2 transition-all ${
                                    activeResource === key
                                        ? "bg-white text-slate-900 shadow-lg shadow-indigo-500/40"
                                        : "hover:bg-white/10 text-white/70"
                                }`}
                            >
                                <p className="font-semibold">{cfg.label}</p>
                                <p className="text-xs text-white/60">{cfg.description}</p>
                            </button>
                        ))}
                    </nav>
                    <StatCards stats={stats} />
                </aside>

                <section className="flex-1 space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-2xl shadow-2xl shadow-black/30">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                            <div>
                                <p className="text-white/50 text-xs uppercase tracking-[0.35em]">
                                    {config.label}
                                </p>
                                <h2 className="text-3xl font-semibold">{config.description}</h2>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <div className="flex items-center bg-white/10 border border-white/10 rounded-2xl px-3">
                                    <input
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                        placeholder="Ara..."
                                        className="bg-transparent w-full py-2 px-2 text-sm focus:outline-none"
                                    />
                                    <button
                                        onClick={handleSearch}
                                        className="text-xs uppercase tracking-widest text-white/70 hover:text-white"
                                    >
                                        Ara
                                    </button>
                                </div>
                                <button
                                    onClick={handleCreate}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl uppercase tracking-widest text-xs font-semibold shadow-lg shadow-blue-500/40 hover:scale-[1.01] transition"
                                >
                                    Yeni Kayıt
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/40 text-red-200 px-4 py-3 rounded-2xl mb-4">
                                {error}
                            </div>
                        )}

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-xs uppercase tracking-[0.3em] text-white/40 border-b border-white/10">
                                        {config.tableColumns.map((column) => (
                                            <th key={column.field} className="py-3 pr-6 font-medium">
                                                {column.label}
                                            </th>
                                        ))}
                                        <th className="py-3 pr-6 font-medium text-right">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan={config.tableColumns.length + 1} className="py-8 text-center">
                                                Veriler yükleniyor...
                                            </td>
                                        </tr>
                                    ) : records.length === 0 ? (
                                        <tr>
                                            <td colSpan={config.tableColumns.length + 1} className="py-8 text-center">
                                                Kayıt bulunamadı
                                            </td>
                                        </tr>
                                    ) : (
                                        records.map((record) => (
                                            <tr
                                                key={record.id}
                                                className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                            >
                                                {config.tableColumns.map((column) => (
                                                    <td key={column.field} className="py-4 pr-6 text-sm">
                                                        {renderCell(column.variant, record[column.field])}
                                                    </td>
                                                ))}
                                                <td className="py-4 pr-6 text-right space-x-2">
                                                    <button
                                                        onClick={() => handleEdit(record)}
                                                        className="px-3 py-1 rounded-xl bg-white/10 text-xs uppercase tracking-widest hover:bg-white/20"
                                                    >
                                                        Düzenle
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(record.id)}
                                                        className="px-3 py-1 rounded-xl bg-red-500/20 text-red-100 text-xs uppercase tracking-widest hover:bg-red-500/30"
                                                    >
                                                        Sil
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center px-4">
                    <div className="bg-white/10 border border-white/20 rounded-3xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/60 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-white/70 hover:text-white"
                        >
                            Kapat
                        </button>
                        <h3 className="text-xl font-semibold mb-6">
                            {formState.id ? "Kaydı Güncelle" : "Yeni Kayıt Oluştur"} – {config.label}
                        </h3>

                        <div className="grid gap-4">
                            {config.formFields.map((field) => (
                                <FormField
                                    key={field.name}
                                    field={field}
                                    value={formState[field.name]}
                                    onChange={(value) => setFormState((prev) => ({ ...prev, [field.name]: value }))}
                                />
                            ))}
                        </div>

                        <div className="mt-8 flex justify-end gap-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-5 py-3 rounded-2xl border border-white/20 hover:bg-white/10"
                            >
                                İptal
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-blue-500 text-slate-900 font-semibold disabled:opacity-50"
                            >
                                {saving ? "Kaydediliyor..." : "Kaydet"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function renderCell(variant: string | undefined, value: any) {
    if (value === null || value === undefined || value === "") return <span className="text-white/50">—</span>;

    switch (variant) {
        case "status":
            return (
                <span
                    className={`px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] ${
                        value === "published" ? "bg-emerald-400/20 text-emerald-200" : "bg-yellow-400/10 text-yellow-100"
                    }`}
                >
                    {String(value).toUpperCase()}
                </span>
            );
        case "date":
            return new Date(value).toLocaleString("tr-TR");
        case "badge":
            return (
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.2em]">
                    {String(value)}
                </span>
            );
        default:
            return Array.isArray(value) ? value.join(", ") : String(value);
    }
}

function PanelModeButton({
    label,
    mode,
    active,
    onClick,
}: {
    label: string;
    mode: PanelMode;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-2xl border transition-all ${
                active
                    ? "bg-white text-slate-900 border-white shadow-lg shadow-white/30"
                    : "bg-white/5 text-white/70 border-white/20 hover:bg-white/10"
            }`}
        >
            {label}
        </button>
    );
}

function StatCards({ stats }: { stats: Record<string, number> }) {
    const entries = [
        { label: "Toplam", field: "total" },
        { label: "Yayınlanan", field: "published" },
        { label: "Taslak", field: "draft" },
    ];

    return (
        <div className="grid grid-cols-3 gap-3">
            {entries.map((entry) => (
                <div
                    key={entry.field}
                    className="bg-white/5 border border-white/10 rounded-3xl px-4 py-6 text-center backdrop-blur-xl"
                >
                    <p className="text-white/50 text-xs uppercase tracking-[0.3em]">{entry.label}</p>
                    <p className="text-2xl font-semibold mt-2">{stats[entry.field] ?? 0}</p>
                </div>
            ))}
        </div>
    );
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
        "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-sm placeholder-white/40";

    const label = (
        <label className="text-xs uppercase tracking-[0.3em] text-white/50 block mb-2">{field.label}</label>
    );

    switch (field.type) {
        case "textarea":
            return (
                <div>
                    {label}
                    <textarea
                        value={value ?? ""}
                        onChange={(e) => onChange(e.target.value)}
                        rows={4}
                        className={baseClass}
                        placeholder={field.placeholder}
                    />
                </div>
            );
        case "json":
            return (
                <div>
                    {label}
                    <textarea
                        value={typeof value === "string" ? value : JSON.stringify(value ?? {}, null, 2)}
                        onChange={(e) => onChange(e.target.value)}
                        rows={6}
                        className={`${baseClass} font-mono text-xs`}
                        placeholder='Örn: { "title": "Hero" }'
                    />
                </div>
            );
        case "select":
            return (
                <div>
                    {label}
                    <select
                        value={value ?? ""}
                        onChange={(e) => onChange(e.target.value)}
                        className={baseClass}
                    >
                        <option value="">Seçiniz</option>
                        {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            );
        case "date":
            return (
                <div>
                    {label}
                    <input
                        type="datetime-local"
                        value={value ? toDateTimeInputValue(value) : ""}
                        onChange={(e) => onChange(e.target.value)}
                        className={baseClass}
                    />
                </div>
            );
        case "tags":
            return (
                <div>
                    {label}
                    <input
                        value={Array.isArray(value) ? value.join(", ") : value ?? ""}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="etiket1, etiket2"
                        className={baseClass}
                    />
                </div>
            );
        case "toggle":
            return (
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                    <input
                        type="checkbox"
                        checked={Boolean(value)}
                        onChange={(e) => onChange(e.target.checked)}
                        className="h-5 w-5 accent-blue-500"
                    />
                    <span className="text-sm">{field.label}</span>
                </div>
            );
        default:
            return (
                <div>
                    {label}
                    <input
                        value={value ?? ""}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={field.placeholder}
                        className={baseClass}
                    />
                </div>
            );
    }
}

function toDateTimeInputValue(value: string | Date) {
    const date = typeof value === "string" ? new Date(value) : value;
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
}

