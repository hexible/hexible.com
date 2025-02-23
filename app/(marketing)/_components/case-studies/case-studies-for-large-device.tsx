import { ArrowUpRight } from "lucide-react";

import { cn } from "@/utils";
import { CaseStudyData } from "./case-study.data";
import Link from "next/link";

export const CaseStudiesForLargeDevice = ({
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className="hidden justify-center md:grid grid-cols-1 md:grid-cols-3 bg-main-dark p-8 rounded-3xl text-main-gray"
      {...props}
    >
      {CaseStudyData.items.map(({ label, url }, index) => {
        return (
          <div
            key={label}
            className={cn(
              "flex flex-col justify-between",
              { "pl-8": index === 2 },
              { "pr-4": index === 0 },
              {
                "px-8 border-l border-l-main-gray  border-r border-r-main-gray":
                  index === 1,
              }
            )}
          >
            <p className="text-sm"> {label} </p>

            <Link
              href={url}
              className="flex items-center gap-1 text-main-green"
            >
              <span className="font-semibold text-sm">Learn More</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
