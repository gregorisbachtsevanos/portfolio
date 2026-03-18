import { defaultLocale, type Locale } from "./schema";

export const detectLocaleFromLanguage = (language?: string | null): Locale => {
	if (!language) {
		return defaultLocale;
	}

	return language.toLowerCase().startsWith("el") ? "gr" : defaultLocale;
};
