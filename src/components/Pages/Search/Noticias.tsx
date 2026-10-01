/* eslint-disable react/no-unescaped-entities */
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import { buscarNoticias } from "@/utils/obtenerNoticia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Noticias({ params }: { params: { searchpage: string } }) {
  const busqueda = decodeURIComponent(params.searchpage || "").trim();
  const noticias = busqueda ? await buscarNoticias(busqueda, 16) : [];

  return (
    <main className="category-main">
      <section className="noticia-section">
        <section className="pages-title">
          <h1>Relacionado a tu búsqueda: "{busqueda}"</h1>
        </section>
        <article>
          {noticias.map((noticia) => (
            <Link
              href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
              className="noticia-card"
              key={noticia._id}
            >
              <h1>{noticia.title}</h1>
              {noticia.image_principal?.imagen && (
                <Image
                  src={modifyImageUrl(noticia.image_principal.imagen.asset._ref, 500)}
                  alt={noticia.image_principal.epigrafe || noticia.title}
                  width={400}
                  height={150}
                  style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "200px" }}
                />
              )}
              {!noticia.image_principal?.imagen && noticia.image_principal?.video && (
                <video
                  controls
                  preload="metadata"
                  width={400}
                  height={150}
                  style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "200px" }}
                >
                  <source
                    src={modifyVideoFileUrl(noticia.image_principal.video.asset._ref)}
                    type="video/mp4"
                  />
                </video>
              )}
            </Link>
          ))}
        </article>
      </section>
    </main>
  );
}
