"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function SeacrhInput() {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && busqueda.trim() !== "") {
      window.location.href = `/pages/searchpage/${busqueda.trim()}`;
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Buscador"
        className="px-2 mr-2 rounded-sm text-black"
        value={busqueda}
        onChange={handleChange}
      />
      <Link
        href={busqueda.trim() !== "" ? `/pages/searchpage/${busqueda}` : "#"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </Link>
    </>
  );
}
