import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gregoris Bachtsevanos - Full-Stack Software Engineer",
	description:
		"Freelance Full-Stack Software Engineer specializing in building scalable web applications, REST APIs, and modern React frontends. Based in Greece.",
	openGraph: {
		title: "Gregoris Bachtsevanos - Full-Stack Software Engineer",
		description:
			"Building scalable web applications and APIs for startups and businesses",
		images: [
			{
				url: "https://bolt.new/static/og_default.png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Gregoris Bachtsevanos - Full-Stack Software Engineer",
		description:
			"Building scalable web applications and APIs for startups and businesses",
		images: [
			{
				url: "https://bolt.new/static/og_default.png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<I18nProvider>
					<ThemeProvider>
						{children}
						<Toaster />
					</ThemeProvider>
				</I18nProvider>
			</body>
		</html>
	);
}
