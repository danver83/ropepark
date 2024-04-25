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
import Image from "next/image";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function Gallery() {
  return (
    <div className="bg-white ">
      <div className="pt-8 bg-white block p-4 mx-auto max-w-full overflow-x-hidden lg:max-w-[1920px]">
        <h2 className="font-bold text-3xl sm:text-4xl pb-4 text-center">
          Галерея
        </h2>
        <div className="lg:w-[120%]">
          <Swiper
            spaceBetween={40}
            breakpoints={{
              1024: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 3, spaceBetween: 20 },
            }}
            slidesPerView={1}
            navigation={false}
            grabCursor={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation]}
          >
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/1.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/2.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/3.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/4.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/5.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/7.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/8.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/10.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/11.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/12.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/13.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/14.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/15.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/16.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/17.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/18.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/19.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/20.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/21.webp"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={400}
                height={300}
                alt=""
                src="/images/galery/22.webp"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
