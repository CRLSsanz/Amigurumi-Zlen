import React, { useState } from "react";

import {
  filterBySearch,
  clearFilter,
  filterByStock,
  filterByPrice,
  filterByAlfabeto,
  filterByRating,
} from "@/redux/features/filterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Rating from "./Rating";
import { useTranslations } from "next-intl";

const Filter = () => {
  const t = useTranslations("Filter");
  const { byStock, searchQuery, sort, byA_Z, byRating } = useAppSelector(
    (state) => state.filter
  );
  const [rate, setRate] = useState(4);

  const dispatch = useAppDispatch();

  return (
    <>
      {/** FILTER */}
      <div className="w-full lg:w-[1024px] p-5 lg:px-0 ">
        <div className="relative mb-5">
          <input
            value={searchQuery}
            onChange={(e) => dispatch(filterBySearch(e.target.value))}
            type="text"
            className="w-full py-2 px-4 border-2 text-sm bg-white"
            placeholder={`${t("search")}`}
          />
          <span className="absolute top-2 right-2 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            onChange={() => dispatch(filterByAlfabeto(byA_Z))}
            checked={byA_Z}
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-600 cursor-pointer"
          >
            {t("alphabetical")}
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={() => dispatch(filterByPrice("lowToHigh"))}
            checked={sort === "lowToHigh" ? true : false}
          />
          <label
            htmlFor="default-radio-1"
            className="ms-2 text-sm font-medium text-gray-600 cursor-pointer"
          >
            {t("priceLower")}
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            //checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={() => dispatch(filterByPrice("highToLow"))}
            checked={sort === "highToLow" ? true : false}
          />
          <label
            htmlFor="default-radio-2"
            className="ms-2 text-sm font-medium text-gray-600 cursor-pointer"
          >
            {t("priceHigher")}
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="default-checkbox2"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={() => dispatch(filterByStock(byStock))}
            checked={byStock}
          />
          <label
            htmlFor="default-checkbox2"
            className="ms-2 text-sm font-medium text-gray-600 cursor-pointer"
          >
            {t("stockOut")}
          </label>
        </div>

        <div className="flex flex-row items-center text-gray-500 mb-6">
          <label className="text-sm text-gray-600 mr-3">{t("rating")} </label>
          <Rating
            rating={byRating}
            style={{ cursor: "pointer" }}
            //onClick={(i: any) => setRate(i + 1)}
            onClick={(i: any) => dispatch(filterByRating(i + 1))}
          />
        </div>

        <button
          onClick={() => dispatch(clearFilter())}
          className="w-full text-center text-sm font-bold border border-gray-500 text-gray-600 active:bg-teal-400 active:text-white active:border-transparent px-4 py-2 rounded-sm  mb-10"
        >
          {t("see")}
        </button>
      </div>
    </>
  );
};

export default Filter;
