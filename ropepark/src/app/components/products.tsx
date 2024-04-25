"use client";
import { useState } from "react";
import Slider from "./slider";
import Slider1 from "./slider1";
import Slider2 from "./slider2";
import Image from "next/image";
import Link from "next/link";
export default function Products() {
  const [bay, setBay] = useState(false);
  const [submiit, setSubmiit] = useState(false);
  const [chek1, setChek1] = useState(false);
  function chengeCheckbox(event: any) {
    console.log(event.target.value);
    setChek1(!chek1);
    setChek2(false);
    setChek3(false);
  }
  const [chek2, setChek2] = useState(false);
  function chengeCheckbox2(event: any) {
    console.log(event.target.value);
    setChek2(!chek2);
    setChek1(false);
    setChek3(false);
  }
  const [chek3, setChek3] = useState(false);
  function chengeCheckbox3(event: any) {
    console.log(event.target.value);
    setChek3(!chek3);
    setChek2(false);
    setChek1(false);
  }
  function chengeBay() {
    setBay(!bay);
  }
  function chengeSub() {
    setSubmiit(!submiit);
  }
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-zinc-800 py-20">
        <div className="flex flex-col items-center justify-center lg:px-16">
          <div className=" max-w-full flex flex-col justify-center items-center border-y-[1px] border-zinc-300 sm:w-full sm:items-start  sm:flex-row py-4 lg:justify-between">
            <div className="relative">
              <input
                className="hidden"
                type="checkbox"
                id="ship"
                value="1"
                onClick={chengeCheckbox}
                checked={chek1 == true ? true : false}
              />
              <label htmlFor="ship">
                <Image
                  className="w-96 cursor-pointer"
                  src="/images/starship/1.webp"
                  width={320}
                  height={400}
                  alt=""
                />
              </label>
              <div
                className="bg-orange-400 text-white rounded-md absolute top-3 left-3 px-3 py-1 text-sm cursor-pointer"
                onClick={chengeCheckbox}
              >
                SALE
              </div>
            </div>
            <div className="sm:ml-8 lg:flex lg:justify-between w-full">
              <div className="lg:w-1/2">
                <h2 className="pt-4 pb-2 text-lg font-bold sm:pt-0">
                  Веревочный парк &quot;Космический корабль&quot;
                </h2>
                <p className="text-zinc-500  text-sm">
                  Новый стиль позволит стать уникальным
                </p>
              </div>
              <div>
                <p className="pt-8 pb-4 lg:pt-0">
                  <span className="pr-4 text-xl font-semibold">
                    {" "}
                    370 000 р.
                  </span>
                  <span className="text-xl font-semibold text-zinc-400 line-through">
                    490 000 р.
                  </span>
                </p>

                <div
                  className="py-2 px-2 bg-black text-white text-center rounded-lg sm:max-w-52 cursor-pointer"
                  onClick={chengeCheckbox}
                >
                  Купить
                </div>
              </div>
            </div>
          </div>
          <div className=" max-w-full flex flex-col justify-center items-center border-b-[1px] border-zinc-300 sm:w-full sm:items-start  sm:flex-row py-4 lg:justify-between">
            <div>
              <input
                className="hidden"
                type="checkbox"
                id="modul"
                value="1"
                onClick={chengeCheckbox2}
                checked={chek2 == true ? true : false}
              />
              <label htmlFor="modul">
                <Image
                  className="w-96 cursor-pointer"
                  src="/images/modul/p.webp"
                  width={320}
                  height={400}
                  alt=""
                />
              </label>
            </div>
            <div className="sm:ml-8 lg:flex lg:justify-between w-full">
              <div className="lg:w-1/2">
                <h2 className="pt-4 pb-2 text-lg font-bold sm:pt-0">
                  Модульные парки
                </h2>
                <p className="text-zinc-500  text-sm">
                  Это верёвочные парки из которых возможно создать несколько
                  парков
                </p>
              </div>
              <div className="lg:pl-6">
                <p className="pt-8 pb-4 lg:pt-0">
                  <span className="pr-4 text-xl font-semibold">
                    {" "}
                    120 000 р.
                  </span>
                  <span className="text-xl font-semibold text-zinc-400 line-through">
                    150 000 р.
                  </span>
                </p>
                <div
                  className="py-2 px-2 bg-black text-white text-center rounded-lg sm:max-w-52 cursor-pointer"
                  onClick={chengeCheckbox2}
                >
                  Купить
                </div>
              </div>
            </div>
          </div>
          <div className=" max-w-full flex flex-col justify-center items-center border-b-[1px] border-zinc-300 sm:w-full sm:items-start  sm:flex-row py-4 lg:justify-between">
            <div>
              <input
                className="hidden"
                type="checkbox"
                id="tulpan"
                value="1"
                onClick={chengeCheckbox3}
                checked={chek3 == true ? true : false}
              />
              <label htmlFor="tulpan">
                <Image
                  className="w-96 cursor-pointer"
                  src="/images/tulpan/p.webp"
                  width={320}
                  height={400}
                  alt=""
                />
              </label>
            </div>
            <div className="sm:ml-8 lg:flex lg:justify-between w-full lg:ml-6">
              <div className="lg:w-1/2">
                <h2 className="pt-4 pb-2 text-lg font-bold sm:pt-0">
                  Веревочный парк в концепции &quot;Тюльпаны&quot;
                </h2>
                <p className="text-zinc-500  text-sm">
                  Уникальный верёвочный парк который не оставит равнодушным
                  любого посетителя и даже проходящего мимо человека.
                </p>
              </div>
              <div className="">
                <p className="pt-8 pb-4 lg:pt-0">
                  <span className="pr-4 text-xl font-semibold"> 180 000р.</span>
                  <span className="text-xl font-semibold text-zinc-400 line-through">
                    200 000 р.
                  </span>
                </p>
                <div
                  className="py-2 px-2 bg-black text-white text-center rounded-lg sm:max-w-52 cursor-pointer"
                  onClick={chengeCheckbox3}
                >
                  Купить
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex justify-center items-center py-4 pt-10 ">
          <Link href="#">
            <div
              className="bg-emerald-500 text-white p-4  rounded-lg sm:mr-2 w-64 text-center mx-auto mb-3 sm:mb-0"
              onClick={chengeBay}
            >
              Оставить заявку
            </div>
          </Link>
          <Link href="/docs/Каталог продукции 2024.pdf">
            <div className="bg-white text-black p-[13px] px-3 w-64  rounded-lg sm:ml-2 text-center mx-auto border-black border-solid border-[3px]">
              Cкачать каталог
            </div>
          </Link>
        </div>
      </div>
      <div
        id="popup"
        className={
          chek1 == true
            ? "visible z-50 bg-white fixed top-1 right-1 w-screen h-screen transition-opacity opacity-100 ease-in duration-300 overflow-y-scroll"
            : "invisible opacity-0 transition-opacity ease-in duration-300 hidden"
        }
      >
        <div
          onClick={chengeCheckbox}
          className="px-6 py-4  cursor-pointer max-w-6xl mx-auto text-sm"
        >
          &#8592; More products
        </div>
        <Slider />
      </div>

      <div
        id="popup1"
        className={
          chek2 == true
            ? "visible z-50 bg-white fixed top-1 right-1 w-screen h-screen transition-opacity opacity-100 ease-in duration-300 overflow-y-scroll"
            : "invisible opacity-0 transition-opacity ease-in duration-300 hidden"
        }
      >
        <div
          onClick={chengeCheckbox2}
          className="px-6 py-4  cursor-pointer max-w-6xl mx-auto text-sm"
        >
          &#8592; More products
        </div>
        <Slider2 />
      </div>

      <div
        id="popup2"
        className={
          chek3 == true
            ? "visible z-50 bg-white fixed top-1 right-1 w-screen h-screen transition-opacity opacity-100 ease-in duration-300 overflow-y-scroll"
            : "invisible opacity-0 transition-opacity ease-in duration-300 hidden"
        }
      >
        <div
          onClick={chengeCheckbox3}
          className="px-6 py-4  cursor-pointer max-w-6xl mx-auto text-sm"
        >
          &#8592; More products
        </div>
        <Slider1 />
      </div>
      <div
        id="popup3"
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
                  id="popup-form-source4"
                  type="hidden"
                  name="source"
                  value="форма В каталоге парков"
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
