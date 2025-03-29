import { Noticia } from "@/types/componentes.types";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function UltimaNoticiaCategoria({ params }: any) {
  const noticias = await obtenerNoticias();
  const categoriaSeleccionada = params.categoria;
  const noticiasDeCadaCategoria = noticias.filter(
    (noticia: Noticia) => noticia.categoria === categoriaSeleccionada
  );
  const ultimaNoticiaDeCategoria = noticiasDeCadaCategoria[0];
  return (
    <Link
      href={`/pages/noticepage/${encodeURIComponent(
        noticiasDeCadaCategoria[0].title
      )}`}
    >
      <div className="image-container">
        {noticiasDeCadaCategoria[0].image_principal &&
          noticiasDeCadaCategoria[0].image_principal.imagen && (
            <Image
              src={modifyImageUrl(
                noticiasDeCadaCategoria[0].image_principal.imagen?.asset?._ref
              )}
              alt={noticiasDeCadaCategoria[0].image_principal.epigrafe}
              width={1500}
              height={600}
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "600px",
              }}
            />
          )}
        {(!noticiasDeCadaCategoria[0].image_principal ||
          !noticiasDeCadaCategoria[0].image_principal.imagen) &&
          noticiasDeCadaCategoria[0].image_principal?.video && (
            <video
              controls
              width={1500}
              height={600}
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "600px",
              }}
            >
              <source
                src={modifyVideoFileUrl(
                  noticiasDeCadaCategoria[0].image_principal.video.asset._ref
                )}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        <div className="text-overlay">
          <h1>{noticiasDeCadaCategoria[0].title}</h1>
          <h2>{noticiasDeCadaCategoria[0].bajada}</h2>
        </div>
      </div>
    </Link>
  );
}
