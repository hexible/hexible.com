import { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: process.env.SITE_URL || "https://hexible.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*", "/admin/*"],
  transform: async (config, path) => ({
    loc: path,
    changefreq: "daily",
    priority: path === "/" ? 1.0 : 0.7,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
};

export default config;
