import React from "react";
import { CONTACT } from "src/app/data/contact-data";

export const Intro = () => {
	return (
		<div className="intro-container">
			<p>{CONTACT.INTRO}</p>
		</div>
	);
};
