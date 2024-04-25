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
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

export default function SliderS() {
  const [state, setState] = useState(1);
  const [chek2, setChek2] = useState(false);
  function chengeCheckbox2(event: any) {
    console.log(event.target.value);
    setChek2(!chek2);
  }
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-zinc-800 py-20">
        <h2 className="font-bold text-3xl sm:text-4xl pb-4">
          Наши сертификаты
        </h2>
        <div className={"lg:flex p-4 block max-w-7xl mx-auto  bg-white"}>
          <div className={"w-full h-auto  mx-auto pb-5"}>
            <Swiper
              spaceBetween={30}
              style={{ width: "100%", height: "100%" }}
              navigation={true}
              pagination={{ clickable: true }}
              slidesPerView={1}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Pagination]}
              className="mySwiper2 "
            >
              <SwiperSlide>
                <img src="/images/starship/s1.webp" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/starship/s2.webp" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/starship/s3.webp" loading="lazy" />
              </SwiperSlide>
            </Swiper>
            <input
              className="hidden"
              type="checkbox"
              id="sh"
              value="1"
              onClick={chengeCheckbox2}
              checked={chek2 == true ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
