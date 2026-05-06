import { projects } from "@/config/site-content";
import { IMessages, TProjectId } from "@/lang";

type TProjectItem = IMessages["projects"]["items"][TProjectId];
type TProjectData = (typeof projects)[number];

export type ProjectProps = {
	project: TProjectData;
	projectItem: TProjectItem;
};
