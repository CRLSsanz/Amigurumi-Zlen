"use client";
import { useAppSelector } from "@/redux/hooks";
import Filter from "@/components/Filter";
import Carrito from "@/components/Carrito";
import WhatsApp from "@/components/WhatsApp";
import SingleProduct from "@/components/SingleProduct";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Main");
  const localeActive = useLocale();
  const data = useAppSelector((state) => state.products);

  const { byCategory, byStock, searchQuery, sort, byRating, byA_Z } =
    useAppSelector((state) => state.filter);

  const filterData = () => {
    let newData = data;

    //let toys = newData.slice();
    //let arr3 = toys.sort((a, b) => a.price - b.price);
    //console.log(arr3);

    if (byA_Z) {
      let toys = newData.slice();
      newData = toys.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }

    if (sort) {
      let toys = newData.slice();
      newData = toys.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (byCategory) {
      if (byCategory === "Nuevos Diseños") {
        newData = newData.slice(-10);
      } else {
        newData = newData.filter((item) => item.category === byCategory);
      }
    }

    if (byStock) {
      newData = newData.filter((item) => item.inStock === byStock);
    }

    if (byRating) {
      newData = newData.filter((item) => item.rating >= byRating);
    }

    if (searchQuery) {
      newData = newData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return newData;
  };

  return (
    <main className="w-full bg-gray-100 flex min-h-screen flex-col items-center">
      {/** MAIN --- <img src="./image/fondo1.jpg" alt="" /> */}

      <div className="w-full flex flex-col items-center">
        <div className="md:hidden w-full relative bg-gray-200 mb-10 ">
          <Image
            src={require(`/public/image/fondo1.jpg`)}
            alt="Amigurumi"
            sizes=""
            //width={250}
            //height={200}
          />
        </div>

        <div
          className={`hidden md:flex w-full md:h-[calc(100vh-180px)] bg-cover Xbg-fixed bg-[50%] bg-[url('/image/fondo2.jpg')] mb-10 `}
        >
          <h1 className="hidden"> bgAvatar</h1>
        </div>

        <p className="lg:max-w-[500px] px-5 text-xs text-center mb-5 leading-6">
          {t("text1")}
        </p>
        <p className="lg:max-w-[500px] px-5 text-xs text-center mb-10 leading-6">
          {t("text2")}
        </p>
        <Link
          href={`/${localeActive}/about#view`}
          className="text-center text-sm bg-gradient-to-bl from-purple-600 to-pink-500 px-7 py-2 rounded-tl-md rounded-br-md rounded-3xl  text-white mb-20 cursor-pointer"
        >
          {t("button")}
        </Link>
      </div>

      {/** FILTER */}
      <Filter />

      {/** LIST <img src={`./image/${item.name}.jpg`} alt="" /> */}
      <div
        id="view"
        className="w-full lg:w-[1024px] p-5 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-5"
      >
        <div className="uppercase text-xs lg:col-span-3 mb-10 font-bold text-gray-500">
          {t("show1") + " "}
          {filterData().length} {byCategory === "" ? "Amigurumis" : t("show2")}
        </div>

        {filterData().map((item, index) => (
          <SingleProduct prod={item} key={index} />
        ))}
      </div>

      {/** WHATSAPP */}
      <div className="fixed bottom-3 right-3 bg-green-500 hover:bg-emerald-500 shadow-md shadow-black rounded-full p-1.5">
        <div className="relative ">
          <WhatsApp text={""} size={45} />
          <div className="absolute -top-2 -right-2 h-5 w-5 text-xs bg-red-500 text-white font-bold rounded-full flex justify-center items-center">
            1
          </div>
        </div>
      </div>

      {/** CARRITO NAVBAR */}
      <Carrito />
    </main>
  );
}
