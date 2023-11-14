"use client";
import { useState } from "react";
import CategoriesButton from "../../CategoriesButton";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";

export default function Title() {
  const [scrollY, setScrollY] = useState(0);
  function inicioStyle() {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }
  inicioStyle();

  return (
    <section
      className={`flex flex-col items-center fixed transform transition-transform duration-1500 z-10 title_transform
            ${scrollY ? "-translate-y-24" : "translate-y-0"}
            `}
    >
      <h1 className="flex justify-center items-center bg-gradient-to-b from-pageColor to-gradientColor rounded-b-3xl border-l border-r border-b border-white w-65rem h-24 title">
        <Link
          href={"/"}
          className="font-bold text-7xl flex justify-center title_hover"
        >
          <Image
            src={"/eltitularwhite.png"}
            alt="EL TITULAR"
            height={80}
            width={450}
          />
        </Link>
      </h1>
      <nav className="flex items-center bg-gradient-to-b from-pageColor to-gradientColor rounded-b-3xl border-l border-r border-b border-white w-60rem h-12 px-4 category_nav">
        <ul className="w-full flex items-center justify-evenly">
          <li className="flex justify-evenly w-full">
            <CategoriesButton />
          </li>
        </ul>
      </nav>
    </section>
  );
}
