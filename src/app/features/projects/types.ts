import { projects } from "@/config/site-content";
import { IMessages, TProjectsId } from "@/lang";

type TProjectItem = IMessages["projects"]["items"][TProjectsId];
type TProjectData = (typeof projects)[number];

export type ProjectProps = {
  project: TProjectData;
  projectItem: TProjectItem;
};
