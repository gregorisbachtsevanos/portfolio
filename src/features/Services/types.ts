import { IMessages, TServiceId } from "@/lang";
import { LucideIcon } from "lucide-react";

type TServiceItem = IMessages["services"]["items"][TServiceId];

export type ServiceProps = {
	serviceItem: TServiceItem;
	Icon: LucideIcon;
};
