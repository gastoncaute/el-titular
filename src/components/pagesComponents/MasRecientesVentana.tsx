import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { modifyImageUrl } from "@/utils/modifyCodes";

export default async function NoticiasMasRecientes({
  context,
}: {
  context: any;
}) {
  const noticias = await obtenerNoticias();
  const noticePage = "noticePage";

  return (
    <article className="flex flex-col item-center p-4 border border-pageColor rounded-3xl">
      <h1 className="flex justify-center border-b border-pageColor pb-2 mb-2">
        <Link
          href={"/pages/masrecientes"}
          className="p-2 px-4 text-2xl font-bold button rounded-3xl border border-transparent noticepage_masRecientes_category"
        >
          Más Recientes
        </Link>
      </h1>

      {noticias.slice(0, 5).map((noticia: Noticia, index: number) => {
        return (
          <Link
            href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
            key={noticia._id}
            className={`${
              context === noticePage
                ? "grid grid-cols-2 p-4 my-2 border border-pageColor rounded-3xl noticepage_masRecientes_notices"
                : "flex flex-col p-4 my-2 border border-pageColor rounded-3xl noticepage_masRecientes_notices"
            }`}
          >
            <Image
              className="col-start-1 col-end-2 flex items-center justify-center mx-4 noticepage_masRecientes_image"
              src={modifyImageUrl(noticia.image_principal.imagen.asset._ref)}
              alt={noticia.title}
              width={1000}
              height={1000}
            />
            <h1
              className={`${
                context === noticePage
                  ? "col-start-2 col-end-3 text-4xl font-bold pl-4 border-l border-pageColor flex items-center noticias_title noticepage_masRecientes_title max-w-sm"
                  : "col-start-2 col-end-3 text-xl font-bold mt-4 pl-4 flex items-center noticias_title noticepage_masRecientes_title max-w-sm"
              }`}
            >
              {noticia.title}
            </h1>
          </Link>
        );
      })}
    </article>
  );
}
