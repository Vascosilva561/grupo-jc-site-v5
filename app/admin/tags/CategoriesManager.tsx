"use client";

import { useMemo, useState } from "react";
import { Edit3, FileText, Plus, Search, X } from "lucide-react";
import { CmsModal } from "../components/CmsModal";
import { DeleteConfirmModal } from "../components/DeleteConfirmModal";
import { createCategory, deleteCategory, updateCategory } from "../taxonomy-actions";

export interface CategoryRowData {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  createdAt: string;
  postCount: number;
}

interface CategoriesManagerProps {
  categories: CategoryRowData[];
}

function formatDate(isoString: string | null | undefined): string {
  if (!isoString) return "—";
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return "—";
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch {
    return "—";
  }
}

function CategoryFields({
  category,
}: {
  category?: { name: string; description?: string | null };
}) {
  return (
    <>
      <div className="cms-field-block">
        <label className="cms-field-label">
          Nome da categoria <span className="cms-required-dot">*</span>
        </label>
        <input
          name="name"
          defaultValue={category?.name}
          required
          placeholder="Ex: Sustentabilidade & Inovação"
          className="cms-text-input"
        />
      </div>

      <div className="cms-field-block">
        <label className="cms-field-label">Descrição da categoria</label>
        <textarea
          name="description"
          rows={2}
          defaultValue={category?.description ?? ""}
          placeholder="Breve descrição editorial sobre o tema da categoria..."
          className="cms-textarea-input"
        />
      </div>
    </>
  );
}

export function CategoriesManager({ categories }: CategoriesManagerProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const q = searchQuery.toLowerCase().trim();
    return categories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(q) ||
        cat.slug.toLowerCase().includes(q) ||
        (cat.description ?? "").toLowerCase().includes(q)
    );
  }, [categories, searchQuery]);

  return (
    <>
      <header className="cms-top">
        <div>
          <p>Organização</p>
          <h1>Categorias</h1>
        </div>
        <CmsModal
          title="Nova categoria"
          trigger={
            <>
              <Plus size={17} /> Nova categoria
            </>
          }
        >
          <form action={createCategory} className="cms-modal-form">
            <CategoryFields />
            <div className="cms-modal-actions">
              <button className="cms-btn-primary">Criar categoria</button>
            </div>
          </form>
        </CmsModal>
      </header>

      {/* Filters Toolbar */}
      <div className="cms-toolbar">
        <div className="cms-search-input-wrap">
          <Search size={16} className="cms-search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar categoria por nome ou identificador..."
            className="cms-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="cms-search-clear"
              title="Limpar pesquisa"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Results Meta */}
      <div className="cms-results-meta">
        <span>
          A mostrar <strong>{filteredCategories.length}</strong> de{" "}
          <strong>{categories.length}</strong> categorias
        </span>
      </div>

      {/* Table */}
      <div className="cms-table cms-table--categories">
        <div className="cms-table__head cms-table__head--categories">
          <div className="cms-col cms-col--cat-name">Categoria</div>
          <div className="cms-col cms-col--cat-slug">Identificador</div>
          <div className="cms-col cms-col--cat-count">Notícias Atreladas</div>
          <div className="cms-col cms-col--cat-date">Data de Criação</div>
          <div className="cms-col cms-col--actions">Ações</div>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="cms-table__empty">
            <p>Nenhuma categoria encontrada para "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="cms-btn-secondary"
              style={{ marginTop: "12px" }}
            >
              Limpar pesquisa
            </button>
          </div>
        ) : (
          filteredCategories.map((cat) => (
            <div className="cms-table__row cms-table__row--categories" key={cat.id}>
              {/* Column 1: Name & Description */}
              <div className="cms-col cms-col--cat-name">
                <strong>{cat.name}</strong>
                {cat.description && (
                  <span className="cms-cat-desc">{cat.description}</span>
                )}
              </div>

              {/* Column 2: Slug */}
              <div className="cms-col cms-col--cat-slug">
                <span className="cms-slug-badge">/{cat.slug}</span>
              </div>

              {/* Column 3: Post Count */}
              <div className="cms-col cms-col--cat-count">
                <span className="cms-count-badge">
                  <FileText size={13} />
                  {cat.postCount} {cat.postCount === 1 ? "notícia" : "notícias"}
                </span>
              </div>

              {/* Column 4: Created At */}
              <div className="cms-col cms-col--cat-date">
                <span className="cms-date-text">{formatDate(cat.createdAt)}</span>
              </div>

              {/* Column 5: Actions */}
              <div className="cms-col cms-col--actions">
                <div className="cms-actions">
                  <CmsModal title="Editar categoria" trigger={<Edit3 size={16} />}>
                    <form
                      action={updateCategory.bind(null, cat.id)}
                      className="cms-modal-form"
                    >
                      <CategoryFields category={cat} />
                      <div className="cms-modal-actions">
                        <button className="cms-btn-primary">Guardar alterações</button>
                      </div>
                    </form>
                  </CmsModal>
                  <DeleteConfirmModal
                    title="Eliminar categoria"
                    description={
                      <>
                        Esta ação remove a categoria <strong>"{cat.name}"</strong> de forma permanente.
                      </>
                    }
                    buttonLabel="Eliminar categoria"
                    action={deleteCategory.bind(null, cat.id)}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
