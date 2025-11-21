# 🚀 Supabase Veritabanı Kurulum Rehberi

## 📋 Adım Adım Kurulum

### 1️⃣ Supabase Projesi Oluşturun

1. [Supabase.com](https://supabase.com) adresine gidin
2. "Start your project" veya "New Project" tıklayın
3. GitHub hesabınızla giriş yapın (veya email ile kayıt olun)
4. Yeni bir organization oluşturun veya mevcut olanı seçin
5. "New Project" butonuna tıklayın

### 2️⃣ Proje Ayarlarını Yapın

**Proje Bilgileri:**
- **Name:** `siteyeniyol` (veya istediğiniz isim)
- **Database Password:** Güçlü bir şifre oluşturun (SAKLAYIN!)
- **Region:** Size en yakın bölgeyi seçin (örn: `West EU (Ireland)`)

"Create new project" butonuna tıklayın ve kurulumun tamamlanmasını bekleyin (2-3 dakika).

### 3️⃣ Veritabanı Bağlantı Bilgilerini Alın

1. Projeniz açıldıktan sonra sol menüden **"Settings"** (⚙️) seçin
2. **"Database"** sekmesine gidin
3. **"Connection string"** bölümünü bulun
4. **"URI"** tabına tıklayın
5. **"Method"** dropdown'ından **"Session pooler"** seçin (IPv4 uyumluluğu için önerilir)
6. Bağlantı string'ini kopyalayın:

```
postgresql://postgres:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
```

**ÖNEMLİ:** 
- `[YOUR-PASSWORD]` kısmını oluşturduğunuz şifre ile değiştirin!
- **Session pooler** kullanın (IPv4 uyumlu)
- Port: `6543` (pooler) veya `5432` (direct)

**Alternatif - Direct Connection (migration'lar için):**
- Method: "Direct connection" seçin
- Port: `5432`
- Bu DIRECT_URL için kullanılacak

### 4️⃣ Ortam Değişkenlerini Ayarlayın

Proje kök dizininde `.env` dosyası oluşturun:

```bash
# .env dosyası oluşturun
```

`.env` dosyasına şunu ekleyin:

```env
# Supabase Database URL - Session Pooler (IPv4 uyumlu - ÖNERİLEN)
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"

# Direct Connection (migration'lar için - opsiyonel)
# DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"

# Admin Panel Ayarları
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="neokreatif3434"
ADMIN_EMAIL="admin@neokreatif.com"

# Güvenlik
NEXTAUTH_SECRET="your-secret-key-here-change-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Supabase API Keys (opsiyonel - gelecekte API için)
NEXT_PUBLIC_SUPABASE_URL="https://[PROJECT-REF].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here"
```

**Gerçek Örnek (Session Pooler):**
```env
DATABASE_URL="postgresql://postgres:MySecurePassword123@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
```

**Gerçek Örnek (Direct Connection):**
```env
DATABASE_URL="postgresql://postgres:MySecurePassword123@db.kisgktjonxeyeknyokqg.supabase.co:5432/postgres"
DIRECT_URL="postgresql://postgres:MySecurePassword123@db.kisgktjonxeyeknyokqg.supabase.co:5432/postgres"
```

**ÖNEMLİ NOTLAR:**
- **Session pooler** kullanın (port 6543) - IPv4 uyumlu ve production için önerilir
- **Direct connection** sadece migration'lar için gerekli (port 5432)
- Eğer "Not IPv4 compatible" hatası alırsanız, **Session pooler** seçeneğini kullanın

### 5️⃣ Paketleri Yükleyin

```bash
npm install
```

Bu komut şunları yükler:
- `@prisma/client` - Prisma ORM Client
- `prisma` - Prisma CLI
- `bcryptjs` - Şifre hash'leme

### 6️⃣ Prisma Client'ı Oluşturun

```bash
npm run db:generate
```

Bu komut Prisma Client'ı oluşturur ve TypeScript tipleri üretir.

### 7️⃣ Veritabanı Şemasını Oluşturun

**İlk Kurulum (Schema'yı push edin):**

```bash
npm run db:push
```

Bu komut:
- Veritabanı şemasını Supabase'e yükler
- Tüm tabloları oluşturur
- İlişkileri kurar

**Alternatif (Migration ile - Production için önerilen):**

```bash
npm run db:migrate
```

Migration adı verin (örn: `init`):
```
Migration name: init
```

### 8️⃣ İlk Admin Kullanıcısını Oluşturun

```bash
npm run db:seed
```

Bu komut:
- Admin kullanıcısı oluşturur (`admin` / `neokreatif3434`)
- Şifreyi bcrypt ile hash'ler
- Veritabanına kaydeder

**Çıktı:**
```
🌱 Admin kullanıcısı oluşturuluyor...
✅ Admin kullanıcısı oluşturuldu:
   Kullanıcı Adı: admin
   Email: admin@neokreatif.com
   ID: clxxx...
```

### 9️⃣ Veritabanını Kontrol Edin

**Prisma Studio ile:**
```bash
npm run db:studio
```

Bu komut tarayıcıda Prisma Studio'yu açar. Veritabanınızı görsel olarak görebilir ve yönetebilirsiniz.

**Supabase Dashboard ile:**
1. Supabase projenizde sol menüden **"Table Editor"** seçin
2. Tüm tabloları görebilirsiniz:
   - `Admin`
   - `Page`
   - `SEOData`
   - `Service`
   - `BlogPost`
   - `MenuItem`
   - `SliderItem`
   - `Message`
   - `Image`
   - `SiteSetting`

## 🔍 Supabase Dashboard'da Kontrol

### Tabloları Görüntüleme:
1. Sol menüden **"Table Editor"** seçin
2. Tüm tablolarınızı görebilirsiniz
3. Verileri düzenleyebilir, ekleyebilir veya silebilirsiniz

### SQL Editor ile Sorgu Çalıştırma:
1. Sol menüden **"SQL Editor"** seçin
2. SQL sorguları yazıp çalıştırabilirsiniz

### Veritabanı Ayarları:
1. **Settings** > **Database**
2. Connection string'i görebilir
3. Connection pooling ayarlarını yapabilirsiniz

## 🔒 Güvenlik Notları

1. **Database Password'ü ASLA kaybetmeyin!**
   - Kaybolursa reset etmeniz gerekir
   - Supabase > Settings > Database > Reset database password

2. **Connection String'i güvenli tutun**
   - `.env` dosyasını ASLA commit etmeyin
   - Production'da environment variables kullanın

3. **Row Level Security (RLS)**
   - Supabase'de RLS aktif değil (Prisma kullanıyoruz)
   - Uygulama seviyesinde authentication yapıyoruz

## 🚀 Production Deployment

### Vercel Deployment:

1. **Vercel'e projeyi push edin:**
   ```bash
   git push origin main
   ```

2. **Vercel Dashboard'da:**
   - Project > Settings > Environment Variables
   - Şu değişkenleri ekleyin:
     - `DATABASE_URL` - Supabase connection string
     - `ADMIN_USERNAME` - Admin kullanıcı adı
     - `ADMIN_PASSWORD` - Admin şifresi (seed için)
     - `NEXTAUTH_SECRET` - Random secret key
     - `NEXTAUTH_URL` - Production URL (örn: `https://yourdomain.com`)

3. **Build Command:**
   ```
   prisma generate && next build
   ```

4. **Install Command:**
   ```
   npm install
   ```

5. **Deploy sonrası migration:**
   - Vercel'in deployment loglarında otomatik çalışacak
   - Veya manuel olarak:
   ```bash
   npx prisma migrate deploy
   ```

## 📊 Veritabanı Yapısı

Oluşturulan tablolar:

1. **Admin** - Admin kullanıcıları
2. **Page** - Sayfalar (Anasayfa, Hakkımızda, vb.)
3. **SEOData** - SEO ayarları (her sayfa için)
4. **Service** - Hizmetler (Web Tasarım, SEO, vb.)
5. **BlogPost** - Blog/Haber yazıları
6. **MenuItem** - Menü öğeleri (hierarchical)
7. **SliderItem** - Ana sayfa slider'ları
8. **Message** - İletişim formu mesajları
9. **Image** - Yüklenen görseller
10. **SiteSetting** - Genel site ayarları

## 🔄 Migration İşlemleri

### Yeni Migration Oluşturma:
```bash
npm run db:migrate
```

Migration adı verin (örn: `add-new-field`)

### Migration'ı Geri Alma:
```bash
npx prisma migrate resolve --rolled-back migration_name
```

### Production'da Migration Uygulama:
```bash
npx prisma migrate deploy
```

## 🛠️ Faydalı Komutlar

```bash
# Prisma Client'ı generate et
npm run db:generate

# Veritabanı şemasını Supabase'e push et
npm run db:push

# Migration oluştur ve uygula
npm run db:migrate

# Prisma Studio - GUI ile veritabanını yönet
npm run db:studio

# İlk admin kullanıcısını oluştur
npm run db:seed

# Veritabanı durumunu kontrol et
npx prisma migrate status
```

## ❓ Sorun Giderme

### Hata: "Can't reach database server"
- Supabase projenizin aktif olduğundan emin olun
- Connection string'deki şifrenin doğru olduğunu kontrol edin
- Connection pooling parametresini kontrol edin (`pgbouncer=true`)

### Hata: "Connection timeout"
- Supabase dashboard'da projenizin çalıştığını kontrol edin
- Region ayarını kontrol edin
- Firewall ayarlarını kontrol edin

### Hata: "Migration failed"
- Supabase'de mevcut tabloları kontrol edin
- `npx prisma migrate status` ile migration durumunu kontrol edin
- Gerekirse `npx prisma db push --force-reset` (DİKKAT: Tüm veriler silinir!)

### Connection String Nasıl Bulunur?
1. Supabase Dashboard > Settings > Database
2. Connection string bölümünde "URI" tabına tıklayın
3. Şifreyi değiştirmeyi unutmayın: `[YOUR-PASSWORD]`

## 📚 Kaynaklar

- [Supabase Dokümantasyonu](https://supabase.com/docs)
- [Prisma Dokümantasyonu](https://www.prisma.io/docs)
- [Supabase PostgreSQL Guide](https://supabase.com/docs/guides/database)

## ✅ Kurulum Kontrol Listesi

- [ ] Supabase projesi oluşturuldu
- [ ] Database password kaydedildi
- [ ] Connection string alındı
- [ ] `.env` dosyası oluşturuldu ve dolduruldu
- [ ] `npm install` çalıştırıldı
- [ ] `npm run db:generate` çalıştırıldı
- [ ] `npm run db:push` veya `npm run db:migrate` çalıştırıldı
- [ ] `npm run db:seed` ile admin kullanıcısı oluşturuldu
- [ ] `npm run db:studio` ile veritabanı kontrol edildi
- [ ] Admin panelinde giriş yapılabildi

🎉 **Tebrikler!** Veritabanınız hazır!

