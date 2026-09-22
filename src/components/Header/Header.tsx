"use client";
import { useState } from "react";
import Burger from "../Buttons/Burger";
import Link from "next/link";
import InputBusqueda from "./InputBusqueda";
import NavBar from "./NavBar";
import Categories from "../Buttons/Categories";
import TopBar from "./TopBar";
import Social from "../Buttons/Social";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <TopBar />

      <header className="main-header-sticky">
        <div className="main-header-container">
          <div className="header-brand">
            {/* <Burger setMenuVisible={setMenuVisible} /> */}

            <Link href="/" className="logo-link">
              <h1>EL TITULAR</h1>
            </Link>

            <span className="brand-separator" aria-hidden="true" />

            <p className="tagline">
              NOTICIAS QUE
              <br />
              MARCAN LA DIFERENCIA
            </p>
          </div>

          <div className="header-actions">
            <div className="social-container">
              <Social />
            </div>
            <div className="search-container">
              <InputBusqueda />
            </div>
          </div>
        </div>
      </header>

      <nav className="header-nav" aria-label="Navegación principal">
        <div className="header-nav-container">
          <ul>
            <Categories />
            <li className="contact-button">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/5492234544870"
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <NavBar isOpen={menuVisible} />
    </>
  );
}
