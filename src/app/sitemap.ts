import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/el", siteConfig.url).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
};

export default sitemap;
