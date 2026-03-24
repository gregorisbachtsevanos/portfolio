"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { locales } from "@/lang";
import useI18n from "@/hooks/useI18n";
import useTheme from "@/hooks/useTheme";

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { toggleTheme } = useTheme();
	const { locale, setLocale, messages } = useI18n();
	const { navigation } = messages;

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

	const renderLanguageSwitcher = () => (
		<div
			className="flex items-center rounded-full border border-border/70 bg-secondary/40 p-1"
			aria-label={navigation.languageLabel}
		>
			{locales.map((option) => (
				<button
					key={option}
					type="button"
					onClick={() => setLocale(option)}
					className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors sm:px-3 sm:text-xs ${
						locale === option
							? "bg-foreground text-background"
							: "text-muted-foreground hover:text-foreground"
					}`}
					aria-pressed={locale === option}
				>
					{navigation.languages[option]}
				</button>
			))}
		</div>
	);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/80 dark:bg-black/80 backdrop-blur-lg border-b border-foreground/10"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-14 gap-3 sm:h-16">
					<div className="flex-shrink-0">
						<button
							onClick={() => scrollToSection("hero")}
							className="max-w-[11rem] text-left text-base font-bold leading-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent sm:max-w-none sm:text-xl"
						>
							{siteConfig.name}
						</button>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-8">
							<button
								onClick={() => scrollToSection("about")}
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								{navigation.about}
							</button>
							<button
								onClick={() => scrollToSection("services")}
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								{navigation.services}
							</button>
							<button
								onClick={() => scrollToSection("projects")}
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								{navigation.projects}
							</button>
							<button
								onClick={() => scrollToSection("tech-stack")}
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								{navigation.techStack}
							</button>
							{renderLanguageSwitcher()}
							<button
								onClick={toggleTheme}
								className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
								aria-label="Toggle theme"
							>
								<Sun size={20} className="hidden dark:block" />
								<Moon size={20} className="block dark:hidden" />
							</button>
							<Button
								onClick={() => scrollToSection("contact")}
								className="bg-blue-600 hover:bg-blue-700 text-white"
							>
								{navigation.contact}
							</Button>
						</div>
					</div>

					<div className="md:hidden flex items-center gap-1.5">
						{renderLanguageSwitcher()}
						<button
							onClick={toggleTheme}
							className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
							aria-label="Toggle theme"
						>
							<Sun size={20} className="hidden dark:block" />
							<Moon size={20} className="block dark:hidden" />
						</button>
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
				<div className="md:hidden border-b border-foreground/10 bg-background/95 shadow-lg backdrop-blur-lg dark:bg-black/95">
					<div className="space-y-1 px-4 pb-4 pt-2">
						<button
							onClick={() => scrollToSection("about")}
							className="block w-full rounded-md px-3 py-3 text-left text-base text-muted-foreground transition-colors hover:bg-secondary/5 hover:text-foreground"
						>
							{navigation.about}
						</button>
						<button
							onClick={() => scrollToSection("services")}
							className="block w-full rounded-md px-3 py-3 text-left text-base text-muted-foreground transition-colors hover:bg-secondary/5 hover:text-foreground"
						>
							{navigation.services}
						</button>
						<button
							onClick={() => scrollToSection("projects")}
							className="block w-full rounded-md px-3 py-3 text-left text-base text-muted-foreground transition-colors hover:bg-secondary/5 hover:text-foreground"
						>
							{navigation.projects}
						</button>
						<button
							onClick={() => scrollToSection("tech-stack")}
							className="block w-full rounded-md px-3 py-3 text-left text-base text-muted-foreground transition-colors hover:bg-secondary/5 hover:text-foreground"
						>
							{navigation.techStack}
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="block w-full rounded-md px-3 py-3 text-left text-base text-blue-600 transition-colors hover:bg-secondary/5 hover:text-blue-700"
						>
							{navigation.contact}
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
