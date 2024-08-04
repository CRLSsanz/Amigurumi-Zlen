"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    //startTransition(()=>{
    //})
    router.replace(`/${nextLocale}`);
  };

  return (
    <div className="w-20 Xborder Xborder-gray-300 text-gray-400 lg:text-gray-400 rounded">
      <p className="hidden Xsr-only">Change Language</p>
      <select
        defaultValue={localeActive}
        className="text-sm text-center lg:text-start bg-transparent py-2 pl-2 cursor-pointer"
        onChange={changeLanguage}
        disabled={isPending}
      >
        <option value="es">Spanish</option>
        <option value="it">Italian</option>
      </select>
    </div>
  );
};

export default LocalSwitcher;
