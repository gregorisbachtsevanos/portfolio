"use client";

import useScrollSpy from "@/hooks/useScrollSpy";
import { memo, useEffect, useRef, useState } from "react";

export interface INavItem {
	id: string;
	label: string;
}

interface INavLinksProps {
	navItems: INavItem[];
	scrollToSection: (id: string) => void;
	mobile?: boolean;
}

const NavLinks = ({
	navItems,
	scrollToSection,
	mobile = false,
}: INavLinksProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

	const [indicatorStyle, setIndicatorStyle] = useState({
		width: 0,
		left: 0,
	});

	const activeSection = useScrollSpy({
		sectionIds: navItems.map((item) => item.id),
	});

	// Update indicator position
	useEffect(() => {
		if (mobile) return;

		const activeEl = itemRefs.current[activeSection];
		const container = containerRef.current;

		if (!activeEl || !container) return;

		const { offsetLeft, offsetWidth } = activeEl;

		setIndicatorStyle({
			left: offsetLeft,
			width: offsetWidth,
		});
	}, [activeSection, mobile]);

	// Handle resize
	useEffect(() => {
		if (mobile) return;

		const handleResize = () => {
			const activeEl = itemRefs.current[activeSection];
			if (!activeEl) return;

			setIndicatorStyle({
				left: activeEl.offsetLeft,
				width: activeEl.offsetWidth,
			});
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [activeSection, mobile]);

	const baseClass = mobile
		? "block w-full rounded-md px-3 py-3 text-left text-base text-muted-foreground transition-colors hover:bg-secondary/5 hover:text-foreground"
		: "relative text-muted-foreground hover:text-foreground transition-colors px-1";

	if (mobile) {
		return (
			<>
				{navItems.map((item) => (
					<button
						key={item.id}
						type="button"
						onClick={() => scrollToSection(item.id)}
						className={`${baseClass} ${
							activeSection === item.id
								? "text-blue-500 font-semibold"
								: ""
						}`}
					>
						{item.label}
					</button>
				))}
			</>
		);
	}

	return (
		<div
			ref={containerRef}
			className="relative flex items-center space-x-6"
		>
			{/* Sliding indicator */}
			<span
				className="absolute bottom-0 h-[2px] bg-blue-500 transition-all duration-300 ease-out"
				style={{
					width: indicatorStyle.width,
					transform: `translateX(${indicatorStyle.left}px)`,
				}}
			/>

			{navItems.map((item) => (
				<button
					key={item.id}
					ref={(el) => {
						itemRefs.current[item.id] = el;
					}}
					type="button"
					onClick={() => scrollToSection(item.id)}
					className={`${baseClass} ${
						activeSection === item.id ? "text-blue-500" : ""
					}`}
				>
					{item.label}
				</button>
			))}
		</div>
	);
};

NavLinks.displayName = "NavLinks";

export default memo(NavLinks);
