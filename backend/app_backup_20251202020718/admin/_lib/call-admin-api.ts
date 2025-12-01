"use client";

import { AdminResource } from "@/lib/resource-config";

export type ApiMethod = "GET" | "POST" | "PATCH" | "DELETE";
export type RequestBody = Record<string, string | number | boolean | null | undefined>;

export async function callAdminApi<T>(
    resource: AdminResource,
    method: ApiMethod = "GET",
    body?: RequestBody,
    token?: string
): Promise<T> {
    const session = typeof window !== "undefined" ? readSessionFromStorage() : null;
    const authToken = token || session?.token;

    const url = new URL(`/api/admin/resources`, window.location.origin);
    url.searchParams.set("resource", resource);

    if (method === "GET" && body) {
        Object.entries(body).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.set(key, String(value));
            }
        });
    } else if (method === "DELETE" && body && typeof body.id === "string") {
        url.searchParams.set("id", body.id);
    }

    const response = await fetch(url.toString(), {
        method,
        headers: {
            "Content-Type": "application/json",
            ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        },
        body: method === "GET" ? undefined : JSON.stringify(body),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.error || "API isteği başarısız");
    }

    return (await response.json()) as T;
}

interface AdminSessionStorage {
    token: string;
    user: { id: string; username: string; role: string };
}

export function persistAdminSession(session: AdminSessionStorage, remember: boolean) {
    if (typeof window === "undefined") return;
    localStorage.setItem("adminSession", JSON.stringify(session));
    sessionStorage.setItem("adminAuth", "true"); // eski sayfalar için geriye dönük destek
}

export function clearAdminSession() {
    if (typeof window === "undefined") return;
    localStorage.removeItem("adminSession");
    sessionStorage.removeItem("adminAuth");
}

export function readSessionFromStorage(): AdminSessionStorage | null {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem("adminSession");
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

