import Image from "next/image";
import Link from "next/link";
import { FileText, LayoutDashboard, LogOut, Tags, Users } from "lucide-react";
import { chatGPTSignOutPath } from "../chatgpt-auth";

const navigation = [
  ["Visão geral", "/admin", LayoutDashboard],
  ["Posts", "/admin/posts", FileText],
  ["Tags", "/admin/tags", Tags],
  ["Perfis", "/admin/profiles", Users],
] as const;

export function AdminLayout({ children, userName, active }: { children: React.ReactNode; userName: string; active: string }) {
  return <main className="cms"><aside className="cms-sidebar"><Link className="cms-logo" href="/admin"><Image src="/brand/grupo-jc-white.svg" alt="Grupo JC" width={145} height={34} priority/><span>CONTENT MANAGER</span></Link><nav>{navigation.map(([label, href, Icon]) => <Link className={active === href ? "is-active" : ""} href={href} key={href}><Icon size={18} strokeWidth={1.8} />{label}</Link>)}</nav><div className="cms-account"><span>{userName}</span><a href={chatGPTSignOutPath("/admin")}><LogOut size={16} /> Sair</a></div></aside><section className="cms-main">{children}</section></main>;
}
