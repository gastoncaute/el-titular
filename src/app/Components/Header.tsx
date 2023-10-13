'use client'
import React, {useEffect, useState} from "react";
import BurgerButton from "./HeaderComponents/HeaderButtons/BurgerButton";
import SocialButtons from "./HeaderComponents/HeaderButtons/SocialButtons";
import Title from "./HeaderComponents/Title";

export default function Header() {
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
    return (
        <section className="flex justify-center text-white">
            <header className="grid grid-cols-4 bg-gradient-to-b from-pageColor to-gradientColor w-screen h-14 fixed ">
                <ul className="flex justify-center items-center col-start-1 col-end-2">
                    <li className="w-48 flex items-center ml-8 z-20">
                        <BurgerButton />
                    </li>
                    <li className="w-full flex items-center justify-left">
                        <a
                            href=""
                            className={
                                `flex items-center justify-center transform transition-transform duration-1000
                                ${scrollY ? 'translate-y-0' : '-translate-y-24'}
                            `}
                        >
                            El Titular
                        </a>
                    </li>
                </ul>
                <ul className="flex justify-center col-start-4 col-end-5">
                    <SocialButtons />
                </ul>
            </header>
            <Title />
        </section>
    )
}

