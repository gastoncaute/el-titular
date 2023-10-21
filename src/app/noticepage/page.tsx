import Header from "@/components/HeaderComponents/Header";
import Footer from "../../components/FooterComponents/Footer";
import Image from "next/image";
import { Tweet } from "react-tweet";
import NoticiasMasRecientes from "./components/NoticiasMasRecientes";

export default function Page() {
    return(
        <>
            <Header />
            <section className="grid grid-cols-3 mx-48 my-24 text-black">
                <div className="row-span-1 flex items-center mt-12 mb-4">
                    <p className="border border-black rounded-3xl p-4">
                        Tipo de categoria
                    </p>
                </div>
                <div className="col-start-1 col-end-3 row-span-2 border border-black rounded-3xl  p-4">
                    <div className="row-start-1 row-end-2 mb-8">
                        <h1 className="text-5xl font-bold mb-4">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</h1>
                        <h3 className="text-2xl border-b border-black pb-4">El “Milrayitas” cayó como visitante por 105 a 71 en su debut en la Liga Nacional. Volverá a jugar el miércoles en Corrientes.</h3>
                        <h5 className="flex justify-end py-4 border-b border-black">Martes 10 de Octubre</h5>
                    </div>
                    <div className="">
                        <Image 
                            src={"/images/img1.jpg"}
                            alt="Mi imagen"
                            width={1000}
                            height={500}
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
                        <p className="border border-black w-full h-full">Comentaios</p>
                    </div>
                </div>
                <div className="col-start-3 col-end-4 row-span-2 border border-black rounded-3xl ml-12 flex items-center justify-center h-min">
                    Noticias mas recientes del tipo de categoria
                </div>
                <div className="col-start-2 col-end-3 row-span-3 border border-black rounded-3xl mt-12 flex items-center justify-center">
                    <NoticiasMasRecientes />
                </div>
            </section>
            <Footer />
        </>
    )
}