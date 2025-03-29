"use client";
import { useState } from "react";
import BurgerButton from "../Buttons/BurgerButton";
import Link from "next/link";
import Image from "next/image";
import InputBusqueda from "./InputBusqueda";
import NavBar from "./NavBar";
import CategoriesButton from "../Buttons/CategoriesButton";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <header>
        <article className="header-article">
          <BurgerButton setMenuVisible={setMenuVisible} />
          <Link href="/" className={`title-hover`}>
            <Image
              src={"/eltitularwhite.png"}
              alt="EL TITULAR"
              height={100}
              width={140}
            />
          </Link>
          <ul>
            <CategoriesButton />
            <li>
              <Link
                className="button"
                target="#"
                href={"https://wa.me/5492234544870"}
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </article>
        <article className="input-article">
          <InputBusqueda />
        </article>
      </header>
      <NavBar isOpen={menuVisible} />
    </>
  );
}
