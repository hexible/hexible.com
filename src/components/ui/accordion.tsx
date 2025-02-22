import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import Plus from "@/src/assets/icons/plus-bold.svg";
import Minus from "@/src/assets/icons/minus-bold.svg";

import { cn } from "@/src/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-4 font-medium transition-all bg-main-gray data-[state=open]:bg-main-green data-[state=open]:border-b-0 px-8 text-main-black rounded-t-2xl rounded-b-2xl data-[state=open]:rounded-b-none border border-main-black border-b-4 border-b-main-black",
        className
      )}
      {...props}
    >
      {children}
      <span className="bg-main-gray p-2 border border-main-black rounded-full">
        {/* Plus icon visible when the accordion is closed */}
        <Plus
          id="plus"
          className="group-data-[state=open]:hidden w-4 h-4 font-bold transition-transform duration-200 shrink-0"
        />
        {/* Minus icon visible when the accordion is open */}
        <Minus
          id="minus"
          className="group-data-[state=open]:block hidden w-4 h-4 font-bold transition-transform duration-200 shrink-0"
        />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=open]:bg-main-green px-8 border border-main-black border-t-0 rounded-b-2xl overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
