import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const getOffset = (offset?: number) => {
	if (typeof window === "undefined") return 0;

	// If offset is provided → use it
	if (typeof offset === "number") return offset;

	// Otherwise detect navbar height dynamically
	const navbar = document.querySelector("nav");
	return navbar?.clientHeight ?? 0;
};
