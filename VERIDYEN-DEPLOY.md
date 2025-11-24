# Veridyen NodeJS Hosting Deploy

**Yazar:** Murat Can Sor

Bu rehberde, cPanel üzerinden Node.js uygulamanızı nasıl deploy edeceğinizi adım adım anlatacağız.

## cPanel'e Giriş Yapın

İlk olarak, cPanel hesabınıza giriş yapın. Hosting sağlayıcınızın cPanel giriş adresini kullanarak kullanıcı adı ve şifrenizle oturum açın. Oturum açmak için Veridyen müşteri panelinizdeki hizmet yönetim alanını da kullanabilirsiniz. Eğer kullanıcı adı ve şifrenizi bilmiyorsanız Veridyen Teknik Destek ekibine ulaşmaktan çekinmeyin.

## Uygulama Dosyalarını Yükleyin

### Yöntem 1: ZIP Dosyası Olarak Yükleme (Önerilen)

1. **Projenizi ZIP dosyası olarak hazırlayın:**
   - Yerel bilgisayarınızda proje klasörünüzü ZIP formatına sıkıştırın
   - **Önemli:** `node_modules` klasörünü ZIP'e dahil etmeyin (sunucuda `npm install` ile kurulacak)
   - `.env` dosyasını da ZIP'e dahil etmeyin (güvenlik için sunucuda manuel oluşturulmalı)

2. **Dosya Yöneticisi'ne (File Manager) girin.**

3. **Kök dizine gidin** (genellikle `public_html` üst dizini veya ana dizin). Projeler `public_html` altında değil, kök dizinde olmalıdır.

4. **"Upload" seçeneğini kullanarak ZIP dosyanızı yükleyin.** ZIP dosyası kök dizine yüklenecektir.

5. **`app` klasörünü oluşturun:**
   - Kök dizindeyken **"+ Dosya"** (New Folder) butonuna tıklayın
   - Klasör adını `app` olarak girin ve oluşturun

6. **ZIP dosyasını `app` klasörüne taşıyın:**
   - `siteyeniyol-deploy.zip` dosyasını seçin
   - **"Taşınmak"** (Move) butonuna tıklayın
   - Hedef olarak `app` klasörünü seçin ve taşıyın

7. **ZIP dosyasını `app` klasörü içinde çıkartın:**
   - `app` klasörüne girin
   - `siteyeniyol-deploy.zip` dosyasına sağ tıklayın
   - **"Çıkarmak"** (Extract) seçeneğini seçin
   - Dosyalar `app` klasörü içine çıkartılacaktır

8. **ZIP dosyasını silebilirsiniz** (artık gerekli değil).

### Yöntem 2: FTP ile Yükleme

FTP istemcisi (FileZilla, WinSCP vb.) kullanarak tüm klasör yapısını koruyarak dosyalarınızı yükleyebilirsiniz. Bu yöntemde de `node_modules` klasörünü yüklemeyin.

## Veritabanı Oluşturma ve Bağlantı

Uygulamanız PostgreSQL veritabanı kullanmaktadır. Veritabanınızı oluşturmak için iki seçeneğiniz vardır:

### Seçenek 1: cPanel'de MySQL Veritabanı Oluşturma (Eğer Destekleniyorsa)

**Not:** Bu proje PostgreSQL kullanıyor. Eğer cPanel'de PostgreSQL desteği yoksa, Seçenek 2'yi (Supabase) kullanmanız önerilir.

1. **cPanel ana sayfasında "Veritabanları" (Databases) bölümüne gidin.**

2. **"Veritabanlarımı Yönet" (Manage My Databases) seçeneğine tıklayın.**

3. **Yeni Veritabanı Oluşturun:**
   - "Yeni Veritabanı Oluştur" (Create New Database) bölümüne gidin
   - Veritabanı adını girin (örneğin: `siteyeniyol`)
   - "Veritabanı Oluştur" (Create Database) butonuna tıklayın

4. **Veritabanı Kullanıcısı Oluşturun:**
   - "Yeni Kullanıcı Oluştur" (Add New User) bölümüne gidin
   - Kullanıcı adı ve güçlü bir şifre belirleyin
   - "Kullanıcı Oluştur" (Create User) butonuna tıklayın

