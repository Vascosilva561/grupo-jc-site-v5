"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "../components/ArrowUpRight";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { MarkdownContent } from "./MarkdownContent";
import { useLanguage } from "../translations";

type ArticleData = {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  art: string | null;
  featuredImageUrl: string | null;
  featuredImageAlt: string | null;
  categoryName: string | null;
  categorySlug: string | null;
  publishedAt: string | null;
  readingMinutes: number | null;
};

type NextArticleData = {
  id: number | string;
  slug: string;
  title: string;
} | null;

export function NewsArticleClient({
  article,
  nextArticle,
  position,
}: {
  article: ArticleData;
  nextArticle: NextArticleData;
  position: number;
}) {
  const { t, language } = useLanguage();

  const formatDate = (dateString: string | null) => {
    if (!dateString) return t.noticias.article.recentDate;
    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return t.noticias.article.recentDate;
      const locale = language === "en" ? "en-US" : language === "fr" ? "fr-FR" : "pt-PT";
      return d.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return t.noticias.article.recentDate;
    }
  };

  const dateStr = formatDate(article.publishedAt);
  const readingTimeStr = `${article.readingMinutes || 2} ${t.noticias.article.readingTime}`;

  return (
    <main className="news-article-page">
      <SiteHeader />
      <header className="news-article-header shell">
        <Link className="news-back" href="/noticias">
          <ArrowLeft size={17} /> {t.noticias.article.allNewsBack}
        </Link>
        <div className="news-article-header__copy">
          <span>
            {t.noticias.article.tagPrefix} &bull; {article.categoryName || "Geral"}
          </span>
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
          <small>Grupo JC</small>
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
            <span>{t.noticias.article.nextArticle}</span>
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
