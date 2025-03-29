/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Link from "next/link";
import Image from "next/image";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { Noticia, SearchPageProps } from "@/types/componentes.types";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";

export default async function searchPage({ params }: SearchPageProps) {
  const noticias = await obtenerNoticias();
  const busqueda = params.searchpage;

  return (
    <>
      <Header />
      <main className="category-main">
        <section className="noticia-section">
          <section className="pages-title">
            <h1>Relacionado a tu búsqueda: "{busqueda}"</h1>
          </section>
          <article className="noticias-grid">
            {noticias
              .filter((noticia: Noticia) =>
                noticia.title.toLowerCase().includes(busqueda.toLowerCase())
              )
              .slice(0, 16)
              .map((noticia: Noticia, index: number) => {
                return (
                  <Link
                    href={`/pages/noticepage/${encodeURIComponent(
                      noticia.title
                    )}`}
                    className="noticia-card"
                    key={index}
                  >
                    <h1>{noticia.title}</h1>
                    {noticia.image_principal &&
                      noticia.image_principal.imagen && (
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
                    {(!noticia.image_principal ||
                      !noticia.image_principal.imagen) &&
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
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
