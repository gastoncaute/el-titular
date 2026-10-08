import React from "react";
import Image from "next/image";
import Link from "next/link";
import { obtenerNoticiasRelacionadas } from "@/utils/obtenerNoticia";
import { modifyImageUrl } from "@/utils/modifyCodes";
import { Noticia } from "@/types/componentes.types";

function calcularTiempoTranscurrido(fechaISO: string): string {
  if (!fechaISO) return "";

  const fechaNoticia = new Date(fechaISO);
  const diferenciaMs = Date.now() - fechaNoticia.getTime();

  const minutos = Math.floor(diferenciaMs / (1000 * 60));
  const horas = Math.floor(diferenciaMs / (1000 * 60 * 60));
  const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

  if (minutos < 60) {
    return `Hace ${minutos <= 0 ? 1 : minutos} min`;
  }

  if (horas < 24) {
    return `Hace ${horas} ${horas === 1 ? "hora" : "horas"}`;
  }

  return `Hace ${dias} ${dias === 1 ? "día" : "días"}`;
}

export default async function Cultura() {
  const noticias = await obtenerNoticiasRelacionadas("CULTURA", 9);

  if (!noticias || noticias.length === 0) {
    return null;
  }

  return (
    <section className="seccion-cultura">
      <div className="cultura-header">
        <h2>CULTURA</h2>

        <Link href="/pages/categorypage/Cultura" className="cultura-ver-mas">
          Ver más →
        </Link>
      </div>

      <div className="cultura-grid">
        {noticias.map((noticia: Noticia) => (
          <article key={noticia._id} className="cultura-card">
            <Link
              href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
              className="cultura-imagen-link"
            >
              {noticia.image_principal?.imagen ? (
                <Image
                  src={modifyImageUrl(
                    noticia.image_principal.imagen.asset._ref,
                    500,
                  )}
                  alt={noticia.title}
                  width={500}
                  height={280}
                  className="cultura-imagen"
                />
              ) : (
                <div className="cultura-placeholder" />
              )}
            </Link>

            <div className="cultura-contenido">
              <span className="cultura-categoria">
                {noticia.categoria || "CULTURA"}
              </span>

              <h3>
                <Link
                  href={`/pages/noticepage/${encodeURIComponent(
                    noticia.title,
                  )}`}
                >
                  {noticia.title}
                </Link>
              </h3>

              <span className="cultura-tiempo">
                {calcularTiempoTranscurrido(noticia._createdAt)}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
