import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";

function calcularTiempoTranscurrido(fechaISO: string): string {
  if (!fechaISO) return "";
  const fechaNoticia = new Date(fechaISO);
  const ahora = new Date();
  const diferenciaMs = ahora.getTime() - fechaNoticia.getTime();

  const minutos = Math.floor(diferenciaMs / (1000 * 60));
  const horas = Math.floor(diferenciaMs / (1000 * 60 * 60));
  const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

  if (minutos < 60) return `Hace ${minutos <= 0 ? 1 : minutos} min`;
  if (horas < 24) return `Hace ${horas} ${horas === 1 ? "hora" : "horas"}`;
  return `Hace ${dias} ${dias === 1 ? "día" : "días"}`;
}

function normalizarTexto(texto: string): string {
  if (!texto) return "";
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const CATEGORIAS_DEFAULT = ["Política", "Actualidad", "Policiales"];

export default async function Categoria({ categoria }: { categoria?: string }) {
  const noticias = await obtenerNoticias();
  if (!noticias || noticias.length === 0) return null;

  const categoriasAMostrar = categoria ? [categoria] : CATEGORIAS_DEFAULT;

  return (
    <section className="seccion-categorias-grid">
      {categoriasAMostrar.map((catNombre) => {
        const noticiasCat = noticias.filter(
          (n: Noticia) =>
            normalizarTexto(n.categoria) === normalizarTexto(catNombre),
        );

        if (noticiasCat.length === 0) return null;

        const noticiaPrincipal = noticiasCat[0];
        const noticiasSecundarias = noticiasCat.slice(1, 3);

        return (
          <div key={catNombre} className="columna-categoria">
            {/* Header de la Columna */}
            <div className="categoria-header">
              <h2 className="categoria-titulo">{catNombre.toUpperCase()}</h2>
              <Link
                href={`/pages/categorypage/${encodeURIComponent(
                  normalizarTexto(catNombre),
                )}`}
                className="categoria-ver-mas"
              >
                Ver más &rarr;
              </Link>
            </div>

            {/* Noticia Principal */}
            <article className="card-cat-principal">
              <div className="card-cat-media">
                {noticiaPrincipal.image_principal?.imagen ? (
                  <Image
                    src={modifyImageUrl(
                      noticiaPrincipal.image_principal.imagen?.asset?._ref,
                    )}
                    alt={noticiaPrincipal.title}
                    width={400}
                    height={220}
                    className="media-thumb"
                  />
                ) : noticiaPrincipal.image_principal?.video ? (
                  <video controls className="media-thumb">
                    <source
                      src={modifyVideoFileUrl(
                        noticiaPrincipal.image_principal.video.asset._ref,
                      )}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <div className="placeholder-thumb" />
                )}
              </div>

              <div className="card-cat-content">
                <h3>
                  <Link
                    href={`/pages/noticepage/${encodeURIComponent(
                      noticiaPrincipal.title,
                    )}`}
                  >
                    {noticiaPrincipal.title}
                  </Link>
                </h3>
                <span className="tiempo-hace">
                  {calcularTiempoTranscurrido(noticiaPrincipal._createdAt)}
                </span>
              </div>
            </article>

            {/* Noticias Secundarias */}
            <div className="lista-cat-secundarias">
              {noticiasSecundarias.map((noticia: Noticia) => (
                <article key={noticia._id} className="item-cat-secundaria">
                  <div className="thumb-container">
                    {noticia.image_principal?.imagen ? (
                      <Image
                        src={modifyImageUrl(
                          noticia.image_principal.imagen?.asset?._ref,
                        )}
                        alt={noticia.title}
                        width={90}
                        height={60}
                        className="media-thumb"
                      />
                    ) : (
                      <div className="placeholder-thumb" />
                    )}
                  </div>

                  <div className="item-content">
                    <h4>
                      <Link
                        href={`/pages/noticepage/${encodeURIComponent(
                          noticia.title,
                        )}`}
                      >
                        {noticia.title}
                      </Link>
                    </h4>
                    <span className="tiempo-hace">
                      {calcularTiempoTranscurrido(noticia._createdAt)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <div className="banner-publicidad-main-category">
              <p>
                <strong>Publicidad</strong>
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
