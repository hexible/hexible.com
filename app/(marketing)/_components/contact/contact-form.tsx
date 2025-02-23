"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactSchemaType } from "./contact-schema";

import { Button, Input, Label, Textarea } from "@/components/ui";
import { sendContactEmail } from "@/app/actions/contact";

export const ContactForm = ({ ...props }: React.ComponentProps<"form">) => {
  const { register, handleSubmit, reset } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  const onSubmit = (data: ContactSchemaType) => {
    startTransition(async () => {
      const response = await sendContactEmail(data);
      if (response.success) {
        setMessage("Message sent successfully!");
        reset();
      } else {
        setMessage(`Error: ${response.error}`);
      }
    });
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
          className="border border-main-black rounded-xl"
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
          className="border border-main-black rounded-xl"
          {...register("email")}
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Message"
          className="px-4 py-2 border border-main-black rounded-xl min-h-32"
          {...register("message")}
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="py-6 rounded-xl w-full"
      >
        {isPending ? "Sending..." : "Send Message"}
      </Button>

      {message && <p className="mt-2 text-gray-600 text-sm">{message}</p>}
    </form>
  );
};
