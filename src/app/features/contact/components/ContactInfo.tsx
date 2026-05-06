import { memo } from "react";
import ContactLinks from "./ContactLinks";
import { IMessages } from "@/lang";

type TContact = IMessages["contact"];

const ContactInfo = ({ contact }: { contact: TContact }) => {
	return (
		<div>
			<h3 className="mb-5 text-xl font-semibold">{contact.getInTouch}</h3>

			<p className="text-muted-foreground mb-8">
				{contact.paragraphs[0]}
			</p>

			<ContactLinks github={contact.github} linkedin={contact.linkedin} />
		</div>
	);
};

export default memo(ContactInfo);
