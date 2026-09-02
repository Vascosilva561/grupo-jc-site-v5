"use client";

import { useId, useRef, useState } from "react";
import {
  CheckCircle2,
  Image as ImageIcon,
  Link as LinkIcon,
  Loader2,
  RefreshCw,
  Sparkles,
  Trash2,
  UploadCloud,
  Zap,
} from "lucide-react";
import { formatBytes, optimizeImageToWebP, type OptimizationResult } from "../utils/imageOptimizer";

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
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [optResult, setOptResult] = useState<OptimizationResult | null>(null);
  const [error, setError] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const altInputId = useId();

  const handleFileChange = async (file: File | null) => {
    setError("");
    if (!file) return;

    const isImage = file.type.startsWith("image/") || /\.(jpe?g|png|webp|svg|gif|bmp)$/i.test(file.name);
    if (!isImage) {
      setError("Por favor selecione um ficheiro de imagem válido (JPG, PNG, WebP, SVG).");
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setError("A imagem é demasiado grande (máximo 15MB).");
      return;
    }

    setIsProcessing(true);
    try {
      // Conversão automática para WebP de alta fidelidade
      const result = await optimizeImageToWebP(file, {
        maxWidth: 2048,
        maxHeight: 2048,
        quality: 0.85,
      });

      // Atualiza o input file nativo para submeter o ficheiro WebP convertido
      if (fileInputRef.current && typeof DataTransfer !== "undefined") {
        const dt = new DataTransfer();
        dt.items.add(result.file);
        fileInputRef.current.files = dt.files;
      }

      setOptResult(result);
      setImageUrl(result.previewUrl);
      setHasLocalFile(true);
    } catch (err: any) {
      console.error("Erro na otimização da imagem:", err);
      setError(err?.message || "Ocorreu um erro ao processar e otimizar a imagem.");
    } finally {
      setIsProcessing(false);
    }
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
    setOptResult(null);
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
        <div className="cms-banner-header-actions">
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
                <LinkIcon size={13} /> Inserir URL directo
              </>
            )}
          </button>
        </div>
      </div>

      {isProcessing ? (
        <div className="cms-banner-processing">
          <Loader2 size={24} className="cms-spinner" />
          <div>
            <strong>A otimizar imagem para WebP...</strong>
            <span>Convertendo e comprimindo para máxima velocidade de carregamento</span>
          </div>
        </div>
      ) : imageUrl ? (
        /* Preview with Action Controls & Optimization Badge */
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

          {/* Feedback de Otimização Automática WebP */}
          {optResult && (
            <div className="cms-banner-opt-badge">
              {optResult.isConverted ? (
                <>
                  <div className="cms-banner-opt-badge__icon">
                    <Zap size={14} />
                  </div>
                  <div className="cms-banner-opt-badge__info">
                    <span className="cms-banner-opt-badge__title">
                      Otimizado automaticamente para <strong>WebP</strong>
                    </span>
                    <span className="cms-banner-opt-badge__stats">
                      {formatBytes(optResult.originalSize)} →{" "}
                      <strong>{formatBytes(optResult.optimizedSize)}</strong>
                      {optResult.reductionPercentage > 0 && (
                        <span className="cms-banner-opt-badge__saving">
                          (-{optResult.reductionPercentage}%)
                        </span>
                      )}
                      {optResult.width > 0 && (
                        <span className="cms-banner-opt-badge__dim">
                          · {optResult.width}×{optResult.height}px
                        </span>
                      )}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="cms-banner-opt-badge__icon cms-banner-opt-badge__icon--svg">
                    <CheckCircle2 size={14} />
                  </div>
                  <div className="cms-banner-opt-badge__info">
                    <span className="cms-banner-opt-badge__title">
                      Ficheiro vetorial <strong>SVG</strong>
                    </span>
                    <span className="cms-banner-opt-badge__stats">
                      {formatBytes(optResult.originalSize)} · Qualidade original preservada
                    </span>
                  </div>
                </>
              )}
            </div>
          )}

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
              placeholder="https://exemplo.com/imagem-destaque.webp"
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
            <span>PNG, JPG, WebP ou SVG (conversão automática para WebP ativo ⚡)</span>
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        name="featuredImageFile"
        accept="image/png,image/jpeg,image/webp,image/svg+xml,image/*"
        style={{ display: "none" }}
        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
      />

      {error && <span className="cms-field-error">{error}</span>}
    </div>
  );
}
