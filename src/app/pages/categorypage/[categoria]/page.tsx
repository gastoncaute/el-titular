import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { Noticia } from "@/types/componentes.types";
import Socials from "@/components/Main/Widgets/Socials";
import Noticias from "@/components/Pages/Categoria/Noticias";
import MasRecientes from "@/components/Main/Noticias/MasRecientesPaginaPrincipal";
import UltimaNoticiaCategoria from "@/components/Pages/Categoria/UltimaNoticiaCategoria";

export default async function CategoryPage({ params }: any) {
  const noticias = await obtenerNoticias();
  const categoriaSeleccionada = params.categoria;
  const noticiasDeCadaCategoria = noticias.filter(
    (noticia: Noticia) => noticia.categoria === categoriaSeleccionada
  );
  const ultimaNoticiaDeCategoria = noticiasDeCadaCategoria[0];

  return (
    <>
      <Header />
      <main className="category-main">
        <section key={ultimaNoticiaDeCategoria._id} className="noticia-section">
          <UltimaNoticiaCategoria params={params} />
          <Socials />
          <Noticias params={params} />
        </section>
        <section className="noticia-section">
          <h1 className="category-section-h1">Ultimas Noticias</h1>
          <MasRecientes />
        </section>
      </main>
      <Footer />
    </>
  );
}
