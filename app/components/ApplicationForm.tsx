"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowRight } from "./ArrowUpRight";

export function ApplicationForm() {
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
    return <div className="application-success" role="status">
      <span>Candidatura registada</span>
      <h2>Obrigado por partilhar o seu perfil.</h2>
      <p>Recebemos a sua candidatura e entraremos em contacto caso surja uma oportunidade alinhada com a sua experiência.</p>
      <button type="button" onClick={() => setSent(false)}>Enviar outra candidatura</button>
    </div>;
  }

  return <form className="application-form" onSubmit={submit}>
    <div className="application-field-grid">
      <label><span>Nome completo</span><input name="nome" autoComplete="name" required placeholder="Como devemos tratar-lhe?" /></label>
      <label><span>E-mail</span><input name="email" type="email" autoComplete="email" required placeholder="nome@exemplo.ao" /></label>
      <label><span>Telefone</span><input name="telefone" type="tel" autoComplete="tel" required placeholder="+244" /></label>
      <label><span>LinkedIn ou portefólio</span><input name="perfil" type="url" placeholder="https://" /></label>
    </div>
    <label><span>Área ou função de interesse</span><input name="area" required placeholder="Ex.: Produto, operações, tecnologia ou comunicação" /></label>
    <label><span>Apresentação</span><textarea name="apresentacao" rows={5} required placeholder="Conte-nos brevemente sobre a sua experiência e o que procura." /></label>
    <label className="application-file"><span>Currículo</span><input name="curriculo" type="file" required accept=".pdf,.doc,.docx" onChange={updateFile} /><small>{fileName || "PDF, DOC ou DOCX"}</small></label>
    <label className="application-consent"><input name="consentimento" type="checkbox" required /><span>Autorizo o tratamento dos meus dados para análise desta candidatura, de acordo com a Política de Privacidade.</span></label>
    <button className="button button--dark" type="submit">Enviar candidatura <ArrowRight /></button>
    <p className="form-note">O seu perfil será analisado apenas para oportunidades que correspondam à sua experiência.</p>
  </form>;
}
