"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  addToCart,
  changeCartQty,
  removeFromCart,
} from "@/redux/features/cartSlice";
import Rating from "@/components/Rating";
import Carrito from "@/components/Carrito";
import { useTranslations } from "next-intl";
import Detail from "@/components/Detail";
//import foto from "/public/image/boy1.jpg";

//const cargarImagen = require.context("./tu_patch_assets", true);
//<img src={cargarImagen(`./${ nombre_imagen }.jpg`)} alt={nombre_imagen} />

const Product = ({ params }: any) => {
  const data = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.carrito);
  const [qty, setQty] = useState(1);
  const t = useTranslations("Product");

  const dispatch = useAppDispatch();

  let name = params.name.replaceAll("-", " ");
  //console.log(name);
  let name2 = name.replace(/\b[a-z]/g, (c: any) => c.toUpperCase());
  //console.log(name2);

  useEffect(() => {
    let [itemCart] = cart.filter((item) => item.name === name2);
    if (itemCart) setQty(itemCart.qty);
  }, [cart]);

  const [item] = data.filter((item) => item.name === name2);

  return (
    <div className="flex flex-col items-center">
      <div className="lg:w-[1024px] lg:pt-10" id="view">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="flex w-full bg-gray-200">
            <Image
              src={require(`/public/image/${item.image}`)}
              alt="Amigurumi"
              //fill
              sizes=""
              style={{
                width: "100%",
                height: "auto",
                //objectFit: "cover",
                //objectPosition: "50% 20%",
              }}
            />
          </div>

          <div className="py-5 px-10">
            <h1 className="uppercase font-bold">{item.name}</h1>
            <h2 className="text-xs text-gray-500 mb-5">
              {t("code")}
              {" " +
                item.category.substr(0, 2).toUpperCase() +
                item.name.substr(0, 3).toUpperCase() +
                item.rating +
                item.price +
                "-26"}
            </h2>
            <div className="pr-5 flex flex-row justify-between">
              <h1 className={`text-2xl font-extralight `}>€{item.price}.00</h1>
              <div className="mb-2 text-teal-500 pointer-events-none flex flex-col items-center ">
                <Rating rating={item.rating} />
                <span className="pt-1 text-xs text-gray-500">
                  {"(" + (item.price - 19) + ")"} Reviews
                </span>
              </div>
            </div>

            <div className="border-t text-sm text-gray-700 py-5">
              <h1 className="mb-2">
                <strong>{t("materials")}:</strong> {t("materialText1")} <br />{" "}
                {t("materialText2")}
              </h1>
              <h1 className="mb-2">
                <strong>{t("size")}:</strong> 26 cm
              </h1>
              <h1 className="">{t("delivery")}</h1>
            </div>

            <div className="flex flex-row items-center ">
              {/** CANTIDAD */}
              <div className="flex flex-row items-center justify-between pr-5">
                <div className="border-[1px] border-gray-500 flex flex-row items-center justify-center text-center">
                  <button
                    //onClick={() => dispatch(changeCartQty(qty - 1))}
                    onClick={() =>
                      cart.some((p) => p.name === item.name)
                        ? dispatch(
                            changeCartQty({
                              name: item.name,
                              qty: qty - 1,
                            })
                          )
                        : setQty(qty - 1)
                    }
                    disabled={qty === 1 ? true : false}
                    className="w-9 h-9 text-lg"
                  >
                    -
                  </button>

                  <span className="w-10 h-7 py-1.5 text-sm ">{qty}</span>

                  <button
                    //onClick={() => setQty(qty + 1)}
                    onClick={() =>
                      cart.some((p) => p.name === item.name)
                        ? dispatch(
                            changeCartQty({
                              name: item.name,
                              qty: qty + 1,
                            })
                          )
                        : setQty(qty + 1)
                    }
                    disabled={qty === 5 ? true : false}
                    className="w-9 h-9 text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/** ADD TO CART */}
              <div className="text-white text-sm font-bold ">
                {cart.some((p) => p.name === item.name) ? (
                  <button
                    onClick={() => dispatch(removeFromCart(item.name))}
                    className="bg-gradient-to-br from-pink-500 to-red-500 Xbg-pink-500 Xuppercase rounded-sm px-4 py-2 cursor-pointer active:animate-ping"
                  >
                    {t("delete")}
                  </button>
                ) : (
                  <button
                    disabled={!item.inStock}
                    onClick={() => dispatch(addToCart({ ...item, qty }))}
                    className={`Xuppercase rounded-sm px-4 py-2 ${
                      item.inStock
                        ? "bg-gradient-to-br from-teal-500 to-indigo-500 Xbg-teal-500 cursor-pointer active:animate-ping"
                        : "bg-teal-500/70"
                    } `}
                  >
                    {!item.inStock ? t("soldOut") : t("add")}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/** DESCRIPTION */}
        <div className="p-10 text-xs border-t text-justify">
          <Detail />
        </div>

        <Carrito />
      </div>
    </div>
  );
};

export default Product;
