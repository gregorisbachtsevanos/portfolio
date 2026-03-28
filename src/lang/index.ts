import { serviceIcons, techCategoryIcons } from "./config";
import {
	detectLocaleFromEnvironment,
	detectLocaleFromLanguage,
} from "./detectLocale";
import { en } from "./en";
import { gr } from "./gr";
import { defaultLocale, locales } from "./schema";

export {
	defaultLocale,
	locales,
	serviceIcons,
	techCategoryIcons,
	detectLocaleFromEnvironment,
	detectLocaleFromLanguage,
};
export type * from "./schema";

export const messagesByLocale = {
	en,
	gr,
};
