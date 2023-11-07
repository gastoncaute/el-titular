/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
