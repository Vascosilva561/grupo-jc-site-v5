import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";
import { newsArticles } from "../app/noticias/data";

let developmentSetup: Promise<void> | undefined;

export async function getDb() {
  if (!env.DB) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Set the `d1` field in .openai/hosting.json to `DB` or let your control plane inject the real binding values before using the database."
    );
  }

  if (process.env.NODE_ENV === "development") {
    developmentSetup ??= initializeDevelopmentDatabase();
    await developmentSetup;
  }

  return drizzle(env.DB, { schema });
}

/** Publishes scheduled articles whose publication time has arrived. */
export async function publishScheduledPosts() {
  if (!env.DB) return;
  const now = new Date().toISOString();
  await env.DB.prepare(
    "UPDATE posts SET status = 'published', updated_at = ? WHERE status = 'scheduled' AND published_at IS NOT NULL AND published_at <= ?",
  ).bind(now, now).run();
}

async function initializeDevelopmentDatabase() {
  await env.DB.batch([
    env.DB.prepare("CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT NOT NULL UNIQUE, slug TEXT NOT NULL UNIQUE, description TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)"),
    env.DB.prepare("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, slug TEXT NOT NULL UNIQUE, title TEXT NOT NULL, excerpt TEXT NOT NULL DEFAULT '', content TEXT NOT NULL DEFAULT '', featured_image_url TEXT, featured_image_alt TEXT, art TEXT, category_id INTEGER, author_name TEXT, status TEXT NOT NULL DEFAULT 'draft', reading_minutes INTEGER NOT NULL DEFAULT 1, published_at TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL)"),
    env.DB.prepare("CREATE TABLE IF NOT EXISTS tags (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT NOT NULL UNIQUE, slug TEXT NOT NULL UNIQUE, color TEXT NOT NULL DEFAULT 'blue', created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)"),
    env.DB.prepare("CREATE TABLE IF NOT EXISTS post_tags (post_id INTEGER NOT NULL, tag_id INTEGER NOT NULL, PRIMARY KEY (post_id, tag_id), FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE, FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE)"),
    env.DB.prepare("CREATE TABLE IF NOT EXISTS cms_profiles (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password_hash TEXT, password_salt TEXT, role TEXT NOT NULL DEFAULT 'editor', status TEXT NOT NULL DEFAULT 'active', created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)"),
  ]);

  // Attempt to add password columns if table was created in an earlier migration
  try {
    await env.DB.prepare("ALTER TABLE cms_profiles ADD COLUMN password_hash TEXT").run();
  } catch {}
  try {
    await env.DB.prepare("ALTER TABLE cms_profiles ADD COLUMN password_salt TEXT").run();
  } catch {}

  const count = await env.DB.prepare("SELECT COUNT(*) AS count FROM posts").first<{ count: number }>();
  if (count?.count) return;

  const categories = [...new Set(newsArticles.map((article) => article.category))];
  const statements = categories.map((name) =>
    env.DB.prepare("INSERT OR IGNORE INTO categories (name, slug) VALUES (?, ?)").bind(name, slugify(name)),
  );

  for (const article of newsArticles) {
    const content = [article.intro, ...article.body.flatMap((section) => [section.title ? `## ${section.title}` : "", ...section.paragraphs])].filter(Boolean).join("\n\n");
    statements.push(
      env.DB.prepare("INSERT OR IGNORE INTO posts (slug, title, excerpt, content, art, category_id, status, reading_minutes, published_at) VALUES (?, ?, ?, ?, ?, (SELECT id FROM categories WHERE name = ?), 'published', ?, ?)")
        .bind(article.slug, article.title, article.summary, content, article.art, article.category, Number(article.readingTime.match(/\d+/)?.[0] ?? 1), "2026-01-01T00:00:00.000Z"),
    );
  }
  await env.DB.batch(statements);
}

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
