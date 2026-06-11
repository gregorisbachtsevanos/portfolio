import { Translations } from "@/lib/lang/types/lang.types";
import { ProjectItem } from "../types/project.types";
import { Theme } from "@/lib/AppContext";

export const structureProjects = (
  t: Translations,
  theme: Theme,
): ProjectItem[] => [
  {
    title: t.projects.project1.title,
    desc: t.projects.project1.desc,
    link: t.projects.project1.link,
    tags: t.projects.project1.tags,
    img:
      theme === "dark"
        ? [...t.projects.project1.images.light]
        : [...t.projects.project1.images.dark],
  },
  {
    title: t.projects.project2.title,
    desc: t.projects.project2.desc,
    link: t.projects.project2.link,
    tags: t.projects.project2.tags,
    img:
      theme === "dark"
        ? [...t.projects.project1.images.light]
        : [...t.projects.project1.images.dark],
  },
  {
    title: t.projects.project3.title,
    desc: t.projects.project3.desc,
    link: t.projects.project3.link,
    tags: t.projects.project3.tags,
    img:
      theme === "dark"
        ? [...t.projects.project1.images.light]
        : [...t.projects.project1.images.dark],
  },
];
