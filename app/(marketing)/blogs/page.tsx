import PageHeader from "@/components/common/page-header";
import { blogSource } from "@/lib/source";
import { BlogsData } from "./blogs.data";
import BlogCard from "./_components/blog-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: BlogsData.title,
  description: BlogsData.description,
};

export default async function Blogs() {
  const blogs = (await blogSource.getPages()).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
  return (
    <div className="*:container">
      <PageHeader title={BlogsData.title} description={BlogsData.description} />
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.url} item={blog} />
        ))}
      </div>
    </div>
  );
}
