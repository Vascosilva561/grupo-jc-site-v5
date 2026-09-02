"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDb } from "../../db";
import { cmsProfiles } from "../../db/schema";
import {
  createSessionToken,
  verifyPassword,
  verifySessionToken,
} from "./crypto";

export type CmsUser = {
  id: number;
  displayName: string;
  email: string;
  role: "admin" | "editor";
};

const SESSION_COOKIE = "cms_session";

/**
 * Returns current authenticated CMS user from session cookie or null.
 */
export async function getCmsSession(): Promise<CmsUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (token) {
    const payload = await verifySessionToken(token);
    if (payload) {
      try {
        const db = await getDb();
        const profile = await db
          .select({
            id: cmsProfiles.id,
            name: cmsProfiles.name,
            email: cmsProfiles.email,
            role: cmsProfiles.role,
            status: cmsProfiles.status,
          })
          .from(cmsProfiles)
          .where(eq(cmsProfiles.id, payload.id))
          .limit(1)
          .then(([result]) => result);

        if (profile && profile.status === "active") {
          return {
            id: profile.id,
            displayName: profile.name,
            email: profile.email,
            role: profile.role as "admin" | "editor",
          };
        }
      } catch {
        // Never authorize a session when the account state cannot be checked.
        return null;
      }
    }
  }

  return null;
}

/**
 * Protects CMS pages and actions, requiring an active authenticated CMS user (admin or editor).
 */
export async function requireCmsUser(): Promise<CmsUser> {
  const user = await getCmsSession();
  if (!user) {
    redirect("/admin/login");
  }
  return user;
}

/**
 * Protects CMS administration pages and actions, strictly requiring the 'admin' role.
 * Editors attempting to access admin-only resources are redirected to the CMS home.
 */
export async function requireCmsAdmin(): Promise<CmsUser> {
  const user = await requireCmsUser();
  if (user.role !== "admin") {
    redirect("/admin");
  }
  return user;
}

export type LoginState = {
  error?: string;
  email?: string;
};

/**
 * Server action to authenticate a CMS user with email and password.
 */
export async function loginAction(
  prevState: LoginState | undefined,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Por favor, preencha o email e a senha.", email };
  }

  try {
    const db = await getDb();
    const profile = await db
      .select()
      .from(cmsProfiles)
      .where(eq(cmsProfiles.email, email))
      .limit(1)
      .then(([result]) => result);

    if (!profile) {
      return { error: "Email ou senha incorretos.", email };
    }

    if (profile.status !== "active") {
      return {
        error: "Esta conta está inativa. Contacte um administrador.",
        email,
      };
    }

    if (!profile.passwordHash || !profile.passwordSalt) {
      return {
        error:
          "Esta conta não possui senha definida. Contacte o administrador.",
        email,
      };
    }

    const isValid = await verifyPassword(
      password,
      profile.passwordHash,
      profile.passwordSalt,
    );

    if (!isValid) {
      return { error: "Email ou senha incorretos.", email };
    }

    const token = await createSessionToken({
      id: profile.id,
      email: profile.email,
      name: profile.name,
      role: profile.role,
    });

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, token, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });
  } catch (err: any) {
    return {
      error: err?.message || "Ocorreu um erro ao iniciar sessão.",
      email,
    };
  }

  redirect("/admin");
}

/**
 * Server action to sign out.
 */
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  redirect("/admin/login");
}

/** Creates the first administrator exactly once, protected by a deployment secret. */
export async function bootstrapAdminAction(formData: FormData) {
  const token = String(formData.get("setupToken") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  if (!process.env.CMS_SETUP_TOKEN || !timingSafeEqual(token, process.env.CMS_SETUP_TOKEN)) {
    throw new Error("Código de configuração inválido.");
  }
  if (!name || !email || password.length < 12) {
    throw new Error("Preencha os dados e utilize uma palavra-passe de pelo menos 12 caracteres.");
  }
  const db = await getDb();
  const existing = await db.select({ id: cmsProfiles.id }).from(cmsProfiles).limit(1);
  if (existing.length) redirect("/admin/login");
  const { hashPassword } = await import("./crypto");
  const { hash, salt } = await hashPassword(password);
  await db.insert(cmsProfiles).values({ name, email, passwordHash: hash, passwordSalt: salt, role: "admin", status: "active" });
  redirect("/admin/login");
}

function timingSafeEqual(left: string, right: string): boolean {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  return difference === 0;
}
