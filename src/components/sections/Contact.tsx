"use client";

import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig } from "@/config/site";
import useContactForm from "@/hooks/useContactForm";
import useI18n from "@/hooks/useI18n";

const Contact = () => {
	const { messages } = useI18n();
	const { contact } = messages;
	const { formData, isSubmitting, handleChange, handleSubmit } =
		useContactForm();

	return (
		<section id="contact" className="bg-background py-20 sm:py-24">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center sm:mb-16">
					<h2 className="mb-4 text-2xl font-bold sm:text-4xl">
						{contact.title}
					</h2>
					<p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
						{contact.subtitle}
					</p>
				</div>

				<div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
					<div>
						<h3 className="mb-5 text-xl font-semibold sm:mb-6 sm:text-2xl">
							{contact.getInTouch}
						</h3>
						<p className="text-muted-foreground mb-8 leading-relaxed">
							{contact.paragraphs[0]}
						</p>

						<div className="space-y-4">
							<a
								href={`mailto:${siteConfig.email}`}
								className="group flex items-start gap-3 text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
							>
								<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
									<Mail
										size={20}
										className="text-blue-600 dark:text-blue-400"
									/>
								</div>
								<span className="break-all text-sm sm:text-base">
									{siteConfig.email}
								</span>
							</a>

							<a
								href={siteConfig.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-start gap-3 text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
							>
								<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
									<Github
										size={20}
										className="text-blue-600 dark:text-blue-400"
									/>
								</div>
								<span className="text-sm sm:text-base">
									{contact.github}
								</span>
							</a>

							<a
								href={siteConfig.linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-start gap-3 text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
							>
								<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
									<Linkedin
										size={20}
										className="text-blue-600 dark:text-blue-400"
									/>
								</div>
								<span className="text-sm sm:text-base">
									{contact.linkedin}
								</span>
							</a>
						</div>
					</div>

					<div>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<Input
									type="text"
									placeholder={contact.formPlaceholders.name}
									value={formData.name}
									onChange={handleChange("name")}
									required
									className="focus:border-blue-500/50 placeholder:text-muted-foreground"
								/>
							</div>

							<div>
								<Input
									type="email"
									placeholder={contact.formPlaceholders.email}
									value={formData.email}
									onChange={handleChange("email")}
									required
									className="focus:border-blue-500/50 placeholder:text-muted-foreground"
								/>
							</div>

							<div>
								<Textarea
									placeholder={
										contact.formPlaceholders.message
									}
									value={formData.message}
									onChange={handleChange("message")}
									required
									rows={6}
									className="focus:border-blue-500/50 placeholder:text-muted-foreground resize-none"
								/>
							</div>

							<Button
								type="submit"
								disabled={isSubmitting}
								className="group w-full bg-blue-600 py-5 text-base text-white hover:bg-blue-700 sm:py-6 sm:text-lg"
							>
								{isSubmitting
									? contact.submitButton.sending
									: contact.submitButton.send}
								<Send
									className="ml-2 group-hover:translate-x-1 transition-transform"
									size={20}
								/>
							</Button>
						</form>
					</div>
				</div>

				<div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
					<p>{contact.copyright}</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
