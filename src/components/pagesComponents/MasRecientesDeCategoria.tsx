import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";

export default async function MasRecientesDeCategoria({
  categoria,
}: {
  categoria: string;
}) {
  const noticias = await obtenerNoticias();
  const categoriaSeleccionada = categoria;
  const noticiasDeCadaCategoria = noticias.filter(
    (noticia: Noticia) => noticia.categoria === categoriaSeleccionada
  );

  const noticeRef = noticiasDeCadaCategoria.map(
    (noticia: Noticia) => noticia.image_principal.imagen.asset._ref
  );
  const noticeImageUrls = noticeRef.map((ref: any) => {
    const modifiedRef = String(ref)
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-webp", ".webp");
    const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
    return baseUrl + modifiedRef;
  });

  return (
    <article className="flex flex-col item-center p-4">
      <h1 className="flex justify-center border-b border-pageColor pb-2 mb-2">
        <Link
          href={
            categoriaSeleccionada === "Infografias"
              ? `/pages/infografiaspage/${categoriaSeleccionada}`
              : `/pages/categorypage/${categoriaSeleccionada}`
          }
          className="p-2 px-4 text-2xl font-bold button rounded-3xl border border-transparent"
        >
          Más recientes de {categoriaSeleccionada}
        </Link>
      </h1>
      {noticiasDeCadaCategoria
        .slice(0, 5)
        .map((noticia: Noticia, index: number) => {
          const noticeImageUrl = noticeImageUrls[index];
          return (
            <Link
              href={`/pages/noticepage/${noticia.title}`}
              key={noticia._id}
              className="flex p-4 m-2 border border-pageColor rounded-3xl noticepage_masRecientes_notices"
            >
              <Image
                className="mx-4 max-h-130px max-w-min"
                src={noticeImageUrl}
                alt={noticia.title}
                width={150}
                height={100}
              />
              <h1 className="text-lg font-bold pl-4 border-l border-pageColor flex items-center noticias_title">
                {noticia.title}
              </h1>
            </Link>
          );
        })}
    </article>
  );
}
