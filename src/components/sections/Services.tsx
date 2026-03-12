"use client";

import { Code, Server, Zap, Cloud, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { content } from "@/lang/en";

export default function Services() {
	const { services } = content;

	return (
		<section
			id="services"
			className="py-24 bg-gradient-to-b from-background to-background"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						{services.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						{services.subtitle}
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.items.map((service, index) => (
						<Card
							key={index}
							className="bg-gradient-to-br from-secondary/50 to-secondary/0 border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
						>
							<CardHeader>
								<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
									<service.icon
										className="text-blue-400 dark:text-blue-400"
										size={24}
									/>
								</div>
								<CardTitle className="text-xl">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground leading-relaxed">
									{service.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
