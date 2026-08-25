import Link from "next/link";
import { chatGPTSignOutPath } from "../chatgpt-auth";
import { requireCmsAdmin } from "./auth";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Administração",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const user = await requireCmsAdmin();

  return (
    <main className="admin-shell">
      <header className="admin-header">
        <Link className="admin-brand" href="/">Grupo JC <span>CMS</span></Link>
        <div className="admin-user">
          <span>{user.displayName}</span>
          <a href={chatGPTSignOutPath("/admin")}>Terminar sessão</a>
        </div>
      </header>
      <section className="admin-intro">
        <p className="eyebrow">Administração</p>
        <h1>Conteúdo do Grupo JC.</h1>
        <p>O painel de gestão de notícias será disponibilizado aqui.</p>
      </section>
    </main>
  );
}
