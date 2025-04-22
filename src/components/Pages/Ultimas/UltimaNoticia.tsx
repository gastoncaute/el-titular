import { Noticia } from "@/types/componentes.types";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function UltimaNoticia() {
  const noticias = await obtenerNoticias();
  const ultimaNoticia = noticias[0];

  return (
    <Link
      href={`/pages/noticepage/${encodeURIComponent(ultimaNoticia.title)}`}
      className="noticia-destacada"
    >
      <div className="image-container">
        {ultimaNoticia.image_principal &&
          ultimaNoticia.image_principal.imagen && (
            <Image
              src={modifyImageUrl(
                ultimaNoticia.image_principal.imagen?.asset?._ref
              )}
              alt={ultimaNoticia.image_principal.epigrafe}
              width={1500}
              height={600}
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "600px",
              }}
            />
          )}
        {(!ultimaNoticia.image_principal ||
          !ultimaNoticia.image_principal.imagen) &&
          ultimaNoticia.image_principal?.video && (
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
                  ultimaNoticia.image_principal.video.asset._ref
                )}
                type="video/mp4"
              />
              Tu navegador no soporta el video.
            </video>
          )}
        <div className="text-overlay">
          <h1>{ultimaNoticia.title}</h1>
          <h2>{ultimaNoticia.bajada}</h2>
        </div>
      </div>
    </Link>
  );
}
