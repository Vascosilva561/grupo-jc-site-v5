"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight } from "./ArrowUpRight";
import { useLanguage } from "../translations";

export function ContactForm() {
  const { t } = useLanguage();
  const formT = t.contactos.form;

  const subjectOptions = [
    formT.subjects.institutional,
    formT.subjects.partnerships,
    formT.subjects.investment,
    formT.subjects.press,
    formT.subjects.suppliers,
    formT.subjects.careers,
    formT.subjects.companyContact,
    formT.subjects.other,
  ];

  const [sent, setSent] = useState(false);
  const [subject, setSubject] = useState("");
  const [otherSubject, setOtherSubject] = useState("");
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isSubjectOpen) return;
    function closeOnOutsideClick(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsSubjectOpen(false);
      }
    }
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [isSubjectOpen]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const isOther = subject === formT.subjects.other;
    const submittedSubject = isOther ? otherSubject.trim() : subject;
    if (!submittedSubject) {
      setSubjectError(true);
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span>{formT.successBadge}</span>
        <h2>{formT.successTitle}</h2>
        <p>{formT.successText}</p>
        <button type="button" onClick={() => setSent(false)}>
          {formT.sendAnother}
        </button>
      </div>
    );
  }

  const isOtherSelected = subject === formT.subjects.other;

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-grid">
        <label>
          <span>{formT.name}</span>
          <input name="nome" autoComplete="name" required placeholder={formT.namePlaceholder} />
        </label>
        <label>
          <span>{formT.company}</span>
          <input name="empresa" autoComplete="organization" placeholder={formT.companyPlaceholder} />
        </label>
        <label>
          <span>{formT.email}</span>
          <input name="email" type="email" autoComplete="email" required placeholder={formT.emailPlaceholder} />
        </label>
        <label>
          <span>{formT.phone}</span>
          <input name="telefone" type="tel" autoComplete="tel" placeholder={formT.phonePlaceholder} />
        </label>
      </div>
      <label>
        <span>{formT.subject}</span>
        <div
          className={`select-control${isSubjectOpen ? " is-open" : ""}${subjectError ? " is-invalid" : ""}`}
          ref={selectRef}
        >
          <input
            type="hidden"
            name="assunto"
            value={isOtherSelected ? otherSubject.trim() : subject}
          />
          <button
            type="button"
            className="select-trigger"
            aria-haspopup="listbox"
            aria-expanded={isSubjectOpen}
            onClick={() => {
              setIsSubjectOpen((open) => !open);
              setSubjectError(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsSubjectOpen(true);
              }
              if (event.key === "Escape") setIsSubjectOpen(false);
            }}
          >
            <span>{subject || formT.subjectPlaceholder}</span>
            <i aria-hidden="true" />
          </button>
          {isSubjectOpen && (
            <ul className="select-options" role="listbox" aria-label={formT.subject}>
              {subjectOptions.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={subject === option}
                    className={subject === option ? "is-selected" : ""}
                    onClick={() => {
                      setSubject(option);
                      setSubjectError(false);
                      setIsSubjectOpen(false);
                    }}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </label>
      {isOtherSelected && (
        <label className="other-subject-field">
          <span>{formT.otherSubjectLabel}</span>
          <input
            name="assunto-outro"
            value={otherSubject}
            onChange={(event) => {
              setOtherSubject(event.target.value);
              setSubjectError(false);
            }}
            required
            placeholder={formT.otherSubjectPlaceholder}
          />
        </label>
      )}
      <label>
        <span>{formT.message}</span>
        <textarea name="mensagem" rows={6} required placeholder={formT.messagePlaceholder} />
      </label>
      <button className="button button--dark" type="submit">
        {formT.submit} <ArrowRight />
      </button>
      <p className="form-note">{formT.note}</p>
    </form>
  );
}
