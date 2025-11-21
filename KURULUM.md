# 🗄️ Veritabanı Kurulum Rehberi

## 📋 Adım Adım Kurulum

### 1️⃣ Paketleri Yükleyin

```bash
npm install
```

Bu komut şunları yükler:
- `@prisma/client` - Prisma ORM Client
- `prisma` - Prisma CLI
- `bcryptjs` - Şifre hash'leme
- `@types/bcryptjs` - TypeScript tipleri

### 2️⃣ Veritabanı Seçin ve Kurun

#### Seçenek A: PostgreSQL (Önerilen - Production için)

**Yerel Kurulum:**
```bash
# Windows için: PostgreSQL'i indirip kurun
# https://www.postgresql.org/download/windows/

# Mac için:
brew install postgresql
brew services start postgresql

# Linux için:
sudo apt-get install postgresql
sudo systemctl start postgresql
```

**Veritabanı Oluştur:**
```bash
# PostgreSQL'e bağlan
psql -U postgres

# Veritabanı oluştur
CREATE DATABASE siteyeniyol;
\q
```

**Cloud Seçenekleri (Kolay):**
- **Vercel Postgres** - [Vercel Dashboard](https://vercel.com/dashboard) > Storage > Create Database
- **Supabase** - [supabase.com](https://supabase.com) > New Project
- **Neon** - [neon.tech](https://neon.tech) > Create Project

#### Seçenek B: SQLite (Geliştirme için - Hızlı Başlangıç)

`prisma/schema.prisma` dosyasında:
```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

### 3️⃣ Ortam Değişkenlerini Ayarlayın

`.env` dosyası oluşturun:

```bash
# .env.example dosyasını kopyalayın
# (Dosya zaten oluşturuldu)

# .env dosyasını manuel olarak oluşturun:
```

`.env` dosyası içeriği:

```env
# PostgreSQL için
DATABASE_URL="postgresql://username:password@localhost:5432/siteyeniyol?schema=public"

# Veya SQLite için (geliştirme)
DATABASE_URL="file:./dev.db"

# Admin kullanıcı bilgileri (seed için)
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="neokreatif3434"
ADMIN_EMAIL="admin@neokreatif.com"

# Güvenlik
NEXTAUTH_SECRET="your-secret-key-here-change-in-production"
```

**Önemli:** `.env` dosyasını **ASLA** commit etmeyin!

### 4️⃣ Veritabanı Şemasını Oluşturun

```bash
# Prisma Client'ı generate edin
npm run db:generate

# Veritabanı şemasını oluşturun (ilk kurulum)
npm run db:push

# VEYA migration ile (production için önerilen)
npm run db:migrate
```

### 5️⃣ İlk Admin Kullanıcısını Oluşturun

```bash
npm run db:seed
```

Bu komut:
- Admin kullanıcısı oluşturur
- Şifreyi bcrypt ile hash'ler
- Veritabanına kaydeder

### 6️⃣ Veritabanını Görsel Olarak Yönetin

```bash
npm run db:studio
```

Bu komut Prisma Studio'yu açar - tarayıcıda veritabanını yönetebilirsiniz.

## 🔄 Güncellemeler

### Schema Değişikliği Yaptıysanız:

```bash
# 1. Prisma Client'ı yeniden generate et
npm run db:generate

# 2. Veritabanını güncelle
npm run db:push

# VEYA migration oluştur (production için)
npm run db:migrate
```

## 📊 Veritabanı Yapısı

### Tablolar:

1. **Admin** - Admin kullanıcıları ve yetkileri
2. **Page** - Tüm sayfalar (Anasayfa, Hakkımızda, vb.)
3. **SEOData** - Her sayfa için SEO ayarları
4. **Service** - Hizmetler (Web Tasarım, SEO, vb.)
5. **BlogPost** - Blog/Haber yazıları
6. **MenuItem** - Menü yapısı (hierarchical)
7. **SliderItem** - Ana sayfa slider/banner'ları
8. **Message** - İletişim formu mesajları
9. **Image** - Yüklenen görseller
10. **SiteSetting** - Genel site ayarları

## 🚀 Cloud Deployment

### Vercel Deployment

1. Vercel'e projeyi push edin
2. Settings > Environment Variables:
   - `DATABASE_URL` - Vercel Postgres'ten otomatik gelir
   - `ADMIN_USERNAME` - Admin kullanıcı adı
   - `ADMIN_PASSWORD` - Admin şifresi (hash'lenecek)
3. Settings > Build Command:
   ```
   prisma generate && next build
   ```
4. Settings > Install Command:
   ```
   npm install
   ```

### Migration'ları Production'da Uygula:

```bash
# Vercel'de otomatik çalışacak veya manuel:
npx prisma migrate deploy
```

## 🛠️ Faydalı Komutlar

```bash
# Prisma Studio - GUI ile veritabanını yönet
npm run db:studio

# Migration oluştur
npm run db:migrate

# Prisma Client'ı yeniden generate et
npm run db:generate

# Veritabanını sıfırla (DİKKAT: Tüm veriler silinir!)
npx prisma migrate reset

# Schema'yı görüntüle
npx prisma format
```

## ⚠️ Güvenlik Notları

1. **.env dosyasını ASLA commit etmeyin**
2. **Production'da güçlü şifreler kullanın**
3. **DATABASE_URL'i güvenli tutun**
4. **SSL bağlantıları kullanın (cloud veritabanları için)**
5. **Şifreleri asla plain text saklamayın**

## 📚 Daha Fazla Bilgi

- [Prisma Dokümantasyonu](https://www.prisma.io/docs)
- [PostgreSQL Dokümantasyonu](https://www.postgresql.org/docs/)
- [Next.js Database Guide](https://nextjs.org/docs/app/building-your-application/data-fetching)

## ❓ Sorun Giderme

**Hata: "Can't reach database server"**
- PostgreSQL servisinin çalıştığından emin olun
- DATABASE_URL'in doğru olduğunu kontrol edin

**Hata: "Migration failed"**
- Veritabanı bağlantısını kontrol edin
- Mevcut migration'ları kontrol edin: `npx prisma migrate status`

**Hata: "Prisma Client not generated"**
- `npm run db:generate` komutunu çalıştırın

