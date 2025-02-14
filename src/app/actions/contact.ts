"use server";

import { Resend } from "resend";
import { AppData } from "@/data/app.data";
import {
  contactFormSchema,
  ContactSchemaType,
} from "../(marketing)/_components/contact-us/contact-schema";

export async function sendContactEmail(formData: ContactSchemaType) {
  try {
    const validatedData = contactFormSchema.parse(formData);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const toEmails = process.env.CONTACT_FORM_TO_EMAILS?.split(",") || [];

    await resend.emails.send({
      from: process.env.CONTACT_FORM_FROM_EMAIL || AppData.contactEmail,
      to: toEmails,
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong> ${validatedData.message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
