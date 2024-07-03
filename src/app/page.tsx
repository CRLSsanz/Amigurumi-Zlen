"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/features/cartSlice";
import Filter from "@/components/Filter";
import Rating from "@/components/Rating";
import Carrito from "@/components/Carrito";

export default function Home() {
  const data = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.carrito);
  const { byCategory, byStock, searchQuery, sort, byRating, byA_Z } =
    useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const filterData = () => {
    let newData = data;

    //let toys = newData.slice();
    //let arr3 = toys.sort((a, b) => a.price - b.price);
    //console.log(arr3);

    if (byA_Z) {
      let toys = newData.slice();
      newData = toys.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }

    if (sort) {
      let toys = newData.slice();
      newData = toys.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (byCategory) {
      if (byCategory === "Nuevos Diseños") {
        newData = newData.slice(-10);
      } else {
        newData = newData.filter((item) => item.category === byCategory);
      }
    }

    if (byStock) {
      newData = newData.filter((item) => item.inStock === byStock);
    }

    if (byRating) {
      newData = newData.filter((item) => item.rating >= byRating);
    }

    if (searchQuery) {
      newData = newData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return newData;
  };

  return (
    <main className="w-full bg-gray-100 flex min-h-screen flex-col items-center">
      {/** MAIN*/}
      <div className="w-full flex flex-col items-center">
        <div className="md:hidden w-full bg-red-300 mb-10 ">
          <img src="./image/fondo1.jpg" alt="" />
        </div>
        <div
          className={`hidden md:flex w-full md:h-[calc(100vh-180px)] bg-cover Xbg-fixed bg-[50%] bg-[url('/image/fondo2.jpg')] mb-10 `}
        >
          <h1 className="hidden"> bgAvatar</h1>
        </div>

        <p className="lg:max-w-[500px] px-5 text-xs text-center mb-5 leading-5">
          ¡Bienvenidos a nuestra tienda online de amigurumis únicos! Descubre
          una colección encantadora de adorables muñecos tejidos a mano con
          materiales de alta calidad. Sumérgete en un mundo lleno de color,
          ternura y creatividad, donde cada amigurumi es una pequeña obra de
          arte.
        </p>
        <p className="lg:max-w-[500px] px-5 text-xs text-center mb-5 leading-5">
          Te invitamos a explorar nuestro catálogo y encontrar el compañero
          perfecto que alegrará tu vida o será el regalo ideal para alguien
          especial. ¡Prepárate para abrazar la dulzura de los amigurumis y
          desatar tu imaginación en nuestra tienda en línea!
        </p>
        <h1 className="text-center bg-teal-500 px-5 py-2 rounded-full text-white mb-10">
          Saber mas de ZLEN
        </h1>
      </div>

      {/** FILTER */}
      <Filter />

      {/** LIST <img src={`./image/${item.name}.jpg`} alt="" /> */}
      <div
        id="view"
        className="lg:w-[1024px] p-5 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-5"
      >
        <div className="lg:col-span-3 mb-5 font-bold">
          {byCategory === "" ? "Amigurumis " : byCategory} {" ("}
          {filterData().length}
          {")"}
        </div>
        {filterData().map((item, index) => (
          <div key={index} className="w-full border mb-5 lg:mb-0">
            <div
              className={`relative Xw-[300px] Xh-[250px] b g-[url('/image/animales2.jpg')]  ${item.bgAvatar} bg-cover Xbg-fixed bg-[50%] `}
            >
              <img
                src={`./image/${item.image}`}
                alt=""
                //className="w-[300px] h-[250px]"
                style={{
                  width: "380px",
                  height: "240px",
                  objectFit: "cover", // cover, contain, none
                  objectPosition: "50% 20%",
                }}
              />
              {/* cart.some((p) => p.name === item.name) ? (
                <button
                  onClick={() => dispatch(removeFromCart(item.name))}
                  className="absolute top-1 right-1 bg-red-500 text-white text-sm font-bold  rounded-md px-3 py-1 cursor-pointer active:animate-ping"
                >
                  Quitar del carrito
                </button>
              ) : (
                <button
                  disabled={!item.inStock}
                  onClick={() => dispatch(addToCart(item))}
                  className={`absolute top-1 right-1 text-white text-sm font-bold rounded-md px-3 py-1 ${
                    item.inStock
                      ? "bg-sky-600 cursor-pointer active:animate-ping"
                      : "bg-gray-500"
                  } `}
                >
                  {!item.inStock ? "Agotado" : "Agregar al carrito"}
                </button>
              ) */}
            </div>

            <div className="p-5">
              <h1 className=""> {item.name}</h1>
              <h1 className="text-sm Xtext-teal-500"> $ {item.price}.00</h1>
              <div className="pointer-events-none flex flex-row items-center text-gray-500 mb-2">
                <Rating rating={item.rating} />
              </div>
              <div>
                {cart.some((p) => p.name === item.name) ? (
                  <button
                    onClick={() => dispatch(removeFromCart(item.name))}
                    className=" bg-red-500 text-white text-sm font-bold rounded px-3 py-1.5 cursor-pointer active:animate-ping"
                  >
                    Quitar del carrito
                  </button>
                ) : (
                  <button
                    disabled={!item.inStock}
                    onClick={() => dispatch(addToCart(item))}
                    className={` text-white text-sm font-bold rounded px-3 py-1.5 ${
                      item.inStock
                        ? "bg-sky-500 cursor-pointer active:animate-ping"
                        : "bg-indigo-600"
                    } `}
                  >
                    {!item.inStock ? "Agotado" : "Agregar al carrito"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/** BUTTON WHATSAPP */}
      <div className="fixed bottom-3 right-3 flex flex-row justify-between">
        <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-emerald-500  text-white flex justify-center items-center cursor-pointer">
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
        </div>
      </div>

      {/** CARRITO NAVBAR */}
      <Carrito />
    </main>
  );
}
