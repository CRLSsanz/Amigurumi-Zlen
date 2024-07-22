"use client";
import React, { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { filterByCategory, filterByStock } from "@/redux/features/filterSlice";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";

export const Header = () => {
  const localeActive = useLocale();
  const t = useTranslations("Header");

  const [showList, setShowList] = useState(false);
  const dispatch = useAppDispatch();

  function changeLang(value: string) {}
  //t("home.body") t("header.message")

  return (
    <section className="w-full bg-gray-100 flex flex-col items-center">
      <div className="relative w-full lg:max-w-[1024px] py-5 lg:flex lg:flex-row">
        <div className="absolute z-10 top-2 left-2">
          <LocalSwitcher />
        </div>

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
            <h1 className=" w-36 text-gray-500 xuppercase tracking-widest text-xs">
              {t("title")}
            </h1>
          </div>
        </div>

        {/** LINK */}
        <ul className="lg:relative w-full text-sm py-10 px-5 lg:px-0 lg:flex lg:flex-row lg:items-center">
          <li className="p-3 border-b border-gray-300 lg:border-transparent flex flex-row justify-between">
            <Link
              href={`/${localeActive}#view`}
              onClick={() =>
                dispatch(filterByCategory("")) && setShowList(false)
              }
              className="p-1 active:animate-ping lg:mr-3"
            >
              Amigurumi
            </Link>

            <div
              onClick={() => setShowList(!showList)}
              className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
                showList ? "-rotate-90" : " rotate-90 "
              }`}
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
            <li className="flex p-3 pl-5 border-b border-gray-300 ">
              <Link
                href={`/${localeActive}#view`}
                onClick={() =>
                  dispatch(filterByCategory("Animales")) &&
                  setShowList(!showList)
                }
                className="p-1 active:animate-ping"
              >
                · {t("animals")}
              </Link>
            </li>
            <li className="flex p-3 pl-5 border-b border-gray-300 ">
              <Link
                href={`/${localeActive}#view`}
                onClick={() =>
                  dispatch(filterByCategory("Divertidos")) &&
                  setShowList(!showList)
                }
                className="p-1 active:animate-ping"
              >
                · {t("characters")}
              </Link>{" "}
            </li>
            <li className="flex p-3 pl-5 border-b border-gray-300 ">
              <Link
                href={`/${localeActive}#view`}
                onClick={() =>
                  dispatch(filterByCategory("Colecciones")) &&
                  setShowList(!showList)
                }
                className="p-1 active:animate-ping"
              >
                · {t("collections")}
              </Link>
            </li>
            <li className="flex p-3 pl-5 border-b border-gray-300 ">
              <Link
                href={`/${localeActive}#view`}
                onClick={() =>
                  dispatch(filterByCategory("Animaciones")) &&
                  setShowList(!showList)
                }
                className="p-1 active:animate-ping"
              >
                · {t("animated")}
              </Link>{" "}
            </li>
          </div>

          <li className="flex p-3 border-b border-gray-300 lg:border-transparent whitespace-nowrap">
            <Link
              href={`/${localeActive}#view`}
              onClick={() =>
                dispatch(filterByCategory("Nuevos Diseños")) &&
                setShowList(false)
              }
              className=" p-1 active:animate-ping cursor-pointer"
            >
              {t("newDesigns")}
            </Link>
          </li>

          <li className="flex p-3 border-b border-gray-300 lg:border-transparent whitespace-nowrap">
            <Link
              //href={`/${localeActive}#About`}
              href={`/${localeActive}/about#view`}
              className=" p-1 active:animate-ping cursor-pointer"
            >
              {t("about")}
            </Link>
          </li>

          <li className="flex p-3 border-b border-gray-300 lg:border-transparent lg:pr-0">
            <Link
              href={`/${localeActive}/contact#view`}
              className=" p-1 active:animate-ping cursor-pointer"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
