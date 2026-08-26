import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { Plus } from "lucide-react";
import { getDb } from "../../../db";
import { categories, posts } from "../../../db/schema";
import { AdminLayout } from "../AdminLayout";
import { requireCmsAdmin } from "../auth";
export const dynamic = "force-dynamic";
export default async function PostsPage() { const user = await requireCmsAdmin(); const db = await getDb(); const rows = await db.select({ id: posts.id, title: posts.title, status: posts.status, updatedAt: posts.updatedAt, category: categories.name }).from(posts).leftJoin(categories, eq(posts.categoryId, categories.id)).orderBy(desc(posts.updatedAt)); return <AdminLayout userName={user.displayName} active="/admin/posts"><header className="cms-top"><div><p>Conteúdo</p><h1>Posts</h1></div><Link className="cms-primary" href="/admin/posts/new"><Plus size={17} /> Nova notícia</Link></header><div className="cms-table"><div className="cms-table__head"><span>Artigo</span><span>Categoria</span><span>Estado</span></div>{rows.map(row => <Link href={`/admin/posts/${row.id}`} className="cms-table__row" key={row.id}><strong>{row.title}</strong><span>{row.category ?? "—"}</span><em className={`cms-pill cms-pill--${row.status}`}>{row.status === "published" ? "Publicado" : row.status === "draft" ? "Rascunho" : "Arquivado"}</em></Link>)}</div></AdminLayout>; }
