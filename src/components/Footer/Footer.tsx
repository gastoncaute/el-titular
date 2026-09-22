import Link from "next/link";
import Image from "next/image";
import Social from "../Buttons/Social";
import Categories from "../Buttons/Categories";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/">
            <h2>EL TITULAR</h2>
          </Link>
          <p className="footer-tagline">Noticias que marcan la diferencia</p>
        </div>

        <nav className="footer-nav">
          <h3>Secciones</h3>
          <ul>
            <Categories />
          </ul>
        </nav>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>
            <Link
              href="mailto:eltitularmdp@gmail.com"
              className="footer-contact-link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              eltitularmdp@gmail.com
            </Link>
          </p>
          <p>
            <Link
              href="https://wa.me/5492234544870"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              +54 9 223 454-4870
            </Link>
          </p>
          <address className="footer-contact-link">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            Mar del Plata, Buenos Aires
          </address>
        </div>

        <div className="footer-socials">
          <h3>Seguinos</h3>
          <div className="footer-social-icons">
            <Social />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 EL TITULAR - Todos los derechos reservados</p>
        {/* <Link
          href="https://www.linkedin.com/in/gaston-cauteruccio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Página creada por Gaston Cauteruccio
        </Link> */}
        <Link href="/pages/terminosycondiciones">
          Términos y condiciones | Política y privacidad
        </Link>
      </div>
    </footer>
  );
}
