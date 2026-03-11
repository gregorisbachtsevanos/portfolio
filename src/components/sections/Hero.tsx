"use client";

import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export default function Hero() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-background to-background dark:via-black dark:to-black" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background dark:via-black dark:to-black" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
				<div className="animate-fade-in">
					<div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/20 rounded-full">
						<span className="text-sm text-blue-600 dark:text-blue-400">
							Available for freelance projects
						</span>
					</div>

					<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
						Full-Stack Developer
						<br />
						<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
							Building Scalable Web Applications & APIs
						</span>
					</h1>

					<p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
						I help startups and businesses build fast, reliable, and
						scalable software.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<Button
							onClick={() => scrollToSection("contact")}
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg group"
						>
							Start a Project
							<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
						</Button>
						<Button
							onClick={() => scrollToSection("projects")}
							size="lg"
							variant="outline"
							className="text-lg px-8 py-6 rounded-lg"
						>
							View My Work
						</Button>
					</div>

					<div className="flex items-center justify-center gap-6">
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Github size={24} />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Linkedin size={24} />
						</a>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background dark:from-black to-transparent" />
		</section>
	);
}
