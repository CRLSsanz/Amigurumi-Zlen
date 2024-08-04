import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <div id="view" className="text-center flex flex-col items-center">
      <div className="w-full relative h-[300px] lg:h-[400px] bg-gray-200 mb-10 ">
        <Image
          src={require(`/public/image/exotic1.png`)}
          alt="Amigurumi"
          fill
          sizes=""
          //width={250}
          //height={200}
          style={{
            objectFit: "cover", // cover, contain, none
            objectPosition: "50% 70%",
          }}
        />
      </div>
      <div className="lg:w-[400px]">
        <h1 className="uppercase font-bold mb-5"> {t("title")}</h1>
        <p className="text-xs px-14 leading-6 mb-10">{t("text")}</p>
      </div>
    </div>
  );
};

export default Contact;
