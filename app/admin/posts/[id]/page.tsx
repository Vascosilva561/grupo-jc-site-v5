import Link from "next/link";
import { asc, eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { getDb } from "../../../../db";
import { categories, postTags, posts, tags } from "../../../../db/schema";
import { requireCmsUser } from "../../auth";
import { PostForm } from "../PostForm";
import { deletePost, updatePost } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireCmsUser();
  const id = Number((await params).id);
  if (!Number.isInteger(id)) notFound();
  const db = await getDb();
  const [post, allCategories, allTags, assignedTags] = await Promise.all([
    db.select().from(posts).where(eq(posts.id, id)).get(),
    db.select({ id: categories.id, name: categories.name }).from(categories).orderBy(asc(categories.name)),
    db.select({ id: tags.id, name: tags.name, color: tags.color }).from(tags).orderBy(asc(tags.name)),
    db.select({ tagId: postTags.tagId }).from(postTags).where(eq(postTags.postId, id)),
  ]);
  if (!post) notFound();
  return <main className="admin-shell"><header className="admin-header"><Link className="admin-brand" href="/admin">Grupo JC <span>CMS</span></Link></header><section className="admin-content"><div className="admin-intro"><p className="eyebrow">Editar notícia</p><h1>Actualizar conteúdo.</h1></div><PostForm categories={allCategories} tags={allTags} post={{ ...post, categoryId: post.categoryId ?? null, tagIds: assignedTags.map((tag) => tag.tagId) }} authorDefault={user.displayName} action={updatePost.bind(null, id)} /><form action={deletePost.bind(null, id)} className="admin-danger"><p>Esta ação elimina permanentemente a notícia.</p><button type="submit">Remover notícia</button></form></section></main>;
}
