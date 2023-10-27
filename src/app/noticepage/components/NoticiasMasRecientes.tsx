/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

export async function obtenerNoticias() {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
}

type Noticias = {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    price: number;
}

export default function NoticiasMasRecientes() {
    const titulo = "Peñarol debutó en la nueva temporada con una dura derrota ante Oberá"

    const [noticias, setNoticias] = useState<Noticias[]>([])
    async function fetchNoticas() {
        const noticiasData = await obtenerNoticias()
        noticiasData.sort((a: any, b: any) => b.price - a.price)
        const primeras5Noticas = noticiasData.slice(0, 5)
        setNoticias(primeras5Noticas)
    }
    fetchNoticas()

    return (
        <div className='flex flex-col item-center p-4'>
            <Link href={'/'} className='flex justify-center mb-4 text-2xl font-bold'>
                Más Recientes
            </Link>
            {noticias.map((noticia: Noticias) => (
                <Link href={'/'} key={noticia.id} className='flex p-4 m-2 border border-black rounded-3xl'>
                    <img
                    className='mx-4'
                    src={'/images/img1.jpg'}
                    alt=""
                    width={'40%'}
                    height={'40%'}
                    />
                    <p className='text-lg font-bold pl-4 border-l border-black'>
                        {titulo}
                        <br />
                        {noticia.price}
                    </p>
                </Link>
            ))}
        </div>
    )
}
