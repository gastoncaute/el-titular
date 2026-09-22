import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TituloCategoria from "@/components/Pages/Categoria/TituloCategoria";
import Noticias from "@/components/Pages/Categoria/Noticias";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { categoria: string };
  searchParams?: { page?: string };
}) {
  return (
    <>
      <Header />
      <main className="category-main">
        <TituloCategoria params={params} />
        <section className="category-content-container">
          <Noticias params={params} searchParams={searchParams} />
        </section>
      </main>
      <Footer />
    </>
  );
}
