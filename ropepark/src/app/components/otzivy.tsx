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
export default function Otzivy() {
  return (
    <div className="bg-white" id="otzivy">
      <div className="pt-8 bg-white block p-4 mx-auto w-3xl max-w-7xl overflow-x-hidden">
        <h2 className="font-bold text-3xl sm:text-4xl pb-4">
          Что говорят наши заказчики
        </h2>
        <div className="max-w-[450px] mx-auto ">
          <Swiper
            style={{ width: "100%", height: "100%", padding: "20px" }}
            spaceBetween={60}
            slidesPerView={1}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="sweet1"
          >
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Завершили монтаж модульного веревочного парка на опорах. Все
                  этапы протестированы, парк запущен в эксплуатацию.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Андрей Банкович{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  главный монтажник
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index1.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Завершили монтаж веревочного парка на деревьях. Парк включает
                  2 маршрута, 4 троллея, один из которых проходит через озеро
                  150м. Парк получился очень интересным. Все этапы
                  протестированы, парк запущен в эксплуатацию.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Сергей Черноусов{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  главный монтажник
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index3.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  После завершения монтажа, прекрасный заказчик в знак
                  благодарности организовал очень приятный вечер.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Максим Богатырев{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  Отдел логистики
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index4.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Завершили монтаж веревочного парка на деревьях. Парк включает
                  2 маршрута, 4 троллея, один из которых проходит через озеро
                  150м. Парк получился очень интересным. Все этапы
                  протестированы, парк запущен в эксплуатацию.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Александр Зольников{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  Монтажник-высотник
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index5.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Смонтировали конструкцию веревочного парка за 4 дня, повезло с
                  погодой, на пятый день температура доходила до -30.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Алексей Ларкин{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  главный монтажник
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index6.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Смонтировали 3 длинных маршрута на сложном рельефе. Многие
                  растения и деревья занесены в красную книгу, при монтаже
                  приходилось проявлять изобретательность. Зима тут самое
                  благоприятное время для монтажных работ.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Александр Арбузов-Финченко{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  главный монтажник
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index7.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Установили оригинальный веревочный парк на деревьях 3
                  маршрута. Заказчик в восторге.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Владимир Перехрест{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  главный монтажник
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index8.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Установили два веревочных парка на базе отдыха. Испытали новые
                  тандем-ролики Kong для троллеев. Заказчик доволен качеством
                  материалов и монтажных работ.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Евгений Бушеев{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  Руководитель проекта
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index9.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Осуществили поставку модульного Веревочного парка для нужд
                  МБУ.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Начальник производства{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  главный монтажник
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index10.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Благополучно завершили установку 4-х маршрутов в арендуемом
                  помещении на существующих металлических колоннах. Колонны не
                  сверлились. Веревочный парк органично вписался в помещение
                  заняв максимально возможное пространство.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Антон Стукалов{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">Монтажник</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/index11.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Реализовали 3-х уровненный проект веревочного парка на
                  оцилиндрованных опорах. Веревочный парк снабжен двумя
                  финишными троллеями.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Николай Гоноров{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  главный монтажник
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/12.jpg"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Установили веревочный парк на опорах в 2-х ярусах. Отлично
                  оборудован. С погодой были сложности, но монтаж окончен в
                  срок.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Сергей Мохов{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">Монтажник</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/13.png"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Реализовали проект веревочного парка для большой детской
                  площадки.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Владимир Маслов{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  главный монтажник
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/14.jpg"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Произвели монтаж веревочного парка на оцилиндрованных опорах.
                  Парк в 3-х уровнях, снабжен двумя финишными троллеями.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Павел Зайцев{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  Главный монтажник
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/15.jpg"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Произведен монтаж модульного веревочного парка. Веревочный
                  парк в 2-х уровнях.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Артур Синцов{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">Монтажник</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/16.jpg"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Установили модульный веревочный парк, три уровня.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Николай Зрелов{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">Монтажник</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="block">
                <div className="px-20 sm:py-6 py-2">
                  <Image
                    width={150}
                    height={150}
                    alt=""
                    src="/images/slider5/17.jpg"
                  />
                </div>
                <p className="w-full px-2 text-sm sm:text-base">
                  Поставили верёвочный парк для нужд МБУ.
                </p>
                <p className="text-lg sm:text-xl font-semibold pt-2">
                  Андрей Тополев{" "}
                </p>
                <p className="w-full px-2 text-sm sm:text-base">
                  главный монтажник
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
