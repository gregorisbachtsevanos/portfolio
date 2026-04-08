import About from "@/features/About";
import Contact from "@/features/Contact";
import Hero from "@/features/Hero/Hero";
import Navigation from "@/features/Navigation";
import Projects from "@/features/Projects";
import Services from "@/features/Services";
import TechStack from "@/features/TechStack";
import Trust from "@/features/Trust";
import { getHtmlLang } from "@/config/seo";
import type { TLocale } from "@/lang";

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
