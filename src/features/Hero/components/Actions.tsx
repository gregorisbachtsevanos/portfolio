"use client";

import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import useScrollToSection from "@/hooks/useScrollToSection";

interface IActionsProps {
	hero: {
		ctaProject: string;
		ctaWork: string;
	};
}

const Actions = ({ hero }: IActionsProps) => {
	const scrollToSection = useScrollToSection();

	return (
		<div className="mb-10 flex flex-col justify-center gap-3 sm:mb-12 sm:flex-row sm:gap-4">
			<Button
				onClick={() => scrollToSection("contact")}
				size="lg"
				className="group w-full rounded-lg bg-blue-600 px-6 py-5 text-base text-white hover:bg-blue-700 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
			>
				{hero.ctaProject}
				<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
			</Button>

			<Button
				onClick={() => scrollToSection("projects")}
				size="lg"
				variant="outline"
				className="w-full rounded-lg px-6 py-5 text-base sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
			>
				{hero.ctaWork}
			</Button>
		</div>
	);
};

export default Actions;
