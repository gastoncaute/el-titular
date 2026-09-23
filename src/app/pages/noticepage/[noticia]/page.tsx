import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Recientes from "@/components/Pages/Noticia/Ventanas/Recientes";
import Categoria from "@/components/Pages/Noticia/Ventanas/Categoria";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { Noticia } from "@/types/componentes.types";
import Noticias from "@/components/Pages/Noticia/Noticia";

export default async function Page({
  params,
}: {
  params: { noticia: string };
}) {
  const noticias = await obtenerNoticias();
  const tituloDecodificado = decodeURIComponent(params.noticia);

  const noticiaActual =
    noticias.find((n: Noticia) => n.title === tituloDecodificado) ||
    noticias[0];

  return (
    <>
      <Header />
      <main className="notice-main-container">
        {/* Breadcrumb / Migas de pan */}
        <nav className="notice-breadcrumb">
          <a href="/">Inicio</a> &rsaquo;{" "}
          <a href={`/pages/categorypage/${noticiaActual.categoria}`}>
            {noticiaActual.categoria}
          </a>{" "}
          &rsaquo; <span>{noticiaActual.title}</span>
        </nav>

        {/* Layout Principal: Columna izquierda (Noticia) + Columna derecha (Sidebar) */}
        <div className="notice-grid-layout">
          <article className="notice-content-area">
            <Noticias noticia={noticiaActual} />
          </article>

          <aside className="notice-sidebar-area">
            <Recientes />
          </aside>
        </div>

        {/* Grilla Inferior: Más recientes de la misma categoría */}
        <section className="notice-bottom-section">
          <Categoria categoria={noticiaActual.categoria} />
        </section>
      </main>
      <Footer />
    </>
  );
}
