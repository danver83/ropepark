"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Menu() {
  const [state, setState] = useState(1);
  const [chek2, setChek2] = useState(false);
  const [bay, setBay] = useState(false);
  const [submiit, setSubmiit] = useState(false);
  function chengeCheckbox2(event: any) {
    console.log(event.target.value);
    setChek2(!chek2);
  }
  function chengeBay() {
    setBay(!bay);
  }
  function chengeSub() {
    setSubmiit(!submiit);
  }
  return (
    <div className="w-full bg-white fixed z-40 shadow-md hidden sm:block">
      <div className="max-w-7xl mx-auto flex px-4 lg:px-6 pt-2 pb-4                                                                    sm:py-4 lg:py-7 bg-white">
        <nav className="w-full lg:flex relative">
          <div className="sm:flex sm:items-center sm:justify-between ">
            <Link href="#">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  width={50}
                  height={50}
                  loading="lazy"
                  alt=""
                />
                <div className="text-[#90694c] text-2xl font-semibold text-center mt-1 sm:pl-2 ml-3">
                  <p className="-mb-1">OUTRIDE PARK</p>
                  <p className="text-xs font-normal">
                    Веревочные парки под ключ
                  </p>
                </div>
              </div>
            </Link>
            <Link href="#contactus">
              <div className="text-center bg-black text-white rounded-2xl px-8 py-0 hover:bg-white hover:text-black border-2 border-black hidden sm:block lg:absolute lg:right-0 lg:bottom-3 lg:py-1 lg:px-5 cursor-pointer">
                Связаться с нами
              </div>
            </Link>
          </div>
          <ul className="sm:flex items-center sm:mt-4 lg:mt-0 text-gray-800">
            <li className="text-center py-2 mt-2 hover:text-[#90694c] sm:mt-0 sm:pr-4 sm:pl-16 lg:pl-8">
              <Link href="#">Главная</Link>
            </li>
            <li className="text-center py-2 hover:text-[#90694c] sm:px-4 lg:px-3">
              <Link href="/docs/Каталог продукции 2024.pdf" target="_blank">
                Каталог
              </Link>
            </li>
            <li className="text-center py-2 hover:text-[#90694c] sm:px-4 lg:px-3">
              <Link href="#about">О компании</Link>
            </li>
            <li className="text-center py-2 hover:text-[#90694c] sm:px-4 lg:px-3">
              <Link href="#otzivy">Отзывы</Link>
            </li>
            <li className="text-center py-2 hover:text-[#90694c] sm:pl-2 lg:px-3 font-CirceRoundednorm">
              <Link href="#timeline">Как мы работаем</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={
          bay == true
            ? "visible z-40 bg-slate-100  fixed top-1 right-1 w-screen h-screen transition-opacity  ease-in duration-300 overflow-y-scroll cursor-pointer opacity-100"
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
                  id="popup-form-source"
                  type="hidden"
                  name="source"
                  value="форма в popup"
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
                    onClick={chengeSub}
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
