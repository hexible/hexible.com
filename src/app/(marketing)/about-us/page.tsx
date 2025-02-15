import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { AboutUsData } from "./about-us.data";
import { AboutUsCard } from "./about-us-card";
import { Team } from "../_components/team/page";
import { OurValues } from "../_components/our-values/page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: AboutUsData.title,
  description: AboutUsData.description,
};

export default function AboutUs() {
  return (
    <div className="space-y-20 *:container">
      <PageHeader
        title={AboutUsData.title}
        description={AboutUsData.description}
      />
      <OurValues />
      <div className="gap-4 grid grid-cols-1 md:grid-cols-1">
        {AboutUsData.sections.map((data) => (
          <AboutUsCard key={data.heading} item={data} />
        ))}
      </div>
      <Team />
    </div>
  );
}
