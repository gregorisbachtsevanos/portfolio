import { serviceIcons, techCategoryIcons } from "./config";
import { en } from "./jsons/en";
import { gr } from "./jsons/gr";
import { defaultLocale, LOCALES } from "./schema";

export { defaultLocale, LOCALES, serviceIcons, techCategoryIcons };

export * from "./schema";

export type * from "./types";

export const messagesByLocale = {
  en,
  gr,
};
