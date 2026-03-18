import { languages } from "@/lang";
import { TranslationKey, TranslationValue } from "@/lang/types/i18n";
import { getValue } from "@/lib/getValue";

type Language = keyof typeof languages;

export function t<K extends TranslationKey>(
	lang: Language,
	key: K,
): TranslationValue<K> {
	const value = getValue(languages[lang], key);
	return (value ?? key) as TranslationValue<K>;
}
