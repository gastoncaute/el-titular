import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/noticia";

export default async function NoticiasMasRecientes() {
  const noticias = await obtenerNoticias();

  const noticeRef = noticias.map(
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
        const noticeImageUrl = noticeImageUrls[index];
        return (
          <Link
            href={`/pages/noticepage/${noticia.title}`}
            key={noticia._id}
            className="flex p-4 my-2 border border-pageColor rounded-3xl noticepage_masRecientes_notices"
          >
            <Image
              className="mx-4 max-h-130px max-w-min noticepage_masRecientes_image"
              src={noticeImageUrl}
              alt={noticia.title}
              width={150}
              height={100}
            />
            <h1 className="text-lg font-bold pl-4 border-l border-pageColor flex items-center noticias_title noticepage_masRecientes_title">
              {noticia.title}
            </h1>
          </Link>
        );
      })}
    </article>
  );
}
