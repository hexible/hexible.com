import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { ServicesData } from "./services.data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: ServicesData.title,
  description: ServicesData.description,
};

export default function Services() {
  return (
    <div className="*:container">
      <PageHeader
        title={ServicesData.title}
        description={ServicesData.description}
      />
    </div>
  );
}
