import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { modifyImageUrl } from "@/utils/modifyCodes";

export default async function Categoria({ categoria }: { categoria: string }) {
  const noticias = await obtenerNoticias();
  const noticiasRelacionadas = noticias.filter(
    (n: Noticia) => n.categoria === categoria,
  );

  return (
    <div className="related-section">
      <div className="related-header">
        <h2>Más recientes de {categoria}</h2>
        <Link
          href={`/pages/categorypage/${categoria}`}
          className="related-link"
        >
          Ver más &rarr;
        </Link>
      </div>

      <div className="related-grid">
        {noticiasRelacionadas.slice(0, 5).map((noticia: Noticia) => (
          <Link
            key={noticia._id}
            href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
            className="related-card"
          >
            <div className="related-media">
              {noticia.image_principal?.imagen ? (
                <Image
                  src={modifyImageUrl(
                    noticia.image_principal.imagen.asset._ref,
                  )}
                  alt={noticia.title}
                  fill
                  className="related-img"
                />
              ) : (
                <div className="related-placeholder" />
              )}
            </div>
            <div className="related-body">
              <span className="related-tag">{noticia.categoria}</span>
              <h4>{noticia.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
