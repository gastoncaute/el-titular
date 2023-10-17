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

    const categorias = ["Mas Recientes", "Policiales", 'Politica', 'Economia', 'Sociedad', 'Deporte', 'Cultura', 'Tendencias', 'Internacional', 'Fotos']


    noticias.forEach((noticia: Noticias) => {
        if (!noticiasPorCategoria[noticia.category]) {
            noticiasPorCategoria[noticia.category] = [];
        }
        noticiasPorCategoria[noticia.category].push(noticia);
    });
    for (const categoria in noticiasPorCategoria) {
        noticiasPorCategoria[categoria].sort((a, b) => b.price - a.price)
    }
    return(
        <>
            {Object.keys(noticiasPorCategoria).map((categoria) => (
                <div key={categoria} className="col-start-2 col-end-6 rounded-3xl mt-24 m-8 border border-pageColor">
                    <p className="m-4 pb-2 flex justify-center text-2xl border-b border-pageColor">
                        {categoria}
                    </p>
                    {noticiasPorCategoria[categoria].map((noticia) => (
                        <div key={noticia.id} className="col-start-1 col-end-3 p-4 flex items-center">
                            <Link href={"/noticepage"} className="w-full h-full grid grid-cols-2 border rounded-3xl border-pageColor py-8">
                                <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor">
                                    <img
                                        src={noticia.image}
                                        alt={noticia.title}
                                        width={200}
                                        height={100}
                                    />
                                </div>
                                <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4">
                                    <p className="text-5xl mb-8 font-bold">{noticia.title}</p>
                                    <p className="text-3xl">{noticia.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </>


        // <>
        //     {categorias.map((categoria, index) => (
        //         <div key={index} className="col-start-2 col-end-6 rounded-3xl mt-24 m-8 border border-pageColor">
        //             <div className="m-4 pb-2 flex justify-center text-2xl border-b border-pageColor">
        //                 <Link href={"/"}>
        //                     {categoria}
        //                 </Link>
        //             </div>
        //             <div className="grid grid-cols-2 grid-rows-4">
        //                 <div className="col-span-2 row-span-2 p-4 flex items-center">
        //                     <Link href={"/noticepage"} className="w-full h-full grid grid-cols-2 border rounded-3xl border-pageColor py-8">
        //                         <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor">
        //                             <Image
        //                             src={"/images/img1.jpg"}
        //                             alt="Mi imagen"
        //                             width={500}
        //                             height={250}
        //                             />
        //                         </div>
        //                         <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4">
        //                             <p className="text-5xl mb-8 font-bold">
        //                                 Peñarol debutó en la nueva temporada con una dura derrota ante Oberá
        //                             </p>
        //                             <p className="text-3xl">
        //                                 El “Milrayitas” cayó como visitante por 105 a 71 en su debut en la Liga Nacional. Volverá a jugar el miércoles en Corrientes.
        //                             </p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="col-start-2 col-end-3 row-start-3 row-end-4 p-4 flex justify-center items-center">
        //                     <Link href={"/noticepage"} className="w-full h-full grid grid-cols-2 border rounded-3xl border-pageColor py-4">
        //                         <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor p-4">
        //                             <Image 
        //                                 src={"/images/img1.jpg"}
        //                                 alt="Mi imagen"
        //                                 width={250}
        //                                 height={150}
        //                             />
        //                         </div>
        //                         <div className="col-start-2 col-end-3 flex items-center p-4">
        //                             <p className="text-2xl font-bold">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="col-start-1 col-end-2 row-start-4 row-end-5 p-4 flex justify-center items-center">
        //                     <Link href={"/noticepage"} className="w-full h-full grid grid-cols-2 border rounded-3xl border-pageColor py-4">
        //                         <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor p-4">
        //                             <Image 
        //                                 src={"/images/img1.jpg"}
        //                                 alt="Mi imagen"
        //                                 width={250}
        //                                 height={150}
        //                             />
        //                         </div>
        //                         <div className="col-start-2 col-end-3 flex items-center p-4">
        //                             <p className="text-2xl font-bold">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="col-start-2 col-end-3 row-start-4 row-end-5 p-4 flex justify-center items-center">
        //                     <Link href={"/noticepage"} className="w-full h-full grid grid-cols-2 border rounded-3xl border-pageColor py-4">
        //                         <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor p-4">
        //                             <Image 
        //                                 src={"/images/img1.jpg"}
        //                                 alt="Mi imagen"
        //                                 width={250}
        //                                 height={150}
        //                             />
        //                         </div>
        //                         <div className="col-start-2 col-end-3 flex items-center p-4">
        //                             <p className="text-2xl font-bold">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="col-start-1 col-end-2 row-start-3 row-end-4 p-4 flex justify-center items-center">
        //                     <Link href={"/noticepage"} className="w-full h-full grid grid-cols-2 border rounded-3xl border-pageColor py-4">
        //                         <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor p-4">
        //                             <Image 
        //                                 src={"/images/img1.jpg"}
        //                                 alt="Mi imagen"
        //                                 width={250}
        //                                 height={150}
        //                             />
        //                         </div>
        //                         <div className="col-start-2 col-end-3 flex items-center p-4">
        //                             <p className="text-2xl font-bold">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div >
        //     ))}
        // </>
    )
}