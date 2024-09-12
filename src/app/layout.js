"use client";
import {
  Poppins,
  Press_Start_2P,
  Aoboshi_One,
  Prosto_One,
  Wallpoet,
} from "next/font/google";

import "./globals.css";
import Navbar from "@/features/Navbar";
import { SearchProvider } from "@/context/SearchContext";
import { CategoryProvider } from "@/context/CategoryContext";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const aoboshiOne = Aoboshi_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aoboshi-one",
});

const pressStart2 = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-press-start-2",
});

const prostoOne = Prosto_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-prosto-one",
});

const wallpoet = Wallpoet({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-wallpoet",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${aoboshiOne.variable} ${pressStart2.variable}  ${poppinsFont.variable}  ${prostoOne.variable} ${wallpoet.variable}  font-poppins antialiased`}
      >
        <SearchProvider>
          <CategoryProvider>
            <div className="">
              <Navbar />
              <div className="">{children}</div>
            </div>
          </CategoryProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
