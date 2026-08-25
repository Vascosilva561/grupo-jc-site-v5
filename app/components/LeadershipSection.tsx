"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "./ArrowUpRight";

export function LeadershipSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="sobre-leadership-detail">
        <div className="shell sobre-leadership-grid">
          <div className="sobre-leadership-photo">
            <img
              src="/assets/sobre/jorge-centeno-ceo.jpg"
              alt="Jorge Eduardo Centeno da Silveira Risques - CEO GRUPOJC"
            />
          </div>
          <div className="sobre-leadership-content">
            <span className="eyebrow">LIDERANÇA</span>
            <h2>Da visão à construção de novas oportunidades.</h2>
            <p className="sobre-leadership-body">
              Ao longo do seu percurso, Jorge Eduardo Centeno tem construído e desenvolvido negócios em diferentes sectores, acompanhando de perto novas oportunidades e a evolução do mercado. Essa experiência moldou a visão que hoje orienta o Grupo JC: aproximar competências, fortalecer empresas e transformar oportunidades em negócios capazes de gerar valor para o mercado e para as pessoas.
            </p>
            <blockquote className="sobre-leadership-quote">
              “O verdadeiro crescimento acontece quando criamos oportunidades para que mais pessoas possam crescer connosco.”
            </blockquote>
            <div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="home-v2-text-link leadership-cta-button"
                aria-haspopup="dialog"
              >
                Conhecer o seu percurso <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* JANELA MODAL DO PERCURSO */}
      {isModalOpen && (
        <div className="leadership-modal-root">
          {/* Fundo com efeito de Blur */}
          <div
            className="leadership-modal-backdrop"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          />

          <div className="leadership-modal-wrapper">
            <div
              className="leadership-modal-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="leadership-modal-title"
            >
              {/* Botão de Fechar */}
              <button
                type="button"
                className="leadership-modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Fechar janela"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="leadership-modal-scroll">
                <div className="leadership-modal-grid">
                  {/* Foto de Jorge Eduardo Centeno */}
                  <div className="leadership-modal-photo">
                    <img
                      src="/assets/sobre/jorge-centeno-ceo.jpg"
                      alt="Jorge Eduardo Centeno da Silveira Risques - CEO GRUPOJC"
                    />
                  </div>

                  {/* Conteúdo Completo do Percurso */}
                  <div className="leadership-modal-content">
                    <span className="eyebrow">LIDERANÇA</span>
                    <h2 id="leadership-modal-title">
                      Da visão à construção de novas oportunidades
                    </h2>

                    <p>
                      O percurso de Jorge Eduardo Centeno tem sido marcado pela criação e desenvolvimento de negócios em diferentes sectores, sempre com atenção às mudanças do mercado e às oportunidades que surgem a partir delas.
                    </p>

                    <p>
                      Ao longo dos anos, essa experiência permitiu-lhe construir uma visão empresarial assente na capacidade de identificar necessidades, reunir as competências certas e transformar oportunidades em negócios com potencial para crescer.
                    </p>

                    <p>
                      Mais do que olhar para cada empresa de forma isolada, Jorge acredita na força que existe quando diferentes conhecimentos, equipas e recursos trabalham na mesma direcção.
                    </p>

                    <p>
                      Foi também dessa visão que nasceu o Grupo JC: criar uma estrutura capaz de aproximar diferentes empresas, fortalecer cada uma delas e gerar condições para crescerem com maior consistência.
                    </p>

                    <h3>Construir empresas é também desenvolver pessoas</h3>

                    <p>
                      Para Jorge, o crescimento de uma empresa não deve ser medido apenas pelos seus resultados.
                    </p>

                    <p>
                      Deve também ser reflectido nas oportunidades que cria, no talento que ajuda a desenvolver e no impacto que consegue gerar à sua volta.
                    </p>

                    <p>
                      Essa forma de pensar está presente na aposta do Grupo JC em jovens profissionais, na criação de novos postos de trabalho e na construção de ambientes onde as pessoas possam aprender, ganhar experiência e assumir novos desafios.
                    </p>

                    <p>
                      Acreditar no potencial das pessoas é, para ele, uma parte essencial da construção de empresas preparadas para o futuro.
                    </p>

                    <blockquote className="sobre-leadership-quote">
                      “O verdadeiro crescimento acontece quando criamos oportunidades para que mais pessoas possam crescer connosco.”
                    </blockquote>

                    <h3>Uma visão que liga diferentes negócios</h3>

                    <p>
                      Hoje, o Grupo JC reúne empresas com actuação em tecnologia, pagamentos, serviços financeiros e entretenimento.
                    </p>

                    <p>
                      Embora cada uma tenha a sua própria identidade, mercado e objectivos, existe uma visão que as aproxima: utilizar conhecimento, tecnologia e capacidade de execução para criar soluções relevantes.
                    </p>

                    <p>
                      Enquanto CEO, Jorge Eduardo Centeno acompanha esta evolução com uma visão transversal sobre o grupo, procurando criar condições para que cada empresa cresça sem perder a sua autonomia e, ao mesmo tempo, beneficie da experiência e das capacidades existentes dentro do ecossistema.
                    </p>

                    <h3>Olhar para o que vem a seguir</h3>

                    <p>
                      A ambição para os próximos anos passa por continuar a desenvolver empresas sólidas, explorar novas oportunidades e investir em áreas capazes de acompanhar a evolução do mercado angolano.
                    </p>

                    <p>
                      Tecnologia, talento e capacidade empresarial continuam no centro dessa visão.
                    </p>

                    <p>
                      Mas o objectivo vai além de crescer enquanto grupo.
                    </p>

                    <p>
                      É contribuir para um mercado com mais soluções, mais empresas preparadas para competir e mais pessoas com oportunidades para desenvolver o seu potencial.
                    </p>

                    <p>
                      Para Jorge Eduardo Centeno, o futuro não é apenas algo que se espera.
                    </p>

                    <p>
                      É algo que se constrói.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
