type Category = { id: number; name: string };
type PostValues = { title: string; slug: string; excerpt: string; content: string; categoryId: number | null; status: string; art: string; readingMinutes: number };

export function PostForm({ categories, post, action }: { categories: Category[]; post?: PostValues; action: (formData: FormData) => void | Promise<void> }) {
  const current = post ?? { title: "", slug: "", excerpt: "", content: "", categoryId: null, status: "draft", art: "network", readingMinutes: 3 };
  return <form action={action} className="admin-form">
    <label>Título<input name="title" required defaultValue={current.title} /></label>
    <label>Slug<input name="slug" defaultValue={current.slug} placeholder="Gerado automaticamente a partir do título" /></label>
    <label>Resumo<textarea name="excerpt" required rows={3} defaultValue={current.excerpt} /></label>
    <label>Conteúdo (Markdown)<textarea name="content" required rows={14} defaultValue={current.content} /></label>
    <div className="admin-form__grid">
      <label>Categoria<select name="categoryId" defaultValue={current.categoryId ?? ""}><option value="">Sem categoria</option>{categories.map((category) => <option value={category.id} key={category.id}>{category.name}</option>)}</select></label>
      <label>Estado<select name="status" defaultValue={current.status}><option value="draft">Rascunho</option><option value="published">Publicado</option><option value="archived">Arquivado</option></select></label>
      <label>Leitura (min.)<input name="readingMinutes" type="number" min="1" required defaultValue={current.readingMinutes} /></label>
      <label>Visual<select name="art" defaultValue={current.art}><option value="network">Rede</option><option value="growth">Crescimento</option><option value="people">Pessoas</option><option value="impact">Impacto</option><option value="portfolio">Portefólio</option><option value="partnership">Parcerias</option></select></label>
    </div>
    <button className="admin-submit" type="submit">Guardar notícia</button>
  </form>;
}
