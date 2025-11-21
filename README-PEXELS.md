# Pexels Resim İndirme Kılavuzu

Bu projede eksik olan resimler otomatik olarak Pexels'tan indirilir.

## Kurulum Adımları

### 1. Pexels API Key Alma

1. [Pexels API](https://www.pexels.com/api/) sayfasına gidin
2. Ücretsiz hesap oluşturun veya giriş yapın
3. API Key'inizi kopyalayın

### 2. API Key'i Yapılandırma

Proje kök dizininde `.env.local` dosyası oluşturun (yoksa):

```bash
# .env.local
PEXELS_API_KEY=your_api_key_here
```

**Not:** `.env.local` dosyası git'e commit edilmemelidir (zaten .gitignore'da olmalı).

### 3. Resimleri İndirme

API key'i ekledikten sonra script'i çalıştırın:

```bash
npm run download-images
```

Bu script şu eksik resimleri otomatik olarak indirecek:
- `service-detail_sidebar.png` - Sidebar için iş ekibi/office görseli
- `service-detail.jpg` - FAQ yanı için dijital pazarlama/analitik görseli
- `service-detail_deco.png` - CTA arka plan dekorasyon görseli

## Script Nasıl Çalışıyor?

Script:
1. Pexels API'yi kullanarak uygun resimleri arar
2. İlgili anahtar kelimelerle arama yapar (iş, dijital pazarlama, dekorasyon vb.)
3. Bulunan resimleri `public/images/` klasörüne indirir
4. Zaten mevcut olan resimleri atlar

## Resim Arama Terimleri

- `service-detail_sidebar.png`: "business team office sidebar"
- `service-detail.jpg`: "digital marketing analytics dashboard"
- `service-detail_deco.png`: "abstract geometric pattern decoration"

## Sorun Giderme

### API Key Hatası
Eğer "PEXELS_API_KEY environment variable bulunamadı!" hatası alıyorsanız:
1. `.env.local` dosyasının proje kök dizininde olduğundan emin olun
2. API key'in doğru olduğundan emin olun
3. Dosyayı kaydettikten sonra script'i yeniden çalıştırın

### İndirme Hatası
Eğer resimler indirilemiyorsa:
1. İnternet bağlantınızı kontrol edin
2. Pexels API'nin çalıştığından emin olun
3. API key'in limitini kontrol edin (ücretsiz hesaplar için saatte 200 istek)

## Notlar

- Resimler ücretsiz ve telif hakkı gerektirmez
- İndirilen resimler `public/images/` klasörüne kaydedilir
- Script, zaten mevcut olan resimleri tekrar indirmez

