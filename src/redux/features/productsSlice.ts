import { createSlice } from "@reduxjs/toolkit";

//const initialState = { amig: 0, carrito:[] }; jpg - avif
const initialState = [
  {
    name: "Beautiful Grandparents",
    image: "abu1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/abu1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Divertidos",
  },

  {
    name: "Funny Banana",
    image: "banana1.jpg",
    price: 35,
    bgAvatar: "bg-[url('/image/banana1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Divertidos",
  },
  {
    name: "Baymax Mini Gh6",
    image: "baymax1.jpg",
    price: 30,
    bgAvatar: "bg-[url('/image/baymax1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animaciones",
  },
  {
    name: "Ash Ketchum Pokemon",
    image: "boy1.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/boy1.jpg')]",
    inStock: true,
    rating: 5,
    category: "Animaciones",
  },
  {
    name: "Cool Guy Amigurumi",
    image: "boy2.jpg",
    price: 59,
    bgAvatar: "bg-[url('/image/boy2.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animaciones",
  },
  {
    name: "Cactus Baby",
    image: "captus1.jpg",
    price: 25,
    bgAvatar: "bg-[url('/image/captus1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Divertidos",
  },
  {
    name: "Cactus Chibi Amigurumis",
    image: "captus2.jpg",
    price: 35,
    bgAvatar: "bg-[url('/image/captus2.jpg')]",
    inStock: true,
    rating: 4,
    category: "Divertidos",
  },
  {
    name: "Loving Cactus",
    image: "captus3.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/captus3.jpg')]",
    inStock: true,
    rating: 4,
    category: "Divertidos",
  },
  {
    name: "Funny Cactus",
    image: "captus4.jpg",
    price: 45,
    bgAvatar: "bg-[url('/image/captus4.jpg')]",
    inStock: true,
    rating: 5,
    category: "Divertidos",
  },
  {
    name: "Chuky Amigurumi",
    image: "chuky1.jpg",
    price: 55,
    bgAvatar: "bg-[url('/image/chuky1.jpg')]",
    inStock: true,
    rating: 5,
    category: "Animaciones",
  },
  {
    name: "Chuky Boy",
    image: "chuky3.jpg",
    price: 65,
    bgAvatar: "bg-[url('/image/chuky3.jpg')]",
    inStock: false,
    rating: 4,
    category: "Animaciones",
  },
  {
    name: "Dog Teddy Amigurumi",
    image: "dog1.jpg",
    price: 45,
    bgAvatar: "bg-[url('/image/dog1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animales",
  },
  {
    name: "Dragon Amigurumi",
    image: "dragon1.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/dragon1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animales",
  },
  {
    name: "Dragon Chibi Amigurumi",
    image: "dragon2.jpg",
    price: 85,
    bgAvatar: "bg-[url('/image/dragon2.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animales",
  },
  {
    name: "Dragon Teal",
    image: "dragon3.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/dragon3.jpg')]",
    inStock: false,
    rating: 4,
    category: "Animales",
  },
  {
    name: "Pretty Bear",
    image: "exotic1.png",
    price: 65,
    bgAvatar: "bg-[url('/image/exotic1.png')]",
    inStock: true,
    rating: 4,
    category: "Animales",
  },
  {
    name: "Doll Long Hair",
    image: "girl1.jpg",
    price: 65,
    bgAvatar: "bg-[url('/image/girl1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Divertidos",
  },
  {
    name: "Doll With Bows",
    image: "girl2.jpg",
    price: 55,
    bgAvatar: "bg-[url('/image/girl2.jpg')]",
    inStock: false,
    rating: 4,
    category: "Divertidos",
  },
  {
    name: "Ballet Doll",
    image: "girl3.jpg",
    price: 50,
    bgAvatar: "bg-[url('/image/girl3.jpg')]",
    inStock: true,
    rating: 4,
    category: "Divertidos",
  },
  {
    name: "Ballet Dancer Doll",
    image: "girl4.jpg",
    price: 55,
    bgAvatar: "bg-[url('/image/girl4.jpg')]",
    inStock: true,
    rating: 4,
    category: "Divertidos",
  },
  {
    name: "Doll First Steps",
    image: "girl6.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/girl6.jpg')]",
    inStock: true,
    rating: 4,
    category: "Divertidos",
  },
  {
    name: "Gotic Amigurumi 1",
    image: "gotic1.jpg",
    price: 45,
    bgAvatar: "bg-[url('/image/gotic1.jpg')]",
    inStock: true,
    rating: 3,
    category: "Colecciones",
  },
  {
    name: "Gotic Amigurumi 2",
    image: "gotic2.jpg",
    price: 45,
    bgAvatar: "bg-[url('/image/gotic2.jpg')]",
    inStock: true,
    rating: 5,
    category: "Colecciones",
  },
  {
    name: "Monkey And His Banana",
    image: "monky2.jpg",
    price: 45,
    bgAvatar: "bg-[url('/image/monky2.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animales",
  },
  {
    name: "The Little Caterpillar",
    image: "oruga1.jpg",
    price: 45,
    bgAvatar: "bg-[url('/image/oruga1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animales",
  },
  {
    name: "Teddies Amigurumi",
    image: "peluche1.jpg",
    price: 35,
    bgAvatar: "bg-[url('/image/peluche1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Divertidas",
  },
  {
    name: "Pokemon Ash 1",
    image: "pokemon1.jpg",
    price: 35,
    bgAvatar: "bg-[url('/image/pokemon1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Colecciones",
  },
  {
    name: "Pokemon Ash 2",
    image: "pokemon3.jpg",
    price: 35,
    bgAvatar: "bg-[url('/image/pokemon3.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animaciones",
  },
  {
    name: "Pokemon Collection Amigurumi",
    image: "pokemon4.jpg",
    price: 45,
    bgAvatar: "bg-[url('/image/pokemon4.jpg')]",
    inStock: false,
    rating: 4,
    category: "Colecciones",
  },
  {
    name: "Jigglypuff Pokemon",
    image: "pokemon6.jpg",
    price: 35,
    bgAvatar: "bg-[url('/image/pokemon6.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animaciones",
  },
  {
    name: "Squirtle Pokemon Ash",
    image: "pokemon7.jpg",
    price: 35,
    bgAvatar: "bg-[url('/image/pokemon7.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animaciones",
  },
  {
    name: "Tender Pony",
    image: "pony1.jpg",
    price: 45,
    bgAvatar: "bg-[url('/image/pony1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animales",
  },
  {
    name: "Light Blue Rabbit",
    image: "rabbit1.jpg",
    price: 30,
    bgAvatar: "bg-[url('/image/rabbit1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animales",
  },
  {
    name: "Cute Sleepy Bunny",
    image: "rabbit2.jpg",
    price: 75,
    bgAvatar: "bg-[url('/image/rabbit2.jpg')]",
    inStock: false,
    rating: 5,
    category: "Animales",
  },
  {
    name: "Winter Rabbit",
    image: "rabbit3.jpg",
    price: 30,
    bgAvatar: "bg-[url('/image/rabbit3.jpg')]",
    inStock: true,
    rating: 4,
    category: "Colecciones",
  },
  {
    name: "Rabbit Couple",
    image: "rabbit4.jpg",
    price: 30,
    bgAvatar: "bg-[url('/image/rabbit4.jpg')]",
    inStock: true,
    rating: 4,
    category: "Colecciones",
  },
  {
    name: "Cute Little Rabbits",
    image: "rabbit5.jpg",
    price: 30,
    bgAvatar: "bg-[url('/image/rabbit5.jpg')]",
    inStock: true,
    rating: 5,
    category: "Animales",
  },
  {
    name: "Reindeer Amigurumi",
    image: "reno1.jpg",
    price: 45,
    bgAvatar: "bg-[url('/image/reno1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animales",
  },
  {
    name: "Unicorn Amigurumi",
    image: "unicornio1.jpg",
    price: 45,
    bgAvatar: "bg-[url('/image/unicornio1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Animales",
  },
  {
    name: "Winnie Pooh Amigurumi",
    image: "winniepooh1.jpg",
    price: 30,
    bgAvatar: "bg-[url('/image/winniepooh1.jpg')]",
    inStock: true,
    rating: 4,
    category: "Colecciones",
  },
  {
    name: "Zoo Animals N5",
    image: "animales1.jpg",
    price: 25,
    bgAvatar: "bg-[url('/image/animales1.jpg')]",
    inStock: true,
    rating: 3,
    category: "Colecciones",
  },
  {
    name: "Zoo Animals N4",
    image: "animales2.jpg",
    price: 43,
    bgAvatar: "bg-[url('/image/animales2.jpg')]",
    inStock: false,
    rating: 3,
    category: "Colecciones",
  },
  {
    name: "Collection Animals N3",
    image: "animales3.jpg",
    price: 44,
    bgAvatar: "bg-[url('/image/animales3.jpg')]",
    inStock: true,
    rating: 3,
    category: "Colecciones",
  },
  {
    name: "Family Pica Pau Animals",
    image: "animales4.jpg",
    price: 30,
    bgAvatar: "bg-[url('/image/animales4.jpg')]",
    inStock: false,
    rating: 3,
    category: "Colecciones",
  },
  {
    name: "Animals Amigurumi",
    image: "animales5.jpg",
    price: 30,
    bgAvatar: "bg-[url('/image/animales5.jpg')]",
    inStock: false,
    rating: 3,
    category: "Colecciones",
  },
  {
    name: "Zoo Animals N8",
    image: "animales6.jpg",
    price: 30,
    bgAvatar: "bg-[url('/image/animales6.jpg')]",
    inStock: true,
    rating: 3,
    category: "Colecciones",
  },
];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    oneProduct: (state, action) => {
      return state.filter((item) => item.name === action.payload);
    },
  },
});

export const { oneProduct } = productsSlice.actions;

export default productsSlice.reducer;
