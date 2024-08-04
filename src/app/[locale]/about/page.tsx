import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const About = () => {
  const t = useTranslations("About");
  return (
    <div id="view" className="text-xs">
      <div className="w-full relative h-[300px] lg:h-[400px] bg-gray-200 mb-10 ">
        <Image
          src={require(`/public/image/fondo2.jpg`)}
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

      <div className="flex flex-col items-center">
        <div className="px-5 text-center lg:w-[500px]">
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

        <div className="w-full lg:w-[1024px] relative bg-gray-200 mb-10 ">
          <Image
            src={require(`/public/image/animales5.jpg`)}
            alt="Amigurumi"
            sizes=""
            //width={250}
            //height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
