import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { ServiceCard } from "../_components/service-card";
import { BIDataAnalyticsData } from "./bi-data-analytics.data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: BIDataAnalyticsData.title,
  description: BIDataAnalyticsData.description,
};

export default function BIAndDataAnalytics() {
  return (
    <div className="*:container space-y-20">
      <PageHeader
        title={BIDataAnalyticsData.title}
        description={BIDataAnalyticsData.description}
      />
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {BIDataAnalyticsData.sections.map((data) => (
          <ServiceCard key={data.heading} data={data} />
        ))}
      </div>
    </div>
  );
}
