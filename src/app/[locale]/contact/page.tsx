import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <div id="view" className="text-center">
      <div className="w-full relative bg-gray-200 mb-10 ">
        <Image
          src={require(`/public/image/exotic1.png`)}
          alt="Amigurumi"
          sizes=""
          //width={250}
          //height={200}
        />
      </div>
      <h1 className="uppercase font-bold mb-5"> {t("title")}</h1>
      <p className="text-xs px-14 leading-6 mb-10">{t("text")}</p>
    </div>
  );
};

export default Contact;
