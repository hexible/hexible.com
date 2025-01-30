import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { CaseStudiesData } from "./case-studies.data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: CaseStudiesData.title,
  description: CaseStudiesData.description,
};

export default function CaseStudies() {
  return (
    <div className="*:container">
      <PageHeader
        title={CaseStudiesData.title}
        description={CaseStudiesData.description}
      />
    </div>
  );
}
