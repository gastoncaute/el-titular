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
        className="w-100 m-auto"
      >
        <Image
          src={"/edea/Fraude-970x90.gif"}
          alt={"Edea"}
          width={970}
          height={90}
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
