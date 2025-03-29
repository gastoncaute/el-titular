import Link from "next/link";
import SeacrhInputButton from "../Buttons/SeacrhInputButton";
import CategoriesButton from "../Buttons/CategoriesButton";

interface NavBarProps {
  isOpen: boolean;
}

export default function NavBar({ isOpen }: NavBarProps) {
  return (
    <nav className={`navbar ${isOpen ? "open" : "closed"}`}>
      <ul>
        <li className="search-input">
          <SeacrhInputButton />
        </li>
        <li className="w-min headersButtons">
          <Link href="/">Inicio</Link>
        </li>
        <li className="w-40 headersButtons">
          <Link href={"/pages/masrecientes"}>Últimas Noticias</Link>
        </li>
        <li className="w-min navbar_categories">
          <CategoriesButton />
        </li>
        <li>
          <Link
            className="headersButtons"
            target="#"
            href={"https://wa.me/5492234544870"}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
