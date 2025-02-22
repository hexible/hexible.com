import React from "react";

import { SectionsHeader } from "@/src/components/common";
import { ProposalBanner } from "./proposal-banner";
import { ServiceCard } from "./service-card";
import { ServicesData } from "./services.data";

export const Service = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading={ServicesData.heading}
        description1={ServicesData.description1}
        description2={ServicesData.description2}
      />

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ServicesData.items.map((data) => (
          <ServiceCard service={data} key={data.heading1 + data.heading2} />
        ))}
      </div>
      <ProposalBanner />
    </div>
  );
};
