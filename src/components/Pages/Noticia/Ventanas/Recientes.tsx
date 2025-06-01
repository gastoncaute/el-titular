import { Noticia } from "@/types/componentes.types";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Noticias() {
  const noticias = await obtenerNoticias();
  const categorias = ["POLITICA", "ACTUALIDAD", "POLICIALES"];

  const imagenesPorCategoria: { [key: string]: string } = {
    POLITICA: "/Banner_politica.png",
    ACTUALIDAD: "/Banner_actualidad.png",
    POLICIALES: "/Banner_policiales.png",
  };

  return (
    <>
      <ul>
        {categorias.map((categoria) => {
          const categoriaFormateada =
            categoria.charAt(0).toUpperCase() +
            categoria.slice(1).toLowerCase();
          return (
            <li key={categoria}>
              <Link href={`/pages/categorypage/${categoriaFormateada}`}>
                <Image
                  src={imagenesPorCategoria[categoria]}
                  alt={categoria}
                  width={500}
                  height={100}
                />
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="https://wa.me/5492236343332" target="#">
            <Image src={"/Edea_cuadrado.webp"} alt={"Edea"} width={100} height={100}/>
          </Link>
        </li>
      </ul>
      <Link href={"/pages/masrecientes"} className="ventana-section-h1">
        Ultimas Noticias
      </Link>
      <section>
        {noticias.slice(0, 5).map((noticia: Noticia, index: number) => {
          return (
            <Link
              href={`/pages/noticepage/${encodeURIComponent(noticia.title)}`}
              key={index}
            >
              <h2 className="ventana-section-h2">{noticia.title}</h2>
              {noticia.image_principal && noticia.image_principal.imagen && (
                <Image
                  src={modifyImageUrl(
                    noticia.image_principal.imagen?.asset?._ref
                  )}
                  alt={noticia.image_principal.epigrafe}
                  width={400}
                  height={150}
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "200px",
                  }}
                />
              )}
              {(!noticia.image_principal || !noticia.image_principal.imagen) &&
                noticia.image_principal?.video && (
                  <video
                    controls
                    width={400}
                    height={150}
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      maxHeight: "200px",
                    }}
                  >
                    <source
                      src={modifyVideoFileUrl(
                        noticia.image_principal.video.asset._ref
                      )}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
            </Link>
          );
        })}
      </section>
    </>
  );
}
