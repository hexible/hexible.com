import { AppData } from "@/data/app.data";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${AppData.publicUrl}/sitemap.xml`,
  };
}
