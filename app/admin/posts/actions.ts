"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { env } from "cloudflare:workers";
import { getDb } from "../../../db";
import { posts } from "../../../db/schema";
import { requireCmsAdmin, requireCmsUser } from "../auth";

const validStatuses = new Set(["draft", "published", "scheduled", "archived"]);
const validArt = new Set([
  "network", "growth", "people", "impact", "portfolio", "partnership",
]);

export async function createPost(formData: FormData) {
  const user = await requireCmsUser();
  const values = await readPostValues(formData, user.displayName);
  const db = await getDb();

  await db.insert(posts).values({
    ...values,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  redirect("/admin/posts");
}

export async function updatePost(id: number, formData: FormData) {
  const user = await requireCmsUser();
  const values = await readPostValues(formData, user.displayName);
  const db = await getDb();
  const existing = await db
    .select({ publishedAt: posts.publishedAt, authorName: posts.authorName })
    .from(posts)
    .where(eq(posts.id, id))
    .get();

  if (!existing) redirect("/admin/posts");

  await db
    .update(posts)
    .set({
      ...values,
      publishedAt: values.publishedAt ?? (values.status === "published" ? existing.publishedAt ?? new Date().toISOString() : null),
      updatedAt: new Date().toISOString(),
    })
    .where(eq(posts.id, id));
  redirect("/admin/posts");
}

export async function deletePost(id: number) {
  await requireCmsAdmin();
  const db = await getDb();
  await db.delete(posts).where(eq(posts.id, id));
  redirect("/admin/posts");
}

async function readPostValues(formData: FormData, defaultAuthor: string) {
  const title = value(formData, "title");
  const status = value(formData, "status");
  const art = value(formData, "art") || "network";
  const readingMinutes = Number(value(formData, "readingMinutes")) || 3;
  const authorName = value(formData, "authorName") || defaultAuthor || "Administrador";
  const publishedAtRaw = value(formData, "publishedAt");
  const featuredImageUrl = await resolveFeaturedImage(formData);
  const featuredImageAlt = value(formData, "featuredImageAlt") || null;

  if (!title || !validStatuses.has(status) || !validArt.has(art) || !Number.isInteger(readingMinutes) || readingMinutes < 1) {
    throw new Error("Dados de notícia inválidos.");
  }

  let publishedAt: string | null = null;
  if (publishedAtRaw) {
    const parsed = new Date(publishedAtRaw);
    if (!isNaN(parsed.getTime())) {
      publishedAt = parsed.toISOString();
    }
  } else if (status === "published") {
    publishedAt = new Date().toISOString();
  }

  return {
    title,
    slug: slugify(value(formData, "slug") || title),
    excerpt: value(formData, "excerpt"),
    content: value(formData, "content"),
    categoryId: numberOrNull(value(formData, "categoryId")),
    authorName,
    featuredImageUrl,
    featuredImageAlt,
    status: status as "draft" | "published" | "scheduled" | "archived",
    art: art as "network" | "growth" | "people" | "impact" | "portfolio" | "partnership",
    readingMinutes,
    publishedAt,
  };
}

async function resolveFeaturedImage(formData: FormData): Promise<string | null> {
  const suppliedUrl = value(formData, "featuredImageUrl");
  const file = formData.get("featuredImageFile");
  if (!(file instanceof File) || file.size === 0) return suppliedUrl || null;
  if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) {
    throw new Error("A imagem deve ser válida e ter no máximo 5MB.");
  }
  const bucket = (env as Record<string, any>).MEDIA;
  if (!bucket) {
    throw new Error("O armazenamento de imagens ainda não está configurado. Utilize uma URL de imagem ou configure o bucket MEDIA.");
  }
  const extension = file.type.split("/")[1]?.replace(/[^a-z0-9]/gi, "") || "bin";
  const key = `news/${crypto.randomUUID()}.${extension}`;
  await bucket.put(key, file.stream(), { httpMetadata: { contentType: file.type } });
  return `/media/${key}`;
}

function value(formData: FormData, name: string): string {
  const entry = formData.get(name);
  return typeof entry === "string" ? entry.trim() : "";
}

function numberOrNull(input: string): number | null {
  const parsed = Number(input);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function slugify(input: string): string {
  return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
