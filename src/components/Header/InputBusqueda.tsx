"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function InputBusqueda() {
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
      <Link
        href={busqueda.trim() !== "" ? `/pages/searchpage/${busqueda}` : "#"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
          width="36"
          height="36"
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
      <input
        type="text"
        className="search-input"
        value={busqueda}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
