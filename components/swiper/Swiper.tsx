"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const MagSafeSlider = () => {
  return (
    <div className="w-full h-55.25  mt-17">
      <div className="w-full h-full px-10 bg-[#F6DED2]">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          slidesPerView={1}
          className="flex flex-row justify-center items-center w-full h-full"
        >
          {/* ---- Slide 1 ---- */}
          <SwiperSlide className="flex! flex-row! items-center! justify-between!">
            {/* ტექსტი */}
            <div className="flex flex-col w-123.25 h-23.5 mt-0 ml-23">
              <div className="w-full h-auto">
                <p className="text-2xl font-bold text-[rgba(70,93,107,1)]">
                  Magsafe
                </p>
              </div>
              <div className="self-baseline w-full h-14.5">
                <p className="text-[20px] font-medium text-[rgba(70,93,107,1)]">
                  Snap on a magnetic case, wallet, or both. And get faster
                  wireless charging.
                </p>
              </div>
            </div>

            {/* ფოტო */}
            <div className="relative mr-40 h-full w-123.25">
              <Image
                src="/iphone.png"
                alt="iphone"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>

          {/* ---- Slide 2 ---- */}
          <SwiperSlide className="flex! flex-row! items-center! justify-between!">
            {/* ტექსტი */}
            <div className="flex flex-col w-123.25 h-23.5 mt-0 ml-23">
              <div className="w-full h-auto">
                <p className="text-2xl font-bold text-[rgba(70,93,107,1)]">
                  This is Slide #2
                </p>
              </div>
              <div className="self-baseline w-full h-14.5">
                <p className="text-[20px] font-medium text-[rgba(70,93,107,1)]">
                  Snap on a magnetic case, wallet, or both. And get faster
                  wireless charging.
                </p>
              </div>
            </div>

            {/* ფოტო */}
            <div className="relative mr-40 h-full w-123.25">
              <Image
                src="/iphone.png"
                alt="iphone"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>

          {/* ---- Slide 3 ---- */}
          <SwiperSlide className="flex! flex-row! items-center! justify-between!">
            {/* ტექსტი */}
            <div className="flex flex-col w-123.25 h-23.5 mt-0 ml-23">
              <div className="w-full h-auto">
                <p className="text-2xl font-bold text-[rgba(70,93,107,1)]">
                  This one is Slide #3
                </p>
              </div>
              <div className="self-baseline w-full h-14.5">
                <p className="text-[20px] font-medium text-[rgba(70,93,107,1)]">
                  Snap on a magnetic case, wallet, or both. And get faster
                  wireless charging.
                </p>
              </div>
            </div>

            {/* ფოტო */}
            <div className="relative mr-40 h-full w-123.25">
              <Image
                src="/iphone.png"
                alt="iphone"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MagSafeSlider;
