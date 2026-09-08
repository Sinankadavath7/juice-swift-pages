import catConcentrate from "@/assets/cat/juice-concentrate.jpg";
import catPulp from "@/assets/cat/fruit-pulp.jpg";
import catPuree from "@/assets/cat/puree.jpg";
import catNfc from "@/assets/cat/nfc-juices.jpg";
import pineappleConcentrate from "@/assets/fruit/pineapple-juice-concentrate.jpg.asset.json";
import catDices from "@/assets/cat/fruit-dices.jpg";
import catNectars from "@/assets/cat/fruit-nectars.jpg";
import catCrush from "@/assets/cat/fruit-crush.jpg";
import catPlant from "@/assets/cat/plant-based.jpg";

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
    img: catConcentrate,
    items: [
      { name: "Orange Juice Concentrate", detail: "65 Brix, frozen (FCOJ) — clarified or with pulp.", img: catConcentrate },
      { name: "Apple Juice Concentrate", detail: "70 Brix, clarified or cloudy, aseptic or frozen.", img: catConcentrate },
      { name: "Lemon Juice Concentrate", detail: "400 GPL acidity, clarified or cloudy.", img: catConcentrate },
      { name: "Pineapple Juice Concentrate", detail: "60 Brix, clarified, aseptic drums.", img: pineappleConcentrate.url },
      { name: "Grape Juice Concentrate", detail: "68 Brix, white and red, clarified.", img: catConcentrate },
      { name: "Mango Juice Concentrate", detail: "28–30 Brix, Alphonso, Kesar and Totapuri.", img: catConcentrate },
      { name: "Pomegranate Juice Concentrate", detail: "65 Brix, clarified or cloudy.", img: catConcentrate },
      { name: "Peach & Apricot Concentrate", detail: "70 Brix, clarified stone-fruit concentrates.", img: catConcentrate },
      { name: "Berry Juice Concentrate", detail: "Strawberry, raspberry, blackcurrant and cherry.", img: catConcentrate },
      { name: "Vegetable Juice Concentrate", detail: "Carrot, beetroot and tomato concentrates.", img: catConcentrate },
    ],
  },
  {
    slug: "fruit-pulp",
    name: "Fruit Pulp",
    detail: "Aseptic and frozen pulp with natural fruit character.",
    intro:
      "Aseptic and frozen fruit pulp processed close to harvest, preserving natural colour, aroma and Brix for beverage, dairy and bakery lines.",
    img: catPulp,
    items: [
      { name: "Mango Pulp", detail: "Alphonso, Kesar, Totapuri — 16–18 Brix, aseptic.", img: catPulp },
      { name: "Guava Pulp", detail: "White and pink guava, 9–11 Brix, aseptic.", img: catPulp },
      { name: "Banana Pulp", detail: "22 Brix, aseptic, ideal for smoothies and dairy.", img: catPulp },
      { name: "Papaya Pulp", detail: "9–11 Brix, aseptic tropical pulp.", img: catPulp },
      { name: "Strawberry Pulp", detail: "7–9 Brix, frozen or aseptic.", img: catPulp },
      { name: "Pineapple Pulp", detail: "12–14 Brix, aseptic, with natural fibre.", img: catPulp },
      { name: "Peach Pulp", detail: "10–12 Brix, aseptic, yellow flesh.", img: catPulp },
      { name: "Tomato Pulp", detail: "Hot break and cold break, 28–30 Brix paste available.", img: catPulp },
    ],
  },
  {
    slug: "puree",
    name: "Purée",
    detail: "Single-strength and concentrated purées for every application.",
    intro:
      "Smooth single-strength and concentrated purées with fine particle size, engineered for yogurt, ice cream, bakery fillings and confectionery.",
    img: catPuree,
    items: [
      { name: "Strawberry Purée", detail: "Single strength and 28 Brix concentrated.", img: catPuree },
      { name: "Mango Purée", detail: "Single strength 16 Brix and 28 Brix concentrated.", img: catPuree },
      { name: "Apple Purée", detail: "11 Brix, natural or acidified.", img: catPuree },
      { name: "Peach & Apricot Purée", detail: "10–12 Brix, aseptic stone-fruit purées.", img: catPuree },
      { name: "Banana Purée", detail: "22 Brix, aseptic, smooth texture.", img: catPuree },
      { name: "Raspberry & Blackberry Purée", detail: "Seedless, single strength or concentrated.", img: catPuree },
      { name: "Pomegranate Purée", detail: "15 Brix, deep natural colour.", img: catPuree },
      { name: "Passion Fruit Purée", detail: "13–15 Brix, aromatic tropical purée.", img: catPuree },
    ],
  },
  {
    slug: "nfc-juices",
    name: "NFC Juices",
    detail: "Not-from-concentrate juices, chilled or frozen.",
    intro:
      "Not-from-concentrate juices pressed and preserved without dilution — full natural aroma profile, supplied chilled, frozen or aseptic.",
    img: catNfc,
    items: [
      { name: "NFC Orange Juice", detail: "11–12 Brix, chilled or frozen, with or without pulp.", img: catNfc },
      { name: "NFC Apple Juice", detail: "11 Brix, clear or cloudy, aseptic.", img: catNfc },
      { name: "NFC Pineapple Juice", detail: "12 Brix, aseptic, tropical aroma.", img: catNfc },
      { name: "NFC Grape Juice", detail: "16 Brix, white and red varieties.", img: catNfc },
      { name: "NFC Lemon Juice", detail: "Natural acidity, chilled or frozen.", img: catNfc },
      { name: "NFC Pomegranate Juice", detail: "15 Brix, cold pressed, deep colour.", img: catNfc },
      { name: "NFC Carrot & Beet Juice", detail: "Vegetable NFC juices, aseptic.", img: catNfc },
    ],
  },
  {
    slug: "fruit-dices",
    name: "Fruit Dices",
    detail: "IQF and aseptic fruit dices in a range of cut sizes.",
    intro:
      "IQF and aseptic fruit dices in 5×5, 8×8 and 10×10 mm cuts, calibrated for yogurt, ice cream, bakery inclusions and fruit preparations.",
    img: catDices,
    items: [
      { name: "Apple Dices", detail: "IQF 8×8 mm and 10×10 mm, natural or treated.", img: catDices },
      { name: "Mango Dices", detail: "IQF 10×10 mm, sweet ripe cubes.", img: catDices },
      { name: "Pineapple Dices", detail: "IQF and aseptic, 8×8 mm and 10×10 mm.", img: catDices },
      { name: "Peach Dices", detail: "IQF 10×10 mm yellow peach.", img: catDices },
      { name: "Strawberry Dices", detail: "IQF 8×8 mm and whole calibrated fruit.", img: catDices },
      { name: "Banana Dices", detail: "IQF slices and cubes.", img: catDices },
      { name: "Pomegranate Arils", detail: "IQF whole arils, hand selected.", img: catDices },
    ],
  },
  {
    slug: "fruit-nectars",
    name: "Fruit Nectars",
    detail: "Ready-to-use nectar bases for beverage filling lines.",
    intro:
      "Ready-to-fill nectar bases formulated to your target fruit content, Brix and acidity — supplied in aseptic bag-in-box, drums and IBCs.",
    img: catNectars,
    items: [
      { name: "Mango Nectar Base", detail: "25–35% fruit content, adjustable Brix.", img: catNectars },
      { name: "Peach Nectar Base", detail: "40–50% fruit content, aseptic.", img: catNectars },
      { name: "Orange Nectar Base", detail: "35–50% fruit content, with or without pulp.", img: catNectars },
      { name: "Guava Nectar Base", detail: "25–30% fruit content, tropical profile.", img: catNectars },
      { name: "Apple Nectar Base", detail: "50% fruit content, clear or cloudy.", img: catNectars },
      { name: "Mixed Berry Nectar Base", detail: "Blended berry nectar with natural colour.", img: catNectars },
    ],
  },
  {
    slug: "fruit-crush",
    name: "Fruit Crush",
    detail: "Crushed fruit preparations for dairy, bakery and foodservice.",
    intro:
      "Crushed fruit preparations with visible fruit pieces, stabilised for dairy, bakery, ice cream and HORECA applications.",
    img: catCrush,
    items: [
      { name: "Strawberry Crush", detail: "With fruit pieces, 55–65 Brix.", img: catCrush },
      { name: "Mango Crush", detail: "Sweetened crush for beverages and desserts.", img: catCrush },
      { name: "Mixed Berry Crush", detail: "Blackcurrant, raspberry and blueberry blend.", img: catCrush },
      { name: "Pineapple Crush", detail: "Fine cut pieces in syrup.", img: catCrush },
      { name: "Lemon & Mint Crush", detail: "Citrus crush for foodservice mocktails.", img: catCrush },
      { name: "Pomegranate Crush", detail: "Arils in natural juice base.", img: catCrush },
    ],
  },
  {
    slug: "plant-based-concentrate",
    name: "Plant Based Concentrate",
    detail: "Oat, almond, soy and coconut bases for plant-based drinks.",
    intro:
      "Plant-based concentrates and bases for dairy alternatives — neutral or sweetened, barista-ready, in aseptic and frozen formats.",
    img: catPlant,
    items: [
      { name: "Oat Base Concentrate", detail: "Enzymatically hydrolysed, barista and classic grades.", img: catPlant },
      { name: "Almond Base Concentrate", detail: "High solids almond base for drinks and desserts.", img: catPlant },
      { name: "Soy Base Concentrate", detail: "Neutral soy base, non-GMO available.", img: catPlant },
      { name: "Coconut Base Concentrate", detail: "Coconut milk and water concentrates.", img: catPlant },
      { name: "Rice Base Concentrate", detail: "Naturally sweet rice base for RTD beverages.", img: catPlant },
      { name: "Cashew Base Concentrate", detail: "Creamy cashew base for dairy alternatives.", img: catPlant },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
