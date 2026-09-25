import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/packages", "/services", "/gallery", "/contact"];

  return routes.map((route) => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    };
    return entry;
  });
}
