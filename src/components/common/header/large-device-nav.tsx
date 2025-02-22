"use client";

import React, { useState, useEffect, useRef } from "react";
import { buttonVariants } from "@/src/components/ui";
import { HeaderNavigationData } from "@/src/data";
import { cn } from "@/src/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppData } from "@/src/data/app.data";

export const LargeDeviceNav = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="large-device-nav"
      className={cn("items-center gap-x-12 lg:gap-x-12", className)}
      {...props}
      ref={navRef}
    >
      <div className="lg:flex-1 lg:space-x-4 xl:space-x-6">
        {HeaderNavigationData?.map(({ label, link, children }) => {
          const isActive = pathname === link;
          const isOpen = openDropdown === label;

          return (
            <div key={label} className="inline-block relative">
              <Link
                href={link}
                className={cn(
                  "rounded-md text-lg lg:text-base hover:text-main-green",
                  isActive && "text-main-green"
                )}
                onClick={(e) => {
                  if (children) {
                    e.preventDefault();
                    setOpenDropdown(isOpen ? null : label);
                  }
                }}
              >
                {label}
              </Link>
              {children && isOpen && (
                <div
                  className="left-0 z-50 absolute bg-white shadow-lg mt-2 rounded-md w-52"
                  onMouseEnter={() => setOpenDropdown(label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.link}
                      className={cn(
                        "block px-4 py-2 text-sm hover:bg-main-gray hover:text-main-green transition-colors duration-200",
                        {
                          "bg-main-gray text-main-green":
                            pathname === child.link,
                        }
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Link
        href={AppData.requestQuote.link}
        className={cn(buttonVariants(), "px-7")}
      >
        {AppData.requestQuote.title}
      </Link>
    </div>
  );
};
