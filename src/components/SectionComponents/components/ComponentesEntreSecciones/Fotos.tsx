import { Foto } from "@/types/componentes.types";
import { modifyImageUrl } from "@/utils/modifyCodes";
import { obtenerFotos } from "@/utils/obtenerFotos";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Fotos({ categoria }: { categoria: any }) {
  const fotos = await obtenerFotos();
  const fotosFiltradas = fotos.filter((foto: Foto) => {
    return (
      (categoria === "Policiales" && foto.categoria === "Infografias") ||
      (categoria === "Actualidad" && foto.categoria === "Fotografias")
    );
  });
  const title = categoria === "Policiales" ? "Infografias" : "Fotografias";
  if (fotosFiltradas.length === 0) {
    return null;
  }

  return (
    <section className="col-start-2 col-end-7 flex flex-col bg-gradient-to-b from-pageColor to-gradientColor w-max m-auto p-8 pt-4 border border-pageColor rounded-3xl fotos_widget_section text-white">
      <Link
        href={`/pages/fotospage/${title}`}
        className="m-auto p-2 text-3xl font-bold fotos_widget_title border border-transparent rounded-3xl fotos_widget_buttons"
      >
        {title}
      </Link>
      <section className="flex mt-2">
        {fotosFiltradas.slice(0, 2).map((foto: Foto, index: number) => (
          <article
            key={index}
            className={
              index === 0
                ? "px-4 m-auto flex flex-col items-center noticias_title fotos_widget_article"
                : index === 1
                ? "px-4 m-auto flex flex-col items-center noticias_title fotos_widget_article display_none"
                : "px-4 m-auto flex flex-col items-center noticias_title fotos_widget_article display_none"
            }
          >
            <Image
              className="rounded-xl"
              src={modifyImageUrl(foto.photo.asset._ref)}
              alt={foto.title}
              height={400}
              width={400}
            />
            <h1 className="text-2xl font-bold pt-2 fotos_title">
              {foto.title}
            </h1>
          </article>
        ))}
      </section>
    </section>
  );
}
