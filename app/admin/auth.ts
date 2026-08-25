import { env } from "cloudflare:workers";
import { notFound } from "next/navigation";
import { requireChatGPTUser } from "../chatgpt-auth";

/**
 * Requires both a ChatGPT identity and an explicit CMS administrator entry.
 * Keep this check server-side and reuse it from every future CMS page, action
 * and API route.
 */
export async function requireCmsAdmin() {
  const user = await requireChatGPTUser("/admin");
  const allowedEmails = getAllowedAdminEmails();

  if (!allowedEmails.has(user.email.toLowerCase())) {
    notFound();
  }

  return user;
}

function getAllowedAdminEmails(): Set<string> {
  const allowedEmails = new Set(
    String(env.CMS_ADMIN_EMAILS ?? "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );

  // Matches the local-only identity in chatgpt-auth.ts. Production must always
  // use the explicitly configured CMS_ADMIN_EMAILS secret.
  if (process.env.NODE_ENV === "development") {
    allowedEmails.add("admin@local.test");
  }

  return allowedEmails;
}
