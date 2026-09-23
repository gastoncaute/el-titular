import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import UltimaNoticia from "@/components/Pages/Ultimas/UltimaNoticia";
import NoticiasFeed from "@/components/Pages/Ultimas/NoticiasFeed";

export default async function Page() {
  const noticias = await obtenerNoticias();
  const ultimaNoticia = noticias[0];
  const restoNoticias = noticias.slice(1);

  return (
    <>
      <Header />
      <main className="category-main-container">
        {/* Banner o Titular Superior */}
        <div className="category-header">
          <h1 className="category-title">Últimas Noticias</h1>
        </div>

        {/* Noticia Principal Destacada */}
        {ultimaNoticia && <UltimaNoticia noticia={ultimaNoticia} />}

        {/* Layout en 2 columnas: Noticias + Publicidad */}
        <div className="category-grid-layout">
          <section className="category-content-area">
            <NoticiasFeed noticiasIniciales={restoNoticias} />
          </section>

          {/* Sidebar para publicidad */}
          <aside className="category-sidebar-area">
            <div className="ad-sticky-wrapper">
              <div className="banner-publicidad">
                <span>Publicidad</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
