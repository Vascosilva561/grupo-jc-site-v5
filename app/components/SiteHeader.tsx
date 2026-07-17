import Link from "next/link";
import { navigation } from "../data";
import { ArrowUpRight } from "./ArrowUpRight";

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  return (
    <header className={`site-header ${dark ? "site-header--dark" : ""}`}>
      <div className="shell header-inner">
        <Link href="/" className="brand-link" aria-label="Grupo JC — Início">
          <img src={dark ? "/brand/grupo-jc-white.svg" : "/brand/grupo-jc-black.svg"} alt="Grupo JC" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link href="/contactos" className="header-cta">
          Falar com o Grupo <ArrowUpRight size={16} />
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <nav aria-label="Navegação móvel">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href="/contactos">Contactos</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
