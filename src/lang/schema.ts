export const locales = ["en", "gr"] as const;

export type Locale = (typeof locales)[number];

export type ServiceId =
	| "full-stack-web-apps"
	| "api-backend"
	| "startup-mvp"
	| "devops-deployment"
	| "performance-optimization";

export type ProjectId =
	| "authentication-platform"
	| "task-management-platform"
	| "developer-dashboard";

export type TechCategoryId = "frontend" | "backend" | "database" | "devops";

export type TrustReasonId =
	| "clean-code"
	| "scalability"
	| "production-ready"
	| "full-stack-expertise";

export interface Messages {
	metadata: {
		title: string;
		description: string;
		openGraphTitle: string;
		openGraphDescription: string;
	};
	navigation: {
		about: string;
		services: string;
		projects: string;
		techStack: string;
		contact: string;
		languageLabel: string;
		languages: Record<Locale, string>;
	};
	hero: {
		title: string;
		subtitle: string;
		description: string;
		ctaProject: string;
		ctaWork: string;
		availability: string;
	};
	about: {
		title: string;
		locationLabel: string;
		paragraphs: string[];
	};
	services: {
		title: string;
		subtitle: string;
		items: Record<
			ServiceId,
			{
				title: string;
				description: string;
			}
		>;
	};
	projects: {
		title: string;
		subtitle: string;
		items: Record<
			ProjectId,
			{
				title: string;
				description: string;
				result: string;
			}
		>;
	};
	techStack: {
		title: string;
		subtitle: string;
		categories: Record<
			TechCategoryId,
			{
				label: string;
			}
		>;
	};
	trust: {
		title: string;
		subtitle: string;
		reasons: Record<
			TrustReasonId,
			{
				title: string;
				description: string;
			}
		>;
	};
	contact: {
		title: string;
		subtitle: string;
		getInTouch: string;
		paragraphs: string[];
		formPlaceholders: {
			name: string;
			email: string;
			message: string;
		};
		submitButton: {
			send: string;
			sending: string;
		};
		toastTitle: string;
		toastDescription: string;
		copyright: string;
		github: string;
		linkedin: string;
	};
}

export const defaultLocale: Locale = "en";
