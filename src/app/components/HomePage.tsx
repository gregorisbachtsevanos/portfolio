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

interface IHomePageProps {
  locale: TLocale;
  structuredData: Record<string, unknown>;
}

const HomePage = ({ locale, structuredData }: IHomePageProps) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
    </>
  );
};

export default HomePage;
