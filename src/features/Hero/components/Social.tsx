"use client";

import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

const Socials = () => {
	return (
		<div className="flex items-center justify-center gap-5 sm:gap-6">
			<a
				href={siteConfig.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="text-muted-foreground hover:text-foreground transition-colors"
			>
				<Github size={24} />
			</a>
			<a
				href={siteConfig.linkedinUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="text-muted-foreground hover:text-foreground transition-colors"
			>
				<Linkedin size={24} />
			</a>
		</div>
	);
};

export default Socials;
