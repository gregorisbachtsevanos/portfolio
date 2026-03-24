"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import useI18n from "@/hooks/useI18n";

import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const { messages } = useI18n();
  const { hero } = messages;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-background to-background dark:via-black dark:to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background dark:via-black dark:to-black" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="animate-fade-in">
          <div className="mb-4 inline-flex max-w-full rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 dark:border-blue-500/20 dark:bg-blue-500/10">
            <span className="text-xs text-blue-600 dark:text-blue-400 sm:text-sm">
              {hero.availability}
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl">
            {hero.title}
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {hero.subtitle}
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mb-12 sm:text-xl lg:text-2xl">
            {hero.description}
          </p>

          <div className="mb-10 flex flex-col justify-center gap-3 sm:mb-12 sm:flex-row sm:gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="group w-full rounded-lg bg-blue-600 px-6 py-5 text-base text-white hover:bg-blue-700 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
            >
              {hero.ctaProject}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              variant="outline"
              className="w-full rounded-lg px-6 py-5 text-base sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
            >
              {hero.ctaWork}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-5 sm:gap-6">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background dark:from-black to-transparent" />
    </section>
  );
};

export default Hero;
