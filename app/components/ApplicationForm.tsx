"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowRight } from "./ArrowUpRight";
import { useLanguage } from "../translations";

export function ApplicationForm() {
  const { t } = useLanguage();
  const formT = t.candidatura.form;

  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  function updateFile(event: ChangeEvent<HTMLInputElement>) {
    setFileName(event.target.files?.[0]?.name ?? "");
  }

  if (sent) {
    return (
      <div className="application-success" role="status">
        <span>{formT.successBadge}</span>
        <h2>{formT.successTitle}</h2>
        <p>{formT.successText}</p>
        <button type="button" onClick={() => setSent(false)}>
          {formT.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form className="application-form" onSubmit={submit}>
      <div className="application-field-grid">
        <label>
          <span>{formT.fullName}</span>
          <input name="nome" autoComplete="name" required placeholder={formT.fullNamePlaceholder} />
        </label>
        <label>
          <span>{formT.email}</span>
          <input name="email" type="email" autoComplete="email" required placeholder={formT.emailPlaceholder} />
        </label>
        <label>
          <span>{formT.phone}</span>
          <input name="telefone" type="tel" autoComplete="tel" required placeholder={formT.phonePlaceholder} />
        </label>
        <label>
          <span>{formT.portfolio}</span>
          <input name="perfil" type="url" placeholder={formT.portfolioPlaceholder} />
        </label>
      </div>
      <label>
        <span>{formT.areaOfInterest}</span>
        <input name="area" required placeholder={formT.areaOfInterestPlaceholder} />
      </label>
      <label>
        <span>{formT.coverLetter}</span>
        <textarea name="apresentacao" rows={5} required placeholder={formT.coverLetterPlaceholder} />
      </label>
      <label className="application-file">
        <span>{formT.resume}</span>
        <input name="curriculo" type="file" required accept=".pdf,.doc,.docx" onChange={updateFile} />
        <small>{fileName || formT.resumePlaceholder}</small>
      </label>
      <label className="application-consent">
        <input name="consentimento" type="checkbox" required />
        <span>{formT.consent}</span>
      </label>
      <button className="button button--dark" type="submit">
        {formT.submit} <ArrowRight />
      </button>
      <p className="form-note">{formT.note}</p>
    </form>
  );
}
