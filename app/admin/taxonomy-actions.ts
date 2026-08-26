"use server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { getDb } from "../../db";
import { cmsProfiles, tags } from "../../db/schema";
import { requireCmsAdmin } from "./auth";
const slugify=(v:string)=>v.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
export async function createTag(data:FormData){await requireCmsAdmin();const name=String(data.get("name")??"").trim();if(!name)throw new Error("Nome obrigatório");const db=await getDb();await db.insert(tags).values({name,slug:slugify(name),color:String(data.get("color")??"blue")});redirect("/admin/tags")}
export async function deleteTag(id:number){await requireCmsAdmin();const db=await getDb();await db.delete(tags).where(eq(tags.id,id));redirect("/admin/tags")}
export async function createProfile(data:FormData){await requireCmsAdmin();const name=String(data.get("name")??"").trim(),email=String(data.get("email")??"").trim().toLowerCase();if(!name||!email)throw new Error("Dados obrigatórios");const db=await getDb();await db.insert(cmsProfiles).values({name,email,role:data.get("role")==="admin"?"admin":"editor",status:"active"});redirect("/admin/profiles")}
export async function toggleProfile(id:number,status:"active"|"inactive"){await requireCmsAdmin();const db=await getDb();await db.update(cmsProfiles).set({status,updatedAt:new Date().toISOString()}).where(eq(cmsProfiles.id,id));redirect("/admin/profiles")}
