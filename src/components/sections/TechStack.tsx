"use client";

import { Code as Code2, Database, Server, Cloud } from "lucide-react";

const techCategories = [
  {
    category: "Frontend",
    icon: Code2,
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
    category: "Backend",
    icon: Server,
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Token Security",
    ],
  },
  {
    category: "Database",
    icon: Database,
    technologies: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "DevOps",
    icon: Cloud,
    technologies: [
      "Docker",
      "Linux Servers",
      "Git",
      "CI/CD",
      "Cloud Deployments",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern technologies and tools I use to build reliable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary/50 to-secondary/0 border border-border rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                  <category.icon
                    className="text-teal-600 dark:text-teal-400"
                    size={20}
                  />
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
