import React from "react";

import { SectionsHeader } from "@/components/common";
import { ProposalBanner } from "./proposal-banner";
import { ServiceCard } from "./service-card";
import { serviceList } from "./service-list.data";

export const Service = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Services"
        description1="At our digital marketing agency, we offer a range of services to"
        description2="help businesses navigate the digital landscape and achieve success:"
      />

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceList.map((data) => (
          <ServiceCard service={data} key={data.heading1 + data.heading2} />
        ))}
      </div>

      <ProposalBanner />
    </div>
  );
};
