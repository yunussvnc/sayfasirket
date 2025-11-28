import { prisma } from "./prisma";
import { AdminResource } from "./resource-config";
import { AdminUser } from "./resource-service";

interface ActivityPayload {
    resource: AdminResource;
    action: "create" | "update" | "delete";
    recordId?: string;
    diff?: Record<string, any>;
    request?: Request;
    user?: AdminUser | null;
}

export async function logActivity({
    resource,
    action,
    recordId,
    diff,
    request,
    user,
}: ActivityPayload) {
    try {
        await prisma.activityLog.create({
            data: {
                resource,
                action,
                recordId,
                diff: diff ? serializeDiff(diff) : undefined,
                performedBy: user?.username ?? "system",
                ip: request ? request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? undefined : undefined,
                userAgent: request?.headers.get("user-agent") ?? undefined,
            },
        });
    } catch (error) {
        console.error("ActivityLog error", error);
    }
}

function serializeDiff(diff: Record<string, any>) {
    return JSON.parse(
        JSON.stringify(diff, (_key, value) => {
            if (value instanceof Date) {
                return value.toISOString();
            }
            return value;
        })
    );
}

