import { serviceIcons, techCategoryIcons } from "./config";
import { detectLocaleFromLanguage } from "./detectLocale";
import { en } from "./en";
import { gr } from "./gr";
import { defaultLocale, locales } from "./schema";

export {
	defaultLocale,
	locales,
	serviceIcons,
	techCategoryIcons,
	detectLocaleFromLanguage,
};
export type * from "./schema";

export const messagesByLocale = {
	en,
	gr,
};
