import localFont from "next/font/local";
import { Edu_NSW_ACT_Foundation, Urbanist } from "next/font/google";

export const fontNokio = localFont({
  src: "./Nokio-Medium.ttf",
  variable: "--font-nokio",
});

export const fontFoundation = Edu_NSW_ACT_Foundation({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-foundation",
});

export const fontUrbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-urbanist",
});

