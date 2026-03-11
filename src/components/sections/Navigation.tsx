"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { useTheme } from "@/app/providers";

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme, toggleTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/80 dark:bg-black/80 backdrop-blur-lg border-b border-foreground/10"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<button
							onClick={() => scrollToSection("hero")}
							className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
						>
							Gregoris Bachtsevanos
						</button>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-8">
							<button
								onClick={() => scrollToSection("about")}
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								About
							</button>
							<button
								onClick={() => scrollToSection("services")}
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Services
							</button>
							<button
								onClick={() => scrollToSection("projects")}
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Projects
							</button>
							<button
								onClick={() => scrollToSection("tech-stack")}
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Tech Stack
							</button>
							{mounted && (
								<button
									onClick={toggleTheme}
									className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
									aria-label="Toggle theme"
								>
									{theme === "dark" ? (
										<Sun size={20} />
									) : (
										<Moon size={20} />
									)}
								</button>
							)}
							<Button
								onClick={() => scrollToSection("contact")}
								className="bg-blue-600 hover:bg-blue-700 text-white"
							>
								Contact
							</Button>
						</div>
					</div>

					<div className="md:hidden flex items-center space-x-2">
						{mounted && (
							<button
								onClick={toggleTheme}
								className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
								aria-label="Toggle theme"
							>
								{theme === "dark" ? (
									<Sun size={20} />
								) : (
									<Moon size={20} />
								)}
							</button>
						)}
						<button
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							className="text-muted-foreground hover:text-foreground"
						>
							{isMobileMenuOpen ? (
								<X size={24} />
							) : (
								<Menu size={24} />
							)}
						</button>
					</div>
				</div>
			</div>

			{isMobileMenuOpen && (
				<div className="md:hidden bg-background/95 dark:bg-black/95 backdrop-blur-lg border-b border-foreground/10">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<button
							onClick={() => scrollToSection("about")}
							className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/5 rounded-md transition-colors"
						>
							About
						</button>
						<button
							onClick={() => scrollToSection("services")}
							className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/5 rounded-md transition-colors"
						>
							Services
						</button>
						<button
							onClick={() => scrollToSection("projects")}
							className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/5 rounded-md transition-colors"
						>
							Projects
						</button>
						<button
							onClick={() => scrollToSection("tech-stack")}
							className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/5 rounded-md transition-colors"
						>
							Tech Stack
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="block w-full text-left px-3 py-2 text-blue-600 hover:text-blue-700 hover:bg-secondary/5 rounded-md transition-colors"
						>
							Contact
						</button>
					</div>
				</div>
			)}
		</nav>
	);
}
