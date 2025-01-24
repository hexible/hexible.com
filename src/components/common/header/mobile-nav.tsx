import React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationData } from "@/data/navigation.data";
import { cn } from "@/utils";
import Link from "next/link";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog"; // Import DialogTitle and DialogDescription

export const MobileNav = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div id="mobile-device-nav" className={cn(className)} {...props}>
      <Sheet>
        <SheetTrigger>
          <Menu className="size-6" />
        </SheetTrigger>
        <SheetContent>
          <DialogTitle className="sr-only">Hexible</DialogTitle>
          <DialogDescription className="sr-only">
            Your Vision, Perfectly Engineered
          </DialogDescription>

          <div className="flex flex-col gap-y-1 mt-3">
            {navigationData.map(({ label, link }) => (
              <Link href={link} key={label + link} className="text-lg">
                {label}
              </Link>
            ))}
          </div>
          <Button className="mt-4 px-7">Request a quote</Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};
