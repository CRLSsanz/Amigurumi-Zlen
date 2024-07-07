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
//import foto from "/public/image/boy1.jpg";

//const cargarImagen = require.context("./tu_patch_assets", true);
//<img src={cargarImagen(`./${ nombre_imagen }.jpg`)} alt={nombre_imagen} />

const Product = ({ params }: any) => {
  const data = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.carrito);
  const [qty, setQty] = useState(1);

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
    <div className="">
      <div className="flex w-full bg-red-300">
        <Image
          //src={require("/public/image/boy2.jpg")}
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

      <div className="py-10 px-5">
        <h1 className="uppercase font-bold">{item.name}</h1>
        <h2 className="text-xs text-gray-500 mb-5">
          Codigo del producto: 0462-83
        </h2>
        <div className="text-sm text-gray-700 mb-5">
          <h1 className="mb-2">
            <strong>Materiales:</strong> 100% algodón <br /> con relleno
            siliconado
          </h1>
          <h1 className="mb-2">
            <strong>Tamaño Amigurumi:</strong> 26 cm
          </h1>
          <h1 className="">
            Todos nuestros Amigurumis se enviarán de 10 a 15 días después de su
            pago
          </h1>
        </div>

        <h1 className={`text-lg text-blue-600 font-bold `}>
          $ {item.price}.00
        </h1>
        <div className="pointer-events-none flex flex-row items-center text-gray-500 mb-5">
          <Rating rating={item.rating} />
        </div>

        <div className="flex flex-row items-center ">
          {/** CANTIDAD */}
          <div className="flex flex-row items-center justify-between pr-10">
            <div className="border-2 flex flex-row items-center justify-center text-center">
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
          <div className="Xabsolute Xbottom-5 Xright-5">
            {cart.some((p) => p.name === item.name) ? (
              <button
                onClick={() => dispatch(removeFromCart(item.name))}
                className="w-full  bg-red-500 text-white text-sm font-bold rounded-sm px-3 py-2 cursor-pointer active:animate-ping"
              >
                Quitar del carrito
              </button>
            ) : (
              <button
                disabled={!item.inStock}
                onClick={() => dispatch(addToCart({ ...item, qty }))}
                className={`w-full text-white text-sm font-bold rounded-sm px-3 py-2 ${
                  item.inStock
                    ? "bg-blue-500 cursor-pointer active:animate-ping"
                    : "bg-blue-400"
                } `}
              >
                {!item.inStock ? "Producto agotado" : "Agregar al carrito"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/** DESCRIPTION */}
      <div className="p-10 text-xs border-t text-justify">
        <h1 className="text-sm font-bold mb-5">Descripcion</h1>
        <p>
          Descubre nuestra colección de encantadores amigurumis hechos a mano
          con materiales de alta calidad. <br /> Cada pieza es única y se
          caracteriza por su cuidado diseño y atención a los detalles. <br />
          <br /> Ten en cuenta que debido a su fabricación artesanal, puede
          haber ligeras variaciones en tamaños y colores, lo que añade aún más
          exclusividad a cada amigurumi. <br />
          <br />
          ¡Haz que la magia de los amigurumis cobre vida en tus manos! Material:
          Algodón 100% de alta calidad. <br />
          <br />
          Tamaño Amigurumi: 26 cm. <br />
          <br />
          Instrucciones de cuidado: <br />
          <br />
          1️⃣ Usa agua tibia y un detergente suave. Evita productos agresivos que
          puedan dañar las fibras del amigurumi. <br />
          <br />
          2️⃣ Lávalos a mano con delicadeza. Frota suavemente para eliminar la
          suciedad sin deformar los detalles. <br />
          <br />
          3️⃣ Enjuaga bien para eliminar todo el detergente. Asegúrate de no
          dejar residuos que puedan afectar la textura. <br />
          <br />
          4️⃣ Exprime suavemente para eliminar el exceso de agua, sin
          retorcerlos. Un truco es envolverlos en una toalla absorbente y
          presionar suavemente. <br />
          <br />
          5️⃣ Déjalos secar al aire libre, evitando la exposición directa al sol.
          Puedes colocarlos sobre una toalla o rejilla para mantener su forma.{" "}
          <br />
          <br />
          ¡Y listo! Tu amigurumi estará fresco y listo para más aventuras.{" "}
          <br />
          <br />
          Recuerda que el cuidado adecuado prolongará su vida útil y mantendrá
          su encanto. <br />
          <br />
          💕✨{" "}
          <span className="font-bold text-sm">
            Un patrón y diseño de ZLEN Desing
          </span>
          <br />
          <br />
          Todos nuestros Amigurumis se enviarán de 10 a 15 días después de su
          pago
        </p>
      </div>

      <Carrito />
    </div>
  );
};

export default Product;
