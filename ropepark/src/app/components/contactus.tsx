import Image from "next/image";
import Link from "next/link";
export default function Contactus() {
  return (
    <div className="w-full bg-gray-100 overflow-x-hidden" id="contactus">
      <div className="max-w-7xl px-4 lg:px-6 text-zinc-800 py-20 mx-auto">
        <h2 className="font-bold text-3xl sm:text-4xl pb-4">
          Свяжитесь с нами!
        </h2>
        <div className="max-w-lg mx-auto lg:max-w-full">
          <form action="Order.php" method="post">
            <div className=" max-w-[800px] block lg:flex lg:justify-between">
              <div className="my-4">
                <input
                  type="text"
                  className="rounded-3xl bg-black text-white py-4 px-4 w-full lg:w-48"
                  placeholder=" Ваше имя"
                />
              </div>
              <div className="my-4">
                <input
                  type="text"
                  className="rounded-3xl bg-black text-white py-4 px-4  w-full lg:w-48"
                  placeholder="Телефон"
                />
              </div>
              <div className="my-4">
                <input
                  type="text"
                  className="rounded-3xl bg-black text-white py-4 px-4 w-full lg:w-48"
                  placeholder="E-mail"
                />
              </div>
              <div className="my-4">
                <button className="rounded-3xl bg-black text-white px-20 py-4 w-full lg:w-48 text-center">
                  Отправить
                </button>
              </div>
            </div>
          </form>
          <div className="mt-8 max-w-[800px] flex  text-xs sm:text-sm">
            <div className="px-8">
              <p>
                <Link href="tel:+79966398748">Звоните по телефону</Link>
              </p>
              <p>
                <Link href="tel:+79966398748">+7(996)639-87-48</Link>
              </p>
            </div>
            <div className="px-8">
              <p>
                <Link href="mailto:outride.park@mail.ru">Пишите сюда</Link>
              </p>
              <p>
                <Link href="mailto:outride.park@mail.ru">
                  OUTRUDE.PARK@MAIL.RU
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
