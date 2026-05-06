import {
  TLocale,
  TProjectsId,
  TServicesId,
  TTechCategoriesId,
  TTrustReasonsId,
} from "./types";

export const LOCALES = ["en", "gr"] as const;

export interface IMessages {
  metadata: {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
    keywords: string[];
  };
  navigation: {
    name: string;
    about: string;
    services: string;
    projects: string;
    techStack: string;
    contact: string;
    languageLabel: string;
    languages: Record<TLocale, string>;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaProject: string;
    ctaWork: string;
    availability: string;
  };
  about: {
    title: string;
    locationLabel: string;
    paragraphs: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: Record<
      TServicesId,
      {
        title: string;
        description: string;
      }
    >;
  };
  projects: {
    title: string;
    subtitle: string;
    items: Record<
      TProjectsId,
      {
        title: string;
        description: string;
        result: string;
      }
    >;
  };
  techStack: {
    title: string;
    subtitle: string;
    categories: Record<
      TTechCategoriesId,
      {
        label: string;
      }
    >;
  };
  trust: {
    title: string;
    subtitle: string;
    reasons: Record<
      TTrustReasonsId,
      {
        title: string;
        description: string;
      }
    >;
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    paragraphs: string[];
    formPlaceholders: {
      name: string;
      email: string;
      message: string;
    };
    submitButton: {
      send: string;
      sending: string;
    };
    toastTitle: string;
    toastDescription: string;
    toastErrorTitle: string;
    toastErrorDescription: string;
    copyright: string;
    github: string;
    linkedin: string;
  };
}

export const defaultLocale: TLocale = "en";
