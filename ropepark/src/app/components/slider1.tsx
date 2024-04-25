"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Slider1() {
  const [state, setState] = useState(1);
  const [chek2, setChek2] = useState(false);
  const [bay, setBay] = useState(false);
  function chengeCheckbox2(event: any) {
    console.log(event.target.value);
    setChek2(!chek2);
  }
  function chengeBay() {
    setBay(!bay);
  }
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div
      className={
        chek2
          ? "block p-4 mx-auto max-w-3xl"
          : "lg:flex p-4 block max-w-3xl mx-auto min-h-1/2 lg:max-w-6xl"
      }
    >
      <div
        className={
          chek2
            ? "lg:w-2/3 h-auto mx-auto  w-full xl:w-full pb-5 "
            : "w-full  h-auto sm:w-1/2 lg:mx-auto pb-5 "
        }
      >
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 "
        >
          <SwiperSlide>
            <Image
              src="/images/tulpan/1.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              src="/images/tulpan/2.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/3.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/4.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/5.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/6.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/7.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/8.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/9.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/10.webp"
              width={1200}
              height={675}
              alt=""
              loading="lazy"
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/11.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/12.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/13.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/14.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/15.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/16.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/17.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/18.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/19.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/21.webp"
              width={1200}
              height={675}
              alt=""
              className={chek2 ? "sm:cursor-zoom-out" : "sm:cursor-zoom-in"}
              onClick={chengeCheckbox2}
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="/images/tulpan/1a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/2a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/3a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/4a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/5a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/6a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/7a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/8a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/9a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/10a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/11a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/12a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/13a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/14a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/15a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/16a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/17a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/18a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/19a.webp"
              width={200}
              height={113}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/tulpan/21a.webp"
              width={200}
              height={113}
              alt=""
            />
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
      <div className={chek2 ? "lg:w-2/3 xl:w-full lg:mx-auto" : "lg:pl-6 "}>
        <h2 className="text-xl font-bold pb-4">
          Веревочный парк в концепции &quot;Тюльпаны&quot;
        </h2>
        <div>
          <p className="pt-4 pb-4 lg:pt-0">
            <span className="pr-4 text-xl font-semibold">
              {" "}
              {(state * 180000).toLocaleString()} р.
            </span>
            <span className="text-xl font-semibold text-zinc-400 line-through">
              {(state * 200000).toLocaleString()} р.
            </span>
          </p>
          <div className="flex w-64 justify-between items-center">
            <div className="flex border-black border-[1px] border-solid rounded-lg px-2 py-3 w-24 justify-between items-center">
              <div
                className="cursor-pointer"
                onClick={() => {
                  //bug
                  if (state > 1) {
                    setState(Number(state - 1));
                  }
                }}
              >
                <span className="text-2xl font-thin cursor-pointer">-</span>
              </div>
              <div>
                <input
                  className="w-12 text-lg text-center px-4"
                  type="text"
                  value={state}
                  min={1}
                  onChange={(e) => {
                    //bug
                    setState(Number(e.target.value));
                  }}
                />
              </div>
              <div
                onClick={() => {
                  //bug

                  setState(Number(state + 1));
                }}
              >
                <span className="text-2xl font-thin cursor-pointer">+</span>
              </div>
            </div>

            <div
              className="py-[17px] px-2 bg-black text-white text-center rounded-lg  w-[155px] cursor-pointer"
              onClick={chengeBay}
            >
              Купить
            </div>
          </div>
        </div>
        <div className="pt-6">
          Это оригинальная конструкция с подсветкой которая имеет хороший
          визуальный эффект выполнена в форме изящных дуг напоминающих форму
          тюльпанов. В ночное время дуги подсвечиваются. Для этой цели
          разработан специальный профиль. Первый ярус в страховочной сетке для
          детей от 6 лет второй ярус для посетителей ростом от 120 см и выше.
          Маршрут может быть интегрирован под местность, сочетаться с
          существующими деревьями.
        </div>
      </div>
      <div
        id="popup1"
        className={
          bay == true
            ? "visible z-40 bg-slate-100  fixed top-1 right-1 w-screen h-screen transition-opacity  ease-in duration-300 overflow-y-scroll cursor-pointer"
            : "invisible opacity-0 transition-opacity ease-in duration-300 hidden"
        }
        onClick={chengeBay}
      >
        <div
          onClick={chengeBay}
          className="px-6 py-4  cursor-pointer max-w-6xl mx-auto text-sm"
        >
          &#8592; Назад
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div
            className="sm:w-2/3 sm:h-auto lg:w-1/2 lg:h-auto bg-white z-50 opaity-100 cursor-default rounded-2xl p-8 shadow-2xl max-w-lg relative mx-4 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <p
              className="absolute top-3 right-4 text-zinc-700 cursor-pointer"
              onClick={chengeBay}
            >
              X
            </p>
            <div className="mx-auto">
              <form action="/Order.php" method="post">
                <input
                  id="popup-form-source1"
                  type="hidden"
                  name="source"
                  value="форма Веревочный парк в концепции Тюльпаны"
                />
                <div className="">
                  <input
                    type="text"
                    id="formName1"
                    className="rounded-lg border-[1px] p-2 px-4 border-dotted border-zinc-800 w-full my-3"
                    name="name"
                    required={true}
                    placeholder="как к вам обращаться?"
                  />
                </div>
                <div className="">
                  <input
                    type="tel"
                    id="formPhone1"
                    className="rounded-lg border-[1px] p-2 px-4 border-dotted border-zinc-800 w-full my-3"
                    name="tel"
                    required={true}
                    pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                    placeholder="Номер телефона"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    id="formMail1"
                    className="rounded-lg border-[1px] p-2 px-4 border-dotted border-zinc-800 w-full my-3"
                    name="email"
                    required={true}
                    pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+"
                    placeholder="Ваш Email"
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="form_checkbox"
                    id="form_checkbox"
                    className="mr-2"
                    required={true}
                  />
                  <label
                    htmlFor="form_checkbox"
                    className="text-xs sm:text-sm lg:text-base"
                  >
                    Я подтверждаю свое согласие на обработку моих персональных
                    данных.
                  </label>
                </div>
                <div className="w-fit mx-auto">
                  <button
                    type="submit"
                    className="bg-emerald-500 text-white p-4 px-16 rounded-2xl mt-4 hover:shadow-lg"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
