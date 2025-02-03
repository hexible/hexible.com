import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { ServiceCard } from "../_components/service-card";
import { CloudSolutionsData } from "./cloud-solutions.data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: CloudSolutionsData.title,
  description: CloudSolutionsData.description,
};

export default function CloudSolutions() {
  return (
    <div className="*:container space-y-20">
      <PageHeader
        title={CloudSolutionsData.title}
        description={CloudSolutionsData.description}
      />
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {CloudSolutionsData.sections.map((data) => (
          <ServiceCard key={data.heading} data={data} />
        ))}
      </div>
    </div>
  );
}
