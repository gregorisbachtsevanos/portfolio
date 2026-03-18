"use client";

import { useI18n } from "@/lib/i18n";
import { CircleCheck as CheckCircle2 } from "lucide-react";

export default function Trust() {
	const { messages } = useI18n();
	const { trust } = messages;

	return (
		<section className="py-24 bg-gradient-to-b from-background to-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						{trust.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						{trust.subtitle}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{trust.reasons.map((reason) => (
						<div
							key={reason.id}
							className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/0 border border-border hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
						>
							<div className="flex-shrink-0">
								<CheckCircle2
									className="text-green-600 dark:text-green-400"
									size={24}
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
								<p className="text-muted-foreground leading-relaxed">
									{reason.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
