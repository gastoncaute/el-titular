import Header from "@/app/Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";

export default function Page() {
    return(
        <section className="h-screen flex flex-col justify-between">
            <Header />
            <main className="grid grid-cols-3 mx-48 my-24 text-black">
                <div className="flex items-center my-12">
                    <p className="border border-black rounded-3xl p-4">
                        Tipo de categoria
                    </p>
                </div>
                <div className="col-start-1 col-end-3 row-start-2 row-end-3 border border-black rounded-3xl  p-4">
                    <div className="row-start-1 row-end-2 mb-8">
                        <h1 className="text-5xl font-bold mb-4">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</h1>
                        <h3 className="text-2xl border-b border-black pb-4">El “Milrayitas” cayó como visitante por 105 a 71 en su debut en la Liga Nacional. Volverá a jugar el miércoles en Corrientes.</h3>
                        <h5 className="flex justify-end py-4 border-b border-black">Martes 10 de Octubre</h5>
                    </div>
                    <div className="row-start-2 row-end-3">
                        <Image 
                            src={"/images/img1.jpg"}
                            alt="Mi imagen"
                            width={1000}
                            height={500}
                        />
                        <h5 className=" py-4 border-b border-black">Epigrafe</h5>
                    </div>
                    <div className="row-start-3 row-end-4 border-b border-black pb-8">
                        <p className="my-8">Autor</p>
                        <p>Un colectivo perdió el control y chocó contra un árbol durante la mañana de este martes en el barrio Villa Primera de Mar del Plata. Doce personas debieron ser asistidas por un ambulancias del Sistema de Atención Médica de Emergencias (SAME).
                        <br />
                        Según confirmaron fuentes oficiales a Qué digital, el siniestro vial se produjo durante la mañana de este martes en la avenida Libertad y Chaco donde un colectivo de la línea 531 que conducía un joven de 29 años perdió el control y chocó contra un árbol.</p>
                    </div>
                    <div className="row-start-4 row-end-5 p-8 flex justify-center items-center">
                        <p className="border border-black w-full h-full">Comentaios</p>
                    </div>
                </div>
                <div className="col-start-3 col-end-4 row-start-2 row-end-3 border border-black rounded-3xl ml-12 flex items-center justify-center">
                    Noticias mas recientes del tipo de categoria
                </div>
                <div className="col-start-2 col-end-3 row-span-3 border border-black rounded-3xl mt-12 flex items-center justify-center">
                    Noticias mas recientes
                </div>
            </main>
            <Footer />
        </section>
    )
}