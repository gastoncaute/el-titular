'use client'
import React, {useEffect, useState} from "react";
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

export default function Title() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <section
            className={`flex flex-col items-center justify-center fixed transform transition-transform duration-1500
            ${scrollY ? '-translate-y-24' : 'translate-y-0'}
            `}
        >
            <div className="flex justify-center items-center bg-gradient-to-b from-pageColor to-gradientColor rounded-b-3xl border-l border-r border-b border-white w-65rem h-24">
                <h1 className="font-bold text-4xl">El Titular</h1>
            </div>
            <div className="flex items-center bg-gradient-to-b from-pageColor to-gradientColor rounded-b-3xl border-l border-r border-b border-white w-60rem h-12 px-4">
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
        </section>
    )
}