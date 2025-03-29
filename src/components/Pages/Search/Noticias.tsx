/* eslint-disable react/no-unescaped-entities */
import { Noticia } from "@/types/componentes.types";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Noticias({ params }: any) {
  const noticias = await obtenerNoticias();
  const busqueda = params.searchpage;

  return (
    <main className="category-main">
      <section className="noticia-section">
        <section className="pages-title">
          <h1>Relacionado a tu búsqueda: "{busqueda}"</h1>
        </section>
        <article className="noticias-grid">
          {noticias
            .filter((noticia: Noticia) =>
              noticia.title.toLowerCase().includes(busqueda.toLowerCase())
            )
            .slice(0, 16)
            .map((noticia: Noticia, index: number) => {
              return (
                <Link
                  href={`/pages/noticepage/${encodeURIComponent(
                    noticia.title
                  )}`}
                  className="noticia-card"
                  key={index}
                >
                  <h1>{noticia.title}</h1>
                  {noticia.image_principal &&
                    noticia.image_principal.imagen && (
                      <Image
                        src={modifyImageUrl(
                          noticia.image_principal.imagen?.asset?._ref
                        )}
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
                  {(!noticia.image_principal ||
                    !noticia.image_principal.imagen) &&
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
              );
            })}
        </article>
      </section>
    </main>
  );
}
