import { Translations } from "../../types/lang.types";
import { elAbout } from "./about";
import { elContact } from "./contact";
import { elCTA } from "./cta";
import { elExpertise } from "./expertise";
import { elFooter } from "./footer";
import { elHero } from "./hero";
import { elNav } from "./nav";
import { elProjects } from "./projects";
import { elTimeline } from "./timeline";

export const el: Translations = {
  nav: elNav,
  hero: elHero,
  about: elAbout,
  expertise: elExpertise,
  projects: elProjects,
  timeline: elTimeline,
  cta: elCTA,
  contact: elContact,
  footer: elFooter,
};
