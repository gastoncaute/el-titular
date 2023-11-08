/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { obtenerNoticias, Noticia } from "@/utils/noticia";

export default async function NoticiasMasRecientes() {
  const noticias = await obtenerNoticias();

  return (
    <div className="flex flex-col item-center p-4">
      <Link href={"/"} className="flex justify-center mb-4 text-2xl font-bold">
        Más Recientes
      </Link>
      {noticias.slice(0, 5).map((noticia: Noticia) => (
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
    </div>
  );
}
