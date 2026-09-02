"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "./ArrowUpRight";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "../translations";

export function SiteHeader({ dark = false, transparentOnTop = false }: { dark?: boolean; transparentOnTop?: boolean }) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: t.header.home, href: "/" },
    { label: t.header.about, href: "/grupo" },
    { label: t.header.companies, href: "/empresas" },
    { label: t.header.areas, href: "/areas" },
    { label: t.header.impact, href: "/impacto" },
    { label: t.header.news, href: "/noticias" },
  ];

  useEffect(() => {
    if (!transparentOnTop) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const isTransparent = transparentOnTop && !isScrolled && !isMenuOpen;

  return (
    <>
      <header className={`site-header ${dark ? "site-header--dark" : ""} ${isTransparent ? "site-header--transparent" : ""} ${isMenuOpen ? "site-header--mobile-open" : ""}`}>
      <div className="shell header-inner">
        <Link href="/" className="brand-link" aria-label={`Grupo JC — ${t.header.home}`}>
          <img src={dark && !isMenuOpen ? "/brand/grupo-jc-white.svg" : "/brand/grupo-jc-black.svg"} alt="Grupo JC" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <div className="header-right">
          <div className="header-actions">
            <LanguageSelector dark={dark && !isMenuOpen} />
            <Link href="/contactos" className="header-cta">
              {t.header.contactUs} <ArrowRight size={16} />
            </Link>
          </div>
          <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="mobile-menu__toggle"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              <span /><span />
            </button>
            <nav id="mobile-navigation" aria-label="Navegação móvel">
              <p>{t.header.explore}</p>
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className={pathname === item.href ? "is-active" : ""} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                  <ArrowUpRight size={18} />
                </Link>
              ))}
              <Link href="/contactos" className="mobile-menu__contact" onClick={() => setIsMenuOpen(false)}>
                {t.header.contactUs} <ArrowRight size={18} />
              </Link>
            </nav>
          </div>
        </div>
      </div>
      </header>
      {!transparentOnTop && <div className="site-header-spacer" aria-hidden="true" />}
    </>
  );
}
