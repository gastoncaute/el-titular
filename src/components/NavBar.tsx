import Link from "next/link";
import CategoriesButton from "./Buttons/CategoriesButton";
import SeacrhInputButton from "./Buttons/SeacrhInputButton";

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
      </ul>
    </nav>
  );
}
