import Image from "next/image";
import Link from "next/link";
import "../globals.css";
export default function About() {
  const submiit = true;
  return (
    <div className="w-full bg-gray-100 " id="about">
      <Link href="/">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-20 bg-gray-100">
          <div
            className={
              submiit == true
                ? "visible z-40 bg-slate-100  fixed top-1 right-1 w-screen h-screen transition-opacity  ease-in duration-300 overflow-y-scroll cursor-pointer opacity-100"
                : "invisible opacity-0 transition-opacity ease-in duration-300 hidden"
            }
          >
            <div className="flex flex-col justify-center items-center h-screen w-80 mx-auto">
              <div className="rounded-xl shadow-xl p-4 text-center bg-white">
                <h2 className="text-[#ff6000] text-xl font-semibold pb-3">
                  Ваша заявка отправлена!
                </h2>
                <p className="px-6 text-sm">
                  Наш менеджер свяжется с Вами в ближайшее время.
                </p>

                <div className="bg-[#ff6000] mt-3 font-semibold py-3 rounded-lg p-4 text-white w-36 mx-auto">
                  Закрыть
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
