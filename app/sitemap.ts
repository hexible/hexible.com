import { HeaderNavigationData } from "@/data";
import { url } from "@/data/app.data";
import { blogSource } from "@/lib/source";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await blogSource.getPages();
  const services = HeaderNavigationData.find(
    (item) => item.label === "Services"
  );

  return [
    {
      url: url("/"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: url("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/contact"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...(services?.children?.map((item) => ({
      url: url(item.link),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })) ?? []),
    {
      url: url("/blogs"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...blogs.map((item) => ({
      url: url(item.url),
      lastModified: item.data.date,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
    {
      url: url("/pricing"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
