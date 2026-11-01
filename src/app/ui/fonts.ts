import { Shippori_Antique_B1, Zen_Kaku_Gothic_New } from "next/font/google";

export const kosugiMaru = {
  className: 'font-sans',
};

export const shipporiAntiqueB1 = Shippori_Antique_B1({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
