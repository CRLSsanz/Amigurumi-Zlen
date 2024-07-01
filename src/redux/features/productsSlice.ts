import { createSlice } from "@reduxjs/toolkit";

//const initialState = { amig: 0, carrito:[] };
const initialState = [
  {
    name: "Abuelitos Cariñosos Amigurumi",
    image: "abu1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/abu1.jpg')]",
  },

  {
    name: "Animales Grupo #1",
    image: "animales1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales1.jpg')]",
  },
  {
    name: "Animales Grupo #2",
    image: "animales2.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales2.jpg')]",
  },
  {
    name: "Animales Grupo #3",
    image: "animales3.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales3.jpg')]",
  },
  {
    name: "Animales Grupo #4",
    image: "animales4.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales4.jpg')]",
  },
  {
    name: "Animales Grupo #5",
    image: "animales5.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/animales5.jpg')]",
  },
  {
    name: "Animales Grupo #6",
    image: "animales6.avif",
    price: 40,
    bgAvatar: "bg-[url('/image/animales6.avif')]",
  },
  {
    name: "Banana Funny Amigurumi",
    image: "banana1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/banana1.jpg')]",
  },
  {
    name: "Beimax Grandes Heroes Amigurumi",
    image: "baymax1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/baymax1.jpg')]",
  },
  {
    name: "Hash Pokemon Amigurumi",
    image: "boy1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/boy1.jpg')]",
  },
  {
    name: "Joven Cool Amigurumi",
    image: "boy2.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/boy2.jpg')]",
  },
  {
    name: "Captus Baby Amigurumi",
    image: "captus1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/captus1.jpg')]",
  },
  {
    name: "Captus Chibi Amigurumi",
    image: "captus2.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/captus2.jpg')]",
  },
  {
    name: "Captus Amoroso Amigurumi",
    image: "captus3.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/captus3.jpg')]",
  },
  {
    name: "Captus Funny Amigurumi",
    image: "captus4.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/captus4.jpg')]",
  },
  {
    name: "Chuky Chibi Amigurumi",
    image: "chuky1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/chuky1.jpg')]",
  },
  {
    name: "Chuky Boy Amigurumi",
    image: "chuky2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/chuky2.jpg')]",
  },
  {
    name: "Chuky Boy Amigurumi",
    image: "chuky3.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/chuky3.jpg')]",
  },
  {
    name: "Perro Amigurumi",
    image: "dog1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/dog1.jpg')]",
  },
  {
    name: "Dragon Amigurumi",
    image: "dragon1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/dragon1.jpg')]",
  },
  {
    name: "Dragon Chibi Amigurumi",
    image: "dragon2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/dragon2.jpg')]",
  },
  {
    name: "Dragon Teal Amigurumi",
    image: "dragon3.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/dragon3.jpg')]",
  },
  {
    name: "Oso Exotic Amigurumi",
    image: "exotic1.png",
    price: 75,
    bgAvatar: "bg-[url('/image/exotic1.png')]",
  },
  {
    name: "Gato Exotic Amigurumi",
    image: "exotic2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/exotic2.jpg')]",
  },
  {
    name: "Girl Bella Amigurumi",
    image: "girl1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl1.jpg')]",
  },
  {
    name: "Girl Con Moños Amigurumi",
    image: "girl2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl2.jpg')]",
  },
  {
    name: "Girl Ballet Amigurumi",
    image: "girl3.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl3.jpg')]",
  },
  {
    name: "Bella Bailarina Amigurumi",
    image: "girl4.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl4.jpg')]",
  },
  {
    name: "Cabello Largo Amigurumi",
    image: "girl5.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl5.jpg')]",
  },
  {
    name: "Girl Primeros Pasos Amigurumi",
    image: "girl6.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/girl6.jpg')]",
  },
  {
    name: "Gotic Amigurumi #1",
    image: "gotic1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/gotic1.jpg')]",
  },
  {
    name: "Gotic Amigurumi #2",
    image: "gotic2.avif",
    price: 75,
    bgAvatar: "bg-[url('/image/gotic2.avif')]",
  },
  {
    name: "Lana Amigurumi #1",
    image: "lana1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/lana1.jpg')]",
  },
  {
    name: "Lana Amigurumi #2",
    image: "lana2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/lana2.jpg')]",
  },
  {
    name: "Lana Amigurumi #3",
    image: "lana3.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/lana3.jpg')]",
  },
  {
    name: "Mono y su Banana Amigurumi",
    image: "monky1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/monky1.jpg')]",
  },
  {
    name: "Mono y su Banana Amigurumi #2",
    image: "monky2.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/monky2.jpg')]",
  },
  {
    name: "Mono y su Banana Amigurumi #3",
    image: "monky3.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/monky3.jpg')]",
  },
  {
    name: "Oruga Amigurumi",
    image: "oruga1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/oruga1.jpg')]",
  },
  {
    name: "Peluches Amigurumi",
    image: "peluche1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/peluche1.jpg')]",
  },
  {
    name: "Pokemones Chibi Amigurumi",
    image: "pokemon1.jpg",
    price: 39,
    bgAvatar: "bg-[url('/image/pokemon1.jpg')]",
  },
  {
    name: "Pokemon Amigurumi #2",
    image: "pokemon2.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pokemon2.jpg')]",
  },
  {
    name: "Pokemon Hash Amigurumi",
    image: "pokemon3.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pokemon3.jpg')]",
  },
  {
    name: "Pokemon Amigurumi #4",
    image: "pokemon4.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pokemon4.jpg')]",
  },
  {
    name: "Giglipo Amigurumi",
    image: "pokemon6.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pokemon6.jpg')]",
  },
  {
    name: "Scuero Amigurumi",
    image: "pokemon7.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pokemon7.jpg')]",
  },
  {
    name: "Pony Tierno Amigurumi",
    image: "pony1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/pony1.jpg')]",
  },
  {
    name: "Conejo Azul Amigurumi",
    image: "rabbit1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/rabbit1.jpg')]",
  },
  {
    name: "Bella Coneja Amigurumi",
    image: "rabbit2.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/rabbit2.jpg')]",
  },
  {
    name: "Conejo de Invierno Amigurumi",
    image: "rabbit3.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/rabbit3.jpg')]",
  },
  {
    name: "Conejita Amigurumi",
    image: "rabbit4.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/rabbit4.jpg')]",
  },
  {
    name: "Conejo Chibi Amigurumi",
    image: "rabbit5.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/rabbit5.jpg')]",
  },
  {
    name: "Reno Amigurumi",
    image: "reno1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/reno1.jpg')]",
  },
  {
    name: "Unicornio Amigurumi",
    image: "unicornio1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/unicornio1.jpg')]",
  },
  {
    name: "Winnie Pooh Amigurumi #1",
    image: "winniepooh1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/winniepooh1.jpg')]",
  },
];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    listProducts: (state) => state,
    //increment: (state) => {
    //  state.amig += 1;
    //},
  },
});

export const { listProducts } = productsSlice.actions;

export default productsSlice.reducer;
