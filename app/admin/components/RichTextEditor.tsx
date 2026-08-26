"use client";

import { useId, useMemo, useRef, useState } from "react";
import {
  Bold,
  CheckSquare,
  Code,
  Eye,
  FileCode,
  Heading2,
  Heading3,
  HelpCircle,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  PenLine,
  Quote,
  Strikethrough,
} from "lucide-react";

interface RichTextEditorProps {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  minHeight?: string;
}

export function RichTextEditor({
  name,
  defaultValue = "",
  placeholder = "Escreva aqui o artigo completo com formatação...",
  required = false,
  minHeight = "320px",
}: RichTextEditorProps) {
  const [content, setContent] = useState(defaultValue);
  const [mode, setMode] = useState<"write" | "preview">("write");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const id = useId();

  // Metrics
  const stats = useMemo(() => {
    const text = content.trim();
    const words = text ? text.split(/\s+/).length : 0;
    const chars = content.length;
    const readingTime = Math.max(1, Math.ceil(words / 200));
    return { words, chars, readingTime };
  }, [content]);

  // Formatting helpers
  const applyWrap = (prefix: string, suffix: string = prefix, defaultPlaceholder = "texto") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.slice(start, end) || defaultPlaceholder;
    const replacement = `${prefix}${selected}${suffix}`;
    const newContent = content.slice(0, start) + replacement + content.slice(end);

    setContent(newContent);
    setMode("write");

    setTimeout(() => {
      textarea.focus();
      const cursorStart = start + prefix.length;
      const cursorEnd = cursorStart + selected.length;
      textarea.setSelectionRange(cursorStart, cursorEnd);
    }, 10);
  };

  const applyLinePrefix = (prefix: string, defaultText = "Item") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.slice(start, end);

    let replacement = "";
    if (selected) {
      replacement = selected
        .split("\n")
        .map((line) => (line.startsWith(prefix) ? line : `${prefix}${line}`))
        .join("\n");
    } else {
      replacement = `${prefix}${defaultText}`;
    }

    const newContent = content.slice(0, start) + replacement + content.slice(end);
    setContent(newContent);
    setMode("write");

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + replacement.length);
    }, 10);
  };

  const insertLink = () => {
    const textarea = textareaRef.current;
    const start = textarea?.selectionStart ?? 0;
    const end = textarea?.selectionEnd ?? 0;
    const selected = content.slice(start, end) || "texto do link";
    const url = prompt("Introduza o URL do link:", "https://");
    if (!url) return;

    const replacement = `[${selected}](${url})`;
    const newContent = content.slice(0, start) + replacement + content.slice(end);
    setContent(newContent);
    setMode("write");

    setTimeout(() => {
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(start, start + replacement.length);
      }
    }, 10);
  };

  const insertDivider = () => {
    const textarea = textareaRef.current;
    const start = textarea?.selectionStart ?? content.length;
    const replacement = "\n\n---\n\n";
    const newContent = content.slice(0, start) + replacement + content.slice(start);
    setContent(newContent);
    setMode("write");

    setTimeout(() => {
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(start + replacement.length, start + replacement.length);
      }
    }, 10);
  };

  return (
    <div className="rich-editor">
      <div className="rich-editor__header">
        <div className="rich-editor__toolbar" role="toolbar" aria-label="Ferramentas de formatação">
          <div className="rich-editor__group">
            <button
              type="button"
              className="rich-editor__btn"
              title="Título H2"
              onClick={() => applyLinePrefix("## ", "Título de Secção")}
            >
              <Heading2 size={16} />
            </button>
            <button
              type="button"
              className="rich-editor__btn"
              title="Título H3"
              onClick={() => applyLinePrefix("### ", "Subtítulo")}
            >
              <Heading3 size={16} />
            </button>
          </div>

          <span className="rich-editor__divider" />

          <div className="rich-editor__group">
            <button
              type="button"
              className="rich-editor__btn"
              title="Negrito (**Ctrl+B**)"
              onClick={() => applyWrap("**", "**", "texto a negrito")}
            >
              <Bold size={16} />
            </button>
            <button
              type="button"
              className="rich-editor__btn"
              title="Itálico (*Ctrl+I*)"
              onClick={() => applyWrap("*", "*", "texto em itálico")}
            >
              <Italic size={16} />
            </button>
            <button
              type="button"
              className="rich-editor__btn"
              title="Riscado (~~texto~~)"
              onClick={() => applyWrap("~~", "~~", "texto riscado")}
            >
              <Strikethrough size={16} />
            </button>
          </div>

          <span className="rich-editor__divider" />

          <div className="rich-editor__group">
            <button
              type="button"
              className="rich-editor__btn"
              title="Citação"
              onClick={() => applyLinePrefix("> ", "Citação ou destaque importante")}
            >
              <Quote size={16} />
            </button>
            <button
              type="button"
              className="rich-editor__btn"
              title="Código inline"
              onClick={() => applyWrap("`", "`", "código")}
            >
              <Code size={16} />
            </button>
            <button
              type="button"
              className="rich-editor__btn"
              title="Bloco de código"
              onClick={() => applyWrap("```\n", "\n```", "código aqui")}
            >
              <FileCode size={16} />
            </button>
          </div>

          <span className="rich-editor__divider" />

          <div className="rich-editor__group">
            <button
              type="button"
              className="rich-editor__btn"
              title="Lista de marcadores"
              onClick={() => applyLinePrefix("- ", "Item da lista")}
            >
              <List size={16} />
            </button>
            <button
              type="button"
              className="rich-editor__btn"
              title="Lista numerada"
              onClick={() => applyLinePrefix("1. ", "Item numerado")}
            >
              <ListOrdered size={16} />
            </button>
            <button
              type="button"
              className="rich-editor__btn"
              title="Lista de tarefas"
              onClick={() => applyLinePrefix("- [ ] ", "Tarefa a realizar")}
            >
              <CheckSquare size={16} />
            </button>
          </div>

          <span className="rich-editor__divider" />

          <div className="rich-editor__group">
            <button
              type="button"
              className="rich-editor__btn"
              title="Inserir Link"
              onClick={insertLink}
            >
              <Link2 size={16} />
            </button>
            <button
              type="button"
              className="rich-editor__btn"
              title="Linha separadora"
              onClick={insertDivider}
            >
              <Minus size={16} />
            </button>
          </div>
        </div>

        {/* Write / Preview Tab Switcher */}
        <div className="rich-editor__tabs">
          <button
            type="button"
            className={`rich-editor__tab ${mode === "write" ? "is-active" : ""}`}
            onClick={() => setMode("write")}
          >
            <PenLine size={14} /> Escrever
          </button>
          <button
            type="button"
            className={`rich-editor__tab ${mode === "preview" ? "is-active" : ""}`}
            onClick={() => setMode("preview")}
          >
            <Eye size={14} /> Pré-visualizar
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="rich-editor__body" style={{ minHeight }}>
        {mode === "write" ? (
          <textarea
            ref={textareaRef}
            id={id}
            name={name}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholder}
            required={required}
            className="rich-editor__textarea"
            style={{ minHeight }}
            spellCheck={true}
          />
        ) : (
          <>
            <textarea
              name={name}
              value={content}
              readOnly
              style={{ display: "none" }}
            />
            <div
              className="rich-editor__preview markdown-body"
              style={{ minHeight }}
            >
              {content.trim() ? (
                <RenderMarkdown content={content} />
              ) : (
                <p className="rich-editor__empty">Sem conteúdo para pré-visualizar.</p>
              )}
            </div>
          </>
        )}
      </div>

      {/* Footer bar */}
      <div className="rich-editor__footer">
        <div className="rich-editor__stats">
          <span>
            <strong>{stats.words}</strong> palavras
          </span>
          <span>•</span>
          <span>
            <strong>{stats.chars}</strong> caracteres
          </span>
          <span>•</span>
          <span>~{stats.readingTime} min. de leitura</span>
        </div>
        <div className="rich-editor__hint">
          <HelpCircle size={13} />
          <span>Suporta formatação Markdown completa</span>
        </div>
      </div>
    </div>
  );
}

