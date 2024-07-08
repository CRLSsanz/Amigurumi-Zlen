"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { changeCartQty, removeFromCart } from "@/redux/features/cartSlice";
import Link from "next/link";
import Image from "next/image";
import WhatsApp from "@/components/WhatsApp";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);

  const cart = useAppSelector((state) => state.carrito);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSubTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  if (cart.length === 0)
    return (
      <div className="w-full mb-40">
        <h1 className="font-bold p-5">Tu Carrito</h1>
        <div className="uppercase text-[10px] tracking-widest w-full border-b text-gray-400 py-4 pl-5 mb-5">
          tu carrito esta vacio
        </div>
        <Link
          href="/#view"
          className="flex p-2 mx-5 bg-gradient-to-br from-teal-500 to-indigo-500  rounded-full"
        >
          <h1 className="w-full text-sm text-center text-white">
            Volver a la tienda
          </h1>
        </Link>
      </div>
    );

  const disminuirItem = (name: any, qty: any) => {
    dispatch(
      changeCartQty({
        name: name,
        qty: qty - 1,
      })
    );

    if (qty === 1) dispatch(removeFromCart(name));
  };

  return (
    <section className="w-full bg-gray-100 flex flex-col items-center">
      <div className="w-full lg:max-w-[1024px] ">
        <div
          id="view"
          className="flex flex-row items-center justify-between p-5"
        >
          <h1>Tu Carrito</h1>
        </div>
        <div className="w-full lg:max-w-[1024px] lg:flex lg:flex-row">
          {/** TABLA */}
          <table className="Xhidden lg:basis-2/3 lg:block table-fixed border-collapse">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest border-b text-gray-400 ">
                <th className="py-4 pl-5 text-start">Producto </th>
                <th className="py-4 pr-5 text-end text-transparent lg:text-gray-400">
                  Cantidad
                </th>
                <th className="py-4 pr-5 text-end">subTotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={index}
                  className="text-sm transition-all duration-500 Xborder-b-2 "
                >
                  <td className="py-5 pl-5 align-top">
                    <div className="relative w-28 h-28 lg:h-28 lg:w-36">
                      <Link
                        href={`/product/${item.name
                          .replaceAll(" ", "-")
                          .toLowerCase()}#view`}
                      >
                        <Image
                          src={require(`/public/image/${item.image}`)}
                          alt="Amigurumi"
                          fill
                          sizes=""
                          //width={250}
                          //height={200}
                          style={{
                            objectFit: "cover", // cover, contain, none
                            objectPosition: "50% 50%",
                          }}
                        />
                      </Link>
                    </div>
                  </td>

                  <td className="w-full py-5 pl-5 align-top">
                    <div className="w-full flex flex-col lg:flex-row lg:justify-between ">
                      <div className="Xmb-3">
                        <h1 className="w-32 lg:w-44 mb-2 leading-4 font-bold">
                          {item.name}
                        </h1>
                        <h1 className="text-gray-600 text-xs mb-2 tracking-widest">
                          ${item.price}.00
                        </h1>
                        <h1 className="hidden lg:block text-gray-600 text-xs">
                          Contenido: {item.category}
                        </h1>
                      </div>

                      <div className="flex flex-row items-center">
                        <div className="border-[1px] border-gray-500 flex flex-row items-center justify-center text-center mr-5">
                          <button
                            onClick={() => disminuirItem(item.name, item.qty)}
                            disabled={item.qty < 0 ? true : false}
                            className="w-9 h-9 text-base"
                          >
                            -
                          </button>

                          <h1 className="w-10 h-7 py-1.5 text-xs">
                            {item.qty}
                          </h1>

                          <button
                            onClick={() =>
                              dispatch(
                                changeCartQty({
                                  name: item.name,
                                  qty: item.qty + 1,
                                })
                              )
                            }
                            disabled={item.qty === 5 ? true : false}
                            className="w-9 h-9 text-base"
                          >
                            +
                          </button>
                        </div>

                        <div
                          onClick={() => dispatch(removeFromCart(item.name))}
                          className="w-6 h-6 flex justify-center items-center text-gray-600  cursor-pointer"
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
                    </div>
                  </td>

                  <td className="py-5 pr-5 tracking-wider text-end align-top">
                    <div className="">${item.price * item.qty}.00</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/** SUBTOTAL */}
          <div className="lg:basis-1/3 p-5 lg:p-0 lg:ml-5 ">
            <h1 className="hidden w-full p-3  mb-2 shadow-md">
              O ¿eres una empresa? solicitud de factura
            </h1>

            <div className="px-5 text-xs bg-gray-200 flex flex-col justify-center items-center">
              <h1 className="w-full Xpy-4 h-12 text-end border-b border-gray-300">
                {" "}
              </h1>

              <div className="w-full flex flex-row justify-between py-5 border-b border-gray-300">
                <h1 className=" font-bold">Envio:</h1>
                <div className="flex flex-col text-end">
                  <h1 className="">Precio fijo: $8.00</h1>
                  <h1 className="mb-2">Enviar a Atlantico</h1>
                  <h1 className="">Cambiar direccion</h1>
                </div>
              </div>

              <div className="w-full text-base font-bold flex flex-row justify-between py-3">
                <h1 className="font-bold">Total:</h1>
                <h1 className="tracking-wider">${subTotal + 8}.00</h1>
              </div>

              <div className="flex mb-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-700 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-xs cursor-pointer"
                >
                  He leido y acepto las{" "}
                  <strong className="underline">Condiciones de venta</strong>
                </label>
              </div>
              <div className="flex mb-5">
                <input
                  id="default-checkbox2"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-700 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="default-checkbox2"
                  className="ms-2 text-xs cursor-pointer"
                >
                  He leido y acepto las{" "}
                  <strong className="underline">Politica de Privacidad</strong>
                </label>
              </div>

              <div className="w-full text-white text-center font-bold flex flex-col">
                <h1 className=" py-3 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 cursor-pointer mb-5">
                  Procede a Checkout
                </h1>

                <div className="flex flex-row justify-center items-center py-1.5 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 cursor-pointer mb-5">
                  <WhatsApp text={"Pedir por Whatsapp "} size={28} />
                </div>

                <Link
                  href="/#view"
                  className=" hidden w-full p-2 px-5 bg-gray-400  rounded-full"
                >
                  <h1 className=" text-sm text-center text-white whitespace-nowrap">
                    Volver a la tienda
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link href="/#view" className="w-full flex px-5 mb-10">
        <h1 className="w-full text-center text-sm py-2 mb-5 border border-gray-500 active:bg-teal-400 active:text-white active:border-transparent rounded-sm">
          Volver a la tienda
        </h1>
      </Link>
    </section>
  );
};

export default Cart;
