'use client'
import React, {useEffect, useState} from "react";
import CategoriesButton from "./CategoriesButton";

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
                    <li className="flex justify-evenly w-full">
                        <CategoriesButton />
                    </li>
                </ul>
            </div>
        </section>
    )
}