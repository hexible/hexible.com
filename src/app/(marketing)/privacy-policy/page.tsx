import PageHeader from "@/src/components/common/page-header";
import { PrivacyPolicyData } from "./privacy-policy.data";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: PrivacyPolicyData.title,
  description: PrivacyPolicyData.description,
};

export default function PrivacyPolicy() {
  return (
    <div className="*:container">
      <PageHeader
        title={PrivacyPolicyData.title}
        description={PrivacyPolicyData.description}
      />
      <div>
        {PrivacyPolicyData.sections.map((section, index) => (
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
