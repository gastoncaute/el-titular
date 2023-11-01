import Header from "@/components/HeaderComponents/Header";
import Footer from "@/components/FooterComponents/Footer";
import Image from "next/image";
import { Tweet } from "react-tweet";
import NoticiasMasRecientes from "@/components/NoticiasMasRecientes";
import Noticia from "@/components/SectionComponents/components/Noticia";

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

export default async function Page({params}: any) {
    const titulo = 'Peñarol debutó en la nueva temporada con una dura derrota ante Oberá'
    const bajada = 'El “Milrayitas” cayó como visitante por 105 a 71 en su debut en la Liga Nacional. Volverá a jugar el miércoles en Corrientes.'
    const date = 'Martes 10 de Octubre'
    const imagen = 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60'

    const noticias = await obtenerNoticias()
    const noticiaSeleccionada = params.noticia
    const noticiaSeleccionadaArreglada = noticiaSeleccionada.replace( /%20|%26|%2C|%E2%80%93/g, (match: any) => {
        switch (match) {
            case "%20": return " ";
            case "%2C": return ",";
            case "%E2%80%93": return "-";
            case '%26': return '&';
            default: return match;
        }
    })
    const datosDeNoticiaSeleccionada = noticias.filter((noticia: Noticias) => noticia.title === noticiaSeleccionadaArreglada)




    return(
        <>
            <Header />
            {datosDeNoticiaSeleccionada.map((noticia: Noticias, index: any) => (
                <article className="grid grid-cols-3 mx-48 my-24 text-black" key={index}>
                    <div className="row-span-1 flex items-center mt-12 mb-4">
                        <p className="border border-black rounded-3xl p-4">
                            {noticia.category}
                        </p>
                    </div>
                    <div className="col-start-1 col-end-3 row-span-2 border border-black rounded-3xl  p-4">
                        <div className="row-start-1 row-end-2 mb-8">
                            <h1 className="text-5xl font-bold mb-4">
                                {noticia.title}
                            </h1>
                            <h3 className="text-2xl border-b border-black pb-4">
                                {noticia.description}
                            </h3>
                            <h5 className="flex justify-end py-4 border-b border-black">
                                {noticia.price}
                            </h5>
                        </div>
                        <div className="">
                            <Image 
                                src={noticia.image}
                                alt={noticia.title}
                                width={500}
                                height={250}
                            />
                            <h5 className=" py-4 border-b border-black">Epigrafe</h5>
                        </div>
                        <div className="border-b border-black pb-8">
                            <p className="my-8">Autor</p>
                            <p className="text-2xl">Un colectivo perdió el control y chocó contra un árbol durante la mañana de este martes en el barrio Villa Primera de Mar del Plata. Doce personas debieron ser asistidas por un ambulancias del Sistema de Atención Médica de Emergencias (SAME).
                            <br />
                            Según confirmaron fuentes oficiales a Qué digital, el siniestro vial se produjo durante la mañana de este martes en la avenida Libertad y Chaco donde un colectivo de la línea 531 que conducía un joven de 29 años perdió el control y chocó contra un árbol.
                            {/* @ts-ignore */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4YizH2DQNxs?si=4aPggxN9A0JLuvmo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </p>
                            <div>
                                <Tweet id="1712994909173510367" />
                            </div>
                        </div>
                        <div className="p-8 flex justify-center items-center">
                            <p className="border border-black w-full h-full">Comentarios</p>
                        </div>
                    </div>
                    <div className="col-start-3 col-end-4 row-span-2 border border-black rounded-3xl ml-12 flex items-center justify-center h-min">
                        Noticias mas recientes del tipo de categoria
                    </div>
                    <div className="col-start-2 col-end-3 row-span-3 border border-black rounded-3xl mt-12 flex items-center justify-center">
                        <NoticiasMasRecientes />
                    </div>
                </article>
            ))}
            <Footer />
        </>
    )
}