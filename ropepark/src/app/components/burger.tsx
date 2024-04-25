import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Burger() {
  return (
    <div className="w-full bg-white fixed z-40 shadow-md block">
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
    </div>
  );
}
