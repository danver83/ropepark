import Image from "next/image";
import Link from "next/link";
export default function Offer1() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-white py-36 sm:py-40 lg:py-36">
        <h1 className="font-bold text-3xl sm:text-4xl pb-4">
          Строительство веревочных парков под ключ
        </h1>
        <p>
          Мы создаем уникальные пространства, где каждая веревка, каждый элемент{" "}
          <br />
          аттракциона дарит возможность ощутить адреналин и преодолеть себя.{" "}
        </p>
        <ul className="py-4 pb-8">
          <li className="text-[#ff8400] text-base">Монтаж от одной недели.</li>
          <li className="text-[#ff8400]">Быстрая окупаемость.</li>
          <li className="text-[#ff8400]">
            Построили более 50 веревочных парков
          </li>
        </ul>
        <Link href="/docs/Каталог продукции 2024.pdf" target="_blank">
          <div className="rounded-2xl p-4 bg-[#ff8400] max-w-80">
            <p className="text-sm text-center">ПОЛУЧИТЬ КАТАЛОГ С ПРОЕКТАМИ</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
