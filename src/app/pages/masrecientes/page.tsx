import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import UltimaNoticia from "@/components/Pages/Ultimas/UltimaNoticia";
import NoticiasFeed from "@/components/Pages/Ultimas/NoticiasFeed";

export default async function Page() {
  // Cargamos una ventana razonable. El botón "Cargar más" ya no
  // obliga a descargar las 2700+ noticias existentes.
  const noticias = await obtenerNoticias(30);
  const ultimaNoticia = noticias[0];
  const restoNoticias = noticias.slice(1);

  return (
    <>
      <Header />
      <main className="category-main-container">
        <div className="category-header">
          <h1 className="category-title">Últimas Noticias</h1>
        </div>
        {ultimaNoticia && <UltimaNoticia noticia={ultimaNoticia} />}
        <div className="category-grid-layout">
          <section className="category-content-area">
            <NoticiasFeed noticiasIniciales={restoNoticias} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
