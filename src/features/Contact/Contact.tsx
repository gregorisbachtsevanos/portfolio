"use client";

import useI18n from "@/hooks/useI18n";
import { memo } from "react";
import ContactInfo from "./components/ContactInfo";
import Form from "./components/Form";

const Contact = () => {
	const { messages } = useI18n();
	const { contact } = messages;

	return (
		<section
			id="contact"
			className="scroll-mt-20 bg-background py-20 sm:py-24"
		>
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
					<ContactInfo contact={contact} />
					<Form {...contact} />
				</div>
				<div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
					<p>{contact.copyright}</p>
				</div>
			</div>
		</section>
	);
};

export default memo(Contact);
