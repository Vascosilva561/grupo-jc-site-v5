import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../components/ArrowUpRight";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { newsArticles } from "./data";

export const metadata: Metadata = { title: "Notícias", description: "Ideias, projectos e histórias das empresas e pessoas que fazem parte do Grupo JC." };

export default function NewsPage() {
  const articles = newsArticles;
  return <main><PageHero centered className="page-hero-wrap--news" eyebrow="Notícias" title="Ideias, projectos e histórias do Grupo JC." description="Acompanhe as principais novidades do grupo, das suas empresas e das pessoas que tornam cada projecto possível." />
    <section className="news-listing news-listing--plain"><div className="shell"><div className="news-listing__bar"><span className="eyebrow">Todas as notícias</span></div><div className="news-card-grid">{articles.map((article, index) => <Link href={`/noticias/${article.slug}`} className="news-story-card" key={article.slug}><NewsVisual art={article.art} number={index + 1} /><div className="news-story-card__meta"><span className="news-tag">{article.category}</span><time>{article.date}</time></div><h2>{article.title}</h2><p>{article.summary}</p><span className="news-story-card__more" aria-label={`Ler notícia: ${article.title}`}><ArrowUpRight /></span></Link>)}</div></div></section><SiteFooter />
  </main>;
}

function NewsVisual({ art, number }: { art: string; number: number }) { return <div className={`news-visual news-visual--${art}`} aria-hidden="true"><span>{String(number).padStart(2, "0")}</span><i /><b /><em /></div>; }
