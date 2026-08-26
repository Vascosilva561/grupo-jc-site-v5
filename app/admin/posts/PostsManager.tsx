"use client";

import { useMemo, useState } from "react";
import { Clock, Edit3, Plus, Search, Trash2, User, X } from "lucide-react";
import { CmsModal } from "../components/CmsModal";
import { CmsSelect, CmsSelectOption } from "../components/CmsSelect";
import { DeleteConfirmModal } from "../components/DeleteConfirmModal";
import { PostForm } from "./PostForm";
import { createPost, deletePost, updatePost } from "./actions";

export interface PostRowData {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  categoryId: number | null;
  categoryName: string | null;
  authorName: string | null;
  featuredImageUrl: string | null;
  featuredImageAlt: string | null;
  status: "draft" | "published" | "scheduled" | "archived";
  art: "network" | "growth" | "people" | "impact" | "portfolio" | "partnership" | null;
  readingMinutes: number;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  tagIds: number[];
}

interface CategoryOption {
  id: number;
  name: string;
}

interface TagOption {
  id: number;
  name: string;
  color: string;
}

interface PostsManagerProps {
  initialPosts: PostRowData[];
  categories: CategoryOption[];
  tags: TagOption[];
  userDisplayName: string;
}

function formatDateTime(isoString: string | null | undefined): { date: string; time: string } | null {
  if (!isoString) return null;
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return null;
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    return {
      date: `${day} ${month} ${year}`,
      time: `${hours}:${minutes}`,
    };
  } catch {
    return null;
  }
}

