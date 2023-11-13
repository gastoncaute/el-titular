import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/noticia";

export default async function NoticiasMasRecientes() {
  const noticias = await obtenerNoticias();

  return (
    <article className="flex flex-col item-center p-4 border border-pageColor rounded-3xl">
      <h1 className="flex justify-center border-b border-pageColor pb-2 mb-2">
        <Link
          href={"/pages/masrecientes"}
          className="p-2 px-4 text-2xl font-bold button rounded-3xl border border-transparent"
        >
          Más Recientes
        </Link>
      </h1>

      {noticias.slice(0, 5).map((noticia: Noticia) => (
        <Link
          href={`/pages/noticepage/${noticia.title}`}
          key={noticia._id}
          className="flex p-4 m-2 border border-pageColor rounded-3xl noticias_title"
        >
          <Image
            className="mx-4"
            src={noticia.image_principal}
            alt={noticia.title}
            width={150}
            height={100}
          />
          <p className="text-lg font-bold pl-4 border-l border-pageColor flex items-center">
            {noticia.title}
          </p>
        </Link>
      ))}
    </article>
  );
}
