import type { Metadata } from "next";
import { desc, eq, asc } from "drizzle-orm";
import { getDb, publishScheduledPosts } from "../../db";
import { categories, posts } from "../../db/schema";
import { NewsListClient } from "./NewsListClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Notícias e Artigos | Grupo JC",
  description:
    "Acompanhe as novidades, comunicados e artigos sobre tecnologia, negócios, impacto e inovação das empresas do Grupo JC.",
  alternates: {
    canonical: "/noticias",
  },
  openGraph: {
    title: "Notícias e Atualizações | Grupo JC",
    description:
      "Acompanhe as novidades, comunicados e artigos sobre tecnologia, negócios, impacto e inovação das empresas do Grupo JC.",
    url: "/noticias",
    images: [
      {
        url: "/brand/grupo-jc-black.svg",
        width: 1200,
        height: 630,
        alt: "Notícias do Grupo JC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notícias e Atualizações | Grupo JC",
    description:
      "Acompanhe as novidades, comunicados e artigos sobre tecnologia, negócios, impacto e inovação das empresas do Grupo JC.",
  },
};

type Props = {
  searchParams: Promise<{ categoria?: string }>;
};

export default async function NewsPage({ searchParams }: Props) {
  const { categoria: selectedCategorySlug } = await searchParams;
  await publishScheduledPosts();
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

  return (
    <NewsListClient
      allCategories={allCategories}
      allPosts={allPosts}
      selectedCategorySlug={selectedCategorySlug}
    />
  );
}
