import PageHeader from "@/components/common/page-header";
import { PrivacyPolicyData } from "./privacy-policy.data";

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
            <h3 className="font-bold text-xl">{section.title}</h3>
            <p className="my-4">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
