import { ContentStatus } from "@prisma/client";

export type AdminResource = "pages" | "posts" | "media_assets" | "site_settings";
export type FieldType =
    | "text"
    | "textarea"
    | "editor"
    | "json"
    | "select"
    | "date"
    | "media"
    | "toggle"
    | "tags";

export interface ResourceField {
    name: string;
    label: string;
    type: FieldType;
    description?: string;
    placeholder?: string;
    required?: boolean;
    options?: { label: string; value: string }[];
    responsive?: { mobile?: number; desktop?: number };
}

export interface TableColumn {
    label: string;
    field: string;
    width?: string;
    variant?: "badge" | "date" | "status" | "text" | "chip";
}

export interface StatCard {
    label: string;
    field: string;
    suffix?: string;
}

export interface ResourceConfig {
    label: string;
    description: string;
    tableColumns: TableColumn[];
    formFields: ResourceField[];
    statCards: StatCard[];
    searchableFields: string[];
    orderBy?: { field: string; direction: "asc" | "desc" };
    allowPublicRead?: boolean;
}

const STATUS_OPTIONS = Object.values(ContentStatus).map((status) => ({
    label: status.toUpperCase(),
    value: status,
}));

export const RESOURCE_CONFIG: Record<AdminResource, ResourceConfig> = {
    pages: {
        label: "Sayfalar",
        description: "Statik sayfa içeriklerini ve SEO bloklarını yönet",
        tableColumns: [
            { label: "Başlık", field: "title" },
            { label: "Slug", field: "slug" },
            { label: "Durum", field: "status", variant: "status" },
            { label: "Yayın Tarihi", field: "publishedAt", variant: "date" },
            { label: "Güncelleyen", field: "updatedBy" },
        ],
        formFields: [
            { name: "title", label: "Başlık", type: "text", required: true },
            { name: "slug", label: "Slug", type: "text", required: true },
            { name: "summary", label: "Özet", type: "textarea" },
            {
                name: "status",
                label: "Yayın Durumu",
                type: "select",
                options: STATUS_OPTIONS,
                required: true,
            },
            { name: "publishedAt", label: "Yayın Tarihi", type: "date" },
            { name: "blocks", label: "Sayfa Blokları", type: "json" },
            { name: "meta", label: "Meta / SEO", type: "json" },
        ],
        statCards: [
            { label: "Toplam Sayfa", field: "total" },
            { label: "Yayınlanan", field: "published" },
            { label: "Taslak", field: "draft" },
        ],
        searchableFields: ["title", "slug", "summary"],
        orderBy: { field: "updatedAt", direction: "desc" },
        allowPublicRead: true,
    },
    posts: {
        label: "Blog Yazıları",
        description: "Blog / haber içeriklerini tek panelden yönet",
        tableColumns: [
            { label: "Başlık", field: "title" },
            { label: "Kategori", field: "category", variant: "badge" },
            { label: "Durum", field: "status", variant: "status" },
            { label: "Yayın Tarihi", field: "publishedAt", variant: "date" },
        ],
        formFields: [
            { name: "title", label: "Başlık", type: "text", required: true },
            { name: "slug", label: "Slug", type: "text", required: true },
            { name: "category", label: "Kategori", type: "text", required: true },
            { name: "tags", label: "Etiketler", type: "tags" },
            { name: "status", label: "Yayın Durumu", type: "select", options: STATUS_OPTIONS },
            { name: "publishedAt", label: "Yayın Tarihi", type: "date" },
            { name: "excerpt", label: "Özet", type: "textarea" },
            { name: "blocks", label: "Bloklar", type: "json" },
            { name: "hero", label: "Hero Ayarları", type: "json" },
            { name: "meta", label: "Meta / SEO", type: "json" },
        ],
        statCards: [
            { label: "Toplam Yazı", field: "total" },
            { label: "Yayınlanan", field: "published" },
            { label: "Taslak", field: "draft" },
        ],
        searchableFields: ["title", "category", "tags"],
        orderBy: { field: "publishedAt", direction: "desc" },
        allowPublicRead: true,
    },
    media_assets: {
        label: "Medya Varlıkları",
        description: "Görseller, videolar ve dosya varlıkları",
        tableColumns: [
            { label: "Başlık", field: "title" },
            { label: "Tip", field: "type" },
            { label: "Durum", field: "status", variant: "status" },
            { label: "Yayın Tarihi", field: "publishedAt", variant: "date" },
        ],
        formFields: [
            { name: "title", label: "Başlık", type: "text", required: true },
            { name: "slug", label: "Slug", type: "text", required: true },
            { name: "type", label: "Dosya Tipi", type: "text", required: true },
            { name: "url", label: "Kaynak URL", type: "text", required: true },
            { name: "alt", label: "Alt Metin", type: "text" },
            { name: "status", label: "Yayın Durumu", type: "select", options: STATUS_OPTIONS },
            { name: "publishedAt", label: "Yayın Tarihi", type: "date" },
            { name: "tags", label: "Etiketler", type: "tags" },
            { name: "variants", label: "Alternatif Boyutlar", type: "json" },
            { name: "metadata", label: "Ek Metadata", type: "json" },
        ],
        statCards: [
            { label: "Toplam Varlık", field: "total" },
            { label: "Yayınlanan", field: "published" },
            { label: "Taslak", field: "draft" },
        ],
        searchableFields: ["title", "slug", "tags"],
        orderBy: { field: "updatedAt", direction: "desc" },
        allowPublicRead: false,
    },
    site_settings: {
        label: "Site Ayarları",
        description: "Header, footer ve global ayarlar",
        tableColumns: [
            { label: "Anahtar", field: "key" },
            { label: "Bölüm", field: "section" },
            { label: "Durum", field: "status", variant: "status" },
            { label: "Güncelleme", field: "updatedAt", variant: "date" },
        ],
        formFields: [
            { name: "key", label: "Ayar Anahtarı", type: "text", required: true },
            { name: "section", label: "Bölüm", type: "text" },
            { name: "status", label: "Durum", type: "select", options: STATUS_OPTIONS },
            { name: "value", label: "Değer (JSON)", type: "json", required: true },
        ],
        statCards: [
            { label: "Toplam Ayar", field: "total" },
            { label: "Yayınlanan", field: "published" },
            { label: "Taslak", field: "draft" },
        ],
        searchableFields: ["key", "section"],
        orderBy: { field: "key", direction: "asc" },
        allowPublicRead: false,
    },
};

