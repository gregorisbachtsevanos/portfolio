export interface Translations {
  nav: {
    projects: string;
    about: string;
    timeline: string;
    contact: string;
    available: string;
  };
  hero: {
    label: string;
    headline: string;
    sub: string;
    cta_primary: string;
    cta_secondary: string;
    stat_years: string;
    stat_projects: string;
    stat_clients: string;
    badge: string;
  };
  about: {
    label: string;
    heading: string;
    p1: string;
    p2: string;
    cta_projects: string;
    cta_more: string;
    currently: string;
  };
  expertise: {
    label: string;
    heading: string;
    sub: string;
    card1: Card;
    card2: Card;
    card3: Card;
    card4: Card;
    card5: Card;
    card6: Card;
    learn_more: string;
  };
  projects: {
    label: string;
    heading: string;
    sub: string;
    view_project: string;
    view_all: string;
    project1: Project;
    project2: Project;
    project3: Project;
  };
  timeline: {
    label: string;
    heading: string;
    sub: string;
    items: Array<{
      year: string;
      role: string;
      company: string;
      description: string;
    }>;
  };
  cta: {
    label: string;
    heading: string;
    sub: string;
    primary: string;
    secondary: string;
  };
  contact: {
    label: string;
    heading: string;
    sub: string;
    email_label: string;
    linkedin_label: string;
    github_label: string;
    location_label: string;
    location_value: string;
    remote: string;
    send: string;
  };
  footer: {
    tagline: string;
    nav: string;
    social: string;
    legal: string;
    built: string;
  };
}

interface Project {
  title: string;
  desc: string;
  link: string;
  images: { dark: string[]; light: string[] };
  tags: string[];
}

interface Card {
  title: string;
  desc?: string;
}
