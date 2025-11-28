import { NextRequest, NextResponse } from "next/server";
import { ContentStatus } from "@prisma/client";
import { RESOURCE_CONFIG, AdminResource } from "@/lib/resource-config";
import {
    AdminUser,
    buildStatusStats,
    getArrayFields,
    getResourceModel,
    normalizeResourcePayload,
} from "@/lib/resource-service";
import { authenticateRequest } from "@/lib/server-auth";
import { logActivity } from "@/lib/activity-log";

export async function GET(request: NextRequest) {
    const resource = resolveResource(request);
    if (!resource) {
        return NextResponse.json({ error: "resource param gerekli" }, { status: 400 });
    }

    const config = RESOURCE_CONFIG[resource];
    const user = await authenticateRequest(request);

    if (!config.allowPublicRead && !user) {
        return NextResponse.json({ error: "Yetkilendirme başarısız" }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const searchTerm = searchParams.get("search");
    const statusFilter = searchParams.get("status") as ContentStatus | null;

    const where: Record<string, any> = {};

    if (!user && config.allowPublicRead) {
        where.status = ContentStatus.published;
    } else if (statusFilter) {
        where.status = statusFilter;
    }

    if (searchTerm) {
        where.OR = buildSearchFilters(resource, searchTerm);
    }

    const model = getResourceModel(resource);
    const orderBy = config.orderBy ? { [config.orderBy.field]: config.orderBy.direction } : { updatedAt: "desc" };
    const data = await model.findMany({
        where,
        orderBy,
    });
    const stats = await buildStatusStats(resource);

    return NextResponse.json({ data, stats, config });
}

export async function POST(request: NextRequest) {
    const resource = resolveResource(request);
    if (!resource) {
        return NextResponse.json({ error: "resource param gerekli" }, { status: 400 });
    }

    const user = await authenticateRequest(request);

    if (!user || user.role !== "admin") {
        return NextResponse.json({ error: "Yetki yok" }, { status: 401 });
    }

    const payload = await request.json();
    const model = getResourceModel(resource);
    const data = normalizeResourcePayload(resource, payload, user);

    const created = await model.create({ data });

    await logActivity({
        resource,
        action: "create",
        recordId: created.id,
        diff: data,
        request,
        user,
    });

    return NextResponse.json({ data: created }, { status: 201 });
}

export async function PATCH(request: NextRequest) {
    const resource = resolveResource(request);
    if (!resource) {
        return NextResponse.json({ error: "resource param gerekli" }, { status: 400 });
    }

    const user = await authenticateRequest(request);
    if (!user || user.role !== "admin") {
        return NextResponse.json({ error: "Yetki yok" }, { status: 401 });
    }

    const payload = await request.json();
    const { id, ...rest } = payload;

    if (!id) {
        return NextResponse.json({ error: "id alanı gerekli" }, { status: 400 });
    }

    const model = getResourceModel(resource);
    const data = normalizeResourcePayload(resource, rest, user);

    const updated = await model.update({
        where: { id },
        data,
    });

    await logActivity({
        resource,
        action: "update",
        recordId: id,
        diff: data,
        request,
        user,
    });

    return NextResponse.json({ data: updated });
}

export async function DELETE(request: NextRequest) {
    const resource = resolveResource(request);
    if (!resource) {
        return NextResponse.json({ error: "resource param gerekli" }, { status: 400 });
    }

    const user = await authenticateRequest(request);
    if (!user || user.role !== "admin") {
        return NextResponse.json({ error: "Yetki yok" }, { status: 401 });
    }

    const { searchParams } = request.nextUrl;
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ error: "id param gerekli" }, { status: 400 });
    }

    const model = getResourceModel(resource);
    await model.delete({ where: { id } });

    await logActivity({
        resource,
        action: "delete",
        recordId: id,
        request,
        user,
    });

    return NextResponse.json({ success: true });
}

function resolveResource(request: NextRequest) {
    const resourceParam = request.nextUrl.searchParams.get("resource");
    if (!resourceParam) return null;
    if (["pages", "posts", "media_assets", "site_settings"].includes(resourceParam)) {
        return resourceParam as AdminResource;
    }
    return null;
}

function buildSearchFilters(resource: AdminResource, term: string) {
    const filters: Record<string, any>[] = [];
    const arrayFields = getArrayFields(resource);
    const searchable = RESOURCE_CONFIG[resource].searchableFields;

    searchable.forEach((field) => {
        if (arrayFields.includes(field)) {
            filters.push({ [field]: { has: term } });
        } else {
            filters.push({ [field]: { contains: term, mode: "insensitive" } });
        }
    });

    return filters;
}

