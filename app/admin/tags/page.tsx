import { Edit3, Plus, Trash2 } from "lucide-react";
import { asc } from "drizzle-orm";
import { getDb } from "../../../db";
import { tags } from "../../../db/schema";
import { AdminLayout } from "../AdminLayout";
import { requireCmsAdmin } from "../auth";
import { CmsModal } from "../components/CmsModal";
import { createTag, deleteTag, updateTag } from "../taxonomy-actions";
export const dynamic="force-dynamic";
function Fields({tag}:{tag?:{name:string;color:string}}){return <><label>Nome<input name="name" defaultValue={tag?.name} required/></label><label>Cor<select name="color" defaultValue={tag?.color??"blue"}><option value="blue">Azul</option><option value="green">Verde</option><option value="orange">Laranja</option></select></label></>}
export default async function TagsPage(){const user=await requireCmsAdmin(),db=await getDb(),all=await db.select().from(tags).orderBy(asc(tags.name));return <AdminLayout userName={user.displayName} active="/admin/tags"><header className="cms-top"><div><p>Organização</p><h1>Tags</h1></div><CmsModal title="Nova tag" trigger={<><Plus size={17}/> Nova tag</>}><form action={createTag} className="cms-modal-form"><Fields/><button className="cms-primary">Criar tag</button></form></CmsModal></header><div className="cms-table"><div className="cms-table__head"><span>Tag</span><span>Identificador</span><span>Ações</span></div>{all.map(tag=><div className="cms-table__row" key={tag.id}><strong><i className={`cms-tag-dot cms-tag-dot--${tag.color}`}/>#{tag.name}</strong><span>{tag.slug}</span><div className="cms-actions"><CmsModal title="Editar tag" trigger={<Edit3 size={16}/> }><form action={updateTag.bind(null,tag.id)} className="cms-modal-form"><Fields tag={tag}/><button className="cms-primary">Guardar alterações</button></form></CmsModal><CmsModal title="Eliminar tag" tone="danger" trigger={<Trash2 size={16}/> }><form action={deleteTag.bind(null,tag.id)} className="cms-modal-form"><p>Esta ação remove a tag permanentemente.</p><button className="cms-danger">Eliminar tag</button></form></CmsModal></div></div>)}</div></AdminLayout>}
