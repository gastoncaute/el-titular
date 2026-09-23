import { Noticia } from "@/types/componentes.types";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function normalizarTexto(texto: string): string {
  if (!texto) return "";
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

interface NoticiasProps {
  params: { categoria: string };
  searchParams?: { page?: string };
}

export default async function Noticias({
  params,
  searchParams,
}: NoticiasProps) {
  const noticias = await obtenerNoticias();
  const categoriaSeleccionada = params.categoria;

  const currentPage = Number(searchParams?.page) || 1;
  const NOTICIAS_POR_PAGINA = 12;

  // Filtrado de noticias por categoría
  const noticiasDeCadaCategoria = (noticias || []).filter(
    (noticia: Noticia) =>
      normalizarTexto(noticia.categoria) ===
      normalizarTexto(categoriaSeleccionada),
  );

  if (noticiasDeCadaCategoria.length === 0) {
    return (
      <p className="sin-noticias">
        No hay noticias disponibles en esta categoría.
      </p>
    );
  }

  // Noticia destacada y bloque lateral superior
  const principal = noticiasDeCadaCategoria[0];
  const ultimas = noticiasDeCadaCategoria.slice(1, 5);

  // Grilla inferior (de la 5ta noticia en adelante)
  const restoTodas = noticiasDeCadaCategoria.slice(5);
  const totalPaginas = Math.ceil(restoTodas.length / NOTICIAS_POR_PAGINA) || 1;
  const startIndex = (currentPage - 1) * NOTICIAS_POR_PAGINA;
  const restoNoticiasPaginadas = restoTodas.slice(
    startIndex,
    startIndex + NOTICIAS_POR_PAGINA,
  );

  // Lógica para limitar las páginas mostradas: 1, 2, 3, 4 ... Última
  const renderPagination = () => {
    if (totalPaginas <= 1) return null;

    const pages = [];
    const maxVisiblePages = 4;
    const endPage = Math.min(maxVisiblePages, totalPaginas);

    // Renderiza botones del 1 al 4 (o hasta el total existente)
    for (let i = 1; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          href={`/pages/categorypage/${categoriaSeleccionada}?page=${i}`}
          className={`page-num ${i === currentPage ? "active" : ""}`}
        >
          {i}
        </Link>,
      );
    }

    // Agrega el separador (...) y la última página si el total supera las 4 páginas
    if (totalPaginas > maxVisiblePages) {
      if (currentPage > maxVisiblePages && currentPage < totalPaginas) {
        // Muestra indicador opcional si está ubicado en una página intermedia avanzada
        pages.push(
          <span key="dots" className="page-dots">
            ...
          </span>,
        );
        pages.push(
          <Link
            key={currentPage}
            href={`/pages/categorypage/${categoriaSeleccionada}?page=${currentPage}`}
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
          href={`/pages/categorypage/${categoriaSeleccionada}?page=${totalPaginas}`}
          className={`page-num ${currentPage === totalPaginas ? "active" : ""}`}
        >
          {totalPaginas}
        </Link>,
      );
    }

    return (
      <div className="cat-pagination">
        {/* Flecha Anterior */}
        {currentPage > 1 && (
          <Link
            href={`/pages/categorypage/${categoriaSeleccionada}?page=${currentPage - 1}`}
            className="page-num"
          >
            &lt;
          </Link>
        )}

        {pages}

        {/* Flecha Siguiente */}
        {currentPage < totalPaginas && (
          <Link
            href={`/pages/categorypage/${categoriaSeleccionada}?page=${currentPage + 1}`}
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
        {principal && (
          <article className="cat-destacada">
            <div className="cat-destacada-media">
              {principal.image_principal?.imagen ? (
                <Image
                  src={modifyImageUrl(
                    principal.image_principal.imagen?.asset?._ref,
                  )}
                  alt={principal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="cat-img-cover"
                />
              ) : principal.image_principal?.video ? (
                <video controls className="cat-video-cover">
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
                <span className="cat-tag">
                  {principal.categoria || principal.categoria}
                </span>
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
        )}

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
                  <span className="cat-tag-sm">
                    {item.categoria || item.categoria}
                  </span>
                  <h4>{item.title}</h4>
                </div>
                <div className="cat-sidebar-thumb">
                  {item.image_principal?.imagen ? (
                    <Image
                      src={modifyImageUrl(
                        item.image_principal.imagen?.asset?._ref,
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
        {restoNoticiasPaginadas.map((noticia: Noticia) => (
          <Link
            href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
            key={noticia._id}
            className="cat-grid-card"
          >
            <div className="cat-card-media">
              {noticia.image_principal?.imagen ? (
                <Image
                  src={modifyImageUrl(
                    noticia.image_principal.imagen?.asset?._ref,
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
              <span className="cat-tag-sm">
                {noticia.categoria || noticia.categoria}
              </span>
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
