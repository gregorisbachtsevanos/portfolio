import { buildPageMetadata, buildStructuredData } from "@/config/seo";
import { I18nProvider } from "@/lib/i18n";
import About from "@/app/features/about";
import Contact from "@/app/features/contact";
import Hero from "@/app/features/hero";
import Navigation from "@/app/features/navigation";
import Projects from "@/app/features/projects";
import Services from "@/app/features/services";
import TechStack from "@/app/features/techStack";
import { getHtmlLang } from "@/config/seo";
import type { TLocale } from "@/lang";
import Trust from "@/app/features/trust";

const locale: TLocale = "en";

export const generateMetadata = async () => buildPageMetadata(locale);

export default function Home() {
  return (
    <I18nProvider initialLocale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData(locale)),
        }}
      />
      <main
        lang={getHtmlLang(locale)}
        className="min-h-screen bg-background text-foreground transition-colors duration-300"
      >
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Trust />
        <Contact />
      </main>
    </I18nProvider>
  );
}
