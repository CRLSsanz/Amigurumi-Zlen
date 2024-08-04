import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="flex flex-col items-center">
      {/** FOOTER */}
      <div className="border-t w-full lg:max-w-[1024px] text-sm  py-10 flex flex-col items-center">
        <div className="w-24 h-24 border-2 border-gray-600 rounded-full flex items-center justify-center mb-10 ">
          <h1 className="text-center text-lg font-bold leading-3">
            <span className="text-2xl">100%</span>{" "}
            <span className="">{t("made")}</span>
          </h1>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-10">
          <div className="text-center mb-5">
            <h1 className="font-bold py-3">{t("contact")}</h1>
            <h1>+39 380 183 6002</h1>
            <h1>hola@amigurumiszlen.com</h1>
            <h1>Milan - Italia</h1>
          </div>
          <div className="text-center mb-7">
            <h1 className="font-bold py-3">{t("termsConditions")}</h1>
            <h1>{t("privacyPolicies")}</h1>
            <h1>{t("shippingPolicy")}</h1>
            <h1>{t("questions")}</h1>
          </div>
          <div className="col-span-2 w-full px-5 text-center flex flex-col items-center">
            <h1 className="font-bold text-lg mb-2 leading-5">
              {t("subscrive")}
            </h1>
            <div className="w-full flex flex-col justify-center items-center lg:flex-row">
              <input
                name="email"
                type="text"
                className="w-full p-2 border border-gray-300 bg-white mb-2 lg:mb-0 lg:mr-2"
              />
              <div className="bg-black rounded-full text-white p-2 w-40">
                {t("send")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** COPYRIGHT */}
      <div className="w-full py-10 px-10 text-xs text-center bg-gray-200">
        <p className="mb-5">
          Copyright © 2024 ZLEN | Amigurumis | {t("crochet")}
        </p>
        <div className="flex flex-row justify-center gap-2 font-semibold text-center text-white">
          <h1 className="py-2 w-10 rounded-lg border bg-sky-400">FB</h1>

          <h1 className="py-2 w-10 rounded-lg border bg-pink-400">IG</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
