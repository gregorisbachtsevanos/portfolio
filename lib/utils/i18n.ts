import { el } from "../lang/constants/el/el";
import { en } from "../lang/constants/en/en";
import { Translations } from "../lang/types/lang.types";

export type Locale = "en" | "el";

export const translations: Record<Locale, Translations> = { en: en, el: el };
