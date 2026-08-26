import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq, asc } from "drizzle-orm";
import { ArrowUpRight } from "../components/ArrowUpRight";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getDb } from "../../db";
import { categories, posts } from "../../db/schema";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Notícias",
  description:
    "Ideias, projectos e histórias das empresas e pessoas que fazem parte do Grupo JC.",
};

type Props = {
  searchParams: Promise<{ categoria?: string }>;
};

export default async function NewsPage({ searchParams }: Props) {
  const { categoria: selectedCategorySlug } = await searchParams;
  const db = await getDb();

  const [allCategories, allPosts] = await Promise.all([
    db.select({ id: categories.id, name: categories.name, slug: categories.slug }).from(categories).orderBy(asc(categories.name)),
    db
      .select({
        id: posts.id,
        slug: posts.slug,
        title: posts.title,
        excerpt: posts.excerpt,
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
      .where(eq(posts.status, "published"))
      .orderBy(desc(posts.publishedAt)),
  ]);

  const filteredPosts = selectedCategorySlug
    ? allPosts.filter((post) => post.categorySlug === selectedCategorySlug)
    : allPosts;

  return (
    <main>
      <SiteHeader />
      <PageHero
        centered
        className="page-hero-wrap--news"
        eyebrow="Notícias"
        title="Ideias, projectos e histórias do Grupo JC."
        description="Acompanhe as principais novidades do grupo, das suas empresas e das pessoas que tornam cada projecto possível."
      />

      <section className="news-listing news-listing--plain">
        <div className="shell">
          <div className="news-filters-bar">
            <Link
              href="/noticias"
              className={`news-filter-pill ${!selectedCategorySlug ? "is-active" : ""}`}
            >
              Todas as notícias ({allPosts.length})
            </Link>
            {allCategories.map((cat) => {
              const count = allPosts.filter((p) => p.categorySlug === cat.slug).length;
              return (
                <Link
                  href={`/noticias?categoria=${cat.slug}`}
                  key={cat.id}
                  className={`news-filter-pill ${selectedCategorySlug === cat.slug ? "is-active" : ""}`}
                >
                  {cat.name} ({count})
                </Link>
              );
            })}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="news-empty-state">
              <p>Nenhuma notícia encontrada nesta categoria.</p>
              <Link href="/noticias" className="home-v2-text-link">
                Ver todas as notícias &rarr;
              </Link>
            </div>
          ) : (
            <div className="news-card-grid">
              {filteredPosts.map((article, index) => {
                const dateStr = formatDate(article.publishedAt);
                return (
                  <Link
                    href={`/noticias/${article.slug}`}
                    className="news-story-card"
                    key={article.slug}
                  >
                    {article.featuredImageUrl ? (
                      <div className="news-card-image">
                        <img
                          src={article.featuredImageUrl}
                          alt={article.featuredImageAlt || article.title}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <NewsVisual art={article.art || "network"} number={index + 1} />
                    )}
                    <div className="news-story-card__meta">
                      <span className="news-tag">
                        {article.categoryName || "Geral"}
                      </span>
                      <time dateTime={article.publishedAt || ""}>{dateStr}</time>
                    </div>
                    <h2>{article.title}</h2>
                    <p>{article.excerpt}</p>
                    <span
                      className="news-story-card__more"
                      aria-label={`Ler notícia: ${article.title}`}
                    >
                      <ArrowUpRight />
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
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
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recentemente";
  }
}
