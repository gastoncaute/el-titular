"use client";
import { useState } from "react";
import BurgerButton from "../Buttons/BurgerButton";
import SocialButtons from "../Buttons/SocialButtons";
import Title from "./Components/Title";
import Link from "next/link";
import Image from "next/image";
import InputBusqueda from "./Components/InputBusqueda";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  function titleStyle() {
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
  titleStyle();

  return (
    <header className="flex justify-center text-white">
      <div className=" bg-gradient-to-b from-pageColor to-gradientColor w-screen h-14 fixed z-10 header">
        <ul className="grid grid-cols-4">
          <li>
            <BurgerButton />
          </li>
          <li className="col-start-1 col-end-2 flex flex-col items-center">
            <Link
              href="/"
              className={`mt-3 text-2xl subtitle_transform title_hover transform transition-transform duration-1000
              ${scrollY ? "translate-y-0" : "-translate-y-20"}`}
            >
              <Image
                src={"/eltitularwhite.png"}
                alt="EL TITULAR"
                height={50}
                width={100}
              />
            </Link>
            <InputBusqueda />
          </li>
          <li className="flex justify-center col-start-4 col-end-5 header_social_buttons h-min">
            <SocialButtons />
          </li>
        </ul>
      </div>
      <Title />
    </header>
  );
}
