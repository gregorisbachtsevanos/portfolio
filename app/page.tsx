import ScrollAnimator from "@/components/common/ScrollAnimator";
import TechnicalExpertise from "@/components/common/TechnicalExpertise";
import Timeline from "@/components/common/Timeline";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
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
