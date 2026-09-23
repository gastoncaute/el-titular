import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { PortableText } from "@portabletext/react";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import Bloques from "./Bloques/Bloques";

type NoticiasProps = {
  noticia: Noticia;
};

const Noticias = ({ noticia }: NoticiasProps) => {
  return (
    <div className="noticia-wrapper">
      <Link
        href={`/pages/categorypage/${noticia.categoria}`}
        className="notice-category-tag"
      >
        {noticia.categoria}
      </Link>

      <h1 className="notice-title">{noticia?.title}</h1>

      {noticia?.bajada && <p className="notice-subtitle">{noticia.bajada}</p>}

      {/* Meta datos de la nota */}
      <div className="notice-meta-bar">
        <div className="notice-author-info">
          <span className="author-badge">ET</span>
          <span className="author-name">Redacción El Titular</span>
        </div>
        <span className="meta-divider">•</span>
        <time className="notice-date">24 de agosto de 2026, 10:30</time>

        <div className="notice-share-buttons">
          <span>Compartir:</span>
        </div>
      </div>

      {/* Imagen / Video Principal */}
      <div className="noticia-media">
        {noticia.image_principal?.imagen && (
          <Image
            className="noticia-imagen"
            src={modifyImageUrl(noticia.image_principal.imagen.asset._ref)}
            alt={noticia.title}
            height={600}
            width={1000}
            priority
          />
        )}
        {noticia.image_principal?.video && !noticia.image_principal?.imagen && (
          <video controls className="noticia-video">
            <source
              src={modifyVideoFileUrl(noticia.image_principal.video.asset._ref)}
              type="video/mp4"
            />
          </video>
        )}
        <p className="noticia-epigrafe">
          <PortableText value={noticia.image_principal.epigrafe} />
        </p>
      </div>

      {/* Copete / Introducción */}
      {noticia?.copete && (
        <div className="noticia-copete">
          <PortableText value={noticia.copete} />
        </div>
      )}

      {/* Bloques de cuerpo dinámico */}
      <Bloques noticia={noticia} />

      {/* Etiquetas / Tags */}
      <div className="notice-tags-container">
        <span className="tags-label">Etiquetas:</span>
        <div className="tags-list">
          <span className="tag-pill">{noticia.categoria}</span>
          {noticia.categoria && (
            <span className="tag-pill">{noticia.categoria}</span>
          )}
          <span className="tag-pill">Mar del Plata</span>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
