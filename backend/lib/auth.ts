import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

// Şifreyi hash'le
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
}

// Şifreyi doğrula
export async function verifyPassword(
    password: string,
    hashedPassword: string
): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

// Admin kullanıcı oluştur
export async function createAdminUser(
    username: string,
    password: string,
    email?: string
) {
    const hashedPassword = await hashPassword(password);

    return prisma.admin.create({
        data: {
            username,
            password: hashedPassword,
            email,
        },
    });
}

// Admin kullanıcı doğrula
export async function verifyAdminUser(
    username: string,
    password: string
): Promise<boolean> {
    const admin = await prisma.admin.findUnique({
        where: { username },
    });

    if (!admin) {
        return false;
    }

    return verifyPassword(password, admin.password);
}

