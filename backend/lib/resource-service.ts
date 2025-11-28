import { ContentStatus } from "@prisma/client";
import { prisma } from "./prisma";
import { AdminResource } from "./resource-config";

const RESOURCE_MODELS: Record<AdminResource, any> = {
    pages: prisma.page,
    posts: prisma.blogPost,
    media_assets: prisma.mediaAsset,
    site_settings: prisma.siteSetting,
};

const JSON_FIELDS: Record<AdminResource, string[]> = {
    pages: ["blocks", "meta"],
    posts: ["blocks", "hero", "meta"],
    media_assets: ["variants", "metadata"],
    site_settings: ["value"],
};

const ARRAY_FIELDS: Record<AdminResource, string[]> = {
    pages: [],
    posts: ["tags"],
    media_assets: ["tags"],
    site_settings: [],
};

const DATE_FIELDS: Record<AdminResource, string[]> = {
    pages: ["publishedAt"],
    posts: ["publishedAt"],
    media_assets: ["publishedAt"],
    site_settings: ["publishedAt"],
};

export interface AdminUser {
    id: string;
    username: string;
    role: string;
}

export function getResourceModel(resource: AdminResource) {
    return RESOURCE_MODELS[resource];
}

export function getJsonFields(resource: AdminResource) {
    return JSON_FIELDS[resource] ?? [];
}

export function getArrayFields(resource: AdminResource) {
    return ARRAY_FIELDS[resource] ?? [];
}

export function normalizeResourcePayload(
    resource: AdminResource,
    payload: Record<string, any>,
    user?: AdminUser | null
) {
    const normalized: Record<string, any> = {};
    const jsonFields = JSON_FIELDS[resource] ?? [];
    const arrayFields = ARRAY_FIELDS[resource] ?? [];
    const dateFields = DATE_FIELDS[resource] ?? [];

    Object.entries(payload).forEach(([key, value]) => {
        if (value === undefined) {
            return;
        }

        if (jsonFields.includes(key)) {
            normalized[key] = toJsonValue(value);
            return;
        }

        if (arrayFields.includes(key)) {
            normalized[key] = toArrayValue(value);
            return;
        }

        if (dateFields.includes(key)) {
            normalized[key] = value ? new Date(value) : null;
            return;
        }

        normalized[key] = value;
    });

    if (!normalized.status) {
        normalized.status = ContentStatus.draft;
    }

    if (user?.username) {
        normalized.updatedBy = user.username;
        if (!payload.id) {
            normalized.createdBy = user.username;
        }
    }

    return normalized;
}

function toJsonValue(value: unknown) {
    if (value === null || value === undefined || value === "") {
        return null;
    }

    if (typeof value === "string") {
        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    }

    return value;
}

function toArrayValue(value: unknown) {
    if (Array.isArray(value)) {
        return value;
    }

    if (typeof value === "string") {
        return value
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
    }

    return [];
}

export async function buildStatusStats(resource: AdminResource) {
    const model = getResourceModel(resource);

    const [total, published, draft] = await Promise.all([
        model.count(),
        model.count({ where: { status: ContentStatus.published } }),
        model.count({ where: { status: ContentStatus.draft } }),
    ]);

    return { total, published, draft };
}

