import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { AIMLIntegrationsData } from "./ai-ml-integrations.data";
import { ServiceCard } from "../_components/service-card";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: AIMLIntegrationsData.title,
  description: AIMLIntegrationsData.description,
};

export default function AIMLIntegrations() {
  return (
    <div className="*:container space-y-20">
      <PageHeader
        title={AIMLIntegrationsData.title}
        description={AIMLIntegrationsData.description}
      />
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {AIMLIntegrationsData.sections.map((data) => (
          <ServiceCard key={data.heading} data={data} />
        ))}
      </div>
    </div>
  );
}
