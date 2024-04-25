import Image from "next/image";
import Link from "next/link";
export default function Timeline() {
  return (
    <div className="w-full bg-gray-100" id="timeline">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-zinc-800 py-20">
        <h2 className="font-bold text-3xl sm:text-4xl pb-4">Как мы работаем</h2>
        <div>
          <div className="lg:flex lg:flex-wrap hidden">
            <div className="max-w-72 mb-3">
              <div className="flex items-center">
                <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                  1
                </div>
                <div className="border-t-2 border-zinc-800 border-solid h-1 w-[255px]"></div>
              </div>
              <div>
                <h3 className="font-semibold text-xl pt-4">Обращение</h3>
                <p className=" max-w-xs pt-4 pr-10">
                  Вы связываетесь с нами по телефону или через заявку
                </p>
              </div>
            </div>
            <div className="max-w-72 mb-6">
              <div className="flex items-center">
                <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                  2
                </div>
                <div className="border-t-2 border-zinc-800 border-solid h-1 w-[255px]"></div>
              </div>
              <div>
                <h3 className="font-semibold text-xl pt-4">
                  Комм. предложение
                </h3>
                <p className=" max-w-xs pt-4 pr-10">
                  Мы подготовим для Вас персональное предложение перед тем как
                  обсудить все делати
                </p>
              </div>
            </div>
            <div className="max-w-72 mb-6">
              <div className="flex items-center">
                <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                  3
                </div>
                <div className="border-t-2 border-zinc-800 border-solid h-1 w-[255px]"></div>
              </div>
              <div>
                <h3 className="font-semibold text-xl pt-4">Договор</h3>
                <p className=" max-w-xs pt-4 pr-10">
                  Обсудив все детали и стоимость проекта, мы подписываем с Вами
                  договор
                </p>
              </div>
            </div>
            <div className="max-w-72 mb-6">
              <div className="flex items-center">
                <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                  4
                </div>
                <div className="border-t-2 border-zinc-800 border-solid h-1 w-[255px]"></div>
              </div>
              <div>
                <h3 className="font-semibold text-xl pt-4">Изготовление</h3>
                <p className=" max-w-xs pt-4 pr-10">
                  После получения предоплаты мы начинаем изготавливать
                  веревочный городок по спецификации.
                </p>
              </div>
            </div>
            <div className="max-w-72 mb-6">
              <div className="flex items-center">
                <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                  5
                </div>
                <div className="border-t-2 border-zinc-800 border-solid h-1 w-[255px]"></div>
              </div>
              <div>
                <h3 className="font-semibold text-xl pt-4">Монтаж</h3>
                <p className=" max-w-xs pt-4 pr-10">
                  Стадия, которая идет после изготовления каркасной конструкции
                </p>
              </div>
            </div>
            <div className="max-w-72 mb-6">
              <div className="flex items-center">
                <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                  6
                </div>
                <div className="border-t-2 border-zinc-800 border-solid h-1 w-[255px]"></div>
              </div>
              <div>
                <h3 className="font-semibold text-xl pt-4">Запуск</h3>
                <p className=" max-w-xs pt-4 pr-10">
                  Тестируем все системы и маршруты веревочных трасс
                </p>
              </div>
            </div>
            <div className="max-w-72 mb-6">
              <div className="flex items-center">
                <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                  7
                </div>
                <div className=" w-[255px]"></div>
              </div>
              <div>
                <h3 className="font-semibold text-xl pt-4">Запуск</h3>
                <p className="text-justify pt-4 pr-10 ">
                  По истечении 4-6 месяцев наш специалист проведет обслуживание
                  веревочного парка.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start lg:hidden">
            <div className="flex flex-col items-center">
              <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                1
              </div>
              <div className="border-r-2 border-zinc-800 border-solid h-36 w-1 sm:h-28"></div>
            </div>
            <div className="pl-8">
              <h3 className="font-semibold text-xl ">Обращение</h3>
              <p className=" max-w-xs pt-4 ">
                Вы связываетесь с нами по телефону или через заявку
              </p>
            </div>
          </div>
          <div className="flex items-start lg:hidden">
            <div className="flex flex-col items-center">
              <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                2
              </div>
              <div className="border-r-2 border-zinc-800 border-solid h-36 w-1 sm:h-28"></div>
            </div>
            <div className="pl-8">
              <h3 className="font-semibold text-xl ">Комм. предложение</h3>
              <p className=" max-w-lg pt-4 ">
                Мы подготовим для Вас персональное предложение перед тем как
                обсудить все делати
              </p>
            </div>
          </div>
          <div className="flex items-start lg:hidden">
            <div className="flex flex-col items-center">
              <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                3
              </div>
              <div className="border-r-2 border-zinc-800 border-solid h-36 w-1 sm:h-28"></div>
            </div>
            <div className="pl-8">
              <h3 className="font-semibold text-xl ">Договор</h3>
              <p className=" max-w-lg pt-4 ">
                Обсудив все детали и стоимость проекта, мы подписываем с Вами
                договор
              </p>
            </div>
          </div>
          <div className="flex items-start lg:hidden">
            <div className="flex flex-col items-center">
              <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                4
              </div>
              <div className="border-r-2 border-zinc-800 border-solid h-36 w-1 sm:h-28"></div>
            </div>
            <div className="pl-8">
              <h3 className="font-semibold text-xl ">Изготовление</h3>
              <p className=" max-w-lg pt-4 ">
                После получения предоплаты мы начинаем изготавливать веревочный
                городок по спецификации.
              </p>
            </div>
          </div>
          <div className="flex items-start lg:hidden">
            <div className="flex flex-col items-center">
              <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                5
              </div>
              <div className="border-r-2 border-zinc-800 border-solid h-36 sm:h-28 w-1"></div>
            </div>
            <div className="pl-8">
              <h3 className="font-semibold text-xl ">Монтаж</h3>
              <p className=" max-w-lg pt-4 ">
                Стадия, которая идет после изготовления каркасной конструкции
              </p>
            </div>
          </div>
          <div className="flex items-start lg:hidden">
            <div className="flex flex-col items-center">
              <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                6
              </div>
              <div className="border-r-2 border-zinc-800 border-solid h-36 w-1 sm:h-28"></div>
            </div>
            <div className="pl-8">
              <h3 className="font-semibold text-xl ">Запуск</h3>
              <p className=" max-w-lg pt-4 ">
                Тестируем все системы и маршруты веревочных трасс
              </p>
            </div>
          </div>
          <div className="flex items-start lg:hidden">
            <div className="flex flex-col items-center">
              <div className="bg-orange-600 text-white p-2 px-4 rounded-full taxt-xl font-semibold border-zinc-800 border-solid border-2">
                7
              </div>
              <div className=" border-zinc-800 border-solid h-28 w-1"></div>
            </div>
            <div className="pl-8">
              <h3 className="font-semibold text-xl ">Обслуживание</h3>
              <p className=" max-w-lg pt-4 ">
                По истечении 4-6 месяцев наш специалист проведет обслуживание
                веревочного парка.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
