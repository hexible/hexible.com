import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { ServiceCard } from "../_components/service-card";
import { WebMobileDevelopmentData } from "./web-mobile-development.data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: WebMobileDevelopmentData.title,
  description: WebMobileDevelopmentData.description,
};

export default function WebMobileDevelopments() {
  return (
    <div className="*:container space-y-20">
      <PageHeader
        title={WebMobileDevelopmentData.title}
        description={WebMobileDevelopmentData.description}
      />
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {WebMobileDevelopmentData.sections.map((data) => (
          <ServiceCard key={data.heading} data={data} />
        ))}
      </div>
    </div>
  );
}
