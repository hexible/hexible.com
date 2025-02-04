import { Metadata } from "next";
import { ClientList } from "./_components/clients/client-list";
import { ContactUs } from "./_components/contact-us/page";
import { Hero } from "./_components/hero/hero";
import { Service } from "./_components/services/page";
import { Team } from "./_components/team/page";
import { Testimonials } from "./_components/testimonials/page";
import { WorkingProcess } from "./_components/working-process/page";
import { AppData } from "@/data/app.data";
import { TechnicalExpertise } from "./_components/technical-expertise/page";
import { WhyChooseUs } from "./_components/why-choose-us/page";
import { OurValues } from "./_components/our-values/page";

export const metadata: Metadata = {
  title: `${AppData.name}: ${AppData.taglinePart1}, ${AppData.taglinePart2}`,
  description: AppData.longDescription,
};

export default function Home() {
  return (
    <div className="*:container space-y-20">
      <Hero />
      <ClientList />
      <Service />
      <WhyChooseUs />
      <TechnicalExpertise />
      {/* <CaseStudies /> */}
      <WorkingProcess />
      <OurValues />
      <Team />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
