import { neon } from "@neondatabase/serverless";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
let database: ReturnType<typeof drizzle<typeof schema>> | undefined;

export async function getDb() {
  if (database) return database;
  const connectionString = process.env.DATABASE_URL
    ?.trim()
    .replace(/^(\"|')(.*)\1$/, "$2");
  if (!connectionString) throw new Error("DATABASE_URL não está configurada.");
  database = drizzle(neon(connectionString), { schema });
  return database;
}

/** Publishes scheduled articles whose publication time has arrived. */
export async function publishScheduledPosts() {
  const db = await getDb();
  const now = new Date().toISOString();
  await db.execute(sql`UPDATE posts SET status = 'published', updated_at = ${now} WHERE status = 'scheduled' AND published_at IS NOT NULL AND published_at <= ${now}`);
}
