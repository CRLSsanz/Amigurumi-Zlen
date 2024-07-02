"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/features/cartSlice";
import Link from "next/link";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const cart = useAppSelector((state) => state.carrito);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSubTotal(cart.reduce((acc, curr) => acc + curr.price * curr.count, 0));
  }, [cart]);

  if (cart.length === 0)
    return (
      <div className="w-full p-5 mb-20">
        <h1 className="font-bold p-5">Tu carrito</h1>
        <div className="text-xs w-full border mb-5 p-3">
          tu carrito esta vacio
        </div>
        <Link href="/#list" className="flex p-3 bg-teal-400  rounded-full">
          <h1 className="w-full text-center text-white">Volver a la tienda</h1>
        </Link>
      </div>
    );

  return (
    <section className="w-full bg-gray-100 flex flex-col items-center">
      <div className="w-full lg:max-w-[1024px] py-5 lg:p-5 lg:flex lg:flex-row">
        {/** TABLA */}
        <table className="lg:basis-2/3 table-cell border-collapse border border-gray-200 mb-20">
          <thead>
            <tr className="text-sm border border-gray-200 bg-gray-200">
              <th className="py-4 pr-4"></th>
              <th className="py-4 pr-4"></th>
              <th className="py-4 pr-4">Producto</th>
              <th className="py-4 pr-4">Precio</th>
              <th className="py-4 pr-4">Cantidad</th>
              <th className="py-4 pr-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="text-xs border border-gray-200 ">
                <td className="py-2 px-5">
                  <div className="w-6 h-6 flex justify-center items-center text-gray-400 border rounded-full border-gray-400 cursor-pointer">
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
                </td>
                <td className="py-2">
                  <img
                    src={`./image/${item.image}`}
                    alt=""
                    className="w-28 h-20 rounded-lg "
                  />
                </td>
                <td className="py-2 px-5">{item.name}</td>
                <td className="py-2 pr-3 tracking-wider">${item.price}.00</td>
                <td className="py-2 pr-3">{item.count}</td>
                <td className="py-2 pr-3 tracking-wider">
                  ${item.price * item.count}.00
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/** LISTA */}
        <div className="p-5">
          <h1 className="font-bold p-5">Tu carrito</h1>

          {cart?.map((item, index) => (
            <div
              key={index}
              className="text-xs flex flex-col justify-center items-center border-2 mb-5"
            >
              <div className="w-full flex flex-row justify-between">
                <div></div>
                <img src={`./image/${item.image}`} alt="" className="w-32" />
                <div
                  onClick={() => dispatch(removeFromCart(item.name))}
                  className="mt-2 mr-2 w-5 h-5 flex cursor-pointer hover:bg-gray-300 active:animate-ping"
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
              <div className="w-full flex flex-row justify-between p-3 border-b-2 border-t-2">
                <h1 className="font-bold">Producto:</h1>
                <h1 className="">{item.name}</h1>
              </div>
              <div className="w-full flex flex-row justify-between p-3 border-b-2">
                <h1 className="font-bold">Precio:</h1>
                <h1 className="">${item.price}.00</h1>
              </div>
              <div className="w-full flex flex-row justify-between p-3 border-b-2">
                <h1 className="font-bold">Cantidad:</h1>
                <div className="border-2 flex flex-row items-center justify-center text-center">
                  <span className="w-7 h-7 text-lg">-</span>

                  <span className="w-7 h-7 border-l-2 border-r-2">
                    {item.count}
                  </span>

                  <span className="w-7 h-7 text-lg">+</span>
                </div>
              </div>
              <div className="w-full flex flex-row justify-between p-3">
                <h1 className="font-bold">Sub Total</h1>
                <h1>${item.price * item.count}.00</h1>
              </div>
            </div>
          ))}
        </div>

        {/** SUBTOTAL */}
        <div className="lg:basis-1/3 p-5">
          <div className="text-xs flex flex-col justify-center items-center border-2">
            <h1 className="text-base w-full py-4 px-3 bg-gray-200">
              Totales del Carrito
            </h1>
            <div className="w-full flex flex-row justify-between p-3 border-b-2 border-t-2">
              <h1 className="font-bold">SubTotal:</h1>
              <h1 className="">${subTotal}.00</h1>
            </div>
            <div className="w-full flex flex-row justify-between p-3 border-b-2">
              <h1 className="font-bold">Envio:</h1>
              <div className="flex flex-col text-end">
                <h1 className="">Precio fijo: $8.00</h1>
                <h1 className="mb-3">Enviar a Atlantico</h1>
                <h1 className="border-b-2">Cambiar direccion</h1>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between p-3 border-b-2">
              <h1 className="font-bold">Total:</h1>
              <h1>${subTotal + 8}.00</h1>
            </div>
            <div className="w-full flex flex-col px-3 py-5">
              <h1 className="font-bold mb-5">Tienes un cupon?</h1>
              <h1 className="text-center text-white py-3 rounded-full bg-teal-500 cursor-pointer">
                Finalizar Pedido
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row"></div>

        <div className="h-20"></div>
      </div>
    </section>
  );
};

export default Cart;
