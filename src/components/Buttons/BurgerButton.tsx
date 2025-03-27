"use client";
import { useState } from "react";
import NavBar from "../NavBar";

export default function BurgerButton() {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleBurgerButton = () => {
    setMenuVisible(!menuVisible);
  };
  async function BurgerButtonStyle() {
    if (typeof document !== "undefined") {
      const handleEscKey = (event: any) => {
        if (menuVisible && event.keyCode === 27) {
          toggleBurgerButton();
        }
      };
      document.addEventListener("keydown", handleEscKey);

      return () => {
        document.removeEventListener("keydown", handleEscKey);
      };
    }
  }
  BurgerButtonStyle();

  return (
    <button onClick={toggleBurgerButton}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#ffffff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="headersButtons"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
      </svg>
    </button>
    // <div
    //   className={`transform transition-transform duration-1500
    //   ${menuVisible ? "-translate-x-0" : "translate-x-full"} w-96`}
    // >
    //   <NavBar />
    // </div>
  );
}
