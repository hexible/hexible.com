import React from "react";

import { clientListData } from "./client-list.data";
import { Marquee } from "@/src/components/ui/custom/marquee";
import { ClientCard } from "./client-card";

export const ClientList = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className="relative flex flex-col justify-center items-center w-full h-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:50s]">
          {clientListData.map((company) => (
            <ClientCard key={company.name} data={company} />
          ))}
        </Marquee>
        <div className="left-0 absolute inset-y-0 bg-gradient-to-r from-background w-1/3 pointer-events-none"></div>
        <div className="right-0 absolute inset-y-0 bg-gradient-to-l from-background w-1/3 pointer-events-none"></div>
      </div>
    </div>
  );
};
