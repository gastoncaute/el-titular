import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-b from-pageColor to-gradientColor w-96 h-screen flex flex-col absolute p-7 -ml-12 -mt-6">
      <ul className="flex flex-col h-full m-3 mt-8">
        <li className="py-4 text-xl headersButtons w-min">
          <Link href="/">Inicio</Link>
        </li>
        <li className="py-4 text-xl headersButtons">
          <Link href={"/pages/masrecientes"}>Ultimas Noticias</Link>
        </li>
        <li className="py-4 text-xl headersButtons w-min">
          <Link href={"/pages/infografiaspage/Infografias"}>Infografias</Link>
        </li>
        <li className="py-4 text-xl headersButtons w-min">
          <Link href={"/pages/fotografiaspage/Fotografias"}>Fotografias</Link>
        </li>
      </ul>
    </nav>
  );
}
