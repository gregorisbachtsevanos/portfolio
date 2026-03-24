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
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: contact.toastTitle,
        description: contact.toastDescription,
      });
      setFormData(initialFormData);
      setIsSubmitting(false);
    }, 1000);
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
