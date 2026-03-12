"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Trust from "@/components/sections/Trust";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/sections/Navigation";

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
