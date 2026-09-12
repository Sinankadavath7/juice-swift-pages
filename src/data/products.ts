import catConcentrateGrid from "@/assets/fruit/apple-juice-concentrate-drums.jpg";
import catPuree from "@/assets/cat/puree.jpg";
import pineapplePuree from "@/assets/fruit/pineapple-puree.jpg";
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
import catHoreca from "@/assets/cat/horeca.jpg";

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
    img: catPuree,
    items: [
      { name: "Peach Purée", detail: "10–12 Brix, aseptic stone-fruit purée.", img: catPuree },
      { name: "Apricot Purée", detail: "10–12 Brix, aseptic stone-fruit purée.", img: catPuree },
      { name: "Pineapple Purée", detail: "12–18 Brix, aseptic, natural fibre.", img: pineapplePuree },
      { name: "Tomato Purée", detail: "28–30 Brix, hot break and cold break available.", img: catPuree },
      { name: "Watermelon Purée", detail: "8–10 Brix, aseptic, natural sweetness.", img: catPuree },
      { name: "Papaya Purée", detail: "9–11 Brix, aseptic tropical purée.", img: catPuree },
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
      { name: "Peach Dices", detail: "3-12mm, brix 10-12, aseptic.", img: catDices },
      { name: "Mango Dices", detail: "IQF 10×10 mm, sweet ripe cubes.", img: catDices },
      { name: "Pineapple Dices", detail: "3-12mm, brix 10-12, aseptic.", img: pineappleDices },
      { name: "Tomato Dices", detail: "IQF 8×8 mm and 10×10 mm, hot break.", img: catDices },
      { name: "Papaya Dices", detail: "IQF 8×8 mm and 10×10 mm, natural or treated.", img: papayaDices },
    ],
  },
  {
    slug: "horeca",
    name: "HORECA",
    detail: "Beverage solutions for hotels, restaurants and cafés.",
    intro:
      "Ready-to-use juice and beverage solutions tailored for the hotel, restaurant and café (HORECA) sector — bottled, portioned and foodservice-ready.",
    img: catHoreca,
    items: [],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
