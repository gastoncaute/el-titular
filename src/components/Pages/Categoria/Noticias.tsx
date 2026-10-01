import { Noticia } from "@/types/componentes.types";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import { obtenerNoticiasPorCategoria } from "@/utils/obtenerNoticia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NoticiasProps {
  params: { categoria: string };
  searchParams?: { page?: string };
}

export default async function Noticias({
  params,
  searchParams,
}: NoticiasProps) {
  const categoriaSeleccionada = decodeURIComponent(params.categoria);
  const currentPage = Math.max(1, Number(searchParams?.page) || 1);
  const NOTICIAS_POR_PAGINA = 12;

  const { total, featured, items } = await obtenerNoticiasPorCategoria(
    categoriaSeleccionada,
    currentPage,
    NOTICIAS_POR_PAGINA,
  );

  if (!featured.length) {
    return (
      <p className="sin-noticias">
        No hay noticias disponibles en esta categoría.
      </p>
    );
  }

  const principal = featured[0];
  const ultimas = featured.slice(1, 5);
  const totalPaginas = Math.max(
    1,
    Math.ceil(Math.max(0, total - 5) / NOTICIAS_POR_PAGINA),
  );

  const renderPagination = () => {
    if (totalPaginas <= 1) return null;
    const pages = [];
    const maxVisiblePages = 4;
    const endPage = Math.min(maxVisiblePages, totalPaginas);

    for (let i = 1; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          href={`/pages/categorypage/${encodeURIComponent(categoriaSeleccionada)}?page=${i}`}
          className={`page-num ${i === currentPage ? "active" : ""}`}
        >
          {i}
        </Link>,
      );
    }

    if (totalPaginas > maxVisiblePages) {
      if (currentPage > maxVisiblePages && currentPage < totalPaginas) {
        pages.push(
          <span key="dots-current" className="page-dots">
            ...
          </span>,
        );
        pages.push(
          <Link
            key={currentPage}
            href={`/pages/categorypage/${encodeURIComponent(categoriaSeleccionada)}?page=${currentPage}`}
            className="page-num active"
          >
            {currentPage}
          </Link>,
        );
      }
      pages.push(
        <span key="dots-end" className="page-dots">
          ...
        </span>,
      );
      pages.push(
        <Link
          key={totalPaginas}
          href={`/pages/categorypage/${encodeURIComponent(categoriaSeleccionada)}?page=${totalPaginas}`}
          className={`page-num ${currentPage === totalPaginas ? "active" : ""}`}
        >
          {totalPaginas}
        </Link>,
      );
    }

    return (
      <div className="cat-pagination">
        {currentPage > 1 && (
          <Link
            href={`/pages/categorypage/${encodeURIComponent(categoriaSeleccionada)}?page=${currentPage - 1}`}
            className="page-num"
          >
            &lt;
          </Link>
        )}
        {pages}
        {currentPage < totalPaginas && (
          <Link
            href={`/pages/categorypage/${encodeURIComponent(categoriaSeleccionada)}?page=${currentPage + 1}`}
            className="page-num"
          >
            &gt;
          </Link>
        )}
      </div>
    );
  };

  return (
    <div className="cat-layout-container">
      {/* SECCIÓN SUPERIOR: Destacada + Lateral "Últimas" */}
      <div className="cat-top-grid">
        {/* Noticia Principal */}
        <article className="cat-destacada">
          <div className="cat-destacada-media">
            {principal.image_principal?.imagen ? (
              <Image
                src={modifyImageUrl(
                  principal.image_principal.imagen.asset._ref,
                  1200,
                )}
                alt={principal.title}
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
                className="cat-img-cover"
              />
            ) : principal.image_principal?.video ? (
              <video controls preload="metadata" className="cat-video-cover">
                <source
                  src={modifyVideoFileUrl(
                    principal.image_principal.video.asset._ref,
                  )}
                  type="video/mp4"
                />
              </video>
            ) : (
              <div className="cat-placeholder" />
            )}
            <div className="cat-destacada-info">
              <span className="cat-tag">{principal.categoria}</span>
              <h2>{principal.title}</h2>
              {principal.bajada && (
                <p className="cat-bajada">{principal.bajada}</p>
              )}
              <Link
                href={`/pages/noticepage/${encodeURIComponent(principal.title)}`}
                className="cat-btn-leer"
              >
                Leer más &rarr;
              </Link>
            </div>
          </div>
        </article>

        {/* Lateral "Últimas de Categoria" */}
        <aside className="cat-sidebar">
          <div className="cat-sidebar-list">
            {ultimas.map((item: Noticia) => (
              <Link
                href={`/pages/noticepage/${encodeURIComponent(item.title)}`}
                key={item._id}
                className="cat-sidebar-item"
              >
                <div className="cat-sidebar-text">
                  <span className="cat-tag-sm">{item.categoria}</span>
                  <h4>{item.title}</h4>
                </div>
                <div className="cat-sidebar-thumb">
                  {item.image_principal?.imagen ? (
                    <Image
                      src={modifyImageUrl(
                        item.image_principal.imagen.asset._ref,
                        300,
                      )}
                      alt={item.title}
                      width={80}
                      height={60}
                      className="cat-img-cover"
                    />
                  ) : (
                    <div className="cat-placeholder-sm" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <div className="banner-publicidad-main">
        <p>
          <strong>Publicidad</strong>
        </p>
      </div>

      {/* SECCIÓN INFERIOR: Grilla de 12 noticias */}
      <div className="cat-cards-grid">
        {items.map((noticia: Noticia) => (
          <Link
            href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
            key={noticia._id}
            className="cat-grid-card"
          >
            <div className="cat-card-media">
              {noticia.image_principal?.imagen ? (
                <Image
                  src={modifyImageUrl(
                    noticia.image_principal.imagen.asset._ref,
                    600,
                  )}
                  alt={noticia.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="cat-img-cover"
                />
              ) : (
                <div className="cat-placeholder" />
              )}
            </div>
            <div className="cat-card-body">
              <span className="cat-tag-sm">{noticia.categoria}</span>
              <h4>{noticia.title}</h4>
            </div>
          </Link>
        ))}
      </div>

      <div className="banner-publicidad-main">
        <p>
          <strong>Publicidad</strong>
        </p>
      </div>

      {/* RENDERIZADO DE LA PAGINACIÓN */}
      {renderPagination()}
    </div>
  );
}
