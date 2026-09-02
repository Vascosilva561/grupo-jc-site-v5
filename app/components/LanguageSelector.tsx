"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage, type LanguageCode } from "../translations";

export type Language = {
  code: LanguageCode;
  shortLabel: string;
  fullLabel: string;
  flag: string;
};

export const languages: Language[] = [
  { code: "pt", shortLabel: "PT", fullLabel: "Português (Angola)", flag: "🇦🇴" },
  { code: "en", shortLabel: "EN", fullLabel: "English", flag: "🇬🇧" },
  { code: "fr", shortLabel: "FR", fullLabel: "Français", flag: "🇫🇷" },
];

export function LanguageSelector({
  dark = false,
  isMobile = false,
}: {
  dark?: boolean;
  isMobile?: boolean;
}) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find((l) => l.code === language) || languages[0];

  const handleSelect = (lang: Language) => {
    setLanguage(lang.code);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`lang-selector ${dark ? "lang-selector--dark" : ""} ${
        isMobile ? "lang-selector--mobile" : ""
      } ${isOpen ? "is-open" : ""}`}
    >
      <button
        type="button"
        className="lang-selector__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t.header.selectLanguage}
      >
        <Globe size={15} strokeWidth={1.8} className="lang-selector__globe" />
        <span className="lang-selector__label">{selectedLang.shortLabel}</span>
        <ChevronDown
          size={13}
          strokeWidth={2}
          className={`lang-selector__chevron ${isOpen ? "is-rotated" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="lang-selector__dropdown" role="listbox" aria-label={t.header.availableLanguages}>
          {languages.map((lang) => {
            const isSelected = lang.code === selectedLang.code;
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`lang-selector__option ${isSelected ? "is-selected" : ""}`}
                onClick={() => handleSelect(lang)}
              >
                <span className="lang-selector__option-flag">{lang.flag}</span>
                <span className="lang-selector__option-text">{lang.fullLabel}</span>
                {isSelected && (
                  <Check size={14} strokeWidth={2.5} className="lang-selector__check" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
