"use client";

import { siteConfig } from "@/config/site";
import useI18n from "@/hooks/useI18n";
import { MapPin } from "lucide-react";

const About = () => {
  const { messages } = useI18n();
  const { about } = messages;

  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="mb-4 text-2xl font-bold sm:text-4xl">{about.title}</h2>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground sm:text-base">
            <MapPin size={16} />
            <span>{`${about.locationLabel} ${siteConfig.location}`}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/0 p-6 sm:p-10 lg:p-12">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`text-base leading-relaxed text-foreground sm:text-lg lg:text-xl ${
                index < about.paragraphs.length - 1 ? "mb-6" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
