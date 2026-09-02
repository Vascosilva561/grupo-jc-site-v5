"use client";

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ContactForm } from "../components/ContactForm";
import { useLanguage } from "../translations";

export function ContactClient() {
  const { t } = useLanguage();

  return (
    <main className="contact-page">
      <SiteHeader />
      <section className="contact-section shell">
        <div className="contact-intro">
          <span className="eyebrow">{t.contactos.eyebrow}</span>
          <h2>{t.contactos.title}</h2>
          <p>{t.contactos.description}</p>
          <div className="contact-details">
            <article>
              <span>{t.contactos.locationLabel}</span>
              <strong>
                {t.contactos.locationValuePart1}
                <br />
                {t.contactos.locationValuePart2}
              </strong>
            </article>
            <article>
              <span>{t.contactos.availabilityLabel}</span>
              <strong>{t.contactos.availabilityValue}</strong>
            </article>
          </div>
        </div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
