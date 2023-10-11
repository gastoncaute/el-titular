import Categories from "./HeaderComponents/Categories";
import ClulturaButton from "./HeaderComponents/Categories/CulturaButton";
import DeporteButton from "./HeaderComponents/Categories/DeporteButton";
import EconomiaButton from "./HeaderComponents/Categories/EconomiaButton";
import FotosButton from "./HeaderComponents/Categories/FotosButton";
import InternacionalButton from "./HeaderComponents/Categories/InternacionalButton";
import PolicialesButton from "./HeaderComponents/Categories/PolicialesButton";
import PoliticaButton from "./HeaderComponents/Categories/PoliticaButton";
import SociedadButton from "./HeaderComponents/Categories/SociedadButton";
import TendenciasButton from "./HeaderComponents/Categories/TendenciasButton";
import SocialButtons from "./HeaderComponents/HeaderButtons/SocialButtons";

export default function Footer() {
    return(
        <section className="w-full grid grid-cols-4 bg-gradient-to-b from-pageColor to-gradientColor text-white">
            <div className="col-start-2 col-end-4 flex flex-col justify-center items-center">
                <h1 className="text-7xl font-bold border-b w-full flex justify-center p-4">El Titular</h1>
                <div className="flex flex-col justify-center items-center p-4">
                <div className="p-4">
                    <SocialButtons />
                </div>
                    <h3 className="text-4xl m-4">Slogan de la pagina</h3>
                </div>
                <div className="p-4 flex justify-between w-full">
                    <ul className="w-full flex items-center justify-evenly">
                        <li className="border-r px-4">
                            <PolicialesButton />
                        </li>
                        <li className="border-r px-4">
                            <PoliticaButton />
                        </li>
                        <li className="border-r px-4">
                            <EconomiaButton />
                        </li>
                        <li className="border-r px-4">
                            <SociedadButton />
                        </li>
                        <li className="border-r px-4">
                            <DeporteButton />
                        </li>
                        <li className="border-r px-4">
                            <ClulturaButton />
                        </li>
                        <li className="border-r px-4">
                            <TendenciasButton />
                        </li>
                        <li className="border-r px-4">
                            <InternacionalButton />
                        </li>
                        <li className="px-4">
                            <FotosButton />
                        </li>
                    </ul>
                </div>
                <div className="w-full flex justify-center m-4">
                    <p className="p-4 text-2xl">hola@gmail.com</p>
                    <p className="p-4 text-2xl">(223) 12345678</p>
                </div>
            </div>
        </section>
    )
}