"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button, Input, Label, Textarea } from "@/components/ui";
import { contactFormSchema, ContactSchemaType } from "./contact-schema";

export const ContactForm = ({ ...props }: React.ComponentProps<"form">) => {
  const { register, handleSubmit } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactSchemaType) => {
    console.log("Form Submitted:", data);
    // Add your form submission logic here
  };

  return (
    <form
      {...props}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 mt-10 w-full lg:w-1/2"
    >
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          className="border-main-black border rounded-xl"
          {...register("name")}
          placeholder="Name"
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          className="border-main-black border rounded-xl"
          {...register("email")}
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Message"
          className="border-main-black px-4 py-2 border rounded-xl min-h-32"
          {...register("message")}
        />
      </div>

      <Button type="submit" className="py-6 rounded-xl w-full">
        Send Message
      </Button>
    </form>
  );
};
