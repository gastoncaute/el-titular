import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/noticia";

export default async function MasRecientes() {
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
    <article className="col-start-2 col-end-6 grid grid-cols-2 rounded-3xl m-8 border border-pageColor masRecientes_main_section">
      {noticias.map((noticia: Noticia, index: number) => {
        const noticeImageUrl = noticeImageUrls[index];
        if (index >= 5) {
          return null;
        }
        return (
          <div
            key={noticia._id}
            className={
              index === 0
                ? "col-start-1 col-end-3 row-start-1 row-end-3 p-4"
                : index === 1
                ? "col-start-1 col-end-2 row-start-3 row-end-4 p-4"
                : index === 2
                ? "col-start-2 col-end-3 row-start-3 row-end-4 p-4"
                : index === 3
                ? "col-start-1 col-end-2 row-start-4 row-end-5 p-4"
                : "col-start-2 col-end-3 row-start-4 row-end-5 p-4"
            }
          >
            <Link
              href={`/pages/noticepage/${noticia.title}`}
              className="w-full h-full grid grid-cols-2 border rounded-3xl border-pageColor py-8 noticias_title principal_page_ultimasNoticias_link"
            >
              <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor ultimasNoticias_image_content">
                <Image
                  className={
                    index === 0
                      ? "max-h-350px max-w-min ultimasNoticias_image"
                      : "max-h-130px max-w-min ultimasNoticias_image"
                  }
                  src={noticeImageUrl}
                  alt={noticia.title}
                  height={index === 0 ? 250 : 130}
                  width={index === 0 ? 500 : 220}
                />
              </div>
              <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4 ultimasNoticias_title_component">
                <h1
                  className={
                    index === 0
                      ? "text-5xl mb-8 font-bold principal_page_title"
                      : "text-2xl font-bold principal_page_title"
                  }
                >
                  {noticia.title}
                </h1>
                {index === 0 && (
                  <h2 className="text-3xl principal_page_bajada">
                    {noticia.bajada}
                  </h2>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </article>
  );
}
