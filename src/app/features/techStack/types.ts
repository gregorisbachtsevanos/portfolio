import { IMessages, TTechCategoryId } from "@/lang";
import { LucideIcon } from "lucide-react";

type TTechStackCategory = IMessages["techStack"]["categories"][TTechCategoryId];

type TCategoryData = {
	technologies: readonly string[];
};

export type CategoryProps = {
	category: TCategoryData;
	techStackCategory: TTechStackCategory;
	Icon: LucideIcon;
};
