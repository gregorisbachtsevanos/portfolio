"use client";

import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { projects as projectItems } from "@/config/site-content";
import useI18n from "@/hooks/useI18n";

const Projects = () => {
  const { messages } = useI18n();
  const { projects } = messages;

  return (
    <section id="projects" className="bg-background py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
            {projects.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
            {projects.subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {projectItems.map((project) => {
            const copy = projects.items[project.id];

            return (
              <Card
                key={project.id}
                className="bg-gradient-to-br from-secondary/50 to-secondary/0 border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <CardHeader className="p-5 sm:p-6">
                  <CardTitle className="mb-2 text-xl leading-snug transition-colors group-hover:text-cyan-400 sm:text-2xl">
                    {copy.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {copy.description}
                  </p>
                </CardHeader>
                <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300 hover:bg-blue-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                      {copy.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
