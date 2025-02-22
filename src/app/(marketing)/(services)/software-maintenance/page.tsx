import PageHeader from "@/src/components/common/page-header";
import { Metadata } from "next";
import { ServiceCard } from "../_components/service-card";
import { SoftwareMaintenanceData } from "./software-maintenance.data";
import { ProposalBanner } from "../../_components/services/proposal-banner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: SoftwareMaintenanceData.title,
  description: SoftwareMaintenanceData.description,
};

export default function SoftwareMaintenance() {
  return (
    <div className="space-y-16 *:container">
      <PageHeader
        title={SoftwareMaintenanceData.title}
        description={SoftwareMaintenanceData.description}
      />
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {SoftwareMaintenanceData.sections.map((data) => (
          <ServiceCard key={data.heading} data={data} />
        ))}
      </div>
      <div>
        <ProposalBanner />
      </div>
    </div>
  );
}
