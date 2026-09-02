"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { companyCardTints, companyChipThemes } from "../data";
import { ArrowUpRight } from "./ArrowUpRight";
import { SiteHeader } from "./SiteHeader";
import { useLanguage } from "../translations";

type FilterKey = "all" | "Tecnologia" | "Pagamentos" | "Serviços financeiros" | "Entretenimento";

export function CompanyFilter() {
  const { t, companies } = useLanguage();
  const [active, setActive] = useState<FilterKey>("all");
  const capsuleRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const filterItems: Array<{ key: FilterKey; label: string }> = [
    { key: "all", label: t.empresas.filters.all },
    { key: "Tecnologia", label: t.empresas.filters.tech },
    { key: "Pagamentos", label: t.empresas.filters.payments },
    { key: "Serviços financeiros", label: t.empresas.filters.finServices },
    { key: "Entretenimento", label: t.empresas.filters.entertainment },
  ];

  const visible = active === "all" ? companies : companies.filter((company) => company.category === active);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const requestedCategory = new URLSearchParams(window.location.search).get("categoria");
      if (requestedCategory) {
        const found = filterItems.find((f) => f.label.toLowerCase() === requestedCategory.toLowerCase() || f.key.toLowerCase() === requestedCategory.toLowerCase());
        if (found) {
          setActive(found.key);
        }
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const capsule = capsuleRef.current;
    const button = buttonRefs.current[active];
    if (!capsule || !button) return;
    window.requestAnimationFrame(() => {
      const targetLeft = button.offsetLeft - (capsule.clientWidth - button.offsetWidth) / 2;
      capsule.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
    });
  }, [active]);

  const selectFilter = (key: FilterKey) => {
    setActive(key);

    const url = new URL(window.location.href);
    if (key === "all") {
      url.searchParams.delete("categoria");
    } else {
      url.searchParams.set("categoria", key);
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  return (
    <>
      {/* Dark Hero Section ONLY */}
      <div className="empresas-hero-wrap">
        <SiteHeader dark />
        <section className="empresas-hero shell">
          <span className="eyebrow eyebrow--light">{t.empresas.hero.eyebrow}</span>
          <h1>{t.empresas.hero.title}</h1>
          <p>{t.empresas.hero.description}</p>

          {/* White capsule switch tab filter bar */}
          <div
            ref={capsuleRef}
            className="empresas-filter-capsule"
            aria-label="Filtrar empresas"
          >
            {filterItems.map((item) => (
              <button
                key={item.key}
                type="button"
                className={active === item.key ? "active" : ""}
                aria-pressed={active === item.key}
                ref={(button) => {
                  buttonRefs.current[item.key] = button;
                }}
                onClick={() => selectFilter(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Directory Grid Section */}
      <section className="content-section empresas-directory-section shell">
        <div className="directory-grid" aria-live="polite">
          {visible.map((company, index) => {
            const chipTheme = companyChipThemes[company.slug];

            return (
              <Link
                key={company.slug}
                href={`/empresas/${company.slug}`}
                className="directory-card"
                style={
                  {
                    "--accent": company.accent,
                    "--card-hover": companyCardTints[company.slug],
                    "--chip-bg": chipTheme?.bg,
                    "--chip-color": chipTheme?.color,
                    "--chip-border": chipTheme?.border,
                  } as CSSProperties
                }
              >
                <div className="directory-card-content">
                  <div className="directory-card-head">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <ArrowUpRight />
                  </div>
                  <div className="directory-logo">
                    <img src={company.logo} alt={company.name} />
                  </div>
                  <span className="company-category">{company.category}</span>
                  <h2>{company.tagline}</h2>
                  <p>{company.description}</p>
                  <div className="solution-chips">
                    {company.solutions.slice(0, 3).map((solution) => (
                      <span key={solution}>{solution}</span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
