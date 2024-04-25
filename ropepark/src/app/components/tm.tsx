import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Tm() {
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
            <div className="text-center bg-black text-white rounded-2xl px-8 py-0 hover:bg-white hover:text-black border-2 border-black hidden sm:block lg:absolute lg:right-0 lg:bottom-3 lg:py-1 lg:px-5 ">
              Связаться с нами
            </div>
          </div>
          <ul className="sm:flex items-center sm:mt-4 lg:mt-0 text-gray-800">
            <li className="text-center py-2 mt-2 hover:text-[#90694c] sm:mt-0 sm:pr-4 sm:pl-16 lg:pl-8">
              <Link href="#">Главная</Link>
            </li>
            <li className="text-center py-2 hover:text-[#90694c] sm:px-4 lg:px-3">
              <Link href="#">Каталог</Link>
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
          <div className="text-center bg-black text-white rounded-2xl px-1 py-1 mt-6 hover:bg-white hover:text-black border-2 border-black sm:hidden max-w-44 mx-auto">
            Связаться с нами
          </div>
        </nav>
      </div>
    </div>
  );
}
