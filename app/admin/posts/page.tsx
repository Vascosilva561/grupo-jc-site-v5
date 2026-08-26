import { desc, eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { categories, posts } from "../../../db/schema";
import { AdminLayout } from "../AdminLayout";
import { requireCmsUser } from "../auth";
import { PostsManager, PostRowData } from "./PostsManager";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  const user = await requireCmsUser();
  const db = await getDb();

  const [rows, allCategories] = await Promise.all([
    db
      .select({
        id: posts.id,
        slug: posts.slug,
        title: posts.title,
        excerpt: posts.excerpt,
        content: posts.content,
        categoryId: posts.categoryId,
        categoryName: categories.name,
        authorName: posts.authorName,
        featuredImageUrl: posts.featuredImageUrl,
        featuredImageAlt: posts.featuredImageAlt,
        status: posts.status,
        art: posts.art,
        readingMinutes: posts.readingMinutes,
        publishedAt: posts.publishedAt,
        createdAt: posts.createdAt,
        updatedAt: posts.updatedAt,
      })
      .from(posts)
      .leftJoin(categories, eq(posts.categoryId, categories.id))
      .orderBy(desc(posts.updatedAt)),
    db.select({ id: categories.id, name: categories.name }).from(categories),
  ]);

  return (
    <AdminLayout userName={user.displayName} role={user.role} active="/admin/posts">
      <PostsManager
        initialPosts={rows as PostRowData[]}
        categories={allCategories}
        userDisplayName={user.displayName}
      />
    </AdminLayout>
  );
}
