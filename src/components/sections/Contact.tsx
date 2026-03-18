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
		<section id="contact" className="py-24 bg-background">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						{contact.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						{contact.subtitle}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<h3 className="text-2xl font-semibold mb-6">
							{contact.getInTouch}
						</h3>
						<p className="text-muted-foreground mb-8 leading-relaxed">
							{contact.paragraphs[0]}
						</p>

						<div className="space-y-4">
							<a
								href={`mailto:${siteConfig.email}`}
								className="flex items-center gap-3 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
							>
								<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
									<Mail
										size={20}
										className="text-blue-600 dark:text-blue-400"
									/>
								</div>
								<span>{siteConfig.email}</span>
							</a>

							<a
								href={siteConfig.githubUrl}
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
								<span>{contact.github}</span>
							</a>

							<a
								href={siteConfig.linkedinUrl}
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
								<span>{contact.linkedin}</span>
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
								className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg group"
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
