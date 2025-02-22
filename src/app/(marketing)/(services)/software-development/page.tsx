import PageHeader from "@/src/components/common/page-header";
import { Metadata } from "next";
import { ServiceCard } from "../_components/service-card";
import { SoftwareDevelopmentData } from "./software-development.data";
import { ProposalBanner } from "../../_components/services/proposal-banner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: SoftwareDevelopmentData.title,
  description: SoftwareDevelopmentData.description,
};

export default function SoftwareDevelopments() {
  return (
    <div className="space-y-16 *:container">
      <PageHeader
        title={SoftwareDevelopmentData.title}
        description={SoftwareDevelopmentData.description}
      />
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {SoftwareDevelopmentData.sections.map((data) => (
          <ServiceCard key={data.heading} data={data} />
        ))}
      </div>
      <div>
        <ProposalBanner />
      </div>
    </div>
  );
}
