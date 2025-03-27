"use client";
import BurgerButton from "../Buttons/BurgerButton";
import Link from "next/link";
import Image from "next/image";
import InputBusqueda from "./InputBusqueda";

export default function Header() {
  return (
    <header>
      <article className="header-article">
        <BurgerButton />
        <Link href="/" className={`title_hover`}>
          <Image
            src={"/eltitularwhite.png"}
            alt="EL TITULAR"
            height={100}
            width={140}
          />
        </Link>
        <ul>
          <li>
            <Link className="headersButtons" href={""}>
              POLITICA
            </Link>
          </li>
          <li>
            <Link className="headersButtons" href={""}>
              ACTUALIDAD
            </Link>
          </li>
          <li>
            <Link className="headersButtons" href={""}>
              POLICIALES
            </Link>
          </li>
          <li>
            <Link className="headersButtons" href={""}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </article>
      <article className="input-busqueda">
        <InputBusqueda />
      </article>
    </header>
  );
}
