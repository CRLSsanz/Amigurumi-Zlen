import { useTranslations } from "next-intl";
import React from "react";

const Detail = () => {
  const t = useTranslations("Detail");
  return (
    <>
      <h1 className="text-sm font-bold mb-5">{t("description")}</h1>
      <p className="mb-5">
        {t("p1")} <br /> {t("p2")} <br />
        <br /> {t("p3")} <br />
        <br />
        {t("p4")}
      </p>

      <h1 className="text-sm font-bold mb-5">{t("instruction")}</h1>
      <p>
        1️⃣ {t("ic1")} <br />
        <br />
        2️⃣ {t("ic2")} <br />
        <br />
        3️⃣ {t("ic3")} <br />
        <br />
        4️⃣ {t("ic4")} <br />
        <br />
        5️⃣ {t("ic5")} <br />
        <br />
        {t("ip1")} <br />
        <br /> {t("ip2")} <br />
        <br />
        💕✨ <span className="font-bold text-sm">{t("ip3")}</span>
        <br />
        <br />
        {t("ip4")}
      </p>
    </>
  );
};

export default Detail;
