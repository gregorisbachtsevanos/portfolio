"use client";

import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Services from "@/src/components/sections/Services";
import Projects from "@/src/components/sections/Projects";
import TechStack from "@/src/components/sections/TechStack";
import Trust from "@/src/components/sections/Trust";
import Contact from "@/src/components/sections/Contact";
import Navigation from "@/src/components/sections/Navigation";

export default function Home() {
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
}
