import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/noticia";

export default async function MasRecientesDeCategoria({ categoria }: { categoria: string }) {
  const noticias = await obtenerNoticias();
  const categoriaSeleccionada = categoria;
  const noticiasDeCadaCategoria = noticias.filter(
    (noticia: Noticia) => noticia.categoria === categoriaSeleccionada
  );

  return (
    <article className="flex flex-col item-center p-4">
      <h1 className="flex justify-center border-b border-black pb-2 mb-2">
        <Link
          href={"/"}
          className="p-2 px-4 text-2xl font-bold button rounded-3xl border border-transparent"
        >
          Más recientes de {categoriaSeleccionada}
        </Link>
      </h1>
      {noticiasDeCadaCategoria.slice(0, 5).map((noticia: Noticia) => (
        <Link
          href={`/pages/noticepage/${noticia.title}`}
          key={noticia._id}
          className="flex p-4 m-2 border border-black rounded-3xl"
        >
          <Image
            className="mx-4"
            src={noticia.image_principal}
            alt={noticia.title}
            width={150}
            height={100}
          />
          <p className="text-lg font-bold pl-4 border-l border-black">
            {noticia.title}
          </p>
        </Link>
      ))}
    </article>
  );
}
