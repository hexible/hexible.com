import React from "react";

import Logo from "@/assets/common/logo.svg";
import { navigationData } from "@/data";
import { contactLinksData } from "@/data/contact-links.data";
import Link from "next/link";

export const FooterNavigation = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className="flex lg:flex-row flex-col justify-between items-center gap-y-2 py-4"
      {...props}
    >
      <div className="flex items-center gap-x-2 w-32 md:w-40">
        <Logo className="w-6 h-6" />
        <span className="font-medium text-2xl">Hexible</span>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-x-4 gap-y-4 text-sm *:underline">
        {navigationData.map((nfn) => (
          <Link
            href={nfn.link}
            key={nfn.label}
            className="hover:text-main-green"
          >
            {nfn.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-x-2 mt-4">
        {contactLinksData.map((item) => (
          <Link href={item.url} key={item.name}>
            <item.Element className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </div>
  );
};
