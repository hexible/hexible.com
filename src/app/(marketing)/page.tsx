import { Metadata } from "next";
import { CaseStudies } from "./_components/case-studies/page";
import { ClientList } from "./_components/clients/client-list";
import { ContactUs } from "./_components/contact-us/page";
import { Hero } from "./_components/hero";
import { Service } from "./_components/services/page";
import { Team } from "./_components/team/page";
import { Testimonials } from "./_components/testimonials/page";
import { WorkingProcess } from "./_components/working-process/page";
import { AppData } from "@/data/app.data";

export const metadata: Metadata = {
  title: `${AppData.name}: ${AppData.taglinePart1} ${AppData.taglinePart2}`,
  description: AppData.longDescription,
};

export default function Home() {
  return (
    <div className="*:container">
      <Hero />
      <ClientList />
      <Service />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
