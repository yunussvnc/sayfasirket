import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// İçerik dosyası yolu
const contentFilePath = path.join(process.cwd(), "data", "content.json");

// İçerik yapısı tipi
interface Content {
  [key: string]: any;
}

// GET: Tüm içerikleri getir
export async function GET() {
  try {
    if (fs.existsSync(contentFilePath)) {
      const fileContent = fs.readFileSync(contentFilePath, "utf-8");
      const content = JSON.parse(fileContent);
      return NextResponse.json(content);
    }
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json(
      { error: "İçerik yüklenirken hata oluştu" },
      { status: 500 }
    );
  }
}

// POST: İçerik güncelle veya oluştur
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pageId, content } = body;

    // data klasörünü oluştur (yoksa)
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Mevcut içeriği oku veya yeni oluştur
    let allContent: Content = {};
    if (fs.existsSync(contentFilePath)) {
      const fileContent = fs.readFileSync(contentFilePath, "utf-8");
      allContent = JSON.parse(fileContent);
    }

    // İçeriği güncelle
    allContent[pageId] = content;

    // Dosyaya kaydet
    fs.writeFileSync(contentFilePath, JSON.stringify(allContent, null, 2));

    return NextResponse.json({ success: true, message: "İçerik kaydedildi" });
  } catch (error) {
    return NextResponse.json(
      { error: "İçerik kaydedilirken hata oluştu" },
      { status: 500 }
    );
  }
}

// DELETE: İçerik sil
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pageId = searchParams.get("pageId");

    if (!pageId) {
      return NextResponse.json(
        { error: "pageId gerekli" },
        { status: 400 }
      );
    }

    if (fs.existsSync(contentFilePath)) {
      const fileContent = fs.readFileSync(contentFilePath, "utf-8");
      const allContent: Content = JSON.parse(fileContent);

      delete allContent[pageId];

      fs.writeFileSync(contentFilePath, JSON.stringify(allContent, null, 2));
    }

    return NextResponse.json({ success: true, message: "İçerik silindi" });
  } catch (error) {
    return NextResponse.json(
      { error: "İçerik silinirken hata oluştu" },
      { status: 500 }
    );
  }
}

