import { defaultLocale, type TLocale } from "./schema";

export const detectLocaleFromLanguage = (language?: string | null): TLocale => {
  if (!language) {
    return defaultLocale;
  }

  return language.toLowerCase().startsWith("el") ? "gr" : defaultLocale;
};
