import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";

export default async function Categoria({ categoria }: { categoria: string }) {
  const noticias = await obtenerNoticias();
  const noticiasDeCategoria = noticias.filter(
    (noticia: Noticia) => noticia.categoria === categoria
  );

  return (
    <>
      {noticiasDeCategoria.slice(0, 4).map((noticia: Noticia) => (
        <Link
          href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
          key={noticia._id}
        >
          <h1>{noticia.title}</h1>
          {noticia.image_principal && noticia.image_principal.imagen && (
            <Image
              src={modifyImageUrl(noticia.image_principal.imagen?.asset?._ref)}
              alt={noticia.image_principal.epigrafe}
              width={400}
              height={150}
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "200px",
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
                  maxHeight: "200px",
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
      ))}
    </>
  );
}
