"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { changeCartQty, removeFromCart } from "@/redux/features/cartSlice";
import Link from "next/link";
import { count } from "console";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [qty, setQty] = useState(0);

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
        <Link href="/#view" className="flex p-3 bg-teal-400  rounded-full">
          <h1 className="w-full text-center text-white">Volver a la tienda</h1>
        </Link>
      </div>
    );

  return (
    <section className="w-full bg-gray-100 flex flex-col items-center">
      <div className="w-full lg:max-w-[1024px] ">
        <h1 id="view" className=" text-start border-b-2 border-gray-500 p-5">
          Carrito de Compras
          <span className="font-bold text-gray-400">
            {` (${cart.length})  `}
          </span>
        </h1>
        <div className="w-full lg:max-w-[1024px] lg:flex lg:flex-row">
          {/** TABLA */}
          <table className="hidden lg:basis-2/3 lg:block table-auto border-collapse">
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
                  </td>
                  <td className="py-2">
                    <img
                      src={`./image/${item.image}`}
                      alt=""
                      className="w-28 h-20 rounded-lg "
                    />
                  </td>
                  <td className="py-2 px-5 w-auto">{item.name}</td>
                  <td className="py-2 pr-3 tracking-wider">${item.price}.00</td>
                  <td className="py-2 pr-3">{item.count}</td>
                  <td className="py-2 pr-3 tracking-wider">
                    ${item.price * item.count}.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/** LIST ON MOVIL*/}
          <div className="w-full lg:hidden p-5">
            {cart?.map((item, index) => (
              <div
                key={index}
                className="w-full text-xs flex flex-col justify-center items-center border-2 mb-5"
              >
                <div className="w-full pl-3 flex flex-row items-center border-b-2">
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
                  <div className="w-full flex flex-row justify-between p-3">
                    <h1 className="font-bold">Producto:</h1>
                    <h1 className="">{item.name}</h1>
                  </div>
                </div>
                <div className="w-full flex flex-row">
                  <div className="basis-1/2 Xp-3">
                    <img
                      src={`./image/${item.image}`}
                      alt="Amigurumi"
                      className="w-full h-36"
                      style={{
                        //width: "320px",
                        //height: "240px",
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 20%",
                      }}
                    />
                  </div>

                  <div className="basis-1/2 w-full ">
                    <div className="w-full flex flex-row justify-between p-3 border-b-2">
                      <h1 className="font-bold ">Precio:</h1>
                      <h1 className="tracking-wider">${item.price}.00</h1>
                    </div>
                    <div className="w-full flex flex-row items-center justify-between pr-1 py-3 border-b-2">
                      <h1 className="font-bold pl-3">Cantidad:</h1>
                      <div className="border-2 flex flex-row items-center justify-center text-center">
                        <button
                          onClick={() =>
                            dispatch(
                              changeCartQty({
                                name: item.name,
                                count: item.count - 1,
                              })
                            )
                          }
                          disabled={item.count === 1 ? true : false}
                          className="w-7 h-7 text-lg"
                        >
                          -
                        </button>

                        <span className="w-7 h-7 py-1.5 border-l-2 border-r-2">
                          {item.count}
                        </span>

                        <button
                          onClick={() =>
                            dispatch(
                              changeCartQty({
                                name: item.name,
                                count: item.count + 1,
                              })
                            )
                          }
                          disabled={item.count === 5 ? true : false}
                          className="w-7 h-7 text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between p-3">
                      <h1 className="font-bold">SubTotal:</h1>
                      <h1 className="tracking-wider">
                        ${item.price * item.count}.00
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/** SUBTOTAL */}
          <div className="lg:basis-1/3 p-5 lg:p-0 lg:ml-5">
            <div className="text-xs flex flex-col justify-center items-center border-2">
              <h1 className="text-base w-full py-3 px-3 bg-gray-200">
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

          <div className="flex flex-col lg:flex-row "></div>

          <div className="h-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
