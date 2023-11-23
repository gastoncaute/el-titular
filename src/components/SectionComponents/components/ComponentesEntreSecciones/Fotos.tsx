import { Foto } from "@/types/componentes.types";
import { modifyImageUrl } from "@/utils/modifyCodes";
import { obtenerFotos } from "@/utils/obtenerFotos";
import Image from "next/image";
import React from "react";

export default async function Fotos({ categoria }: { categoria: any }) {
  const fotos = await obtenerFotos();
  const fotosFiltradas = fotos.filter((foto: Foto) => {
    return (
      (categoria === "Politica" && foto.categoria === "Infografias") ||
      (categoria === "Sociedad" && foto.categoria === "Fotografias")
    );
  });
  const title = categoria === "Politica" ? "Infografias" : "Fotografias";

  return (
    <section className="col-start-2 col-end-7 flex flex-col bg-gradient-to-b from-pageColor to-gradientColor w-max m-auto p-8 pt-4 border border-pageColor rounded-3xl fotos_widget_section text-white">
      <h1 className="m-auto pb-2 text-3xl font-bold fotos_widget_title">
        {title}
      </h1>
      <section className="flex">
        {fotosFiltradas.slice(0, 2).map((foto: Foto, index: number) => (
          <article
            key={index}
            className="px-4 m-auto flex flex-col items-center noticias_title fotos_widget_article"
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
