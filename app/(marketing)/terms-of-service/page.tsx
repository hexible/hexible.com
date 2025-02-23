import PageHeader from "@/components/common/page-header";
import { ServiceTermsData } from "./service-terms.data";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: ServiceTermsData.title,
  description: ServiceTermsData.description,
};

export default function ServiceTerms() {
  return (
    <div className="*:container">
      <PageHeader
        title={ServiceTermsData.title}
        description={ServiceTermsData.description}
      />
      <div>
        {ServiceTermsData.sections.map((section, index) => (
          <div key={index} className="my-8 lg:my-12">
            <h3 className="font-bold text-xl">
              {index + 1}. {section.title}
            </h3>
            <p className="my-4">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
