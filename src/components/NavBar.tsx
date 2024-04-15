import Link from "next/link";
import CategoriesButton from "./Buttons/CategoriesButton";
import SocialButtons from "./Buttons/SocialButtons";
import SeacrhInputButton from "./Buttons/SeacrhInputButton";

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-b from-pageColor to-gradientColor w-96 h-screen flex flex-col justify-evenly absolute p-7 navbar">
      <ul className="flex flex-col h-full m-3 mt-8 navbar_ul">
        <li className="py-4 input-busqueda-navbar w-min navbar_li">
          <SeacrhInputButton />
        </li>
        <li className="py-4 text-xl headersButtons w-min navbar_li">
          <Link href="/">Inicio</Link>
        </li>
        <li className="py-4 text-xl headersButtons w-40 navbar_li">
          <Link href={"/pages/masrecientes"}>Ultimas Noticias</Link>
        </li>
        <li className="py-4 text-xl w-40 navbar_li navbar_categories">
          Categorias
          <CategoriesButton />
        </li>
        <li className="py-4 text-xl headersButtons w-min navbar_li navbar_infografia">
          <Link href={"/pages/fotospage/Infografias"}>Infografias</Link>
        </li>
        <li className="py-4 text-xl headersButtons w-min navbar_li navbar_fotografia">
          <Link href={"/pages/fotospage/Fotografias"}>Fotografias</Link>
        </li>
      </ul>
      <ul className="navbar_social_buttons text-xl">
        <li className="flex justify-center">Síguenos en nuestras redes</li>
        <li className="flex justify-center">
          <SocialButtons />
        </li>
      </ul>
    </nav>
  );
}
