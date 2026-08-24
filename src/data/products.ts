import orange from "@/assets/fruit/orange.jpg";
import apple from "@/assets/fruit/apple.jpg";
import mango from "@/assets/fruit/mango.jpg";
import pineapple from "@/assets/fruit/pineapple.jpg";
import grape from "@/assets/fruit/grape.jpg";
import strawberry from "@/assets/fruit/strawberry.jpg";
import lemon from "@/assets/fruit/lemon.jpg";
import peach from "@/assets/fruit/peach.jpg";
import pomegranate from "@/assets/fruit/pomegranate.jpg";
import tropical from "@/assets/fruit/tropical.jpg";
import vegetable from "@/assets/fruit/vegetable.jpg";
import plantbased from "@/assets/fruit/plantbased.jpg";
import berry from "@/assets/fruit/berry.jpg";
import banana from "@/assets/fruit/banana.jpg";

export type ProductItem = {
  name: string;
  detail: string;
  img: string;
};

export type ProductCategory = {
  slug: string;
  name: string;
  detail: string;
  intro: string;
  img: string;
  items: ProductItem[];
};

export const categories: ProductCategory[] = [
  {
    slug: "juice-concentrate",
    name: "Juice Concentrate",
    detail: "Clarified and cloudy concentrates, organic and conventional.",
    intro:
      "Single-strength juices evaporated to concentrate, available clarified or cloudy, organic or conventional, in drums, IBCs and frozen formats.",
    img: orange,
    items: [
      { name: "Orange Juice Concentrate", detail: "65 Brix, frozen (FCOJ) — clarified or with pulp.", img: orange },
      { name: "Apple Juice Concentrate", detail: "70 Brix, clarified or cloudy, aseptic or frozen.", img: apple },
      { name: "Lemon Juice Concentrate", detail: "400 GPL acidity, clarified or cloudy.", img: lemon },
      { name: "Pineapple Juice Concentrate", detail: "60 Brix, clarified, aseptic drums.", img: pineapple },
      { name: "Grape Juice Concentrate", detail: "68 Brix, white and red, clarified.", img: grape },
      { name: "Mango Juice Concentrate", detail: "28–30 Brix, Alphonso, Kesar and Totapuri.", img: mango },
      { name: "Pomegranate Juice Concentrate", detail: "65 Brix, clarified or cloudy.", img: pomegranate },
      { name: "Peach & Apricot Concentrate", detail: "70 Brix, clarified stone-fruit concentrates.", img: peach },
      { name: "Berry Juice Concentrate", detail: "Strawberry, raspberry, blackcurrant and cherry.", img: berry },
      { name: "Vegetable Juice Concentrate", detail: "Carrot, beetroot and tomato concentrates.", img: vegetable },
    ],
  },
  {
    slug: "fruit-pulp",
    name: "Fruit Pulp",
    detail: "Aseptic and frozen pulp with natural fruit character.",
    intro:
      "Aseptic and frozen fruit pulp processed close to harvest, preserving natural colour, aroma and Brix for beverage, dairy and bakery lines.",
    img: mango,
    items: [
      { name: "Mango Pulp", detail: "Alphonso, Kesar, Totapuri — 16–18 Brix, aseptic.", img: mango },
      { name: "Guava Pulp", detail: "White and pink guava, 9–11 Brix, aseptic.", img: tropical },
      { name: "Banana Pulp", detail: "22 Brix, aseptic, ideal for smoothies and dairy.", img: banana },
      { name: "Papaya Pulp", detail: "9–11 Brix, aseptic tropical pulp.", img: tropical },
      { name: "Strawberry Pulp", detail: "7–9 Brix, frozen or aseptic.", img: strawberry },
      { name: "Pineapple Pulp", detail: "12–14 Brix, aseptic, with natural fibre.", img: pineapple },
      { name: "Peach Pulp", detail: "10–12 Brix, aseptic, yellow flesh.", img: peach },
      { name: "Tomato Pulp", detail: "Hot break and cold break, 28–30 Brix paste available.", img: vegetable },
    ],
  },
  {
    slug: "puree",
    name: "Purée",
    detail: "Single-strength and concentrated purées for every application.",
    intro:
      "Smooth single-strength and concentrated purées with fine particle size, engineered for yogurt, ice cream, bakery fillings and confectionery.",
    img: strawberry,
    items: [
      { name: "Strawberry Purée", detail: "Single strength and 28 Brix concentrated.", img: strawberry },
      { name: "Mango Purée", detail: "Single strength 16 Brix and 28 Brix concentrated.", img: mango },
      { name: "Apple Purée", detail: "11 Brix, natural or acidified.", img: apple },
      { name: "Peach & Apricot Purée", detail: "10–12 Brix, aseptic stone-fruit purées.", img: peach },
      { name: "Banana Purée", detail: "22 Brix, aseptic, smooth texture.", img: banana },
      { name: "Raspberry & Blackberry Purée", detail: "Seedless, single strength or concentrated.", img: berry },
      { name: "Pomegranate Purée", detail: "15 Brix, deep natural colour.", img: pomegranate },
      { name: "Passion Fruit Purée", detail: "13–15 Brix, aromatic tropical purée.", img: tropical },
    ],
  },
  {
    slug: "nfc-juices",
    name: "NFC Juices",
    detail: "Not-from-concentrate juices, chilled or frozen.",
    intro:
      "Not-from-concentrate juices pressed and preserved without dilution — full natural aroma profile, supplied chilled, frozen or aseptic.",
    img: orange,
    items: [
      { name: "NFC Orange Juice", detail: "11–12 Brix, chilled or frozen, with or without pulp.", img: orange },
      { name: "NFC Apple Juice", detail: "11 Brix, clear or cloudy, aseptic.", img: apple },
      { name: "NFC Pineapple Juice", detail: "12 Brix, aseptic, tropical aroma.", img: pineapple },
      { name: "NFC Grape Juice", detail: "16 Brix, white and red varieties.", img: grape },
      { name: "NFC Lemon Juice", detail: "Natural acidity, chilled or frozen.", img: lemon },
      { name: "NFC Pomegranate Juice", detail: "15 Brix, cold pressed, deep colour.", img: pomegranate },
      { name: "NFC Carrot & Beet Juice", detail: "Vegetable NFC juices, aseptic.", img: vegetable },
    ],
  },
  {
    slug: "fruit-dices",
    name: "Fruit Dices",
    detail: "IQF and aseptic fruit dices in a range of cut sizes.",
    intro:
      "IQF and aseptic fruit dices in 5×5, 8×8 and 10×10 mm cuts, calibrated for yogurt, ice cream, bakery inclusions and fruit preparations.",
    img: apple,
    items: [
      { name: "Apple Dices", detail: "IQF 8×8 mm and 10×10 mm, natural or treated.", img: apple },
      { name: "Mango Dices", detail: "IQF 10×10 mm, sweet ripe cubes.", img: mango },
      { name: "Pineapple Dices", detail: "IQF and aseptic, 8×8 mm and 10×10 mm.", img: pineapple },
      { name: "Peach Dices", detail: "IQF 10×10 mm yellow peach.", img: peach },
      { name: "Strawberry Dices", detail: "IQF 8×8 mm and whole calibrated fruit.", img: strawberry },
      { name: "Banana Dices", detail: "IQF slices and cubes.", img: banana },
      { name: "Pomegranate Arils", detail: "IQF whole arils, hand selected.", img: pomegranate },
    ],
  },
  {
    slug: "fruit-nectars",
    name: "Fruit Nectars",
    detail: "Ready-to-use nectar bases for beverage filling lines.",
    intro:
      "Ready-to-fill nectar bases formulated to your target fruit content, Brix and acidity — supplied in aseptic bag-in-box, drums and IBCs.",
    img: peach,
    items: [
      { name: "Mango Nectar Base", detail: "25–35% fruit content, adjustable Brix.", img: mango },
      { name: "Peach Nectar Base", detail: "40–50% fruit content, aseptic.", img: peach },
      { name: "Orange Nectar Base", detail: "35–50% fruit content, with or without pulp.", img: orange },
      { name: "Guava Nectar Base", detail: "25–30% fruit content, tropical profile.", img: tropical },
      { name: "Apple Nectar Base", detail: "50% fruit content, clear or cloudy.", img: apple },
      { name: "Mixed Berry Nectar Base", detail: "Blended berry nectar with natural colour.", img: berry },
    ],
  },
  {
    slug: "fruit-crush",
    name: "Fruit Crush",
    detail: "Crushed fruit preparations for dairy, bakery and foodservice.",
    intro:
      "Crushed fruit preparations with visible fruit pieces, stabilised for dairy, bakery, ice cream and HORECA applications.",
    img: berry,
    items: [
      { name: "Strawberry Crush", detail: "With fruit pieces, 55–65 Brix.", img: strawberry },
      { name: "Mango Crush", detail: "Sweetened crush for beverages and desserts.", img: mango },
      { name: "Mixed Berry Crush", detail: "Blackcurrant, raspberry and blueberry blend.", img: berry },
      { name: "Pineapple Crush", detail: "Fine cut pieces in syrup.", img: pineapple },
      { name: "Lemon & Mint Crush", detail: "Citrus crush for foodservice mocktails.", img: lemon },
      { name: "Pomegranate Crush", detail: "Arils in natural juice base.", img: pomegranate },
    ],
  },
  {
    slug: "plant-based-concentrate",
    name: "Plant Based Concentrate",
    detail: "Oat, almond, soy and coconut bases for plant-based drinks.",
    intro:
      "Plant-based concentrates and bases for dairy alternatives — neutral or sweetened, barista-ready, in aseptic and frozen formats.",
    img: plantbased,
    items: [
      { name: "Oat Base Concentrate", detail: "Enzymatically hydrolysed, barista and classic grades.", img: plantbased },
      { name: "Almond Base Concentrate", detail: "High solids almond base for drinks and desserts.", img: plantbased },
      { name: "Soy Base Concentrate", detail: "Neutral soy base, non-GMO available.", img: plantbased },
      { name: "Coconut Base Concentrate", detail: "Coconut milk and water concentrates.", img: tropical },
      { name: "Rice Base Concentrate", detail: "Naturally sweet rice base for RTD beverages.", img: plantbased },
      { name: "Cashew Base Concentrate", detail: "Creamy cashew base for dairy alternatives.", img: plantbased },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
