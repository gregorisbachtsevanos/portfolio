import { Badge } from "@/components/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { ProjectProps } from "../types";

const Project = ({ project, projectItem }: ProjectProps) => {
	return (
		<Card className="bg-gradient-to-br from-secondary/50 to-secondary/0 border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
			<CardHeader className="p-5 sm:p-6">
				<CardTitle className="mb-2 text-xl leading-snug transition-colors group-hover:text-cyan-400 sm:text-2xl">
					{projectItem.title}
				</CardTitle>
				<p className="text-muted-foreground leading-relaxed">
					{projectItem.description}
				</p>
			</CardHeader>
			<CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
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
						{projectItem.result}
					</p>
				</div>
			</CardContent>
		</Card>
	);
};

export default Project;
