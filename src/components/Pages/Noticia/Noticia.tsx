import Image from "next/image";
import Link from "next/link";
import { Noticia, Autor } from "@/types/componentes.types";
import { PortableText } from "@portabletext/react";
import {
  formatearFecha,
  modifyImageUrl,
  modifyVideoFileUrl,
} from "@/utils/modifyCodes";
import Bloques from "./Bloques/Bloques";

type NoticiasProps = {
  noticia: Noticia;
  autor?: Autor;
};

const Noticias = ({ noticia, autor }: NoticiasProps) => {
  const nombreAutor = autor?.name ? autor.name.trim() : "Redacción El Titular";
  const fotoAutorRef = autor?.photo?.asset?._ref;
  const fechaFormateada = formatearFecha(noticia?._createdAt);

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
          {fotoAutorRef ? (
            <Image
              src={modifyImageUrl(fotoAutorRef)}
              alt={nombreAutor}
              width={28}
              height={28}
              className="author-avatar"
            />
          ) : (
            <span className="author-badge">
              {nombreAutor.substring(0, 2).toUpperCase()}
            </span>
          )}
          <span className="author-name">Redacción {nombreAutor}</span>
        </div>

        {fechaFormateada && (
          <>
            <span className="meta-divider">•</span>
            <time className="notice-date">{fechaFormateada}</time>
          </>
        )}
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
          <PortableText
            value={noticia?.copete.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, "\n"),
              })),
            }))}
          />
        </div>
      )}

      {/* Bloques de cuerpo dinámico */}
      <Bloques noticia={noticia} />

      {/* Etiquetas / Tags */}
      {/* <div className="notice-tags-container">
        <span className="tags-label">Etiquetas:</span>
        <div className="tags-list">
          <span className="tag-pill">{noticia.categoria}</span>
          {noticia.categoria && (
            <span className="tag-pill">{noticia.categoria}</span>
          )}
          <span className="tag-pill">Mar del Plata</span>
        </div>
      </div> */}
    </div>
  );
};

export default Noticias;
