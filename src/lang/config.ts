import type { LucideIcon } from "lucide-react";
import {
	Cloud,
	Code,
	Code2,
	Database,
	Server,
	TrendingUp,
	Zap,
} from "lucide-react";

import type { ServiceId, TechCategoryId } from "./schema";

export const serviceIcons: Record<ServiceId, LucideIcon> = {
	"full-stack-web-apps": Code,
	"api-backend": Server,
	"startup-mvp": Zap,
	"devops-deployment": Cloud,
	"performance-optimization": TrendingUp,
};

export const techCategoryIcons: Record<TechCategoryId, LucideIcon> = {
	frontend: Code2,
	backend: Server,
	database: Database,
	devops: Cloud,
};
