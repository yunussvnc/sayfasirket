import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🔍 Supabase bağlantısı kontrol ediliyor...\n");

  try {
    // Veritabanı bağlantısını test et
    await prisma.$connect();
    console.log("✅ Veritabanı bağlantısı başarılı!\n");

    // Tabloları say
    const adminCount = await prisma.admin.count();
    const pageCount = await prisma.page.count();
    const serviceCount = await prisma.service.count();
    const blogCount = await prisma.blogPost.count();
    const messageCount = await prisma.message.count();
    const imageCount = await prisma.image.count();

    console.log("📊 Veritabanı İstatistikleri:");
    console.log(`   👤 Admin: ${adminCount}`);
    console.log(`   📄 Sayfa: ${pageCount}`);
    console.log(`   🛠️  Hizmet: ${serviceCount}`);
    console.log(`   📝 Blog: ${blogCount}`);
    console.log(`   📧 Mesaj: ${messageCount}`);
    console.log(`   🖼️  Görsel: ${imageCount}\n`);

    if (adminCount === 0) {
      console.log("⚠️  Henüz admin kullanıcısı yok!");
      console.log("   Çalıştırın: npm run db:seed\n");
    }

    console.log("✅ Veritabanı hazır ve çalışıyor!");
  } catch (error) {
    console.error("❌ Veritabanı bağlantı hatası:", error);
    console.log("\n🔧 Kontrol edin:");
    console.log("   1. .env dosyasında DATABASE_URL doğru mu?");
    console.log("   2. Supabase projeniz aktif mi?");
    console.log("   3. Connection string'de şifre doğru mu?");
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error("❌ Hata:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

