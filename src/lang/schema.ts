export const locales = ["en", "gr"] as const;

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

export interface IMessages {
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
    languages: Record<TLocale, string>;
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
      TServiceId,
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
      TProjectId,
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
      TTechCategoryId,
      {
        label: string;
      }
    >;
  };
  trust: {
    title: string;
    subtitle: string;
    reasons: Record<
      TTrustReasonId,
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

export const defaultLocale: TLocale = "en";
