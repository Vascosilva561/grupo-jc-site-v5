import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { and, desc, eq } from "drizzle-orm";
import { ArrowLeft, ArrowUpRight } from "../../components/ArrowUpRight";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getDb, publishScheduledPosts } from "../../../db";
import { categories, posts } from "../../../db/schema";
import { MarkdownContent } from "../MarkdownContent";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const db = await getDb();
  const article = await db
    .select({ title: posts.title, excerpt: posts.excerpt })
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
    .get();

  return article
    ? { title: article.title, description: article.excerpt }
    : { title: "Notícia" };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  await publishScheduledPosts();
  const db = await getDb();

  const [article, allPublished] = await Promise.all([
    db
      .select({
        id: posts.id,
        slug: posts.slug,
        title: posts.title,
        excerpt: posts.excerpt,
        content: posts.content,
        art: posts.art,
        featuredImageUrl: posts.featuredImageUrl,
        featuredImageAlt: posts.featuredImageAlt,
        categoryName: categories.name,
        categorySlug: categories.slug,
        publishedAt: posts.publishedAt,
        readingMinutes: posts.readingMinutes,
      })
      .from(posts)
      .leftJoin(categories, eq(posts.categoryId, categories.id))
      .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
      .get(),
    db
      .select({
        id: posts.id,
        slug: posts.slug,
        title: posts.title,
      })
      .from(posts)
      .where(eq(posts.status, "published"))
      .orderBy(desc(posts.publishedAt)),
  ]);

  if (!article) notFound();

  const position = allPublished.findIndex((p) => p.slug === article.slug);
  const nextArticle =
    allPublished.length > 1
      ? allPublished[(position + 1) % allPublished.length]
      : null;

  const dateStr = formatDate(article.publishedAt);
  const readingTimeStr = `${article.readingMinutes || 2} min de leitura`;

  return (
    <main className="news-article-page">
      <SiteHeader />
      <header className="news-article-header shell">
        <Link className="news-back" href="/noticias">
          <ArrowLeft size={17} /> Todas as notícias
        </Link>
        <div className="news-article-header__copy">
          <span>Notícias &bull; {article.categoryName || "Geral"}</span>
          <h1>{article.title}</h1>
        </div>

        {article.featuredImageUrl ? (
          <div className="news-article-banner">
            <img
              src={article.featuredImageUrl}
              alt={article.featuredImageAlt || article.title}
            />
          </div>
        ) : (
          <NewsVisual
            art={article.art || "network"}
            number={position >= 0 ? position + 1 : 1}
          />
        )}

        <div className="news-article-details">
          <span>{article.categoryName || "Geral"}</span>
          <i />
          <time dateTime={article.publishedAt || ""}>{dateStr}</time>
          <i />
          <small>{readingTimeStr}</small>
          <i />
          <small>Por Grupo JC</small>
        </div>
      </header>

      <article className="news-article-body shell">
        <div className="news-article-body__content">
          {article.excerpt && (
            <p className="news-article-lead">{article.excerpt}</p>
          )}
          <MarkdownContent content={article.content} />
        </div>
      </article>

      {nextArticle && nextArticle.slug !== article.slug && (
        <Link
          href={`/noticias/${nextArticle.slug}`}
          className="next-company next-news"
        >
          <div className="shell">
            <span>Próxima notícia</span>
            <strong>{nextArticle.title}</strong>
            <ArrowUpRight size={44} />
          </div>
        </Link>
      )}

      <SiteFooter />
    </main>
  );
}

function NewsVisual({ art, number }: { art: string; number: number }) {
  return (
    <div className={`news-visual news-visual--${art}`} aria-hidden="true">
      <span>{String(number).padStart(2, "0")}</span>
      <i />
      <b />
      <em />
    </div>
  );
}

function formatDate(dateString: string | null): string {
  if (!dateString) return "Recentemente";
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "Recentemente";
    return d.toLocaleDateString("pt-PT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "Recentemente";
  }
}
