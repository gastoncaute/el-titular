"use client";

import Link from "next/link";
import InputBusqueda from "./InputBusqueda";
import Categories from "../Buttons/Categories";
import TopBar from "./TopBar";
import Social from "../Buttons/Social";
import SeacrhInput from "../Buttons/SeacrhInput";

export default function Header() {
  return (
    <>
      <TopBar />

      {/* Checkbox oculto que controla si el menú está abierto o cerrado */}
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle-checkbox"
        hidden
      />

      <header className="main-header-sticky">
        <div className="main-header-container">
          <div className="header-brand">
            {/* El label está vinculado al checkbox por id="menu-toggle" */}
            <label
              htmlFor="menu-toggle"
              className="burger-button"
              aria-label="Abrir menú"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="#86082e"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pointerEvents: "none" }}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </label>

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

      {/* Navegación Desktop */}
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

      {/* Fondo oscuro para cerrar al hacer clic afuera */}
      <label htmlFor="menu-toggle" className="navbar-overlay" />

      {/* Menú Desplegable Lateral para Móviles */}
      <nav className="navbar">
        <label
          htmlFor="menu-toggle"
          className="close-menu-btn"
          aria-label="Cerrar menú"
        >
          ✕
        </label>

        <ul>
          <li className="search-input">
            <SeacrhInput />
          </li>
          <li className="button">
            <Link href="/">INICIO</Link>
          </li>
          <li className="w-44 button">
            <Link href="/pages/masrecientes">ULTIMAS NOTICIAS</Link>
          </li>
          <Categories />
          <li className="button">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5492234544870"
            >
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
