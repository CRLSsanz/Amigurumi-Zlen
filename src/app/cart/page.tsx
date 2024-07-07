"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { changeCartQty, removeFromCart } from "@/redux/features/cartSlice";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);

  const cart = useAppSelector((state) => state.carrito);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSubTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  if (cart.length === 0)
    return (
      <div className="w-full p-5 mb-20">
        <h1 className="font-bold p-5">Tu carrito</h1>
        <div className="text-xs w-full border mb-5 p-3">
          tu carrito esta vacio
        </div>
        <Link href="/#view" className="flex p-3 bg-teal-500  rounded-full">
          <h1 className="w-full text-center text-white">Volver a la tienda</h1>
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
          className="flex flex-row items-center justify-between  p-5"
        >
          <h1>Tu Carrito</h1>
          <span className="text-xs font-bold text-gray-400">
            Seguir comprando
          </span>
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
                <th className="py-4 pr-5 text-end">Total</th>
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
                    </div>
                  </td>

                  <td className="w-full py-5 pl-5 align-top">
                    <div className="w-full flex flex-col lg:flex-row lg:justify-between ">
                      <div className="Xmb-3">
                        <Link
                          href={`/product/${item.name
                            .replaceAll(" ", "-")
                            .toLowerCase()}`}
                          className="w-32 lg:w-44 mb-2 font-bold"
                        >
                          {item.name}
                        </Link>
                        <h1 className="text-gray-600 text-xs mb-2">
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
          <div className="lg:basis-1/3 px-5 pt-10 lg:p-0 lg:ml-5 mb-20">
            <div className="text-xs flex flex-col justify-center items-center border-2">
              <h1 className="text-base w-full py-3 px-3 bg-gray-200">
                Totales del Carrito
              </h1>
              <div className="w-full flex flex-row justify-between p-3 border-b-2 border-t-2">
                <h1 className="font-bold">SubTotal:</h1>
                <h1 className="tracking-wider">${subTotal}.00</h1>
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
                <h1 className="tracking-wider">${subTotal + 8}.00</h1>
              </div>
              <div className="w-full flex flex-col px-3 py-5">
                <h1 className="font-bold mb-5">Tienes un cupon?</h1>
                <h1 className="text-center text-white py-3 rounded-full bg-teal-500 cursor-pointer">
                  Finalizar Pedido
                </h1>
              </div>
            </div>
          </div>

          {/** VOLVER */}
          <div className="lg:hidden w-full flex justify-center p-3 mb-5">
            <Link href="/#view" className=" p-2 px-5 bg-gray-400  rounded-full">
              <h1 className=" text-sm text-center text-white whitespace-nowrap">
                Volver a la tienda
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
