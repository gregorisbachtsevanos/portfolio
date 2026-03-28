"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { services as serviceItems } from "@/config/site-content";
import useI18n from "@/hooks/useI18n";
import Service from "./components/Service";

const Services = () => {
	const { messages } = useI18n();
	const { services } = messages;

	return (
		<section
			id="services"
			className="bg-gradient-to-b from-background to-background py-20 sm:py-24"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center sm:mb-16">
					<h2 className="mb-4 text-2xl font-bold sm:text-4xl">
						{services.title}
					</h2>
					<p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
						{services.subtitle}
					</p>
				</div>
				<div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
					{serviceItems.map((service) => {
						const Icon = service.icon;
						const serviceItem = services.items[service.id];

						return (
							<Service
								key={service.id}
								Icon={Icon}
								serviceItem={serviceItem}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
