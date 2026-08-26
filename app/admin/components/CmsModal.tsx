"use client";
import { useState } from "react";
import { X } from "lucide-react";

export function CmsModal({ title, trigger, children, tone = "default" }: { title: string; trigger: React.ReactNode; children: React.ReactNode; tone?: "default" | "danger" }) {
  const [open, setOpen] = useState(false);
  return <><button type="button" className={`cms-modal-trigger cms-modal-trigger--${tone}`} onClick={() => setOpen(true)}>{trigger}</button>{open && <div className="cms-modal-backdrop" role="presentation" onMouseDown={() => setOpen(false)}><section className="cms-modal" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => event.stopPropagation()}><header><h2>{title}</h2><button type="button" onClick={() => setOpen(false)} aria-label="Fechar"><X size={20}/></button></header>{children}</section></div>}</>;
}
