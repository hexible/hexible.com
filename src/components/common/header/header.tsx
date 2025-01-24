import React from "react";

import Logo from "@/assets/common/logo.svg";
import { cn } from "@/utils";
import { LargeDeviceNav } from "./large-device-nav";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";

export const Header = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => {
  return (
    <nav
      {...props}
      className={cn(
        "flex items-center justify-between py-8 container",
        className
      )}
    >
      <Link href="/">
        <div className="flex items-center gap-x-2 w-32 md:w-40">
          <Logo className="w-6 h-6" />
          <span className="font-medium text-2xl">Hexible</span>
        </div>
      </Link>
      <LargeDeviceNav className="lg:flex hidden" />
      <MobileNav className="lg:hidden" />
    </nav>
  );
};
