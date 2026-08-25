"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { getDb } from "../../../db";
import { posts } from "../../../db/schema";
import { requireCmsAdmin } from "../auth";

const validStatuses = new Set(["draft", "published", "archived"]);
const validArt = new Set([
  "network", "growth", "people", "impact", "portfolio", "partnership",
]);

export async function createPost(formData: FormData) {
  await requireCmsAdmin();
  const values = readPostValues(formData);

  await getDb().insert(posts).values({
    ...values,
    publishedAt: values.status === "published" ? new Date().toISOString() : null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  redirect("/admin");
}

export async function updatePost(id: number, formData: FormData) {
  await requireCmsAdmin();
  const values = readPostValues(formData);
  const existing = await getDb()
    .select({ publishedAt: posts.publishedAt })
    .from(posts)
    .where(eq(posts.id, id))
    .get();

  if (!existing) redirect("/admin");

  await getDb()
    .update(posts)
    .set({
      ...values,
      publishedAt:
        values.status === "published"
          ? existing.publishedAt ?? new Date().toISOString()
          : null,
      updatedAt: new Date().toISOString(),
    })
    .where(eq(posts.id, id));
  redirect("/admin");
}

function readPostValues(formData: FormData) {
  const title = value(formData, "title");
  const status = value(formData, "status");
  const art = value(formData, "art");
  const readingMinutes = Number(value(formData, "readingMinutes"));

  if (!title || !validStatuses.has(status) || !validArt.has(art) || !Number.isInteger(readingMinutes) || readingMinutes < 1) {
    throw new Error("Dados de notícia inválidos.");
  }

  return {
    title,
    slug: slugify(value(formData, "slug") || title),
    excerpt: value(formData, "excerpt"),
    content: value(formData, "content"),
    categoryId: numberOrNull(value(formData, "categoryId")),
    status: status as "draft" | "published" | "archived",
    art: art as "network" | "growth" | "people" | "impact" | "portfolio" | "partnership",
    readingMinutes,
  };
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
