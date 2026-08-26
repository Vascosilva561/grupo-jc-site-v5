import Link from "next/link";
import { desc, eq, sql } from "drizzle-orm";
import { ArrowUpRight, FileText, Plus, Tags, Users } from "lucide-react";
import { getDb } from "../../db";
import { categories, cmsProfiles, posts, tags } from "../../db/schema";
import { AdminLayout } from "./AdminLayout";
import { requireCmsAdmin } from "./auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireCmsAdmin();
  const db = await getDb();
  const [allPosts, published, tagCount, profileCount, recent] = await Promise.all([
    db.select({ count: sql<number>`count(*)` }).from(posts).get(),
    db.select({ count: sql<number>`count(*)` }).from(posts).where(eq(posts.status, "published")).get(),
    db.select({ count: sql<number>`count(*)` }).from(tags).get(),
    db.select({ count: sql<number>`count(*)` }).from(cmsProfiles).get(),
    db.select({ id: posts.id, title: posts.title, status: posts.status, category: categories.name }).from(posts).leftJoin(categories, eq(posts.categoryId, categories.id)).orderBy(desc(posts.updatedAt)).limit(5),
  ]);
  const cards = [["Total de posts", allPosts?.count ?? 0, FileText], ["Publicados", published?.count ?? 0, ArrowUpRight], ["Tags", tagCount?.count ?? 0, Tags], ["Perfis", profileCount?.count ?? 0, Users]] as const;
  return <AdminLayout userName={user.displayName} active="/admin"><header className="cms-top"><div><p>Visão geral</p><h1>Olá, {user.displayName.split(" ")[0]}.</h1></div><Link className="cms-primary" href="/admin/posts/new"><Plus size={17} /> Nova notícia</Link></header><section className="cms-stats">{cards.map(([label, count, Icon]) => <article key={label}><span><Icon size={19} /></span><p>{label}</p><strong>{count}</strong></article>)}</section><section className="cms-section"><div className="cms-section__title"><div><p>Conteúdo recente</p><h2>Últimas actualizações</h2></div><Link href="/admin/posts">Ver todos <ArrowUpRight size={15} /></Link></div><div className="cms-recent">{recent.map(post => <Link href={`/admin/posts/${post.id}`} key={post.id}><div><b>{post.title}</b><span>{post.category ?? "Sem categoria"}</span></div><em className={`cms-pill cms-pill--${post.status}`}>{post.status === "published" ? "Publicado" : "Rascunho"}</em></Link>)}</div></section></AdminLayout>;
}
