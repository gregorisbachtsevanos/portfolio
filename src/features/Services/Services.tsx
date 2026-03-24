"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { services as serviceItems } from "@/config/site-content";
import useI18n from "@/hooks/useI18n";

const Services = () => {
  const { messages } = useI18n();
  const { services } = messages;

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-background to-background py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
            {services.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
            {services.subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service) => {
            const Icon = service.icon;
            const copy = services.items[service.id];

            return (
              <Card
                key={service.id}
                className="bg-gradient-to-br from-secondary/50 to-secondary/0 border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <CardHeader className="p-5 sm:p-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon
                      className="text-blue-400 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <CardTitle className="text-lg leading-snug sm:text-xl">
                    {copy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {copy.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
