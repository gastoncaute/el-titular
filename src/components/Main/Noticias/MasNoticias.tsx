import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import {
  calcularTiempoTranscurrido,
  modifyImageUrl,
} from "@/utils/modifyCodes";

export default async function MasNoticias() {
  const noticias = await obtenerNoticias(20);
  if (!noticias || noticias.length === 0) return null;
  const ultimasNoticias = noticias.slice(12, 20);

  return (
    <section className="seccion-recientes">
      <div className="seccion-ultimas">
        <div className="ultimas-grid">
          {ultimasNoticias.map((noticia: Noticia) => (
            <article key={noticia._id} className="card-grid">
              <div className="card-grid-media">
                {noticia.image_principal?.imagen ? (
                  <Image
                    src={modifyImageUrl(
                      noticia.image_principal.imagen?.asset?._ref,
                      300,
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
                <Link
                  href={`/pages/categorypage/${encodeURIComponent(noticia.categoria || "GENERAL")}`}
                  className="badge-categoria"
                >
                  {noticia.categoria || "CULTURA"}
                </Link>
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
