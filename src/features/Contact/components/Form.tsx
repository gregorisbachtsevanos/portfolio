import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import useContactForm from "@/hooks/useContactForm";
import { IMessages } from "@/lang";
import { Send } from "lucide-react";
import { memo } from "react";

type TContact = IMessages["contact"];

const Form = (contact: TContact) => {
	const { formData, isSubmitting, handleChange, handleSubmit } =
		useContactForm();
	return (
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
						placeholder={contact.formPlaceholders.message}
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
	);
};

export default memo(Form);
