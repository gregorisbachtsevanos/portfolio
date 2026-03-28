import { siteConfig } from "@/config/site";
import { Github, Linkedin, Mail } from "lucide-react";
import { memo } from "react";

interface IContactLinksProps {
	github: string;
	linkedin: string;
}

const ContactLinks = ({ github, linkedin }: IContactLinksProps) => {
	const contactLinks = [
		{
			href: `mailto:${siteConfig.email}`,
			icon: Mail,
			label: siteConfig.email,
			external: false,
		},
		{
			href: siteConfig.githubUrl,
			icon: Github,
			label: github,
			external: true,
		},
		{
			href: siteConfig.linkedinUrl,
			icon: Linkedin,
			label: linkedin,
			external: true,
		},
	];

	return (
		<div className="space-y-4">
			{contactLinks.map((link) => (
				<a
					key={link.label}
					href={link.href}
					{...(link.external && {
						target: "_blank",
						rel: "noopener noreferrer",
					})}
					className="group flex items-center gap-3 text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
				>
					<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
						<link.icon
							size={20}
							className="text-blue-600 dark:text-blue-400"
						/>
					</div>
					<span
						className={`text-sm sm:text-base ${link.external ? "" : "break-all"}`}
					>
						{link.label}
					</span>
				</a>
			))}
		</div>
	);
};

export default memo(ContactLinks);
