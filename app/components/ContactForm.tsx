"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight } from "./ArrowUpRight";

const subjectOptions = [
  "Informações institucionais",
  "Parcerias e novos negócios",
  "Investimento e oportunidades",
  "Imprensa e comunicação",
  "Fornecedores e serviços",
  "Oportunidades profissionais",
  "Contactar uma empresa do Grupo JC",
  "Outro assunto",
];

export function ContactForm() {
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
    const submittedSubject = subject === "Outro assunto" ? otherSubject.trim() : subject;
    if (!submittedSubject) {
      setSubjectError(true);
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span>Mensagem registada</span>
        <h2>Obrigado pelo contacto.</h2>
        <p>A sua mensagem está pronta para ser encaminhada assim que o canal institucional for ligado ao website.</p>
        <button type="button" onClick={() => setSent(false)}>Enviar outra mensagem</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-grid">
        <label><span>Nome</span><input name="nome" autoComplete="name" required placeholder="Como devemos tratar-lhe?" /></label>
        <label><span>Empresa</span><input name="empresa" autoComplete="organization" placeholder="Nome da organização" /></label>
        <label><span>E-mail</span><input name="email" type="email" autoComplete="email" required placeholder="nome@empresa.ao" /></label>
        <label><span>Telefone</span><input name="telefone" type="tel" autoComplete="tel" placeholder="+244" /></label>
      </div>
      <label><span>Assunto</span><div className={`select-control${isSubjectOpen ? " is-open" : ""}${subjectError ? " is-invalid" : ""}`} ref={selectRef}>
        <input type="hidden" name="assunto" value={subject === "Outro assunto" ? otherSubject.trim() : subject} />
        <button
          type="button"
          className="select-trigger"
          aria-haspopup="listbox"
          aria-expanded={isSubjectOpen}
          onClick={() => { setIsSubjectOpen((open) => !open); setSubjectError(false); }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsSubjectOpen(true);
            }
            if (event.key === "Escape") setIsSubjectOpen(false);
          }}
        >
          <span>{subject || "Seleccione uma opção"}</span>
          <i aria-hidden="true" />
        </button>
        {isSubjectOpen && <ul className="select-options" role="listbox" aria-label="Assunto">
          {subjectOptions.map((option) => <li key={option}>
            <button
              type="button"
              role="option"
              aria-selected={subject === option}
              className={subject === option ? "is-selected" : ""}
              onClick={() => { setSubject(option); setSubjectError(false); setIsSubjectOpen(false); }}
            >{option}</button>
          </li>)}
        </ul>}
      </div></label>
      {subject === "Outro assunto" && <label className="other-subject-field"><span>Indique o assunto</span><input name="assunto-outro" value={otherSubject} onChange={(event) => { setOtherSubject(event.target.value); setSubjectError(false); }} required placeholder="Escreva o assunto do seu contacto" /></label>}
      <label><span>Mensagem</span><textarea name="mensagem" rows={6} required placeholder="Conte-nos como podemos ajudar." /></label>
      <button className="button button--dark" type="submit">Enviar mensagem <ArrowRight /></button>
      <p className="form-note">Esta versão demonstra a experiência do formulário. O envio será activado quando o canal institucional for configurado.</p>
    </form>
  );
}
