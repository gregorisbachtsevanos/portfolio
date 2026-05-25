import { ReactNode } from "react";

export interface ContactItem {
  label: string;
  value: string;
  href: string | null;
  icon: ReactNode;
}
