import { languages } from "@/lang";
import { getValue } from "@/lib/getValue";

type Language = keyof typeof languages;

export function useTranslation(lang: Language = "en") {
	interface TranslationFunction {
		(key: string): string;
	}

	const t: TranslationFunction = (key: string): string => {
		const value = getValue(languages[lang], key);
		return typeof value === "string" ? value : key;
	};

	return { t };
}
