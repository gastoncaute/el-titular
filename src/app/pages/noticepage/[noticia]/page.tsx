import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Recientes from "@/components/Pages/Noticia/Ventanas/Recientes";
import Categoria from "@/components/Pages/Noticia/Ventanas/Categoria";
import { obtenerNoticiaPorTitulo } from "@/utils/obtenerNoticia";
import Noticias from "@/components/Pages/Noticia/Noticia";
import { obtenerAutorPorReferencia } from "@/utils/obtenerAutor";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { noticia: string };
}) {
  const tituloDecodificado = decodeURIComponent(params.noticia);
  const noticiaActual = await obtenerNoticiaPorTitulo(tituloDecodificado);

  if (!noticiaActual) notFound();

  const refAutorNoticia = noticiaActual.autor?._ref;
  const autorActual = await obtenerAutorPorReferencia(refAutorNoticia);

  return (
    <>
      <Header />
      <main className="notice-main-container">
        <nav className="notice-breadcrumb">
          <a href="/">Inicio</a> &rsaquo;{" "}
          <a
            href={`/pages/categorypage/${encodeURIComponent(noticiaActual.categoria)}`}
          >
            {noticiaActual.categoria}
          </a>{" "}
          &rsaquo; <span>{noticiaActual.title}</span>
        </nav>

        <div className="notice-grid-layout">
          <article className="notice-content-area">
            <Noticias
              noticia={noticiaActual}
              autor={autorActual ?? undefined}
            />
          </article>

          <aside className="notice-sidebar-area">
            <Recientes tituloActual={noticiaActual.title} />{" "}
          </aside>
        </div>

        <section className="notice-bottom-section">
          <Categoria
            categoria={noticiaActual.categoria}
            idNoticiaActual={noticiaActual._id}
          />{" "}
        </section>
      </main>
      <Footer />
    </>
  );
}
