'use client'
import { useState } from 'react'
export default function Aside() {
    return(
        <aside className="bg-gray-600 w-80 h-screen flex flex-col p-7 fixed -translate-x-full">
            <button>
                <svg width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Reds Sociales</li>
                    <li>Contáctanos</li>
                    <li>Fulbo</li>
                </ul>
            </nav>
        </aside>
    )
}