"use client";

import { useState } from "react";
import { Noticia } from "@/types/componentes.types";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import Image from "next/image";
import Link from "next/link";

type NoticiasFeedProps = {
  noticiasIniciales: Noticia[];
};

export default function NoticiasFeed({ noticiasIniciales }: NoticiasFeedProps) {
  const PASO = 6; // Cantidad de noticias extra por cada clic
  const [visibles, setVisibles] = useState(PASO);

  const noticiasAMostrar = noticiasIniciales.slice(0, visibles);
  const hayMas = visibles < noticiasIniciales.length;

  const handleCargarMas = () => {
    setVisibles((prev) => prev + PASO);
  };

  return (
    <div className="noticias-feed-container">
      <div className="noticias-cards-grid">
        {noticiasAMostrar.map((noticia: Noticia, index: number) => (
          <Link
            href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
            className="noticia-card"
            key={noticia._id || index}
          >
            <div className="card-media">
              {noticia.image_principal?.imagen ? (
                <Image
                  src={modifyImageUrl(
                    noticia.image_principal.imagen.asset._ref,
                  )}
                  alt={noticia.image_principal.epigrafe || noticia.title}
                  width={400}
                  height={220}
                  style={{ objectFit: "cover" }}
                />
              ) : noticia.image_principal?.video ? (
                <video controls>
                  <source
                    src={modifyVideoFileUrl(
                      noticia.image_principal.video.asset._ref,
                    )}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <div className="card-media-placeholder" />
              )}
            </div>

            <div className="card-info">
              <span className="card-category">{noticia.categoria}</span>
              <h2 className="card-title">{noticia.title}</h2>
              {noticia.bajada && (
                <p className="card-description">{noticia.bajada}</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {hayMas && (
        <div className="load-more-wrapper">
          <button onClick={handleCargarMas} className="btn-cargar-mas">
            Cargar más noticias
          </button>
        </div>
      )}
    </div>
  );
}
