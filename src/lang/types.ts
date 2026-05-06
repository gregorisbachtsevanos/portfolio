import { locales } from "./schema";

export type TLocale = (typeof locales)[number];

export type TServiceId =
  | "full-stack-web-apps"
  | "api-backend"
  | "startup-mvp"
  | "devops-deployment"
  | "performance-optimization";

export type TProjectId =
  | "authentication-platform"
  | "task-management-platform"
  | "developer-dashboard";

export type TTechCategoryId = "frontend" | "backend" | "database" | "devops";

export type TTrustReasonId =
  | "clean-code"
  | "scalability"
  | "production-ready"
  | "full-stack-expertise";
