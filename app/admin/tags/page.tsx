import { asc, eq, sql } from "drizzle-orm";
import { getDb } from "../../../db";
import { categories, postTags, posts, tags } from "../../../db/schema";
import { AdminLayout } from "../AdminLayout";
import { requireCmsAdmin } from "../auth";
import { CategoriesManager, CategoryRowData } from "./CategoriesManager";
import { TagsManager, TagRowData } from "./TagsManager";

export const dynamic = "force-dynamic";

export default async function TagsPage() {
  const user = await requireCmsAdmin();
  const db = await getDb();

  const allCategories = await db
    .select({
      id: categories.id,
      name: categories.name,
      slug: categories.slug,
      description: categories.description,
      createdAt: categories.createdAt,
      postCount: sql<number>`count(${posts.id})`,
    })
    .from(categories)
    .leftJoin(posts, eq(posts.categoryId, categories.id))
    .groupBy(categories.id)
    .orderBy(asc(categories.name));

  const allTags = await db
    .select({
      id: tags.id,
      name: tags.name,
      slug: tags.slug,
      color: tags.color,
      createdAt: tags.createdAt,
      postCount: sql<number>`count(${postTags.postId})`,
    })
    .from(tags)
    .leftJoin(postTags, eq(postTags.tagId, tags.id))
    .groupBy(tags.id)
    .orderBy(asc(tags.name));

  return (
    <AdminLayout userName={user.displayName} role={user.role} active="/admin/tags">
      <CategoriesManager categories={allCategories as CategoryRowData[]} />
      <TagsManager tags={allTags as TagRowData[]} />
    </AdminLayout>
  );
}
