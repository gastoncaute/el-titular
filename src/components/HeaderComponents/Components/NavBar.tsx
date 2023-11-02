export default function NavBar() {
  return (
    <nav className="bg-gradient-to-b from-pageColor to-gradientColor w-96 h-screen flex flex-col absolute p-7 -ml-10 -mt-6">
      <ul className="flex flex-col h-full m-3 mt-8">
        <li className="py-4 text-xl">
          <a href="/">Inicio</a>
        </li>
        <li>Epigrafias</li>
      </ul>
    </nav>
  );
}
