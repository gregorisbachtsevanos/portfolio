"use client";

import { techCategories } from "@/config/site-content";
import useI18n from "@/hooks/useI18n";

const TechStack = () => {
  const { messages } = useI18n();
  const { techStack } = messages;

  return (
    <section id="tech-stack" className="bg-background py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
            {techStack.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
            {techStack.subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {techCategories.map((category) => {
            const Icon = category.icon;
            const copy = techStack.categories[category.id];

            return (
              <div
                key={category.id}
                className="rounded-xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/0 p-5 transition-all duration-300 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 sm:p-6"
              >
                <div className="mb-5 flex items-start gap-3 sm:mb-6">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                    <Icon
                      className="text-teal-600 dark:text-teal-400"
                      size={20}
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                    {copy.label}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
