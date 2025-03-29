"use client";
import { useEffect } from "react";

interface BurgerButtonProps {
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BurgerButton({ setMenuVisible }: BurgerButtonProps) {
  const toggleBurgerButton = () => {
    setMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuVisible(false);
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [setMenuVisible]);

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
        className="button"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
      </svg>
    </button>
  );
}
