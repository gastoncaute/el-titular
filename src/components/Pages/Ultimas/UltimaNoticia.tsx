import { Noticia } from "@/types/componentes.types";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type UltimaNoticiaProps = {
  noticia: Noticia;
};

export default function UltimaNoticia({ noticia }: UltimaNoticiaProps) {
  if (!noticia) return null;

  return (
    <Link
      href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
      className="noticia-destacada"
    >
      <div className="image-container">
        {noticia.image_principal?.imagen && (
          <Image
            src={modifyImageUrl(noticia.image_principal.imagen.asset._ref)}
            alt={noticia.image_principal.epigrafe || noticia.title}
            width={1500}
            height={600}
            priority
            style={{
              objectFit: "cover",
              width: "100%",
              maxHeight: "500px",
            }}
          />
        )}

        {!noticia.image_principal?.imagen && noticia.image_principal?.video && (
          <video
            controls
            style={{
              objectFit: "cover",
              width: "100%",
              maxHeight: "500px",
            }}
          >
            <source
              src={modifyVideoFileUrl(noticia.image_principal.video.asset._ref)}
              type="video/mp4"
            />
          </video>
        )}

        <div className="text-overlay">
          <span className="badge-categoria">{noticia.categoria}</span>
          <h1>{noticia.title}</h1>
          {noticia.bajada && <h2>{noticia.bajada}</h2>}
        </div>
      </div>
    </Link>
  );
}
