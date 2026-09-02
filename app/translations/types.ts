import type { Company } from "../data";

export type LanguageCode = "pt" | "en" | "fr";

export interface TranslationDictionary {
  header: {
    home: string;
    about: string;
    companies: string;
    areas: string;
    impact: string;
    news: string;
    contactUs: string;
    explore: string;
    closeMenu: string;
    openMenu: string;
    selectLanguage: string;
    availableLanguages: string;
  };
  footer: {
    tagline: string;
    letsTalk: string;
    aboutGroup: string;
    companiesLabel: string;
    opportunities: string;
    spontaneousApplication: string;
    links: string;
    news: string;
    contacts: string;
    privacy: string;
    terms: string;
    rights: string;
    progressSlogan: string;
    country: string;
  };
  home: {
    hero: {
      eyebrow: string;
      titlePart1: string;
      titlePart2: string;
      description: string;
      aboutButton: string;
      companiesButton: string;
    };
    metrics: Array<{
      number: string;
      label: string;
      description: string;
    }>;
    intro: {
      eyebrow: string;
      titlePart1: string;
      titlePart2: string;
      titlePart3: string;
      description: string;
      quote: string;
      historyLink: string;
      imageAlt: string;
    };
    ecosystem: {
      eyebrow: string;
      titlePart1: string;
      titlePart2: string;
      prevCompany: string;
      nextCompany: string;
      visitWebsite: string;
    };
    areas: {
      eyebrow: string;
      titlePart1: string;
      titlePart2: string;
      description: string;
      items: Array<{
        index: string;
        title: string;
        text: string;
      }>;
    };
    vision: {
      eyebrow: string;
      titlePart1: string;
      titlePart2: string;
      titlePart3: string;
      description: string;
    };
    impact: {
      eyebrow: string;
      titlePart1: string;
      titlePart2: string;
      titlePart3: string;
      link: string;
      items: Array<{
        icon: string;
        title: string;
        text: string;
      }>;
    };
    careers: {
      eyebrow: string;
      titlePart1: string;
      titlePart2: string;
      titlePart3: string;
      description: string;
      contactButton: string;
      badgeLearn: string;
      badgeCreate: string;
      badgeEvolve: string;
    };
  };
  grupo: {
    hero: {
      eyebrow: string;
      titlePart1: string;
      titlePart2: string;
      description: string;
    };
    history: {
      eyebrow: string;
      title: string;
      lead: string;
      body: string;
      imageAlt: string;
    };
    purpose: {
      eyebrow: string;
      title: string;
      description: string;
      missionTitle: string;
      missionText: string;
      visionTitle: string;
      visionText: string;
    };
    values: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        text: string;
      }>;
    };
    leadershipBanner: {
      eyebrow: string;
      titlePart1: string;
      titlePart2: string;
      titlePart3: string;
      description: string;
    };
    leadershipDetail: {
      eyebrow: string;
      title: string;
      body: string;
      quote: string;
      cta: string;
      ceoAlt: string;
      modal: {
        title: string;
        closeAria: string;
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        h3_1: string;
        p5: string;
        p6: string;
        p7: string;
        p8: string;
        quote: string;
        h3_2: string;
        p9: string;
        p10: string;
        p11: string;
        h3_3: string;
        p12: string;
        p13: string;
        p14: string;
        p15: string;
        p16: string;
        p17: string;
      };
    };
  };
  empresas: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    filters: {
      all: string;
      tech: string;
      payments: string;
      finServices: string;
      entertainment: string;
    };
    detail: {
      backLink: string;
      visitWebsite: string;
      proximityKicker: string;
      valueTriangleKicker: string;
      valueTriangleTitle: string;
      catalogKicker: string;
      catalogTitle: string;
      catalogIntro: string;
      integrationKicker: string;
      integrationTitle: string;
      ecosystemLabel: string;
      exploreAll: string;
      nextCompany: string;
      forCitizen: string;
      forAgents: string;
      forCompanies: string;
    };
  };
  areas: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    overview: {
      eyebrow: string;
      title: string;
      description: string;
    };
    actionLink: string;
    items: Array<{
      id: string;
      index: string;
      label: string;
      title: string;
      text: string;
      companies: string[];
      skills: string[];
    }>;
  };
  impacto: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    manifesto: {
      eyebrow: string;
      titlePart1: string;
      titlePart2: string;
      p1: string;
      p2: string;
    };
    metricsSection: {
      eyebrow: string;
      title: string;
      description: string;
      indicators: Array<{
        label: string;
        suffix: string;
      }>;
    };
    pillarsSection: {
      eyebrow: string;
      title: string;
      description: string;
      pillars: Array<{
        label: string;
        title: string;
        text: string;
        items: string[];
      }>;
    };
  };
  contactos: {
    eyebrow: string;
    title: string;
    description: string;
    locationLabel: string;
    locationValuePart1: string;
    locationValuePart2: string;
    availabilityLabel: string;
    availabilityValue: string;
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      otherSubjectLabel: string;
      otherSubjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      note: string;
      successBadge: string;
      successTitle: string;
      successText: string;
      sendAnother: string;
      subjects: {
        institutional: string;
        partnerships: string;
        investment: string;
        press: string;
        suppliers: string;
        careers: string;
        companyContact: string;
        other: string;
      };
    };
  };
  candidatura: {
    eyebrow: string;
    title: string;
    description: string;
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      portfolio: string;
      portfolioPlaceholder: string;
      areaOfInterest: string;
      areaOfInterestPlaceholder: string;
      coverLetter: string;
      coverLetterPlaceholder: string;
      resume: string;
      resumePlaceholder: string;
      consent: string;
      submit: string;
      note: string;
      successBadge: string;
      successTitle: string;
      successText: string;
      sendAnother: string;
    };
  };
  noticias: {
    eyebrow: string;
    title: string;
    description: string;
    allNews: string;
    emptyCategory: string;
    viewAllLink: string;
    readMoreAria: string;
    article: {
      allNewsBack: string;
      tagPrefix: string;
      readingTime: string;
      share: string;
      nextArticle: string;
      recentDate: string;
    };
  };
  privacidade: {
    eyebrow: string;
    title: string;
    description: string;
    h2: string;
    p1: string;
    h3_1: string;
    p2: string;
    h3_2: string;
    p3: string;
    h3_3: string;
    p4: string;
    legalNote: string;
  };
  termos: {
    eyebrow: string;
    title: string;
    description: string;
    h2: string;
    p1: string;
    h3_1: string;
    p2: string;
    h3_2: string;
    p3: string;
    h3_3: string;
    p4: string;
    legalNote: string;
  };
}
