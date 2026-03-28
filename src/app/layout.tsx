import { Toaster } from "@/components/Toaster";
import { siteConfig } from "@/config/site";
import { defaultLocale, messagesByLocale } from "@/lang";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
	const { metadata } = messagesByLocale[defaultLocale];

	return {
		metadataBase: new URL(siteConfig.url),
		title: metadata.title,
		description: metadata.description,
		openGraph: {
			title: metadata.openGraphTitle,
			description: metadata.openGraphDescription,
			url: siteConfig.url,
			siteName: siteConfig.name,
			images: [
				{
					url: siteConfig.ogImageUrl,
					width: 1200,
					height: 630,
					alt: metadata.openGraphTitle,
				},
			],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: metadata.openGraphTitle,
			description: metadata.openGraphDescription,
			images: [siteConfig.ogImageUrl],
		},
	};
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	const locale = defaultLocale;

	return (
		<html lang={locale === "gr" ? "el" : locale} suppressHydrationWarning>
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
};

export default RootLayout;
