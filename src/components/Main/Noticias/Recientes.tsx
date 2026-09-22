import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import {
  calcularTiempoTranscurrido,
  modifyImageUrl,
  modifyVideoFileUrl,
} from "@/utils/modifyCodes";

export default async function Recientes() {
  const noticias = await obtenerNoticias();
  if (!noticias || noticias.length === 0) return null;

  const ultimaNoticia = noticias[0];
  const secundarias = noticias.slice(1, 4);
  const ultimasNoticias = noticias.slice(4, 8);

  return (
    <section className="seccion-recientes">
      {/* Grid Principal: Destacada + Secundarias laterales */}
      <div className="layout-principal">
        {/* Noticia Principal / Destacada */}
        <article className="noticia-destacada">
          <div className="image-container">
            {ultimaNoticia.image_principal?.imagen && (
              <Image
                src={modifyImageUrl(
                  ultimaNoticia.image_principal.imagen?.asset?._ref,
                )}
                alt={
                  ultimaNoticia.image_principal.epigrafe || ultimaNoticia.title
                }
                width={800}
                height={450}
                className="noticia-media"
                priority
              />
            )}
            {ultimaNoticia.image_principal?.video && (
              <video controls className="noticia-media">
                <source
                  src={modifyVideoFileUrl(
                    ultimaNoticia.image_principal.video.asset._ref,
                  )}
                  type="video/mp4"
                />
              </video>
            )}

            <div className="text-overlay">
              <span className="badge-categoria">
                {ultimaNoticia.categoria || "ACTUALIDAD"}
              </span>
              <h1>
                <Link
                  href={`/pages/noticepage/${encodeURIComponent(ultimaNoticia.title)}`}
                >
                  {ultimaNoticia.title}
                </Link>
              </h1>
              <p className="bajada">{ultimaNoticia.bajada}</p>

              <div className="meta-info">
                <span>
                  {calcularTiempoTranscurrido(ultimaNoticia._createdAt)}
                </span>
                <span className="separador">|</span>
                <Link
                  href={`/pages/noticepage/${encodeURIComponent(ultimaNoticia.title)}`}
                  className="link-leer-mas"
                >
                  Leer más &rarr;
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Noticias Secundarias (Columna derecha) */}
        <aside className="noticias-secundarias">
          {secundarias.map((noticia: Noticia) => (
            <article key={noticia._id} className="card-secundaria">
              <div className="card-secundaria-content">
                <span className="badge-categoria">
                  {noticia.categoria || "GENERAL"}
                </span>
                <h2>
                  <Link
                    href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
                  >
                    {noticia.title}
                  </Link>
                </h2>
                <span className="tiempo-hace">
                  {calcularTiempoTranscurrido(noticia._createdAt)}
                </span>
              </div>

              <div className="card-secundaria-media">
                {noticia.image_principal?.imagen ? (
                  <Image
                    src={modifyImageUrl(
                      noticia.image_principal.imagen?.asset?._ref,
                    )}
                    alt={noticia.title}
                    width={150}
                    height={100}
                    className="media-thumb"
                  />
                ) : (
                  <div className="placeholder-thumb" />
                )}
              </div>
            </article>
          ))}
        </aside>
      </div>

      {/* Sección Inferior: Últimas Noticias Grid */}
      <div className="seccion-ultimas">
        <div className="ultimas-header">
          <h3>Últimas noticias</h3>
          <Link href={"/pages/masrecientes"} className="ver-todas">
            Ver todas las noticias &rarr;
          </Link>
        </div>

        <div className="ultimas-grid">
          {ultimasNoticias.map((noticia: Noticia) => (
            <article key={noticia._id} className="card-grid">
              <div className="card-grid-media">
                {noticia.image_principal?.imagen ? (
                  <Image
                    src={modifyImageUrl(
                      noticia.image_principal.imagen?.asset?._ref,
                    )}
                    alt={noticia.title}
                    width={300}
                    height={180}
                    className="media-thumb"
                  />
                ) : (
                  <div className="placeholder-thumb" />
                )}
              </div>

              <div className="card-grid-content">
                <span className="badge-categoria">
                  {noticia.categoria || "CULTURA"}
                </span>
                <h2>
                  <Link
                    href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
                  >
                    {noticia.title}
                  </Link>
                </h2>
                <span className="tiempo-hace">
                  {calcularTiempoTranscurrido(noticia._createdAt)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
