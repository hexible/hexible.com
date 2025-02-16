import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { ContactData } from "./contact.data";
import { Contact } from "../_components/contact/page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: ContactData.title,
  description: ContactData.description,
};

export default function ContactPage() {
  const { title, description } = ContactData;

  return (
    <div className="space-y-20 container">
      <PageHeader title={title} description={description} />
      <Contact showHeader={false} />
    </div>
  );
}
