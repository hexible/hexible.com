import { AppData } from "@/data/app.data";
import type { MetadataRoute } from "next";

// Ensure that AppData.publicUrl does not end with a trailing slash.
const canonicalUrl = AppData.publicUrl.endsWith("/")
  ? AppData.publicUrl.slice(0, -1)
  : AppData.publicUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${canonicalUrl}/sitemap.xml`,
  };
}
