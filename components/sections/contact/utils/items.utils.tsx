import { Translations } from "@/lib/lang/types/lang.types";
import { ContactItem } from "../types/contact.types";
import { EmailIcon, GitHubIcon, LinkedInIcon, PinIcon } from "./icons.utils";

export const structureItems = (t: Translations): ContactItem[] => [
  {
    label: t.contact.email_label,
    value: "gregorisbachtsevanos@gmail.com",
    href: "mailto:gregorisbachtsevanos@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: t.contact.linkedin_label,
    value: "/in/graig-engineer",
    href: "https://www.linkedin.com/in/gregorisbachtsevanos/",
    icon: <LinkedInIcon />,
  },
  {
    label: t.contact.github_label,
    value: "github.com/graig",
    href: "https://github.com/gregorisbachtsevanos",
    icon: <GitHubIcon />,
  },
  {
    label: t.contact.location_label,
    value: t.contact.location_value,
    href: null,
    icon: <PinIcon />,
  },
];
