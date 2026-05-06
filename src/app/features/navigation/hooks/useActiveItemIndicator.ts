"use client";

import { useEffect, useState } from "react";

interface Params {
	activeKey: string;
	itemRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
	containerRef: React.RefObject<HTMLElement>;
	disabled?: boolean;
}

export const useSlidingIndicator = ({
	activeKey,
	itemRefs,
	containerRef,
	disabled = false,
}: Params) => {
	const [style, setStyle] = useState({
		width: 0,
		left: 0,
	});

	useEffect(() => {
		if (disabled) return;

		const update = () => {
			const activeEl = itemRefs.current[activeKey];
			const container = containerRef.current;

			if (!activeEl || !container) return;

			setStyle({
				left: activeEl.offsetLeft,
				width: activeEl.offsetWidth,
			});
		};

		update(); // run on mount/change

		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, [activeKey, disabled, itemRefs, containerRef]);

	return style;
};
