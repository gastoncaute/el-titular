import Categories from "./Categories";
import PolicialesButton from "./Categories/PolicialesButton";
import PoliticaButton from "./Categories/PoliticaButton";
import EconomiaButton from "./Categories/EconomiaButton";
import SociedadButton from "./Categories/SociedadButton";
import DeporteButton from "./Categories/DeporteButton";
import ClulturaButton from "./Categories/CulturaButton";
import TendenciasButton from "./Categories/TendenciasButton";
import InternacionalButton from "./Categories/InternacionalButton";
import FotosButton from "./Categories/FotosButton";

export default function NavBar() {
    return(
        <nav className="bg-gradient-to-b from-pageColor to-gradientColor w-96 h-screen flex flex-col absolute p-7 -ml-8 -mt-6">
            <ul className='flex flex-col h-full m-3 mt-8'>
                <li className='py-4 text-xl'>Inicio</li>
                <li className='py-4 text-xl'>Redes Sociales</li>
                <ul className="flex-col items-center">
                    <li className="border-b w-32 p-4">
                        <PolicialesButton />
                    </li>
                    <li className="border-b w-32 p-4">
                        <PoliticaButton />
                    </li>
                    <li className="border-b w-32 p-4">
                        <EconomiaButton />
                    </li>
                    <li className="border-b w-32 p-4">
                        <SociedadButton />
                    </li>
                    <li className="border-b w-32 p-4">
                        <DeporteButton />
                    </li>
                    <li className="border-b w-32 p-4">
                        <ClulturaButton />
                    </li>
                    <li className="border-b w-32 p-4">
                        <TendenciasButton />
                    </li>
                    <li className="border-b w-32 p-4">
                        <InternacionalButton />
                    </li>
                    <li className="border-b w-32 p-4">
                        <FotosButton />
                    </li>
                </ul>
            </ul>
        </nav>
    )
}