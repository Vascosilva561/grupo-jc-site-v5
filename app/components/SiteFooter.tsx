"use client";

import Link from "next/link";
import { ArrowUpRight } from "./ArrowUpRight";
import { useLanguage } from "../translations";

export function SiteFooter() {
  const { t, companies } = useLanguage();

  const groupNav = [
    { label: t.header.about, href: "/grupo" },
    { label: t.header.companies, href: "/empresas" },
    { label: t.header.areas, href: "/areas" },
    { label: t.header.impact, href: "/impacto" },
  ];

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <img src="/brand/grupo-jc-white.svg" alt="Grupo JC" className="footer-logo" />
            <p>{t.footer.tagline}</p>
          </div>
          <Link href="/contactos" className="footer-contact">
            {t.footer.letsTalk} <ArrowUpRight size={28} />
          </Link>
        </div>
        <div className="footer-grid">
          <div>
            <span className="footer-label">{t.footer.aboutGroup}</span>
            {groupNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <span className="footer-label">{t.footer.companiesLabel}</span>
            {companies.map((company) => (
              <Link key={company.slug} href={`/empresas/${company.slug}`}>
                {company.name}
              </Link>
            ))}
          </div>
          <div>
            <span className="footer-label">{t.footer.opportunities}</span>
            <Link href="/candidatura">{t.footer.spontaneousApplication}</Link>
          </div>
          <div>
            <span className="footer-label">{t.footer.links}</span>
            <Link href="/noticias">{t.footer.news}</Link>
            <Link href="/contactos">{t.footer.contacts}</Link>
            <Link href="/privacidade">{t.footer.privacy}</Link>
            <Link href="/termos">{t.footer.terms}</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.rights}</span>
          <span className="footer-progress">
            {t.footer.progressSlogan} <img src="/assets/flag-angola.svg" alt="Bandeira de Angola" />
          </span>
          <span>{t.footer.country}</span>
        </div>
      </div>
    </footer>
  );
}
