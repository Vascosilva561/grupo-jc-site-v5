import { asc, eq, sql } from "drizzle-orm";
import { getDb } from "../../../db";
import { categories, posts } from "../../../db/schema";
import { AdminLayout } from "../AdminLayout";
import { requireCmsUser } from "../auth";
import { CategoriesManager, CategoryRowData } from "./CategoriesManager";

export const dynamic = "force-dynamic";

export default async function TagsPage() {
  const user = await requireCmsUser();
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

  return (
    <AdminLayout userName={user.displayName} role={user.role} active="/admin/tags">
      <CategoriesManager categories={allCategories as CategoryRowData[]} />
    </AdminLayout>
  );
}
