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
    card1_title: string;
    card1_desc: string;
    card2_title: string;
    card2_desc: string;
    card3_title: string;
    card3_desc: string;
    card4_title: string;
    card5_title: string;
    card5_desc: string;
    card6_title: string;
    learn_more: string;
  };
  projects: {
    label: string;
    heading: string;
    sub: string;
    view_project: string;
    view_all: string;
    p1_title: string;
    p1_desc: string;
    p2_title: string;
    p2_desc: string;
    p3_title: string;
    p3_desc: string;
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
