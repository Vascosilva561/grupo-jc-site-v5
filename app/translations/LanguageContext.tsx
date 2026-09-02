"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import type { LanguageCode, TranslationDictionary } from "./types";
import { ptTranslations } from "./pt";
import { enTranslations } from "./en";
import { frTranslations } from "./fr";
import { localizedCompanies } from "./companies";
import type { Company } from "../data";

const translationsMap: Record<LanguageCode, TranslationDictionary> = {
  pt: ptTranslations,
  en: enTranslations,
  fr: frTranslations,
};

export type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationDictionary;
  companies: Company[];
  getCompanyBySlug: (slug: string) => Company | undefined;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
  t: ptTranslations,
  companies: localizedCompanies.pt,
  getCompanyBySlug: (slug) => localizedCompanies.pt.find((c) => c.slug === slug),
});

const STORAGE_KEY = "gjc_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (saved && (saved === "pt" || saved === "en" || saved === "fr")) {
        setLanguageState(saved);
        document.documentElement.lang = saved === "pt" ? "pt-AO" : saved;
      }
    } catch {}

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        const val = e.newValue as LanguageCode;
        if (val === "pt" || val === "en" || val === "fr") {
          setLanguageState(val);
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const setLanguage = (newLang: LanguageCode) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang === "pt" ? "pt-AO" : newLang;
      window.dispatchEvent(new CustomEvent("gjc_language_change", { detail: newLang }));
    } catch {}
  };

  const currentCompanies = useMemo(() => localizedCompanies[language] || localizedCompanies.pt, [language]);
  const currentTranslations = useMemo(() => translationsMap[language] || ptTranslations, [language]);

  const getCompanyBySlug = (slug: string) => {
    return currentCompanies.find((c) => c.slug === slug);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: currentTranslations,
        companies: currentCompanies,
        getCompanyBySlug,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslation() {
  return useLanguage();
}
