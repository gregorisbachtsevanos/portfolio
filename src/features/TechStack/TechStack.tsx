"use client";

import { techCategories } from "@/config/site-content";
import useI18n from "@/hooks/useI18n";
import Category from "./components/Category";

const TechStack = () => {
	const { messages } = useI18n();
	const { techStack } = messages;

	return (
		<section
			id="tech-stack"
			className="scroll-mt-20 bg-background py-20 sm:py-24"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center sm:mb-16">
					<h2 className="mb-4 text-2xl font-bold sm:text-4xl">
						{techStack.title}
					</h2>
					<p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
						{techStack.subtitle}
					</p>
				</div>
				<div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
					{techCategories.map((category) => {
						const Icon = category.icon;
						const techStackCategory =
							techStack.categories[category.id];
						return (
							<Category
								key={category.id}
								category={category}
								techStackCategory={techStackCategory}
								Icon={Icon}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TechStack;
