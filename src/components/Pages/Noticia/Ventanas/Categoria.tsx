import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticiasRelacionadas } from "@/utils/obtenerNoticia";
import { modifyImageUrl } from "@/utils/modifyCodes";

export default async function Categoria({ categoria }: { categoria: string }) {
  const noticiasRelacionadas = await obtenerNoticiasRelacionadas(categoria, 5);

  return (
    <div className="related-section">
      <div className="related-header">
        <h2>Más recientes de {categoria}</h2>
        <Link href={`/pages/categorypage/${encodeURIComponent(categoria)}`} className="related-link">
          Ver más &rarr;
        </Link>
      </div>

      <div className="related-grid">
        {noticiasRelacionadas.map((noticia: Noticia) => (
          <Link key={noticia._id} href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`} className="related-card">
            <div className="related-media">
              {noticia.image_principal?.imagen ? (
                <Image
                  src={modifyImageUrl(noticia.image_principal.imagen.asset._ref, 500)}
                  alt={noticia.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="related-img"
                />
              ) : <div className="related-placeholder" />}
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
