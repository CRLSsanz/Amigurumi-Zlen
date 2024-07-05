"use client";
import React, { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { filterByCategory, filterByStock } from "@/redux/features/filterSlice";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [showList, setShowList] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <section className="w-full bg-gray-100 flex flex-col items-center">
      <div className="w-full lg:max-w-[1024px] py-5 lg:flex lg:flex-row">
        {/** LOGO */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-2">
          {/** <div className="Xbg-sky-300">
            <img
              src="./image/logo.jpg"
              width={100}
              height={100}
              alt="logo"
              className="rounded-lg rounded-bl-[40px] rounded-tr-[40px]"
            />
          </div> */}
          <div className="relative w-[100px] h-[100px] ">
            <Image
              src={require("/public/image/logo.jpg")}
              alt="Amigurumi"
              //fill
              sizes=""
              priority
              //style={{ objectFit: "cover", objectPosition: "50% 50%", }}
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
        <ul className="lg:relative w-full py-10 px-5 lg:px-0 lg:flex lg:flex-row lg:items-center cursor-pointer">
          <li className="py-3 px-5 border-b border-gray-300 lg:border-transparent flex flex-row justify-between">
            <Link
              href="/#view"
              onClick={() =>
                dispatch(filterByCategory("")) && setShowList(false)
              }
              className="lg:mr-3"
            >
              Amigurumi
            </Link>
            <div
              onClick={() => setShowList(!showList)}
              className={`w-4 h-4 ${showList ? "-rotate-90" : " rotate-90 "}`}
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
            hidden={!showList}
            className="lg:absolute top-20 left-5 lg:bg-gray-100 lg:shadow-lg lg:shadow-black "
          >
            <li className="py-3 border-b border-gray-300">
              <Link
                href="/#view"
                onClick={() =>
                  dispatch(filterByCategory("Animales")) &&
                  setShowList(!showList)
                }
                className="w-full py-3 px-10"
              >
                · Diseños de Animales
              </Link>
            </li>
            <li className="py-3 border-b border-gray-300">
              <Link
                href="/#view"
                onClick={() =>
                  dispatch(filterByCategory("Divertidos")) &&
                  setShowList(!showList)
                }
                className="py-3 px-10"
              >
                · Personajes y/o Divertidos
              </Link>{" "}
            </li>
            <li className="py-3 border-b border-gray-300">
              <Link
                href="/#view"
                onClick={() =>
                  dispatch(filterByCategory("Colecciones")) &&
                  setShowList(!showList)
                }
                className="py-3 px-10"
              >
                · Colecciones Amigurumis
              </Link>
            </li>
            <li className="py-3 border-b border-gray-300">
              <Link
                href="/#view"
                onClick={() =>
                  dispatch(filterByCategory("Animaciones")) &&
                  setShowList(!showList)
                }
                className="py-3 px-10"
              >
                · Personajes Animados
              </Link>{" "}
            </li>
          </div>

          <li className="py-3 px-5 border-b border-gray-300 lg:border-transparent whitespace-nowrap">
            <Link
              href="/#view"
              onClick={() =>
                dispatch(filterByCategory("Nuevos Diseños")) &&
                setShowList(false)
              }
              className=""
            >
              Nuevos diseños
            </Link>
          </li>

          <li className="py-3 px-5 border-b border-gray-300 lg:border-transparent whitespace-nowrap">
            <Link href="/#About" className="">
              Acerca de
            </Link>
          </li>

          <li className="py-3 px-5 lg:pr-0 border-b border-gray-300 lg:border-transparent">
            <Link href="/#Contac" className="">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
