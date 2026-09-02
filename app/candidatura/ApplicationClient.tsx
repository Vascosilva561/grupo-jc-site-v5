"use client";

import { ApplicationForm } from "../components/ApplicationForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { useLanguage } from "../translations";

export function ApplicationClient() {
  const { t } = useLanguage();

  return (
    <main className="application-page">
      <SiteHeader />
      <section className="application-layout shell">
        <div className="application-intro">
          <span className="eyebrow">{t.candidatura.eyebrow}</span>
          <h1>{t.candidatura.title}</h1>
          <p>{t.candidatura.description}</p>
        </div>
        <ApplicationForm />
      </section>
      <SiteFooter />
    </main>
  );
}
