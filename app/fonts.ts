import { Inter, Caveat } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const impact = localFont({
  src: "../public/fonts/Impact.ttf",
  variable: "--font-impact",
});
