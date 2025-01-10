"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import imagee from "../../public/Frame560.jpg";

const Swipper = () => {
  return (
    <div className="w-[900px] h-[380px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
            <Image
              src={imagee}
              alt="Slide 1"
              layout="fill"
              priority
              className="h-[344px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
            <Image src={imagee} alt="Slide 2" layout="fill" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
            <Image src={imagee} alt="Slide 3" layout="fill" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
            <Image src={imagee} alt="Slide 4" layout="fill" priority />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipper;
