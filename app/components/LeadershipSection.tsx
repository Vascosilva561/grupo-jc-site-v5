"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "./ArrowUpRight";
import { useLanguage } from "../translations";

export function LeadershipSection() {
  const { t } = useLanguage();
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

  const modal = t.grupo.leadershipDetail.modal;

  return (
    <>
      <section className="sobre-leadership-detail">
        <div className="shell sobre-leadership-grid">
          <div className="sobre-leadership-photo">
            <img
              src="/assets/sobre/jorge-centeno-ceo.webp"
              alt={t.grupo.leadershipDetail.ceoAlt}
            />
          </div>
          <div className="sobre-leadership-content">
            <span className="eyebrow">{t.grupo.leadershipDetail.eyebrow}</span>
            <h2>{t.grupo.leadershipDetail.title}</h2>
            <p className="sobre-leadership-body">
              {t.grupo.leadershipDetail.body}
            </p>
            <blockquote className="sobre-leadership-quote">
              {t.grupo.leadershipDetail.quote}
            </blockquote>
            <div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="home-v2-text-link leadership-cta-button"
                aria-haspopup="dialog"
              >
                {t.grupo.leadershipDetail.cta} <ArrowUpRight />
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
                aria-label={modal.closeAria}
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
                      src="/assets/sobre/jorge-centeno-ceo.webp"
                      alt={t.grupo.leadershipDetail.ceoAlt}
                    />
                  </div>

                  {/* Conteúdo Completo do Percurso */}
                  <div className="leadership-modal-content">
                    <span className="eyebrow">{t.grupo.leadershipDetail.eyebrow}</span>
                    <h2 id="leadership-modal-title">
                      {modal.title}
                    </h2>

                    <p>{modal.p1}</p>
                    <p>{modal.p2}</p>
                    <p>{modal.p3}</p>
                    <p>{modal.p4}</p>

                    <h3>{modal.h3_1}</h3>

                    <p>{modal.p5}</p>
                    <p>{modal.p6}</p>
                    <p>{modal.p7}</p>
                    <p>{modal.p8}</p>

                    <blockquote className="sobre-leadership-quote">
                      {modal.quote}
                    </blockquote>

                    <h3>{modal.h3_2}</h3>

                    <p>{modal.p9}</p>
                    <p>{modal.p10}</p>
                    <p>{modal.p11}</p>

                    <h3>{modal.h3_3}</h3>

                    <p>{modal.p12}</p>
                    <p>{modal.p13}</p>
                    <p>{modal.p14}</p>
                    <p>{modal.p15}</p>
                    <p>{modal.p16}</p>
                    <p>{modal.p17}</p>
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
