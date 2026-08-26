"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { getDb } from "../../db";
import { categories, cmsProfiles, tags } from "../../db/schema";
import { requireCmsAdmin } from "./auth";
import { hashPassword } from "./crypto";

const slugify = (v: string) =>
  v
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Category actions
export async function createCategory(data: FormData) {
  await requireCmsAdmin();
  const name = String(data.get("name") ?? "").trim();
  if (!name) throw new Error("Nome obrigatório");
  const description = String(data.get("description") ?? "").trim();
  const db = await getDb();
  await db.insert(categories).values({
    name,
    slug: slugify(name),
    description: description || null,
  });
  redirect("/admin/tags");
}

export async function updateCategory(id: number, data: FormData) {
  await requireCmsAdmin();
  const name = String(data.get("name") ?? "").trim();
  if (!name) throw new Error("Nome obrigatório");
  const description = String(data.get("description") ?? "").trim();
  const db = await getDb();
  await db
    .update(categories)
    .set({
      name,
      slug: slugify(name),
      description: description || null,
    })
    .where(eq(categories.id, id));
  redirect("/admin/tags");
}

export async function deleteCategory(id: number) {
  await requireCmsAdmin();
  const db = await getDb();
  await db.delete(categories).where(eq(categories.id, id));
  redirect("/admin/tags");
}

// Tag actions
export async function createTag(data: FormData) {
  await requireCmsAdmin();
  const name = String(data.get("name") ?? "").trim();
  if (!name) throw new Error("Nome obrigatório");
  const db = await getDb();
  await db.insert(tags).values({
    name,
    slug: slugify(name),
    color: String(data.get("color") ?? "blue"),
  });
  redirect("/admin/tags");
}

export async function deleteTag(id: number) {
  await requireCmsAdmin();
  const db = await getDb();
  await db.delete(tags).where(eq(tags.id, id));
  redirect("/admin/tags");
}

export async function updateTag(id: number, data: FormData) {
  await requireCmsAdmin();
  const name = String(data.get("name") ?? "").trim();
  if (!name) throw new Error("Nome obrigatório");
  const db = await getDb();
  await db
    .update(tags)
    .set({
      name,
      slug: slugify(name),
      color: String(data.get("color") ?? "blue"),
    })
    .where(eq(tags.id, id));
  redirect("/admin/tags");
}

// Profile actions
export async function createProfile(data: FormData) {
  await requireCmsAdmin();
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim().toLowerCase();
  const password = String(data.get("password") ?? "").trim();
  if (!name || !email) throw new Error("Nome e E-mail são obrigatórios");
  if (!password || password.length < 12) throw new Error("A senha deve ter pelo menos 12 caracteres");

  const { hash, salt } = await hashPassword(password);
  const db = await getDb();
  await db.insert(cmsProfiles).values({
    name,
    email,
    passwordHash: hash,
    passwordSalt: salt,
    role: data.get("role") === "admin" ? "admin" : "editor",
    status: (data.get("status") as "active" | "inactive") || "active",
  });
  redirect("/admin/profiles");
}

export async function toggleProfile(id: number, status: "active" | "inactive") {
  await requireCmsAdmin();
  const db = await getDb();
  await db
    .update(cmsProfiles)
    .set({ status, updatedAt: new Date().toISOString() })
    .where(eq(cmsProfiles.id, id));
  redirect("/admin/profiles");
}

export async function updateProfile(id: number, data: FormData) {
  await requireCmsAdmin();
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim().toLowerCase();
  const password = String(data.get("password") ?? "").trim();
  if (!name || !email) throw new Error("Dados obrigatórios");

  const db = await getDb();
  const updateData: Record<string, any> = {
    name,
    email,
    role: data.get("role") === "admin" ? "admin" : "editor",
    status: data.get("status") === "inactive" ? "inactive" : "active",
    updatedAt: new Date().toISOString(),
  };

  if (password && password.length < 12) throw new Error("A senha deve ter pelo menos 12 caracteres");
  if (password) {
    const { hash, salt } = await hashPassword(password);
    updateData.passwordHash = hash;
    updateData.passwordSalt = salt;
  }

  await db
    .update(cmsProfiles)
    .set(updateData)
    .where(eq(cmsProfiles.id, id));
  redirect("/admin/profiles");
}
