import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import Videos from "./ComponentesEntreSecciones/Videos";

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
    <>
      <article className="col-start-2 col-end-7 grid grid-cols-3 rounded-3xl m-8 border border-pageColor masRecientes_main_section">
        {noticias.map((noticia: Noticia, index: number) => {
          const noticeImageUrl = noticeImageUrls[index];
          if (index >= 6) {
            return null;
          }
          return (
            <div
              key={noticia._id}
              className={
                index === 0
                  ? "col-start-1 col-end-3 row-start-1 row-end-3 p-4"
                  : index === 1
                  ? "col-start-3 col-end-4 row-start-1 row-end-2 p-4"
                  : index === 2
                  ? "col-start-3 col-end-4 row-start-2 row-end-3 p-4"
                  : index === 3
                  ? "col-start-1 col-end-2 row-start-3 row-end-4 p-4"
                  : index === 4
                  ? "col-start-2 col-end-3 row-start-3 row-end-4 p-4"
                  : "col-start-3 col-end-4 row-start-3 row-end-4 p-4 section_notice_none"
              }
            >
              <Link
                href={`/pages/noticepage/${noticia.title}`}
                className="w-full h-full flex flex-col border rounded-3xl border-pageColor principal_page_ultimasNoticias_link"
              >
                <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-auto p-4 ultimasNoticias_title_component">
                  <h1
                    className={
                      index === 0
                        ? "text-4xl font-bold principal_page_title noticias_title"
                        : "text-2xl font-bold principal_page_title noticias_title"
                    }
                  >
                    {noticia.title}
                  </h1>
                  <Image
                    className={
                      index === 0
                        ? "main_section_image"
                        : "main_section_image_second"
                    }
                    src={noticeImageUrl}
                    alt={noticia.title}
                    height={index === 0 ? 100 : 130}
                    width={index === 0 ? 1000 : 350}
                  />
                  {index === 0 && (
                    <h2 className="text-2xl principal_page_bajada">
                      {noticia.bajada}
                    </h2>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </article>
      <Videos categoria={"masRecientes"} />
    </>
  );
}
