import {
  PROJECTS,
  SERVICES,
  TECH_CATEGORIES,
  TRUST_REASONS,
} from "./constants";
import { LOCALES } from "./schema";

export type TLocale = (typeof LOCALES)[number];

export type TServicesId = (typeof SERVICES)[keyof typeof SERVICES];
export type TProjectsId = (typeof PROJECTS)[keyof typeof PROJECTS];
export type TTrustReasonsId =
  (typeof TRUST_REASONS)[keyof typeof TRUST_REASONS];
export type TTechCategoriesId =
  (typeof TECH_CATEGORIES)[keyof typeof TECH_CATEGORIES];
