'use client'
import { useState } from "react";
import NavBar from "../NavBar";

export default function BurgerButton() {
    const [menuVisible, setMenuVisible] = useState(false)
    const toggleBurgerButton = () => {
        setMenuVisible(!menuVisible)
    }
    return(
        <div>
            <button onClick={toggleBurgerButton}>
                <svg width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </button>
            <div className={`transform transition-transform duration-1500 ${menuVisible ? 'translate-x-0' : '-translate-x-full'} w-96`}>
                <NavBar />
            </div>
        </div>
    )
}