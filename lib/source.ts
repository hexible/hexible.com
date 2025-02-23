import { blogCollection, blogMeta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

export const blogSource = loader({
  baseUrl: "/blogs",
  source: createMDXSource(blogCollection, blogMeta),
});