/** Simple, fast and safe markdown renderer for live preview */
function RenderMarkdown({ content }: { content: string }) {
  const blocks = useMemo(() => {
    const lines = content.split("\n");
    const parsedBlocks: React.ReactNode[] = [];
    let currentParagraph: string[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let keyIdx = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ");
        parsedBlocks.push(
          <p key={`p-${keyIdx++}`}>{formatInlineMarkdown(text)}</p>
        );
        currentParagraph = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim().startsWith("```")) {
        if (inCodeBlock) {
          parsedBlocks.push(
            <pre key={`code-${keyIdx++}`}>
              <code>{codeBlockContent.join("\n")}</code>
            </pre>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          flushParagraph();
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        continue;
      }

      if (line.trim() === "") {
        flushParagraph();
        continue;
      }

      if (line.startsWith("### ")) {
        flushParagraph();
        parsedBlocks.push(
          <h3 key={`h3-${keyIdx++}`}>{formatInlineMarkdown(line.slice(4))}</h3>
        );
        continue;
      }

      if (line.startsWith("## ")) {
        flushParagraph();
        parsedBlocks.push(
          <h2 key={`h2-${keyIdx++}`}>{formatInlineMarkdown(line.slice(3))}</h2>
        );
        continue;
      }

      if (line.startsWith("# ")) {
        flushParagraph();
        parsedBlocks.push(
          <h1 key={`h1-${keyIdx++}`}>{formatInlineMarkdown(line.slice(2))}</h1>
        );
        continue;
      }

      if (line.startsWith("> ")) {
        flushParagraph();
        parsedBlocks.push(
          <blockquote key={`quote-${keyIdx++}`}>
            {formatInlineMarkdown(line.slice(2))}
          </blockquote>
        );
        continue;
      }

      if (line.trim() === "---" || line.trim() === "***") {
        flushParagraph();
        parsedBlocks.push(<hr key={`hr-${keyIdx++}`} />);
        continue;
      }

      if (line.startsWith("- [ ] ") || line.startsWith("- [x] ")) {
        flushParagraph();
        const checked = line.startsWith("- [x] ");
        parsedBlocks.push(
          <div key={`task-${keyIdx++}`} className="rich-task-item">
            <input type="checkbox" checked={checked} readOnly />
            <span>{formatInlineMarkdown(line.slice(6))}</span>
          </div>
        );
        continue;
      }

      if (line.startsWith("- ") || line.startsWith("* ")) {
        flushParagraph();
        parsedBlocks.push(
          <li key={`li-${keyIdx++}`}>{formatInlineMarkdown(line.slice(2))}</li>
        );
        continue;
      }

      if (/^\d+\.\s/.test(line)) {
        flushParagraph();
        const itemText = line.replace(/^\d+\.\s/, "");
        parsedBlocks.push(
          <li key={`oli-${keyIdx++}`}>{formatInlineMarkdown(itemText)}</li>
        );
        continue;
      }

      currentParagraph.push(line);
    }

    flushParagraph();
    if (inCodeBlock && codeBlockContent.length > 0) {
      parsedBlocks.push(
        <pre key={`code-${keyIdx++}`}>
          <code>{codeBlockContent.join("\n")}</code>
        </pre>
      );
    }

    return parsedBlocks;
  }, [content]);

  return <>{blocks}</>;
}

function formatInlineMarkdown(text: string): React.ReactNode {
  // Handles bold, italic, code, links
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  // Regex patterns
  const linkRegex = /\[(.*?)\]\((.*?)\)/;
  const boldRegex = /\*\*(.*?)\*\*/;
  const italicRegex = /\*(.*?)\*/;
  const strikeRegex = /~~(.*?)~~/;
  const codeRegex = /`(.*?)`/;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(linkRegex);
    const boldMatch = remaining.match(boldRegex);
    const italicMatch = remaining.match(italicRegex);
    const strikeMatch = remaining.match(strikeRegex);
    const codeMatch = remaining.match(codeRegex);

    // Find first matching pattern
    const matches = [
      linkMatch ? { type: "link", match: linkMatch, index: linkMatch.index! } : null,
      boldMatch ? { type: "bold", match: boldMatch, index: boldMatch.index! } : null,
      italicMatch ? { type: "italic", match: italicMatch, index: italicMatch.index! } : null,
      strikeMatch ? { type: "strike", match: strikeMatch, index: strikeMatch.index! } : null,
      codeMatch ? { type: "code", match: codeMatch, index: codeMatch.index! } : null,
    ]
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .sort((a, b) => a.index - b.index);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const first = matches[0];
    if (first.index > 0) {
      parts.push(remaining.slice(0, first.index));
    }

    const matchLen = first.match[0].length;
    if (first.type === "link") {
      parts.push(
        <a
          key={`l-${key++}`}
          href={first.match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="rich-link"
        >
          {first.match[1]}
        </a>
      );
    } else if (first.type === "bold") {
      parts.push(<strong key={`b-${key++}`}>{first.match[1]}</strong>);
    } else if (first.type === "italic") {
      parts.push(<em key={`i-${key++}`}>{first.match[1]}</em>);
    } else if (first.type === "strike") {
      parts.push(<del key={`s-${key++}`}>{first.match[1]}</del>);
    } else if (first.type === "code") {
      parts.push(<code key={`c-${key++}`}>{first.match[1]}</code>);
    }

    remaining = remaining.slice(first.index + matchLen);
  }

  return parts;
}
