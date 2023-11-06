"use client";
import { useState } from "react";
import CategoriesButton from "../../CategoriesButton";
import Image from "next/image";
import Link from "next/link";

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
      className={`flex flex-col items-center fixed transform transition-transform duration-1500 z-10
            ${scrollY ? "-translate-y-24" : "translate-y-0"}
            `}
    >
      <div className="grid grid-cols-3 items-center bg-gradient-to-b from-pageColor to-gradientColor rounded-b-3xl border-l border-r border-b border-white w-65rem h-24">
        <Image
          className="ml-16"
          src="/favicon.ico"
          alt="Icono"
          width="64"
          height="64"
        />
        <Link href={"/"} className="font-bold text-7xl flex justify-center">
          El Titular
        </Link>
      </div>
      <div className="flex items-center bg-gradient-to-b from-pageColor to-gradientColor rounded-b-3xl border-l border-r border-b border-white w-60rem h-12 px-4">
        <ul className="w-full flex items-center justify-evenly">
          <li className="flex justify-evenly w-full">
            <CategoriesButton />
          </li>
        </ul>
      </div>
    </section>
  );
}
