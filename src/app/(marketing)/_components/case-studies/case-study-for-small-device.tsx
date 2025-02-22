"use client";

import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@/src/utils";
import { CaseStudyData } from "./case-study.data";
import Link from "next/link";

export const CaseStudyForSmallDevice = ({
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div {...props} className="md:hidden">
      <Swiper slidesPerView={1.2} spaceBetween={10}>
        {CaseStudyData.items.map((item) => (
          <SwiperSlide
            key={item.label}
            className="bg-main-dark p-4 rounded-3xl min-h-56 text-main-gray"
          >
            <div className={cn("flex flex-col justify-between")}>
              <p className="text-sm"> {item.label} </p>
              <Link
                href={"/"}
                className="flex items-center gap-1 text-main-green"
              >
                <span className="font-semibold text-sm">Learn More</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
