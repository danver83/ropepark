import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="w-full bg-gray-100 " id="about">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-20 bg-gray-100">
        <h2 className=" max-w-screen-md mx-auto font-semibold text-4xl sm:text-5xl pb-4 text-[#ff6000]">
          О компании
        </h2>
        <div className="max-w-screen-md mx-auto">
          <p className="w-24  border-slate-800 h-0 border-t-[3px] my-3 py-2"></p>
          <p className="max-w-screen-md text-zinc-800 leading-8">
            Outride Park - это команда профессионалов с более чем десятилетним
            опытом в создании веревочных парков. Мы гордимся тем, что за это
            время мы построили более 50 парков, каждый из которых является
            уникальным пространством для приключений и развлечений. Наша цель -
            создавать безопасные, качественные и захватывающие веревочные
            конструкции, которые приносят радость и удовлетворение нашим
            клиентам. Мы стремимся к инновациям и постоянно развиваем наши
            навыки, чтобы предоставлять самые современные и надежные решения в
            этой области. Присоединяйтесь к нам и откройте для себя мир
            приключений с Outride Park!
          </p>
        </div>
      </div>
    </div>
  );
}
