import { Translations } from "@/lib/lang/types/lang.types";
import { PROJECT_IMAGES, PROJECT_TAGS } from "../constants/project.consts";
import { ProjectItem } from "../types/project.types";

export const structureProjects = (t: Translations): ProjectItem[] => [
  {
    title: t.projects.p1_title,
    desc: t.projects.p1_desc,
    tags: PROJECT_TAGS[0],
    img: PROJECT_IMAGES[0],
  },
  {
    title: t.projects.p2_title,
    desc: t.projects.p2_desc,
    tags: PROJECT_TAGS[1],
    img: PROJECT_IMAGES[1],
  },
  {
    title: t.projects.p3_title,
    desc: t.projects.p3_desc,
    tags: PROJECT_TAGS[2],
    img: PROJECT_IMAGES[2],
  },
];
