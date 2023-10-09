export default function NavBar() {
    return(
        <nav className="bg-gradient-to-b from-pageColor to-gradientColor w-96 h-screen flex flex-col absolute p-7 -ml-8 -mt-14">
            <ul className='flex flex-col h-full m-3 mt-20'>
                <li className='py-4'>Inicio</li>
                <li className='py-4'>Reds Sociales</li>
                <li className='py-4'>Contáctanos</li>
                <li className='py-4'>Fulbo</li>
            </ul>
        </nav>
    )
}