"use client";

import Link from "next/link";
import { ArrowUpRight } from "../components/ArrowUpRight";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { useLanguage } from "../translations";

type CategoryItem = {
  id: number | string;
  name: string;
  slug: string;
};

type PostItem = {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  art: string | null;
  featuredImageUrl: string | null;
  featuredImageAlt: string | null;
  categoryName: string | null;
  categorySlug: string | null;
  publishedAt: string | null;
  readingMinutes: number | null;
};

export function NewsListClient({
  allCategories,
  allPosts,
  selectedCategorySlug,
}: {
  allCategories: CategoryItem[];
  allPosts: PostItem[];
  selectedCategorySlug?: string;
}) {
  const { t, language } = useLanguage();

  const filteredPosts = selectedCategorySlug
    ? allPosts.filter((post) => post.categorySlug === selectedCategorySlug)
    : allPosts;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return t.noticias.article.recentDate;
    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return t.noticias.article.recentDate;
      const locale = language === "en" ? "en-US" : language === "fr" ? "fr-FR" : "pt-PT";
      return d.toLocaleDateString(locale, {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return t.noticias.article.recentDate;
    }
  };

  return (
    <main>
      <PageHero
        centered
        className="page-hero-wrap--news"
        eyebrow={t.noticias.eyebrow}
        title={t.noticias.title}
        description={t.noticias.description}
      />

      <section className="news-listing news-listing--plain">
        <div className="shell">
          <div className="news-filters-bar">
            <Link
              href="/noticias"
              className={`news-filter-pill ${!selectedCategorySlug ? "is-active" : ""}`}
            >
              {t.noticias.allNews} ({allPosts.length})
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
              <p>{t.noticias.emptyCategory}</p>
              <Link href="/noticias" className="home-v2-text-link">
                {t.noticias.viewAllLink} &rarr;
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
                      aria-label={`${t.noticias.readMoreAria}: ${article.title}`}
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
