"use client";

import React, { useEffect, useState } from "react";

import Logo from "@/public/common/logo.svg";
import { cn } from "@/utils";
import { LargeDeviceNav } from "./large-device-nav";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";
import { AppData } from "@/data/app.data";

export const Header = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      {...props}
      className={cn(
        "flex items-center justify-between py-5 container sticky top-0 bg-opacity-99 bg-white z-50",
        isScrolled ? "border-b border-main-gray" : "",
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
