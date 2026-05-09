"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const MagSafeSlider = () => {
  return (
    <div className="w-full h-55.25 bg-[#F6DED2] px-10">
      <div className="w-full h-full px-10 bg-black">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          slidesPerView={1}
          className="flex flex-row justify-center items-center w-full h-full bg-red-500"
        >
          {/* ---- Slide 1 ---- */}
          <SwiperSlide className="flex flex-row justify-center items-center px-17.5">
            <div className="text-white">
              <p>Magsafe</p>
              <p>
                Snap on a magnetic case, wallet, or both. And get faster
                wireless charging.
              </p>
            </div>
          </SwiperSlide>

          {/* ---- Other Slides ---- */}
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MagSafeSlider;
