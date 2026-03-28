"use client";

import { trustReasons } from "@/config/site-content";
import useI18n from "@/hooks/useI18n";
import { memo } from "react";
import TrustReason from "./components/TrustReason";

const Trust = () => {
	const { messages } = useI18n();
	const { trust } = messages;

	return (
		<section className="bg-gradient-to-b from-background to-background py-20 sm:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center sm:mb-16">
					<h2 className="mb-4 text-2xl font-bold sm:text-4xl">
						{trust.title}
					</h2>
					<p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
						{trust.subtitle}
					</p>
				</div>
				<div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:gap-8">
					{trustReasons.map((reasonId) => {
						const reason = trust.reasons[reasonId];
						return <TrustReason key={reasonId} reason={reason} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default memo(Trust);
