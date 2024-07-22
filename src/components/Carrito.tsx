"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart } from "@/redux/features/cartSlice";
import Link from "next/link";
import Image from "next/image";
import WhatsApp from "./WhatsApp";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const Carrito = () => {
  const pathname = usePathname().substr(0, 3);
  const t = useTranslations("Cart");

  const [showCar, setShowCar] = useState(true);
  const [subTotal, setSubTotal] = useState(0);
  const carrito = useAppSelector((state) => state.carrito);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSubTotal(carrito.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [carrito]);

  return (
    <>
      <div
        className={`fixed z-0 w-full top-0 right-0 h-screen  
        ${
          !showCar
            ? " pointer-events-auto bg-black/80"
            : " pointer-events-none bg-transparent "
        }`}
      >
        {" "}
      </div>

      <div
        className={`fixed z-30 top-0 h-screen w-80 bg-gray-100 transition-all duration-500 
    ${showCar ? " -left-80 " : " left-0 "}`}
      >
        {carrito.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-sm mb-5">{t("cartEmpty")}</h1>
            <button
              onClick={() => setShowCar(!showCar)}
              className="bg-gradient-to-br from-teal-500 to-indigo-500 px-12 py-2 rounded-full text-sm text-white"
            >
              {t("continueShopping")}
            </button>
          </div>
        ) : (
          <div className="h-full flex flex-col justify-between">
            <div className="h-full flex flex-col ">
              {/** TITLE */}
              <div className=" p-5 flex flex-row justify-between border-b-2 mb-5">
                <h1 className="uppercase">{t("title")}</h1>
                <span
                  onClick={() => setShowCar(!showCar)}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>
              {/** LISTA */}
              <div className=" px-5 text-sm h-[calc(100vh-316px)] overflow-x-scroll">
                {carrito?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-row Xitems-center Xbg-red-200 mb-5"
                  >
                    <div className="relative min-w-20 h-20 ">
                      <Link
                        href={`${pathname}/product/${item.name
                          .replaceAll(" ", "-")
                          .toLowerCase()}#view`}
                        onClick={() => setShowCar(!showCar)}
                      >
                        <Image
                          src={require(`/public/image/${item.image}`)}
                          alt="Amigurumi"
                          fill
                          sizes=""
                          className="rounded-tl-md rounded-br-md rounded-3xl"
                          //width={250}
                          //height={200}
                          style={{
                            objectFit: "cover", // cover, contain, none
                            objectPosition: "50% 50%",
                          }}
                        />
                      </Link>
                    </div>

                    <div className="text-sm w-full px-4">
                      <h1 className="leading-4 mb-1">{item.name}</h1>
                      <h1 className="text-xs text-gray-500 mb-1">
                        {t("quantity")}: {item.qty}
                      </h1>
                      <h1 className="tracking-wider">
                        €{item.price * item.qty}
                        .00
                      </h1>
                    </div>

                    <div
                      onClick={() => dispatch(removeFromCart(item.name))}
                      className="w-6 h-6 mt-2  text-gray-500 rounded-full cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/** SUBTOTAL */}
            <div className="w-full p-5 border-t-2 bg-gray-200">
              <div className="text-base flex flex-row justify-between mb-1">
                <h1 className="font-bold">{t("subTotal")}:</h1>
                <h1 className="font-bold lining-nums">€{subTotal}.00</h1>
              </div>
              <p className="text-xs text-gray-500 mb-5">{t("text1")}</p>
              <div className="text-xs text-center text-white flex flex-col">
                <Link
                  href={`${pathname}/cart/#view`}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 mb-4"
                  onClick={() => setShowCar(!showCar)}
                >
                  {t("checkout")}
                </Link>

                <div className="flex flex-row justify-center items-center py-1 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 cursor-pointer">
                  <WhatsApp text={`${t("byWhatsapp")}  `} size={28} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/** BOTTON SHOW CART  */}
        <div
          onClick={() => setShowCar(!showCar)}
          className="absolute bottom-3 -right-16 shadow-md shadow-black bg-white rounded-full w-14 h-14 flex items-center justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <div className="absolute -top-1 -left-1 h-5 w-5 text-xs bg-black text-white font-bold rounded-full flex justify-center items-center">
            {carrito.reduce((acc, curr) => acc + curr.qty, 0)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrito;
