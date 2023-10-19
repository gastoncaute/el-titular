/* eslint-disable @next/next/no-img-element */
import React from 'react'

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

export default async function NoticiasMasRecientes() {
    const noticias = await obtenerNoticias()

  return (
    <div>
        {noticias.map((noticia: Noticias) => (
            <div key={noticia.id} className='p-4 flex item-center'>
                <img
                src={noticia.image}
                alt=""
                width={100}
                height={50}
                />
                {noticia.title}
                <br />
                {noticia.price}
            </div>
        ))}
    </div>
  )
}
