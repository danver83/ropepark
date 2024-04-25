"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SliderV() {
  const [v1, setV1] = useState(false);
  const [chek2, setChek2] = useState(false);
  function chengeV1() {
    setV1(!v1);
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto  lg:px-6 text-zinc-800 py-20 pb-0 px-4">
        <h2 className="font-bold text-3xl sm:text-4xl pb-6">
          Видеопрезентации
        </h2>
        <div className="max-w-4xl mx-auto shadow-md">
          <div className="sweet4">
            <Swiper
              slidesPerView={1}
              className="h-auto"
              spaceBetween={10}
              navigation={true}
              style={{ width: "100%", height: "100%" }}
              modules={[FreeMode, Navigation]}
            >
              <SwiperSlide>
                <div className="relative">
                  <div className="absolute text-white p-2 sm:p-4 sm:px-8"></div>
                  <video
                    poster="images/starship/1.webp"
                    src="/images/starship/star2.mp4"
                    controls
                    className=" object-fit"
                  ></video>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative" onClick={chengeV1}>
                  <div className="absolute text-white p-2 sm:p-4 sm:px-8"></div>

                  <video
                    poster="/images/starship/33.webp"
                    src="/images/starship/waterpark.mp4"
                    controls
                    className=" object-fit"
                  ></video>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
