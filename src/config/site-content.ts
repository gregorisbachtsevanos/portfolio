import type {
	ProjectId,
	ServiceId,
	TechCategoryId,
	TrustReasonId,
} from "@/lang";
import { serviceIcons, techCategoryIcons } from "@/lang";

export const services = [
	{
		id: "full-stack-web-apps",
		icon: serviceIcons["full-stack-web-apps"],
	},
	{
		id: "api-backend",
		icon: serviceIcons["api-backend"],
	},
	{
		id: "startup-mvp",
		icon: serviceIcons["startup-mvp"],
	},
	{
		id: "devops-deployment",
		icon: serviceIcons["devops-deployment"],
	},
	{
		id: "performance-optimization",
		icon: serviceIcons["performance-optimization"],
	},
] as const satisfies ReadonlyArray<{
	id: ServiceId;
	icon: (typeof serviceIcons)[ServiceId];
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
	id: ProjectId;
	tech: readonly string[];
}>;

export const techCategories = [
	{
		id: "frontend",
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
		id: "backend",
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
		id: "database",
		icon: techCategoryIcons.database,
		technologies: ["MongoDB", "MySQL", "PostgreSQL"],
	},
	{
		id: "devops",
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
	id: TechCategoryId;
	icon: (typeof techCategoryIcons)[TechCategoryId];
	technologies: readonly string[];
}>;

export const trustReasons = [
	"clean-code",
	"scalability",
	"production-ready",
	"full-stack-expertise",
] as const satisfies ReadonlyArray<TrustReasonId>;
