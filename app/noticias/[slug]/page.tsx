import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "../../components/ArrowUpRight";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getNewsArticle, newsArticles } from "../data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return newsArticles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getNewsArticle((await params).slug);
  return article ? { title: article.title, description: article.summary } : {};
}

export default async function NewsArticlePage({ params }: Props) {
  const article = getNewsArticle((await params).slug);
  if (!article) notFound();
  const position = newsArticles.findIndex(({ slug }) => slug === article.slug);
  const nextArticle = newsArticles[(position + 1) % newsArticles.length];

  return <main className="news-article-page">
    <SiteHeader />
    <header className="news-article-header shell">
      <Link className="news-back" href="/noticias"><ArrowLeft size={17} /> Todas as notícias</Link>
      <div className="news-article-header__copy"><span>Notícias</span><h1>{article.title}</h1></div>
      <NewsVisual art={article.art} number={position + 1} />
      <div className="news-article-details"><span>{article.category}</span><i /><time>{article.date}</time><i /><small>{article.readingTime}</small></div>
    </header>
    <article className="news-article-body shell"><div className="news-article-body__content"><p className="news-article-lead">{article.summary}</p>{article.body.map((section, index) => <section key={index}>{section.title && <h2>{section.title}</h2>}{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div></article>
    <Link href={`/noticias/${nextArticle.slug}`} className="next-company next-news"><div className="shell"><span>Próxima notícia</span><strong>{nextArticle.title}</strong><ArrowUpRight size={44} /></div></Link><SiteFooter />
  </main>;
}

function NewsVisual({ art, number }: { art: string; number: number }) { return <div className={`news-visual news-visual--${art}`} aria-hidden="true"><span>{String(number).padStart(2, "0")}</span><i /><b /><em /></div>; }
