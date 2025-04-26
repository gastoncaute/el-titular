import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";

export default async function Recientes() {
  const noticias = await obtenerNoticias();
  const ultimaNoticia = noticias[0];
  const siguientesNoticias = noticias.slice(1, 7);

  return (
    <section className="noticia-grid">
      <div className="noticia-destacada">
        <div className="image-container">
          {ultimaNoticia.image_principal?.imagen && (
            <Image
              src={modifyImageUrl(
                ultimaNoticia.image_principal.imagen?.asset?._ref
              )}
              alt={ultimaNoticia.image_principal.epigrafe}
              width={1500}
              height={600}
              className="noticia-imagen"
            />
          )}
          {ultimaNoticia.image_principal?.video && (
            <video controls className="noticia-imagen">
              <source
                src={modifyVideoFileUrl(
                  ultimaNoticia.image_principal.video.asset._ref
                )}
                type="video/mp4"
              />
            </video>
          )}
          <div className="text-overlay">
            <h1>
              <Link href={`/pages/noticepage/${ultimaNoticia.title}`}>
                {ultimaNoticia.title}
              </Link>
            </h1>
            <h2>{ultimaNoticia.bajada}</h2>
          </div>
        </div>
      </div>

      <div className="noticias-secundarias">
        {siguientesNoticias.slice(0, 2).map((noticia: Noticia) => (
          <Link
            href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
            key={noticia._id}
            className="noticia-secundaria"
          >
            <h1>{noticia.title}</h1>
            {noticia.image_principal?.imagen && (
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
            {noticia.image_principal?.video && (
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
              </video>
            )}
          </Link>
        ))}
      </div>

      <article className="noticias-grid">
        {siguientesNoticias.slice(2).map((noticia: Noticia) => (
          <Link
            href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
            key={noticia._id}
            className="noticia-grid-item"
          >
            <h1>{noticia.title}</h1>
            {noticia.image_principal?.imagen && (
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
            {noticia.image_principal?.video && (
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
              </video>
            )}
          </Link>
        ))}
      </article>
    </section>
  );
}
