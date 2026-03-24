import Hero from "@/features/Hero/Hero";
import About from "@/features/About";
import Services from "@/features/Services";
import Projects from "@/features/Projects";
import TechStack from "@/features/TechStack";
import Trust from "@/features/Trust";
import Contact from "@/features/Contact";
import Navigation from "@/features/Navigation";

const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Trust />
      <Contact />
    </main>
  );
};

export default Home;
