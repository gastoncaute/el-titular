import Footer from "@/components/FooterComponents/Footer";
import Header from "@/components/HeaderComponents/Header";
import Autor from "@/components/pagesComponents/FotosPage/Autor";
import { Foto } from "@/types/componentes.types";
import { modifyImageUrl } from "@/utils/modifyCodes";
import { obtenerFotos } from "@/utils/obtenerFotos";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params }: any) {
  const fotos = await obtenerFotos();

  const categoriaSeleccionada = params.categoria;
  const fotosDeCategoria = fotos.filter(
    (foto: Foto) => foto.categoria === categoriaSeleccionada
  );

  return (
    <>
      <Header />
      <section className="grid grid-cols-2 mx-48 my-24 text-black fotos_main_section">
        <div className="row-span-1 col-span-2 flex flex-col justify-center items-center mt-16 mb-4 fotos_div_category_link">
          <Link
            href={""}
            className="border border-pageColor rounded-3xl p-2 px-16 text-2xl font-bold button fotos_div_link"
          >
            {categoriaSeleccionada}
          </Link>
          <Autor categoria={categoriaSeleccionada} />
        </div>

        <article className="col-start-1 col-end-3 grid grid-cols-2 border border-pageColor rounded-3xl h-min p-4 fotos_main_article">
          {fotosDeCategoria.map((foto: Foto, index: number) => {
            if (index >= 6) {
              return null;
            }
            return (
              <article
                key={index}
                className={
                  index === 0
                    ? "mx-8 m-4 col-start-1 col-end-2 row-start-1 row-end-2 px-2 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                    : index === 1
                    ? "mx-8 m-4 col-start-2 col-end-3 row-start-1 row-end-2 px-2 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                    : index === 2
                    ? "mx-8 m-4 col-start-1 col-end-2 row-start-2 row-end-3 px-2 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                    : index === 3
                    ? "mx-8 m-4 col-start-2 col-end-3 row-start-2 row-end-3 px-2 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                    : index === 4
                    ? "mx-8 m-4 col-start-1 col-end-2 row-start-3 row-end-4 px-2 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                    : "mx-8 m-4 col-start-2 col-end-3 row-start-3 row-end-4 px-2 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                }
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={modifyImageUrl(foto.photo.asset._ref)}
                    alt={foto.title}
                    height={250}
                    width={600}
                  />
                </div>
                <h1
                  className={
                    "flex items-center justify-center fotos_title text-3xl font-bold mt-4"
                  }
                >
                  {foto.title}
                </h1>
              </article>
            );
          })}
          <div className="col-start-1 col-end-3 flex justify-center items-center w-full pt-4">
            {fotosDeCategoria.length > 6 && (
              <button className="border border-pageColor rounded-3xl p-2 w-60 text-xl font-bold button">
                VER MAS
              </button>
            )}
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}
