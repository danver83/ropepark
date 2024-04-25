"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Burgermenu() {
  const [showMenu, setShowMenu] = useState(false);
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
  function ChengeMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <div>
      <div className="w-full bg-white fixed z-40 shadow-md block sm:hidden">
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
            </div>
          </nav>
        </div>
        <div
          className="flex items-center justify-center p-2 cursor-pointer hover:animate-pulse"
          onClick={ChengeMenu}
        >
          <Image
            src="/images/down.png"
            width={20}
            height={20}
            alt=""
            className="hover:animate-bounce"
          ></Image>
        </div>
      </div>
      <div
        className={
          showMenu == true
            ? "w-full bg-white fixed top-16 z-40 shadow-md  block opacity-100 transition-opacity  ease-in duration-300"
            : "w-full bg-white fixed top-16 z-0 shadow-md left-[700px] opacity-0 transition-opacity  ease-in duration-300"
        }
      >
        <div className="max-w-7xl mx-auto flex px-4 lg:px-6 pt-2 pb-2 sm:hidden lg:py-7 bg-white">
          <nav className="w-full lg:flex relative">
            <ul className=" mx-auto text-gray-800">
              <li
                className="text-center py-2 mt-2 hover:text-[#90694c] sm:mt-0 sm:pr-4 sm:pl-16 lg:pl-8"
                onClick={ChengeMenu}
              >
                <Link href="#">Главная</Link>
              </li>
              <li
                className="text-center py-2 hover:text-[#90694c] sm:px-4 lg:px-3"
                onClick={ChengeMenu}
              >
                <Link href="/docs/Каталог продукции 2024.pdf" target="_blank">
                  Каталог
                </Link>
              </li>
              <li
                className="text-center py-2 hover:text-[#90694c] sm:px-4 lg:px-3"
                onClick={ChengeMenu}
              >
                <Link href="#about">О компании</Link>
              </li>
              <li
                className="text-center py-2 hover:text-[#90694c] sm:px-4 lg:px-3"
                onClick={ChengeMenu}
              >
                <Link href="#otzivy">Отзывы</Link>
              </li>
              <li
                className="text-center pt-4 hover:text-[#90694c] sm:pl-2 lg:px-3 font-CirceRoundednorm"
                onClick={ChengeMenu}
              >
                <Link href="#timeline">Как мы работаем</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="shaddow-lg shaddow-xl">
          <Link href="#contactus" onClick={ChengeMenu}>
            <div className="cursor-pointer text-center bg-black text-white rounded-2xl px-1 py-1 mt-6 hover:bg-white hover:text-black border-2 border-black sm:hidden max-w-44 mx-auto">
              Связаться с нами
            </div>
          </Link>

          <div
            className="flex items-center justify-center p-2 mt-4 cursor-pointer  hover:animate-pulse"
            onClick={ChengeMenu}
          >
            <Image
              src="/images/up.png"
              width={20}
              height={20}
              alt=""
              className="hover:animate-bounce shaddow-sm"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
