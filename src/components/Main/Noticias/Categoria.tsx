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
  const ultimaNoticia = noticiasDeCategoria[0];

  return (
    <>
      <section key={ultimaNoticia._id} className="noticia-section">
        <div
          className={`category-noticia-container ${
            categoria.toLowerCase() === "politica"
              ? "politica-bg"
              : categoria.toLowerCase() === "actualidad"
              ? "actualidad-bg"
              : categoria.toLowerCase() === "policiales"
              ? "policiales-bg"
              : ""
          }`}
        >
          <div className="category-text-overlay">
            <Link
              href={`/pages/categorypage/${categoria}`}
              className="category-link-noticia"
            >
              {categoria}
            </Link>
            <h1>{ultimaNoticia.title}</h1>
            <h2>{ultimaNoticia.bajada}</h2>
            <Link
              href={`/pages/noticepage/${ultimaNoticia.title}`}
              className="category-leer-noticia"
            >
              LEER NOTICIA
            </Link>
          </div>
          <div className="category-image-container">
            {ultimaNoticia.image_principal &&
              ultimaNoticia.image_principal.imagen && (
                <Image
                  src={modifyImageUrl(
                    ultimaNoticia.image_principal.imagen?.asset?._ref
                  )}
                  alt={ultimaNoticia.image_principal.epigrafe}
                  width={700}
                  height={600}
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "420px",
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
                    maxHeight: "420px",
                  }}
                >
                  <source
                    src={modifyVideoFileUrl(
                      ultimaNoticia.image_principal.video.asset._ref
                    )}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
          </div>
        </div>

        <article>
          {noticiasDeCategoria.slice(1, 5).map((noticia: Noticia) => (
            <Link
              href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
              key={noticia._id}
            >
              <h1>{noticia.title}</h1>
              {noticia.image_principal && noticia.image_principal.imagen && (
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
        </article>
      </section>
    </>
  );
}
