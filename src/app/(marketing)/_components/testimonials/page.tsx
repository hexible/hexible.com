"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Star from "@/assets/icons/star.svg";

import "swiper/css";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { SectionsHeader } from "@/components/common";
import { ReviewCards } from "./review-cards";
import { TestimonialsData } from "./testimonials.data";

export const Testimonials = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Testimonials"
        description1="Hear from Our Satisfied Clients: Read Our Testimonials "
        description2="to Learn More about Our Digital Marketing Services"
      />

      <div className="bg-main-black my-10 px-2 py-10 rounded-3xl">
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
          }}
        >
          {TestimonialsData.map((data) => (
            <SwiperSlide key={data.name + data.position}>
              <ReviewCards data={data} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-evenly items-center mt-20 md:mt-8">
          <ArrowLeft className="text-white" />
          <div className="flex items-center gap-x-4">
            <Star className="text-main-green" />
            <Star />
            <Star />
          </div>
          <ArrowRight className="text-white" />
        </div>
      </div>
    </div>
  );
};
