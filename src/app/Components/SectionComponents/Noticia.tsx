/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

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

export default async function Noticia() {
    const noticias = await obtenerNoticias()
    const noticiasPorCategoria: { [key: string]: Noticias[] } = {};

    const titulo = "Peñarol debutó en la nueva temporada con una dura derrota ante Oberá"
    const bajada = 'El “Milrayitas” cayó como visitante por 105 a 71 en su debut en la Liga Nacional. Volverá a jugar el miércoles en Corrientes.'

    noticias.forEach((noticia: Noticias) => {
        if (!noticiasPorCategoria[noticia.category]) {
            noticiasPorCategoria[noticia.category] = [];
        }
        noticiasPorCategoria[noticia.category].push(noticia);
    });
    for (const categoria in noticiasPorCategoria) {
        noticiasPorCategoria[categoria].sort((a, b) => b.price - a.price)
    } return (
        <>
            {Object.keys(noticiasPorCategoria).map((categoria) => (
                <div key={categoria} className="col-start-2 col-end-6 rounded-3xl mt-24 m-8 border border-pageColor">
                    <Link href={''} className="m-4 pb-2 flex justify-center text-2xl border-b border-pageColor">
                        {categoria}
                    </Link>
                    <div className="grid grid-cols-2 grid-rows-4">
                        {noticiasPorCategoria[categoria].map((noticia, index) => {
                            if (index >= 5) {
                                return null
                            } return (
                                <div
                                key={noticia.id}
                                className={
                                    index === 0 ? "col-start-1 col-end-3 row-start-1 row-end-3 p-4" :
                                    index === 1 ? "col-start-1 col-end-2 row-start-3 row-end-4 p-4" :
                                    index === 2 ? "col-start-2 col-end-3 row-start-3 row-end-4 p-4" :
                                    index === 3 ? "col-start-1 col-end-2 row-start-4 row-end-5 p-4" :
                                    "col-start-2 col-end-3 row-start-4 row-end-5 p-4"
                                }>
                                    <Link href={"/noticepage"} className="w-full h-full grid grid-cols-2 border rounded-3xl border-pageColor py-8">
                                        <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor">
                                            <img
                                                src={'/images/img1.jpg'}
                                                alt={titulo}
                                                width={index === 0 ? 500 : 220}
                                                height={index === 0 ? 250 : 130}
                                            />
                                        </div>
                                        <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4">
                                            <p className={index !== 0 ? "text-2xl font-bold" : "text-5xl mb-8 font-bold"}>
                                                {noticia.title}
                                            </p>
                                            {index === 0 && <p className="text-3xl">
                                                {bajada}
                                            </p>}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </>
    )
}