import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import { AppProvider } from "@/lib/AppContext";
import "./globals.css";

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Craig — Full Stack Engineer | Web Development & APIs",
  description:
    "Full Stack Engineer with 5+ years of experience building performant applications, scalable APIs, and modern web solutions. Specialized in React, Node.js, and TypeScript.",
  keywords: [
    "Full Stack Engineer",
    "Web Developer",
    "React Developer",
    "Node.js",
    "TypeScript",
    "API Development",
    "Web Applications",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Craig" }],
  creator: "Craig",
  publisher: "Craig",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://craig-portfolio.com",
    siteName: "Craig — Full Stack Engineer",
    title: "Craig — Full Stack Engineer | Web Development & APIs",
    description:
      "Full Stack Engineer with 5+ years of experience building performant applications, scalable APIs, and modern web solutions.",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Craig - Full Stack Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craig — Full Stack Engineer",
    description:
      "Full Stack Engineer with 5+ years of experience building performant applications and scalable APIs.",
    images: ["/og-logo.png"],
    creator: "@craig",
  },
  icons: {
    icon: "/og-logo.png",
  },
  alternates: {
    canonical: "https://craig-portfolio.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
