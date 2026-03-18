"use client";

import { techCategoryIcons } from "@/lang";
import { useI18n } from "@/lib/i18n";

export default function TechStack() {
	const { messages } = useI18n();
	const { techStack } = messages;

	return (
		<section id="tech-stack" className="py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						{techStack.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						{techStack.subtitle}
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{techStack.categories.map((category) => {
						const Icon = techCategoryIcons[category.id];

						return (
							<div
								key={category.id}
								className="bg-gradient-to-br from-secondary/50 to-secondary/0 border border-border rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
										<Icon
											className="text-teal-600 dark:text-teal-400"
											size={20}
										/>
									</div>
									<h3 className="text-xl font-semibold">{category.label}</h3>
								</div>
								<ul className="space-y-2">
									{category.technologies.map((tech) => (
										<li
											key={tech}
											className="text-muted-foreground flex items-center gap-2"
										>
											<div className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full" />
											{tech}
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
