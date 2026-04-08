import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

const sitemapUrl = new URL("/sitemap.xml", siteConfig.url).toString();

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  host: siteConfig.url,
  sitemap: sitemapUrl,
});

export default robots;
