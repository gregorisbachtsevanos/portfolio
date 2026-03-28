import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { ServiceProps } from "../types";

const Service = ({ serviceItem, Icon }: ServiceProps) => {
	return (
		<Card className="bg-gradient-to-br from-secondary/50 to-secondary/0 border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
			<CardHeader className="p-5 sm:p-6">
				<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
					<Icon
						className="text-blue-400 dark:text-blue-400"
						size={24}
					/>
				</div>
				<CardTitle className="text-lg leading-snug sm:text-xl">
					{serviceItem.title}
				</CardTitle>
			</CardHeader>
			<CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
				<p className="text-muted-foreground leading-relaxed">
					{serviceItem.description}
				</p>
			</CardContent>
		</Card>
	);
};

export default Service;
