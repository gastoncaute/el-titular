import React from "react";
import Footer from "@/components/FooterComponents/Footer";
import Header from "@/components/HeaderComponents/Header";
import Link from "next/link";
import Image from "next/image";
import NoticiasMasRecientes from "@/components/NoticiasMasRecientes";

async function obtenerNoticias() {
  const res = await fetch(
    "https://lrwm6m86.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27noticias%27%5D|order(_createdAt desc)",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (res.ok) {
    const data = await res.json();
    if (data && data.result) {
      return data.result;
    } else {
      return [];
    }
  } else {
    throw new Error("Error al obtener noticias de la API");
  }
}

interface Noticia {
  _id: string;
  bajada: string;
  descripcion: string;
  title: string;
  _createdAt: any;
  categoria: string;
  image_principal: string;
}

export default async function categoryPage({ params }: any) {
  const noticias = await obtenerNoticias();
  const categoriaSeleccionada = params.categoria;
  const categoriaSeleccionadaArreglada = categoriaSeleccionada.replace(
    /%20/g,
    " "
  );
  const noticiasDeCadaCategoria = noticias.filter(
    (noticia: Noticia) => noticia.categoria === categoriaSeleccionadaArreglada
  );

  return (
    <>
      <Header />
      <section className="grid grid-cols-3 mx-48 my-24 text-black">
        <div className="row-span-1 flex items-center mt-12 mb-4">
          <p className="border border-black rounded-3xl p-4">
            {categoriaSeleccionadaArreglada}
          </p>
        </div>
        <article className="col-start-1 col-end-3 border border-black rounded-3xl h-min p-4">
          {noticiasDeCadaCategoria.map((noticia: Noticia, index: any) => (
            <Link
              href={`/pages/noticepage/${noticia.title}`}
              className="w-full h-min grid grid-cols-2 border rounded-3xl border-black py-8 my-8"
              key={index}
            >
              <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-black">
                <Image
                  className={"max-h-220px max-w-500px"}
                  src={noticia.image_principal}
                  alt={noticia.title}
                  height={250}
                  width={400}
                />
              </div>
              <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4">
                <h1 className={"text-3xl mb-8 font-bold"}>{noticia.title}</h1>
                <h2 className="text-xl">{noticia.descripcion}</h2>
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
  );
}
