# Veritabanı Kurulum Rehberi

## 🚀 Hızlı Başlangıç

### 1. PostgreSQL Kurulumu (Önerilen)

#### Yerel Kurulum:
- **Windows:** [PostgreSQL İndir](https://www.postgresql.org/download/windows/)
- **Mac:** `brew install postgresql`
- **Linux:** `sudo apt-get install postgresql`

#### Cloud Seçenekleri:
- **Vercel Postgres** (Önerilen - ücretsiz tier)
- **Supabase** (PostgreSQL üzerine)
- **Neon** (Serverless PostgreSQL)
- **Railway** (Kolay kurulum)

### 2. Ortam Değişkenlerini Ayarlayın

`.env` dosyası oluşturun (`.env.example` dosyasını kopyalayın):

```bash
cp .env.example .env
```

`.env` dosyasında `DATABASE_URL`'i düzenleyin:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/siteyeniyol?schema=public"
```

**Vercel Postgres için:**
```env
DATABASE_URL="postgresql://username:password@hostname:5432/database?sslmode=require"
```

### 3. Paketleri Yükleyin

```bash
npm install
```

### 4. Veritabanını Oluşturun

```bash
# Prisma Client'ı generate edin
npm run db:generate

# Veritabanı şemasını oluşturun (ilk kurulum)
npm run db:push

# VEYA migration ile (önerilen)
npm run db:migrate
```

### 5. İlk Admin Kullanıcısını Oluşturun

Admin kullanıcısı için seed script'i çalıştırın veya API endpoint'i kullanın:

```bash
# Seed script oluşturmak için (opsiyonel)
npx tsx scripts/seed-admin.ts
```

## 📊 Veritabanı Şeması

Prisma Schema dosyası: `prisma/schema.prisma`

**Tablolar:**
- `Admin` - Admin kullanıcıları
- `Page` - Sayfalar
- `SEOData` - SEO ayarları
- `Service` - Hizmetler
- `BlogPost` - Blog/Haber yazıları
- `MenuItem` - Menü öğeleri
- `SliderItem` - Banner/Slider öğeleri
- `Message` - İletişim mesajları
- `Image` - Görseller
- `SiteSetting` - Site ayarları

## 🛠️ Komutlar

```bash
# Prisma Client'ı generate et
npm run db:generate

# Veritabanı şemasını sync et (dev)
npm run db:push

# Migration oluştur ve uygula (production için)
npm run db:migrate

# Prisma Studio - GUI ile veritabanını görüntüle
npm run db:studio
```

## 🔄 Migration İşlemleri

### Yeni bir migration oluştur:
```bash
npx prisma migrate dev --name migration_name
```

### Production'da migration uygula:
```bash
npx prisma migrate deploy
```

## 🌐 Cloud Veritabanı Kurulumu

### Vercel Postgres (Önerilen)
1. Vercel dashboard'a gidin
2. Projenizi seçin
3. Storage > Create Database > Postgres
4. `DATABASE_URL` otomatik olarak `.env` dosyasına eklenir

### Supabase
1. [Supabase](https://supabase.com) hesabı oluşturun
2. Yeni proje oluşturun
3. Settings > Database > Connection string
4. `.env` dosyasına ekleyin

## 🔒 Güvenlik

- `.env` dosyasını **ASLA** commit etmeyin
- Production'da güçlü şifreler kullanın
- Veritabanı bağlantılarında SSL kullanın
- Şifreleri asla plain text saklamayın (bcrypt kullanılıyor)

## 📝 Notlar

- İlk kurulumda `db:push` kullanabilirsiniz
- Production için mutlaka `db:migrate` kullanın
- Veritabanı değişikliklerinden sonra `db:generate` çalıştırın
- Prisma Studio ile veritabanını görsel olarak yönetebilirsiniz

