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
            <h1 className="text-sm mb-5">Tu carrito esta vacio</h1>
            <button
              onClick={() => setShowCar(!showCar)}
              className="bg-teal-500 px-10 py-2 rounded-full text-sm text-white"
            >
              Seguir comprando
            </button>
          </div>
        ) : (
          <div className="h-full py-5 flex flex-col justify-between">
            {/** LISTA */}
            <div className="text-sm max-h-[calc(100hv-200px))] overflow-x-scroll">
              <h1 className="text-center pb-5 mb-5 border-b-2">Tu carrito</h1>
              {carrito?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center px-5 Xbg-red-200 mb-5"
                >
                  <div className=" w-24">
                    <img
                      src={`./image/${item.image}`}
                      alt="Amigurumi"
                      className="rounded-lg"
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 20%",
                      }}
                    />
                    <h1 className="hidden w-20 h-20 bg-sky-300">hola</h1>
                  </div>

                  <div className=" Xtext-gray-400 w-full pr-4">
                    <h1 className=" text-xs text-gray-600 ">{item.name}</h1>
                    <h1 className=" tracking-wider">
                      {item.qty} X ${item.price}.00 = ${item.price * item.qty}
                      .00
                    </h1>
                  </div>

                  <div
                    onClick={() => dispatch(removeFromCart(item.name))}
                    className="w-6 h-6 flex justify-center items-center text-gray-400 border rounded-full border-gray-400 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            {/** SUBTOTAL */}
            <div className="text-center text-sm ">
              <h1 className="py-4 border-t-2 font-bold">
                Total estimado: ${subTotal}.00
              </h1>
              <div className="px-2 text-white flex flex-col">
                <Link
                  href="/cart/#view"
                  className="px-5 py-2.5 rounded-full bg-teal-500 mb-4"
                  onClick={() => setShowCar(!showCar)}
                >
                  Ver carrito
                </Link>

                <h1
                  //href="/#view"
                  className="px-5 py-2.5 rounded-full bg-black cursor-pointer"
                  onClick={() => setShowCar(!showCar)}
                >
                  Hacer Pedido
                </h1>
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
            {carrito.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrito;
