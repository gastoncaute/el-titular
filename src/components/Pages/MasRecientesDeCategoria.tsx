import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";

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
          return (
            <Link
              href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
              key={noticia._id}
              className="flex flex-col p-4 m-2 border border-pageColor rounded-3xl noticepage_masRecientes_notices"
            >
              {noticia.image_principal && noticia.image_principal.imagen && (
                <Image
                  className="flex items-center justify-center mx-4 noticepage_masRecientes_image"
                  src={modifyImageUrl(
                    noticia.image_principal.imagen.asset._ref
                  )}
                  alt={noticia.image_principal.epigrafe}
                  height={150}
                  width={100}
                  style={{
                    maxHeight: "600px",
                    maxWidth: "100%",
                    width: "auto",
                  }}
                />
              )}
              {(!noticia.image_principal || !noticia.image_principal.imagen) &&
                noticia.image_principal?.video && (
                  <video controls>
                    <source
                      src={modifyVideoFileUrl(
                        noticia.image_principal.video.asset._ref
                      )}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              <h1 className="text-lg font-bold mt-4 pl-4 flex items-center noticias_title">
                {noticia.title}
              </h1>
            </Link>
          );
        })}
    </article>
  );
}
