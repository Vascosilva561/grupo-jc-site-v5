"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { getDb } from "../../db";
import { categories, cmsProfiles } from "../../db/schema";
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
  const slug = slugify(name);
  if (!slug) throw new Error("O nome deve conter letras ou números.");
  if ((await db.select({ id: categories.id }).from(categories).where(eq(categories.slug, slug)).limit(1))[0]) throw new Error("Já existe uma categoria com este nome.");
  await db.insert(categories).values({
    name,
    slug,
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
  const slug = slugify(name);
  if (!slug) throw new Error("O nome deve conter letras ou números.");
  const [duplicate] = await db.select({ id: categories.id }).from(categories).where(eq(categories.slug, slug)).limit(1);
  if (duplicate && duplicate.id !== id) throw new Error("Já existe uma categoria com este nome.");
  await db
    .update(categories)
    .set({
      name,
      slug,
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
  if ((await db.select({ id: cmsProfiles.id }).from(cmsProfiles).where(eq(cmsProfiles.email, email)).limit(1))[0]) throw new Error("Já existe um perfil com este e-mail.");
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
  const actor = await requireCmsAdmin();
  const db = await getDb();
  const [target] = await db.select({ id: cmsProfiles.id, role: cmsProfiles.role, status: cmsProfiles.status }).from(cmsProfiles).where(eq(cmsProfiles.id, id)).limit(1);
  if (!target) throw new Error("Perfil não encontrado.");
  if (status === "inactive" && target.role === "admin" && target.status === "active") {
    const activeAdmins = await db.select({ id: cmsProfiles.id }).from(cmsProfiles).where(eq(cmsProfiles.role, "admin"));
    if (activeAdmins.length <= 1) throw new Error("Não é possível desactivar o último administrador.");
  }
  if (status === "inactive" && actor.id === id) throw new Error("Não pode desactivar a sua própria conta.");
  await db
    .update(cmsProfiles)
    .set({ status, updatedAt: new Date().toISOString() })
    .where(eq(cmsProfiles.id, id));
  redirect("/admin/profiles");
}

export async function deleteProfile(id: number) {
  const actor = await requireCmsAdmin();
  const db = await getDb();
  const [target] = await db.select({ id: cmsProfiles.id, role: cmsProfiles.role, status: cmsProfiles.status }).from(cmsProfiles).where(eq(cmsProfiles.id, id)).limit(1);
  if (!target) throw new Error("Perfil não encontrado.");
  if (actor.id === id) throw new Error("Não pode eliminar a sua própria conta.");
  if (target.role === "admin" && target.status === "active") {
    const admins = await db.select({ id: cmsProfiles.id }).from(cmsProfiles).where(eq(cmsProfiles.role, "admin"));
    if (admins.length <= 1) throw new Error("Não é possível eliminar o último administrador.");
  }
  await db.delete(cmsProfiles).where(eq(cmsProfiles.id, id));
  redirect("/admin/profiles");
}

export async function updateProfile(id: number, data: FormData) {
  await requireCmsAdmin();
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim().toLowerCase();
  const password = String(data.get("password") ?? "").trim();
  if (!name || !email) throw new Error("Dados obrigatórios");

  const db = await getDb();
  const [duplicate] = await db.select({ id: cmsProfiles.id }).from(cmsProfiles).where(eq(cmsProfiles.email, email)).limit(1);
  if (duplicate && duplicate.id !== id) throw new Error("Já existe um perfil com este e-mail.");
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
