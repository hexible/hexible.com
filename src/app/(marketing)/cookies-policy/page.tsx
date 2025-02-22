import PageHeader from "@/src/components/common/page-header";
import { CookiesPolicyData } from "./cookies-policy.data";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: CookiesPolicyData.title,
  description: CookiesPolicyData.description,
};

export default function CookiePolicy() {
  return (
    <div className="*:container">
      <PageHeader
        title={CookiesPolicyData.title}
        description={CookiesPolicyData.description}
      />
      <div>
        {CookiesPolicyData.sections.map((section, index) => (
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
