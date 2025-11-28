import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

export async function createAdminUser(username: string, password: string, email?: string, role = "admin") {
    const hashedPassword = await hashPassword(password);

    return prisma.admin.create({
        data: {
            username,
            password: hashedPassword,
            email,
            role,
        },
    });
}

export async function authenticateAdmin(username: string, password: string) {
    const admin = await prisma.admin.findUnique({
        where: { username },
    });

    if (!admin) {
        return null;
    }

    const isValid = await verifyPassword(password, admin.password);

    if (!isValid) {
        return null;
    }

    return admin;
}

