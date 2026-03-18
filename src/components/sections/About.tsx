"use client";

import { siteConfig } from "@/config/site";
import useI18n from "@/hooks/useI18n";
import { MapPin } from "lucide-react";

const About = () => {
	const { messages } = useI18n();
	const { about } = messages;

	return (
		<section id="about" className="py-24 bg-background">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						{about.title}
					</h2>
					<div className="flex items-center justify-center gap-2 text-muted-foreground">
						<MapPin size={16} />
						<span>{`${about.locationLabel} ${siteConfig.location}`}</span>
					</div>
				</div>

				<div className="bg-gradient-to-br from-secondary/50 to-secondary/0 border border-border rounded-2xl p-8 sm:p-12">
					{about.paragraphs.map((paragraph, index) => (
						<p
							key={paragraph}
							className={`text-lg sm:text-xl text-foreground leading-relaxed ${
								index < about.paragraphs.length - 1
									? "mb-6"
									: ""
							}`}
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
