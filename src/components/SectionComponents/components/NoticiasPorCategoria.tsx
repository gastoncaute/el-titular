import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/noticia";

export default async function NoticiasPorCategoria({ categoria }: any) {
  const noticias = await obtenerNoticias();
  const noticiasDeCategoria = noticias.filter(
    (noticia: Noticia) => noticia.categoria === categoria
  );
  const ref = noticiasDeCategoria.map(
    (noticia: Noticia) => noticia.image_principal.imagen.asset._ref
  );
  const imageUrls = ref.map((ref: any) => {
    const modifiedRef = String(ref)
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-webp", ".webp");
    const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
    return baseUrl + modifiedRef;
  });
  return (
    <>
      <div className="grid grid-cols-2">
        {noticiasDeCategoria.map((noticia: Noticia, index: number) => {
          const imageUrl = imageUrls[index];
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
                  ? "col-start-1 col-end-2 row-start-3 row-end-4 p-4 second_section_notice"
                  : index === 2
                  ? "col-start-2 col-end-3 row-start-3 row-end-4 p-4 section_notice_none"
                  : index === 3
                  ? "col-start-1 col-end-2 row-start-4 row-end-5 p-4 section_notice_none"
                  : "col-start-2 col-end-3 row-start-4 row-end-5 p-4 section_notice_none"
              }
            >
              <Link
                href={`/pages/noticepage/${noticia.title}`}
                className="w-full h-full flex flex-col border rounded-3xl border-pageColor main_section_notice"
              >
                <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4 px-4 ultimasNoticias_title_component">
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
                        : "max-h-130px max-w-min"
                    }
                    src={imageUrl}
                    alt={noticia.title}
                    height={index === 0 ? 500 : 130}
                    width={index === 0 ? 1000 : 220}
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
      </div>
    </>
  );
}