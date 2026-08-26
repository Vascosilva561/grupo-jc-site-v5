import Image from "next/image";
import { redirect } from "next/navigation";
import { getCmsSession } from "../auth";
import { LoginForm } from "./LoginForm";

export const dynamic = "force-dynamic";

export default async function CmsLoginPage() {
  const user = await getCmsSession();
  if (user) {
    redirect("/admin");
  }

  return (
    <main className="cms-login-page">
      <div className="cms-login-card">
        <header className="cms-login-header">
          <Image
            src="/brand/grupo-jc-black.svg"
            alt="Grupo JC"
            width={160}
            height={40}
            priority
          />
          <span className="cms-login-badge">CONTENT MANAGER</span>
          <h1>Acesso Administrativo</h1>
          <p>Introduza as suas credenciais para gerir o portal e conteúdos.</p>
        </header>

        <LoginForm />

        <footer className="cms-login-footer">
          <small>Grupo JC &copy; {new Date().getFullYear()} &bull; Área Segura</small>
        </footer>
      </div>
    </main>
  );
}
