import React from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/utils";
import { ServicesData } from "./services.data";
import Link from "next/link";

interface Props extends React.ComponentProps<"div"> {
  service: (typeof ServicesData.items)[number];
}

export const ServiceCard = ({ service, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        "border w-full rounded-3xl grid grid-cols-2 p-8 border-b-4 border-main-black/70 border-b-main-black",
        className
      )}
    >
      <div className="flex flex-col justify-between">
        <h6 className={cn("text-xl font-semibold text-nowrap")}>
          <span className={cn("p-1 rounded-xl")}>{service.heading1}</span>
          <br />
          <span className={cn("p-1 rounded-xl")}>{service.heading2}</span>
        </h6>

        <Link
          href={service.extantLink || "/"}
          className="flex items-center gap-x-1 mt-4"
        >
          <span
            className={cn(
              `flex items-center justify-center bg-main-black p-2 rounded-full`
            )}
          >
            <ArrowUpRight className={cn("text-white")} />
          </span>
          <span className={cn("text-main-black underline")}>Learn More</span>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <service.Element className="w-24 md:w-28 h-24 md:h-28" />
      </div>
    </div>
  );
};
