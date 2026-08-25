import Link from "next/link";
import { asc, eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { getDb } from "../../../../db";
import { categories, posts } from "../../../../db/schema";
import { requireCmsAdmin } from "../../auth";
import { PostForm } from "../PostForm";
import { updatePost } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  await requireCmsAdmin();
  const id = Number((await params).id);
  if (!Number.isInteger(id)) notFound();
  const [post, allCategories] = await Promise.all([
    getDb().select().from(posts).where(eq(posts.id, id)).get(),
    getDb().select({ id: categories.id, name: categories.name }).from(categories).orderBy(asc(categories.name)),
  ]);
  if (!post) notFound();
  return <main className="admin-shell"><header className="admin-header"><Link className="admin-brand" href="/admin">Grupo JC <span>CMS</span></Link></header><section className="admin-content"><div className="admin-intro"><p className="eyebrow">Editar notícia</p><h1>Actualizar conteúdo.</h1></div><PostForm categories={allCategories} post={{ ...post, categoryId: post.categoryId ?? null }} action={updatePost.bind(null, id)} /></section></main>;
}
