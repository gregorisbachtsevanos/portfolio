"use client";

import { trustReasons } from "@/config/site-content";
import useI18n from "@/hooks/useI18n";
import { CircleCheck as CheckCircle2 } from "lucide-react";

const Trust = () => {
  const { messages } = useI18n();
  const { trust } = messages;

  return (
    <section className="bg-gradient-to-b from-background to-background py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-2xl font-bold sm:text-4xl">{trust.title}</h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
            {trust.subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:gap-8">
          {trustReasons.map((reasonId) => {
            const reason = trust.reasons[reasonId];

            return (
              <div
                key={reasonId}
                className="flex flex-col gap-4 rounded-xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/0 p-5 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 sm:flex-row sm:p-6"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2
                    className="text-green-600 dark:text-green-400"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trust;
