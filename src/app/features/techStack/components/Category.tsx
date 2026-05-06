import { CategoryProps } from "../types";

const Category = ({ category, techStackCategory, Icon }: CategoryProps) => {
	return (
		<div className="rounded-xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/0 p-5 transition-all duration-300 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 sm:p-6">
			<div className="mb-5 flex items-start gap-3 sm:mb-6">
				<div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
					<Icon
						className="text-teal-600 dark:text-teal-400"
						size={20}
					/>
				</div>
				<h3 className="text-lg font-semibold leading-snug sm:text-xl">
					{techStackCategory.label}
				</h3>
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
};

export default Category;
