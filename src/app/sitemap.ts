import { HeaderNavigationData, NavigationItem } from "@/src/data";
import { AppData } from "@/src/data/app.data";
import type { MetadataRoute } from "next";

// Normalize links: ensure they start with a slash and remove trailing slashes (except for the root).
const normalizeLink = (link: string) => {
  let normalized = link.startsWith("/") ? link : `/${link}`;
  // Remove trailing slash if the link is longer than one character.
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
};

// Append the normalized path to the base URL.
// For the homepage ("/"), return AppData.publicUrl (assumed to be without a trailing slash).
const addPathToBaseURL = (path: string) => {
  return path === "/" ? AppData.publicUrl : `${AppData.publicUrl}${path}`;
};

const extractLinks = (navigationData: NavigationItem[]): string[] => {
  return navigationData.flatMap((item) => {
    const normalizedLink = normalizeLink(item.link);
    if (item.children) {
      return [normalizedLink, ...extractLinks(item.children)];
    }
    return normalizedLink;
  });
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Extract links, filter out placeholders like "#", and remove duplicates.
  const publicRoutes = extractLinks(HeaderNavigationData as NavigationItem[])
    .filter((link) => link !== "#")
    .filter((link, index, self) => self.indexOf(link) === index);

  // Map each route to the sitemap route object.
  const routes = publicRoutes.map((link) => ({
    url: addPathToBaseURL(link),
    lastModified: new Date(),
  }));

  return routes;
}
