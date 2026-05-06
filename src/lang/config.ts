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

import type { TServicesId, TTechCategoriesId } from "./types";

export const serviceIcons: Record<TServicesId, LucideIcon> = {
  "full-stack-web-apps": Code,
  "api-backend": Server,
  "startup-mvp": Zap,
  "devops-deployment": Cloud,
  "performance-optimization": TrendingUp,
};

export const techCategoryIcons: Record<TTechCategoriesId, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  devops: Cloud,
};
