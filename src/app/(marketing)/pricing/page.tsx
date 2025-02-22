import PageHeader from "@/src/components/common/page-header";
import { Metadata } from "next";
import { PricingData } from "./pricing.data";
import { PricingCard } from "./pricing-card";
import { TechnicalExpertise } from "../_components/technical-expertise/page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: PricingData.title,
  description: PricingData.description,
};

export default function Pricing() {
  return (
    <div className="space-y-16 *:container">
      <PageHeader
        title={PricingData.title}
        description={PricingData.description}
      />
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
        {PricingData.items.map((data) => (
          <PricingCard
            title={data.title}
            pricing={data.pricing}
            priceType={data.priceType}
            description={data.description}
            features={data.features}
            key={data.title}
          />
        ))}
      </div>
      <TechnicalExpertise />
      <div className="mb-32"></div>
    </div>
  );
}
