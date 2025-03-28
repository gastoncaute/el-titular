"use client";
import { useState } from "react";
import BurgerButton from "../Buttons/BurgerButton";
import Link from "next/link";
import Image from "next/image";
import InputBusqueda from "./InputBusqueda";
import NavBar from "./NavBar";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <header>
        <article className="header-article">
          <BurgerButton setMenuVisible={setMenuVisible} />
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
              <Link
                className="headersButtons"
                href={`/pages/categorypage/Politica`}
              >
                POLITICA
              </Link>
            </li>
            <li>
              <Link
                className="headersButtons"
                href={`/pages/categorypage/Actualidad`}
              >
                ACTUALIDAD
              </Link>
            </li>
            <li>
              <Link
                className="headersButtons"
                href={`/pages/categorypage/Policiales`}
              >
                POLICIALES
              </Link>
            </li>
            <li>
              <Link
                className="headersButtons"
                target="#"
                href={"https://wa.me/5492234544870"}
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </article>
        <article className="input-busqueda">
          <InputBusqueda />
        </article>
      </header>
      <NavBar isOpen={menuVisible} />
    </>
  );
}
