import type { IMessages } from "./schema";

export const en = {
  metadata: {
    title: "Gregoris Bachtsevanos | Freelance Full-Stack Developer in Greece",
    description:
      "Freelance full-stack developer in Greece building business websites, e-commerce stores, landing pages, custom web apps, and REST APIs for startups and growing businesses.",
    openGraphTitle: "Gregoris Bachtsevanos | Freelance Developer in Greece",
    openGraphDescription:
      "Helping businesses launch websites, e-shops, MVPs, and custom software with modern full-stack development.",
    keywords: [
      "gregoris bachtsevanos",
      "bachtsevanos gregoris",
      "gregorisbachtsevanos",
      "freelance developer greece",
      "web developer greece",
      "full stack developer greece",
      "ecommerce developer greece",
      "eshop developer greece",
      "custom web app developer",
      "next.js freelancer",
      "react developer greece",
      "website developer for small business",
      "startup mvp developer",
    ],
  },
  navigation: {
    about: "About",
    services: "Services",
    projects: "Projects",
    techStack: "Tech Stack",
    contact: "Contact",
    languageLabel: "Language",
    languages: {
      en: "EN",
      gr: "GR",
    },
  },
  hero: {
    title: "Freelance Web Developer in Greece",
    subtitle: "Websites, E-Commerce & Custom Apps",
    description:
      "I build business websites, e-shops, landing pages, custom web applications, and APIs for startups, local companies, and growing teams.",
    ctaProject: "Start a Project",
    ctaWork: "View My Work",
    availability: "Available for freelance projects",
  },
  about: {
    title: "About Me",
    locationLabel: "Based in",
    paragraphs: [
      "I'm a freelance full-stack developer based in Greece, helping businesses and founders build websites, e-commerce stores, internal tools, and custom web applications. I work across frontend and backend to deliver complete solutions that are practical, fast, and ready for real users.",
      "My focus is not limited to one type of project. I can help with company websites, landing pages, startup MVPs, booking flows, dashboards, APIs, and custom business software. The goal is always the same: software that looks professional, performs well, and supports growth.",
      "From planning architecture to deployment, I aim for clean code, maintainability, and dependable delivery. If you need a developer for a new idea or an existing product, I can help you move from concept to production.",
    ],
  },
  services: {
    title: "Services",
    subtitle:
      "Flexible freelance development services for websites, e-shops, and custom software",
    items: {
      "full-stack-web-apps": {
        title: "Business Websites & Custom Web Apps",
        description:
          "Modern websites, landing pages, and custom web platforms built around your business goals, branding, and workflow.",
      },
      "api-backend": {
        title: "API Development & Backend Systems",
        description:
          "Secure backend services, REST APIs, authentication, integrations, and data architecture for real business use cases.",
      },
      "startup-mvp": {
        title: "E-Commerce & MVP Development",
        description:
          "From e-shops to startup MVPs, I build lean first versions that help you launch quickly and validate ideas with confidence.",
      },
      "devops-deployment": {
        title: "DevOps & Deployment",
        description:
          "Deployment, hosting setup, Docker, and CI/CD pipelines so your project goes live cleanly and stays maintainable.",
      },
      "performance-optimization": {
        title: "Performance Optimization",
        description:
          "Improve speed, stability, SEO foundations, and scalability for existing websites and applications.",
      },
    },
  },
  projects: {
    title: "Featured Projects",
    subtitle:
      "Recent work showcasing full-stack development and system architecture",
    items: {
      "authentication-platform": {
        title: "Authentication Platform",
        description:
          "Secure authentication backend handling machine tokens, refresh tokens, and access tokens for multiple applications. Built with industry-standard security practices.",
        result: "Handles 10k+ daily auth requests",
      },
      "task-management-platform": {
        title: "Task Management Platform",
        description:
          "Full-stack project and task management system with projects, groups, tasks, and subtasks. Complete with real-time updates and collaborative features.",
        result: "Improved team productivity by 40%",
      },
      "developer-dashboard": {
        title: "Developer Dashboard",
        description:
          "Modern analytics dashboard with advanced state management and API integrations. Real-time data visualization and performance metrics.",
        result: "Processes 100k+ data points/day",
      },
    },
  },
  techStack: {
    title: "Tech Stack",
    subtitle: "Modern technologies and tools I use to build reliable solutions",
    categories: {
      frontend: {
        label: "Frontend",
      },
      backend: {
        label: "Backend",
      },
      database: {
        label: "Database",
      },
      devops: {
        label: "DevOps",
      },
    },
  },
  trust: {
    title: "Why Work With Me",
    subtitle: "Delivering excellence through proven principles and practices",
    reasons: {
      "clean-code": {
        title: "Clean and Maintainable Code",
        description:
          "Following best practices and industry standards to ensure your codebase stays manageable as it grows.",
      },
      scalability: {
        title: "Focus on Scalability",
        description:
          "Architecture designed to handle growth. Built to scale from MVP to enterprise.",
      },
      "production-ready": {
        title: "Production-Ready Architecture",
        description:
          "Every project is built with production in mind. Security, performance, and reliability from day one.",
      },
      "full-stack-expertise": {
        title: "Strong Backend and Frontend Expertise",
        description:
          "Full-stack capabilities mean seamless integration between your frontend and backend systems.",
      },
    },
  },
  contact: {
    title: "Have a Project in Mind?",
    subtitle:
      "Need a website, e-shop, or custom app? Let's discuss the right solution for your business.",
    getInTouch: "Get in Touch",
    paragraphs: [
      "Whether you need a new company website, a custom business tool, an e-commerce store, or help improving an existing product, I'm available for freelance work in English and Greek.",
    ],
    formPlaceholders: {
      name: "Your Name",
      email: "Your Email",
      message: "Tell me about your project...",
    },
    submitButton: {
      send: "Send Message",
      sending: "Sending...",
    },
    toastTitle: "Message sent!",
    toastDescription: "I'll get back to you as soon as possible.",
    toastErrorTitle: "Message failed",
    toastErrorDescription:
      "Your message could not be sent right now. Please try again.",
    copyright: "© 2026 Gregoris Bachtsevanos. All rights reserved.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
} satisfies IMessages;
