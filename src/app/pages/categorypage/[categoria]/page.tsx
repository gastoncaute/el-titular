import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { Noticia } from "@/types/componentes.types";
import Socials from "@/components/Main/Widgets/Socials";
import Recientes from "@/components/Main/Noticias/Recientes";
import TituloCategoria from "@/components/Pages/Categoria/TituloCategoria";
import Categoria from "@/components/Main/Noticias/Categoria"; // Asegúrese de la ruta correcta a Categoria
import Link from "next/link";

function normalizarTexto(texto: string): string {
  if (!texto) return "";
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default async function CategoryPage({
  params,
}: {
  params: { categoria: string };
}) {
  const noticias = await obtenerNoticias();
  const categoriaSeleccionada = params.categoria;

  // Normaliza tanto la categoría guardada en la noticia como el parámetro de la URL
  const noticiasDeCadaCategoria = (noticias || []).filter(
    (noticia: Noticia) =>
      normalizarTexto(noticia.categoria) ===
      normalizarTexto(categoriaSeleccionada),
  );

  const ultimaNoticiaDeCategoria = noticiasDeCadaCategoria[0];

  return (
    <>
      <Header />
      <main className="category-main">
        <section
          key={ultimaNoticiaDeCategoria?._id || "sin-noticias"}
          className="noticia-section"
        >
          <TituloCategoria params={params} />
          <Socials />
          {/* Se pasa la categoría procesada para que se renderice correctamente */}
          <Categoria categoria={categoriaSeleccionada} />
        </section>
      </main>
      <Footer />
    </>
  );
}
