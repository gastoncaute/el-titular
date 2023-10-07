'use client'
import { useState } from 'react'
export default function NavBar() {
    return(
        <nav className="bg-gradient-to-b from-pageColor to-gradientColor w-96 h-screen flex flex-col absolute p-7 -ml-8 mt-1.5 animate-slideIn">
            <ul>
                <li>Inicio</li>
                <li>Reds Sociales</li>
                <li>Contáctanos</li>
                <li>Fulbo</li>
            </ul>
        </nav>
    )
}