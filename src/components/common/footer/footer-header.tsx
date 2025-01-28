import React from "react";

import Logo from "@/assets/common/logo.svg";
import { SocialIcons } from "../social-icons";

export const FooterHeader = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className="flex lg:flex-row flex-col justify-between items-center gap-y-2 py-4"
      {...props}
    >
      <div className="flex items-center gap-x-2">
        <Logo className="w-6 h-6" />
        <span className="font-medium text-2xl">Hexible</span>
      </div>
      <div className="flex items-center gap-x-2 mt-4">
        <SocialIcons />
      </div>
    </div>
  );
};
