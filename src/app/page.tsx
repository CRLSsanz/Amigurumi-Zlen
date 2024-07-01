"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProduct } from "@/redux/features/carritoSlice";

export default function Home() {
  const [showCar, setShowCar] = useState(false);
  const data = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  return (
    <main className="w-full bg-gray-100 flex min-h-screen flex-col items-center">
      {/** NAVBAR */}
      <div className="w-full lg:max-w-[1024px] py-5 lg:p-5 lg:flex lg:flex-row">
        {/** LOGO */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-2">
          <div className="Xbg-sky-300">
            <img
              src="./image/logo.jpg"
              width={100}
              height={100}
              alt="logo"
              className="rounded-lg rounded-bl-[40px] rounded-tr-[40px]"
            />
          </div>
          <div className="text-center lg:text-start">
            <h1 className="text-xl font-bold tracking-widest text-gray-800">
              ZLEN
            </h1>
            <h1 className=" text-gray-500 xuppercase tracking-widest text-xs">
              Amigurumi hecho <br /> a mano
            </h1>
          </div>
        </div>

        {/** LINK */}
        <ul className="lg:relative w-full p-10 lg:py-5 lg:flex lg:flex-row lg:items-center cursor-pointer">
          <li
            onClick={() => setShowCar(!showCar)}
            className="py-3 px-5 border-b border-gray-300 lg:border-transparent flex flex-row justify-between"
          >
            <h1 className="lg:mr-3">Amigurumi</h1>
            <div
              className={`w-4 h-4 ${showCar ? "-rotate-90" : " rotate-90 "}`}
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </li>
          <div
            hidden={!showCar}
            className="lg:absolute top-20 left-10 lg:bg-gray-100 lg:shadow-lg lg:shadow-black "
          >
            <li className="py-3 px-10 border-b border-gray-300">· Animales</li>
            <li className="py-3 px-10 border-b border-gray-300">
              · Divertidos
            </li>
            <li className="py-3 px-10 border-b border-gray-300">· Muñecos</li>
            <li className="py-3 px-10 border-b border-gray-300">· Pokemon</li>
          </div>
          <li className="py-3 px-5 border-b border-gray-300 lg:border-transparent whitespace-nowrap">
            Nuevos diseños
          </li>
          <li className="py-3 px-5 border-b border-gray-300 lg:border-transparent whitespace-nowrap">
            Acerca de
          </li>
          <li className="py-3 px-5 border-b border-gray-300 lg:border-transparent">
            Contacto
          </li>
        </ul>
      </div>

      {/** MAIN*/}
      <div className="w-full flex flex-col items-center">
        <div className="md:hidden w-full bg-red-300 mb-10 ">
          <img src="./image/fondo1.jpg" alt="" />
        </div>
        <div
          className={`hidden md:flex w-full md:h-[calc(100vh-180px)] bg-cover Xbg-fixed bg-[50%] bg-[url('/image/fondo2.jpg')] mb-10 `}
        >
          <h1 className="hidden"> bgAvatar</h1>
        </div>

        <p className="lg:max-w-[500px] px-5 text-xs text-center mb-5 leading-5">
          ¡Bienvenidos a nuestra tienda online de amigurumis únicos! Descubre
          una colección encantadora de adorables muñecos tejidos a mano con
          materiales de alta calidad. Sumérgete en un mundo lleno de color,
          ternura y creatividad, donde cada amigurumi es una pequeña obra de
          arte.
        </p>
        <p className="lg:max-w-[500px] px-5 text-xs text-center mb-5 leading-5">
          Te invitamos a explorar nuestro catálogo y encontrar el compañero
          perfecto que alegrará tu vida o será el regalo ideal para alguien
          especial. ¡Prepárate para abrazar la dulzura de los amigurumis y
          desatar tu imaginación en nuestra tienda en línea!
        </p>
        <h1 className="text-center bg-teal-500 px-5 py-2 rounded-full text-white mb-10">
          Saber mas de ZLEN
        </h1>
      </div>

      {/** LIST <img src={`./image/${item.name}.jpg`} alt="" /> */}
      <div className="p-5 lg:grid lg:grid-cols-3 lg:gap-5">
        <div className="lg:col-span-3 text-end mb-5">
          {data?.length} Diseños Encontrados{" "}
        </div>
        {data?.map((item, index) => (
          <div key={index} className="w-full mb-10 text-center">
            <div
              className={`relative w-[300px] h-[250px] bg-cover Xbg-fixed bg-[50%] ${item.bgAvatar} `}
            >
              <h1
                onClick={() => dispatch(addProduct(item))}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-lg px-3 py-1 cursor-pointer active:animate-ping"
              >
                Al carrito
              </h1>
            </div>
            <div className="hidden">
              <img src={`./image/${item.image}`} alt="" />
            </div>
            <h1 className="text-sm pt-4 "> {item.name}</h1>
            <h1 className="text-teal-500"> $ {item.price}.00</h1>
          </div>
        ))}
      </div>

      {/** BUTTON WHATSAPP */}
      <div className="fixed bottom-3 right-3 flex flex-row justify-between">
        <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-emerald-500  text-white flex justify-center items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="absolute top-1 left-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-red-500 text-white font-bold rounded-full flex justify-center items-center">
            1
          </div>
        </div>
      </div>

      {/** FOOTER */}
      <div className="border-t w-full lg:max-w-[1024px] text-sm  py-10 flex flex-col items-center">
        <div className="w-24 h-24 border-2 border-gray-600 rounded-full flex items-center justify-center mb-10 ">
          <h1 className="text-center text-lg font-bold leading-3">
            <span className="text-2xl">100%</span>{" "}
            <span className="">hecho a mano</span>
          </h1>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-5">
          <div className="text-center">
            <h1 className="font-semibold py-2">Contacto</h1>
            <h1>+39 991 044 1430</h1>
            <h1>hola@amigurumiamano.com</h1>
            <h1>Milan - Italia</h1>
          </div>
          <div className="text-center mb-5">
            <h1 className="font-semibold py-2">Terminos y condiciones</h1>
            <h1>Politicas de privacidad</h1>
            <h1>Politica de envio</h1>
            <h1>Preguntas frecuentes</h1>
          </div>
          <div className="col-span-2 w-full px-5 text-center flex flex-col items-center">
            <h1 className="font-bold text-lg mb-2">
              Suscribete y recibe noticias sobre amigurumis ZLEN!
            </h1>
            <div className="w-full flex flex-col justify-center items-center lg:flex-row">
              <input
                name="email"
                type="text"
                className="w-full p-2 border border-gray-300 bg-white mb-2 lg:mb-0 lg:mr-2"
              />
              <div className="bg-black rounded-full text-white p-2 w-32">
                Suscribete
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** COPYRIGHT */}
      <div className="w-full py-10 px-10 text-xs text-center bg-gray-200">
        <p className="mb-5">
          Copyright © 2024 ZLEN | Amigurumis | Crochet | Hecho a mano | Para
          grandes y pequeños
        </p>
        <div className="flex flex-row justify-center gap-2 font-semibold text-center text-white">
          <h1 className="py-2 w-10 rounded-lg border bg-sky-400">FB</h1>

          <h1 className="py-2 w-10 rounded-lg border bg-pink-400">IG</h1>
        </div>
      </div>
    </main>
  );
}
