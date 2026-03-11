"use client";

import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={16} />
            <span>Based in Greece</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-secondary/50 to-secondary/0 border border-border rounded-2xl p-8 sm:p-12">
          <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
            I'm a full-stack software engineer who helps startups and businesses
            build scalable, reliable web platforms and APIs. With expertise
            spanning modern frontend frameworks and robust backend systems, I
            focus on creating solutions that not only work today but scale for
            tomorrow.
          </p>

          <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
            My approach goes beyond just writing code. I prioritize clean
            architecture, performance optimization, and maintainability to
            ensure your product can grow alongside your business. Whether you're
            launching an MVP or scaling an existing platform, I bring
            production-ready solutions built on proven technologies.
          </p>

          <p className="text-lg sm:text-xl text-foreground leading-relaxed">
            From designing secure REST APIs to crafting modern React interfaces,
            I bridge the gap between technical excellence and business outcomes.
            Let's build something that lasts.
          </p>
        </div>
      </div>
    </section>
  );
}
