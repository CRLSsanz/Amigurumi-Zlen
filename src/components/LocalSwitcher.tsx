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
    <div className="w-28 border-2 rounded">
      <p className="hidden Xsr-only">Change Language</p>
      <select
        defaultValue={localeActive}
        className="text-sm w-24 bg-transparent p-2 cursor-pointer"
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
