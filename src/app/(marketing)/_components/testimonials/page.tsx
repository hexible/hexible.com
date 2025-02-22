"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { SectionsHeader } from "@/src/components/common";
import { ReviewCards } from "./review-cards";
import { TestimonialsData } from "./testimonials.data";

export const Testimonials = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading={TestimonialsData.heading}
        description1={TestimonialsData.description1}
        description2={TestimonialsData.description2}
      />

      <div className="bg-main-black my-10 md:px-12 py-10 rounded-3xl">
        <Swiper
          className="mySwiper"
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={40}
          speed={1200}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {TestimonialsData.items.map((data) => (
            <SwiperSlide key={data.name + data.position}>
              <ReviewCards data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
