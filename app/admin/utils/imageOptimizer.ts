/**
 * Utilitário de otimização e conversão automática de imagens para formato WebP.
 * Executa no navegador (client-side) para conversão instantânea, sem atraso de rede
 * e economizando largura de banda e armazenamento.
 */

export interface OptimizationResult {
  file: File;
  previewUrl: string;
  originalSize: number;
  optimizedSize: number;
  reductionPercentage: number;
  width: number;
  height: number;
  format: "webp" | "svg" | string;
  isConverted: boolean;
}

export interface OptimizationOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  forceWebP?: boolean;
}

export async function optimizeImageToWebP(
  file: File,
  options: OptimizationOptions = {}
): Promise<OptimizationResult> {
  const {
    maxWidth = 2048,
    maxHeight = 2048,
    quality = 0.85,
    forceWebP = true,
  } = options;

  const originalSize = file.size;

  // Preserva SVGs intactos sem rasterização (conforme regra de preservação de SVGs)
  if (file.type === "image/svg+xml" || file.name.toLowerCase().endsWith(".svg")) {
    return {
      file,
      previewUrl: URL.createObjectURL(file),
      originalSize,
      optimizedSize: originalSize,
      reductionPercentage: 0,
      width: 0,
      height: 0,
      format: "svg",
      isConverted: false,
    };
  }

  // Carrega a imagem num elemento Image para desenhar no Canvas
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(new Error("Falha ao ler o ficheiro de imagem."));

    reader.onload = (e) => {
      const img = new Image();

      img.onerror = () => reject(new Error("Formato de imagem corrompido ou não suportado."));

      img.onload = () => {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        // Calcula proporções máximas sem distorção
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          return reject(new Error("Não foi possível inicializar o renderizador de imagem."));
        }

        // Configuração de interpolação de alta qualidade
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        ctx.drawImage(img, 0, 0, width, height);

        // Converte para WebP
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              return reject(new Error("Falha na conversão para formato WebP."));
            }

            const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
            const newFileName = `${baseName}.webp`;

            const optimizedFile = new File([blob], newFileName, {
              type: "image/webp",
              lastModified: Date.now(),
            });

            const optimizedSize = blob.size;
            const reductionPercentage = Math.max(
              0,
              Math.round(((originalSize - optimizedSize) / originalSize) * 100)
            );

            const previewUrl = URL.createObjectURL(blob);

            resolve({
              file: optimizedFile,
              previewUrl,
              originalSize,
              optimizedSize,
              reductionPercentage,
              width,
              height,
              format: "webp",
              isConverted: true,
            });
          },
          "image/webp",
          quality
        );
      };

      img.src = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Formata bytes num texto legível (ex: 3.4 MB, 180 KB)
 */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
