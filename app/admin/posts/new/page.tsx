import Link from "next/link";
import { asc } from "drizzle-orm";
import { getDb } from "../../../../db";
import { categories } from "../../../../db/schema";
import { requireCmsUser } from "../../auth";
import { createPost } from "../actions";
import { PostForm } from "../PostForm";

export const dynamic = "force-dynamic";

export default async function NewPostPage() {
  const user = await requireCmsUser();
  const db = await getDb();
  const allCategories = await db.select({ id: categories.id, name: categories.name }).from(categories).orderBy(asc(categories.name));
  return <main className="admin-shell"><header className="admin-header"><Link className="admin-brand" href="/admin">Grupo JC <span>CMS</span></Link></header><section className="admin-content"><div className="admin-intro"><p className="eyebrow">Nova notícia</p><h1>Criar conteúdo.</h1></div><PostForm categories={allCategories} authorDefault={user.displayName} action={createPost} /></section></main>;
}
