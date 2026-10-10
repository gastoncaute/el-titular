import { Noticia } from "@/types/componentes.types";
import { modifyImageUrl } from "@/utils/modifyCodes";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type RecientesProps = {
  tituloActual?: string;
};

export default async function Recientes({ tituloActual }: RecientesProps) {
  const noticias = await obtenerNoticias(6);

  const noticiasFiltradas = noticias
    .filter((noticia) => noticia.title !== tituloActual)
    .slice(0, 4);

  return (
    <div className="sidebar-container">
      <div className="sidebar-card">
        <h3 className="sidebar-title">Últimas noticias</h3>

        <div className="sidebar-list">
          {noticiasFiltradas.map((noticia: Noticia) => (
            <Link
              key={noticia._id}
              href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
              className="sidebar-item"
            >
              <div className="sidebar-item-text">
                <span className="sidebar-tag">{noticia.categoria}</span>
                <h4>{noticia.title}</h4>
                <span className="sidebar-time">Hace 2 horas</span>
              </div>

              <div className="sidebar-item-thumb">
                {noticia.image_principal?.imagen ? (
                  <Image
                    src={modifyImageUrl(
                      noticia.image_principal.imagen.asset._ref,
                      220,
                    )}
                    alt={noticia.title}
                    width={80}
                    height={60}
                    className="thumb-img"
                  />
                ) : (
                  <div className="thumb-placeholder" />
                )}
              </div>
            </Link>
          ))}
        </div>

        <Link href="/pages/masrecientes" className="sidebar-view-all">
          Ver todas las noticias &rarr;
        </Link>
      </div>

      {/* Banner Publicitario EDEA */}
      <Link
        href="https://www.edeaweb.com.ar/robo-de-energia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/edea/Fraude-NoticePage.gif"
          alt="Edea"
          width={300}
          height={300}
          className="m-auto"
        />
      </Link>
    </div>
  );
}
