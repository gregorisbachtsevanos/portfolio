"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import { useToast } from "@/hooks/useToast";
import useI18n from "./useI18n";

type TContactFormData = {
	name: string;
	email: string;
	message: string;
};

const initialFormData: TContactFormData = {
	name: "",
	email: "",
	message: "",
};

const useContactForm = () => {
	const { toast } = useToast();
	const { messages } = useI18n();
	const { contact } = messages;
	const [formData, setFormData] = useState<TContactFormData>(initialFormData);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange =
		(field: keyof TContactFormData) =>
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setFormData((current) => ({
				...current,
				[field]: event.target.value,
			}));
		};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isSubmitting) {
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = (await response.json().catch(() => null)) as {
				message?: string;
			} | null;

			if (!response.ok) {
				throw new Error(data?.message ?? contact.toastErrorDescription);
			}

			toast({
				title: contact.toastTitle,
				description: contact.toastDescription,
			});

			setFormData(initialFormData);
		} catch (error) {
			toast({
				variant: "destructive",
				title: contact.toastErrorTitle,
				description:
					error instanceof Error
						? error.message
						: contact.toastErrorDescription,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return {
		formData,
		isSubmitting,
		handleChange,
		handleSubmit,
	};
};

export default useContactForm;
