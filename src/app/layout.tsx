import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/lib/theme";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Toaster from "./features/toaster/";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: siteConfig.ogLogoUrl,
    shortcut: siteConfig.ogLogoUrl,
    apple: siteConfig.ogLogoUrl,
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
