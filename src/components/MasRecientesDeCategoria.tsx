import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/noticia";

const MasRecientesDeCategoria = ({ noticias }: { noticias: Noticia }) => {
  const fetchNoticias = async () => {
    try {
      const noticias = await obtenerNoticias();
      if (noticias.length === 0) {
        return <div>No hay noticias disponibles.</div>;
      }
      const categoriaDeseada = noticias[0].categoria;

      const noticiasDeCategoria = noticias.filter(
        (noticia: Noticia) => noticia.categoria === categoriaDeseada
      );

      return (
        <article className="flex flex-col item-center p-4">
          <h1 className="flex justify-center border-b border-black pb-2 mb-2">
            <Link
              href={"/"}
              className="p-2 px-4 text-2xl font-bold button rounded-3xl border border-transparent"
            >
              Más Recientes de {categoriaDeseada}
            </Link>
          </h1>
          {noticiasDeCategoria.slice(0, 5).map((noticia: Noticia) => (
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
    } catch (error) {
      console.error("Error al obtener noticias:", error);
      return <div>Error al cargar noticias.</div>;
    }
  };

  return <div>{fetchNoticias()}</div>;
};

export default MasRecientesDeCategoria;
