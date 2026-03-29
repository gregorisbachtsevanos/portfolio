"use client";

import useScrollSpy from "@/hooks/useScrollSpy";
import { memo, useRef } from "react";
import { useSlidingIndicator } from "../hooks/useActiveItemIndicator";

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

	const activeSection = useScrollSpy({
		sectionIds: navItems.map((item) => item.id),
	});

	const indicatorStyle = useSlidingIndicator({
		activeKey: activeSection,
		itemRefs,
		containerRef,
		disabled: mobile,
	});

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
								? "text-sky-500 font-semibold"
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
				className="absolute bottom-0 h-[2px] bg-sky-500  transition-all duration-300 ease-out"
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
						activeSection === item.id ? "text-sky-500" : ""
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
