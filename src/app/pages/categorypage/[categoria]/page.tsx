import Footer from '@/components/FooterComponents/Footer'
import Header from '@/components/HeaderComponents/Header'
import Link from 'next/link';
import Image from 'next/image';
import NoticiasMasRecientes from '@/components/NoticiasMasRecientes';

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

export default async function categoryPage({params}: any) {

    const noticias = await obtenerNoticias()

    // const titulo = "Peñarol debutó en la nueva temporada con una dura derrota ante Oberá"
    // const bajada = 'El “Milrayitas” cayó como visitante por 105 a 71 en su debut en la Liga Nacional. Volverá a jugar el miércoles en Corrientes.'

    const categoriaSeleccionada = params.categoria
    const categoriaSeleccionadaArreglada = categoriaSeleccionada.replace(/%20/g, ' ')
    const noticiasDeCadaCategoria = noticias.filter((noticia: Noticias) => noticia.category === categoriaSeleccionadaArreglada);
    noticiasDeCadaCategoria.sort((a: any, b: any) => b.price - a.price)

    return (
        <>
            <Header />
            <section className="grid grid-cols-3 mx-48 my-24 text-black">
                <p className="border border-black rounded-3xl p-4 items-center mt-16 mb-4 w-min">
                    {categoriaSeleccionadaArreglada}
                </p>
                <article className="col-start-1 col-end-3 border border-black rounded-3xl h-min p-4">
                {noticiasDeCadaCategoria.map((noticia: Noticias, index: any) => (
                    <Link href={`/pages/noticepage/${noticia.title}`} className="w-full h-min grid grid-cols-2 border rounded-3xl border-black py-8 my-8" key={index}>
                        <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-black">
                            <Image
                                className={"max-h-220px max-w-500px"}
                                src={noticia.image}
                                // src={'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60'}
                                alt={noticia.title}
                                height={250}
                                width={400}
                            />
                        </div>
                        <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4">
                            <h1 className={"text-3xl mb-8 font-bold"}>
                                {noticia.title}
                                {/* {titulo} */}
                            </h1>
                            <h2 className="text-xl">
                                {noticia.description}
                                {/* {bajada} */}
                            </h2>
                            <h3>
                                {noticia.price}
                            </h3>
                        </div>
                    </Link>
                ))}
                </article>
                <div className="col-start-3 col-end-4 border border-black rounded-3xl ml-12 flex items-center justify-center h-min">
                    <NoticiasMasRecientes />
                </div>
            </section>
            <Footer />
        </>
    )
}