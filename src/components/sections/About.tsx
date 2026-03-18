"use client";

import { t } from "@/lib/i18n";
import { MapPin } from "lucide-react";

export default function About() {
	return (
		<section id="about" className="py-24 bg-background">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						{t("en", "about.title")}
					</h2>
					<div className="flex items-center justify-center gap-2 text-muted-foreground">
						<MapPin size={16} />
						<span>{t("en", "about.location")}</span>
					</div>
				</div>

				<div className="bg-gradient-to-br from-secondary/50 to-secondary/0 border border-border rounded-2xl p-8 sm:p-12">
					<p className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
						{t("en", "about.paragraphs.0")}
					</p>

					<p className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
						{t("en", "about.paragraphs.1")}
					</p>

					<p className="text-lg sm:text-xl text-foreground leading-relaxed">
						{t("en", "about.paragraphs.2")}
					</p>
				</div>
			</div>
		</section>
	);
}
