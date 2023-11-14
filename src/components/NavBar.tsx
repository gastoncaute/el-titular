import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-b from-pageColor to-gradientColor w-96 h-screen flex flex-col absolute p-7 -ml-12 -mt-6 navbar">
      <ul className="flex flex-col h-full m-3 mt-8">
        <li className="py-4 text-xl headersButtons w-min navbar_li">
          <Link href="/">Inicio</Link>
        </li>
        <li className="py-4 text-xl headersButtons w-40 navbar_li">
          <Link href={"/pages/masrecientes"}>Ultimas Noticias</Link>
        </li>
        <li className="py-4 text-xl headersButtons w-min navbar_li">
          <Link href={"/pages/fotospage/Infografias"}>Infografias</Link>
        </li>
        <li className="py-4 text-xl headersButtons w-min navbar_li">
          <Link href={"/pages/fotospage/Fotografias"}>Fotografias</Link>
        </li>
      </ul>
    </nav>
  );
}
