import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const About = () => {
  const t = useTranslations("About");
  return (
    <div id="view" className="text-xs">
      <div className="w-full relative bg-gray-200 mb-10 ">
        <Image
          src={require(`/public/image/fondo2.jpg`)}
          alt="Amigurumi"
          sizes=""
          //width={250}
          //height={200}
        />
      </div>
      <div className="px-5 text-center">
        <h1 className="text-base uppercase font-bold mb-5">{t("title1")}</h1>
        <p className="px-10 leading-6 mb-10">{t("text1")}</p>
        <div className="w-full relative bg-gray-200 mb-10 ">
          <Image
            src={require(`/public/image/lana3.jpg`)}
            alt="Amigurumi"
            sizes=""
            //width={250}
            //height={200}
          />
        </div>

        <h1 className="text-base uppercase font-bold mb-5">{t("title2")}</h1>
        <p className="px-10 leading-6 mb-10">{t("text2")}</p>
        <div className="w-full relative bg-gray-200 mb-10 ">
          <Image
            src={require(`/public/image/lana2.jpg`)}
            alt="Amigurumi"
            sizes=""
            //width={250}
            //height={200}
          />
        </div>

        <p className="px-10 leading-6 mb-10">{t("text3")}</p>
      </div>

      <div className="w-full relative bg-gray-200 mb-10 ">
        <Image
          src={require(`/public/image/animales5.jpg`)}
          alt="Amigurumi"
          sizes=""
          //width={250}
          //height={200}
        />
      </div>
    </div>
  );
};

export default About;
