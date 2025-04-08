import Link from "next/link";
import Social from "../Buttons/Social";
import Categories from "../Buttons/Categories";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <article>
        <h1>
          <Link href="/">
            <Image
              className="title-hover"
              src={"/eltitularwhite.png"}
              alt="EL TITULAR"
              height={80}
              width={350}
            />
          </Link>
        </h1>
        <h2>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "NOTICIAS QUE MARCAN LA DIFERENCIA"
        </h2>
        <div className="footer-socials">
          <Social />
        </div>
        <ul>
          <Categories />
        </ul>
        <h3>
          <Link
            href={"mailto:eltitularmdp@gmail.com"}
            target="#"
            className="button"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
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
          <Link
            href={"https://wa.me/5492234544870"}
            target="#"
            className="button"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            +54 9 223 454-4870
          </Link>
          <Link
            href={"/pages/terminosycondiciones"}
            target="#"
            className="button"
          >
            Términos y condiciones
          </Link>
        </h3>
        <h5>
          <Link
            href="https://www.linkedin.com/in/gaston-cauteruccio/"
            target="#"
            className="button"
          >
            Página creada por Gaston Cauteruccio
          </Link>
        </h5>
      </article>
    </footer>
  );
}
