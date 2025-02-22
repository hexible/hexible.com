import PageHeader from "@/src/components/common/page-header";
import { Metadata } from "next";
import { AboutData } from "./about.data";
import { AboutCard } from "./about-card";
import { Team } from "../_components/team/page";
import { OurValues } from "../_components/our-values/page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: AboutData.title,
  description: AboutData.description,
};

export default function About() {
  return (
    <div className="space-y-16 *:container">
      <PageHeader title={AboutData.title} description={AboutData.description} />
      <OurValues />
      <div className="gap-8 grid grid-cols-1 md:grid-cols-1">
        {AboutData.sections.map((data) => (
          <AboutCard key={data.heading} item={data} />
        ))}
      </div>
      <Team />
    </div>
  );
}
