import ScrollAnimator from "@/components/sections/ScrollAnimator/ScrollAnimator";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise/TechnicalExpertise";
import Timeline from "@/components/sections/Timeline/Timeline";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import CTABanner from "@/components/ui/CTABanner";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main>
      <ScrollAnimator />
      <Navbar />
      <Hero />
      <About />
      <TechnicalExpertise />
      <Projects />
      <Timeline />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
