import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { PricingData } from "./pricing.data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: PricingData.title,
  description: PricingData.description,
};

export default function Pricing() {
  return (
    <div className="*:container">
      <PageHeader
        title={PricingData.title}
        description={PricingData.description}
      />
    </div>
  );
}
