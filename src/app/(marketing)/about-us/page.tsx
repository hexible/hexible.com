import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { AboutUsData } from "./about-us.data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: AboutUsData.title,
  description: AboutUsData.description,
};

export default function AboutUs() {
  return (
    <div className="*:container">
      <PageHeader
        title={AboutUsData.title}
        description={AboutUsData.description}
      />
    </div>
  );
}
