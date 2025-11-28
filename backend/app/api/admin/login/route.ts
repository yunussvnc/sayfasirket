import { NextRequest, NextResponse } from "next/server";
import { authenticateAdmin } from "@/lib/auth";
import { createAdminToken } from "@/lib/server-auth";

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json();

        if (!username || !password) {
            return NextResponse.json({ error: "Kullanıcı adı ve şifre gerekli" }, { status: 400 });
        }

        const admin = await authenticateAdmin(username, password);

        if (!admin) {
            return NextResponse.json({ error: "Kullanıcı adı veya şifre hatalı" }, { status: 401 });
        }

        const token = await createAdminToken({
            id: admin.id,
            username: admin.username,
            role: admin.role,
        });

        return NextResponse.json({
            token,
            expiresIn: 7200,
            user: {
                id: admin.id,
                username: admin.username,
                email: admin.email,
                role: admin.role,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
    }
}

