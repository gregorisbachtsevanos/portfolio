import { defaultLocale, type TLocale } from "./schema";

const resolveLocaleFromLanguage = (
	language?: string | null,
): TLocale | null => {
	if (!language) {
		return null;
	}

	const normalizedLanguage = language.toLowerCase();

	if (normalizedLanguage.startsWith("el")) {
		return "gr";
	}

	if (normalizedLanguage.startsWith("en")) {
		return "en";
	}

	return null;
};

export const detectLocaleFromLanguage = (language?: string | null): TLocale => {
	return resolveLocaleFromLanguage(language) ?? defaultLocale;
};

export const detectLocaleFromEnvironment = (): TLocale => {
	if (typeof window === "undefined") {
		return defaultLocale;
	}

	const runtimeLocale = Intl.DateTimeFormat().resolvedOptions().locale;
	const candidateLanguages = [
		runtimeLocale,
		...(navigator.languages ?? []),
		navigator.language,
	];

	for (const candidate of candidateLanguages) {
		const detectedLocale = resolveLocaleFromLanguage(candidate);
		if (detectedLocale) {
			return detectedLocale;
		}
	}

	return defaultLocale;
};
