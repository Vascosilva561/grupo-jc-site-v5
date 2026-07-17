"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "./ArrowUpRight";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      <label><span>Assunto</span><select name="assunto" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Informações gerais</option><option>Parcerias</option><option>Investimentos</option><option>Imprensa</option><option>Fornecedores</option><option>Carreiras</option><option>Contactar uma empresa do grupo</option></select></label>
      <label><span>Mensagem</span><textarea name="mensagem" rows={6} required placeholder="Conte-nos como podemos ajudar." /></label>
      <button className="button button--dark" type="submit">Enviar mensagem <ArrowRight /></button>
      <p className="form-note">Esta versão demonstra a experiência do formulário. O envio será ativado quando o canal institucional for configurado.</p>
    </form>
  );
}
