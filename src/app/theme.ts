import styled, { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
	palette: {
		black: {
			1: "#131214",
			2: "#121413de",
			3: "#1d1a1a",
			4: "#0ab7bd18",
		},
		highlight: {
			1: "#06b6d4",
			2: "#0ab7bd",
			3: "#14b8a6",
		},
		white: "#eaeaea",
		success: "#36d666",
		error: "#d63636",
	},
	sizes: {
		smallMobile: "max-width:420px",
		mobile: "min-width:421px",
		tablet: "min-width:501px",
		laptop: "min-width: 900px",
		desktop: "min-width:1300px",
	},
	maxWidth: "500px",
	pagePadding: "16px",
};

export const Title2Xl = styled.h1`
	font-weight: 700;
	font-size: 44px;
	line-height: 48px;
	margin: 0;
`;

export const TitleXl = styled.h2`
	font-weight: 700;
	font-size: 30px;
	line-height: 32px;
	margin: 0;
`;

export const TitleLg = styled.h3`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	margin: 0;
`;

export const TitleMd = styled.h4`
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	margin: 0;
`;

export const Title = styled.h4`
	font-weight: 700;
	font-size: 16px;
	line-height: 18px;
	margin: 0;
`;

export const TitleSecondary = styled.h5`
	font-weight: 400;
	font-size: 16px;
	line-height: 18px;
	margin: 0;
`;

export const TitleBar = styled.div`
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BodyTitle = styled.h4`
	font-weight: 700;
	font-size: 14px;
	line-height: 14px;
	letter-spacing: -0.5px;
	margin: 0;
`;

interface TextProps {
	gray?: boolean;
}

export const Text = styled.span<TextProps>`
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
`;

export const Caption = styled.span`
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
`;

export const LinkStyle = styled.span`
	font-size: 12px;
	line-height: 16px;
	font-weight: 400;
	text-decoration: underline;
`;

export const Emojis = styled.div`
	font-size: 43px;
	font-weight: 400;
	line-height: 43px;
	letter-spacing: 0.5px;
	text-align: left;
`;
