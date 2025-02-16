import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export type ContactSchemaType = z.infer<typeof contactFormSchema>;
