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
    <>
      <Link
        href={`/pages/categorypage/${categoriaSeleccionada}`}
        className="ventana-section-h1"
      >
        Más recientes de {categoriaSeleccionada}
      </Link>
      <article>
        {noticiasDeCadaCategoria.slice(0, 8).map((noticia: Noticia) => {
          return (
            <Link
              href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
              key={noticia._id}
              className="noticia-card"
            >
              <h2 className="ventana-section-h2">{noticia.title}</h2>
              {noticia.image_principal && noticia.image_principal.imagen && (
                <Image
                  src={modifyImageUrl(
                    noticia.image_principal.imagen.asset._ref
                  )}
                  alt={noticia.image_principal.epigrafe}
                  width={400}
                  height={150}
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "150px",
                  }}
                />
              )}
              {(!noticia.image_principal || !noticia.image_principal.imagen) &&
                noticia.image_principal?.video && (
                  <video
                    controls
                    width={400}
                    height={150}
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      maxHeight: "150px",
                    }}
                  >
                    <source
                      src={modifyVideoFileUrl(
                        noticia.image_principal.video.asset._ref
                      )}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
            </Link>
          );
        })}
      </article>
    </>
  );
}
