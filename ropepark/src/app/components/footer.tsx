"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [submiit, setSubmiit] = useState(true);
  function chb() {
    setSubmiit(!submiit);
  }
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-zinc-800 py-20">
        <div className="lg:flex lg:items-center lg:justify-between relative">
          <div>
            <Image
              src="/images/logo.png"
              width={120}
              height={120}
              loading="lazy"
              alt=""
            />
            <div className="">
              <p className="text-sm pt-4 lg:absolute lg:-bottom-6">
                © All Rights Reserved. Outride Park 2008-2024
              </p>
            </div>
          </div>
          <div className="max-w-[800px] sm:flex lg:w-1/2 justify-between">
            <ul className="pt-4">
              <li className="font-semibold text-xl sm:text-2xl py-2">О нас</li>

              <li className="py-2">
                <Link href="#">Главная</Link>
              </li>
              <li className="py-2">
                <Link href="#">Услуги</Link>
              </li>
              <li className="py-2">
                <Link href="/docs/Каталог продукции 2024.pdf" target="_blank">
                  Каталог
                </Link>
              </li>
              <li className="py-2">
                <Link href="#">Контакты</Link>
              </li>
            </ul>
            <ul className="pt-4">
              <li className="font-semibold text-xl sm:text-2xl py-2">
                Присоединяйтесь к нам
              </li>

              <li className="py-2">
                <Link href="#">
                  <Image src="/images/vk.png" width={50} height={50} alt="VK" />
                </Link>
              </li>
              <li className="py-2">
                <Link href="#">
                  <Image
                    src="/images/telegram.png"
                    width={50}
                    height={50}
                    alt="Telegram"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="popupf"
        className={
          submiit == true
            ? "invisible z-40 bg-slate-100  fixed top-1 right-1 w-screen h-screen transition-opacity  ease-in duration-300 overflow-y-scroll cursor-pointer opacity-100"
            : "invisible opacity-0 transition-opacity ease-in duration-300 hidden"
        }
        onClick={chb}
      >
        <div className="px-4 cursor-pointer">Назад</div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div
            className="sm:w-2/3 sm:h-auto lg:w-1/2 lg:h-auto bg-white z-50 opaity-100 cursor-default rounded-2xl p-8 shadow-2xl max-w-lg relative mx-4 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <p
              className="absolute top-3 right-4 text-zinc-700 cursor-pointer"
              onClick={chb}
            >
              X
            </p>
            <div className="mx-auto py-24 text-center">
              СПАСИБО! НАШ МЕНЕДЖЕР ЗВОНИТ ВАМ!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
