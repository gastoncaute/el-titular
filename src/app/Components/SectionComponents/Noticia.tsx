import Image from "next/image";
import Link from "next/link";

export default function Noticia() {
    return(
        <section className="col-start-2 col-end-6 rounded-3xl grid grid-cols-2 grid-rows-4 mt-20 m-8">
            <div className="col-span-2 row-span-2 p-4 flex justify-center items-center">
                <Link href={"/noticepage"} className="w-full h-full grid grid-cols-2 border rounded-3xl border-black py-8">
                    <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-black">
                        <Image 
                        src={"/images/img1.jpg"}
                        alt="Mi imagen"
                        width={500}
                        height={265}
                        />
                    </div>
                    <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4 text-black">
                        <p className="text-4xl mb-8 font-bold">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</p>
                        <p className="text-xl">El “Milrayitas” cayó como visitante por 105 a 71 en su debut en la Liga Nacional. Volverá a jugar el miércoles en Corrientes.</p>
                    </div>
                </Link>
            </div>
            <div className="col-start-1 col-end-2 row-start-3 row-end-4 p-4 flex justify-center items-center">
                <Link href={""} className="w-full h-full grid grid-cols-2 border rounded-3xl border-black py-4">
                    <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-black p-4">
                        <Image 
                            src={"/images/img1.jpg"}
                            alt="Mi imagen"
                            width={250}
                            height={150}
                        />
                    </div>
                    <div className="col-start-2 col-end-3 flex items-center p-4 text-black">
                        <p className="text-xl font-bold">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</p>
                    </div>
                </Link>
            </div>
            <div className="col-start-2 col-end-3 row-start-3 row-end-4 p-4 flex justify-center items-center">
                <Link href={""} className="w-full h-full grid grid-cols-2 border rounded-3xl border-black py-4">
                    <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-black p-4">
                        <Image 
                            src={"/images/img1.jpg"}
                            alt="Mi imagen"
                            width={250}
                            height={150}
                        />
                    </div>
                    <div className="col-start-2 col-end-3 flex items-center justify-center p-4 text-black">
                        <p className="text-xl font-bold">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</p>
                    </div>
                </Link>
            </div>
            <div className="col-start-1 col-end-2 row-start-4 row-end-5 p-4 flex justify-center items-center">
                <Link href={""} className="w-full h-full grid grid-cols-2 border rounded-3xl border-black py-4">
                    <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-black p-4">
                        <Image 
                            src={"/images/img1.jpg"}
                            alt="Mi imagen"
                            width={250}
                            height={150}
                        />
                    </div>
                    <div className="col-start-2 col-end-3 flex items-center p-4 text-black">
                        <p className="text-xl font-bold">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</p>
                    </div>
                </Link>
            </div>
            <div className="col-start-2 col-end-3 row-start-4 row-end-5 p-4 flex justify-center items-center">
                <Link href={""} className="w-full h-full grid grid-cols-2 border rounded-3xl border-black py-4">
                    <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-black p-4">
                        <Image 
                            src={"/images/img1.jpg"}
                            alt="Mi imagen"
                            width={250}
                            height={150}
                        />
                    </div>
                    <div className="col-start-2 col-end-3 flex items-center p-4 text-black">
                        <p className="text-xl font-bold">Peñarol debutó en la nueva temporada con una dura derrota ante Oberá</p>
                    </div>
                </Link>
            </div>
            
        </section>
    )
}