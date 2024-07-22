import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const WhatsApp = ({ text, size }: any) => {
  const [subTotal, setSubTotal] = useState(0);
  const cart = useAppSelector((state) => state.carrito);
  //let phone="51990441430"
  let phone = "393801836002";
  let message: string = "Hola estoy interesado en encargar:%0A%0A"; //%0A= saltar linea

  useEffect(() => {
    setSubTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
    //console.log(subTotal);
  }, [cart]);

  if (cart.length !== 0) {
    cart.map(
      (i) =>
        (message += "> " + i.qty + " %20 *" + i.name.replace("#", "n") + "*%0A")
    );
    message += "%0ATOTAL: *€" + subTotal + ".00*";
  }

  //href={`https://wa.me/51990441430?text=${message}`}
  //       https://api.whatsapp.com/send/?phone=51990441430&text=Hola+quiero+comprar+tu+producto&type=phone_number&app_absent=0

  //       https://api.whatsapp.com/send?phone=51990441430&text=Hola%20quiero%20comprar%20tu%20producto%20gracias
  //href={`https://api.whatsapp.com/send?phone=51990441430&text=${message}`}

  return (
    <>
      {/** BUTTON WHATSAPP */}
      <div className="flex flex-row justify-between">
        <a
          href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full flex justify-center items-center cursor-pointer"
        >
          <span className="whitespace-nowrap">{text}</span>
          <Image
            src={require(`/public/whatsapp.png`)}
            alt="Amigurumi"
            //fill
            //sizes=""
            width={size}
            height={size}
            //style={{ objectFit: "cover",objectPosition: "50% 50%",}}
          />
        </a>
      </div>
    </>
  );
};

export default WhatsApp;
