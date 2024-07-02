"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart } from "@/redux/features/cartSlice";
import Link from "next/link";

const Carrito = () => {
  const [showCar, setShowCar] = useState(true);
  const [subTotal, setSubTotal] = useState(0);
  const carrito = useAppSelector((state) => state.carrito);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSubTotal(
      carrito.reduce((acc, curr) => acc + curr.price * curr.count, 0)
    );
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
        className={`fixed z-30 top-0 h-screen w-80 bg-gray-100 transition-all duration-1000 
    ${showCar ? " -left-80 " : " left-0 "}`}
      >
        <div className="h-full py-5 flex flex-col justify-between">
          {/** LISTA */}
          <div className="text-sm max-h-[calc(100hv-200px))] overflow-x-scroll">
            <h1 className="text-center pb-5 mb-5 border-b-2">Tu carrito</h1>

            {carrito?.map((item, index) => (
              <div key={index} className="flex flex-row px-5 border-b mb-5">
                <img src={`./image/${item.image}`} alt="" className="w-24" />
                <div className="w-full pl-3">
                  <h1 className="mb-2">{item.name}</h1>
                  <h1>
                    {item.count} X {item.price} = {item.price * item.count}
                  </h1>
                </div>
                <div
                  onClick={() => dispatch(removeFromCart(item.name))}
                  className="w-5 h-5 flex cursor-pointer hover:bg-gray-300 active:animate-ping"
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
          {/** SUBTOTAL */}
          <div className="text-center text-sm ">
            <h1 className="py-3 border-t-2">Subtotal: {subTotal}</h1>
            <div className="px-5 text-white flex flex-col gap-2">
              <Link
                href="/"
                className="px-5 py-1.5 rounded-full bg-teal-500"
                onClick={() => setShowCar(!showCar)}
              >
                Continuar comprando
              </Link>

              <Link
                href="/cart"
                className="px-5 py-1.5 rounded-full bg-teal-500"
                onClick={() => setShowCar(!showCar)}
              >
                Ver carrito
              </Link>

              <h1 className="px-5 py-1.5 rounded-full bg-teal-500">Checkout</h1>
            </div>
          </div>
        </div>

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
            {carrito.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrito;
