import Image from "next/image";
import { bootstrapAdminAction } from "../auth";
import { PasswordField } from "../components/PasswordField";
export const dynamic = "force-dynamic";
export default async function SetupPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  const errorMessage = error === "invalid-token"
    ? "Código de configuração inválido. Confirme o valor de CMS_SETUP_TOKEN na Vercel."
    : error === "database"
      ? "Não foi possível gravar na base de dados. Confirme DATABASE_URL e tente novamente."
      : error === "invalid-data"
        ? "Preencha todos os campos e utilize uma palavra-passe de pelo menos 12 caracteres."
        : null;
  return <main className="cms-login-page"><div className="cms-login-card"><header className="cms-login-header"><Image src="/brand/grupo-jc-black.svg" alt="Grupo JC" width={160} height={40} priority/><span className="cms-login-badge">CONFIGURAÇÃO ÚNICA</span><h1>Criar administrador</h1><p>Esta página só funciona enquanto ainda não existir uma conta no CMS.</p></header>{errorMessage && <p role="alert" className="cms-field-error">{errorMessage}</p>}<form action={bootstrapAdminAction} className="cms-modal-form"><label>Nome completo<input name="name" required/></label><label>E-mail<input name="email" type="email" required/></label><label>Palavra-passe<PasswordField required placeholder="Pelo menos 12 caracteres"/></label><label>Código de configuração<input name="setupToken" type="password" required/></label><button className="cms-login-submit">Criar acesso seguro</button></form></div></main>
}
