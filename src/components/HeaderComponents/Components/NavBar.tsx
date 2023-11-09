export default function NavBar() {
  return (
    <nav className="bg-gradient-to-b from-pageColor to-gradientColor w-96 h-screen flex flex-col absolute p-7 -ml-12 -mt-6">
      <ul className="flex flex-col h-full m-3 mt-8">
        <li className="py-4 text-xl headersButtons w-min">
          <a href="/">Inicio</a>
        </li>
        <li className="headersButtons w-min">Epigrafias</li>
      </ul>
    </nav>
  );
}
