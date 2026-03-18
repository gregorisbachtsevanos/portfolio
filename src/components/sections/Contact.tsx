"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useToast } from "@/hooks/useToast";
import { t } from "@/lib/i18n";

export default function Contact() {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		setTimeout(() => {
			toast({
				title: t("gr", "contact.toastTitle"),
				description: t("gr", "contact.toastDescription"),
			});
			setFormData({ name: "", email: "", message: "" });
			setIsSubmitting(false);
		}, 1000);
	};

	return (
		<section id="contact" className="py-24 bg-background">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						{t("gr", "contact.title")}
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						{t("gr", "contact.subtitle")}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<h3 className="text-2xl font-semibold mb-6">
							{t("gr", "contact.getInTouch")}
						</h3>
						<p className="text-muted-foreground mb-8 leading-relaxed">
							{t("gr", "contact.paragraphs.0")}
						</p>

						<div className="space-y-4">
							<a
								href={`mailto:${t("gr", "contact.email")}`}
								className="flex items-center gap-3 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
							>
								<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
									<Mail
										size={20}
										className="text-blue-600 dark:text-blue-400"
									/>
								</div>
								<span>{t("gr", "contact.email")}</span>
							</a>

							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
							>
								<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
									<Github
										size={20}
										className="text-blue-600 dark:text-blue-400"
									/>
								</div>
								<span>{t("gr", "contact.github")}</span>
							</a>

							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
							>
								<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
									<Linkedin
										size={20}
										className="text-blue-600 dark:text-blue-400"
									/>
								</div>
								<span>{t("gr", "contact.linkedin")}</span>
							</a>
						</div>
					</div>

					<div>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<Input
									type="text"
									placeholder={t(
										"gr",
										"contact.formPlaceholders.name",
									)}
									value={formData.name}
									onChange={(e) =>
										setFormData({
											...formData,
											name: e.target.value,
										})
									}
									required
									className="focus:border-blue-500/50 placeholder:text-muted-foreground"
								/>
							</div>

							<div>
								<Input
									type="email"
									placeholder={t(
										"gr",
										"contact.formPlaceholders.email",
									)}
									value={formData.email}
									onChange={(e) =>
										setFormData({
											...formData,
											email: e.target.value,
										})
									}
									required
									className="focus:border-blue-500/50 placeholder:text-muted-foreground"
								/>
							</div>

							<div>
								<Textarea
									placeholder={t(
										"gr",
										"contact.formPlaceholders.message",
									)}
									value={formData.message}
									onChange={(e) =>
										setFormData({
											...formData,
											message: e.target.value,
										})
									}
									required
									rows={6}
									className="focus:border-blue-500/50 placeholder:text-muted-foreground resize-none"
								/>
							</div>

							<Button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg group"
							>
								{isSubmitting
									? t("gr", "contact.submitButton.sending")
									: t("gr", "contact.submitButton.send")}
								<Send
									className="ml-2 group-hover:translate-x-1 transition-transform"
									size={20}
								/>
							</Button>
						</form>
					</div>
				</div>

				<div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
					<p>{t("gr", "contact.copyright")}</p>
				</div>
			</div>
		</section>
	);
}
