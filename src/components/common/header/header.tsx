import React from "react";

import Logo from "@/assets/common/logo.svg";
import { cn } from "@/utils";
import { LargeDeviceNav } from "./large-device-nav";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";
import { AppData } from "@/data/app.data";

export const Header = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => {
  return (
    <nav
      {...props}
      className={cn(
        "flex items-center justify-between py-8 container sticky top-0 bg-opacity-98 bg-white z-50",
        className
      )}
    >
      <Link href="/">
        <div className="flex items-center gap-x-2 w-32 md:w-40">
          <Logo className="w-6 h-6" />
          <span className="font-medium text-2xl">{AppData.name}</span>
        </div>
      </Link>
      <LargeDeviceNav className="hidden lg:flex" />
      <MobileNav className="lg:hidden" />
    </nav>
  );
};
