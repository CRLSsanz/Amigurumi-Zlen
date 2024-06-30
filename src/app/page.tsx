"use client";
import { useState } from "react";

const BDAmigurumi = [
  {
    name: "Abuelitos Cariñosos Amigurumi",
    image: "abu1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/abu1.jpg')]",
  },

  {
    name: "Animales Grupo #1",
    image: "animales1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales1.jpg')]",
  },
  {
    name: "Animales Grupo #2",
    image: "animales2.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales2.jpg')]",
  },
  {
    name: "Animales Grupo #3",
    image: "animales3.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales3.jpg')]",
  },
  {
    name: "Animales Grupo #4",
    image: "animales4.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales4.jpg')]",
  },
  {
    name: "Animales Grupo #5",
    image: "animales5.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales5.jpg')]",
  },
  {
    name: "Animales Grupo #6",
    image: "animales6.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales6.avif')]",
  },
  {
    name: "Banana Funny Amigurumi",
    image: "banana1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/banana1.jpg')]",
  },
  {
    name: "Beimax Grandes Heroes Amigurumi",
    image: "baymax1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/baymax1.jpg')]",
  },
  {
    name: "Hash Pokemon Amigurumi",
    image: "boy1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/boy1.jpg')]",
  },
  {
    name: "Joven Cool Amigurumi",
    image: "boy2.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/boy2.jpg')]",
  },
  {
    name: "Captus Baby Amigurumi",
    image: "captus1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/captus1.jpg')]",
  },
  {
    name: "Captus Chibi Amigurumi",
    image: "captus2.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/captus2.jpg')]",
  },
  {
    name: "Captus Amoroso Amigurumi",
    image: "captus3.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/captus3.jpg')]",
  },
  {
    name: "Captus Funny Amigurumi",
    image: "captus4.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/captus4.jpg')]",
  },
  {
    name: "Chuky Chibi Amigurumi",
    image: "chuky1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/chuky1.jpg')]",
  },
  {
    name: "Chuky Boy Amigurumi",
    image: "chuky2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/chuky2.jpg')]",
  },
  {
    name: "Chuky Boy Amigurumi",
    image: "chuky3.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/chuky3.jpg')]",
  },
  {
    name: "Perro Amigurumi",
    image: "dog1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/dog1.jpg')]",
  },
  {
    name: "Dragon Amigurumi",
    image: "dragon1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/dragon1.jpg')]",
  },
  {
    name: "Dragon Chibi Amigurumi",
    image: "dragon2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/dragon2.jpg')]",
  },
  {
    name: "Dragon Teal Amigurumi",
    image: "dragon3.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/dragon3.jpg')]",
  },
  {
    name: "Oso Exotic Amigurumi",
    image: "exotic1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/exotic1.png')]",
  },
  {
    name: "Gato Exotic Amigurumi",
    image: "exotic2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/exotic2.jpg')]",
  },
  {
    name: "Girl Bella Amigurumi",
    image: "girl1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl1.jpg')]",
  },
  {
    name: "Girl Con Moños Amigurumi",
    image: "girl2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl2.jpg')]",
  },
  {
    name: "Girl Ballet Amigurumi",
    image: "girl3.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl3.jpg')]",
  },
  {
    name: "Bella Bailarina Amigurumi",
    image: "girl4.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl4.jpg')]",
  },
  {
    name: "Cabello Largo Amigurumi",
    image: "girl5.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl5.jpg')]",
  },
  {
    name: "Girl Primeros Pasos Amigurumi",
    image: "girl6.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl6.jpg')]",
  },
  {
    name: "Gotic Amigurumi #1",
    image: "gotic1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/gotic1.jpg')]",
  },
  {
    name: "Gotic Amigurumi #2",
    image: "gotic2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/gotic2.avif')]",
  },
  {
    name: "Lana Amigurumi #1",
    image: "lana1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/lana1.jpg')]",
  },
  {
    name: "Lana Amigurumi #2",
    image: "lana2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/lana2.jpg')]",
  },
  {
    name: "Lana Amigurumi #3",
    image: "lana3.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/lana3.jpg')]",
  },
  {
    name: "Mono y su Banana Amigurumi",
    image: "monky1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/monky1.jpg')]",
  },
  {
    name: "Mono y su Banana Amigurumi #2",
    image: "monky2.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/monky2.jpg')]",
  },
  {
    name: "Mono y su Banana Amigurumi #3",
    image: "monky3.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/monky3.jpg')]",
  },
  {
    name: "Oruga Amigurumi",
    image: "oruga1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/oruga1.jpg')]",
  },
  {
    name: "Peluches Amigurumi",
    image: "peluche1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/peluche1.jpg')]",
  },
  {
    name: "Pokemones Chibi Amigurumi",
    image: "pokemon1.jpg",
    price: 39,
    bgAvatar: "bg-[url('/image/pokemon1.jpg')]",
  },
  {
    name: "Pokemon Amigurumi #2",
    image: "pokemon2.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pokemon2.jpg')]",
  },
  {
    name: "Pokemon Hash Amigurumi",
    image: "pokemon3.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pokemon3.jpg')]",
  },
  {
    name: "Pokemon Amigurumi #4",
    image: "pokemon4.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pokemon4.jpg')]",
  },
  {
    name: "Giglipo Amigurumi",
    image: "pokemon6.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pokemon6.jpg')]",
  },
  {
    name: "Scuero Amigurumi",
    image: "pokemon7.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pokemon7.jpg')]",
  },
  {
    name: "Pony Tierno Amigurumi",
    image: "pony1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pony1.jpg')]",
  },
  {
    name: "Conejo Azul Amigurumi",
    image: "rabbit1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/rabbit1.jpg')]",
  },
  {
    name: "Bella Coneja Amigurumi",
    image: "rabbit2.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/rabbit2.jpg')]",
  },
  {
    name: "Conejo de Invierno Amigurumi",
    image: "rabbit3.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/rabbit3.jpg')]",
  },
  {
    name: "Conejita Amigurumi",
    image: "rabbit4.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/rabbit4.jpg')]",
  },
  {
    name: "Conejo Chibi Amigurumi",
    image: "rabbit5.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/rabbit5.jpg')]",
  },
  {
    name: "Reno Amigurumi",
    image: "reno1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/reno1.jpg')]",
  },
  {
    name: "Unicornio Amigurumi",
    image: "unicornio1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/unicornio1.jpg')]",
  },
  {
    name: "Winnie Pooh Amigurumi #1",
    image: "winniepooh1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/winniepooh1.jpg')]",
  },
];

export default function Home() {
  const [showCar, setShowCar] = useState(false);

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
          {BDAmigurumi.length} Diseños Encontrados{" "}
        </div>
        {BDAmigurumi.map((item, index) => (
          <div key={index} className="w-full mb-10 text-center">
            <div
              className={`w-[300px] h-[250px] bg-cover Xbg-fixed bg-[50%] ${item.bgAvatar} `}
            >
              <h1 className="hidden"> bgAvatar</h1>
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
