"use client";

import React from "react";
import { Button } from "@/components/ui";
import { navigationData } from "@/data";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LargeDeviceNav = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const pathname = usePathname();

  return (
    <div
      id="large-device-nav"
      className={cn("items-center gap-x-12 lg:gap-x-12", className)}
      {...props}
    >
      <div className="lg:flex-1 lg:space-x-4 xl:space-x-6">
        {navigationData?.map(({ label, link }) => {
          const isActive = pathname === link;

          return (
            <Link
              href={link}
              key={label}
              className={cn(
                "rounded-md text-lg lg:text-base hover:text-main-green",
                isActive && "text-main-green"
              )}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <Button className="px-7">Request a quote</Button>
    </div>
  );
};
