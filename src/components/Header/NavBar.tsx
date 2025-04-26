import Link from "next/link";
import SeacrhInput from "../Buttons/SeacrhInput";
import Categories from "../Buttons/Categories";

interface NavBarProps {
  isOpen: boolean;
}

export default function NavBar({ isOpen }: NavBarProps) {
  return (
    <nav className={`navbar ${isOpen ? "open" : "closed"}`}>
      <ul>
        <li className="search-input">
          <SeacrhInput />
        </li>
        <li className="button">
          <Link href="/">INICIO</Link>
        </li>
        <li className="w-44 button">
          <Link href={"/pages/masrecientes"}>ULTIMAS NOTICIAS</Link>
        </li>
        <Categories />
        <li className="button">
          <Link target="#" href={"https://wa.me/5492234544870"}>
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
}
