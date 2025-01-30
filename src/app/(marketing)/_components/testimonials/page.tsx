"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { SectionsHeader } from "@/components/common";
import { ReviewCards } from "./review-cards";
import { TestimonialsData } from "./testimonials.data";

export const Testimonials = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Testimonials"
        description1="Hear from Our Satisfied Clients: Read Our Testimonials"
        description2="to Learn More about Our Software Development Services"
      />

      <div className="bg-main-black my-10 px-2 py-10 rounded-3xl">
        <Swiper
          className="mySwiper"
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {TestimonialsData.map((data) => (
            <SwiperSlide key={data.name + data.position}>
              <ReviewCards data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
