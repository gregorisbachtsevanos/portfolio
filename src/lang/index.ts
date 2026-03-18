import { serviceIcons, techCategoryIcons } from "./config";
import { en } from "./en";
import { gr } from "./gr";
import { defaultLocale, locales } from "./schema";

export { defaultLocale, locales, serviceIcons, techCategoryIcons };
export type * from "./schema";

export const messagesByLocale = {
	en,
	gr,
};