5. **Kullanıcıyı Veritabanına Bağlayın:**
   - "Kullanıcıyı Veritabanına Ekle" (Add User To Database) bölümüne gidin
   - Oluşturduğunuz kullanıcıyı ve veritabanını seçin
   - "Tüm Ayrıcalıkları Ver" (All Privileges) seçeneğini işaretleyin
   - "Değişiklikleri Yap" (Make Changes) butonuna tıklayın

6. **Bağlantı Bilgilerini Not Edin:**
   - Veritabanı adı: `kullaniciadi_siteyeniyol` (genellikle cPanel kullanıcı adı ön ek olarak eklenir)
   - Kullanıcı adı: `kullaniciadi_dbuser`
   - Şifre: Oluşturduğunuz şifre
   - Host: Genellikle `localhost`

### Seçenek 2: Supabase (PostgreSQL) - Önerilen

Bu proje PostgreSQL kullanıyor ve Supabase ücretsiz bir PostgreSQL servisi sunuyor. Bu seçenek önerilir:

1. **Supabase Hesabı Oluşturun:**
   - [supabase.com](https://supabase.com) adresine gidin
   - Ücretsiz hesap oluşturun

2. **Yeni Proje Oluşturun:**
   - "New Project" butonuna tıklayın
   - Proje adı: `siteyeniyol`
   - Güçlü bir database password belirleyin (SAKLAYIN!)
   - Region seçin ve projeyi oluşturun

3. **Connection String Alın:**
   - Proje açıldıktan sonra sol menüden **Settings** > **Database** seçin
   - **Connection string** bölümünde **URI** tabına tıklayın
   - **Method:** "Session pooler" seçin (IPv4 uyumlu)
   - Connection string'i kopyalayın ve `[YOUR-PASSWORD]` kısmını şifrenizle değiştirin

### .env Dosyası Oluşturma veya Düzenleme

1. **File Manager'da `app` klasörüne gidin.**

2. **Gizli dosyaları gösterin:**
   - File Manager'ın sağ üst köşesinde **"Ayarlar"** (Settings) ikonuna tıklayın
   - **"Gizli Dosyaları Göster"** (Show Hidden Files) seçeneğini işaretleyin
   - Artık `.env` dosyası görünecektir

3. **`.env` dosyasını kontrol edin:**
   - Eğer `.env` dosyası görünüyorsa, dosyaya sağ tıklayıp **"Düzenlemek"** (Edit) seçeneğini seçin
   - Eğer `.env` dosyası görünmüyorsa, yeni dosya oluşturun:
     - **"+ Dosya"** (New File) butonuna tıklayın
     - Dosya adı: `.env` (nokta ile başlamalı)
     - Dosyayı oluşturun

4. **`.env` dosyasını düzenleyin:**
   - Dosyayı açın ve aşağıdaki bilgileri ekleyin veya güncelleyin:

**cPanel MySQL için:**
```env
DATABASE_URL="mysql://neokrea1_admin:ŞİFRENİZ@localhost:3306/neokrea1_neokreatif"
NODE_ENV="production"
ADMIN_USERNAME="admin"

ADMIN_EMAIL="admin@neokreatif.com"
```

**Önemli:** 
- `ŞİFRENİZ` yerine veritabanı kullanıcı şifrenizi yazın
- `NODE_ENV` mutlaka `"production"` olmalı (Türkçe "üretim" değil!)

**Supabase PostgreSQL için (Önerilen):**
```env
DATABASE_URL="postgresql://postgres:ŞİFRENİZ@aws-0-REGION.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
NODE_ENV="production"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="neokreatif3434"
ADMIN_EMAIL="admin@neokreatif.com"
```

**Önemli:** 
- `ŞİFRENİZ` yerine Supabase'de oluşturduğunuz database password'ü yazın
- `REGION` yerine Supabase projenizin bölgesini yazın (örn: `eu-central-1`)

## Node.js Uygulaması Oluşturun

1. cPanel ana sayfasında **"Setup Node.js App"** seçeneğini bulun ve tıklayın.

2. **"Create Application"** (Yeni Uygulama Oluştur) butonuna tıklayın.

3. **Node.js sürümünü seçin.** (Örneğin: 22.x)

4. **Application Mode:** "Production" veya "Development" olarak belirleyin. Uygulamanız test aşamasındaysa ve hata kayıtlarını görmek istiyorsanız development, değilse Production seçebilirsiniz.

5. **Application Root:** Uygulamanın çalışacağı dizini belirtin. **Tam yolu kullanın:** `/home/neokrea1/app` (kullanıcı adınız `neokrea1` ise) veya sadece `app` yazın. Eğer `app` çalışmazsa, File Manager'da `app` klasörünün tam yolunu kontrol edin. – Projeler hep kök dizinde olmalı, `public_html` altında bulunmamalıdır.

6. **Application URL:** Uygulamanızın çalışacağı domain veya subdomain'i seçin.

7. **Application Startup File:** Next.js uygulamaları için genellikle bu alan boş bırakılabilir veya `server.js` yazılabilir. cPanel otomatik olarak `package.json` içindeki `start` script'ini kullanacaktır (`npm start` komutu çalıştırılır).

8. **"Create"** butonuna basarak uygulamanızı oluşturun.

## NPM Install – Bağımlılıkları Yükleyin

1. cPanel'den **Setup Node.js App** bölümüne giriş yaptıktan sonra birinci aşamada oluşturduğumuz app'i **düzenle** butonuna tıklamamız gerekiyor.

2. Aşağıdaki ekran görüntüsünde de yer aldığı gibi **"Run NPM Install"** butonuna tıklamamız gerekmektedir.

3. Bir süre bekledikten sonra bağımlılıkların tamamı kurulacaktır.

## Veritabanı Şemasını Oluşturun

1. Aynı düzenleme ekranında **"Run NPM Script"** bölümüne gidin.

2. **Prisma Client'ı oluşturun:**
   - Script adı: `db:generate`
   - Çalıştırın

3. **Veritabanı şemasını uygulayın:**
   - Script adı: `db:push`
   - Bu komut veritabanınızda gerekli tabloları oluşturacaktır

4. **İlk admin kullanıcısını oluşturun (opsiyonel):**
   - Script adı: `db:seed`
   - Bu komut admin paneli için ilk kullanıcıyı oluşturur

## Build – Uygulamayı Derleyin

**ÖNEMLİ:** Sunucuda bellek yetersizliği hatası alıyorsanız, build'i yerel bilgisayarınızda yapın.

### Yöntem 1: Yerel Bilgisayarda Build (Önerilen - Bellek Sorunu Varsa)

1. **Yerel bilgisayarınızda proje klasörüne gidin:**
   ```bash
   cd siteyeniyol
   ```

2. **Bağımlılıkları yükleyin (eğer yüklemediyseniz):**
   ```bash
   npm install
   ```

3. **Prisma Client'ı oluşturun:**
   ```bash
   npm run db:generate
   ```

4. **Uygulamayı build edin:**
   ```bash
   npm run build
   ```

5. **Build edilmiş dosyaları ZIP'e dahil edin:**
   - `.next` klasörünü ZIP'e dahil edin
   - `node_modules` klasörünü ZIP'e dahil etmeyin
   - `.env` dosyasını ZIP'e dahil etmeyin

6. **Yeni ZIP'i sunucuya yükleyin:**
   - ZIP'i `app` klasörüne çıkartın
   - Artık build yapmanıza gerek yok, direkt `npm start` çalıştırabilirsiniz

### Yöntem 2: Sunucuda Build (Bellek Yeterliyse)

1. Aynı düzenleme ekranında **"Run NPM Script"** veya terminal üzerinden build komutunu çalıştırın:
   - Script adı: `build`
   - Bu komut `next build` işlemini gerçekleştirecektir

2. Build işlemi tamamlandıktan sonra uygulama production modunda çalışmaya hazır olacaktır.

## Uygulamanın Çalıştığını Test Etme

Tarayıcınızı açarak uygulamanızın URL'sine gidin (Örneğin: `https://alanadiniz.com`). Eğer uygulama başarıyla çalışıyorsa, işlem tamamlanmıştır.

## Sonuç

Artık cPanel üzerinden Node.js uygulamanızı başarıyla deploy ettiniz. Bu rehberi kullanarak farklı projelerinizi de kolayca sunucuya yükleyebilirsiniz. Eğer sorun yaşarsanız, destek ekibimizle iletişime geçebilirsiniz.
