"use client";

import { Button } from "@/components/Button";
import { siteConfig } from "@/config/site";
import useI18n from "@/hooks/useI18n";
import useTheme from "@/hooks/useTheme";
import { Menu, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import NavLinks from "./components/NavLinks";
import ThemeToggleButton from "./components/ThemeToggleButton";
import useCloseMobileMenuOnResize from "./hooks/useCloseMobileMenuOnResize";
import useNavbarScrolled from "./hooks/useNavbarScrolled";
import useScrollToSection from "../../hooks/useScrollToSection";
import MobileNavItems from "./components/mobileNavItems";

const Navigation = () => {
	const { toggleTheme } = useTheme();
	const { messages } = useI18n();
	const { navigation } = messages;
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isScrolled = useNavbarScrolled();
	const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
	useCloseMobileMenuOnResize(closeMobileMenu);

	const scrollToSection = useScrollToSection({
		onAfterScroll: closeMobileMenu,
	});

	const navItems = useMemo(
		() => [
			{ id: "about", label: navigation.about },
			{ id: "services", label: navigation.services },
			{ id: "projects", label: navigation.projects },
			{ id: "tech-stack", label: navigation.techStack },
		],
		[navigation],
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
							type="button"
							onClick={() => scrollToSection("hero")}
							className="max-w-[11rem] text-left text-base font-bold leading-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent sm:max-w-none sm:text-xl"
						>
							{siteConfig.name}
						</button>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-8">
							<NavLinks
								scrollToSection={scrollToSection}
								navItems={navItems}
							/>
							<LanguageSwitcher />
							<ThemeToggleButton
								onClick={toggleTheme}
								className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
							/>
							<Button
								type="button"
								onClick={() => scrollToSection("contact")}
								className="bg-blue-600 hover:bg-blue-700 text-white"
							>
								{navigation.contact}
							</Button>
						</div>
					</div>
					<div className="md:hidden flex items-center gap-1.5">
						<LanguageSwitcher />
						<ThemeToggleButton
							onClick={toggleTheme}
							className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
						/>
						<button
							type="button"
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
							className="text-muted-foreground hover:text-foreground"
							aria-label="Toggle navigation menu"
							aria-expanded={isMobileMenuOpen}
							aria-controls="mobile-menu"
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
				<MobileNavItems
					navItems={navItems}
					scrollToSection={scrollToSection}
				/>
			)}
		</nav>
	);
};

export default Navigation;
