import { desc, eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { categories, postTags, posts, tags } from "../../../db/schema";
import { AdminLayout } from "../AdminLayout";
import { requireCmsUser } from "../auth";
import { PostsManager, PostRowData } from "./PostsManager";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  const user = await requireCmsUser();
  const db = await getDb();

  const [rows, allCategories, allTags, postTagRows] = await Promise.all([
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
    db.select({ id: tags.id, name: tags.name, color: tags.color }).from(tags).orderBy(tags.name),
    db.select({ postId: postTags.postId, tagId: postTags.tagId }).from(postTags),
  ]);

  const tagsByPost = new Map<number, number[]>();
  for (const row of postTagRows) {
    const current = tagsByPost.get(row.postId) ?? [];
    current.push(row.tagId);
    tagsByPost.set(row.postId, current);
  }
  const rowsWithTags = rows.map((row) => ({ ...row, tagIds: tagsByPost.get(row.id) ?? [] }));

  return (
    <AdminLayout userName={user.displayName} role={user.role} active="/admin/posts">
      <PostsManager
        initialPosts={rowsWithTags as PostRowData[]}
        categories={allCategories}
        tags={allTags}
        userDisplayName={user.displayName}
      />
    </AdminLayout>
  );
}
