import { IMessages, TServicesId } from "@/lang";
import { LucideIcon } from "lucide-react";

type TServiceItem = IMessages["services"]["items"][TServicesId];

export type ServiceProps = {
  serviceItem: TServiceItem;
  Icon: LucideIcon;
};
