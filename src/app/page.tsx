"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/features/cartSlice";
import Filter from "@/components/Filter";
import Rating from "@/components/Rating";
import Carrito from "@/components/Carrito";
import WhatsApp from "@/components/WhatsApp";

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
        <div className="uppercase lg:col-span-3 mb-5 font-bold">
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

            <div className=" Xrelative p-5">
              <h1 className="font-bold mb-1"> {item.name}</h1>
              <div className="flex flex-col Xjustify-between mb-3">
                {/** price.split(".")[0] */}
                <h1 className={`text-sm text-gray-700 `}>$ {item.price}.00</h1>
                <h1 className="text-xs text-gray-700">Delivery en 5 dias</h1>
                <div className="pointer-events-none flex flex-row items-center text-blue-600">
                  <Rating rating={item.rating} />
                </div>
              </div>

              <div className="Xabsolute Xbottom-5 Xright-5">
                {cart.some((p) => p.name === item.name) ? (
                  <button
                    onClick={() => dispatch(removeFromCart(item.name))}
                    className=" bg-red-500 text-white text-sm font-bold rounded-sm px-3 py-1.5 cursor-pointer active:animate-ping"
                  >
                    Quitar del carrito
                  </button>
                ) : (
                  <button
                    disabled={!item.inStock}
                    onClick={() => dispatch(addToCart(item))}
                    className={` text-white text-sm font-bold rounded-sm px-3 py-1.5 ${
                      item.inStock
                        ? "bg-teal-500 cursor-pointer active:animate-ping"
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

      <WhatsApp />

      {/** CARRITO NAVBAR */}
      <Carrito />
    </main>
  );
}
