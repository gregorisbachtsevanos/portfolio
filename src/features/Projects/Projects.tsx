"use client";

import { projects as projectItems } from "@/config/site-content";
import useI18n from "@/hooks/useI18n";
import Project from "./components/Project";

const Projects = () => {
	const { messages } = useI18n();
	const { projects } = messages;

	return (
		<section
			id="projects"
			className="scroll-mt-20 bg-background py-20 sm:py-24"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center sm:mb-16">
					<h2 className="mb-4 text-2xl font-bold sm:text-4xl">
						{projects.title}
					</h2>
					<p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
						{projects.subtitle}
					</p>
				</div>
				<div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
					{projectItems.map((project) => {
						const projectItem = projects.items[project.id];

						return (
							<Project
								key={project.id}
								project={project}
								projectItem={projectItem}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
