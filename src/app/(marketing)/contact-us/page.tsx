import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { ContactUsData } from "./contact-us.data";
import { ContactUs } from "../_components/contact-us/page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: ContactUsData.title,
  description: ContactUsData.description,
};

export default function ContactUsPage() {
  const { title, description } = ContactUsData;

  return (
    <div className="space-y-20 container">
      <PageHeader title={title} description={description} />
      <ContactUs showHeader={false} />
    </div>
  );
}
