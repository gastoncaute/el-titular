import React from "react";
import Footer from "@/components/FooterComponents/Footer";
import Header from "@/components/HeaderComponents/Header";
import Link from "next/link";
import Image from "next/image";
import NoticiasMasRecientes from "@/components/NoticiasMasRecientes";
import { obtenerNoticias, Noticia } from "@/utils/noticia";

export default async function CategoryPage({ params }: any) {
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
          <Link href={""} className="border border-black rounded-3xl p-4">
            {categoriaSeleccionadaArreglada}
          </Link>
        </div>
        <article className="col-start-1 col-end-3 border border-black rounded-3xl h-min p-4 flex flex-col items-center">
          {noticiasDeCadaCategoria
            .slice(0, 5)
            .map((noticia: Noticia, index: any) => (
              <Link
                href={`/pages/noticepage/${noticia.title}`}
                className="w-full h-min grid grid-cols-2 border rounded-3xl border-black py-8 my-8"
                key={index}
              >
                <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-black">
                  <div style={{ maxWidth: "100%", height: "auto" }}>
                    <Image
                      src={noticia.image_principal}
                      alt={noticia.title}
                      height={250}
                      width={400}
                    />
                  </div>
                </div>
                <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4">
                  <h1 className={"text-3xl mb-8 font-bold"}>{noticia.title}</h1>
                  <h2 className="text-xl">{noticia.descripcion}</h2>
                </div>
              </Link>
            ))}
          <button className="border border-black rounded-3xl p-2 w-60 text-xl font-bold">
            VER MAS
          </button>
        </article>
        <div className="col-start-3 col-end-4 border border-black rounded-3xl ml-12 flex items-center justify-center h-min">
          <NoticiasMasRecientes />
        </div>
      </section>
      <Footer />
    </>
  );
}
