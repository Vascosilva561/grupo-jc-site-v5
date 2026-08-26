"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { CmsModal } from "./CmsModal";

interface DeleteConfirmModalProps {
  title: string;
  description: React.ReactNode;
  action: (formData: FormData) => void | Promise<void>;
  buttonLabel?: string;
  trigger?: React.ReactNode;
}

export function DeleteConfirmModal({
  title,
  description,
  action,
  buttonLabel = "Eliminar",
  trigger,
}: DeleteConfirmModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <CmsModal
      title={title}
      tone="danger"
      trigger={trigger || <Trash2 size={16} />}
    >
      <form
        action={action}
        onSubmit={() => setIsDeleting(true)}
        className="cms-modal-form"
      >
        <p>{description}</p>
        <div className="cms-modal-actions">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "Escape" })
                );
              }
            }}
            className="cms-btn-secondary"
            disabled={isDeleting}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="cms-danger"
            disabled={isDeleting}
          >
            {isDeleting ? "A eliminar..." : buttonLabel}
          </button>
        </div>
      </form>
    </CmsModal>
  );
}
