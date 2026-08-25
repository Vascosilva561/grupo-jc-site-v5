"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { companyCardTints, companyChipThemes, type Company } from "../data";
import { ArrowUpRight } from "./ArrowUpRight";
import { SiteHeader } from "./SiteHeader";

const filters = ["Todos", "Tecnologia", "Pagamentos", "Serviços financeiros", "Entretenimento"];

export function CompanyFilter({ companies }: { companies: Company[] }) {
  const [active, setActive] = useState("Todos");
  const capsuleRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const visible = active === "Todos" ? companies : companies.filter((company) => company.category === active);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const requestedCategory = new URLSearchParams(window.location.search).get("categoria");
      if (requestedCategory && filters.includes(requestedCategory)) {
        setActive(requestedCategory);
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

  const selectFilter = (filter: string) => {
    setActive(filter);

    const url = new URL(window.location.href);
    if (filter === "Todos") {
      url.searchParams.delete("categoria");
    } else {
      url.searchParams.set("categoria", filter);
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  return (
    <>
      {/* Dark Hero Section ONLY */}
      <div className="empresas-hero-wrap">
        <SiteHeader dark />
        <section className="empresas-hero shell">
          <span className="eyebrow eyebrow--light">O nosso ecossistema</span>
          <h1>Um ecossistema preparado para crescer.</h1>
          <p>
            Conheça as empresas que fazem parte do Grupo JC e descubra como cada uma contribui para criar novas soluções e oportunidades.
          </p>

          {/* White capsule switch tab filter bar */}
          <div
            ref={capsuleRef}
            className="empresas-filter-capsule"
            aria-label="Filtrar empresas"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={active === filter ? "active" : ""}
                aria-pressed={active === filter}
                ref={(button) => { buttonRefs.current[filter] = button; }}
                onClick={() => selectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Directory Grid Section - Outside the hero wrap on normal light background */}
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
