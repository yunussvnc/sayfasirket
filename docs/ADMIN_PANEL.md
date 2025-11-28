# NeoKreatif Admin Panel Rehberi

Bu doküman; Supabase/PostgreSQL veritabanı tasarımı, RLS politikaları, edge/API katmanı, frontend panel bileşenleri ve test akışları için güncel mimariyi özetler.

## 1. Veritabanı Tasarımı

- Şemadaki ana içerik tabloları: `Page`, `BlogPost`, `MediaAsset`, `SiteSetting`, `ActivityLog`.
- Bütün içerik modellerinde `status (ContentStatus enum)`, `publishedAt`, `createdBy`, `updatedBy` alanları zorunlu tutulur.
- Esnek alanlar `Json` kolonlarında saklanır:
  - `Page.blocks`, `Page.meta`
  - `BlogPost.blocks`, `BlogPost.hero`, `BlogPost.meta`
  - `MediaAsset.variants`, `MediaAsset.metadata`
  - `SiteSetting.value`
- `ActivityLog` her CRUD işleminde kaydı yapılan tabloyu, eylemi ve diff bilgisini saklar.

> **Not:** `prisma/migrations` klasörüne yeni şemayı içeren migration eklendi. Supabase ya da cPanel PostgreSQL üzerinde `npm run db:migrate && npm run db:seed` komutlarıyla tablo güncellemelerini uygulayabilirsin.

## 2. RLS Politikaları

Supabase kullanıyorsan aşağıdaki prensipleri uygula (örnek SQL `Page` tablosu içindir, diğer tablolar için tablo adını değiştir):

```sql
alter table "Page" enable row level security;

create policy "Public can read published pages"
on "Page" for select
using (status = 'published');

create policy "Admins manage pages"
on "Page" for all
using (auth.jwt()->>'role' = 'admin');
```

- `auth.jwt()->>'role'` claim'i Supabase Auth tarafında `role=admin` olarak ayarlanır.
- Aynı mantık `BlogPost`, `MediaAsset`, `SiteSetting` için de uygulanır.

## 3. Edge / API Katmanı

- Tek uç nokta: `POST/GET/PATCH/DELETE /api/admin/resources?resource=<pages|posts|media_assets|site_settings>`
- `resource` parametresi hangi tablo ile çalışılacağını belirler.
- JWT doğrulaması `Authorization: Bearer <token>` başlığından yapılır (`lib/server-auth.ts`).
- `normalizeResourcePayload` helper’ı JSON/array alanlarını string formattan parse eder, tarih alanlarını `Date` objesine çevirir, `createdBy/updatedBy` bilgilerini otomatik doldurur.
- Her başarıyla tamamlanan mutasyon `ActivityLog` tablosuna kaydedilir.

## 4. Frontend Paneli

- Yeni panel `app/admin/panel/page.tsx` altında bulunur ve `RESOURCE_CONFIG` ile çalışır.
- `RESOURCE_CONFIG` her kaynak için:
  - Tablo kolonları
  - Form alanları (tip, açıklama, placeholder)
  - İstatistik kartları
  - Arama yapılacak alanları tanımlar.
- Cam efektli tam ekran modal (overlay) ile create/update işlemleri yapılır.
- `callAdminApi` helper’ı token’ı otomatik ekler, GET filtre parametrelerini yönetir.
- Panelde desktop/mobile olmak üzere iki giriş modu bulunur; sadece `role=admin` kullanıcılar token alabileceği için butonlar gizli olarak varsayılır.

## 5. Yetkilendirme

- Giriş işlemi `/api/admin/login` endpoint’i üzerinden yapılır. Başarılı girişte JWT döner ve `localStorage` + `sessionStorage` içine kaydedilir.
- Token payload’ında `sub`, `username`, `role` alanları bulunur; panel bileşenleri bu role göre alanları kilitler.
- Frontend (statik site) tarafında admin butonunu göstermek için isteğe bağlı olarak Supabase Auth veya farklı bir kontrol eklenebilir.
- Ortak ortam değişkenleri:
  - `ADMIN_JWT_SECRET` → backend token imzası için zorunlu.
  - `DATABASE_URL` → Supabase veya cPanel PostgreSQL bağlantısı.
  - `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_EMAIL`, `ADMIN_ROLE` → seed scriptlerinde kullanılır.

## 6. Test Planı

1. `npm run db:migrate` ve `npm run db:seed` komutlarıyla şemayı güncelle.
2. `npm run dev` (backend) çalıştır, `http://localhost:3000/admin/login` üzerinden giriş yap.
3. Panelde sırasıyla `pages`, `posts`, `media_assets`, `site_settings` kaynakları için:
   - Create → formu doldur, kayıt oluştu mu kontrol et.
   - Update → kayıt düzenleniyor mu?
   - Delete → kayıt ve ilişkili activity log silinip loglanıyor mu?
4. Supabase Dashboard’da ilgili tablolarda RLS politikalarının etkin olduğundan emin ol.
5. Deployment için:
   - Backend (Node.js) → cPanel Node App Manager (api.neokreatif.com)
   - Frontend (static export) → public_html

Herhangi bir sorunda `docs/ADMIN_PANEL.md` günlüğüne not düşerek ilerleyen sprintlerde bilgi paylaşımını kolaylaştırabilirsin.

