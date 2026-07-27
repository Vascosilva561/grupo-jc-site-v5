"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "../data";
import { ArrowUpRight } from "./ArrowUpRight";

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const primaryNavigation = navigation.filter((item) => item.href !== "/carreiras");
  const menuItems = [{ label: "Início", href: "/" }, ...primaryNavigation];

  return (
    <>
      <header className={`site-header ${dark ? "site-header--dark" : ""}`}>
      <div className="shell header-inner">
        <Link href="/" className="brand-link" aria-label="Grupo JC — Início">
          <img src={dark ? "/brand/grupo-jc-white.svg" : "/brand/grupo-jc-black.svg"} alt="Grupo JC" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <Link href="/contactos" className="header-cta">
          Fale Connosco <ArrowUpRight size={16} />
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <nav aria-label="Navegação móvel">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
            ))}
            <Link href="/contactos">Contactos</Link>
          </nav>
        </details>
      </div>
      </header>
      <div className="site-header-spacer" aria-hidden="true" />
    </>
  );
}
