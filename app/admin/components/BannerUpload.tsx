"use client";

import { useId, useRef, useState } from "react";
import { Image as ImageIcon, Link as LinkIcon, RefreshCw, Trash2, UploadCloud } from "lucide-react";

interface BannerUploadProps {
  initialUrl?: string | null;
  initialAlt?: string | null;
  name?: string;
  altName?: string;
}

export function BannerUpload({
  initialUrl = "",
  initialAlt = "",
  name = "featuredImageUrl",
  altName = "featuredImageAlt",
}: BannerUploadProps) {
  const [imageUrl, setImageUrl] = useState<string>(initialUrl || "");
  const [hasLocalFile, setHasLocalFile] = useState(false);
  const [altText, setAltText] = useState<string>(initialAlt || "");
  const [isUrlMode, setIsUrlMode] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const altInputId = useId();

  const handleFileChange = (file: File | null) => {
    setError("");
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Por favor selecione um ficheiro de imagem válido (JPG, PNG, WebP, SVG).");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("A imagem é demasiado grande (máximo 5MB).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImageUrl(result);
      setHasLocalFile(true);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = () => {
    setImageUrl("");
    setHasLocalFile(false);
    setAltText("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="cms-banner-upload">
      <input type="hidden" name={name} value={hasLocalFile ? "" : imageUrl} />

      <div className="cms-banner-upload__header">
        <label className="cms-field-label">
          <ImageIcon size={15} />
          <span>Imagem de Capa / Banner</span>
          <span className="cms-field-hint">(Opcional)</span>
        </label>
        <button
          type="button"
          className="cms-banner-mode-toggle"
          onClick={() => setIsUrlMode(!isUrlMode)}
        >
          {isUrlMode ? (
            <>
              <UploadCloud size={13} /> Carregar ficheiro local
            </>
          ) : (
            <>
              <LinkIcon size={13} /> Inserir URL direto
            </>
          )}
        </button>
      </div>

      {imageUrl ? (
        /* Preview with Action Controls */
        <div className="cms-banner-preview-card">
          <div className="cms-banner-preview-img-wrap">
            <img
              src={imageUrl}
              alt={altText || "Pré-visualização do banner"}
              className="cms-banner-preview-img"
            />
            <div className="cms-banner-preview-overlay">
              <button
                type="button"
                className="cms-banner-action-btn cms-banner-action-btn--replace"
                onClick={() => fileInputRef.current?.click()}
                title="Substituir imagem"
              >
                <RefreshCw size={14} /> Substituir
              </button>
              <button
                type="button"
                className="cms-banner-action-btn cms-banner-action-btn--remove"
                onClick={handleRemove}
                title="Remover banner"
              >
                <Trash2 size={14} /> Remover
              </button>
            </div>
          </div>

          <div className="cms-banner-alt-wrap">
            <label htmlFor={altInputId} className="cms-field-label">
              Descrição da imagem (Texto alternativo / Alt)
            </label>
            <input
              id={altInputId}
              name={altName}
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Ex: Cerimónia de inauguração da nova infraestrutura"
              className="cms-text-input cms-text-input--alt"
            />
          </div>
        </div>
      ) : isUrlMode ? (
        /* URL Input Mode */
        <div className="cms-banner-url-box">
          <div className="cms-input-icon-wrap">
            <LinkIcon size={16} className="cms-input-icon" />
            <input
              type="url"
              name={name}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://exemplo.com/imagem-destaque.jpg"
              className="cms-text-input cms-text-input--with-icon"
            />
          </div>
        </div>
      ) : (
        /* Drag and Drop / File Select Mode */
        <div
          className={`cms-banner-dropzone ${isDragging ? "is-dragging" : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              fileInputRef.current?.click();
            }
          }}
        >
          <div className="cms-banner-dropzone__icon">
            <UploadCloud size={24} />
          </div>
          <div className="cms-banner-dropzone__text">
            <strong>Clique para carregar</strong> ou arraste e solte o ficheiro
            <span>PNG, JPG, WebP ou SVG (máx. 5MB)</span>
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        name="featuredImageFile"
        accept="image/png,image/jpeg,image/webp,image/svg+xml"
        style={{ display: "none" }}
        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
      />

      {error && <span className="cms-field-error">{error}</span>}
    </div>
  );
}
