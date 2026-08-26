import Image from "next/image";
import Link from "next/link";
import { FileText, LayoutDashboard, LogOut, Users } from "lucide-react";
import { logoutAction } from "./auth";

type NavItem = [string, string, any];

export function AdminLayout({
  children,
  userName,
  role = "editor",
  active,
}: {
  children: React.ReactNode;
  userName: string;
  role?: "admin" | "editor";
  active: string;
}) {
  const navigation: NavItem[] = [
    ["Visão geral", "/admin", LayoutDashboard],
    ["Posts", "/admin/posts", FileText],
  ];

  // Taxonomy and profiles are strictly restricted to Administrador.
  if (role === "admin") {
    navigation.push(["Categorias", "/admin/tags", FileText]);
    navigation.push(["Perfis", "/admin/profiles", Users]);
  }

  return (
    <main className="cms">
      <aside className="cms-sidebar">
        <Link className="cms-logo" href="/admin">
          <Image
            src="/brand/grupo-jc-white.svg"
            alt="Grupo JC"
            width={145}
            height={34}
            priority
          />
          <span>CONTENT MANAGER</span>
        </Link>
        <nav>
          {navigation.map(([label, href, Icon]) => (
            <Link
              className={active === href ? "is-active" : ""}
              href={href}
              key={href}
            >
              <Icon size={18} strokeWidth={1.8} />
              {label}
            </Link>
          ))}
        </nav>
        <div className="cms-account">
          <div className="cms-account__user">
            <span className="cms-account__name">{userName}</span>
            <small className={`cms-role-pill cms-role-pill--${role}`}>
              {role === "admin" ? "🛡️ Administrador" : "✍️ Editor"}
            </small>
          </div>
          <form action={logoutAction}>
            <button type="submit" className="cms-logout-btn" title="Terminar sessão">
              <LogOut size={16} /> Sair
            </button>
          </form>
        </div>
      </aside>
      <section className="cms-main">{children}</section>
    </main>
  );
}
