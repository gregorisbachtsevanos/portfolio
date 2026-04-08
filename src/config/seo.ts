import { messagesByLocale, type TLocale } from "@/lang";
import type { Metadata } from "next";
import { siteConfig } from "./site";

const localePathnames: Record<TLocale, string> = {
  en: "/",
  gr: "/el",
};

const htmlLangByLocale: Record<TLocale, string> = {
  en: "en",
  gr: "el",
};

const openGraphLocaleByLocale: Record<TLocale, string> = {
  en: "en_US",
  gr: "el_GR",
};

const getAbsoluteUrl = (pathname: string) =>
  new URL(pathname, siteConfig.url).toString();

export const getLocalePathname = (locale: TLocale) => localePathnames[locale];

export const getHtmlLang = (locale: TLocale) => htmlLangByLocale[locale];

export const buildPageMetadata = (locale: TLocale): Metadata => {
  const { metadata } = messagesByLocale[locale];
  const pathname = getLocalePathname(locale);
  const canonicalUrl = getAbsoluteUrl(pathname);
  const alternateLocale = locale === "en" ? "gr" : "en";

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: pathname,
      languages: {
        en: localePathnames.en,
        "el-GR": localePathnames.gr,
        "x-default": localePathnames.en,
      },
    },
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: metadata.openGraphTitle,
      description: metadata.openGraphDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: openGraphLocaleByLocale[locale],
      alternateLocale: [openGraphLocaleByLocale[alternateLocale]],
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
    other: {
      "content-language": locale === "gr" ? "el-GR" : "en",
      "geo.region": "GR",
      "geo.placename": siteConfig.location,
    },
  };
};

export const buildStructuredData = (locale: TLocale) => {
  const { metadata } = messagesByLocale[locale];
  const pageUrl = getAbsoluteUrl(getLocalePathname(locale));
  const imageUrl = getAbsoluteUrl(siteConfig.ogImageUrl);
  const offerCatalogName =
    locale === "gr" ? "Υπηρεσίες Ανάπτυξης" : "Development Services";
  const services =
    locale === "gr"
      ? [
          "Κατασκευή εταιρικών ιστοσελίδων",
          "Ανάπτυξη e-shop",
          "Custom web εφαρμογές",
          "REST APIs και backend συστήματα",
          "MVP για startups και νέες ιδέες",
        ]
      : [
          "Business website development",
          "E-commerce store development",
          "Custom web application development",
          "REST API and backend systems",
          "Startup MVP development",
        ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: metadata.description,
        inLanguage: ["en", "el-GR"],
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        jobTitle:
          locale === "gr"
            ? "Freelance Full-Stack Developer"
            : "Freelance Full-Stack Developer",
        description: metadata.description,
        knowsLanguage: ["English", "Greek"],
        address: {
          "@type": "PostalAddress",
          addressCountry: "GR",
          addressLocality: siteConfig.location,
        },
        sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}#professional-service`,
        name:
          locale === "gr"
            ? `${siteConfig.name} | Freelance Web Development`
            : `${siteConfig.name} | Freelance Web Development`,
        url: pageUrl,
        image: imageUrl,
        description: metadata.description,
        founder: { "@id": `${siteConfig.url}#person` },
        areaServed: [
          { "@type": "Country", name: "Greece" },
          locale === "gr" ? "Απομακρυσμένη συνεργασία" : "Remote",
        ],
        availableLanguage: ["en", "el"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: offerCatalogName,
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service,
            },
          })),
        },
      },
    ],
  };
};
