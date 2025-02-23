// import { ClientList } from "./_components/clients/client-list";
import { Contact } from "./_components/contact/page";
import { Hero } from "./_components/hero/hero";
import { Service } from "./_components/services/page";
import { Team } from "./_components/team/page";
import { Testimonials } from "./_components/testimonials/page";
import { WorkingProcess } from "./_components/working-process/page";
import { TechnicalExpertise } from "./_components/technical-expertise/page";
import { WhyChooseUs } from "./_components/why-choose-us/page";
import { OurValues } from "./_components/our-values/page";

export default function Home() {
  return (
    <div className="space-y-16 *:container">
      <Hero />
      {/* <ClientList /> */}
      <Service />
      <WhyChooseUs />
      <TechnicalExpertise />
      {/* <CaseStudies /> */}
      <WorkingProcess />
      <OurValues />
      <Team />
      <Testimonials />
      <Contact showHeader={true} />
    </div>
  );
}
