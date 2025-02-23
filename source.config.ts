import { remarkGfm } from "fumadocs-core/mdx-plugins";
import { defineCollections, defineConfig } from "fumadocs-mdx/config";
import rehypeExternalLinks from "rehype-external-links";
import { zBlog } from "./src/app/(marketing)/blogs/blog.schema";

export const blogCollection = defineCollections({
  type: "doc",
  dir: "./content/blogs",
  schema: zBlog,
});

export const blogMeta = defineCollections({
  type: "meta",
  dir: "./content/blogs",
  schema: zBlog,
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeExternalLinks],
  },
});
