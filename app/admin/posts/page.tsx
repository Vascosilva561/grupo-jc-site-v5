import { desc } from "drizzle-orm";
import { Edit3, Plus, Trash2 } from "lucide-react";
import { getDb } from "../../../db";
import { categories, posts } from "../../../db/schema";
import { AdminLayout } from "../AdminLayout";
import { requireCmsAdmin } from "../auth";
import { CmsModal } from "../components/CmsModal";
import { PostForm } from "./PostForm";
import { createPost, deletePost, updatePost } from "./actions";
export const dynamic="force-dynamic";
export default async function PostsPage(){const user=await requireCmsAdmin(),db=await getDb(),[rows,allCategories]=await Promise.all([db.select().from(posts).orderBy(desc(posts.updatedAt)),db.select({id:categories.id,name:categories.name}).from(categories)]);return <AdminLayout userName={user.displayName} active="/admin/posts"><header className="cms-top"><div><p>Conteúdo</p><h1>Posts</h1></div><CmsModal title="Nova notícia" trigger={<><Plus size={17}/> Nova notícia</>}><PostForm categories={allCategories} action={createPost}/></CmsModal></header><div className="cms-table"><div className="cms-table__head"><span>Artigo</span><span>Estado</span><span>Ações</span></div>{rows.map(post=><div className="cms-table__row" key={post.id}><strong>{post.title}</strong><em className={`cms-pill cms-pill--${post.status}`}>{post.status==="published"?"Publicado":post.status==="draft"?"Rascunho":"Arquivado"}</em><div className="cms-actions"><CmsModal title="Editar notícia" trigger={<Edit3 size={16}/> }><PostForm categories={allCategories} post={{...post,categoryId:post.categoryId??null}} action={updatePost.bind(null,post.id)}/></CmsModal><CmsModal title="Remover notícia" tone="danger" trigger={<Trash2 size={16}/> }><form action={deletePost.bind(null,post.id)} className="cms-modal-form"><p>Esta ação elimina a notícia de forma permanente.</p><button className="cms-danger">Remover notícia</button></form></CmsModal></div></div>)}</div></AdminLayout>}
