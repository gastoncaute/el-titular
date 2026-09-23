import React from "react";
import Categoria from "./Categoria";
import Recientes from "./Recientes";
import Link from "next/link";
import Image from "next/image";

export default async function Noticias() {
  return (
    <>
      <Link
        href="https://www.edeaweb.com.ar/robo-de-energia/"
        target="_blank"
        className="w-100 m-auto block"
      >
        <Image
          src="/edea/Fraude-Main-Movil.gif"
          alt="Edea Movil"
          width={800}
          height={90}
          className="m-auto banner-edea-mobile"
          priority
        />

        <Image
          src="/edea/Fraude-Main-Pc.gif"
          alt="Edea PC"
          width={1200}
          height={150}
          className="m-auto banner-edea-pc"
          priority
        />
      </Link>
      <Recientes />
      {/* <div className="banner-publicidad">
        <p>
          <strong>Publicidad</strong>
        </p>
      </div> */}
      <Categoria />
    </>
  );
}
