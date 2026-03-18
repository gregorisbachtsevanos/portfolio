"use client";

import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useI18n } from "@/lib/i18n";

export default function Projects() {
	const { messages } = useI18n();
	const { projects } = messages;

	return (
		<section id="projects" className="py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						{projects.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						{projects.subtitle}
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.items.map((project) => (
						<Card
							key={project.id}
							className="bg-gradient-to-br from-secondary/50 to-secondary/0 border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
						>
							<CardHeader>
								<CardTitle className="text-2xl mb-2 group-hover:text-cyan-400 transition-colors">
									{project.title}
								</CardTitle>
								<p className="text-muted-foreground leading-relaxed">
									{project.description}
								</p>
							</CardHeader>
							<CardContent>
								<div className="mb-4">
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech) => (
											<Badge
												key={tech}
												variant="outline"
												className="border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300 hover:bg-blue-500/20"
											>
												{tech}
											</Badge>
										))}
									</div>
								</div>
								<div className="pt-4 border-t border-border">
									<p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
										{project.result}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
