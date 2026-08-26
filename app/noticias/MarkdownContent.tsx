import type { ReactNode } from "react";

export function MarkdownContent({ content }: { content: string }) {
  if (!content) return null;

  const blocks = content.split(/\n{2,}/);

  return (
    <div className="news-article-markdown">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Headings
        if (trimmed.startsWith("### ")) {
          return <h3 key={index}>{renderInline(trimmed.slice(4))}</h3>;
        }
        if (trimmed.startsWith("## ")) {
          return <h2 key={index}>{renderInline(trimmed.slice(3))}</h2>;
        }
        if (trimmed.startsWith("# ")) {
          return <h2 key={index}>{renderInline(trimmed.slice(2))}</h2>;
        }

        // Blockquotes
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={index} className="news-blockquote">
              <p>{renderInline(trimmed.replace(/^>\s*/gm, ""))}</p>
            </blockquote>
          );
        }

        // Unordered lists
        if (trimmed.split("\n").every((line) => line.trim().startsWith("- ") || line.trim().startsWith("* "))) {
          const items = trimmed.split("\n").map((line) => line.trim().replace(/^[-*]\s+/, ""));
          return (
            <ul key={index} className="news-list">
              {items.map((item, i) => (
                <li key={i}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }

        // Standard paragraph
        return <p key={index}>{renderInline(trimmed)}</p>;
      })}
    </div>
  );
}

function renderInline(text: string): ReactNode {
  // Simple regex for bold **text**, italic *text*, and links [text](url)
  const parts: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  // Split and parse inline bold and links
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*") && token.endsWith("*")) {
      parts.push(<em key={key++}>{token.slice(1, -1)}</em>);
    } else if (token.startsWith("[") && token.includes("](")) {
      const labelMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (labelMatch) {
        parts.push(
          <a key={key++} href={labelMatch[2]} target="_blank" rel="noopener noreferrer">
            {labelMatch[1]}
          </a>
        );
      } else {
        parts.push(token);
      }
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
