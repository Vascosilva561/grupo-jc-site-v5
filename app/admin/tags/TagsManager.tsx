"use client";

import { useMemo, useState } from "react";
import { Edit3, FileText, Palette, Plus, Search, X } from "lucide-react";
import { CmsModal } from "../components/CmsModal";
import { DeleteConfirmModal } from "../components/DeleteConfirmModal";
import { createTag, deleteTag, updateTag } from "../taxonomy-actions";

export interface TagRowData {
  id: number;
  name: string;
  slug: string;
  color: string;
  createdAt: string;
  postCount: number;
}

const colorOptions = [
  { value: "blue", label: "Azul" },
  { value: "green", label: "Verde" },
  { value: "orange", label: "Laranja" },
  { value: "purple", label: "Roxo" },
];

function TagFields({ tag }: { tag?: Pick<TagRowData, "name" | "color"> }) {
  return (
    <>
      <div className="cms-field-block">
        <label className="cms-field-label">Nome da tag <span className="cms-required-dot">*</span></label>
        <input name="name" defaultValue={tag?.name} required placeholder="Ex: Inovação" className="cms-text-input" />
      </div>
      <div className="cms-field-block">
        <label className="cms-field-label"><Palette size={15} /> Cor da tag</label>
        <select name="color" defaultValue={tag?.color ?? "blue"} className="cms-text-input">
          {colorOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
        </select>
      </div>
    </>
  );
}

export function TagsManager({ tags }: { tags: TagRowData[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return q ? tags.filter((tag) => tag.name.toLowerCase().includes(q) || tag.slug.includes(q)) : tags;
  }, [searchQuery, tags]);

  return (
    <>
      <header className="cms-top">
        <div><p>Organização</p><h1>Tags</h1></div>
        <CmsModal title="Nova tag" trigger={<><Plus size={17} /> Nova tag</>}>
          <form action={createTag} className="cms-modal-form">
            <TagFields />
            <div className="cms-modal-actions"><button className="cms-btn-primary">Criar tag</button></div>
          </form>
        </CmsModal>
      </header>

      <div className="cms-toolbar">
        <div className="cms-search-input-wrap">
          <Search size={16} className="cms-search-icon" />
          <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Pesquisar tag por nome ou identificador..." className="cms-search-input" />
          {searchQuery && <button type="button" onClick={() => setSearchQuery("")} className="cms-search-clear" title="Limpar pesquisa"><X size={14} /></button>}
        </div>
      </div>
      <div className="cms-results-meta"><span>A mostrar <strong>{filtered.length}</strong> de <strong>{tags.length}</strong> tags</span></div>

      <div className="cms-table cms-table--tags">
        <div className="cms-table__head cms-table__head--tags">
          <div className="cms-col cms-col--tag-name">Tag</div>
          <div className="cms-col cms-col--tag-slug">Identificador</div>
          <div className="cms-col cms-col--tag-count">Notícias atreladas</div>
          <div className="cms-col cms-col--tag-date">Data de criação</div>
          <div className="cms-col cms-col--actions">Ações</div>
        </div>
        {filtered.length === 0 ? <div className="cms-table__empty"><p>Nenhuma tag encontrada.</p></div> : filtered.map((tag) => (
          <div className="cms-table__row cms-table__row--tags" key={tag.id}>
            <div className="cms-col cms-col--tag-name"><strong><span className={`cms-tag-dot cms-tag-dot--${tag.color}`} />{tag.name}</strong></div>
            <div className="cms-col cms-col--tag-slug"><span className="cms-slug-badge">/{tag.slug}</span></div>
            <div className="cms-col cms-col--tag-count"><span className="cms-count-badge"><FileText size={13} />{tag.postCount} {tag.postCount === 1 ? "notícia" : "notícias"}</span></div>
            <div className="cms-col cms-col--tag-date"><span className="cms-date-text">{formatDate(tag.createdAt)}</span></div>
            <div className="cms-col cms-col--actions"><div className="cms-actions">
              <CmsModal title="Editar tag" trigger={<Edit3 size={16} />}>
                <form action={updateTag.bind(null, tag.id)} className="cms-modal-form"><TagFields tag={tag} /><div className="cms-modal-actions"><button className="cms-btn-primary">Guardar alterações</button></div></form>
              </CmsModal>
              <DeleteConfirmModal title="Eliminar tag" description={<>Esta ação remove a tag <strong>"{tag.name}"</strong> permanentemente. A associação aos posts também será removida.</>} buttonLabel="Eliminar tag" action={deleteTag.bind(null, tag.id)} />
            </div></div>
          </div>
        ))}
      </div>
    </>
  );
}

function formatDate(value: string | null | undefined) {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "—" : date.toLocaleDateString("pt-PT", { day: "numeric", month: "short", year: "numeric" });
}
