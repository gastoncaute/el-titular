"use client";
import { useState } from "react";
import BurgerButton from "./HeaderButtons/BurgerButton";
import SocialButtons from "./HeaderButtons/SocialButtons";
import Title from "./Components/Title";

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
      <div className=" bg-gradient-to-b from-pageColor to-gradientColor w-screen h-14 fixed z-10">
        <ul className="grid grid-cols-4">
          <li className="flex justify-center items-center col-start-1 col-end-2">
            <BurgerButton />
            <a
              href="/"
              className={`
              headersButtons flex items-center justify-center text-2xl transform transition-transform duration-1000
                ${scrollY ? "translate-y-0" : "-translate-y-20"}
              `}
            >
              El Titular
            </a>
          </li>
          <li className="flex justify-center col-start-4 col-end-5">
            <SocialButtons />
          </li>
        </ul>
      </div>
      <Title />
    </header>
  );
}
