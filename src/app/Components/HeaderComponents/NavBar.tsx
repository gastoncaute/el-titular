import CategoriesButton from "./CategoriesButton";

export default function NavBar() {
    return(
        <nav className="bg-gradient-to-b from-pageColor to-gradientColor w-96 h-screen flex flex-col absolute p-7 -ml-8 -mt-6">
            <ul className='flex flex-col h-full m-3 mt-8'>
                <li className='py-4 text-xl'>Inicio</li>
                <li className='py-4 text-xl'>Redes Sociales</li>
                <li className="py-4 text-xl">Categorias</li>
                <li className="flex flex-col justify-evenly w-32">
                    <CategoriesButton />
                </li>
            </ul>
        </nav>
    )
}