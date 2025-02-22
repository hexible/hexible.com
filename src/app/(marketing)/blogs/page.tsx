import PageHeader from "@/src/components/common/page-header";
import { Metadata } from "next";
import { BlogsData } from "./blogs.data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: BlogsData.title,
  description: BlogsData.description,
};

export default function Blogs() {
  return (
    <div className="*:container">
      <PageHeader title={BlogsData.title} description={BlogsData.description} />
    </div>
  );
}
