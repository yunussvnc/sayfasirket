import { NextRequest } from "next/server";
import { jwtVerify, SignJWT } from "jose";
import { AdminUser } from "./resource-service";

const encoder = new TextEncoder();
const JWT_SECRET =
    process.env.ADMIN_JWT_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "fallback-admin-secret-change-me";
const SECRET_KEY = encoder.encode(JWT_SECRET);
const ISSUER = "neokreatif-admin";

export async function createAdminToken(payload: AdminUser, expiresIn = "2h") {
    return new SignJWT({
        sub: payload.id,
        role: payload.role,
        username: payload.username,
    })
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setIssuedAt()
        .setIssuer(ISSUER)
        .setExpirationTime(expiresIn)
        .sign(SECRET_KEY);
}

export async function authenticateRequest(request: NextRequest) {
    const header = request.headers.get("authorization");
    if (!header || !header.startsWith("Bearer ")) {
        return null;
    }

    const token = header.replace("Bearer ", "").trim();

    try {
        const result = await jwtVerify(token, SECRET_KEY, { issuer: ISSUER });
        return {
            id: result.payload.sub as string,
            username: (result.payload.username as string) ?? "admin",
            role: (result.payload.role as string) ?? "admin",
        };
    } catch {
        return null;
    }
}

