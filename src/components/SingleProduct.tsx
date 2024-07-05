"use client";

import Link from "next/link";
import React from "react";
import Rating from "./Rating";
import { addToCart, removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

const SingleProduct = ({ prod }: any) => {
  const cart = useAppSelector((state) => state.carrito);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full border mb-5 lg:mb-0">
      <div className={`relative max-w-[380px] h-[250px] bg-red-300 `}>
        {/** <img
          src={`./image/${prod.image}`}
          alt=""
          //className="w-[300px] h-[250px]"
          style={{
            width: "380px",
            height: "240px",
            objectFit: "cover", // cover, contain, none
            objectPosition: "50% 20%",
          }}
        />  */}
        <Image
          src={require(`/public/image/${prod.image}`)}
          alt="Amigurumi"
          fill
          sizes=""
          //width={250}
          //height={200}
          style={{
            objectFit: "cover", // cover, contain, none
            objectPosition: "50% 20%",
          }}
        />

        <Link
          href={`/product/${prod.name.replaceAll(" ", "-").toLowerCase()}`}
          className="absolute top-3 right-3 cursor-pointer flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-400 active:animate-ping text-gray-500 hover:text-white rounded-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </Link>
      </div>

      <div className=" Xrelative p-5">
        <h1 className="font-bold mb-1"> {prod.name}</h1>
        <div className="flex flex-col Xjustify-between mb-3">
          {/** price.split(".")[0] */}
          <h1 className={`text-sm text-gray-700 `}>$ {prod.price}.00</h1>
          <h1 className="text-xs text-gray-700">Delivery en 5 dias</h1>
          <div className="pointer-events-none flex flex-row items-center text-blue-600">
            <Rating rating={prod.rating} />
          </div>
        </div>

        <div className="Xabsolute Xbottom-5 Xright-5">
          {cart.some((p) => p.name === prod.name) ? (
            <button
              onClick={() => dispatch(removeFromCart(prod.name))}
              className=" bg-red-500 text-white text-sm font-bold rounded-sm px-3 py-1.5 cursor-pointer active:animate-ping"
            >
              Quitar del carrito
            </button>
          ) : (
            <button
              disabled={!prod.inStock}
              onClick={() => dispatch(addToCart(prod))}
              className={` text-white text-sm font-bold rounded-sm px-3 py-1.5 ${
                prod.inStock
                  ? "bg-teal-500 cursor-pointer active:animate-ping"
                  : "bg-indigo-600"
              } `}
            >
              {!prod.inStock ? "Agotado" : "Agregar al carrito"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
