import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";

export default async function MasRecientes() {
  const noticias = await obtenerNoticias();
  const ultimaNoticia = noticias[0];
  const siguientesNoticias = noticias.slice(1, 5);

  return (
    <>
      <section key={ultimaNoticia._id} className="noticia-section">
        <Link href={`/pages/noticepage/${ultimaNoticia.title}`}>
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
                  Your browser does not support the video tag.
                </video>
              )}
            <div className="text-overlay">
              <h1>{ultimaNoticia.title}</h1>
              <h2>{ultimaNoticia.bajada}</h2>
            </div>
          </div>
        </Link>

        <article>
          {siguientesNoticias.map((noticia: Noticia) => (
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
