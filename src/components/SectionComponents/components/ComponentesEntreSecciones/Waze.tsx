import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Waze() {
  return (
    <>
      <Link
        href={`https://www.waze.com/en/live-map/`}
        target="#"
        className="flex flex-col items-center bg-gradient-to-b from-pageColor to-gradientColor w-max m-auto p-8 border border-pageColor rounded-3xl fotos_widget_section text-white text-3xl font-bold"
      >
        <h1>Cortes de Tránsito en Mar del Plata</h1>
        <Image
          className="mt-4 rounded-xl"
          src="/WazeWidget.png"
          alt=""
          height={600}
          width={600}
        />
      </Link>
    </>
  );
}
