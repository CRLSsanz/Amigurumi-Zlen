import { useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";

const WhatsApp = () => {
  const [subTotal, setSubTotal] = useState(0);
  const cart = useAppSelector((state) => state.carrito);
  //let phone="51990441430"
  let phone = "393801836002";
  let message: string = "Hola%0Aquiero comprar tu producto.%0A"; //%0A= saltar linea

  useEffect(() => {
    setSubTotal(cart.reduce((acc, curr) => acc + curr.price * curr.count, 0));
    console.log(subTotal);
  }, [cart]);

  if (cart.length !== 0) {
    cart.map(
      (i) =>
        (message += "  " + i.count + "x" + i.name.replace("#", "n") + "%0A")
    );
    message += "SUBTOTAL: $" + subTotal + ".00 %0A%0AGracias";
  }

  //href={`https://wa.me/51990441430?text=${message}`}
  //       https://api.whatsapp.com/send/?phone=51990441430&text=Hola+quiero+comprar+tu+producto&type=phone_number&app_absent=0

  //       https://api.whatsapp.com/send?phone=51990441430&text=Hola%20quiero%20comprar%20tu%20producto%20gracias
  //href={`https://api.whatsapp.com/send?phone=51990441430&text=${message}`}

  return (
    <>
      {/** BUTTON WHATSAPP */}
      <div className="fixed bottom-3 right-3 flex flex-row justify-between">
        <a
          href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-emerald-600  text-white flex justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="absolute top-1 left-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-red-500 text-white font-bold rounded-full flex justify-center items-center">
            1
          </div>
        </a>
      </div>
    </>
  );
};

export default WhatsApp;
