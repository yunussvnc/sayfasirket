import { NextRequest, NextResponse } from "next/server";
import { verifyAdminUser } from "@/lib/auth";

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json();

        if (!username || !password) {
            return NextResponse.json(
                { error: "Kullanıcı adı ve şifre gerekli" },
                { status: 400 }
            );
        }

        // Veritabanından kullanıcıyı doğrula
        const isValid = await verifyAdminUser(username, password);

        if (!isValid) {
            return NextResponse.json(
                { error: "Kullanıcı adı veya şifre hatalı" },
                { status: 401 }
            );
        }

        // Başarılı giriş - Session veya JWT token oluşturulabilir
        return NextResponse.json(
            { success: true, message: "Giriş başarılı" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { error: "Sunucu hatası" },
            { status: 500 }
        );
    }
}

