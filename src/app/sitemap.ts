import { HeaderNavigationData, NavigationItem } from "@/data";
import { AppData } from "@/data/app.data";
import type { MetadataRoute } from "next";

const addPathToBaseURL = (path: string) => `${AppData.publicUrl}${path}`;

const extractLinks = (navigationData: NavigationItem[]): string[] => {
  return navigationData.flatMap((item) => {
    if (item.children) {
      return [item.link, ...extractLinks(item.children)];
    }
    return item.link;
  });
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publicRoutes = extractLinks(HeaderNavigationData as NavigationItem[])
    .filter((link) => link !== AppData.publicUrl && link !== "#")
    .filter((link, index, self) => self.indexOf(link) === index);
  const routes = publicRoutes.map((link) => ({
    url: addPathToBaseURL(link),
    lastModified: new Date(),
  }));

  return routes;
}
