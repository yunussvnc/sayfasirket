# ⚡ Supabase Hızlı Başlangıç

## 🎯 Hızlı Kurulum (5 Dakika)

### 1. Supabase'den Connection String Alın

1. Supabase Dashboard > **Settings** > **Database**
2. **Connection string** bölümünde:
   - **Type:** URI
   - **Source:** Primary Database  
   - **Method:** **Session pooler** ⚠️ (IPv4 için gerekli!)

3. Connection string'i kopyalayın:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
   ```

4. `[YOUR-PASSWORD]` kısmını projeyi oluştururken girdiğiniz şifre ile değiştirin

### 2. .env Dosyası Oluşturun

Proje kök dizininde `.env` dosyası oluşturun:

```env
# Supabase - Session Pooler (ÖNERİLEN)
DATABASE_URL="postgresql://postgres:ŞİFRENİZ@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"

# Direct Connection (migration'lar için - opsiyonel)
DIRECT_URL="postgresql://postgres:ŞİFRENİZ@db.kisgktjonxeyeknyokqg.supabase.co:5432/postgres"

# Admin Panel
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="neokreatif3434"
ADMIN_EMAIL="admin@neokreatif.com"
```

**Önemli:**
- `ŞİFRENİZ` yerine Supabase'de oluşturduğunuz database password'ü yazın
- `kisgktjonxeyeknyokqg` kısmını kendi project reference'ınız ile değiştirin

### 3. Paketleri Yükleyin

```bash
npm install
```

### 4. Veritabanını Kurun

```bash
# 1. Prisma Client'ı oluştur
npm run db:generate

# 2. Veritabanı şemasını Supabase'e yükle
npm run db:push

# 3. İlk admin kullanıcısını oluştur
npm run db:seed

# 4. Bağlantıyı kontrol et (opsiyonel)
npm run db:check
```

## ⚠️ IPv4 Uyarısı Çözümü

Eğer "Not IPv4 compatible" uyarısı görüyorsanız:

**Çözüm 1: Session Pooler Kullanın (Önerilen)**
- Method dropdown'ından **"Session pooler"** seçin
- Port: `6543` kullanın
- IPv4 uyumludur ✅

**Çözüm 2: Direct Connection (Sadece migration için)**
- Method: "Direct connection"
- Port: `5432`
- Sadece `DIRECT_URL` için kullanın

**En İyi Pratik:**
```env
# Normal kullanım için (pooler)
DATABASE_URL="postgresql://postgres:ŞİFRE@aws-0-REGION.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"

# Migration için (direct)
DIRECT_URL="postgresql://postgres:ŞİFRE@db.PROJECT-REF.supabase.co:5432/postgres"
```

## ✅ Kurulum Kontrol Listesi

- [ ] Supabase projesi oluşturuldu
- [ ] Database password kaydedildi
- [ ] Connection string alındı (Session pooler)
- [ ] `.env` dosyası oluşturuldu ve dolduruldu
- [ ] `npm install` çalıştırıldı
- [ ] `npm run db:generate` çalıştırıldı
- [ ] `npm run db:push` çalıştırıldı
- [ ] `npm run db:seed` ile admin kullanıcısı oluşturuldu
- [ ] `npm run db:check` ile bağlantı kontrol edildi

## 🔍 Bağlantıyı Test Et

```bash
npm run db:check
```

Bu komut:
- Veritabanı bağlantısını test eder
- Tablo sayılarını gösterir
- Admin kullanıcısının olup olmadığını kontrol eder

## 📚 Daha Fazla Bilgi

Detaylı talimatlar için `KURULUM-SUPABASE.md` dosyasına bakın.

