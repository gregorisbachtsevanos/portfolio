import type {
  TProjectsId,
  TServicesId,
  TTechCategoriesId,
  TTrustReasonsId,
} from "@/lang";
import { serviceIcons, techCategoryIcons } from "@/lang";
import { SERVICES, TECH_CATEGORIES } from "@/lang/constants";

export const services = [
  {
    id: SERVICES.fullStackWebApps,
    icon: serviceIcons[SERVICES.fullStackWebApps],
  },
  {
    id: SERVICES.apiBackend,
    icon: serviceIcons[SERVICES.apiBackend],
  },
  {
    id: SERVICES.startupMvp,
    icon: serviceIcons[SERVICES.startupMvp],
  },
  {
    id: SERVICES.devopsDeployment,
    icon: serviceIcons[SERVICES.devopsDeployment],
  },
  {
    id: SERVICES.performanceOptimization,
    icon: serviceIcons[SERVICES.performanceOptimization],
  },
] as const satisfies ReadonlyArray<{
  id: TServicesId;
  icon: (typeof serviceIcons)[TServicesId];
}>;

export const projects = [
  {
    id: "authentication-platform",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    id: "task-management-platform",
    tech: ["React", "Redux Toolkit", "Node.js", "PostgreSQL"],
  },
  {
    id: "developer-dashboard",
    tech: ["React", "TypeScript", "Redux Toolkit", "Vite"],
  },
] as const satisfies ReadonlyArray<{
  id: TProjectsId;
  tech: readonly string[];
}>;

export const techCategories = [
  {
    id: TECH_CATEGORIES.frontend,
    icon: techCategoryIcons.frontend,
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "HTML/CSS/SCSS",
      "Styled Components",
      "Vite",
    ],
  },
  {
    id: TECH_CATEGORIES.backend,
    icon: techCategoryIcons.backend,
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Token Security",
    ],
  },
  {
    id: TECH_CATEGORIES.database,
    icon: techCategoryIcons.database,
    technologies: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    id: TECH_CATEGORIES.devops,
    icon: techCategoryIcons.devops,
    technologies: [
      "Docker",
      "Linux Servers",
      "Git",
      "CI/CD",
      "Cloud Deployments",
    ],
  },
] as const satisfies ReadonlyArray<{
  id: TTechCategoriesId;
  icon: (typeof techCategoryIcons)[TTechCategoriesId];
  technologies: readonly string[];
}>;

export const trustReasons = [
  "clean-code",
  "scalability",
  "production-ready",
  "full-stack-expertise",
] as const satisfies ReadonlyArray<TTrustReasonsId>;
