import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { getDb } from "../../db";
import { categories, posts } from "../../db/schema";
import { chatGPTSignOutPath } from "../chatgpt-auth";
import { requireCmsAdmin } from "./auth";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Administração",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const user = await requireCmsAdmin();
  const articles = await getDb()
    .select({
      id: posts.id,
      title: posts.title,
      status: posts.status,
      updatedAt: posts.updatedAt,
      category: categories.name,
    })
    .from(posts)
    .leftJoin(categories, eq(posts.categoryId, categories.id))
    .orderBy(desc(posts.updatedAt));

  return (
    <main className="admin-shell">
      <header className="admin-header">
        <Link className="admin-brand" href="/">Grupo JC <span>CMS</span></Link>
        <div className="admin-user">
          <span>{user.displayName}</span>
          <a href={chatGPTSignOutPath("/admin")}>Terminar sessão</a>
        </div>
      </header>
      <section className="admin-content">
        <div className="admin-intro">
          <p className="eyebrow">Administração</p>
          <h1>Notícias.</h1>
          <p>Conteúdo disponível no site institucional.</p>
          <Link className="admin-submit" href="/admin/posts/new">Nova notícia</Link>
        </div>
        <div className="admin-list" aria-label="Lista de notícias">
          <div className="admin-list__heading">
            <span>{articles.length} notícias</span>
            <span>Estado</span>
          </div>
          {articles.map((article) => (
            <Link className="admin-post-row" href={`/admin/posts/${article.id}`} key={article.id}>
              <div>
                <p>{article.category ?? "Sem categoria"}</p>
                <h2>{article.title}</h2>
              </div>
              <span className={`admin-status admin-status--${article.status}`}>
                {article.status === "published" ? "Publicado" : article.status === "draft" ? "Rascunho" : "Arquivado"}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
