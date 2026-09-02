import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { and, desc, eq } from "drizzle-orm";
import { getDb, publishScheduledPosts } from "../../../db";
import { categories, posts } from "../../../db/schema";
import { NewsArticleClient } from "../NewsArticleClient";
import { JsonLd } from "../../components/JsonLd";

export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://grupojc.ao";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const db = await getDb();
  const article = await db
    .select({
      title: posts.title,
      excerpt: posts.excerpt,
      featuredImageUrl: posts.featuredImageUrl,
      featuredImageAlt: posts.featuredImageAlt,
      publishedAt: posts.publishedAt,
    })
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
    .limit(1)
    .then(([result]) => result);

  if (!article) {
    return { title: "Notícia | Grupo JC" };
  }

  const title = `${article.title} | Grupo JC`;
  const description = article.excerpt || article.title;
  const imageUrl = article.featuredImageUrl
    ? article.featuredImageUrl.startsWith("http")
      ? article.featuredImageUrl
      : `${siteUrl}${article.featuredImageUrl}`
    : `${siteUrl}/brand/grupo-jc-black.svg`;

  return {
    title,
    description,
    alternates: {
      canonical: `/noticias/${slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/noticias/${slug}`,
      publishedTime: article.publishedAt || undefined,
      authors: ["Grupo JC"],
      images: [
        {
          url: imageUrl,
          alt: article.featuredImageAlt || article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
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
      .limit(1)
      .then(([result]) => result),
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${siteUrl}/noticias/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/noticias/${article.slug}`,
    },
    image: article.featuredImageUrl
      ? [
          article.featuredImageUrl.startsWith("http")
            ? article.featuredImageUrl
            : `${siteUrl}${article.featuredImageUrl}`,
        ]
      : [`${siteUrl}/brand/grupo-jc-black.svg`],
    author: {
      "@type": "Organization",
      name: "Grupo JC",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Grupo JC",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/brand/grupo-jc-black.svg`,
      },
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <NewsArticleClient
        article={article}
        nextArticle={nextArticle}
        position={position}
      />
    </>
  );
}
