import { createClient } from 'pexels';
import * as fs from 'fs';
import * as path from 'path';
import { createWriteStream } from 'fs';
import https from 'https';
import { config } from 'dotenv';

// .env dosyasını yükle
config({ path: path.join(process.cwd(), '.env') });
config({ path: path.join(process.cwd(), '.env.local') });

// Pexels API key - bu değeri .env veya .env.local dosyasından alacak
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || '';

if (!PEXELS_API_KEY) {
  console.error('PEXELS_API_KEY environment variable bulunamadı!');
  console.error('Lütfen .env.local dosyasına PEXELS_API_KEY=your_api_key ekleyin');
  console.error('API key almak için: https://www.pexels.com/api/');
  process.exit(1);
}

const client = createClient(PEXELS_API_KEY);
const imagesDir = path.join(process.cwd(), 'public', 'images');

// İndirilecek resimler ve arama terimleri
const imagesToDownload = [
  {
    filename: 'service-detail_sidebar.png',
    query: 'business office team collaboration',
    orientation: 'portrait' as const,
    size: 'medium' as const,
    description: 'Sidebar için iş ekibi/office görseli'
  },
  {
    filename: 'service-detail.jpg',
    query: 'digital marketing data analytics dashboard',
    orientation: 'portrait' as const,
    size: 'large' as const,
    description: 'FAQ yanı için dijital pazarlama/analitik görseli'
  },
  {
    filename: 'service-detail_deco.png',
    query: 'abstract geometric blue pattern',
    orientation: 'landscape' as const,
    size: 'large' as const,
    description: 'CTA arka plan dekorasyon görseli'
  }
];

async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Redirect takip et
        https.get(response.headers.location!, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', (err) => {
          fs.unlinkSync(filepath);
          reject(err);
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

async function searchAndDownload(query: string, orientation: 'portrait' | 'landscape' | 'square', size: 'large' | 'medium' | 'small', filename: string, description: string) {
  try {
    console.log(`\n🔍 "${description}" için arıyorum: "${query}"`);
    
    const photos = await client.photos.search({
      query,
      orientation,
      size,
      per_page: 10
    });

    if ('photos' in photos && photos.photos.length > 0) {
      // İlk sonucu al
      const photo = photos.photos[0];
      const imageUrl = size === 'large' 
        ? photo.src.large2x || photo.src.large 
        : photo.src.medium;
      
      const filepath = path.join(imagesDir, filename);
      
      console.log(`📥 İndiriliyor: ${filename}`);
      console.log(`   Kaynak: ${photo.photographer} - ${photo.url}`);
      
      await downloadImage(imageUrl, filepath);
      
      console.log(`✅ Başarıyla kaydedildi: ${filename}`);
      return true;
    } else {
      console.error(`❌ Sonuç bulunamadı: ${query}`);
      return false;
    }
  } catch (error: any) {
    console.error(`❌ Hata oluştu (${filename}):`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Eksik resimleri Pexels\'tan indirmeye başlıyorum...\n');
  
  // Images dizinini kontrol et
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log(`📁 Dizin oluşturuldu: ${imagesDir}`);
  }

  let successCount = 0;
  let failCount = 0;

  for (const image of imagesToDownload) {
    const filepath = path.join(imagesDir, image.filename);
    
    // Dosya zaten varsa atla
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  Zaten mevcut: ${image.filename}`);
      continue;
    }

    const success = await searchAndDownload(
      image.query,
      image.orientation,
      image.size,
      image.filename,
      image.description
    );

    if (success) {
      successCount++;
    } else {
      failCount++;
    }

    // Rate limiting için kısa bir bekleme
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('\n📊 Özet:');
  console.log(`   ✅ Başarılı: ${successCount}`);
  console.log(`   ❌ Başarısız: ${failCount}`);
  console.log(`\n🎉 Tamamlandı!`);
}

main().catch(console.error);

