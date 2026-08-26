"use client";

import { useId, useMemo, useState } from "react";
import { Clock, Sparkles } from "lucide-react";
import { BannerUpload } from "../components/BannerUpload";
import { CmsSelect, type CmsSelectOption } from "../components/CmsSelect";
import { RichTextEditor } from "../components/RichTextEditor";

type Category = { id: number; name: string };
export type PostFormValues = {
  title?: string | null;
  slug?: string | null;
  excerpt?: string | null;
  content?: string | null;
  categoryId?: number | null;
  status?: string | null;
  art?: string | null;
  featuredImageUrl?: string | null;
  featuredImageAlt?: string | null;
  readingMinutes?: number | null;
  authorName?: string | null;
  publishedAt?: string | null;
};

interface PostFormProps {
  categories: Category[];
  post?: PostFormValues;
  authorDefault?: string;
  action: (formData: FormData) => void | Promise<void>;
  close?: () => void;
}

export function PostForm({
  categories,
  post,
  authorDefault = "Administrador",
  action,
  close,
}: PostFormProps) {
  const current = post ?? {
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    categoryId: null,
    status: "draft",
    art: "network",
    featuredImageUrl: null,
    featuredImageAlt: null,
    readingMinutes: 3,
    authorName: authorDefault,
    publishedAt: null,
  };

  const [title, setTitle] = useState(current.title || "");
  const [slug, setSlug] = useState(current.slug || "");
  const [slugTouched, setSlugTouched] = useState(Boolean(current.slug));
  const [status, setStatus] = useState<string>(current.status || "draft");
  const [content, setContent] = useState<string>(current.content || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const titleId = useId();
  const slugId = useId();
  const excerptId = useId();
  const dateId = useId();

  // Helper for auto-slugify
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!slugTouched) {
      setSlug(slugify(val));
    }
  };

  // Automatically calculate reading minutes from content
  const autoReadingMinutes = useMemo(() => {
    const text = content.trim();
    const words = text ? text.split(/\s+/).length : 0;
    return Math.max(1, Math.ceil(words / 200));
  }, [content]);

  // Format initial datetime-local value for scheduled posts
  const initialDateTimeLocal = (() => {
    if (current.publishedAt) {
      try {
        const d = new Date(current.publishedAt);
        if (!isNaN(d.getTime())) {
          return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 16);
        }
      } catch {
        // fallback
      }
    }
    // Default to tomorrow 10:00 AM for a new scheduled post
    const future = new Date();
    future.setDate(future.getDate() + 1);
    future.setHours(10, 0, 0, 0);
    return new Date(future.getTime() - future.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16);
  })();

  const categoryOptions: CmsSelectOption[] = [
    { value: "", label: "Sem categoria associada" },
    ...categories.map((c) => ({ value: c.id, label: c.name })),
  ];

  const statusOptions: CmsSelectOption[] = [
    { value: "draft", label: "📝 Rascunho (Guardar para revisão)" },
    { value: "published", label: "🟢 Publicado (Imediato no site)" },
    { value: "scheduled", label: "⏰ Agendado (Data e hora futura)" },
    { value: "archived", label: "📁 Arquivado (Oculto do público)" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  const getSubmitLabel = () => {
    if (isSubmitting) return "A processar...";
    if (status === "scheduled") return "Agendar notícia";
    if (status === "published") return "Publicar notícia";
    if (status === "archived") return "Arquivar notícia";
    return "Guardar rascunho";
  };

  return (
    <form
      action={action}
      onSubmit={handleSubmit}
      className="cms-post-form"
    >
      {/* Hidden automatic fields */}
      <input
        type="hidden"
        name="authorName"
        value={current.authorName ?? authorDefault}
      />
      <input
        type="hidden"
        name="readingMinutes"
        value={autoReadingMinutes}
      />

      <div className="cms-post-form__content">
        {/* Title & Slug Header */}
        <div className="cms-form-group">
          <div className="cms-field-block">
            <label htmlFor={titleId} className="cms-field-label">
              Título da notícia <span className="cms-required-dot">*</span>
            </label>
            <input
              id={titleId}
              name="title"
              required
              value={title}
              onChange={handleTitleChange}
              placeholder="Ex: Grupo JC expande operações com novo centro logístico"
              className="cms-text-input cms-text-input--title"
            />
          </div>

          <div className="cms-field-block">
            <label htmlFor={slugId} className="cms-field-label">
              Identificador URL (Slug)
            </label>
            <div className="cms-slug-input-wrapper">
              <span className="cms-slug-prefix">/noticias/</span>
              <input
                id={slugId}
                name="slug"
                value={slug}
                onChange={(e) => {
                  setSlugTouched(true);
                  setSlug(e.target.value);
                }}
                placeholder="gerado-automaticamente"
                className="cms-text-input cms-text-input--slug"
              />
            </div>
          </div>
        </div>

        {/* Resumo / Excerpt */}
        <div className="cms-field-block">
          <label htmlFor={excerptId} className="cms-field-label">
            Resumo do artigo <span className="cms-required-dot">*</span>
            <span className="cms-field-hint">
              (Aparece nos cartões de listagem e no topo da notícia)
            </span>
          </label>
          <textarea
            id={excerptId}
            name="excerpt"
            required
            rows={3}
            defaultValue={current.excerpt ?? ""}
            placeholder="Breve resumo informativo sobre a notícia..."
            className="cms-textarea-input"
          />
        </div>

        {/* Banner / Cover Image Upload */}
        <BannerUpload
          initialUrl={current.featuredImageUrl}
          initialAlt={current.featuredImageAlt}
          name="featuredImageUrl"
          altName="featuredImageAlt"
        />

        {/* Rich Text Editor for Content */}
        <div className="cms-field-block">
          <label className="cms-field-label">
            Conteúdo principal da notícia <span className="cms-required-dot">*</span>
          </label>
          <RichTextEditor
            name="content"
            defaultValue={current.content ?? ""}
            required
            minHeight="340px"
          />
        </div>

        {/* Metadata Configuration Section */}
        <div className="cms-form-meta-container">
          <div className="cms-form-meta-row">
            {/* Categoria */}
            <CmsSelect
              label="Categoria editorial"
              name="categoryId"
              defaultValue={current.categoryId ?? ""}
              options={categoryOptions}
            />

            {/* Estado */}
            <CmsSelect
              label="Estado do artigo"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              options={statusOptions}
            />
          </div>

          {/* Data e Hora de Agendamento - ONLY visible when status is scheduled */}
          {status === "scheduled" && (
            <div className="cms-schedule-date-box">
              <div className="cms-field-block">
                <label htmlFor={dateId} className="cms-field-label">
                  Data e Hora de Agendamento <span className="cms-required-dot">*</span>
                </label>
                <div className="cms-input-icon-wrap">
                  <Clock size={16} className="cms-input-icon cms-input-icon--accent" />
                  <input
                    id={dateId}
                    type="datetime-local"
                    name="publishedAt"
                    defaultValue={initialDateTimeLocal}
                    required
                    className="cms-text-input cms-text-input--with-icon"
                  />
                </div>
                <span className="cms-field-helper cms-field-helper--scheduled">
                  O artigo será publicado automaticamente no site nesta data e hora.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Fixed Bottom Actions Bar */}
      <div className="cms-post-form__footer">
        <div className="cms-post-form__footer-info">
          {status === "scheduled" && (
            <span className="cms-schedule-badge">
              <Clock size={14} /> Agendamento ativo
            </span>
          )}
          {status === "published" && (
            <span className="cms-publish-badge">
              <Sparkles size={14} /> Publicação imediata
            </span>
          )}
        </div>

        <div className="cms-post-form__footer-actions">
          <button
            type="button"
            onClick={() => {
              if (close) {
                close();
              } else if (typeof window !== "undefined") {
                window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
              }
            }}
            className="cms-btn-secondary"
            disabled={isSubmitting}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="cms-btn-primary"
            disabled={isSubmitting}
          >
            {getSubmitLabel()}
          </button>
        </div>
      </div>
    </form>
  );
}

function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
