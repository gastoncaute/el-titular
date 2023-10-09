'use client'
import React, {useEffect, useState} from "react";
import Categories from "./Categories";

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
        <section className="flex flex-col items-center justify-center absolute w-1/2 object-center ">
                <div
                    className={`flex items-end bg-gradient-to-b from-pageColor to-gradientColor rounded-b-3xl border-l border-r border-b border-white w-6/12 h-12 pb-3 top-24 fixed transform transition-transform duration-1000 ${scrollY ? '-translate-y-200' : 'translate-y-0'}`}
                >
                    <Categories />
                </div>
                <div
                    className={`flex justify-evenly items-center bg-gradient-to-b from-pageColor to-gradientColor rounded-b-3xl border-l border-r border-b border-white w-titleWidth h-24 absolute top-0 transform transition-transform duration-1500 ${scrollY ? '-translate-y-200' : 'translate-y-0'}`}
                >
                    <h1 className="font-bold text-4xl">El Titular</h1>
                </div>
        </section>
    )
}