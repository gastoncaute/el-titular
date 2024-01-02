import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import Videos from "./ComponentesEntreSecciones/Videos";
import { modifyImageUrl } from "@/utils/modifyCodes";

export default async function MasRecientes() {
  const noticias = await obtenerNoticias();

  return (
    <>
      <article className="col-start-2 col-end-7 grid grid-cols-3 rounded-3xl m-8 border border-pageColor masRecientes_main_section">
        {noticias.map((noticia: Noticia, index: number) => {
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
                href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
                className="w-full h-full flex flex-col border rounded-3xl border-pageColor principal_page_ultimasNoticias_link"
              >
                <div className="col-start-2 col-end-3 flex flex-col items-center justify-center p-4 px-8 ultimasNoticias_title_component">
                  <h1
                    className={
                      index === 0
                        ? "h-32 text-5xl font-bold principal_page_title noticias_title mb-8"
                        : "h-24 text-2xl font-bold principal_page_title principal_page_title_2 noticias_title mb-2"
                    }
                  >
                    {noticia.title}
                  </h1>
                  {index === 0 && (
                    <h2 className="h-min text-2xl principal_page_bajada">
                      {noticia.bajada}
                    </h2>
                  )}
                  <div
                    className={
                      index === 0
                        ? "main_section_image"
                        : "main_section_image_second"
                    }
                    style={{ maxWidth: "100%", width: "100%" }}
                  >
                    <Image
                      src={modifyImageUrl(
                        noticia.image_principal.imagen.asset._ref
                      )}
                      alt={noticia.title}
                      width={1000}
                      height={index === 0 ? 100 : 130}
                      style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </div>
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
