"use client";

import { getOffset } from "@/lib/utils";
import { useEffect, useState } from "react";

interface IUseScrollSpyOptions {
	sectionIds: string[];
	offset?: number;
}

const useScrollSpy = ({ sectionIds, offset }: IUseScrollSpyOptions) => {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		if (typeof window === "undefined") return;

		const finalOffset = getOffset(offset);

		const observer = new IntersectionObserver(
			(entries) => {
				// Get the most visible section
				const visibleSections = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visibleSections.length > 0) {
					const id = visibleSections[0].target.id;
					setActiveSection(id);
				}
			},
			{
				root: null,
				rootMargin: `-${finalOffset}px 0px 0px 0px`,
				threshold: [0.25, 0.5, 0.75],
			},
		);

		const elements = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean) as HTMLElement[];

		elements.forEach((el) => observer.observe(el));

		return () => {
			elements.forEach((el) => observer.unobserve(el));
			observer.disconnect();
		};
	}, [sectionIds, offset]);

	return activeSection;
};

export default useScrollSpy;
