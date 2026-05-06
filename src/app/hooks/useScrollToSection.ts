"use client";

import { getOffset } from "@/lib/utils";
import { useCallback, useEffect } from "react";

interface IUseScrollToSectionOptions {
	offset?: number;
	onAfterScroll?: () => void;
}

const useScrollToSection = ({
	offset,
	onAfterScroll,
}: IUseScrollToSectionOptions = {}) => {
	const scrollToSection = useCallback(
		(id: string) => {
			if (typeof window === "undefined") return;

			const element = document.getElementById(id);
			if (!element) return;

			const finalOffset = getOffset(offset);

			const elementTop =
				element.getBoundingClientRect().top + window.scrollY;

			const targetPosition = elementTop - finalOffset;

			// Respect reduced motion
			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;

			window.scrollTo({
				top: targetPosition,
				behavior: prefersReducedMotion ? "auto" : "smooth",
			});

			// If no smooth scroll → fire instantly
			if (prefersReducedMotion) {
				onAfterScroll?.();
				return;
			}

			// Scroll-end detection (robust)
			const start = performance.now();
			const MAX_DURATION = 2000;

			let isCancelled = false;

			const cancel = () => {
				isCancelled = true;
				window.removeEventListener("wheel", cancel);
				window.removeEventListener("touchstart", cancel);
			};

			window.addEventListener("wheel", cancel, { passive: true });
			window.addEventListener("touchstart", cancel, { passive: true });

			const isAtPosition = () =>
				Math.abs(window.scrollY - targetPosition) < 2;

			const checkScrollEnd = () => {
				const elapsed = performance.now() - start;

				if (isCancelled) return;

				if (isAtPosition() || elapsed > MAX_DURATION) {
					window.removeEventListener("wheel", cancel);
					window.removeEventListener("touchstart", cancel);
					onAfterScroll?.();
					return;
				}

				requestAnimationFrame(checkScrollEnd);
			};

			requestAnimationFrame(checkScrollEnd);
		},
		[offset, onAfterScroll],
	);

	// Handle direct visits like /#section
	useEffect(() => {
		if (typeof window === "undefined") return;

		const hash = window.location.hash.replace("#", "");
		if (!hash) return;

		const timeout = setTimeout(() => {
			scrollToSection(hash);
		}, 100);

		return () => clearTimeout(timeout);
	}, [scrollToSection]);

	return scrollToSection;
};

export default useScrollToSection;
