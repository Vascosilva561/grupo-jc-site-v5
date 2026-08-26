"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface CmsModalProps {
  title: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  tone?: "default" | "danger" | "ghost";
  size?: "default" | "large" | "xl";
  className?: string;
}

export function CmsModal({
  title,
  trigger,
  children,
  tone = "default",
  size = "default",
  className = "",
}: CmsModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={`cms-modal-trigger cms-modal-trigger--${tone} ${className}`}
        onClick={() => setOpen(true)}
      >
        {trigger}
      </button>

      {open && (
        <div
          className="cms-modal-backdrop"
          role="presentation"
          onMouseDown={() => setOpen(false)}
        >
          <section
            className={`cms-modal cms-modal--${size}`}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="cms-modal__header">
              <h2>{title}</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar modal"
                className="cms-modal__close"
              >
                <X size={20} />
              </button>
            </header>
            <div className="cms-modal__body">
              {children}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
