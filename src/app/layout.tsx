import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";
import { siteConfig } from "@/config/site";
import { detectLocaleFromLanguage, messagesByLocale } from "@/lang";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

const inter = Inter({ subsets: ["latin"] });

const getInitialLocale = async () => {
	const headerStore = await headers();
	return detectLocaleFromLanguage(headerStore.get("accept-language"));
};

export const generateMetadata = async (): Promise<Metadata> => {
	const locale = await getInitialLocale();
	const { metadata } = messagesByLocale[locale];

	return {
		title: metadata.title,
		description: metadata.description,
		openGraph: {
			title: metadata.openGraphTitle,
			description: metadata.openGraphDescription,
			images: [
				{
					url: siteConfig.ogImageUrl,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: metadata.openGraphTitle,
			description: metadata.openGraphDescription,
			images: [
				{
					url: siteConfig.ogImageUrl,
				},
			],
		},
	};
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	const locale = await getInitialLocale();

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