export function PostsManager({ initialPosts, categories, tags, userDisplayName }: PostsManagerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const categorySelectOptions: CmsSelectOption[] = useMemo(
    () => [
      { value: "all", label: "Todas as categorias" },
      ...categories.map((c) => ({ value: String(c.id), label: c.name })),
    ],
    [categories]
  );

  const statusSelectOptions: CmsSelectOption[] = [
    { value: "all", label: "Todos os estados" },
    { value: "published", label: "🟢 Publicado" },
    { value: "scheduled", label: "⏰ Agendado" },
    { value: "draft", label: "📝 Rascunho" },
    { value: "archived", label: "📁 Arquivado" },
  ];

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // 1. Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = post.title.toLowerCase().includes(q);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(q);
        const matchesAuthor = (post.authorName ?? "").toLowerCase().includes(q);
        if (!matchesTitle && !matchesExcerpt && !matchesAuthor) {
          return false;
        }
      }

      // 2. Category filter
      if (categoryFilter !== "all") {
        if (String(post.categoryId ?? "") !== categoryFilter) {
          return false;
        }
      }

      // 3. Status filter
      if (statusFilter !== "all") {
        if (post.status !== statusFilter) {
          return false;
        }
      }

      return true;
    });
  }, [initialPosts, searchQuery, categoryFilter, statusFilter]);

  const hasActiveFilters = searchQuery !== "" || categoryFilter !== "all" || statusFilter !== "all";

  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("all");
    setStatusFilter("all");
  };

  return (
    <>
      <header className="cms-top">
        <div>
          <p>Gestão Editorial</p>
          <h1>Notícias & Artigos</h1>
        </div>
        <CmsModal
          title="Nova notícia"
          size="xl"
          trigger={
            <>
              <Plus size={17} /> Nova notícia
            </>
          }
        >
          <PostForm
            categories={categories}
            tags={tags}
            authorDefault={userDisplayName}
            action={createPost}
          />
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
            placeholder="Pesquisar por título, excerto ou autor..."
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

        <div className="cms-toolbar-filters">
          <CmsSelect
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            options={categorySelectOptions}
            className="cms-toolbar-select"
          />

          <CmsSelect
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            options={statusSelectOptions}
            className="cms-toolbar-select"
          />

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="cms-btn-reset-filters"
              title="Limpar todos os filtros"
            >
              <X size={14} /> Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="cms-results-meta">
        <span>
          A mostrar <strong>{filteredPosts.length}</strong> de{" "}
          <strong>{initialPosts.length}</strong> notícias
        </span>
      </div>

      {/* Table */}
      <div className="cms-table cms-table--posts">
        <div className="cms-table__head cms-table__head--posts">
          <div className="cms-col cms-col--article">Artigo / Notícia</div>
          <div className="cms-col cms-col--author">Autor / Editor</div>
          <div className="cms-col cms-col--date">Data de Publicação</div>
          <div className="cms-col cms-col--status">Estado</div>
          <div className="cms-col cms-col--actions">Ações</div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="cms-table__empty">
            <p>Nenhuma notícia encontrada com os filtros selecionados.</p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="cms-btn-secondary"
                style={{ marginTop: "12px" }}
              >
                Limpar filtros
              </button>
            )}
          </div>
        ) : (
          filteredPosts.map((post) => {
            const pubInfo = formatDateTime(post.publishedAt);
            return (
              <div className="cms-table__row cms-table__row--posts" key={post.id}>
                {/* Column 1: Title & Meta */}
                <div className="cms-col cms-col--article">
                  <span className="cms-col-article__title" title={post.title}>
                    {post.title}
                  </span>
                  <div className="cms-col-article__meta">
                    {post.categoryName && (
                      <span className="cms-category-pill">{post.categoryName}</span>
                    )}
                    <span className="cms-reading-time">
                      {post.readingMinutes} min de leitura
                    </span>
                  </div>
                </div>

                {/* Column 2: Author */}
                <div className="cms-col cms-col--author">
                  <div className="cms-author-badge">
                    <span className="cms-author-avatar">
                      <User size={12} />
                    </span>
                    <span className="cms-author-name">
                      {post.authorName || userDisplayName}
                    </span>
                  </div>
                </div>

                {/* Column 3: Publication Date / Time */}
                <div className="cms-col cms-col--date">
                  {post.status === "scheduled" ? (
                    pubInfo ? (
                      <div className="cms-date-block">
                        <span className="cms-date-main">
                          <Clock size={12} className="cms-clock-icon" />
                          {pubInfo.date}
                        </span>
                        <span className="cms-date-sub">às {pubInfo.time}</span>
                      </div>
                    ) : (
                      <span className="cms-date-muted">Agendado</span>
                    )
                  ) : pubInfo ? (
                    <div className="cms-date-block">
                      <span className="cms-date-main">{pubInfo.date}</span>
                      <span className="cms-date-sub">às {pubInfo.time}</span>
                    </div>
                  ) : (
                    <span className="cms-date-muted">—</span>
                  )}
                </div>

                {/* Column 4: Status */}
                <div className="cms-col cms-col--status">
                  <em className={`cms-pill cms-pill--${post.status}`}>
                    {post.status === "published" && "🟢 Publicado"}
                    {post.status === "scheduled" && "⏰ Agendado"}
                    {post.status === "draft" && "📝 Rascunho"}
                    {post.status === "archived" && "📁 Arquivado"}
                  </em>
                </div>

                {/* Column 5: Actions */}
                <div className="cms-col cms-col--actions">
                  <div className="cms-actions">
                    <CmsModal
                      title="Editar notícia"
                      size="xl"
                      trigger={<Edit3 size={16} />}
                    >
                      <PostForm
                        categories={categories}
                        post={{
                          title: post.title,
                          slug: post.slug,
                          excerpt: post.excerpt,
                          content: post.content,
                          categoryId: post.categoryId ?? null,
                          status: post.status,
                          art: post.art ?? "network",
                          featuredImageUrl: post.featuredImageUrl,
                          featuredImageAlt: post.featuredImageAlt,
                          readingMinutes: post.readingMinutes,
                          authorName: post.authorName,
                          publishedAt: post.publishedAt,
                          tagIds: post.tagIds,
                        }}
                        authorDefault={userDisplayName}
                        tags={tags}
                        action={updatePost.bind(null, post.id)}
                      />
                    </CmsModal>

                    <DeleteConfirmModal
                      title="Remover notícia"
                      description={
                        <>
                          Esta ação elimina a notícia <strong>"{post.title}"</strong> de
                          forma permanente e irreversível.
                        </>
                      }
                      buttonLabel="Remover notícia"
                      action={deletePost.bind(null, post.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
