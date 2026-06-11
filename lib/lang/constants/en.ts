import { Translations } from "../types/lang.types";

export const en: Translations = {
  nav: {
    projects: "Projects",
    about: "About",
    timeline: "Timeline",
    contact: "Contact",
    available: "Available for work",
  },
  hero: {
    label: "Full Stack Engineer",
    headline:
      "Building scalable digital experiences with modern web technologies",
    sub: "Full Stack Engineer with 5+ years of experience building performant applications, APIs, and client-facing consumer transformation businesses.",
    cta_primary: "View work",
    cta_secondary: "Get in touch",
    stat_years: "Years experience",
    stat_projects: "Projects shipped",
    stat_clients: "Happy clients",
    badge: "Open to opportunities",
  },
  about: {
    label: "About",
    heading: "Crafting elegant solutions to complex problems",
    p1: "I'm a pragmatic frontend-focused engineer with 5+ years building performant full-stack applications, team-scaling architecture, and technically ambitious consumer-facing products.",
    p2: "I care deeply about the craft: clean APIs, tight design systems, and shipping things that actually work at scale. I collaborate with startups and enterprise teams to turn ambiguous problems into elegant, maintainable solutions.",
    cta_projects: "See projects",
    cta_more: "More →",
    currently: "Currently using",
  },
  expertise: {
    label: "Skills",
    heading: "Technical expertise",
    sub: "Skilled across the full stack — from building fast, functional, great applications.",
    card1: {
      title: "React, Next.js, TypeScript, Redux, Styled Components, Vite",
      desc: "Building robust component libraries and scalable frontend architectures with modern tooling and best practices.",
    },
    card2: {
      title: "Node.js & APIs",
      desc: "Designing high-performance server-side applications and scalable REST / GraphQL APIs.",
    },
    card3: {
      title: "Cloud & DevOps",
      desc: "Comprehensive experience across cloud infrastructure, CI/CD pipelines, and DevOps practices enabling seamless deployment.",
    },
    card4: {
      title: "PostgreSQL · Redis · MongoDB",
    },
    card5: {
      title: "Testing & Quality",
      desc: "Jest, Playwright, Vitest — because shipped code that works is the only kind worth shipping.",
    },
    card6: {
      title: "Analytics & Performance",
    },
    learn_more: "Learn more →",
  },
  projects: {
    label: "Work",
    heading: "Featured projects",
    sub: "A selection of recent work spanning full-stack development and design.",
    view_project: "View project",
    view_all: "View all projects",
    project1: {
      title: "Authentication platform",
      desc: "A production-grade auth platform with OAuth, MFA, and role-based access control. Built for scale.",
      link: "",
      images: {
        dark: [
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80",
        ],
        light: [
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80",
        ],
      },
      tags: ["Node.js", "Express.js", "Postgres"],
    },
    project2: {
      title: "TradeOps",
      desc: "A production-ready automated trading platform that receives TradingView webhook alerts and executes trades with risk management. Both dark and light mode versions available.",
      link: "https://github.com/gregorisbachtsevanos/TradeOps",
      images: {
        dark: [
          "/tradeOps/markets_dark.png",
          "/tradeOps/trades_dark.png",
          "/tradeOps/analytics_dark.png",
        ],
        light: [
          "/tradeOps/markets_light.png",
          "/tradeOps/trades_light.png",
          "/tradeOps/analytics_light.png",
        ],
      },
      tags: ["React-Query", "WebSockets", "Webhooks"],
    },
    project3: {
      title: "Frame-UI",
      desc: "A lightweight, reusable UI component library that speeds up frontend development with consistent modern interface components. It’s designed for scalability and maintainability with a modular architecture separating core components, layouts, and utility styles for easy extensibility.",
      link: "https://github.com/gregorisbachtsevanos/Frame-UI",
      images: {
        dark: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
        ],
        light: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
        ],
      },
      tags: ["TS", "Vanilla-extract/css", "Storybook"],
    },
  },
  timeline: {
    label: "Experience",
    heading: "Five years building at scale",
    sub: "From full-stack systems to enterprise platforms — a continuous journey across backend, frontend, and infrastructure.",
    items: [
      {
        year: "2021",
        role: "Junior Full Stack Developer",
        company: "Global Concept | Full Service Digital Agency",
        description:
          "Developed and maintained full-stack web applications using PHP, Node.js, and Vue.js. Built dynamic UIs with Vue.js and jQuery. Designed, optimized MySQL databases and implemented RESTful APIs.",
      },
      {
        year: "2022",
        role: "Full Stack Developer",
        company: "Rhoé",
        description:
          "Designed and built backend systems using Node.js, Express, and MongoDB. Contributed to React frontend development. Managed Dockerized deployments, Linux servers, and CI/CD pipelines using Ansible and Nginx. Monitored production systems and handled server-side troubleshooting.",
      },
      {
        year: "2023",
        role: "Software Engineer - Web",
        company: "WeAre8",
        description:
          "Built high-performance web applications using React, Next.js, and TypeScript. Focused on frontend performance, accessibility, and UX. Collaborated with product and design teams and enforced security best practices (XSS, CSRF).",
      },
      {
        year: "2026",
        role: "Senior Software Engineer",
        company: "Netcompany",
        description:
          "Working on enterprise-scale software systems and large-scale applications. Involved in requirements analysis, development, and production support with a strong focus on scalability and reliability.",
      },
    ],
  },
  cta: {
    label: "Collaborate",
    heading: "Let's build something",
    sub: "I'm always open to discussing product work, freelance contracts, or just a great opportunity.",
    primary: "Start a conversation",
    secondary: "Download CV",
  },
  contact: {
    label: "Contact",
    heading: "Get in touch",
    sub: "Open for new collaboration or inquiries.",
    email_label: "Email",
    linkedin_label: "LinkedIn",
    github_label: "GitHub",
    location_label: "Location",
    location_value: "Thessaloniki, Greece",
    remote: "Open to remote worldwide",
    send: "Send me an email",
  },
  footer: {
    tagline: "Full Stack Engineer building scalable digital experiences.",
    nav: "Navigation",
    social: "Social",
    legal: "Legal",
    built: "Built with Next.js & Tailwind CSS",
  },
};
