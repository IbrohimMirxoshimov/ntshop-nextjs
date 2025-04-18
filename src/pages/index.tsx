import Masala from "@/components/Masala";
import { addToCart } from "@/store/slices/cart.slice";
import { RootState } from "@/store/types";
import { Geist, Geist_Mono } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Masala />
    </div>
  );
}
