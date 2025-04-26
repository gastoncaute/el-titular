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
    <section className="noticia-page">
      <Link
        href={`/pages/categorypage/${noticia.categoria}`}
        className="notice-category"
      >
        {noticia.categoria}
      </Link>
      <div className="noticia-contenedor">
        <div className="title-container">
          <h1>{noticia?.title}</h1>
          <h2>{noticia?.bajada}</h2>
        </div>
        <div className="noticia-media">
          {noticia.image_principal?.imagen && (
            <Image
              className="noticia-imagen"
              src={modifyImageUrl(noticia.image_principal.imagen.asset._ref)}
              alt={noticia.image_principal.epigrafe}
              height={800}
              width={1000}
            />
          )}
          {noticia.image_principal?.video &&
            !noticia.image_principal.imagen && (
              <video controls className="noticia-video">
                <source
                  src={modifyVideoFileUrl(
                    noticia.image_principal.video.asset._ref
                  )}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          <p className="noticia-epigrafe">
            <PortableText value={noticia.image_principal.epigrafe} />
          </p>
        </div>
        <p className="noticia-copete">
          <PortableText
            value={noticia?.copete.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, ""),
              })),
            }))}
          />
        </p>
        <Bloques noticia={noticia} />
      </div>
    </section>
  );
};

export default Noticias;
