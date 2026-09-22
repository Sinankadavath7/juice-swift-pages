import catConcentrateGrid from "@/assets/fruit/apple-juice-concentrate-drums.jpg";
import pineapplePuree from "@/assets/fruit/pineapple-puree.jpg";
import tomatoPuree from "@/assets/tomato-puree.png";
import papayaPuree from "@/assets/papaya-puree.png";
import peachPuree from "@/assets/peach-puree.png";
import apricotPuree from "@/assets/apricot-puree.png";
import watermelonPuree from "@/assets/watermelon-puree.jpg";
import catNfc from "@/assets/cat/nfc-juices.jpg";
import nfcPineappleJuice from "@/assets/fruit/nfc-pineapple-juice.jpg";
import nfcWatermelonJuice from "@/assets/fruit/nfc-watermelon-juice.jpg";
import whiteGrapeConcentrate from "@/assets/fruit/white-grape-juice-concentrate.png";
import redGrapeConcentrate from "@/assets/fruit/red-grape-juice-concentrate.png";
import pineappleConcentrate2 from "@/assets/fruit/pineapple-juice-concentrate-2.jpg";
import orangeConcentrateDrums from "@/assets/fruit/orange-juice-concentrate-drums.jpg";
import appleConcentrate from "@/assets/fruit/apple-juice-concentrate-drums.jpg";
import catDices from "@/assets/cat/fruit-dices.jpg";
import papayaDices from "@/assets/fruit/papaya-dices.jpg";
import pineappleDices from "@/assets/fruit/pineapple-dices_1.jpg";
import mangoDices from "@/assets/mango-dices.png";
import peachDices from "@/assets/peach-dices.jpg";
import catHoreca from "@/assets/cat/horeca.jpg";
import horecaBottledJuice from "@/assets/bottled-juice-crates.jpg";
import horecaBagInBox from "@/assets/bag-in-box-pineapple.jpg";
import horecaOrangeBottle from "@/assets/horeca-orange-bottle.jpg";
import horecaCannedFruitsVegetables from "@/assets/horeca-canned-fruits-vegetables.jpg";
import horecaCannedPreservedFoods from "@/assets/horeca-canned-preserved-foods.jpg";
import horecaFruitPureesPulps from "@/assets/horeca-fruit-purees-pulps.jpg";
import horecaFruitBasesBeverages from "@/assets/horeca-fruit-bases-beverages.jpg";
import horecaFrozenFruitProducts from "@/assets/horeca-frozen-fruit-products.jpg";
import horecaFruitIngredientsShakes from "@/assets/horeca-fruit-ingredients-shakes.jpg";

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
    img: catConcentrateGrid,
    items: [
      { name: "Orange Juice Concentrate", detail: "65 Brix, Ratio : 18-25, frozen (FCOJ) — clarified or with pulp.", img: orangeConcentrateDrums },
      { name: "Apple Juice Concentrate", detail: "70 Brix, Acidity: 1.0-2.5, clarified or cloudy, aseptic or frozen.", img: appleConcentrate },
      { name: "Pineapple Juice Concentrate", detail: "60 Brix, B/A Ratio : 18-30 ,clarified, aseptic drums.", img: pineappleConcentrate2 },
      { name: "White Grape Juice Concentrate", detail: "68 Brix, clarified.", img: whiteGrapeConcentrate },
      { name: "Red Grape Juice Concentrate", detail: "68 Brix, clarified.", img: redGrapeConcentrate },
    ],
  },
  {
    slug: "puree",
    name: "Purée",
    detail: "Single-strength and concentrated purées for every application.",
    intro:
      "Smooth single-strength and concentrated purées with fine particle size, engineered for yogurt, ice cream, bakery fillings and confectionery.",
    img: peachPuree,
    items: [
      { name: "Peach Purée", detail: "10–12 Brix, aseptic stone-fruit purée.", img: peachPuree },
      { name: "Apricot Purée", detail: "10–12 Brix, aseptic stone-fruit purée.", img: apricotPuree },
      { name: "Pineapple Purée", detail: "12–18 Brix, aseptic, natural fibre.", img: pineapplePuree },
      { name: "Tomato Purée", detail: "28–30 Brix, hot break and cold break available.", img: tomatoPuree },
      { name: "Watermelon Purée", detail: "8–10 Brix, aseptic, natural sweetness.", img: watermelonPuree },
      { name: "Papaya Purée", detail: "9–11 Brix, aseptic tropical purée.", img: papayaPuree },
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
      { name: "NFC Pineapple Juice", detail: "12-18 Brix, aseptic, tropical aroma.", img: nfcPineappleJuice },
      { name: "NFC Watermelon Juice", detail: "8 Brix, chilled or frozen, natural aroma.", img: nfcWatermelonJuice },
    ],
  },
  {
    slug: "fruit-dices",
    name: "Fruit Dices",
    detail: "aseptic fruit dices in a range of cut sizes.",
    intro:
      "IQF and aseptic fruit dices in 5×5, 8×8 and 10×10 mm cuts, calibrated for yogurt, ice cream, bakery inclusions and fruit preparations.",
    img: catDices,
    items: [
      { name: "Peach Dices", detail: "3-12mm, brix 10-12, aseptic.", img: peachDices },
      { name: "Mango Dices", detail: "10×10 mm, sweet ripe cubes.", img: mangoDices },
      { name: "Pineapple Dices", detail: "3-12mm, brix 10-12, aseptic.", img: pineappleDices },
      { name: "Tomato Dices", detail: "8×8 mm and 10×10 mm, hot break.", img: papayaDices },
      { name: "Papaya Dices", detail: "8×8 mm and 10×10 mm, natural or treated.", img: catDices },
    ],
  },
  {
    slug: "horeca",
    name: "HORECA",
    detail: "Beverage solutions for hotels, restaurants and cafés.",
    intro:
      "Ready-to-use juice and beverage solutions tailored for the hotel, restaurant and café (HORECA) sector — bottled, portioned and foodservice-ready.",
    img: catHoreca,
    items: [
      { name: "Bottled Juice Crates", detail: "Ready-to-serve bottled juice, packed for foodservice distribution.", img: horecaBottledJuice },
      { name: "Fruit Bag-in-Box", detail: "Aseptic bag-in-box fruit preparations across our range, packed for HORECA use.", img: horecaBagInBox },
      { name: "Bottled Juice Concentrate", detail: "Bottled juice concentrate in various quantity and available in a range of fruit flavours.", img: horecaOrangeBottle },
      { name: "Canned Fruits & Vegetables", detail: "Canned fruits, vegetables and pulses in a range of pack sizes for foodservice.", img: horecaCannedFruitsVegetables },
      { name: "Fruit Purées & Pulps", detail: "Smooth fruit purées and pulps for foodservice preparation.", img: horecaFruitPureesPulps },
      { name: "Fruit Bases for Beverages, Smoothies & Desserts", detail: "Ready-to-use fruit bases for beverages, smoothies and desserts.", img: horecaFruitBasesBeverages },
      { name: "Frozen Fruit Products", detail: "Frozen fruit products for foodservice kitchens.", img: horecaFrozenFruitProducts },
      { name: "Fruit Ingredients for Shakes, Mocktails, Desserts & Bakery", detail: "Fruit ingredients for shakes, mocktails, desserts and bakery applications.", img: horecaFruitIngredientsShakes },
      { name: "Wheat Flour", detail: "Bulk wheat flour for bakery and foodservice kitchens.", img: catHoreca },
      { name: "Sugar & Sweeteners", detail: "Granulated sugar and sweeteners in foodservice pack sizes.", img: catHoreca },
      { name: "Tomato Ketchup", detail: "Classic tomato ketchup, packed for foodservice use.", img: catHoreca },
      { name: "Ready-to-use Sauces", detail: "Ready-to-use sauces for HORECA kitchens, no prep required.", img: catHoreca },
      { name: "Condiments & Spices", detail: "A range of condiments and spices for foodservice kitchens.", img: catHoreca },
      { name: "Vinegars", detail: "Table and cooking vinegars in foodservice pack sizes.", img: catHoreca },
      { name: "Canned / Preserved Foods", detail: "Canned and preserved foods in a range of pack sizes.", img: horecaCannedPreservedFoods },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
