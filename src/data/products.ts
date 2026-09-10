import catConcentrate from "@/assets/cat/juice-concentrate.jpg";
import catPuree from "@/assets/cat/puree.jpg";
import catNfc from "@/assets/cat/nfc-juices.jpg";
import pineappleConcentrate from "@/assets/fruit/pineapple-juice-concentrate.jpg";
import orangeConcentrate from "@/assets/fruit/orange-juice-concentrate.png";
import appleConcentrate from "@/assets/fruit/apple-juice-concentrate.png";
import catDices from "@/assets/cat/fruit-dices.jpg";
import papayaDices from "@/assets/fruit/papaya-dices.jpg";

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
      { name: "Orange Juice Concentrate", detail: "65 Brix, frozen (FCOJ) — clarified or with pulp.", img: orangeConcentrate },
      { name: "Apple Juice Concentrate", detail: "70 Brix, clarified or cloudy, aseptic or frozen.", img: appleConcentrate },
      { name: "Pineapple Juice Concentrate", detail: "60 Brix, clarified, aseptic drums.", img: pineappleConcentrate },
      { name: "White Grape Juice Concentrate", detail: "68 Brix, clarified.", img: catConcentrate },
      { name: "Red Grape Juice Concentrate", detail: "68 Brix, clarified.", img: catConcentrate },
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
      { name: "Pineapple Purée", detail: "12–14 Brix, aseptic, natural fibre.", img: catPuree },
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
      { name: "Papaya Dices", detail: "IQF 8×8 mm and 10×10 mm, natural or treated.", img: papayaDices },
      { name: "Pomegranate Arils", detail: "IQF whole arils, hand selected.", img: catDices },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
