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

import type { TServiceId, TTechCategoryId } from "./schema";

export const serviceIcons: Record<TServiceId, LucideIcon> = {
  "full-stack-web-apps": Code,
  "api-backend": Server,
  "startup-mvp": Zap,
  "devops-deployment": Cloud,
  "performance-optimization": TrendingUp,
};

export const techCategoryIcons: Record<TTechCategoryId, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  devops: Cloud,
};
