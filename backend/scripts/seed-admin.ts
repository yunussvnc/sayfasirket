import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Admin kullanıcısı oluşturuluyor...");

    // Varsayılan admin kullanıcısı
    const adminUsername = process.env.ADMIN_USERNAME || "admin";
    const adminPassword = process.env.ADMIN_PASSWORD || "neokreatif3434";
    const adminEmail = process.env.ADMIN_EMAIL || "admin@neokreatif.com";

    // Şifreyi hash'le
    const hashedPassword = await bcrypt.hash(adminPassword, 12);

    // Admin kullanıcısını oluştur veya güncelle
    const adminRole = process.env.ADMIN_ROLE || "admin";

    const admin = await prisma.admin.upsert({
        where: { username: adminUsername },
        update: {
            password: hashedPassword,
            email: adminEmail,
            role: adminRole,
        },
        create: {
            username: adminUsername,
            password: hashedPassword,
            email: adminEmail,
            role: adminRole,
        },
    });

    console.log("✅ Admin kullanıcısı oluşturuldu:");
    console.log(`   Kullanıcı Adı: ${admin.username}`);
    console.log(`   Email: ${admin.email}`);
    console.log(`   ID: ${admin.id}`);
    console.log("\n⚠️  ÖNEMLİ: Şifreyi güvenli bir yerde saklayın!");
}

main()
    .catch((e) => {
        console.error("❌ Hata:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

